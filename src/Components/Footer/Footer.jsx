import logo from '../../assets/image3.png'

import { FaTwitter } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaFacebookMessenger } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='flex items-center justify-between'>
        <div className='flex flex-col gap-5'>
            <div className='flex items-center justify-center gap-5'>
                <img    src={logo}
                        className='p-3 rounded-sm bg-red' />
                <h2 className='font-semibold text-[32px]'>Mc Donald's</h2>
            </div>
            <div className='flex items-center justify-around text-gray-light'>
                <button> <FaTwitter/> </button>
                <button> <FaFacebook/> </button>
                <button> <FaFacebookMessenger/> </button>
            </div>
        </div>

        <div>
            <div>Useful links</div>
            <div>Opening Hour</div>
        </div>
    </div>
  )
}

export default Footer