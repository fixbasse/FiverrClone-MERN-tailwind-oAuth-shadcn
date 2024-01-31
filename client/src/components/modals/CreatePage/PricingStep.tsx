import { FieldValues, UseFormRegister } from "react-hook-form"

interface PricingProps {
    register: UseFormRegister<FieldValues>
};

const PricingStep = ({
    register
}: PricingProps) => {
    return (
        <div>
            <h1 className='text-3xl pb-4'>
                Scope & Pricing
            </h1>

            <hr />

            <section>
                <h3 className='text-gray-600 font-semibold pb-8 pt-4'>
                    Packages
                </h3>

                <table className='border-l'>
                    <tbody>
                        <tr className='border-r border-t'>
                            <th className="bg-gray-100">

                            </th>
                            <th className='border-l bg-gray-200'>
                                BASIC
                            </th>
                        </tr>
                        <tr>
                            <th className="bg-gray-100">

                            </th>
                            <th className='border'>
                                <textarea
                                    placeholder='Name your package'
                                    className='outline-none focus:ring-0 font-light text-sm h-[100px] p-2'
                                    {...register('packageName')}
                                />
                            </th>
                        </tr>
                        <tr>
                            <th className="bg-gray-100">

                            </th>
                            <th className='border'>
                                <textarea
                                    placeholder='Describe the details of your offering'
                                    className='outline-none focus:ring-0 font-light text-sm h-[100px] p-2'
                                    {...register('offering')}
                                />
                            </th>
                        </tr>
                        <tr>
                            <th className='font-light border-b p-4 text-sm bg-gray-100'>
                                Functional websites
                            </th>
                            <th className='border'>
                                <select
                                    {...register('delivery')}
                                >
                                    <option value="">
                                        DELIVERY TIME
                                    </option>
                                    <option value={1}>1 DAY DELIVERY</option>
                                    <option value={2}>2 DAYS DELIVERY</option>
                                    <option value={3}>3 DAYS DELIVERY</option>
                                    <option value={4}>4 DAYS DELIVERY</option>
                                </select>
                            </th>
                        </tr>
                        <tr>
                            <th className='font-light border-b p-4 text-sm bg-gray-100'>
                                Number of pages
                            </th>
                            <th className='border'>
                                <select
                                    {...register('pages')}
                                    className=" outline-none focus:ring-0">
                                    <option value={1}>
                                        1
                                    </option>
                                    <option value={2}>2</option>
                                    <option value={3}>3 </option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                </select>
                            </th>
                        </tr>
                        <tr>
                            <th className='border-b p-4 text-sm bg-gray-200 font-semibold'>
                                Price
                            </th>
                            <th className='border'>
                                <input
                                    type="number"
                                    placeholder="$"
                                    className="outline-none focus:ring-0 w-24 font-light placeholder:text-gray-950"
                                    {...register('price')}
                                />
                            </th>
                        </tr>
                    </tbody>
                </table>

            </section>
        </div>
    )
}

export default PricingStep