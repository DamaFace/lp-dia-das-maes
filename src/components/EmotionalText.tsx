import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

const EmotionalText: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="bg-damaface-pink bg-opacity-5 p-8 rounded-2xl hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <Heart className="h-7 w-7 text-pink-500 mr-3" />
              <h2 className="font-display text-2xl font-bold">Autoestima é fundamental!</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Na correria do dia a dia, as mães acabam deixando o cuidado com si mesmas de lado. 
              E mesmo que pareça algo pequeno, isso pode afetar autoestima, humor e bem-estar.
            </p>
            <div className="mt-6 border-t border-pink-100 pt-5">
              <p className="text-pink-600 italic">
                "Quando nos sentimos bem com nossa aparência, nossa confiança se multiplica em todas as áreas da vida."
              </p>
            </div>
          </div>
          
          <div className="bg-damaface-pale bg-opacity-10 p-8 rounded-2xl hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <Sparkles className="h-7 w-7 text-pink-500 mr-3" />
              <h2 className="font-display text-2xl font-bold">Aparência é igualmente acessível.</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Sentir-se bonita é sentir-se confiante. A DamaFace acredita que autoestima é direito 
              de todas — inclusive das mulheres que nos deram a vida. Com condições especiais nessa 
              campanha, agora você pode presentear sua mãe com um cuidado estético feito por especialistas.
            </p>
            <div className="mt-6 border-t border-pink-100 pt-5">
              <p className="text-pink-600 italic">
                "Um presente que vai além do material: é um momento de cuidado, carinho e reconexão consigo mesma."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmotionalText;