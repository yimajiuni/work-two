"use client";
import { useState, useEffect } from 'react';
import { useShopifyCart } from "@/hooks/useShopifyCart";
import { useShopifyAuth } from "@/context/shopifyAuthContext";
import { useLoginModal } from "@/context/loginContext";

interface Review {
    id: string;
    productId: string;
    rating: number;
    review: string;
    customerName: string;
    createdAt: string;
}

interface ReviewSummary {
    totalReviews: number;
    averageRating: number;
    ratingCounts: {
        1: number;
        2: number;
        3: number;
        4: number;
        5: number;
    };
}

interface ReviewTabsProps {
    productId: string;
    productTitle: string;
}

const ReviewTabs = ({ productId, productTitle }: ReviewTabsProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [reviews, setReviews] = useState<Review[]>([]);
    const [summary, setSummary] = useState<ReviewSummary | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [showReviewForm, setShowReviewForm] = useState(false);
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [review, setReview] = useState("");
    const [customerName, setCustomerName] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formError, setFormError] = useState("");

    // Use proper authentication context instead of cart existence
    const { cartId } = useShopifyCart();
    const { isAuthenticated, customer } = useShopifyAuth();
    const { openLoginModal } = useLoginModal();
    const isLoggedIn = isAuthenticated;

    const fetchReviews = async () => {
        try {
            setLoading(true);
            setError("");

            const response = await fetch(`/api/reviews?productId=${productId}`);
            const result = await response.json();

            if (result.success) {
                setReviews(result.reviews);
                setSummary(result.summary);
            } else {
                setError(result.error || "Failed to load reviews");
            }
        } catch (error) {
            console.error('Error fetching reviews:', error);
            setError("Failed to load reviews");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            fetchReviews();
        }
    }, [productId, isOpen]);

    // Pre-fill customer name when user is authenticated
    useEffect(() => {
        if (isAuthenticated && customer?.firstName) {
            setCustomerName(customer.firstName);
        }
    }, [isAuthenticated, customer]);

    const handleReviewSubmitSuccess = () => {
        setShowReviewForm(false);
        setRating(0);
        setReview("");
        setCustomerName("");
        setFormError("");
        fetchReviews(); // Refresh reviews after submission
    };

    const handleStarClick = (starValue: number) => {
        setRating(starValue);
        setFormError("");
    };

    const handleStarHover = (starValue: number) => {
        setHoverRating(starValue);
    };

    const handleStarLeave = () => {
        setHoverRating(0);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormError("");

        // Validation
        if (rating === 0) {
            setFormError("Please select a rating");
            return;
        }

        if (!review.trim()) {
            setFormError("Please write a review");
            return;
        }

        if (!customerName.trim()) {
            setFormError("Please enter your name");
            return;
        }

        if (review.length > 300) {
            setFormError("Review must be 300 characters or less");
            return;
        }

        if (!isLoggedIn) {
            setFormError("Please log in to submit a review");
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch('/api/reviews', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    productId,
                    rating,
                    review: review.trim(),
                    customerId: customer?.id || cartId, // Use customer ID from auth context if available
                    customerName: customerName.trim()
                }),
            });

            const result = await response.json();

            if (result.success) {
                handleReviewSubmitSuccess();
            } else {
                setFormError(result.error || "Failed to submit review");
            }
        } catch (error) {
            console.error('Error submitting review:', error);
            setFormError("Failed to submit review. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const getRatingText = (rating: number) => {
        switch (rating) {
            case 1: return "Poor";
            case 2: return "Fair";
            case 3: return "Good";
            case 4: return "Very Good";
            case 5: return "Excellent";
            default: return "Select Rating";
        }
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const renderStars = (rating: number) => {
        return (
            <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                        key={star}
                        className={`w-4 h-4 ${star <= rating
                            ? 'text-[#FF0707] fill-current'
                            : 'text-gray-300'
                            }`}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M12 2l3.5 7.5L24 9.5l-6 5.5 1.5 8.5L12 19.5l-7.5 3.5L7 15 0 9.5l8.5-1L12 2z" />
                    </svg>
                ))}
            </div>
        );
    };

    const renderRatingBar = (rating: number, count: number, total: number) => {
        const percentage = total > 0 ? (count / total) * 100 : 0;

        return (
            <div className="flex items-center gap-2 text-sm">
                <span className="w-3 text-gray-600">{rating}</span><span>★</span>
                <div className="flex-1 bg-gray-200 h-2">
                    <div
                        className="bg-[#FF0707] h-2 transition-all duration-300"
                        style={{ width: `${percentage}%` }}
                    />
                </div>
                <span className="w-8 text-gray-600 text-right">{count}</span>
            </div>
        );
    };

    const renderReviewForm = () => {
        if (!isLoggedIn) {
            return (
                <div className="bg-gray-50 px-6">
                    <h4 className="text-lg font-normal text-gray-900 mb-2">Write a Review</h4>
                    <p className="text-gray-600 mb-4">Please log in to write a review for this product.</p>
                    <button
                        onClick={openLoginModal}
                        className="bg-black text-white px-4 py-2 text-sm hover:bg-gray-800 transition-colors relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white hover:bg-white hover:text-black" style={{ backgroundImage: 'url(/wa-ptn-ec.svg)' }}></div>
                        <div className="relative z-10 uppercase group-hover:text-shadow-white-opaque">
                            Sign In to Review
                        </div>
                    </button>
                </div>
            );
        }

        return (
            <div className="text-left bg-white px-6 font-inter text-thin text-gray-900">
                <h4 className="text-center text-sm mb-4 font-thin">Write a Review</h4>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Product Info */}
                    <div className="text-sm uppercase font-medium">
                        <span>{productTitle}</span>
                    </div>

                    {/* Star Rating */}
                    <div>
                        <div className="flex items-center gap-2 font-inter text-thin text-black">
                            <div className="flex items-center gap-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        type="button"
                                        onClick={() => handleStarClick(star)}
                                        onMouseEnter={() => handleStarHover(star)}
                                        onMouseLeave={handleStarLeave}
                                        className="focus:outline-none"
                                    >
                                        <svg
                                            className={`w-3 h-3 transition-colors ${star <= (hoverRating || rating)
                                                ? 'text-[#FF0707] fill-current'
                                                : 'text-gray-300'
                                                }`}
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M12 2l3.5 7.5L24 9.5l-6 5.5 1.5 8.5L12 19.5l-7.5 3.5L7 15 0 9.5l8.5-1L12 2z" />
                                        </svg>
                                    </button>
                                ))}
                            </div>
                            <span className="text-xs text-gray-600 ml-2">
                                {getRatingText(hoverRating || rating)}
                            </span>
                        </div>
                    </div>

                    {/* Customer Name */}
                    <div>
                        <input
                            type="text"
                            id="customerName"
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                            maxLength={50}
                            className="w-full px-3 py-1 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-sm font-times-new-roman-italic text-thin"
                            placeholder="Enter your name"
                            disabled={isSubmitting}
                        />
                    </div>

                    {/* Review Text */}
                    <div>
                        <textarea
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                            rows={4}
                            maxLength={300}
                            className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-none placeholder:text-thin placeholder:font-times-new-roman-italic placeholder:text-sm text-sm font-times-new-roman-italic text-thin"
                            placeholder="Share your thoughts about this product..."
                            disabled={isSubmitting}
                        />
                        <div className="flex justify-between items-center mt-1">
                            <span className="text-xs text-gray-500">
                                {review.length}/300 characters
                            </span>
                            {review.length > 300 && (
                                <span className="text-xs">
                                    Too many characters
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Error Message */}
                    {formError && (
                        <div className="text-xs p-3 font-inter text-thin text-black">
                            {formError}
                        </div>
                    )}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting || rating === 0 || !review.trim() || !customerName.trim() || review.length > 300}
                        className="w-full bg-black text-white py-2 px-4 text-xs font-inter text-thin hover:bg-black border border-black hover:text-black transition-colors disabled:cursor-default relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white hover:bg-white hover:text-black" style={{ backgroundImage: 'url(/wa-ptn-ec.svg)' }}></div>
                        <div className="relative z-10 uppercase group-hover:text-shadow-white-opaque">
                            {isSubmitting ? "Submitting..." : "Submit Review"}
                        </div>
                    </button>
                </form>
            </div >
        );
    };

    const renderReviewsContent = () => {
        if (loading) {
            return (
                <div className="space-y-4">
                    <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
                </div>
            );
        }

        return (
            <div className="space-y-10 w-full mx-auto">
                {/* Review Summary - Only show when there are reviews */}
                {summary && reviews.length > 0 && (
                    <div className="p-6 text-left">
                        <div className="flex items-start justify-between mb-4 font-inter text-thin text-black">
                            <div className="flex flex-col">
                                <h3 className="text-xs">
                                    Overall Rating
                                </h3>
                                <div className="text-xs flex gap-2 mt-1">
                                    {renderStars(Math.round(summary.averageRating))}
                                </div>
                            </div>

                            {isLoggedIn && (
                                <button
                                    onClick={() => setShowReviewForm(!showReviewForm)}
                                    className="bg-black text-white hover:bg-white hover:text-black px-4 py-2 hover:bg-gray-800 transition-colors text-xs relative border border-black overflow-hidden group"
                                >
                                    <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white hover:bg-white hover:text-black" style={{ backgroundImage: 'url(/wa-ptn-ec.svg)' }}></div>
                                    <div className="relative z-10 uppercase group-hover:text-shadow-white-opaque">
                                        {showReviewForm ? "Cancel" : "Write a Review"}
                                    </div>
                                </button>
                            )}
                        </div>

                        {/* Rating Breakdown */}
                        <div className="space-y-2">
                            {[5, 4, 3, 2, 1].map((rating) => (
                                <div key={rating}>
                                    {renderRatingBar(rating, summary.ratingCounts[rating as keyof typeof summary.ratingCounts], summary.totalReviews)}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Review Form */}
                {showReviewForm && renderReviewForm()}

                {/* Reviews List */}
                <div className="">
                    {error ? (
                        <div className="text-red-600 bg-red-50 p-4">
                            {error}
                        </div>
                    ) : reviews.length === 0 ? (
                        <div className="px-10 md:px-14 lg:px-0 md:w-2xl xl:px-32 text-center py-8 text-sm font-inter text-thin text-black flex flex-col font-times-new-roman-italic text-gray-500  leading-relaxed">
                            <div className="w-6 h-6 mx-auto mb-4 flex items-center justify-center group cursor-pointer" onClick={() => setShowReviewForm(true)}>
                                <svg className="w-6 h-6 text-gray-900 group-hover:fill-black transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="text-sm">No reviews yet</h3>
                            <p>Leave the first to review this product.</p>
                            <p>Let our community knows</p>
                            <p className="mb-4">how you feel about this product.</p>
                            {!showReviewForm && (
                                <button
                                    onClick={isLoggedIn ? () => setShowReviewForm(true) : openLoginModal}
                                    className="font-inter text-thin text-xs uppercase bg-black border border-black text-white px-4 py-4 hover:bg-white hover:text-black  transition-colors"
                                >
                                    {isLoggedIn ? "Write the First Review" : "Sign In to Review"}
                                </button>
                            )}
                        </div>
                    ) : (
                        reviews.map((review) => (
                            <div key={review.id} className="p-6 border-b border-gray-200 pb-6 last:border-b-0">

                                <h3 className="text-xs mb-2">
                                    Reviews
                                </h3>
                                <div className="flex items-center gap-2 justify-between mb-2">
                                    <div className="flex items-center gap-2 text-sm">
                                        {renderStars(review.rating)}by
                                        <span className="font-inter text-thin text-gray-900 uppercase">{review.customerName}</span>
                                    </div>
                                    <span className="text-xs text-gray-900">{formatDate(review.createdAt)}</span>
                                </div>
                                <p className="text-left text-gray-700 text-m font-times-new-roman-italic">{review.review}</p>
                            </div>
                        ))
                    )}
                </div>
            </div>
        );
    };

    const handleTabClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative" data-review-component>
            {/* Tab Navigation */}
            <div className="flex justify-center mb-4 max-w-2xl w-full" data-review-tabs>
                <div className="relative px-8 py-2 overflow-visible">
                    <button
                        onClick={handleTabClick}
                        className="text-white bg-black border border-black min-w-[250px] px-2 py-4 text-xs font-inter text-thin transition-colors relative overflow-visible review-button group hover:text-black"
                        data-review-tabs
                    >
                        <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white hover:bg-white hover:text-black" style={{ backgroundImage: 'url(/wa-ptn-ec.svg)' }}></div>
                        {/* Yima Flower SVG Overlay */}
                        <div className="absolute inset-0 left-8 -top-5 flex items-center justify-center">
                            <svg
                                viewBox="0 0 100 100"
                                className="w-40 h-40"
                                style={{
                                    backgroundImage: 'url(/yima-flower.svg)',
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center'
                                }}
                            >
                                <image
                                    href="/yima-flower.svg"
                                    width="100"
                                    height="100"
                                    className="object-contain w-full h-full"
                                    preserveAspectRatio="xMidYMid meet"
                                />
                            </svg>
                        </div>

                        <span className="relative z-10 uppercase group-hover:text-shadow-white-opaque">REVIEWS</span>
                    </button>
                </div>
            </div>

            {/* Tab Content */}
            {isOpen && (
                <div className="items-center bg-white border border-gray-900 shadow-lg p-4" data-review-tabs>
                    {renderReviewsContent()}
                </div>
            )}
        </div>
    );
};

export default ReviewTabs; 