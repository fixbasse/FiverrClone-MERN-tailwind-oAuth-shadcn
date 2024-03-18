import { useContext } from 'react'

import { AuthContext } from '@/context/auth/AuthContext';

import { Modals } from '../modals/Login&Register/Modals';
import { UserMenuDropdown } from '../dropdowns/UserMenuDropdown';
import { FiverProDropdown } from '../dropdowns/FiverrProDropdown';
import { ExploreDropdown } from '../dropdowns/ExploreDropdown';
import { useLocation } from 'react-router-dom';

interface NavLinksProps {
    onScroll: boolean;
}

const NavLinks = ({
    onScroll,

}: NavLinksProps) => {
    const {
        user,
        setIsLoading
    } = useContext(AuthContext);
    const { pathname } = useLocation();

    console.log(user);

    // 
    const becomeSellerLink = () => {
        setIsLoading(true);

        window.location.replace('/become-a-seller/overview');
    };

    return (
        <div className='font-semibold flex items-center gap-6'>

            {/* DROPDOWN MENU */}
            <>
                <div className='hidden md:block'>
                    <FiverProDropdown onScroll={onScroll} />
                </div>
                <div className='hidden md:block'>
                    <ExploreDropdown onScroll={onScroll} />
                </div>
            </>

            {/* IF USER ? Go to SELLER PAGE : Trigger LOGIN Modal */}
            <>
                {user ? (
                    <button
                        onClick={becomeSellerLink}
                        className={`hidden md:block
                    ${onScroll
                            && 'hover:text-orange-800 text-gray-500'}
                    ${pathname !== '/' && 'text-gray-900'}  
                    `}>

                        Become a Seller
                    </button>
                ) : (
                    <div className='hidden md:block'>
                        <Modals
                            title='Become a Seller'
                            onScroll={onScroll}
                        />
                    </div>
                )}
            </>

            {/* IF No USER && SHOW LOGIN MODAL */}
            <>
                <div className={user ? 'hidden' : 'hidden md:block'}>
                    <Modals
                        title='Sign in'
                        onScroll={onScroll}
                    />
                </div>
                <div className={user ? 'hidden' : 'hidden min-[425px]:block border p-2 rounded-sm px-6'}>
                    <Modals
                        title='Join'
                        onScroll={onScroll}
                    />
                </div>
            </>

            {/* USER Image & Menu */}
            <>
                <div className={user ? 'block max-[375px]:hidden' : 'hidden'}>
                    <UserMenuDropdown
                    />
                </div>
            </>
        </div>
    )
}

export default NavLinks