import { useEffect, useState } from 'react'
import CardProduct from './CardProduct'
import FilterShowProduct from './FilterShowProduct'
import ShowProductHeader from './ShowProductHeader'
import { newRequest } from '@/lib/newRequest'

//* PAGE 
const ShowProductPage = () => {
    const [showGigs, setShowGigs] = useState([]);

    useEffect(() => {
        const getAllGigs = async () => {
            try {
                const res = await newRequest.get('/gig');

                setShowGigs(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        getAllGigs();
        console.log(showGigs);
    }, []);

    return (
        <div className='pt-24 p-4 md:px-20'>
            <ShowProductHeader />

            <hr />

            <FilterShowProduct />

            <section className='grid max-[600px]:grid-cols-1 max-[768px]:grid-cols-2 max-[1024px]:grid-cols-3 lg:grid-cols-4 gap-8 pt-4'>
                {showGigs.map((item: any) => (
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