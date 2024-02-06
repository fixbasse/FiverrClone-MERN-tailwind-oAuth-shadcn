import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { popularData } from "@/data/data"

const Popular = () => {
    return (
        <div className='px-6 lg:px-20 md:py-10'>
            <h1 className='text-4xl md:text-5xl text-gray-800 font-light'>
                Popular Services
            </h1>

            <div className='flex justify-center gap-3 md:w-[1300px] mx-auto pt-8'>
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full"
                >
                    <CarouselContent className="w-full">
                        {popularData.map((item, index) => (
                            <CarouselItem
                                key={index}
                                className="md:basis-1/4 lg:basis-1/6"
                            >
                                <Card
                                    className='h-[250px] text-white hover:opacity-80 cursor-pointer'
                                >
                                    <CardContent className="flex flex-col p-0 h-full">
                                        <span className="text-xl font-semibold absolute w-[100px] p-4">
                                            {item.label}
                                        </span>
                                        <img
                                            src={item.img}
                                            className=" h-full rounded-md object-cover"
                                            alt="/"
                                        />
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    )
}

export default Popular