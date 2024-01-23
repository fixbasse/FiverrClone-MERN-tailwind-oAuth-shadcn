import { Database, FileDigitIcon, GitGraphIcon, ImageDownIcon, Languages, Music, TabletSmartphoneIcon, Video } from 'lucide-react'
import { FcBusiness } from 'react-icons/fc'
import { Link } from 'react-router-dom';

export const homeCategoryData = [
    {
        icon: <GitGraphIcon />,
        label: 'Graphics & Design',
        href: '/graphics-design'
    },
    {
        icon: <ImageDownIcon />,
        label: 'AI Services',
        href: '/ai-service'
    },
    {
        icon: <FileDigitIcon />,
        label: 'Digital Marketing',
        href: '/digital-marketing'
    },
    {
        icon: <Languages />,
        label: 'Writing & Translation',
        href: '/writing-translation'
    },
    {
        icon: <Video />,
        label: 'Video & Animation',
        href: '/video-animation'
    },
    {
        icon: <Music />,
        label: 'Music & Audio',
        href: '/music-audio'
    },
    {
        icon: <TabletSmartphoneIcon />,
        label: 'Programming & Tech',
        href: '/programming-tech'
    },
    {
        icon: <FcBusiness />,
        label: 'Business',
        href: '/business'
    },
    {
        icon: <Database />,
        label: 'Data',
        href: '/data'
    },
];

const HomeCategory = () => {
    return (
        <div className='px- max-[425px]:grid-cols-2 max-[768px]:grid max-[768px]:grid-cols-3 lg:px-20 py-4 pb-10 md:flex md:overflow-auto lg:justify-between'>

            {homeCategoryData.map((item) => (
                <Link
                    to={`/categories`}
                    //to={`/categories${item.href}`}
                    key={item.label}
                    className='flex flex-col gap-4 border max-[1024px]:m-4 rounded-xl shadow-md p-4 text-gray-900 font-semibold h-[130px] max-h-[130px] max-[1024px]:min-w-[130px] md:w-[100px] lg:w-[130px] cursor-pointer hover:bg-gray-50'>

                    <span>
                        {item.icon}
                    </span>

                    <div>
                        <h2 className='max-[425px]:text-sm'>
                            {item.label}
                        </h2>
                    </div>
                </Link>
            ))}

        </div>
    )
}

export default HomeCategory