import { ReactNode } from 'react';
import clsx from 'clsx';

interface LayoutProps {
    children: ReactNode;
    className?: string;
}

const Layout = ({ children, className }: LayoutProps) => {
    const layoutClasses = clsx(
        'w-full',
        'max-w-7xl',
        'mx-auto',
        'p-4',
        'sm:p-6',
        'lg:p-8',
        className
    );
    return <section className={layoutClasses}>{children}</section>;
};

export default Layout;
