import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Menu from '../../components/menu';
import Image from 'next/image';

export default function Contact() {
  const { t } = useTranslation();
  const router = useRouter();

  const handleChange = (locale) => {
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between`}>
      <div className='relative w-screen h-screen overflow-x-hidden fixed'>
        <Menu />
        <div className='relative bg-blue-200 h-[23%] w-full flex items-center justify-center p-0 m-0 overflow-hidden'>
          <Image 
            src="/images/about_top.jpg"
            alt="Imagem de fundo"
            layout="fill"
            objectFit="cover"
            objectPosition="center"

          />
          <h1 className='relative z-[1] m-0 p-0 text-white text-center text-5xl'>{t('h_abt_us')}</h1>
        </div>

        <div className='relative h-[77%] w-full flex itens-center justify-center p-0 m-0 overflow-hidden'>
          <Image
            src = "/images/about_car_2.jpg"
            alt = "Imagem de fundo"
            layout = "fill"
            objectFit = "cover"
            objectPosition = "center"
            className = "darkImage"
          />
          <div className='absolute left-5 z-1 justify-center items-center w-[45vw] h-[60vh] top-1/2 transform -translate-y-1/2'>
            <h1 className='relative z-[1] m-0 p-0 text-white text-center text-6xl top-[5%]'>{t('h_text_abt')}</h1>
            <h2 className='relative z-[1] m-0 p-0 text-white text-center top-[12%]'>{t('b_text_abt')}</h2>
          </div>
        </div>

        <div className='relative bg-white h-screen w-screen p-0 m-0'>
          <div className='bg-brownBg absolute right-10 z-1 bg-opacity-50 flex justify-center items-center w-[30vw] h-[60vh] top-1/2 transform -translate-y-1/2'>
            <h2 className='relative z-[1] m-0 p-1 text-black text-center'>{t('b_text_ab')}</h2>
          </div>
          <div className='absolute w-[40vw] top-[15%] transform -translate-y-1/2'>
            <h1 className='text-center border-b-4 border-red-500 text-black'>{t('h_tgt')}</h1>
          </div>
          <div className='absolute w-[40vw] top-[30%] left-5'>
            <h2 className='mb-12 text-black'>
              <span className="inline-block w-5 h-5 mr-2 bg-red-500 rounded-full"></span>
              {t('b_top_1')}
            </h2>
            <h2 className='text-black'>
            <span className="inline-block w-5 h-5 mr-2 bg-red-500 rounded-full"></span>
            {t('b_top_2')}
            </h2>
          </div>
        </div>

        <div className='bg-blue-200 h-screen w-screen p-0 m-0'>
          <div className='relative h-full w-full flex itens-center justify-center p-0 m-0 overflow-hidden'>
            <Image
              src = "/images/stock_about.jpg"
              alt = "Imagem de fundo"
              layout = "fill"
              objectFit = "cover"
              objectPosition = "center"
              className = "darkImage"
            />
            <div className='absolute top-[15%] text-center'>
              <h1 className='text-white text-6xl'>{t('h_objective')}</h1>
              <h2 className='text-white w-[50%] mx-auto'>{t('b_objective')}</h2>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export async function getStaticProps(context) {
  const { locale } = context;
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}