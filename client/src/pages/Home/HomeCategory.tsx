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
        <div className='grid max-[600px]:grid-cols-3 max-[768px]:grid-cols-4 max-[1024px]:grid-cols-6 lg:grid-flow-col max-[1440px] mx-auto py-8 p-4 md:px-20 gap-8 lg:gap-2 overflow-auto'>

            {homeCategoryData.map((item) => (
                <Link
                    to={`/categories`}
                    //to={`/categories${item.href}`}
                    key={item.label}
                    className='flex flex-col gap-4 border rounded-xl shadow-md p-4 text-sm text-gray-900 font-semibold h-[130px] max-h-[130px] max-w-[140px] w-[130px] cursor-pointer hover:bg-gray-50'>

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