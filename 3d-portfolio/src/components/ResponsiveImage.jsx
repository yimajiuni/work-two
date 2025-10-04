import React from 'react';

const ResponsiveImage = ({
    src,
    alt,
    width,
    height,
    className = '',
    loading = 'lazy',
    sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    ...props
}) => {
    // Generate responsive srcSet for WebP images
    const generateSrcSet = (src, baseWidth) => {
        if (!src || !baseWidth) return undefined;

        const baseName = src.replace('.webp', '');
        const multipliers = [0.5, 0.75, 1, 1.25, 1.5, 2];

        return multipliers
            .map(mult => {
                const size = Math.round(baseWidth * mult);
                return `${baseName}_${size}w.webp ${size}w`;
            })
            .join(', ');
    };

    // For existing images, use the current src as fallback
    const srcSet = generateSrcSet(src, width);

    return (
        <picture>
            {/* WebP format with responsive sizes */}
            {srcSet && (
                <source
                    srcSet={srcSet}
                    sizes={sizes}
                    type="image/webp"
                />
            )}
            {/* Fallback image */}
            <img
                src={src}
                alt={alt}
                width={width}
                height={height}
                className={className}
                loading={loading}
                decoding="async"
                {...props}
            />
        </picture>
    );
};

export default ResponsiveImage;
