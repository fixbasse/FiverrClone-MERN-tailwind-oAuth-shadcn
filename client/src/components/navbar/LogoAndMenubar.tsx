import { Link } from "react-router-dom";
import { Sidebar } from "./Sidebar";

interface LogoProps {
    onScroll: boolean;
};

const LogoAndMenubar = ({
    onScroll
}: LogoProps) => {
    return (
        <div className='flex items-center max-[425px]:mx-auto font-bold text-3xl md:text-4xl'>
            <Sidebar />

            <div className='flex'>
                <Link
                    to='/'
                    className={`
                    ${onScroll && 'text-gray-600'}
                `}>
                    ActivePeople
                </Link>
                <span className='text-green-500'>
                    .
                </span>
            </div>
        </div>
    )
}

export default LogoAndMenubar