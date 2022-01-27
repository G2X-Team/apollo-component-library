import React, { useState, useEffect, HTMLAttributes, ReactNode, useRef } from 'react';
import './LoadingState.css';

export interface Props extends HTMLAttributes<HTMLDivElement> {
    /**
     * Determines status of the progressbar where
     * progressFilled={0.1} => 10% filled progressbar
     */
    progressFilled?: number;
    /** Determines the size of LoadingState whether small , medium, or large */
    size?: 'small' | 'medium' | 'large';
    /** Determines the variant of LoadingState whether static or progress */
    variant?: 'static' | 'progress';
    /** Determines whether the LoadingState is open or not */
    open?: boolean;
    /** Toggles the LoadingState between open and closed */
    isLoading?: () => any;
}

/**
 * Loader that will appear based on the value of it's open prop. Also known as dialogue.
 *
 * @return LoadingState component
 */
export const LoadingState = ({
    progressFilled = 0,
    className,
    variant = 'static',
    size = 'small',
    children,
    style,
    open = false,
    isLoading,
    ...props
}: Props): JSX.Element => {
    // ref
    const progressRef = useRef<HTMLHeadingElement>(null);
    // usestate variables
    const [display, toggleDisplay] = useState(open);
    const [effect, toggleEffect] = useState(open);
    const [width, setwidth] = useState(0);

    // make a useEffect to determine what transition will be used, acts as on init
    useEffect(() => {
        if (null !== progressRef.current) {
            console.log(progressRef.current);
            // eslint-disable-next-line prefer-destructuring
            const progressWidth = progressRef.current.offsetWidth;
            setwidth(progressWidth * progressFilled);
        }
    }, [setwidth, progressFilled, width]);

    useEffect(() => {
        if (progressFilled > 1 || progressFilled < 0) {
            throw Error('The range is not valid');
        }
    }, [progressFilled]);

    // Keeping track of open call
    useEffect(() => {
        if (open !== display) {
            if (display) {
                toggleEffect(false);
                setTimeout(() => toggleDisplay(false), 300);
            } else {
                toggleDisplay(true);
                // progressRef.current.style = 'transition: width 850ms ease-in-out;';
                setTimeout(() => toggleEffect(true), 100);
            }
        }
    }, [open]);

    /**
     * Renders the LoadingState and all of its children formatted as intended
     * @return formatted LoadingState component
     */
    const renderLoadingState = (): ReactNode => {
        return (
            <>
                {display ? (
                    variant != 'static' ? (
                        <div className={`progress`}>
                            <div className={`apollo-component-library-container`} ref={progressRef}>
                                <div
                                    {...props}
                                    // eslint-disable-next-line max-len
                                    className={`apollo-component-library-loadingstate-component-progressbar
                                progress ${size}`}
                                    style={{ width }}
                                ></div>
                            </div>
                        </div>
                    ) : (
                        <div
                            {...props}
                            className={`apollo-component-library-loadingstate-component
                            ${size}
                    `}
                        ></div>
                    )
                ) : null}
            </>
        );
    };
    return (
        <>
            {display ? (
                variant != 'static' ? (
                    <div
                        style={{ opacity: effect ? 1 : 0 }}
                        className={`apollo-component-library-loadingstate-component-container`}
                    >
                        {renderLoadingState()}
                    </div>
                ) : (
                    <div className={`apollo-component-library-loadingstate-component-container`}>
                        <div
                            onClick={isLoading}
                            className={`
                                    apollo-component-library-loadingstate-component-spinner`}
                        >
                            {renderLoadingState()}
                        </div>
                    </div>
                )
            ) : null}
        </>
    );
};