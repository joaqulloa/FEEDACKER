import React from 'react';
import styles from '../style';
import {discount, robot, canvas} from '../assets'
import Button from './Button';

const HeroSection = () => (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0`}>

            <div className='flex flex-row items-center py-[6px] px-4 bg-gray-300 rounded-[10px] mb-2'>
                <img src={discount} alt="discount" className='w-[32px] h-[32px]'/>
                <p className={`${styles.paragraph} ml-2`}> Prueba nuestra <span className='text-gradient'>Versión </span><span className='text-gradient'>Beta</span> </p>
            </div>

            <div className="flex flex-row justify-between items-center w-full">
                <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[100.8px] leading-[75px]'>El <span className='text-gradient'> Feedback </span> {" "}</h1>
                <div className='ss:flex hidden md:mr-4 mr-0'>
                </div>
            </div>

            <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-black ss:leading-[100.8px] leading-[75px] w-full'>que necesita tu negocio</h1>

            <p className={`${styles.paragraph} max-w-[470px] mt-5 text-black`}>
            ¿Buscas mejorar tu modelo de negocio? Feedbacker es la herramienta para ti.
            </p>
            <br/>
            <a href='/feedback'><Button title='Comenzar' /></a>
        </div>

        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
            <img src={canvas} alt="billing" className='w-[100%] h-[100%] relative z-[5]'/>

            <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
            <div className='absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40' />
            <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />

        </div>
    </section>
)

export default HeroSection;
