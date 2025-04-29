import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeatureImage from './components/FeatureImage';
import EmotionalText from './components/EmotionalText';
import VoucherForm from './components/VoucherForm';
import BenefitsBlock from './components/BenefitsBlock';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <HeroSection />
      <FeatureImage />
      <EmotionalText />
      <VoucherForm />
      <BenefitsBlock />
      <Footer />
    </div>
  );
}

export default App;