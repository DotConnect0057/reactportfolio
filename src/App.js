import './App.css';
import { useDarkMode } from './hooks/useDarkMode';
import * as Avatar from '@radix-ui/react-avatar';
import * as Switch from '@radix-ui/react-switch';
import { Link as Scroll } from 'react-scroll';

import { MdDarkMode } from 'react-icons/md';
import { RxSun } from 'react-icons/rx';

import img from './assets/logo_simple_black.png';
import Main from './components/Main';


function App() {

  const status = useDarkMode();

  const Logo = () => {
    return (
      <Avatar.Root className="bg-blackA3 inline-flex h-[37px] w-[37px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
      <Avatar.Image
        className="h-full w-full rounded-[inherit] object-cover"
        src={img}
        alt="Colm Tuite"
      />
      <Avatar.Fallback
        className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
        delayMs={600}
      >
        CT
      </Avatar.Fallback>
    </Avatar.Root>
    )
  }

  return (
    <>
     <div id="Home" className="flex w-full h-full justify-center text-black dark:text-white bg-[#f0f0ef] dark:bg-[#1b1b1b]">
      <div className="w-[1512px]">

        <div className="flex w-full h-[48px] justify-between bg-white dark:bg-[#313131] sticky top-0 z-50">
          <div className="flex w-1/2 justify-start items-center">
            <div className="ml-[88px]">
              <Logo />
            </div>
            <div className="ml-[24px]">
              DotConnect
            </div>
          </div>
          <div className="flex w-1/2 justify-between items-center gap-x-72px">
            <button className="hover:text-cyan-500 duration-300"><Scroll to="Home" smooth={true}>Home</Scroll></button>
            <button className="hover:text-cyan-500 duration-300"><Scroll to="Experience" smooth={true}>Experience</Scroll></button>
            <button className="hover:text-cyan-500 duration-300"><Scroll to="My Self" smooth={true}>My Self</Scroll></button>
            <button className="hover:text-cyan-500 duration-300"><Scroll to="Contact" smooth={true}>Contact</Scroll></button>
            <div className="flex flex-nowrap items-center mr-[64px]">
              <div className="mr-2 text-black text-2xl">
                {status.isDarkMode ? 
                  <MdDarkMode /> 
                  :
                  <RxSun />
                }
              </div>
              <Switch.Root
                className="w-[42px] h-[25px] bg-[#c4c4d0] rounded-full relative
                 data-[state=checked]:bg-black outline-none cursor-default"
                id="airplane-mode"
                style={{ '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)' }}
                defaultChecked
                onCheckedChange={status.toggle}
              >
                <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA7 
                transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" 
                />
              </Switch.Root>
            </div>
          </div>
        </div>
  
        <Main />

      </div>

     </div>
    </>
  );
}

export default App;
