import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {useTranslation } from 'next-i18next'
import {useRouter} from 'next/router'

export default function Home() {
  const {t,i18n} = useTranslation()
  const router = useRouter()

  const handleChange = (locale) =>{
    router.push(router.pathname, router.asPath, {locale})
  }
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
    <h1 className='text-red-500 text04xl'>{t('hello')}</h1>
    <button onClick ={()=> handleChange('en')}>Change</button>
    <button onClick ={()=> handleChange('pt')}>Mudar</button>
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