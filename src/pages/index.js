import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {useTranslation } from 'next-i18next'
import {useRouter} from 'next/router'
import Menu from '../components/menu'
import Image from "next/image"
import Link from 'next/link';

export default function Home() {
  const {t,i18n} = useTranslation()
  const router = useRouter()

  const handleChange = (locale) =>{
    router.push(router.pathname, router.asPath, {locale})
  }

  const buttonStyle = "content-font button-main px-10 py-1.5 rounded hover:bg-gray-200 hover:text-black"

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between`}
    >
    <div className='relative w-screen h-screen overflow-hidden bg-blue-200 fixed'>
      <Menu/>
    <h1 className='content top-[15%]'>TOYOTA - SUPRA</h1>
        <div className = "z-1">
          <Image src="/images/supra.jpg"
              layout = "fill" 
              objectFit = 'cover'
              alt = "Toyota - Supra"
              className='darkImage'
            />
          </div>
          <div className='absolute inset-0 flex justify-center items-end bg-opacity-40 g-black text-white z-1 gap-2.5 mb-20'>
            <button className={buttonStyle}><Link href="/product/product" passHref> {t('bt-1')}</Link></button>
            <button className={buttonStyle}>{t('bt-2')}</button>
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