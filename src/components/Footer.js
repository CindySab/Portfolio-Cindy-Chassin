import React from 'react';
import Layout from './Layout';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg lg:text-base'>
            <Layout className='py-8 flex items-center justify-between md:flex-col lg:py-6 md:py-4'>
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                <div className='flex items-center md:py-2'>
                Build with <span className='text-primary text-2xl px-2'>&#9825;</span>by&nbsp;<Link href="/" className='underline underline-offset-4'>Cindy Chassin</Link>
                </div>
                <Link href="mailto:cindychassin.pro@gmail.com">Contact</Link>
            </Layout>
        </footer>
    );
};

export default Footer;