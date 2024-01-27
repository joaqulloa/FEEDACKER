import React from 'react';
import styles, { layout } from '../style';
import { features } from '../constants';
import Button from './Button';

const FeatureCard = ({ icon, title, content, index}) => (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ?  "mb-6" : "mb-0"} feature-card`}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-[#d1d4db]`}>
        <img src={icon} alt="star" className='w-[50%] h-[50%] object-contain'/>
      </div>
      <div className='flex-1 flex flex-col ml-3'>
        <h4 className='font-poppins font-semibold text-black text-[18px] leading-[23.4px] mb-1'>
          {title}
        </h4>
        <p className='font-poppins font-normal text-black text-[16px] leading-[24px]'>
          {content}
        </p>
      </div>
    </div>
  )

const BusinessSection = () => (
    <section id="features" className={layout.section}>
      <div className={`${layout.sectionInfo} mr-8 `}  >
        <h2 className={`${styles.heading2} text-black`}>
          Exito Empresarial Con <span className='text-gradient'>Retroalimentación </span><span className='text-gradient'>Inteligente</span>
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-black`}>
          Nuestro servicio se adapta a la necesidades del cliente, desde ayudar a despegar
          tu idea de emprendiento, hasta ayudarte a calificar postulaciones de emprendimientos
          a fondos concursables.
        </p>
        
      </div>

      <div className={`${layout.sectionImg} flex-col max-w-[50%]`}>
        {features.map((feature, index) => (
            <FeatureCard key={feature.id} {...feature} index={index} />
            ))}
      </div>
    </section>
  )

export default BusinessSection