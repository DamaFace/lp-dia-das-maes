import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-white pt-24 pb-12" id="hero">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block relative mb-6">
            <div className="absolute -inset-1 bg-damaface-pink opacity-30 rounded-full blur"></div>
            <h1 className="relative font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              SUA MÃE MERECE UM DIA DE DAMA!
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
            Celebre esse Dia das Mães com autoestima, cuidado e beleza. 
            Resgate agora um voucher exclusivo da DamaFace para presentear 
            sua mãe com um momento especial.
          </p>
          
          <a 
            href="#voucher" 
            className="btn-primary inline-block animate-pulse"
          >
            Quero Resgatar o Voucher
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          className="relative block w-full h-16"
          fill="#f9b8d0"
          opacity="0.1"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;