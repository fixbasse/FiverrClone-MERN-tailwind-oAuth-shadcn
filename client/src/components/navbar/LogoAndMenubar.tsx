import { Menu } from 'lucide-react'

interface LogoProps {
    onScroll: boolean;
};

const LogoAndMenubar = ({
    onScroll
}: LogoProps) => {
    return (
        <div className='flex items-center gap-4 font-bold text-4xl'>
            <Menu
                className='lg:hidden'
                size={30}
            />
            <div className='flex'>
                <h1 className={`text-white
                    ${onScroll && 'text-gray-800'}
                `}>
                    fiverr
                </h1>
                <span className='text-green-500'>
                    .
                </span>
            </div>
        </div>
    )
}

export default LogoAndMenubar