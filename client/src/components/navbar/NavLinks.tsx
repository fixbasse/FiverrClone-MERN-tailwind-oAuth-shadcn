import { explore } from '@/data/data';
import { Glasses, Pencil } from 'lucide-react';
import { useContext, useEffect, useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { Modals } from '../modals/Login&Register/Modals';
import { newRequest } from '@/lib/newRequest';
import { AuthContext } from '@/context/auth/AuthContext';
import { UserMenuDropdown } from '../dropdowns/UserMenuDropdown';
import { FiverProDropdown } from '../dropdowns/FiverrProDropdown';
import { ExploreDropdown } from '../dropdowns/ExploreDropdown';

interface NavLinksProps {
    onScroll: boolean;
};

const NavLinks = ({
    onScroll,

}: NavLinksProps) => {
    const [onOpen, setOnOpen] = useState(false);
    const [exploreOpen, setExploreOpen] = useState(false);
    const { user, setUser, setIsLoading } = useContext(AuthContext);


    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await newRequest.get('/auth/login');

                //console.log(res.data);
                //setCurrentUser(res.data);
                setUser(res.data);
            } catch (error) {
                console.log('Cannot fetch a user');
            }
        };

        getUser();

        console.log(user || 'User is logged out.');
    }, []);

    //console.log(currentUser);

    const becomeSellerLink = () => {
        setIsLoading(true);

        setTimeout(() => {
            window.location.replace('/become-a-seller/overview');
        }, 500);
    };


    return (
        <div className='font-semibold flex items-center gap-6'>

            {/* DROPDOWN MENU */}
            <>
                <div className='hidden md:block'>
                    <FiverProDropdown />
                </div>
                <div className='hidden md:block'>
                    <ExploreDropdown />
                </div>
            </>

            {/* IF USER && Go to SELLER PAGE : Trigger LOGIN Modal */}
            {user ? (
                <button
                    onClick={becomeSellerLink}
                    //to='/become-a-seller/overview'
                    className={`hidden lg:block
                    ${onScroll
                        && 'hover:text-orange-800 text-gray-500'}
                `}>
                    Become a Seller
                </button>
            ) : (
                <div className='hidden lg:block'>
                    <Modals
                        title='Become a Seller'
                        onScroll={onScroll}
                    />
                </div>
            )}

            {/* IF No USER && SHOW SIGNIN */}
            <div className={user ? 'hidden' : 'hidden md:block'}>
                <Modals
                    title='Sign in'
                    onScroll={onScroll}
                />
            </div>
            <div className={user ? 'hidden' : 'block md:hidden border p-2 rounded-sm px-6'}>
                <Modals
                    title='Join'
                    onScroll={onScroll}
                />
            </div>

            {/* USER Image & Menu */}
            <div className={user ? 'block' : 'hidden'}>
                <UserMenuDropdown
                    user={user}
                />
            </div>

        </div>
    )
}

export default NavLinks