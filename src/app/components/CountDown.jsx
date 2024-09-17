'use client'
import React from 'react';
import Countdown from "react-countdown";

const endinDate = new Date("2024-10-17")
const CountDown = () => {
    return (
        <Countdown className='font-bold text-5xl text-yellow-500' date={endinDate}/>
    );
};

export default CountDown;