import { useContext, useEffect, useState } from "react"
import { newRequest } from "@/lib/newRequest";
import { AuthContext } from "@/context/auth/AuthContext";
import Buyer from "./Buyer";
import { MessageCircleMoreIcon } from "lucide-react";
import { Link } from "react-router-dom";

const OrderColumn = () => {
    const [orders, setOrders] = useState<any[]>([]);
    const { setIsLoading } = useContext(AuthContext);

    useEffect(() => {
        fetchOrders();
    }, []);

    //* FETCH ORDERS 
    const fetchOrders = async () => {
        setIsLoading(true);

        try {
            const res = await newRequest.get('/order');

            console.log(res.data);
            setOrders(res.data)
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        };
    };
    //console.log(orders);


    return (
        <div className=''>

            <table className='w-full'>
                <tbody className='w-full '>
                    <tr className='grid grid-cols-5 w-full py-8 '>
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

                    {/* .map() */}
                    {orders.map((item) => (
                        <tr
                            key={item._id}
                            className='grid grid-cols-5 w-full bg-orange-100 py-8 max-h-[120px]'
                        >
                            <th className="font-light">
                                <img
                                    src={item?.img || '/noavatar.jpg'}
                                    alt="/"
                                    className="w-[50px] h-[50px] mx-auto rounded-sm"
                                />
                            </th>
                            <th className="font-light">
                                {item?.title}
                            </th>
                            <th className="font-light">
                                ${item?.price}
                            </th>
                            <Buyer
                                buyer={item?.buyerId}
                            />
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

        </div>
    )
}

export default OrderColumn