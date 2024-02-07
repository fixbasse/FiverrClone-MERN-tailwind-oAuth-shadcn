
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ArrowRightIcon } from "lucide-react"

export function CartSidebar() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <button className="relative flex items-center justify-center gap-1 font-semibold bg-gray-800 text-white p-2 rounded-sm w-full hover:opacity-90">
                    Continue
                    <ArrowRightIcon
                        className="absolute right-4"
                        size={18} />
                </button>
            </SheetTrigger>

            <SheetContent className="p-0">
                <SheetHeader>
                    <SheetTitle className="border-b border-gray-700 p-2">
                        Order options
                    </SheetTitle>
                </SheetHeader>
                {/* MAIN */}
                <div className="p-4">
                    <div className="flex items-center justify-between">
                        <h2>
                            Price
                        </h2>
                        <span>$170</span>
                    </div>
                </div>

                <SheetFooter>
                    {/* <SheetClose asChild>
                         <button type="submit">Save changes</button> 
                    </SheetClose> */}
                </SheetFooter>
            </SheetContent>

        </Sheet>
    )
}
