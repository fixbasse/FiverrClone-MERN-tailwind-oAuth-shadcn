import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ArrowRightIcon, Minus, Plus } from "lucide-react"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface CartSidebarProps {
    item: any;
};

export function CartSidebar({
    item
}: CartSidebarProps) {
    const [gigQuantity, setGigQuantity] = useState<number>(1);
    const [totalPrice, setTotalPrice] = useState<number>();

    useEffect(() => {
        setTotalPrice((item?.price) * gigQuantity);
    }, [item?.price, gigQuantity]);

    //* PLUS 
    const increment = () => {
        setGigQuantity((prev) => prev + 1)

    };

    //* MINUS 
    const decrement = () => {
        if (gigQuantity === 1) {
            return 1;
        };

        setGigQuantity((prev) => prev - 1)
    };

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
                    <SheetTitle className="border-b border-gray-700 p-4">
                        Order options
                    </SheetTitle>
                </SheetHeader>

                {/* MAIN */}
                <div className="p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-semibold">
                            Price
                        </h2>
                        <span>${totalPrice}</span>
                    </div>


                    <h2 className="font-light text-sm my-4">
                        {item?.description}
                    </h2>

                    <hr />

                    {/* QUANTITY */}
                    <section>
                        <h2 className="font-semibold my-4">
                            How often do you need this order?
                        </h2>

                        <div className="border-2 rounded-md border-gray-900 flex flex-col gap-4 p-6">
                            <div className="flex items-center justify-between">
                                <h2 className="font-semibold">
                                    Single order
                                </h2>
                                <span>
                                    ${totalPrice}
                                </span>
                            </div>

                            <hr />

                            {/* Amount */}
                            <div className="flex items-center justify-between">
                                <h2>
                                    Quantity
                                </h2>
                                <div className="flex items-center gap-4">
                                    <div
                                        onClick={decrement}
                                        className="border p-2 rounded-full cursor-pointer hover:border-gray-900 duration-100">
                                        <Minus size={15} />
                                    </div>
                                    <span className="">
                                        {gigQuantity}
                                    </span>
                                    <div
                                        onClick={increment}
                                        className="border p-2 rounded-full cursor-pointer hover:border-gray-900 duration-100">
                                        <Plus size={15} />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>

                </div>

                <SheetFooter className="p-4">
                    <Link
                        to='/payment'
                        className="relative flex items-center justify-center gap-1 font-semibold bg-gray-800 text-white p-2 rounded-sm w-full hover:opacity-90">
                        Continue
                        (${totalPrice})
                    </Link>
                </SheetFooter>
            </SheetContent>

        </Sheet>
    )
}
