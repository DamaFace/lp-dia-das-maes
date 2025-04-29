import React from 'react';
import { Heart } from 'lucide-react';
import logo from './../assets/LOGO-DAMAFACE-HORIZONTAL.png'

const Header: React.FC = () => {
  return (
    <header className="bg-white py-4 px-4 shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <a href="https://damaface.com.br" className="flex items-center">
          <Heart className="h-8 w-8 text-damaface-pink mr-2" />
          <img className='flex h-8 w-36' src={logo} alt="Logo DamaFace Franquias" />
        </a>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors duration-200">Home</a>
          <a href="#benefits" className="text-gray-700 hover:text-pink-500 transition-colors duration-200">Benefícios</a>
          <a href="#voucher" className="text-gray-700 hover:text-pink-500 transition-colors duration-200">Voucher</a>
        </nav>
        <a 
          href="#voucher" 
          className="text-sm font-medium bg-pink-100 text-pink-600 px-4 py-2 rounded-full hover:bg-pink-200 transition-colors duration-200"
        >
          Resgatar Voucher
        </a>
      </div>
    </header>
  );
};

export default Header;