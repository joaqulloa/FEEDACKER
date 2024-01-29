// FeedbackPage.js
import React, { useState } from 'react';
import OpenAI from 'openai';
import styles from '../style';
import CustomInput from '../components/CustomInput'
import Button from '../components/Button'


const FeedbackPage = () => {
  const [feedbackText, setFeedbackText] = useState('');
  const [generatedFeedback, setGeneratedFeedback] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFeedbackChange = (e) => {
    setFeedbackText(e.target.value);
  };

  const generateFeedback = async () => {
    try{
    setLoading(true);
    const openai_api_key = import.meta.env.VITE_OPEN_AI_API_KEY;
    //const openai_api_key = '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';
    const openai = new OpenAI({ apiKey: openai_api_key, dangerouslyAllowBrowser: true });  
    const completion = await openai.chat.completions.create({
      messages: [{"role": "system", "content": "Analiza la propuesta de valor y la identificación de los clientes objetivo en la idea de negocio presentada. Proporciona retroalimentación experta y precisa, enfocándote en la claridad y efectividad de la propuesta de valor y en qué medida la idea se alinea con las necesidades de los clientes identificados. Ofrece consejos concisos para fortalecer estos aspectos del negocio y formula preguntas específicas que puedan guiar al emprendedor a mejorar su enfoque."},
                 {"role": "user", "content": feedbackText}],
      model: "gpt-3.5-turbo",
    });
    setGeneratedFeedback(completion.choices[0].message.content);
    console.log(feedbackText);
  } catch(error){
    setGeneratedFeedback('Lo sentimos, hubo un error. Intete más tarde')
    console.log('Hubo un error: ', error)
  } finally {
    setLoading(false);
  }
  };

  const formatFeedbackText = (text) => {
	const paragraphs = text.split('\n')

	return paragraphs.map((paragraph, index) => {
			return <p key={index}>{paragraph}<br/></p>
	});
  };

  return (
    <div className="flex flex-col ">
    	<h1 className={`${styles.heading2} ${styles.flexCenter} mb-4`}>Feedbacker BETA</h1>
    	<CustomInput 
    	    title="Describe tu idea de negocio:" 
		      description={`¿Qué producto/servicio ofreces? ¿Quiénes son tus clientes?`}
		      onChange={handleFeedbackChange} 
		      value={feedbackText} 
		/>
    	<button className="bg-blue-gradient border rounded-xl text-white p-2 mt-4" onClick={generateFeedback} disabled={loading}>
        {loading? 'Generando Retroalimentación...' : 'Generar Retroalimentación'}
        </button>
      {generatedFeedback && (
        <div className=" mt-20">
          <h2 className={`${styles.paragraph} font-bold mb-4`}>Retroalimentación Generada:</h2>
          <p className={`${styles.paragraph} mt-2 mb-4 leading-6`}>{formatFeedbackText(generatedFeedback)}</p>
          <a href='https://docs.google.com/forms/d/e/1FAIpQLScYHNzv1-tfbnsOnf147GKUKPimZa1MChccape26wX7UFiRXw/viewform?usp=sf_link' target="_blank" ><Button title="Responder encuesta"/></a>
        </div>
      )}
    </div>
  );
};

export default FeedbackPage;