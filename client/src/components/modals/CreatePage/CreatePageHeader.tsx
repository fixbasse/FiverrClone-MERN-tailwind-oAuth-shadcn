interface CreatePageHeaderProps {
    number: number;
    title: string
}

const CreatePageHeader = ({
    number,
    title
}: CreatePageHeaderProps) => {
    return (
        <div className="flex items-center gap-4 text-3xl">
            <h1 className="border rounded-full w-[40px] h-[40px] border-gray-900 flex items-center justify-center">
                {number}
            </h1>
            <h1>
                {title}
            </h1>
        </div>
    )
}

export default CreatePageHeader