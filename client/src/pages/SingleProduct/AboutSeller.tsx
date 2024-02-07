import { Star } from "lucide-react";

interface AboutSellerProps {
    showUser: any;
};

const AboutSeller = ({
    showUser
}: AboutSellerProps) => {

    return (
        <div className="lg:pl-20 pt-8 p-4 md:pt-20">

            <h2 className="font-semibold text-xl">
                About the Seller
            </h2>

            {/* USER */}
            <section className="flex flex-col md:flex-row items-center gap-4 py-4">
                <img
                    src={showUser?.userImg || '/noavatar.jpg'}
                    alt="/"
                    className="w-[80px] h-[80px] rounded-full"
                />
                <div>
                    <h2 className="text-xl font-semibold">
                        {showUser?.username}
                    </h2>
                    <div className="flex items-center gap-1">
                        <Star size={15} />
                        <span>4</span>
                    </div>
                </div>
            </section>

            <button className="border border-gray-800 hover:bg-gray-900 hover:text-white p-2 rounded-sm w-full md:w-[200px] font-medium">
                Contact me
            </button>

            {/* DETAILS */}
            <section className="p-8 border rounded-sm mt-4 flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-2">
                    <div>
                        <span className=" text-gray-500">
                            From
                        </span>
                        <h3 className="font-semibold">
                            Pakistan
                        </h3>
                    </div>
                    <div>
                        <span className=" text-gray-500">
                            Member since
                        </span>
                        <h3 className="font-semibold">
                            Pakistan
                        </h3>
                    </div>
                    <div>
                        <span className=" text-gray-500">
                            Avg. response time
                        </span>
                        <h3 className="font-semibold">
                            1 hour
                        </h3>
                    </div>
                    <div>
                        <span className=" text-gray-500">
                            Last delivery
                        </span>
                        <h3 className="font-semibold">
                            about 20 hours
                        </h3>
                    </div>
                    <div>
                        <span className=" text-gray-500">
                            Language
                        </span>
                        <h3 className="font-semibold">
                            English, German
                        </h3>
                    </div>
                </div>

                <hr />

                {/* TEXT */}
                <article className="flex flex-col gap-4">
                    <p className="text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cupiditate excepturi voluptatem magnam vero veritatis nisi dicta molestias rem autem eius fuga beatae illo non commodi, repudiandae nemo, est necessitatibus.
                    </p>
                    <p className="text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cupiditate excepturi voluptatem magnam vero veritatis nisi dicta molestias rem autem eius fuga beatae illo non commodi, repudiandae nemo, est necessitatibus.
                    </p>
                    <p className="text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cupiditate excepturi voluptatem magnam vero veritatis nisi dicta molestias rem autem eius fuga beatae illo non commodi, repudiandae nemo, est necessitatibus.
                    </p>

                </article>
            </section>
        </div>
    )
}

export default AboutSeller