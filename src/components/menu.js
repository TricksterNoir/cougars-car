import Link from 'next/link';
import Image from "next/image";
import { useTranslation } from 'next-i18next';

const styleMenu = "content-center text-xl hover:text-gray-400 cursor-pointer"

const Menu = () =>{
    const { t } = useTranslation();
    return(
        <nav className='w-full fixed top-5 flex justify-between z-10 px-4'>
            <div className='flex-1'>
                <ul className='flex justify-between items-center'>
                    <li className='content-center text-xl hover:text-gray-400 cursor-pointer pl-5 '>Cougar's Car</li>
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
                        <li className={styleMenu}>{t("mn-1")}</li>
                        <li className={styleMenu}>{t("mn-2")}</li>
                        <li className={styleMenu}>{t("mn-3")}</li>
                    </div>
                </ul>
            </div>
        </nav>
);
};

export default Menu;