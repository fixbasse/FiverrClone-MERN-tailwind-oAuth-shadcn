import * as React from "react"

import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { AuthContext } from "@/context/auth/AuthContext"
import { newRequest } from "@/lib/newRequest";

import toast from "react-hot-toast";

// interface UserMenuDropdownProps {
//     user: User | undefined | string;
// };

export function UserMenuDropdown() {
    const { callLogOut, setIsLoading, user } = React.useContext(AuthContext);

    const googleLogout = async () => {
        setIsLoading(true);

        try {
            const res = await newRequest.get('/auth/logout');

            console.log(res.data);
            toast.success('Logout success!');

            setTimeout(() => {
                window.location.replace('/')
            }, 2000);

        } catch (error) {
            toast.error('Something went wrong!');
            console.log(error);
        };
    };

    console.log(user);
    

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
                    className="p-2"
                >
                    <button className="text-gray-500">
                        Dashboard
                    </button>
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                    className="p-2"
                    onClick={callLogOut || googleLogout}
                >
                    <button
                        className="font-semibold">
                        Log out
                    </button>
                </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
