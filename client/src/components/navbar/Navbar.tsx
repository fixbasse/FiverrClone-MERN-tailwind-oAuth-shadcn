
import { useEffect, useState } from 'react'
import LogoAndMenubar from './LogoAndMenubar'
import NavLinks from './NavLinks'

const Navbar = () => {
    const [onScroll, setOnScroll] = useState(false);

    const isActive = () => {
        window.scrollY > 0 ? setOnScroll(true) : setOnScroll(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', isActive);
        return () => {
            window.addEventListener('scroll', isActive);
        };
    }, [isActive]);



    return (
        <nav className={`bg-green-800 text-white px-6 lg:px-10 h-[80px] max-h-[80px] flex items-center justify-between
        ${onScroll && 'bg-white text-gray-500 duration-500 ease-in-out'}
        `}>
            <LogoAndMenubar onScroll={onScroll} />
            <NavLinks onScroll={onScroll} />
        </nav>
    )
}

export default Navbar