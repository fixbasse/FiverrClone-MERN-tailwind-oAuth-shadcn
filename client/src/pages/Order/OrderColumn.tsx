import {
    useContext,
    useEffect,
    useState
} from "react"

import { Link } from "react-router-dom";
import { newRequest } from "@/lib/newRequest";
import { AuthContext } from "@/context/auth/AuthContext";

import Buyer from "./Buyer";
import { MessageCircleMoreIcon } from "lucide-react";

const OrderColumn = () => {
    const [orders, setOrders] = useState<any[]>([]);
    const { setIsLoading } = useContext(AuthContext);

    //* FETCH ORDERS 
    useEffect(() => {
        const fetchOrders = async () => {
            setIsLoading(true);

            try {
                const res = await newRequest.get('/order');

                console.log(res.data);
                setOrders(res.data)
                setIsLoading(false);
            } catch (error) {
                console.log(error);
                setIsLoading(false);
            };
        };

        fetchOrders();
    }, []);
    //console.log(orders);

    return (
        <>
            <table className='w-full'>
                <tbody className='w-full flex flex-col gap-4'>

                    {/* TABLE TITLE */}
                    <tr className='grid grid-cols-5 w-full py-8'>
                        <th>
                            Image
                        </th>
                        <th>
                            Title
                        </th>
                        <th>
                            Price
                        </th>
                        <th>
                            Buyer
                        </th>
                        <th>
                            Contact
                        </th>
                    </tr>

                    {/* ORDERS DISPLAY =============> */}
                    {orders.map((item) => (
                        <tr
                            key={item._id}
                            className='grid grid-cols-5 w-full bg-gray-50 py-8 max-h-[120px]'
                        >
                            <th className="font-light">
                                <img
                                    src={item?.img || '/noavatar.jpg'}
                                    alt="ordersImg"
                                    className="w-[50px] h-[50px] mx-auto rounded-sm"
                                />
                            </th>
                            <th className="font-light">
                                {item?.title}
                            </th>
                            <th className="font-light">
                                ${item?.price}
                            </th>

                            {/* BUYER USERNAME */}
                            <Buyer
                                buyer={item?.buyerId}
                            />
                            {/* OPEN CHAT APP */}
                            <th className="mx-auto">
                                <Link
                                    to='/messages'
                                >
                                    <MessageCircleMoreIcon size={30} />
                                </Link>
                            </th>
                        </tr>
                    ))}

                </tbody>
            </table>
        </>
    )
}

export default OrderColumn