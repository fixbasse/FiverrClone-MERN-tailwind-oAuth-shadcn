
import { Menu } from "lucide-react"
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"
import { FiverProDropdown } from "../dropdowns/FiverrProDropdown"
import { ExploreDropdown } from "../dropdowns/ExploreDropdown"
import { Modals } from "../modals/Login&Register/Modals"
import { AuthContext } from "@/context/auth/AuthContext"
import { useContext } from "react"

import { Link } from "react-router-dom"
import { sidebarData } from "@/data/data"

const SHEET_SIDES = ["left"] as const

// type SheetSide = (typeof SHEET_SIDES)[number]

export function Sidebar() {
    const { user, setIsLoading, callLogOut } = useContext(AuthContext);

    const becomeSellerLink = () => {
        setIsLoading(true);

        setTimeout(() => {
            window.location.replace('/become-a-seller/overview');
        }, 500);
    };
    return (
        <div>
            {SHEET_SIDES.map((side) => (
                <Sheet key={side}>
                    <SheetTrigger asChild>
                        <button className="max-[768px]:block hidden pr-4">
                            <Menu
                                size={30}
                                className={window.scrollY > 0 ? 'text-gray-800' : 'text-white max-[425px]:absolute left-4 top-6'}
                            />
                        </button>
                    </SheetTrigger>
                    <SheetContent className="p-4" side={side}>
                        <SheetHeader>
                            <SheetTitle className="flex items-center gap-3">
                                <img
                                    src={user?.userImg || '/noavatar.jpg'}
                                    alt="/"
                                    className="w-[60px] h-[60px] rounded-full"
                                />
                                {user?.username}
                            </SheetTitle>
                        </SheetHeader>

                        {/* CONTENT */}
                        <section className="flex flex-col gap-1 py-4 tet-gray-700">
                            <div className={`text-gray-700 font-light w-full flex flex-col gap-2
                                ${user ? 'block' : 'hidden'}
                            `}>
                                {sidebarData.map((item) => (
                                    <Link
                                        key={item.label}
                                        to={item.href}
                                        className="hover:bg-gray-100 hover:text-gray-950 px-2 py-2 rounded-md w-full"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>

                            {/* IF No USER && SHOW SIGNIN */}
                            <div className={user ? 'hidden' : 'block hover:bg-gray-100 hover:text-gray-950 px-2 py-2 rounded-md'}>
                                <Modals
                                    title='Sign in'
                                />
                            </div>

                            <div className="bg-orange-800 p-2">
                                <FiverProDropdown />
                            </div>
                            <div className="bg-orange-800 p-2">
                                <ExploreDropdown />
                            </div>

                            {/* IF USER && Go to SELLER PAGE : Trigger LOGIN Modal */}
                            <div className="bg-orange-800 p-2 text-white">
                                {user ? (
                                    <button
                                        onClick={becomeSellerLink}
                                        //to='/become-a-seller/overview'
                                        className=' '>
                                        Become a Seller
                                    </button>
                                ) : (
                                    <div className=''>
                                        <Modals
                                            title='Become a Seller'
                                        />
                                    </div>
                                )}

                            </div>



                            <button
                                onClick={callLogOut}
                                className={`hover:bg-gray-100 text-left text-gray-700 hover:text-gray-950 px-2 py-2 rounded-md w-full
                                ${user ? 'block' : 'hidden'}
                                `}
                            >
                                logout
                            </button>
                        </section>
                        <SheetFooter>
                            <SheetClose asChild>

                            </SheetClose>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            ))}
        </div>
    )
}
