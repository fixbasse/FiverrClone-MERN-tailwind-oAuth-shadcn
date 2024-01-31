import { Home } from "lucide-react"

const ShowProductHeader = () => {
    return (
        <div className="pb-8">

            <section className="flex items-center gap-4 text-gray-500 pb-4 text-sm md:text-base">
                <Home size={20} />
                <span>/</span>
                <span>
                    All products
                </span>
            </section>


            <h1 className='text-4xl font-semibold'>
                All Products
            </h1>

        </div>
    )
}

export default ShowProductHeader