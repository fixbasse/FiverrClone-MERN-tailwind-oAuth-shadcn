import * as React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"

import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type Checked = DropdownMenuCheckboxItemProps["checked"]


export function BudgetDropdown() {
    const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
    const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
    const [showPanel, setShowPanel] = React.useState<Checked>(false)

    const handleClear = React.useCallback(() => {
        setShowPanel(!setShowPanel);
        setShowActivityBar(!setShowActivityBar);
        setShowStatusBar(!setShowActivityBar);
    }, [setShowPanel, setShowActivityBar, setShowStatusBar]);

    // setShowPanel(!setShowPanel);
    // setShowActivityBar(!showActivityBar);
    // setShowStatusBar(!setShowStatusBar)

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button
                    className="p-3 font-semibold border rounded-md hover:border hover:border-gray-900"
                >
                    Budget
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[250px]">
                <DropdownMenuCheckboxItem
                    checked={showStatusBar}
                    onCheckedChange={setShowStatusBar}
                >
                    <h2 className="font-semibold">
                        Value
                    </h2>
                    <span className="text-gray-500 pl-2">
                        Under $165
                    </span>
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                    checked={showActivityBar}
                    onCheckedChange={setShowActivityBar}
                >
                    <h2 className="font-semibold">
                        Mid-range
                    </h2>
                    <span className="text-gray-500 pl-2">
                        $165 - $350
                    </span>
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                    checked={showPanel}
                    onCheckedChange={setShowPanel}
                >
                    <h2 className="font-semibold">
                        High-End
                    </h2>
                    <span className="text-gray-500 pl-2">
                        $350 & Above
                    </span>
                </DropdownMenuCheckboxItem> 
                <DropdownMenuSeparator />
                <div className="p-2 flex items-center justify-between">
                    <button
                        onClick={handleClear}
                        className="text-gray-500 font-semibold hover:opacity-90">
                        Clear all
                    </button>

                    <button className="bg-gray-900 text-white font-semibold rounded-sm p-3 px-5 hover:opacity-90">
                        Apply
                    </button>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
