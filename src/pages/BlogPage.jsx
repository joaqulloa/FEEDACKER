import React from 'react';
import InputForm from '../components/InputForm';
import ResultDisplay from '../components/ResultDisplay';
import styles from '../style';


const BlogPage = () => {
  return (
    <section>
      <div className={`flex flex-1 flex-col mb-10 mt-10`}>
        <h1 className={`${styles.heading2}` }>¡Blog en construccion! <br/> Vuelve pronto para más sorpresas</h1>
      </div>
    </section>
  );
};

export default BlogPage;