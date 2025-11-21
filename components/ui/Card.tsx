'use client'
import React from 'react';

interface CardProps{
    children?: React.ReactNode;
    
    /** @default 'elevated' */
    variant?: 'elevated' | 'outlined' | 'flat';

    /** @default false */
    hoverable?: boolean;

    /** CSS classes to apply for just in case */
    className?: string;

    /** Callback fired when the card is clicked */
    onClick?: () => void;

    /** @default 'medium' */
    padding?: 'none' | 'small' | 'medium' | 'large';
    
}

export function Card({
    children,
    variant = 'elevated',
    hoverable = false,
    className = '',
    onClick,
    padding = 'medium',
}: CardProps){
    const baseStyles = 'bg-surface rounded-lg transition-all duration-300';
    const variantStyles = {
        elevated: 'shadow-md',
        outlined: 'border-2 border-gray-200',
        flat: 'bg-gray-50',
    };
    const hoverStyles = hoverable ? 'hover:shadow-lg hover:scale-[1.02] cursor-pointer' : '';
    const paddingStyles = {
        none: '',
        small: 'p-4',
        medium: 'p-6',
        large: 'p-8',
    };

    const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${hoverStyles} ${paddingStyles[padding]} ${className}`.trim().replace(/\s+/g, ' ');

    //make clickable for keyboard
    const isClickable = !!onClick;
    const handleClick = () => {
        if (onClick){
            onClick();
        }
    };
    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (isClickable && (event.key === 'Enter' || event.key === ' ')){
            event.preventDefault();
            onClick?.();
        }
    };
    return(
        <div
            className={combinedStyles}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            role={isClickable ? 'button' : undefined}
            tabIndex={isClickable ? 0 : undefined}
        >
            {children}
        </div>
    );
}

interface CardImageProps{
    src:  string;
    alt: string;

    /** @default 'medium' */
    height?: 'small' | 'medium' | 'large';

    /** @default 'cover' */
    objectFit?: 'cover' | 'contain' | 'fill';

    className?: string;
}

export function CardImage({
    src,
    alt,
    height = 'medium',
    objectFit = 'cover',
    className = '',
}: CardImageProps){
    const heightStyles = {
        small: 'h-32',
        medium: 'h-48',
        large: 'h-64',
        auto : 'h-auto',
    };
    const objectFitStyles = {
        cover: 'object-cover',
        contain: 'object-contain',
        fill: 'object-fill',
    };
    const combinedStyles = `w-full ${heightStyles[height]} ${objectFitStyles[objectFit]} ${className}`.trim().replace(/\s+/g, ' ');

    return(
        <img
            src={src}
            alt={alt}
            className={combinedStyles}
            loading='lazy'
        />
    );
}

interface CardContentProps{
    children: React.ReactNode;

    className?: string;

    /** @default 'medium' */
    padding?:'none' | 'small' | 'medium' | 'large';
}

export function CardContent({
    children,
    className = '',
    padding = 'medium',
}: CardContentProps){
    const paddingStyles ={
        none: '',
        small: 'p-4',
        medium: 'p-6',
        large: 'p-8'
    };
    const combinedStyles = `${paddingStyles[padding]} ${className}`.trim().replace(/\s+/g, ' ');

    return(
        <div className={combinedStyles}>
            {children}
        </div>
    );
}

interface CardHeaderProps{
    children: React.ReactNode;
    className?: string;
}

export function CardHeader({
    children,
    className = '',
}: CardHeaderProps){
    const combinedStyles = `border-b border-gray-200 pb-4 mb-4 ${className}`.trim().replace(/\s+/g, ' ');
    return(
        <div className={combinedStyles}>
            {children}
        </div>
    );
}

interface CardFooterProps{
    children: React.ReactNode;
    className?: string;
}

export function CardFooter({
    children,
    className = '',
}: CardFooterProps){
    const combinedStyles = `border-t border-gray-200 pt-4 mt-4 ${className}`.trim().replace(/\s+/g, ' ');
    return(
        <div className={combinedStyles}>
            {children}
        </div>
    );
}

interface CardTitleProps{
    children: React.ReactNode;
    /** @default 'h3' */
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    className?: string;
}

export function CardTitle({
    children,
    as: Component = 'h3',
    className = '',
}: CardTitleProps){
    const combinedStyles = `text-xl font-semibold text-gray-800 mb-2 ${className}`.trim().replace(/\s+/g, ' ');
    return(
        <Component className={combinedStyles}>
            {children}
        </Component>
    );
}

interface CardDescriptionProps{
    children: React.ReactNode;
    className?: string;
}

export function CardDescription({
    children,
    className = '',
}: CardDescriptionProps){
    const combinedStyles = `text-body text-text-muted ${className}`.trim().replace(/\s+/g, ' ');
    return(
        <p className={combinedStyles}>
            {children}
        </p>
    );
}
export default Card;

