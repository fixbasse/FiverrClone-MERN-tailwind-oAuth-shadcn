import {
    useEffect,
    useState
} from 'react';
import { Link } from 'react-router-dom';
import { newRequest } from '@/lib/newRequest';
import { Star } from 'lucide-react'

interface CardProductProps {
    item: any;
};

const CardProduct = ({
    item
}: CardProductProps) => {
    const [showUser, setShowUser] = useState<any>([]); // .map type: never[]

    //* GET USER DATA 
    useEffect(() => {
        const getUserById = async () => {
            //setIsLoading(true);

            try {
                const res = await newRequest.get(`/user/${item.userId}`);

                setShowUser(res.data);
                //setIsLoading(false);
            } catch (error) {
                console.log('Cannot fetch a user');
            };
        };

        getUserById();
    }, []);

    //console.log(showUser);

    return (
        <Link
            to={`/single-product/${item._id}`}
            className='flex flex-col gap-1 hover:cursor-pointer'
        >
            <img
                src="https://images.pexels.com/photos/19748403/pexels-photo-19748403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="productImg"
                className='w-full h-[200px] object-cover rounded-md group'
            />

            {/* IMG, NAME & LEVEL */}
            <section className='flex justify-between items-center py-2'>
                <div className='flex items-center gap-2'>
                    <img
                        src="https://images.pexels.com/photos/19748403/pexels-photo-19748403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="userImg"
                        className='w-[30px] h-[30px] rounded-full'
                    />
                    <h3 className='font-semibold'>
                        {showUser?.username}
                    </h3>
                </div>
                <span className='font-semibold text-gray-600'>
                    Level 1
                </span>
            </section>

            {/* DESCRIPTION */}
            <p className='descript-trim text-gray-500 group-hover:underline'>
                {item?.description}
            </p>

            {/* STARS & PRICE */}
            <section className='pt-2'>
                <div className='flex items-center gap-1 font-semibold'>
                    <Star size={15} />
                    4.2
                </div>

                {/* PRICE */}
                <div className='flex gap-2 font-semibold'>
                    <h4>
                        From
                    </h4>
                    <span>
                        ${item?.price}
                    </span>
                </div>
            </section>

        </Link>
    )
}

export default CardProduct