
import { Menu } from "lucide-react"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"

const SHEET_SIDES = ["left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function Sidebar() {
    return (
        <div>
            {SHEET_SIDES.map((side) => (
                <Sheet key={side}>
                    <SheetTrigger asChild>
                        <button className="max-[768px]:block hidden">
                            <Menu
                                size={30}
                                    className={window.scrollY > 0 ? 'text-gray-800': 'text-white'}
                            />
                        </button>
                    </SheetTrigger>
                    <SheetContent side={side}>
                        <SheetHeader>
                            <SheetTitle>Edit profile</SheetTitle>
                            <SheetDescription>
                                Make changes to your profile here. Click save when you're done.
                            </SheetDescription>
                        </SheetHeader>

                        <div>

                        </div>
                        <SheetFooter>
                            <SheetClose asChild>
                                <button>
                                    Save changes
                                </button>
                            </SheetClose>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            ))}
        </div>
    )
}
