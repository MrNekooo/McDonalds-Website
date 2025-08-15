import logo from '../../../assets/image3.png'

const Navbar = () => {
  return (
    <>
      <div className="">
        <div>
          <img  src={logo}
              alt='Logo Page'
              className='bg-red p-3 rounded-sm' />
          <ul>
            <li className='text-red'> HomePage </li>
            <li > Menu </li>
            <li > Sale off </li>
            <li > News </li>
            <li > Contact </li>
          </ul>
        </div>

        <div>
          
        </div>
      </div>
    </>
  )
}

export default Navbar