import { Clock, Menu, Share2Icon } from "lucide-react";
import { CartSidebar } from '@/components/navbar/CartSidebar';

interface SidebarGigProps {
    item: any;
};

//* RIGHT 
const SidebarGig = ({
    item
}: SidebarGigProps) => {

    return (
        <section className="flex-[3] p-4 md:px-20">
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
                    <h2 className="py-4 font-light">
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
                    <CartSidebar />
                </div>

            </div>
        </section>
    )
}

export default SidebarGig