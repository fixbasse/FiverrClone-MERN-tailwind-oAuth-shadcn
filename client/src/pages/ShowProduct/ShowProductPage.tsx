import CardProduct from './CardProduct'
import FilterShowProduct from './FilterShowProduct'
import ShowProductHeader from './ShowProductHeader'

//* PAGE 
const ShowProductPage = () => {
    return (
        <div className='pt-24 p-4 md:px-20'>
            <ShowProductHeader />

            <hr />

            <FilterShowProduct />

            <section className='grid max-[600px]:grid-cols-1 max-[768px]:grid-cols-2 max-[1024px]:grid-cols-3 lg:grid-cols-4 gap-8 pt-4'>
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
            </section>

        </div>
    )
}

export default ShowProductPage