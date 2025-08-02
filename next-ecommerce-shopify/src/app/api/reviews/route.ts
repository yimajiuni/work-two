import { NextRequest, NextResponse } from 'next/server';

// In a real application, you would store reviews in a database
// For now, we'll use a simple in-memory storage (this will reset on server restart)
const reviews: any[] = [];

export async function POST(request: NextRequest) {
    try {
        const { productId, rating, review, customerId, customerName } = await request.json();

        // Validate required fields
        if (!productId || !rating || !review || !customerId) {
            return NextResponse.json(
                {
                    success: false,
                    error: 'Missing required fields'
                },
                { status: 400 }
            );
        }

        // Validate rating
        if (rating < 1 || rating > 5) {
            return NextResponse.json(
                {
                    success: false,
                    error: 'Rating must be between 1 and 5'
                },
                { status: 400 }
            );
        }

        // Validate review length
        if (review.length > 300) {
            return NextResponse.json(
                {
                    success: false,
                    error: 'Review must be 300 characters or less'
                },
                { status: 400 }
            );
        }

        // Check if customer has already reviewed this product
        const existingReview = reviews.find(
            r => r.productId === productId && r.customerId === customerId
        );

        if (existingReview) {
            return NextResponse.json(
                {
                    success: false,
                    error: 'You have already reviewed this product'
                },
                { status: 400 }
            );
        }

        // Create new review
        const newReview = {
            id: `review_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            productId,
            rating,
            review: review.trim(),
            customerId,
            customerName: customerName || 'Anonymous',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        // Add to storage
        reviews.push(newReview);

        console.log('Review submitted:', {
            productId,
            rating,
            reviewLength: review.length,
            customerId,
            timestamp: new Date().toISOString()
        });

        return NextResponse.json({
            success: true,
            message: 'Review submitted successfully',
            review: newReview
        });

    } catch (error) {
        console.error('Error processing review:', error);
        return NextResponse.json(
            {
                success: false,
                error: 'Internal server error. Please try again later.'
            },
            { status: 500 }
        );
    }
}

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const productId = searchParams.get('productId');

        if (!productId) {
            return NextResponse.json(
                {
                    success: false,
                    error: 'Product ID is required'
                },
                { status: 400 }
            );
        }

        // Filter reviews by product ID
        const productReviews = reviews.filter(review => review.productId === productId);

        // Calculate average rating
        const totalRating = productReviews.reduce((sum, review) => sum + review.rating, 0);
        const averageRating = productReviews.length > 0 ? totalRating / productReviews.length : 0;

        // Count ratings by star
        const ratingCounts = {
            1: productReviews.filter(r => r.rating === 1).length,
            2: productReviews.filter(r => r.rating === 2).length,
            3: productReviews.filter(r => r.rating === 3).length,
            4: productReviews.filter(r => r.rating === 4).length,
            5: productReviews.filter(r => r.rating === 5).length,
        };

        return NextResponse.json({
            success: true,
            reviews: productReviews.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()),
            summary: {
                totalReviews: productReviews.length,
                averageRating: Math.round(averageRating * 10) / 10,
                ratingCounts
            }
        });

    } catch (error) {
        console.error('Error fetching reviews:', error);
        return NextResponse.json(
            {
                success: false,
                error: 'Internal server error. Please try again later.'
            },
            { status: 500 }
        );
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const { reviewId, customerId } = await request.json();

        // Validate required fields
        if (!reviewId || !customerId) {
            return NextResponse.json(
                {
                    success: false,
                    error: 'Missing required fields'
                },
                { status: 400 }
            );
        }

        // Find the review
        const reviewIndex = reviews.findIndex(review => review.id === reviewId);

        if (reviewIndex === -1) {
            return NextResponse.json(
                {
                    success: false,
                    error: 'Review not found'
                },
                { status: 404 }
            );
        }

        const review = reviews[reviewIndex];

        // Check if the user owns this review
        if (review.customerId !== customerId) {
            return NextResponse.json(
                {
                    success: false,
                    error: 'You can only delete your own reviews'
                },
                { status: 403 }
            );
        }

        // Remove the review
        reviews.splice(reviewIndex, 1);

        console.log('Review deleted:', {
            reviewId,
            customerId,
            timestamp: new Date().toISOString()
        });

        return NextResponse.json({
            success: true,
            message: 'Review deleted successfully'
        });

    } catch (error) {
        console.error('Error deleting review:', error);
        return NextResponse.json(
            {
                success: false,
                error: 'Internal server error. Please try again later.'
            },
            { status: 500 }
        );
    }
} 