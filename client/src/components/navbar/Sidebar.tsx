
import { Menu } from "lucide-react"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"
import { FiverProDropdown } from "../dropdowns/FiverrProDropdown"
import { ExploreDropdown } from "../dropdowns/ExploreDropdown"
import { Modals } from "../modals/Login&Register/Modals"
import { AuthContext } from "@/context/auth/AuthContext"
import { useContext } from "react"

const SHEET_SIDES = ["left"] as const

// type SheetSide = (typeof SHEET_SIDES)[number]

export function Sidebar() {
    const { user, setIsLoading } = useContext(AuthContext);

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
                        <button className="max-[768px]:block hidden">
                            <Menu
                                size={30}
                                className={window.scrollY > 0 ? 'text-gray-800' : 'text-white max-[425px]:absolute left-4 top-6'}
                            />
                        </button>
                    </SheetTrigger>
                    <SheetContent side={side}>
                        <SheetHeader>
                            <SheetTitle>Welcome, {user?.username || 'To Fiverr'}</SheetTitle>
                            <SheetDescription>
                                Make changes to your profile here. Click save when you're done.
                            </SheetDescription>
                        </SheetHeader>

                        {/* CONTENT */}
                        <section className="flex flex-col gap-1 py-4 text-white font-semibold">
                            <div className="bg-orange-800 p-2">
                                <FiverProDropdown />
                            </div>
                            <div className="bg-orange-800 p-2">
                                <ExploreDropdown />
                            </div>

                            {/* IF USER && Go to SELLER PAGE : Trigger LOGIN Modal */}
                            <div className="bg-orange-800 p-2">

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

                            {/* IF No USER && SHOW SIGNIN */}
                            <div className={user ? 'hidden' : 'hidden sm:block'}>
                                <Modals
                                    title='Sign in'
                                />
                            </div>

                        </section>
                        <SheetFooter>
                            <SheetClose asChild>
                                {/* <button>
                                    Save changes
                                </button> */}
                            </SheetClose>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            ))}
        </div>
    )
}
