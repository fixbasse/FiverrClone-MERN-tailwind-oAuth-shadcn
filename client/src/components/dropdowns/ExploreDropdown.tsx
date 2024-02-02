import * as React from "react"

import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Glasses, Pencil } from "lucide-react"
import { explore } from "@/data/data"

export function ExploreDropdown() {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button>
                    Explore
                </button>

            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[350px] px-4">

                {explore.map((item) => (
                    <DropdownMenuItem
                        key={item.label}
                        className="flex flex-col items-start gap-1 pl-0"
                    >

                        <h2 className='font-semibold'>
                            {item.label}
                        </h2>
                        <p className='text-gray-500'>
                            {item.shortDesc}
                        </p>

                    </DropdownMenuItem>
                ))}

            </DropdownMenuContent>
        </DropdownMenu>
    )
}
