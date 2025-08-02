import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const { path, type } = await request.json();

        if (path) {
            // Revalidate specific path
            revalidatePath(path);
            console.log(`Revalidated path: ${path}`);
        } else if (type === 'collections') {
            // Revalidate all collection pages
            revalidatePath('/collections');
            revalidatePath('/collections/[handle]');
            console.log('Revalidated all collection pages');
        } else if (type === 'products') {
            // Revalidate all product pages
            revalidatePath('/products');
            revalidatePath('/products/[handle]');
            console.log('Revalidated all product pages');
        } else {
            // Revalidate everything
            revalidatePath('/');
            console.log('Revalidated all pages');
        }

        return NextResponse.json({
            success: true,
            message: 'Cache revalidated successfully',
            revalidated: path || type || 'all'
        });
    } catch (error) {
        console.error('Error revalidating cache:', error);
        return NextResponse.json(
            {
                success: false,
                error: 'Failed to revalidate cache'
            },
            { status: 500 }
        );
    }
}

export async function GET() {
    return NextResponse.json({
        message: 'Use POST to revalidate cache',
        endpoints: {
            collections: 'POST /api/revalidate with {"type": "collections"}',
            products: 'POST /api/revalidate with {"type": "products"}',
            specific: 'POST /api/revalidate with {"path": "/collections/your-handle"}',
            all: 'POST /api/revalidate with {}'
        }
    });
} 