import React from 'react';
import {pizzas} from "@/app/data";
import Link from "next/link";
import Image from "next/image";

const CategoryPage = () => {
    return (
        <div className="flex flex-wrap text-red-500">
            {
                pizzas.map(item=>(
                    <Link className="w-full h-[60vh] border-r-2 border-b-2 border-red-500 sm:w-1/2 lg:w-1/3 flex flex-col justify-between p-4 group odd:bg-fuchsia-50" href={`/product/${item.id}`} key={item.id}>
                        {/*IMAGE CONTAINER*/}
                        {item.img && (
                            <div className="relative h-[80%]">
                                <Image src={item.img} alt="" fill className="object-contain"/>
                            </div>
                        )}
                        {/*TEXT CONTAINER*/}
                        <div className='flex items-center justify-between font-bold'>
                            <h1 className='text-2xl uppercase p-2'>{item.title}</h1>
                            <h2 className='group-hover:hidden text-xl'>${item.price}</h2>
                            <button className="hidden group-hover:block bg-red-500 uppercase text-white p-2 rounded-md">
                                Add to cart
                            </button>
                        </div>
                    </Link>
                ))
            }
        </div>
    );
};

export default CategoryPage;