import React from 'react';
import Image from "next/image";
import CountDown from "@/app/components/CountDown";

const Offer = () => {
    return (
        <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
            {/*TEXT CONTAINER*/}
            <div className='flex-1 flex flex-col justify-center items-center text-center gap-8 p-6 order-last md:order-first'>
                <h1 className='text-white text-5xl font-bold xl:text-6xl'>
                    Lorem ipsum dolor sit amet.
                </h1>
                <p className='text-white xl:text-xl'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto commodi consequuntur
                    delectus eos excepturi harum, iste officia, omnis perspiciatis quas quisquam rem repellendus tempore
                    temporibus ullam vitae voluptas voluptatibus?
                </p>
                <CountDown/>
                <button className='bg-red-500 text-white rounded-md py-3 px-6'>Order Now</button>
            </div>
            {/*IMAGE CONTAINER*/}
            <div className='flex-1 w-full relative md:h-full order-first md:order-last'>
                <Image src='/offerProduct.png' alt='' fill className='object-contain mt-8 md:mt-0'/>
            </div>

        </div>
    );
};

export default Offer;