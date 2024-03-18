import { AuthContext } from '@/context/auth/AuthContext';
import { newRequest } from '@/lib/newRequest';
import { useContext, useEffect, useState } from 'react';

interface BuyerProps {
    buyer: any;
}

const Buyer = ({
    buyer
}: BuyerProps) => {
    const [buyerName, setBuyerName] = useState<any>();
    const { setIsLoading } = useContext(AuthContext);

    //* GET BUYER FROM ORDERS
    useEffect(() => {
        setIsLoading(true);

        const fetchBuyer = async () => {
            try {
                const res = await newRequest.get(`/user/${buyer}`);

                console.log(res.data);
                setBuyerName(res.data);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        };

        fetchBuyer();
    }, [buyer, setIsLoading]);

    return (
        <th className="font-light">
            {buyerName?.username}
        </th>
    )
}

export default Buyer