import React from 'react';
import Link from "next/link";
import Menu from "@/app/components/Menu";

const Navbar = () => {
    return (
        <div className='h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase'>
            {/*Logo*/}
            <div className='text-xl'>
                <Link href="/">NA CAFE</Link>
            </div>
            {/*Mobile Menu*/}
            <div>
                <Menu/>
            </div>
        </div>
    );
};

export default Navbar;