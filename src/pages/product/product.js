import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {useTranslation } from 'next-i18next'
import {useRouter} from 'next/router'
import Menu from '../../components/menu'
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
    <div className='relative w-screen h-screen overflow-x-hidden fixed'>
        <Menu />
        <div className='bg-blue-200 relative w-screen h-screen overflow-x-hidden fixed'>
            <div className='bg-red-200 absolute bottom-0 left-0 w-screen h-[15%] mb-20 grid grid-cols-4 gap-8 p-8'>
                <div className='bg-white lg:w-[80%]'>
                    <h2>DIV 1</h2>
                </div>
                <div className='bg-white lg:w-[80%]'>
                    <h2>DIV 2</h2>
                </div>
                <div className='bg-white lg:w-[80%]'>
                    <h2>DIV 3</h2>
                </div>
                <div className='bg-white lg:w-[80%]'>
                    <h2>DIV 4</h2>
                </div>
            </div>
        </div>

        <div className='relative bg-black h-screen w-screen p-0 m-0'>
          <div className='bg-brownBg absolute right-10 z-1 bg-opacity-50 flex justify-center items-center w-[30vw] h-[60vh] top-1/2 transform -translate-y-1/2'>
            {/* <Image
                    src="/images/supra/supra_04.jpg"
                    lt="Imagem de fundo"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                /> */}
          </div>
          <div className='absolute w-[40vw] top-[15%] transform -translate-y-1/2'>
            <h1 className='text-center border-b-4 border-red-500 text-white'>
                {/* {t('h_tgt')} */}
            </h1>
          </div>
          <div className='absolute bg-brownBg w-[40vw] top-[30%] left-5'>
            <h2 className='mb-12 text-white'>
              <span className="inline-block w-5 h-5 mr-2 bg-red-500 rounded-full"></span>
              {/* {t('b_top_1')} */}
            </h2>
            <h2 className='text-white'>
              <span className="inline-block w-5 h-5 mr-2 bg-red-500 rounded-full"></span>
              {/* {t('b_top_2')} */}
            </h2>
            <h2 className='text-white'>
              <span className="inline-block w-5 h-5 mr-2 bg-red-500 rounded-full"></span>
              {/* {t('b_top_2')} */}
            </h2>
            <h2 className='text-white'>
              <span className="inline-block w-5 h-5 mr-2 bg-red-500 rounded-full"></span>
              {/* {t('b_top_2')} */}
            </h2>
          </div>
        </div>

        <div className=' bg-white relative w-screen h-screen'>
            {/* <div>
              <Image
                src='/images/supra/supra_05.jpg'
                lt='Imagem de fundo'
                layout='fill'
                objectFit='cover'
                objectPosition='center'
              />
            </div>
            <div className='absolute content top-[10%] z-10'>
              <h1>BEYOND TIME</h1>
            </div> */}
        </div>

        <div className='absolute bg-blue-200 w-screen h-[150%]'>
              <h1>EU SOU A DIV 4</h1>
              {/* Parte 1 */}
              <div className='relative bg-red-200 w-screen h-[34%]'> 
                <div className='absolute left-10 z-1 justify-center items-center w-[45vw] h-[50vh] top-1/2 transform -translate-y-1/2'>
                  {/* <Image
                  src='/images/supra/supra_05.jpg'
                  lt='imagem de fundo'
                  layout='fill'
                  objectFit='cover'
                  objectPosition='center'
                  /> */}
                </div>
                <div className='bg-brownBg absolute right-10 z-1 bg-opacity-50 flex flex-col items-start w-[40vw] h-[50vh] top-1/2 transform -translate-y-1/2 p-4'>
                  <h2 className='mb-6'>SOU UM BAITA TEXTO DAORA</h2>
                  <h3>Eu sou um corpo bacana</h3>
                </div>
              </div>

              {/* Parte 2 */}
              <div className='relative bg-red-200 w-screen h-[34%]'> 
              <div className='absolute bg-brownBg bg-opacity-50 left-10 z-10 flex flex-col items-start w-[45vw] h-[50vh] top-1/2 transform -translate-y-1/2 p-4'>
                <h2 className='mb-6'>SOU UM BAITA TEXTO DAORA</h2>
                <h3>Eu sou um corpo bacana</h3>
              </div>
                <div className='bg-brownBg absolute right-10 z-1 bg-opacity-50 flex justify-center items-center w-[40vw] h-[50vh] top-1/2 transform -translate-y-1/2'>
                  {/* <Image
                    src='/images/supra/supra_05.jpg'
                    lt='imagem de fundo'
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                  /> */}
                </div>
              </div>

              {/* Parte 3 */}
              <div className='relative bg-red-200 w-screen h-[34%]'> 
                <div className='absolute left-10 z-1 justify-center items-center w-[45vw] h-[50vh] top-1/2 transform -translate-y-1/2'>
                  {/* <Image
                  src='/images/supra/supra_05.jpg'
                  lt='imagem de fundo'
                  layout='fill'
                  objectFit='cover'
                  objectPosition='center' 
                  />*/}

                </div>
                <div className='bg-brownBg absolute right-10 z-1 bg-opacity-50 flex flex-col items-start w-[40vw] h-[50vh] top-1/2 transform -translate-y-1/2 p-4'>
                  <h2 className='mb-6'>SOU UM BAITA TEXTO DAORA</h2>
                  <h3>Eu sou um corpo bacana</h3>
                </div>
              </div>

             <div className='relative bg-blue-200 w-screen h-screen'>
              <div className='absolute inset-0'>
              {/* <Image 
                src='/images/supra/supra_view.jpg'
                lt='Imagem de fundo'
                layout='fill'
                objectFit='cover'
                objectPosition='center'
              /> */}
              </div>
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