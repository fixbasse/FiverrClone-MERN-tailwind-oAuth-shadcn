interface SingleGigProps {
    item: any;
}

const SingleGig = ({
    item
}: SingleGigProps) => {
    return (
        <div className=" text-gray-800">

            <h1 className=" text-5xl">
                {item?.title}
            </h1>
        </div>
    )
}

export default SingleGig