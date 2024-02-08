import {
    useEffect,
    useState
} from 'react'

import AboutSeller from './AboutSeller'
import { Home, Star } from 'lucide-react'
import { newRequest } from '@/lib/newRequest';

interface SingleProductLeftProps {
    item: any;
};

//* LEFT 
const SingleProductLeft = ({
    item,
}: SingleProductLeftProps) => {
    const [showUser, setShowUser] = useState<any>([]);

    //* GET Seller By ID (fetch from GigData) 
    useEffect(() => {
        const getUserById = async () => {
            try {
                const res = await newRequest.get(`/user/${item?.userId}`);

                console.log(res.data);
                setShowUser(res.data);
            } catch (error) {
                console.log(error);
            };
        };

        getUserById();
    }, [item]); // need this data first

    return (
        <>
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


            {/* USER (Seller) */}
            <div className="flex items-center gap-4 px-4 md:p-4 lg:px-20">
                <img
                    src={showUser?.userImg || '/noavatar.jpg'}
                    alt="/"
                    className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-full"
                />

                {/* REVIEWS */}
                <div>
                    <h2 className="text-xl font-semibold">
                        {showUser?.username}
                    </h2>
                    <div className="flex items-center gap-1">
                        <Star
                            size={15}
                        />
                        <span>4</span>
                    </div>
                </div>
            </div>

            {/* GIG IMG */}
            <img
                src="https://images.pexels.com/photos/18601972/pexels-photo-18601972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="/"
                className="pt-2 lg:pl-20 h-[300px] md:h-[500px] w-full object-cover transform hover:scale-105 duration-100"
            />

            {/* ABOUT */}
            <div className="lg:pl-20 p-4">
                <h2 className="font-semibold text-xl pb-4">
                    About this gig
                </h2>

                <p className="text-gray-500">
                    {item?.description}
                </p>
            </div>

            <span className="p-4 lg:pl-20">
                Please Contact Me before placing a Custom Order.
            </span>


            {/* SELLER DETAILS */}
            <AboutSeller
                showUser={showUser}
            />
        </>
    )
}

export default SingleProductLeft