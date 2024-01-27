import React from 'react';
import styles from '../style';

const CustomInput = ({ title, description, onChange, value }) => {
  return (
    <div className='flex flex-1 flex-row mb-5 border rounded-xl border-[#5C5AF3] p-5' >
      <div className='flex flex-1 flex-col'>
        <p className={`${styles.paragraph} font-bold mb-2`}>{title}</p>
        <p className={`${styles.paragraph}  mb-2`}>{description}</p>
      </div>
      <textarea
        className='flex flex-1 border rounded-xl focus:outline-indigo-500 focus:outline-[0.5px] p-5'
        rows="6"
        cols="50"
        onChange={onChange}
        value={value}
        />
    </div>
  );
};

export default CustomInput;