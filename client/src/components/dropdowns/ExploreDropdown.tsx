import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { explore } from "@/data/data"

interface ExploreProps {
    onScroll?: boolean;
}

export function ExploreDropdown({
    onScroll
}: ExploreProps) {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className={onScroll ? 'text-gray-600' : 'text-white'}>
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
