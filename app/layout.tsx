'use client';

// import type { Metadata } from 'next';
import { MuseoModerno } from 'next/font/google';
import { I18nProvider, useLocale } from 'react-aria-components'; // I would look at internationalization
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { InvestmentProvider } from '@/context/investment-context';
import './globals.css';

const museo = MuseoModerno({
    subsets: ['latin'],
    variable: '--font-lato',
    weight: ['400', '700'],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={museo.className}>
                <Header />
                <InvestmentProvider>{children}</InvestmentProvider>
                <Footer />
            </body>
        </html>
    );
}
