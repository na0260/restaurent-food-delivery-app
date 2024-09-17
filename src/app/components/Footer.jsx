import React from 'react';
import Link from "next/link";

const Footer = () => {
    return (
        <div className='h-12 md:h-16 p-5 lg:px-10 xl:px-40 bg-fuchsia-50 text-red-500 flex items-center justify-between z-20'>
            <Link href="/" className="font-bold text-xl">NA CAFE</Link>
            <p>© ALL RIGHT RESERVED.</p>
        </div>
    );
};

export default Footer;