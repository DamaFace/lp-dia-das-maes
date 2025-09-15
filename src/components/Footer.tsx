import React from 'react';
import { Instagram, Facebook, Twitter, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-damaface-gray">
      <div className="section-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <img 
              src="https://images.builderservices.io/s/cdn/v1.0/i/m?url=https%3A%2F%2Fstorage.googleapis.com%2Fproduction-hostgator-brasil-v1-0-5%2F955%2F318955%2FcX5ejCQ7%2F4dce5db9740c49baaa09755065dfcd71&methods=resize%2C500%2C5000" 
              alt="DamaFace Logo" 
              className="h-16 mb-4"
            />
            <p className="text-gray-600 mb-4">
              Especialistas em estética facial avançada, com foco em resultados naturais e atendimento personalizado.
            </p>
          </div>
          
          <div>
            <h3 className="font-display text-lg font-bold mb-4">Contato</h3>
            <p className="text-gray-600 mb-2">contato@damaface.com.br</p>
            <p className="text-gray-600">Central de Atendimento: <br />(19) 98217-7463</p>
          </div>
          
          <div>
            <h3 className="font-display text-lg font-bold mb-4">Unidades</h3>
            <ul className="space-y-2 text-gray-600">
              <li>AlphaVille/SP</li>
              <li>Cajamar/SP</li>
              <li>Campinas Castelo/SP</li>
              <li>Cerquilho/SP</li>
              <li>Chopinzinho/PR</li>
              <li>Jundiaí/SP</li>
              <li>Juquitiba/SP</li>
              <li>Natal/RN</li>
              <li>Nova Iguaçu/RJ</li>
              <li>Osasco/SP</li>
              <li>Mogi das Cruzes/SP</li>
              <li>São Carlos/SP</li>
              <li>São João da Boa Vista/SP</li>
              <li>Vinhedo/SP</li>
              <li>Porto Velho/RO</li>
              <li>Jaguariuna/SP</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display text-lg font-bold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/damafaceoficial/" className="bg-damaface-pink bg-opacity-20 p-2 rounded-full hover:bg-opacity-40 transition-colors duration-200">
                <Instagram className="h-5 w-5 text-pink-600" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61555121465049" className="bg-damaface-pink bg-opacity-20 p-2 rounded-full hover:bg-opacity-40 transition-colors duration-200">
                <Facebook className="h-5 w-5 text-pink-600" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-damaface-gray pt-8">
          <div className="bg-damaface-gray bg-opacity-30 p-4 rounded-lg mb-4">
            <h4 className="font-display text-sm font-bold mb-2">Regulamento Campanha Dia das Mães DamaFace</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              A campanha é promovida pela WF Franchising and Licensing através da rede de franquias DamaFace e está aberta a clientes maiores de 18 anos entre 01/05/2025 e 31/05/2025.
              O uso do voucher requer avaliação clínica em uma unidade DamaFace.
              Vouchers no valor de R$ 200,00 serão válidos para compras acima de R$ 1000,00 e não são cumulativos com outros descontos.
              O voucher será enviado por e-mail após o cadastro e só poderá ser utilizado uma única vez, até 31/05/2025.
              A empresa reserva-se o direito de alterar ou cancelar a campanha sem aviso prévio.
              Dúvidas devem ser enviadas para: contato@damaface.com.br
              Ao participar, você aceita os termos desta campanha.
            </p>
          </div>
          
          <div className="text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} DamaFace. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
