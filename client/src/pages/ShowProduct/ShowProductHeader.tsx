import { AuthContext } from "@/context/auth/AuthContext"
import { Home } from "lucide-react"
import { useContext } from "react"

const ShowProductHeader = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="">
            <section className="flex items-center gap-2 font-semibold text-3xl md:text-4xl pb-4 text-gray-600">
                <h1 className={user ? 'block' : 'hidden'}>
                    Hey there,
                </h1>
                <h1>
                    {user?.username}
                </h1>
            </section>


            <section className="flex items-center gap-4 pb-4 text-sm md:text-base">
                <Home size={20} />
                <span>/</span>
                <span>
                    All products
                </span>
            </section>


            {/* <h1 className='text-4xl font-semibold'>
                All Products
            </h1> */}

        </div>
    )
}

export default ShowProductHeader