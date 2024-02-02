import * as React from "react"

import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Glasses, Pencil } from "lucide-react"

export function FiverProDropdown() {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button>
                    Fiverr Pro
                </button>

            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[400px] px-4">
                <DropdownMenuCheckboxItem
                    className="border p-2 rounded-md flex items-center gap-4 hover:bg-gray-100 cursor-pointer"
                >
                    <Glasses
                        size={80}
                    />
                    <div>
                        <h2 className='font-semibold'>
                            I am looking to hire
                        </h2>
                        <p className='text-gray-500'>
                            I'd like to work with Pro freelancers and agencies while useing free business tools.
                        </p>
                    </div>

                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                    className="border p-2 rounded-md flex items-center gap-4 hover:bg-gray-100 cursor-pointer"
                >
                    <Pencil
                        size={80}
                    />
                    <div>
                        <h2 className='font-semibold'>
                            I want to offer Pro services
                        </h2>
                        <p className='text-gray-500'>
                            I'd would like to work on business projects as a Pro freelancer or agency.
                        </p>
                    </div>
                </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
