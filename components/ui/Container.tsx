'use client'
import React from "react";

interface ContainerProps{
    children: React.ReactNode;

    /** @default 'medium' */
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';

    /** @default true */
    padding?: boolean;

    className?: string;

    /** Semantic HTML rendering as */
    /** @default 'div' */
    as?: 'div' | 'section' | 'main' | 'article' | 'header' | 'footer';
}

export default function Container({
    children,
    maxWidth = 'xl',
    padding = true,
    className = '',
    as: Component = 'div',
}: ContainerProps){
    const maxWidthStyles = {
        sm: 'max-w-screen-sm', //640px - For form, narrow view
        md: 'max-w-screen-md', //768px = For articles, blogpost
        lg: 'max-w-screen-lg', //1024ox - Generic purpose 
        xl: 'max-w-screen-xl', //1280 - Default and good for anything
        '2xl': 'max-w-screen-2xl', //1536px - Wide, for dashboard
        full: 'max-w-full', //Full width
    };
    const paddingStyles = padding? 'px-4 sm:px-6 lg:px-8' : '';
    const centerStyles = 'mx-auto';
    const widthStyles = 'w-full';
    const combinedStyles = `${widthStyles} ${maxWidthStyles[maxWidth]} ${centerStyles} ${paddingStyles}`

    return(
        <Component className={combinedStyles}>
            {children}
        </Component>
    );
}