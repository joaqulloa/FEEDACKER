import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import InputPage from './pages/InputPage';
import FeedbackPage from './pages/FeedbackPage';
import BlogPage from './pages/BlogPage';
import NavBar from './components/NavBar';
import InputForm from './components/InputForm';
import ResultDisplay from './components/ResultDisplay';
import openaiService from './services/openaiService';
import styles, {layout} from './style';
import FooterSection from './components/FooterSection';

const App = () => {
  return(
    <Router>
    <div className={`bg-primary w-full overflow-hidden`}>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
        <Routes>
          <Route path="/" element={<WelcomePage/>} />
          <Route path="/input" element={<InputPage/>} />
          <Route path="/feedback" element={<FeedbackPage/>} />
          <Route path="/blog" element={<BlogPage/>} />
        </Routes>
        <FooterSection/>
        </div>
      </div>
      
    </div>
  </Router>
  );
};

export default App;