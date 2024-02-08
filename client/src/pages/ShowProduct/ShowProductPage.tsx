import {
    useContext,
    useEffect,
    useState
} from 'react'

import { newRequest } from '@/lib/newRequest'
import CardProduct from './CardProduct'
import FilterShowProduct from './FilterShowProduct'
import ShowProductHeader from './ShowProductHeader'
import { AuthContext } from '@/context/auth/AuthContext'

//* PAGE 
const ShowProductPage = () => {
    const [showGigs, setShowGigs] = useState<any[]>([]);
    const { setIsLoading } = useContext(AuthContext);

    useEffect(() => {
        const getAllGigs = async () => {
            setIsLoading(true);

            try {
                const res = await newRequest.get('/gig');

                console.log(res.data);
                setShowGigs(res.data);
                setIsLoading(false)
            } catch (error) {
                console.log(error);
            };
        };

        getAllGigs();
    }, []);

    //console.log(showGigs);

    return (
        <div className='pt-24 p-4 md:px-20'>
            {/* <LoadingAnimate /> */}
            <ShowProductHeader />
            <hr />

            {/* FILTER BUTTON */}
            <FilterShowProduct />

            <section className='grid max-[600px]:grid-cols-1 max-[768px]:grid-cols-2 max-[1024px]:grid-cols-3 lg:grid-cols-4 gap-8 pt-4'>
                {showGigs.map((item) => (
                    <CardProduct
                        key={item._id}
                        item={item}
                    />
                ))}
            </section>
        </div>
    )
}

export default ShowProductPage