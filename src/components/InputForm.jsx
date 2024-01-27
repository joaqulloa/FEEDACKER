import React, {useState} from 'react';
import styles, { layout } from '../style'
import Button from './Button';

const InputForm = ({ onSubmit }) => {
    const [description, setDescription] = useState('');

    const handleSubmit = () => {
        onSubmit(description);
    };


return (
    <section className='flex flex-1 flex-col '> 
    <div id="input_1" className='flex flex-1 flex-col'>
        <p className={`${styles.paragraph} text-white mb-2`}>Segmentos de mercado</p>
        <textarea
        rows="4"
        cols="50"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        />
        <br/>
    </div>

    <div id='input_2' className='flex flex-1 flex-col'>
        <p className={`${styles.paragraph} text-white mb-2`}>Propuesta de valor</p>
        <textarea
        rows="4"
        cols="50"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        />
        <br/>
    </div>

    <div id='input_3' className='flex flex-1 flex-col'>
        <p className={`${styles.paragraph} text-white mb-2`}>Canales</p>
        <textarea
        rows="4"
        cols="50"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        />
        <br/>
    </div>

    <div id='input_4' className='flex flex-1 flex-col'>
        <p className={`${styles.paragraph} text-white mb-2`}>Relaciones con clientes</p>
        <textarea
        rows="4"
        cols="50"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        />
        <br/>
    </div>

    <div id='input_5' className='flex flex-1 flex-col'>
        <p className={`${styles.paragraph} text-white mb-2`}>Fuentes de ingresos</p>
        <textarea
        rows="4"
        cols="50"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        />
        <br/>
    </div>

    <div className='mt-5'>
    <Button/>
    </div>

    </section>
);

};

export default InputForm;

