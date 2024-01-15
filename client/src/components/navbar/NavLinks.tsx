import { explore } from '@/data/data';
import { Glasses, Pencil } from 'lucide-react';
import { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { Modals } from '../Modals';

interface NavLinksProps {
    onScroll: boolean;
};

const NavLinks = ({
    onScroll
}: NavLinksProps) => {
    const [onOpen, setOnOpen] = useState(false);
    const [exploreOpen, setExploreOpen] = useState(false);
    
    return (
        <div className='font-semibold flex items-center gap-6'>
            {/* PRO */}
            <div
                onClick={() => setOnOpen(!onOpen)}
                className={`flex items-center gap-2 relative cursor-pointer p-2 rounded-md
                ${onScroll && 'hover:bg-gray-200 text-gray-950'}
                `}>
                <h2>
                    Fiverr Pro
                </h2>

                {onOpen ? (
                    <IoIosArrowUp />
                ) : (
                    <IoIosArrowDown />
                )}
            </div>
            {/* EXPLORE */}
            <div
                onClick={() => setExploreOpen(!exploreOpen)}
                className={`flex items-center gap-2 relative cursor-pointer p-2 rounded-md
                ${onScroll && 'hover:bg-gray-200'}
                `}>
                <h2>
                    Explore
                </h2>

                {exploreOpen ? (
                    <IoIosArrowUp />
                ) : (
                    <IoIosArrowDown />
                )}
            </div>

            <button>
                Become a Seller
            </button>

            <Modals 
            title='Sign in'
            />

            <button className='border py-2 px-6 rounded-md'>
                Join
            </button>





            {/* Fiverr Pro & Explore DropDown */}
            <section className={`absolute top-14 text-gray-800 font-light text-sm rounded-md bg-white p-4 w-[400px] flex flex-col gap-4
            ${onOpen ? 'block' : 'hidden'}
            `}>
                <div className='border p-2 rounded-md flex items-center gap-4 hover:bg-gray-100 cursor-pointer'>
                    <Glasses
                        size={80}
                    />
                    <div>
                        <h2 className='font-semibold'>
                            I am looking to hire
                        </h2>
                        <p className='text-gray-500'>
                            I'd like to work with Pro freelancers and agencies while useing free business tools.
                        </p>
                    </div>
                </div>
                <div className='border p-2 rounded-md flex items-center gap-4 hover:bg-gray-100 cursor-pointer'>
                    <Pencil
                        size={80}
                    />
                    <div>
                        <h2 className='font-semibold'>
                            I want to offer Pro services
                        </h2>
                        <p className='text-gray-500'>
                            I'd would like to work on business projects as a Pro freelancer or agency.
                        </p>
                    </div>
                </div>
            </section>

            {/* Explore DropDown */}
            <section className={`absolute top-14 right-[10rem] p-4 bg-white text-gray-800 font-light text-sm flex flex-col gap-4 rounded-md
            ${exploreOpen ? 'block' : 'hidden'}
            `}>
                {explore.map((item) => (
                    <div
                        key={item.label}
                    >
                        <h2 className='font-semibold'>
                            {item.label}
                        </h2>
                        <p className='text-gray-500'>
                            {item.shortDesc}
                        </p>
                    </div>
                ))}
            </section>


        </div>
    )
}

export default NavLinks