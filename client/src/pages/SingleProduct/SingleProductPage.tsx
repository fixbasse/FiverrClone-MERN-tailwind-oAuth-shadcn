import {
    useContext,
    useEffect,
    useState
} from "react"
import { newRequest } from "@/lib/newRequest";
import { useParams } from "react-router-dom";
import { AuthContext } from "@/context/auth/AuthContext";
import SingleGig from "./SingleGig"

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
            <SingleGig
                item={gig}
            />
        </div>
    )
}

export default SingleProductPage