import { useEffect, useState } from "react"
import SingleGig from "./SingleGig"
import { newRequest } from "@/lib/newRequest";
import { useParams } from "react-router-dom";

const SingleProductPage = () => {
    const { id: gigId } = useParams(); // need to match :id at App.tsx first
    const [gig, setGig] = useState([]);

    useEffect(() => {
        const getGigById = async () => {
            try {
                const res = await newRequest.get(`/gig/single-product/${gigId}`);

                console.log(res.data);
                setGig(res.data);
            } catch (error) {
                console.log(error);
            };
        };

        getGigById();
    }, []);

    return (
        <div className='pt-24 p-4 md:px-20'>
            <SingleGig
                item={gig}
            />
        </div>
    )
}

export default SingleProductPage