import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface SelectDemoProps {
    placeHolder: string | number;
    title: string | number;
    item: string;
    itemValue: string;
}

export function SelectLibs({
    placeHolder,
    title,
    item,
    itemValue
}: SelectDemoProps) {
    return (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={placeHolder} />
            </SelectTrigger>
            <SelectContent className="outline-none focus:ring-0">
                <SelectGroup>
                    <SelectLabel>{title}</SelectLabel>
                    <SelectItem value={itemValue}>{item}</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
