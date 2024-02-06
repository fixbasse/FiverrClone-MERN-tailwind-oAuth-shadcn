import { Link } from 'react-router-dom';

import { Database, FileDigitIcon, GitGraphIcon, ImageDownIcon, Languages, Music, TabletSmartphoneIcon, Video } from 'lucide-react'
import { FcBusiness } from 'react-icons/fc'


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
        <div className='flex justify-center gap-2 md:gap-8 flex-wrap p-8'>
            {homeCategoryData.map((item) => (
                <Link
                    to={`/show-product`}
                    //to={`/categories${item.href}`}
                    key={item.label}
                    className='flex flex-col gap-4 border rounded-xl shadow-md p-4 text-sm text-gray-900 font-semibold h-[130px] max-h-[130px] max-w-[140px] w-[130px] cursor-pointer hover:bg-gray-50'
                >
                    <span>
                        {item.icon}
                    </span>
                    <h2 className='max-[425px]:text-sm'>
                        {item.label}
                    </h2>
                </Link>
            ))}

        </div>
    )
}

export default HomeCategory