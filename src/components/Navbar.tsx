
import Image from "next/image";
import MenuIcon from '../assets/icons/menu.svg';


export const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="px-4">
    <div className="container bg-transparent">
      <div className="py-4 flex items-center justify-between">

      <div className="relative">
        <Image
          src="/images/logo.png"
          alt="枢途科技 logo"
          width={160}
          height={48}
          className="h-10 sm:h-12 w-auto object-contain"
          priority
        />
      </div>
      <div className='border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden'>

      <MenuIcon className="text-white" />
      </div>
      <nav className='text-white gap-6 items-center hidden sm:flex'>
        
        <a href="#" className='text-opacity-60 text-white hover:text-opacity-100 transition' >首页</a>
        <a href="#" className='text-opacity-60 text-white hover:text-opacity-100 transition'>技术亮点</a>
        <a href="#" className='text-opacity-60 text-white hover:text-opacity-100 transition'>产品 Sample</a>
        <a href="#" className='text-opacity-60 text-white hover:text-opacity-100 transition'>加入我们</a>
        <a href="#" className='text-opacity-60 text-white hover:text-opacity-100 transition'>联系我们</a>
        <button className='bg-white py-2 px-4 rounded-lg text-black'>探索 Synadata</button>
      </nav>

      </div>




    </div>
    </div>
    </div>
  )
};
