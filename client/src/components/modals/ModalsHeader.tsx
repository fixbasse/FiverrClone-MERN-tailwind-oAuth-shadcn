import { Check } from 'lucide-react'

const ModalsHeader = () => {
    return (
        <>
            <h1 className="text-3xl font-bold">
                Success start here
            </h1>

            <div className="flex flex-col gap-2 py-2 font-light">
                <div className="flex gap-2 items-center">
                    <Check size={15} />
                    Over 600 categories
                </div>
                <div className="flex gap-2 items-center">
                    <Check size={15} />
                    Pay per project, not per hour
                </div>
                <div className="flex gap-2 items-baseline">
                    <Check size={15} />
                    Access to talent and businesses across the globe
                </div>

            </div>
        </>
    )
}

export default ModalsHeader