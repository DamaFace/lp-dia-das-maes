import React, { useState } from 'react';

type FormData = {
  fullName: string;
  motherName: string;
  email: string;
  whatsapp: string;
  motherWhatsapp: string;
  unit: string;
};

const VoucherForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    motherName: '',
    email: '',
    whatsapp: '',
    motherWhatsapp: '',
    unit: '',
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const formatWhatsApp = (value: string): string => {
    const cleaned = value.replace(/\D/g, '').slice(0, 11);

    if (cleaned.length <= 2) return `(${cleaned}`;
    if (cleaned.length <= 7) return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2)}`;
    if (cleaned.length <= 11)
      return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7)}`;

    return value;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === 'whatsapp' || name === 'motherWhatsapp') {
      const formattedValue = formatWhatsApp(value);
      setFormData(prev => ({
        ...prev,
        [name]: formattedValue,
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    const whatsappRegex = /^(\d{2})(9\d{8})$/;
    const cleanWhatsapp = formData.whatsapp.replace(/\D/g, '');
    const cleanMotherWhatsapp = formData.motherWhatsapp.replace(/\D/g, '');

    if (!whatsappRegex.test(cleanWhatsapp)) {
      setErrorMessage('O número de WhatsApp informado é inválido. Use o formato com DDD e número com 9 dígitos.');
      setIsSubmitting(false);
      return;
    }

    if (!whatsappRegex.test(cleanMotherWhatsapp)) {
      setErrorMessage('O número de WhatsApp da mãe é inválido. Use o formato com DDD e número com 9 dígitos.');
      setIsSubmitting(false);
      return;
    }

    try {
      await fetch('https://n8n-n8n.i4khe5.easypanel.host/webhook/dia-das-maes', {
        method: 'POST',
        body: JSON.stringify({
          ...formData,
          whatsapp: cleanWhatsapp,
          motherWhatsapp: cleanMotherWhatsapp,
        }),
      });

      await new Promise(resolve => setTimeout(resolve, 1500));

      setSubmitSuccess(true);
      setFormData({
        fullName: '',
        motherName: '',
        email: '',
        whatsapp: '',
        motherWhatsapp: '',
        unit: '',
      });
    } catch (error) {
      setSubmitSuccess(false);
      setErrorMessage('Ocorreu um erro ao processar seu pedido. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-damaface-pink bg-opacity-10 py-16" id="voucher">
      <div className="section-container">
        <h2 className="section-title font-display">Resgate o Voucher Especial</h2>

        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-10">
          {submitSuccess ? (
            <div className="text-center py-10">
              <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <h3 className="text-2xl font-display font-bold mb-4">Voucher Resgatado com Sucesso!</h3>
              <p className="text-gray-600 mb-6">
                Enviamos os detalhes do seu voucher para o e-mail informado. 
                Em breve você receberá todas as instruções para utilizar esse presente especial!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="fullName" className="form-label">Nome completo</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="input-field"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="motherName" className="form-label">Nome da mãe</label>
                  <input
                    type="text"
                    id="motherName"
                    name="motherName"
                    className="input-field"
                    value={formData.motherName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="form-label">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input-field"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="whatsapp" className="form-label">WhatsApp</label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    className="input-field"
                    placeholder="(00) 00000-0000"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="motherWhatsapp" className="form-label">WhatsApp da mãe</label>
                  <input
                    type="tel"
                    id="motherWhatsapp"
                    name="motherWhatsapp"
                    className="input-field"
                    placeholder="(00) 00000-0000"
                    value={formData.motherWhatsapp}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="unit" className="form-label">Unidade DamaFace mais próxima</label>
                <select
                  id="unit"
                  name="unit"
                  className="input-field"
                  value={formData.unit}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione uma unidade</option>
                  <option value="AlphaVille/SP">AlphaVille/SP</option>
                  <option value="Cajamar/SP">Cajamar/SP</option>
                  <option value="Campinas Castelo/SP">Campinas Castelo/SP</option>
                  <option value="Cerquilho/SP">Cerquilho/SP</option>
                  <option value="Chopinzinho/PR">Chopinzinho/PR</option>
                  <option value="Jundiaí/SP">Jundiaí/SP</option>
                  <option value="Juquitiba/SP">Juquitiba/SP</option>
                  <option value="Natal/RN">Natal/RN</option>
                  <option value="Nova Iguaçu/RJ">Nova Iguaçu/RJ</option>
                  <option value="Osasco/SP">Osasco/SP</option>
                  <option value="Mogi das Cruzes/SP">Mogi das Cruzes/SP</option>
                  <option value="São Carlos/SP">São Carlos/SP</option>
                  <option value="São João da Boa Vista/SP">São João da Boa Vista/SP</option>
                  <option value="Vinhedo/SP">Vinhedo/SP</option>
                  <option value="Porto Velho/RO">Porto Velho/RO</option>
                  <option value="Jaguariuna/SP">Jaguariuna/SP</option>  
                </select>
              </div>

              {errorMessage && (
                <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm">
                  {errorMessage}
                </div>
              )}

              <button type="submit" className="btn-primary w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processando...
                  </span>
                ) : "Quero Resgatar Meu Voucher"}
              </button>

              <p className="text-xs text-center text-gray-500 mt-4">
                Ao resgatar o voucher, você concorda com os termos do regulamento da campanha.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default VoucherForm;
