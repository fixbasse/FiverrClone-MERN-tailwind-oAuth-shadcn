

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

// const popularData = [
//     {
//         label: 'Website Development',
//         img: 'https://images.pexels.com/photos/461064/pexels-photo-461064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
//     },
// ]

export function PopularCarousal() {
    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="pt-8"
        >
            <CarouselContent>
                {Array.from({ length: 10 }).map((_, index) => (
                    <CarouselItem key={index} className="basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6 w-full">
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex flex-col aspect-square items-center justify-center p-2 bg-teal-700 rounded-lg text-white cursor-pointer hover:opacity-90">
                                    <span className="md:text-xl pt-4 pb-2 font-semibold">
                                        Website Development
                                    </span>
                                    <img
                                        src="https://images.pexels.com/photos/461064/pexels-photo-461064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                        alt="" 
                                        className="w-full h-full rounded-md object-cover"
                                        />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
