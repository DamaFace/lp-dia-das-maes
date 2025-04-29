import React from 'react';
import { Users, Award, Smile, Percent, Shield } from 'lucide-react';

const BenefitsBlock: React.FC = () => {
  const benefits = [
    {
      icon: <Users className="h-10 w-10 text-pink-500" />,
      title: "Atendimento humanizado e personalizado",
      description: "Cada cliente é única e recebe um plano de tratamento individualizado."
    },
    {
      icon: <Award className="h-10 w-10 text-pink-500" />,
      title: "Dras. especialistas em estética avançada",
      description: "Profissionais altamente qualificadas com formação específica."
    },
    {
      icon: <Smile className="h-10 w-10 text-pink-500" />,
      title: "Procedimentos com resultados naturais",
      description: "Resultados que realçam a beleza natural, sem exageros."
    },
    {
      icon: <Percent className="h-10 w-10 text-pink-500" />,
      title: "Condições exclusivas para essa campanha",
      description: "Aproveite vouchers especiais válidos até o final do mês das Mães."
    },
    {
      icon: <Shield className="h-10 w-10 text-pink-500" />,
      title: "Rigor com segurança e produtos de alta qualidade",
      description: "Utilizamos apenas produtos certificados e técnicas seguras."
    }
  ];

  return (
    <section className="bg-white py-16" id="benefits">
      <div className="section-container">
        <h2 className="section-title font-display">Por que escolher a DamaFace para esse presente?</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-damaface-white p-6 rounded-xl border border-damaface-gray hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="inline-block p-3 bg-pink-50 rounded-full mb-4">
                {benefit.icon}
              </div>
              <h3 className="font-display text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsBlock;