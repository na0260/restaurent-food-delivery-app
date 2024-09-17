import React from 'react';
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
    return (
        <div className='p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center'>
            {/*BOX*/}
            <div className='h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] 2xl:w-1/2'>
                {/*IMAGE CONTAINER*/}
                <div className='relative h-1/3 w-full md:h-full md:w-1/2'>
                    <Image src='/loginBg.png' alt='' className='object-cover' fill/>
                </div>
                {/*FORM CONTAINER*/}
                <div className='p-10 flex flex-col justify-center gap-8 md:h-full md:w-1/2'>
                    <h1 className='font-bold text-xl xl:text-3xl'>
                        Welcome
                    </h1>
                    <p>
                        lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </p>

                    <button className='flex gap-4 p-4 ring-1 ring-orange-100 rounded-md'>
                        <Image src='/google.png' alt='' width={20} height={20} className='object-contain'/>
                        <span>Continue with Google</span>
                    </button>
                    <button className='flex gap-4 p-4 ring-1 ring-orange-100 rounded-md'>
                        <Image src='/facebook.png' alt='' width={20} height={20} className='object-contain'/>
                        <span>Continue with Facebook</span>
                    </button>
                    <p className='text-sm'>Have a problem? <Link href="/">Contact Us</Link></p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;