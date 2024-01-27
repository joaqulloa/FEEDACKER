// FeedbackPage.js
import React, { useState } from 'react';
import dotenv from 'dotenv';
import OpenAI from 'openai';
import styles from '../style';
import CustomInput from '../components/CustomInput'


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
    const openai_api_key = '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'
    const openai = new OpenAI({ apiKey: openai_api_key, dangerouslyAllowBrowser: true});  
    const completion = await openai.chat.completions.create({
      messages: [{"role": "system", "content": "Eres un asistente de modelo de negocios. Te voy a dar una descripción de mi negocio y me dices que opinas. NO PIDAS MAS INFORMACIÓN"},
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
		    description='¿Que producto/servicios ofreces?¿Quienes son tus clientes?' 
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
        </div>
      )}
    </div>
  );
};

export default FeedbackPage;