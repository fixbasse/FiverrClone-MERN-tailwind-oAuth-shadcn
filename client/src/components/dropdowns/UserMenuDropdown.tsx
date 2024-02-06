import * as React from "react"

import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { AuthContext } from "@/context/auth/AuthContext"
import { Link } from "react-router-dom";

export function UserMenuDropdown() {
    const { callLogOut, user } = React.useContext(AuthContext);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <img
                    src={user?.userImg || '/noavatar.jpg'}
                    className='w-[40px] h-[40px] rounded-full cursor-pointer'
                />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[150px]">
                <DropdownMenuCheckboxItem
                    className="p-2 hover:text-orange-800 hover:font-medium"
                >
                    <Link
                        to='/profile/1'
                        className=" ">
                        Profile
                    </Link>
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                    className="p-2"
                    onClick={callLogOut}
                >
                    <button
                        className="font-semibold">
                        Log out
                    </button>
                </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
};
