import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {useTranslation } from 'next-i18next'
import {useRouter} from 'next/router'
import Menu from '../../components/menu'
import Form from '../../components/contact_form'
import Image from "next/image"

export default function Contact() {
  const { t } = useTranslation();
  const router = useRouter()

  const handleChange = (locale) =>{
    router.push(router.pathname, router.asPath, {locale})
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between`}
    >
    <div className='relative w-screen h-screen overflow-hidden fixed'>
        <Menu/>
        <h1 className='content text-h1 top-[15%]'>{t('ctt')}</h1>
        <div className = "z-1">
          <Image src="/images/bg_contact.jpg"
              layout = "fill" 
              objectFit = 'cover'
              alt = "Carros"
              className='darkImage'
            />
          </div>
        <div className='absolute left-0 z-1 justify-center items-center w-[45vw] h-[60vh] top-1/2 transform -translate-y-1/2'>
            <Form/>
        </div>
        <div className='bg-brownBg absolute right-10 z-1 bg-opacity-50 flex justify-center items-center w-[30vw] h-[60vh] top-1/2 transform -translate-y-1/2'>
            <div className='content-font w-[80%] text-center'>
              <h2 className='text-h2'>
                {t('ctt_msg')}
              </h2>
            </div>
        </div>
    </div>
</main>
  );
}

  export async function getStaticProps(context){
    const {locale} = context
    return{
      props:{
        ...(await serverSideTranslations(locale))
      }
    }
  }