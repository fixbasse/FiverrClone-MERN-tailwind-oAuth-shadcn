import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { categoriesInfo } from "@/data/data"

export function AccordionCategories() {
    return (
        <Accordion type="single" collapsible className="w-full md:hidden">

            {categoriesInfo.map((item) => (
                <AccordionItem
                    key={item.id}
                    value={item.label}
                >
                    <div className="flex h-[70px] p-2 gap-4">
                        <img
                            src={item.img}
                            className="w-[100px] h-full rounded-lg"
                            alt=""
                        />
                        <AccordionTrigger
                            className="text-xl"
                        >
                            {item.label}
                        </AccordionTrigger>
                    </div>

                    <div className="bg-gray-50 shadow-md cursor-pointer">
                        {item.lists.map((list) => (
                            <AccordionContent
                                key={list.title}
                                className="text-xl font-light text-gray-500 p-4 hover:underline"
                            >
                                {list.title}
                            </AccordionContent>
                        ))}
                    </div>
                </AccordionItem>
            ))}


        </Accordion>
    )
}
