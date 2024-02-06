
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
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
                    <SheetDescription>
                        Make changes to your profile here. Click save when you're done.
                    </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <label htmlFor="name" className="text-right">
                            Name
                        </label>
                        <input id="name" value="Pedro Duarte" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <label htmlFor="username" className="text-right">
                            Username
                        </label>
                        <input id="username" value="@peduarte" className="col-span-3" />
                    </div>
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <button type="submit">Save changes</button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
