'use client'
import React from 'react';


interface ButtonProps{
    children: React.ReactNode;

    /** @default 'primary' */
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';

    /** @default 'medium' */
    size?: 'small' | 'medium' | 'large';

    /** @default false */
    disabled?: boolean;

    /** @default false */
    loading?: boolean;

    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

    /** @default 'button' */
    type?:  'button' | 'submit' | 'reset';

    /** *CSS classes to apply for just in case */
    className?: string;

    /** @default fasle */
    fullWidth?: boolean;
    
    /** *Icon display on button in front of text */
    startIcon?: React.ReactNode;

    /** *Icon displat on button after the text */
    endIcon?: React.ReactNode;
}  

export default function Button(
    {
        children,
        variant = 'primary',
        size = 'medium',
        disabled = false,
        loading = false,
        onClick,
        type = 'button',
        className = '',
        fullWidth = false,
        startIcon,
        endIcon,
    }
    :ButtonProps
){
    const isDisabled = disabled || loading;

    const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variantStyles = {
        primary:'bg-primary-500 text-white hover:bg-primary-700 focus-visible:ring-primary-500 disable:hover:bg-primary-500',
        secondary:'bg-secondary-500 text-white hover:bg-amber-600 active:bg-amber-600 focus-visible:ring-secondary-500 disabled:hover:bg-secondary-500',
        outline:'bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-50 active:bg-primary-100',
        ghost:'bg-transparent text-primary-500 hover:bg-primary-50 active:bg-primary-100 focus-visible:ring-primary-500 disabled:hover:bg-transparent',
    };

    const sizeStyles = {
        small: 'px-3 py-1.5 text-sm',
        medium: 'px-4 py-2 text-base',
        large: 'px-6 py-3 text-lg',
    };

    const widthStyles = fullWidth ? 'w-full' : '';

    const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className}`.trim().replace(/\s+/g, ' ');

    /** *Button Event Handler */
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>{
        if (isDisabled){
            event.preventDefault(); 
            return;
        }
        onClick?.(event);
    };
    return(
        <button
            type={type}
            disabled={isDisabled}
            onClick={handleClick}
            className={combinedStyles}
            aria-busy={loading}
            aria-disabled={isDisabled}
            >
                {!loading && startIcon &&(
                    <span className="inline-flex items-center" aria-hidden="true">{startIcon}
                    </span>
                )}

                {/* Button Loading Indicator */}
                {loading && (
                    <span className="inline-flex items-center"  role = "status" aria-label="Loading">
                        <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" 
                            fill="currentColor" 
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    </span>
                )}

                <span>{children}</span>

                {!loading && endIcon &&(
                    <span className="inline-flex items-center" aria-hidden="true">
                        {endIcon}
                    </span>
                )}
            </button>
    )

}
