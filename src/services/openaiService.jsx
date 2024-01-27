const getOpenAIResult = async(description) => {

    const rating = Math.floor(Math.random()*7)+1;
    const feedback = "Este es un feedback simulado para la descripción: " + description ;
    return {rating, feedback};
}

export default { getOpenAIResult };