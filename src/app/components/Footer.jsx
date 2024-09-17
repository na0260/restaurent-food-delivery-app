import React from 'react';
import Link from "next/link";

const Footer = () => {
    return (
        <div className='h-12 md:h-16 p-5 xl:p-10 bg-fuchsia-50 text-red-500 flex items-center justify-between'>
            <Link href="/" className="font-bold text-xl">NA CAFE</Link>
            <p>© ALL RIGHT RESERVED.</p>
        </div>
    );
};

export default Footer;