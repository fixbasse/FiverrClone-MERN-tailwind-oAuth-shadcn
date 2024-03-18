import { Clock, Menu, Share2Icon } from "lucide-react";
import { CartSidebar } from '@/components/navbar/CartSidebar';
import { Product } from "@/types";

interface SidebarGigProps {
    item: Product;
}

//* RIGHT 
const SidebarGig = ({
    item
}: SidebarGigProps) => {

    return (
        <>
            <div className="flex items-center gap-2 justify-end pb-4">
                <Menu />
                <Share2Icon />
            </div>

            {/* PRICE */}
            <div className="border-2">
                <h2 className="font-semibold text-center p-4 border-b bg-gray-200">
                    Price
                </h2>

                <div className="p-4 flex flex-col">
                    <span className="text-2xl font-semibold">
                        ${item?.price}
                    </span>
                    <span className="font-medium">
                        Save up to 10% by subscribe.
                    </span>
                    <h2 className="py-4 text-gray-400">
                        {item?.description}
                    </h2>

                    {/* DAYS */}
                    <div className="flex items-center gap-1 font-semibold text-sm pb-4">
                        <Clock
                            size={20}
                        />
                        {item?.delivery} days delivery
                    </div>

                    {/* CONTINUE BTN */}
                    <CartSidebar
                        item={item}
                    />
                </div>

            </div>
        </>
    )
}

export default SidebarGig