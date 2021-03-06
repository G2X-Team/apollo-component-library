import type { HTMLAttributes, ReactNode, FC } from 'react';
import React from 'react';
import './Switch.css';

import type { Apollo } from '../../interfaces/Apollo';
import type { StyleVariant } from '../../interfaces/Properties';

import { Text } from '../Text/Text';
import { gaurdApolloName } from '../../util/ErrorHandling';

export interface ISwitch extends HTMLAttributes<HTMLInputElement>, Apollo<'Switch'> {
    /** Can assign text or element to switch */
    children: ReactNode;
    /** Determines whether the switch is disabled */
    disabled?: boolean;
    /** Value that the switch represents */
    value?: string;
    /** Variant of switch */
    variant?: StyleVariant;
    /** Form name */
    name: string;
    /** Determines whether input is required or not */
    required?: boolean;
    /** Determines whether input is checked or not */
    checked?: boolean;
}

/**
 * UI element that slides a button from on to off.
 *
 * @return Switch component
 */
export const Switch: FC<ISwitch> = ({
    variant = 'default',
    className = '',
    children,
    required,
    ...props
}) => {
    gaurdApolloName(props, 'Switch');

    return (
        <div className="apollo-component-library-switch-component-wrapper">
            <label className="apollo-component-library-switch-component-label">
                <input
                    {...props}
                    type="checkbox"
                    role="switch"
                    className="apollo-component-library-switch-component-input"
                />
                <span
                    className={`
                        apollo-component-library-switch-component 
                        ${variant} 
                        ${className} 
                    `}
                />
                <Text inline>{children}</Text>
            </label>
        </div>
    );
};

Switch.defaultProps = { 'data-apollo': 'Switch' };
