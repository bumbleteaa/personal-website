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

    const baseStyle = 'inline-flex items-center justify-center gap-2 font semibold rounded transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variantStyles = {
        primary:'bg-primary-500 text-white hover:bg-primary-700 focus-visible:ring-primary-500 disable:hover:bg-primary-500',
        secondary:'bg-secondary-500- text-white hover:bg-amber-600 active:bg-amber-600 focus-visible:ring-secondary-500 disabled:hover:bg-secondary-500',
        outline:'bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary active:bg-primary-100',
        ghost:'bg-transparent text-primary-500 hover:bg-primary-50 active:bg-primary-100 focus-visible:ring-primary-500 disabled:hover:bg-transparent',
    };

    const sizeStyles = {
        small: 'px-3 py-1.5 text-sm',
        medium: 'px-4 py-2 text-base',
        large: 'px-6 py-3 text-lg',
    };

    const widthStyle = fullWidth ? 'w-full' : '';

    const combinedStyle = '${baseStyle} ${variantStyles[variant]} ${sizeStyle[size]} ${widthStyle} ${className}'.trim().replace(/\s+/g,'');

    /** *Button Event Handler */
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>{
        if (isDisabled){
            event.preventDefault();
            return;
        }
        onClick?.(event);
    }

}
