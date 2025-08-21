import logo from '../../assets/image3.png'

import { FaTwitter } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaFacebookMessenger } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='flex items-center justify-around py-[30px] max-md:flex-col-reverse max-md:gap-[60px]'>
        <div className='flex flex-col gap-5'>
            <div className='flex items-center justify-center gap-5'>
                <img    src={logo}
                        className='p-3 rounded-sm bg-red' />
                <h2 className='font-semibold text-[32px]'>Mc Donald's</h2>
            </div>
            <div className='flex items-center justify-around text-gray-light'>
                <button className='transition-all ease-in delay-50 hover:text-twitter'> <FaTwitter/> </button>
                <button className='transition-all ease-in delay-50 hover:text-facebook'> <FaFacebook/> </button>
                <button className='transition-all ease-in delay-50 hover:text-messager'> <FaFacebookMessenger/> </button>
            </div>
        </div>

        <div className='flex items-start justify-start gap-10'>
            <div className='flex flex-col items-start gap-8'>
                <h3 className='text-black'>Useful links</h3>
                <ul className='flex flex-col gap-3 text-gray-light max-sm:text-sm max-sm:gap-5'>
                    <li>Hamburger</li>
                    <li>Menu</li>
                    <li>Sale off</li>
                    <li>News</li>
                    <li>Contect</li>
                </ul>
            </div>
            <div className='flex flex-col items-start gap-8'>
                <h3 className='text-black'>Opening Hour</h3>
                <ul className='flex flex-col gap-3 text-gray-light max-sm:text-sm max-sm:gap-5'>
                    <li>Monday - Friday:9:00 - 23:00h</li>
                    <li>Saturday:09:00 - 16:00h</li>
                    <li>Sunday:12:00 - 18:00h</li>
                </ul>
            </div>
        </div>
    </div>
    // Nekooo
  )
}

export default Footer