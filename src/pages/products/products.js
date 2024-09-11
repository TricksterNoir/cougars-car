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
    <div className='relative w-screen h-screen overflow-x-hidden fixed'>
    <Menu />
    <div className='relative bg-blue-200 h-[23%] w-full flex items-center justify-center p-0 m-0 overflow-hidden'>
        <Image 
            src="/images/carBanner.jpg"
            alt="Imagem de fundo"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
        />
    </div>
    
    <div className='relative bg-prodBg w-full'>
        <div className='relative w-full lg:w-[80%] overflow-hidden grid grid-cols-3 gap-8 p-8 mx-auto'>

            {/* Car #1 */}
            <div className='relative w-full bg-white flex flex-col items-center rounded h-80 product-hover'>
                <div className='relative w-full h-full'>
                    <Image 
                        src="/images/imgProduct/supra_product.png"
                        alt="supra product"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                    />
                </div>
                <h2 className='product-text mt-2'>{t('pr_spr')}</h2>
                <h3 className='product-text'>SUPRA</h3>
                <button className='bg-black w-full h-[20%] rounded-md content-font mt-2 text-xl'>{t('btn_bn')}</button>   
            </div>

            {/* Car #2 */}
            <div className='relative w-full bg-white flex flex-col items-center rounded h-80 product-hover'>
                <div className='relative w-full h-full m-5'>
                    <Image 
                        src="/images/imgProduct/jaguar_xf_product.png"
                        alt="supra product"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                    />
                </div>
                <h2 className='product-text mt-2'>{t('pr_jxf')}</h2>
                <h3 className='product-text'>JAGUAR-XF</h3>
                <button className='bg-black w-full h-[20%] rounded-md content-font mt-2 text-xl'>{t('btn_bn')}</button>   
            </div>

            {/* Car #3 */}
            <div className='relative w-full bg-white flex flex-col items-center rounded h-80 product-hover'>
                <div className='relative w-full h-full left-5'>
                    <Image 
                        src="/images/imgProduct/tesla_y_product.png"
                        alt="supra product"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                    />
                </div>
                <h2 className='product-text mt-2'>{t('pr_tsl')}</h2>
                <h3 className='product-text'>TESLA MODEL Y</h3>
                <button className='bg-black w-full h-[20%] rounded-md content-font mt-2 text-xl'>{t('btn_bn')}</button>   
            </div>
            {/* Car #4 */}
            <div className='relative w-full bg-white flex flex-col items-center rounded h-80 product-hover'>
                <div className='relative w-[125%] h-full'>
                    <Image 
                        src="/images/imgProduct/mustang_gt_product.png"
                        alt="supra product"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                    />
                </div>
                <h2 className='product-text mt-2'>{t('pr_mgt')}</h2>
                <h3 className='text-black w-full text-center'>MUSTANG GT 500</h3>
                <button className='bg-black w-full h-[20%] rounded-md content-font mt-2 text-xl'>{t('btn_bn')}</button>   
            </div>

            {/* Car #5 */}
            <div className='relative w-full bg-white flex flex-col items-center rounded h-80 product-hover'>
                <div className='relative w-[130%] h-full right-2.5'>
                    <Image 
                        src="/images/imgProduct/lamburghini_product.png"
                        alt="supra product"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                    />
                </div>
                <h2 className='product-text mt-2'>{t('pr_lh')}</h2>
                <h3 className='product-text'>LAMBORGHINI HURACAN</h3>
                <button className='bg-black w-full h-[20%] rounded-md content-font mt-2 text-xl'>{t('btn_bn')}</button>   
            </div>

            {/* Car #6 */}
            <div className='relative w-full bg-white flex flex-col items-center rounded h-80 overflow-hidden product-hover'>
                <div className='relative w-full h-full left-0 m-2'>
                    <Image 
                        src="/images/imgProduct/ferrari_product.png"
                        alt="supra product"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                    />
                </div>
                <h2 className='product-text mt-2'>{t('pr_fgtb')}</h2>
                <h3 className='product-text'>FERRARI 488 GTB</h3>
                <button className='bg-black w-full h-[20%] rounded-md content-font mt-2 text-xl'>{t('btn_bn')}</button>   
            </div>
            {/* Car #7 */}
            <div className='relative w-full bg-white flex flex-col items-center rounded h-80 product-hover'>
                <div className='relative w-full h-full'>
                    <Image 
                        src="/images/imgProduct/bmw_i8_product.png"
                        alt="supra product"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                    />
                </div>
                <h2 className='product-text mt-2'>{t('pr_bmw')}</h2>
                <h3 className='product-text'>BMW I8</h3>
                <button className='bg-black w-full h-[20%] rounded-md content-font mt-2 text-xl'>{t('btn_bn')}</button>   
            </div>

            {/* Car #8 */}
            <div className='relative w-full bg-white flex flex-col items-center rounded h-80 product-hover'>
                <div className='relative w-[130%] h-full m-5 right-3'>
                    <Image 
                        src="/images/imgProduct/mercedes_product.png"
                        alt="supra product"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                    />
                </div>
                <h2 className='product-text mt-2'>{t('pr_mr')}</h2>
                <h3 className='product-text'>MERCEDES AMG SL 43</h3>
                <button className='bg-black w-full h-[20%] rounded-md content-font mt-2 text-xl'>{t('btn_bn')}</button>   
            </div>

            {/* Car #9 */}
            <div className='relative w-full bg-white flex flex-col items-center rounded h-80 product-hover'>
                <div className='relative w-[130%] h-full right-1'>
                    <Image 
                        src="/images/imgProduct/lexus_product.png"
                        alt="supra product"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                    />
                </div>
                <h2 className='product-text mt-2'>{t('pr_les')}</h2>
                <h3 className='product-text'>LEXUS ES</h3>
                <button className='bg-black w-full h-[20%] rounded-md content-font mt-2 text-xl'>{t('btn_bn')}</button>   
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