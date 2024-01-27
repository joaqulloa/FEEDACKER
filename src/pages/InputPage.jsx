import React from 'react';
import InputForm from '../components/InputForm';
import ResultDisplay from '../components/ResultDisplay';
import styles from '../style';
import { Link } from 'react-router-dom';
import CustomInput from '../components/CustomInput';
import Button from '../components/Button';

const InputPage = () => {
  return (
    <section>
      <div className={`${styles.flexCenter} ${styles.boxWidth} flex-col mb-10 mt-10`}>
      <h1 className={`${styles.heading2} ${styles.flexCenter}` }>Bienvenido a Feedbacker</h1>
      <p className={`${styles.paragraph} max-w-[1280px] mt-5`}> En esta fase inicial, te ofrecemos la oportunidad de experimentar de primera mano cómo Feedbacker puede transformar tus ideas, fortalecer tu emprendimientos y simplificar el proceso de selección de proyectos en procesos de convocatorias. Simplemente carga la información relevante, y nuestra potente inteligencia artificial analizará y proporcionará retroalimentación precisa.</p>
      <p className={`${styles.paragraph} max-w-[1280px] mt-5`}>Estamos emocionados por brindarte esta vista previa exclusiva y esperamos tus opiniones para perfeccionar aún más nuestro servicio. Tu retroalimentación es esencial para hacer de Feedbacker la herramienta definitiva para impulsar el éxito empresarial. Únete a nosotros en esta emocionante etapa beta y sé parte de la revolución del feedback inteligente.</p>
      <p className={`${styles.paragraph} max-w-[1280px] mt-5`}>Nos comprometemos a resguardar su privacidad. Toda información proporcionada no será compartida con terceros y se mantendrá estrictamente confidencial.</p>
      </div>  

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <h1 className={`${styles.boxWidth} ${styles.paragraph} mb-5`}>Calificación de descripción de clientes</h1>
          <CustomInput title="Segmentos de mercado" description="Descripción"/>
          <CustomInput title="Propuesta de valor" description="Descripción"/>
          <CustomInput title="Canales" description="Descripción"/>
          <CustomInput title="Relaciones con clientes" description="Descripción"/>
          <CustomInput title="Fuentes de ingresos" description="Descripción"/>
          <Button title='Enviar'/>
        </div>
      </div>

    </section>
  );
};

export default InputPage;