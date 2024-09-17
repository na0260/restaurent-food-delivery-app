import React from 'react';
import {menu} from "@/app/data";
import Link from "next/link";

const MenuPage = () => {
    return (
        <div
            className='p-4 lg:px-20 xl:px-40 h-full md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center'>
            {
                menu.map(category => (
                    <Link href={`/menu/${category.slug}`} key={category.id} className="w-full bg-cover p-8 md:h-fit"
                          style={{backgroundImage: `url(${category.img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}
                    >
                        <div className={`text-${category.color} w-1/2`}>
                            <h1 className='uppercase font-bold text-3xl'>{category.title}</h1>
                            <p className='text-sm my-8'>{category.desc}</p>
                            <button className={`bg-${category.color} text-${category.color === "black" ? "white" : "red-500"} py-2 px-4 rounded-md hidden xl:block`}>Explore</button>
                        </div>
                    </Link>
                ))
            }
        </div>
    );
};

export default MenuPage;