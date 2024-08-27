import ReactInputMask from 'react-input-mask';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { t } = useTranslation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'sylvioez@gmail.com',
          subject: `Contato de ${formData.name}`,
          text: `
            ${t('n_name')}: ${formData.name}
            EMAIL: ${formData.email}
            ${t('n_phone')}: ${formData.phone}
            ${t('n_msg')}: ${formData.message}
          `,
        }),
      });

      if (response.ok) {
        setSuccessMessage(t('email_sent_success'));
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        throw new Error(t('email_sent_failure'));
      }
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-full">
      <form onSubmit={handleSubmit} className='space-y-4 text-black w-[70%]'>
        <div className='w-full'>
          <label htmlFor='name' className='content-font block text-sm font-medium text-white'>{t('n_name')}</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={t('n_name')}
            className="content-font mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor='email' className='content-font block text-sm font-medium text-white'>{t('email')}</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t('email')}
            className="content-font mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor='phone' className='content-font block text-sm font-medium text-white'>{t('n_phone')}</label>
          <ReactInputMask
            mask={t('mask')}
            value={formData.phone}
            onChange={handleChange}
            id="phone"
            name="phone"
            placeholder={t('h_phone')}
            className="content-font mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor='message' className='content-font block text-sm font-medium text-white'>{t('n_msg')}</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            placeholder={t('h_msg')}
            className="content-font mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="content-font px-20 py-4 bg-ctt_btn_Bg text-white rounded-md hover:bg-gray-200 hover:text-black"
            disabled={loading}
          >
            {loading ? t('sending') : t('ctt_btn')}
          </button>
        </div>
        {loading && <p className="text-blue-500">{t('sending')}</p>}
        {successMessage && <p className="text-green-500">{successMessage}</p>}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      </form>
    </div>
  );
}