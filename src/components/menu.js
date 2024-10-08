import Link from 'next/link';
import Image from "next/image";
import { useTranslation } from 'next-i18next';

const styleMenu = "content-center text-xl hover:text-gray-400 cursor-pointer"

const handleNavigation = (path) => {
    router.push(path);
  };

const Menu = () =>{
    const { t } = useTranslation();
    return(
        <nav className='w-full fixed top-5 flex justify-between z-20 px-4'>
            <div className='flex-1'>
                <ul className='flex justify-between items-center'>
                    <li className='content-center text-xl hover:text-gray-400 cursor-pointer pl-5 '>{t('site_name')}</li>
                    <div className='absolute left-1/2 transform -translate-x-1/2'>
                        <Image 
                        src="/images/logo_white.png"
                        alt="logo"
                        objectFit='fill'
                        width={50}
                        height={50}
                        />
                    </div>
                    <div className='ml-auto flex space-x-4 pr-5'>
                        <li className={styleMenu}>
                        <Link href="/products/products" passHref>
                            {t("mn-1")}
                        </Link>
                        </li>
                        <li className={styleMenu}>
                        <Link href="/contact/contact" passHref>
                            {t("mn-2")}
                        </Link>
                        </li>
                        <li className={styleMenu}>
                        <Link href="/about/about" passHref>
                            {t("mn-3")}
                        </Link></li>
                    </div>
                </ul>
            </div>
        </nav>
);
};

export default Menu;