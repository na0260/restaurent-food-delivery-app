import React from 'react';
import Link from "next/link";
import Menu from "@/app/components/Menu";
import CartIcon from "@/app/components/CartIcon";
import Image from "next/image";

const Navbar = () => {
    const user = false;
    return (
        <div className='h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40'>
            {/*Left links*/}
            <div className='hidden md:flex gap-4 flex-1'>
                <Link href='/'>Homepage</Link>
                <Link href='/menu'>MENU</Link>
                <Link href='#'>Contact</Link>
            </div>
            {/*Logo*/}
            <div className='text-xl font-bold flex-1 md:text-center'>
                <Link href="/">NA CAFE</Link>
            </div>
            {/*Mobile Menu*/}
            <div className='md:hidden'>
                <Menu/>
            </div>
            {/*Right Links*/}
            <div className='hidden md:flex justify-end gap-4 items-center flex-1'>
                <div className='md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md'>
                    <Image src="/phone.png" alt="" width={20} height={20}/>
                    <span>123-456-7890</span>
                </div>
                {
                    !user ? (
                        <Link href='/login'>Login</Link>
                    ) : (
                        <Link href='/orders'>Orders</Link>
                    )
                }
                <CartIcon/>
            </div>
        </div>
    );
};

export default Navbar;