import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { Button } from "../components";

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full bg-red-500 shadow-lg'>
      <nav className='flex justify-between items-center max-container'>
        
        <ul className='flex-1 flex justify-center items-center gap-32 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] text-lg text-white hover:text-gray-200'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        
        <div className='flex gap-8 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24 text-white'>
          <a href='/'></a>
        </div>
        
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};


export default Nav;
