import styles from '../style'
import React from 'react';

const Button = ({title}) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-black bg-gray-gradient-2 rounded-[10px] outline-none}`}>
    {title}
  </button>
)

const CTA = () =>  (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-blue-gradient rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col'>
        <h2 className={`${styles.heading2} text-white mt-5`}>¡Obtén retroalimentación ahora!</h2>
        <p className={`${styles.paragraph} max-w-[470px] text-white mt-5`}>
          Toda la información que necesitas para mejorar tu modelo de negocio
        </p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <a href='/feedback'><Button title='Comenzar'/></a>
      </div>
    </section>
  )


export default CTA