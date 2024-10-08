import React from 'react';
import Image from "next/image";

const CartPage = () => {
    return (
        <div className='h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row'>
            {/*PRODUCT CONTAINER*/}
            <div className='h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40'>
                {/*SINGLE ITEM*/}
                <div className='flex items-center justify-between mb-4'>
                    <Image src="/temporary/p1.png" alt='' width={100} height={100}/>
                    <div>
                        <h1 className='uppercase text-xl font-bold'>Sicilian Pizza</h1>
                        <span>Large</span>
                    </div>
                    <h2 className='font-bold'>$110.50</h2>
                    <span className='cursor-pointer'>X</span>
                </div>
                <div className='flex items-center justify-between mb-4'>
                    <Image src="/temporary/p2.png" alt='' width={100} height={100}/>
                    <div>
                        <h1 className='uppercase text-xl font-bold'>BACON DELUXE</h1>
                        <span>Extra BBQ sauce</span>
                    </div>
                    <h2 className='font-bold'>$30.00</h2>
                    <span className='cursor-pointer'>X</span>
                </div>
                <div className='flex items-center justify-between mb-4'>
                    <Image src="/temporary/p4.png" alt='' width={100} height={100}/>
                    <div>
                        <h1 className='uppercase text-xl font-bold'>P.ARRABBIATA</h1>
                        <span>Medium</span>
                    </div>
                    <h2 className='font-bold'>$60.75</h2>
                    <span className='cursor-pointer'>X</span>
                </div>
            </div>
            {/*PAYMENT CONTAINER*/}
            <div className='h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 md:p-10 lg:px-10 xl:px-20 2xl:px-40 2xl:text-xl 2xl:gap-6'>
                <div className='flex justify-between'>
                    <span className='uppercase'>Subtotal (3 items)</span>
                    <span>$0.00</span>
                </div>
                <div className='flex justify-between'>
                    <span className='uppercase'>Service Cost</span>
                    <span>$Price</span>
                </div>
                <div className='flex justify-between'>
                    <span className='uppercase'>Delivery Cost</span>
                    <span className='text-green-700'>FREE</span>
                </div>
                <hr className='my-2'/>
                <div className='flex justify-between'>
                    <span className='uppercase font-bold'>TOTAL (INC. VAT)</span>
                    <span className='font-bold'>$900.00</span>
                </div>
                <button className='bg-red-500 text-white p-3 rounded-md w-1/2 self-end'>Proceed to checkout</button>
            </div>
        </div>
    );
};

export default CartPage;