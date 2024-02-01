import { useCallback, useEffect, useState } from 'react'
import LogoAndMenubar from './LogoAndMenubar'
import NavLinks from './NavLinks'
// import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const [onScroll, setOnScroll] = useState(false);

    const isActive = useCallback(() => {
        window.scrollY > 0 ? setOnScroll(true) : setOnScroll(false);
    }, [onScroll, setOnScroll]);

    useEffect(() => {
        window.addEventListener('scroll', isActive);

        return () => {
            window.removeEventListener('scroll', isActive);
        };
    }, [isActive]);

    return (
        <nav className={`bg-orange-900 text-white px-6 lg:px-20 h-[80px] max-h-[80px] flex items-center justify-between fixed w-full z-50
        ${onScroll && 'bg-white duration-500 ease-in-out'}
    
        `}>
            <LogoAndMenubar onScroll={onScroll} />
            <NavLinks onScroll={onScroll} />
        </nav>
    )
}

export default Navbar