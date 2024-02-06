import { AuthContext } from "@/context/auth/AuthContext";
import { Clock, Home, Menu, Share2Icon, Star } from "lucide-react";
import { useContext } from "react";
import AboutSeller from "./AboutSeller";
import { CartSidebar } from '@/components/navbar/CartSidebar';

interface SingleGigProps {
    item: any;
};

const SingleGig = ({
    item
}: SingleGigProps) => {
    const { user } = useContext(AuthContext);

    return (
        <div className="flex flex-col lg:flex-row flex-[9] text-gray-800">

            {/* LEFT */}
            <section className="flex-[7]">

                {/* HEADER */}
                <div className="flex items-center gap-4 p-4 lg:px-20">
                    <Home />
                    /
                    <span>
                        {item?.category}
                    </span>
                </div>

                <h1 className="text-2xl md:text-3xl font-semibold p-4 lg:px-20">
                    {item?.title}
                </h1>


                {/* USER */}
                <div className="flex items-center gap-4 px-4 md:p-4 lg:px-20">
                    <img
                        src={user?.userImg || '/noavatar.jpg'}
                        alt="/"
                        className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-full"
                    />
                    <div>
                        <h2 className="text-xl font-semibold">
                            {user?.username}
                        </h2>
                        <div className="flex items-center gap-1">
                            <Star size={15} />
                            <span>4</span>
                        </div>
                    </div>
                </div>

                <img
                    src="https://images.pexels.com/photos/18601972/pexels-photo-18601972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="/"
                    className="pt-2 lg:pl-20 h-[300px] md:h-[500px] w-full object-cover"
                />

                {/* ABOUT */}
                <div className="lg:pl-20 p-4">
                    <h2 className="font-semibold text-xl pb-4">
                        About this gig
                    </h2>

                    <p>
                        {item?.description}
                    </p>
                </div>

                <span className="p-4 lg:pl-20">
                    Please Contact Me before placing a Custom Order.
                </span>


                {/* SELLER DETAILS */}
                <AboutSeller
                    item={item}
                />
            </section>






            {/* SIDEBAR */}
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
                        <span>
                            Save up to 10% by subscribe.
                        </span>
                        <h2 className="py-4 text-gray-500">
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

        </div>
    )
}

export default SingleGig