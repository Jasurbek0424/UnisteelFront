/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';

import Icon1 from '../assets/Icons/Icon1.png';
import Icon2 from '../assets/Icons/Icon2.png';
import Icon3 from '../assets/Icons/Icon3.png';
import Icon4 from '../assets/Icons/Icon4.png';


const CounterSection: React.FC = () => {
    const [years, setYears] = useState(0);
    const [positions, setPositions] = useState(0);
    const [clientsPerYear, setClientsPerYear] = useState(0);
    const [detailsPerYear, setDetailsPerYear] = useState(0);
    const [animationsStarted, setAnimationsStarted] = useState(false);
    const countersRef = useRef<HTMLDivElement>(null);

    const startAnimations = () => {
        if (countersRef.current && !animationsStarted) {
            const { top } = countersRef.current.getBoundingClientRect();
            const isSectionVisible = top < window.innerHeight;
            if (isSectionVisible) {
                setYears(10);
                setPositions(2000);
                setClientsPerYear(1000);
                setDetailsPerYear(10000);
                setAnimationsStarted(true);
            }
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            startAnimations();
        };

        window.addEventListener('scroll', handleScroll);
        startAnimations();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div ref={countersRef} className="flex items-end max-w-[950px] justify-center w-full gap-6 flex-wrap md:flex-nowrap md:justify-between">
            <div className="text-center flex items-center gap-2">
                <img src={Icon1} alt="" />
                <div>
                    <div className="flex justify-center items-center text-secondary">
                        <CountUp end={years} duration={1} className='text-3xl lg:text-5xl font-bold' />
                        <span className='text-2xl'>+</span>
                    </div>
                    <p className="text-md">лет на рынке</p>
                </div>
            </div>
            <div className="text-center flex items-center">
                <img src={Icon2} alt="" />
                <div>
                    <div className="flex justify-center items-center text-secondary">
                        <CountUp end={positions} duration={1} className='text-3xl lg:text-5xl font-bold' />
                        <span className='text-2xl'>+</span>
                    </div>
                    <p className="text-md">позиций</p>
                </div>
            </div>
            <div className="text-center flex items-center">
                <img src={Icon3} alt="" />
                <div>
                    <div className="flex justify-center items-center text-secondary">
                        <CountUp end={clientsPerYear} duration={1} className='text-3xl lg:text-5xl font-bold' />
                        <span className='text-2xl'>+</span>
                    </div>
                    <p className="text-md">клиентов в год</p>
                </div>
            </div>
            <div className="text-center flex items-center">
                <img src={Icon4} alt="" />
                <div>
                    <div className="flex justify-center items-center text-secondary">
                        <CountUp end={detailsPerYear} duration={1} className='text-3xl lg:text-5xl font-bold' />
                        <span className='text-2xl'>+</span>
                    </div>
                    <p className="text-md">деталей в год</p>
                </div>
            </div>
        </div>
    );
};

export default CounterSection;
