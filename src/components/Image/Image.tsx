import type { FC, HTMLAttributes } from 'react';
import React from 'react';
import './Image.css';

import type * as CSS from 'csstype';
import type { Apollo } from '../../interfaces/Apollo';
import { gaurdApolloName } from '../../util/ErrorHandling';
import { ComponentSize } from '../../interfaces/Properties';
import { useProgressiveImage } from '../../util/imageProcessing';

export interface IImage extends HTMLAttributes<HTMLDivElement>, Apollo<'Image'> {
    /** source of image */
    src: string;
    /** alt text of image */
    alt: string;
    /** value that determines the height of image */
    height?: CSS.Property.Height;
    /** value that determines the width of image */
    width?: CSS.Property.Width;
    /** determines sizing of image */
    sizing?: CSS.Property.BackgroundSize;
    /** determines whether image is centered */
    center?: boolean;
    /** determines border radius */
    borderRadius?: CSS.Property.BorderRadius;
    /** determines size of loading spinner */
    spinnerSize?: ComponentSize;
}

/**
 * Image component used to display images
 *
 * @return Image component
 */
export const Image: FC<IImage> = ({
    className = '',
    borderRadius = 8,
    spinnerSize = 'medium',
    src,
    alt,
    height,
    width,
    sizing,
    center,
    ...props
}) => {
    gaurdApolloName(props, 'Image');

    // state
    const loaded = useProgressiveImage(src);

    return (
        <div
            {...props}
            className={`apollo ${className} ${
                loaded === 'loading' ? 'loading' : ''
            } ${spinnerSize}`}
            role="img"
            aria-label={alt}
            aria-busy={loaded === 'loading'}
            style={{
                backgroundImage: `url(${src})`,
                backgroundSize: sizing,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: center ? 'center' : '',
                height,
                width,
                borderRadius,
            }}
        >
            <div
                aria-hidden={loaded === 'loading'}
                aria-label={`loading ${alt} image`}
                style={{ opacity: loaded === 'loading' ? 1 : 0 }}
            >
                <div>
                    <div />
                </div>
            </div>
        </div>
    );
};

Image.defaultProps = { 'data-apollo': 'Image' };
