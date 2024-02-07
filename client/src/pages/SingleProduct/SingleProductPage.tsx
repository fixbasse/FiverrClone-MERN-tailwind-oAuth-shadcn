import {
    useContext,
    useEffect,
    useState
} from "react"
import { AuthContext } from "@/context/auth/AuthContext";
import { newRequest } from "@/lib/newRequest";
import { useParams } from "react-router-dom";

import SingleProductLeft from "./SIngleProductLeft";
import SidebarGig from "./SidebarGig";

//* PAGE 
const SingleProductPage = () => {
    const { id: gigId } = useParams(); // need to match :id at App.tsx first
    const [gig, setGig] = useState<any[]>([]);
    const { setIsLoading } = useContext(AuthContext);

    //* GET By ID
    const getGigById = async () => {
        setIsLoading(true);

        try {
            const res = await newRequest.get(`/gig/single-product/${gigId}`);

            console.log(res.data);
            setGig(res.data);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        };
    };

    useEffect(() => {
        getGigById();
    }, []);

    return (
        <div className='pt-24 pb-4'>
            <div className="flex flex-col lg:flex-row flex-[9] text-gray-800">

                {/* LEFT SIDE flex-[7] */}
                <SingleProductLeft
                    item={gig}
                />

                {/* RIGHT SIDE flex-[2] */}
                <SidebarGig // (Right)
                    item={gig}
                />
            </div>
        </div>
    )
}

export default SingleProductPage