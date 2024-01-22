import { CassetteTapeIcon, Circle, HeartHandshake } from "lucide-react"
import { IoMdThunderstorm } from "react-icons/io"

const talentData = [
    {
        icon: <CassetteTapeIcon size={40} />,
        label: 'Over 700 categories',
        desc: 'Get results from skilled freelancers from all over the world, for every task, at any price point.'
    },
    {
        icon: <HeartHandshake size={40} />,
        label: 'Clear, upfront pricing',
        desc: 'No hourly rates, just project-based pricing. Payments only get released when you approve.        '
    },
    {
        icon: <IoMdThunderstorm size={40} />,
        label: 'Quality work done faster',
        desc: 'Filter to find the right freelancers quickly and get great work delivered in no time, every time.'
    },
    {
        icon: <Circle size={40} />,
        label: '24/7 award-winning support',
        desc: 'Chat with our team to get your questions answered or resolve any issues with your orders.'
    },
]

const Talent = () => {
    return (
        <div className='px-6 lg:px-20 py-10 flex flex-col gap-8'>
            <h1 className='text-4xl md:text-5xl text-gray-800 font-light md:w-[650px]'>
                A whole world of freelance talent at your fingertips
            </h1>

            <section className="grid md:grid-cols-2 lg:grid-cols-4 md:pt-8 gap-4">
                {talentData.map((item) => (
                    <div
                        key={item.label}
                        className="flex flex-col justify-between"
                    >
                        <div className="pb-4">
                            {item.icon}
                        </div>
                        <h2 className="text-xl md:text-2xl text-gray-600 md:pb-8">
                            {item.label}
                        </h2>

                        <p className="text-gray-500 font-light">
                            {item.desc}
                        </p>
                    </div>

                ))}
            </section>
        </div>
    )
}

export default Talent