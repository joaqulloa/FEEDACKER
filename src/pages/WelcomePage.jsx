import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import {AboutSection, BusinessSection, ServiceSection, CTA} from '../components';
import styles from '../style';
import Business from '../components/BusinessSection';

const WelcomePage = () => {
  return (
    <section>
        <HeroSection/>
        <BusinessSection/>
        <CTA/>
    </section>
  );
};

export default WelcomePage;