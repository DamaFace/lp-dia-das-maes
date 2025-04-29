import React from 'react';

const FeatureImage: React.FC = () => {
  return (
    <section className="bg-damaface-pale bg-opacity-30 py-12">
      <div className="section-container">
        <div className="relative max-w-4xl mx-auto overflow-hidden rounded-xl shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-10"></div>
          <img 
            src="https://images.pexels.com/photos/3768146/pexels-photo-3768146.jpeg" 
            alt="Mãe e filha abraçadas, compartilhando um momento de carinho e amor" 
            className="w-full h-auto object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
            <p className="text-white text-center text-lg font-medium italic">
              "Porque ela merece mais do que flores. Merece se sentir linda todos os dias."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureImage;