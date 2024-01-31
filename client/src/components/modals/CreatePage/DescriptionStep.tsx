

const DescriptionStep = () => {
    return (
        <>
            <section>
                <h1 className='text-3xl pb-4'>
                    Description
                </h1>

                <hr />

                <div className='flex flex-col gap-8'>
                    <span className='pt-4 text-gray-700'>
                        Briefly Describe Your Gig
                    </span>

                    <textarea
                        className='outline-none focus:ring-0 font-light h-[200px] p-4  md:w-[800px] border rounded-md'
                    />
                </div>
            </section>

            {/* Questions */}
            <section>
                <h1 className='text-3xl pb-4'>
                    Frequently Asked Questions
                </h1>

                <hr />

                <div className='flex flex-col gap-8'>
                    <span className='pt-4 text-gray-700'>
                        Add Questions & Answers for Your Buyers.
                    </span>

                    <input
                        type='text'
                        placeholder='Add a question: i.e. Do you translate to English as well?'
                        className='outline-gray-900 focus:ring-0 font-light h-[50px] p-4 md:w-[800px] border rounded-md'
                    />
                </div>
            </section>


        </>
    )
}

export default DescriptionStep