import {
    useContext,
    useEffect,
    useState
} from "react"

import { useParams } from "react-router-dom";
import { AuthContext } from "@/context/auth/AuthContext";
import { newRequest } from "@/lib/newRequest";

import SingleProductLeft from "./SingleProductLeft";
import SidebarGig from "./SidebarGig";

//* PAGE 
const SingleProductPage = () => {
    const { id: gigId } = useParams(); // need to match :id at App.tsx first
    const [gig, setGig] = useState<any[]>([]);
    const { setIsLoading } = useContext(AuthContext);

    //* GET By ID
    useEffect(() => {
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

        getGigById();
    }, []);

    return (
        <div className='pt-24 pb-4'>
            <div className="flex-[9] flex flex-col gap-14 lg:flex-row text-gray-800">

                {/* LEFT SIDE flex-[7] */}
                <section className="flex-[6]">
                    <SingleProductLeft
                        item={gig}
                    />
                </section>

                {/* RIGHT SIDE flex-[2] */}
                <section className="flex-[3] p-4 md:px-20">
                    <SidebarGig // (Right)
                        item={gig}
                    />
                </section>
                
            </div>
        </div>
    )
}

export default SingleProductPage