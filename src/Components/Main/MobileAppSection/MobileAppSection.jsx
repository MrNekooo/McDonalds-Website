import MobilePicture from '../../../assets/MobilePicture.png'
import { FaApple } from 'react-icons/fa'
import { FaGooglePlay } from 'react-icons/fa'

const MobileAppSection = () => {
  return (
    <div className='flex items-center justify-evenly py-[60px] max-lg:flex-col-reverse max-lg:gap-8'>

      <div>
        <img src={MobilePicture} />
      </div>

      <div className='flex flex-col gap-3'>

        <div>
          <p className='text-xl font-medium text-gray-light'> Exclusive offers and more </p>
          <h2 className='text-[48px] font-semibold text-red'> MCDONALD’S MOBILE APP </h2>
          <p className='text-[16px] font-normal text-black max-w-[800px]'> As a global No. 1 fast food brand, McDonald's wishes to bring customers not only delicious and hygienic food of international standards but also the best service experience. </p>
        </div>
        <div className='flex items-center gap-5'>
          <button type='submit' className='flex items-center justify-center gap-2 px-4 py-2 text-white bg-gray-high rounded-[50px]'>
            <FaApple className='max-w-6 max-h-6'/>
            <div className='flex flex-col items-start '>
              <p className='text-[14px] font-light max-sm:text-[10px]'> Download on the </p>
              <p className='text-[16px] font-medium'> App Store </p>
            </div>
          </button>
          <button type='submit' className='flex items-center justify-center gap-2 px-4 py-2 text-white bg-gray-high rounded-[50px]'>
            <FaGooglePlay className='max-w-6 max-h-6'/>
            <div className='flex flex-col items-start '>
              <p className='text-[14px] font-light max-sm:text-[10px]'> Download on the </p>
              <p className='text-[16px] font-medium'> Google Play </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default MobileAppSection