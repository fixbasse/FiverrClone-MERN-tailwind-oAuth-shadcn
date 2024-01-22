import axios from "axios";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form"
import toast from "react-hot-toast";

type InfoSellerTypes = {
    firstname: string;
    lastname: string;
    displayName: string;
    description: string;
};

const InfoSeller = () => {
    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        handleSubmit
    } = useForm<InfoSellerTypes>();

    const onSubmit: SubmitHandler<InfoSellerTypes> = async (value) => {
        console.log(value);
        setIsLoading(true);

        try {
            const res = await axios.post('/', value)
            console.log(res.data);

            toast.success('Success!');
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong.');
        } finally {
            setIsLoading(false);
        };
    };

    return (
        <div className={`pt-20
        ${isLoading && 'opacity-50'}
        `}>

            {/* HEADER */}
            <section className='md:w-[500px] flex flex-col gap-4 p-4 py-8 md:px-10'>
                <h1 className='text-3xl font-semibold'>
                    Personal Info
                </h1>
                <span className='text-gray-500 font-light'>
                    Tell us a bit about yourself. This information will appear on your public profile, so that potential buyers can get to know you better.
                </span>
            </section>

            <hr />

            {/* MAIN CONTENT */}
            <section className='p-4 md:px-10'>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='flex flex-col gap-20 md:gap-40'>

                    {/* FULLNAME */}
                    <section className='relative'>
                        <div className='grid md:grid-cols-3 gap-4 w-full'>
                            <h2 className='text-xl font-light col-span-1'>
                                Full name
                            </h2>

                            <div className='flex flex-col md:flex-row gap-2 col-span-2'>
                                <input
                                    type="text"
                                    placeholder='First Name'
                                    className='border border-gray-300 rounded-sm p-2  outline-none focus:ring-0 md:w-[300px] placeholder:text-gray-400 placeholder:font-light'
                                    {...register('firstname', { required: true })}
                                />
                                <input
                                    type="text"
                                    placeholder='Last Name'
                                    className='border border-gray-300 rounded-sm p-2  outline-none focus:ring-0 md:w-[300px] placeholder:text-gray-400 placeholder:font-light'
                                    {...register('lastname', { required: true })}
                                />
                            </div>
                        </div>
                    </section>

                    {/* DISPLAY NAME */}
                    <section className='relative'>
                        <div className='grid md:grid-cols-3 gap-4 w-full'>
                            <h2 className='text-xl font-light col-span-1'>
                                Display Name
                            </h2>

                            <div className='flex flex-col md:flex-row gap-2 col-span-2'>
                                <input
                                    type="text"
                                    placeholder='Type your display name'
                                    className='border border-gray-300 rounded-sm p-2  outline-none focus:ring-0 md:w-[300px] placeholder:text-gray-400 placeholder:font-light'
                                    {...register('displayName', { required: true })}
                                />
                            </div>
                        </div>
                    </section>

                    {/* DESCRIPTION */}
                    <section className='relative'>
                        <div className='grid md:grid-cols-3 gap-4 w-full'>
                            <h2 className='text-xl font-light col-span-1'>
                                Description
                            </h2>

                            <div className='flex flex-col md:flex-row gap-2 col-span-2'>
                                <textarea

                                    placeholder="Share a bit about your work experience, cool project you've completed, and your area of expertise"
                                    className='border border-gray-300 rounded-sm p-3  outline-none focus:ring-0 w-full h-[150px] placeholder:text-gray-400 placeholder:font-light'
                                    {...register('description', { required: true })}
                                />
                            </div>
                        </div>
                    </section>


                    <button
                        disabled={isLoading}
                        className={`text-white bg-orange-800 p-2 rounded-sm font-semibold md:w-[200px] flex justify-center items-center
                        ${isLoading && ' opacity-50'}
                        `}
                    >
                        Submit
                    </button>
                </form>

            </section>

        </div>
    )
}

export default InfoSeller