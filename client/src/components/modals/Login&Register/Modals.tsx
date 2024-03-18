import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Mail } from "lucide-react";
import { useCallback, useContext, useState } from "react";

import { FcGoogle } from "react-icons/fc";
import ModalsHeader from "./ModalsHeader";
import RegisterModals from "./RegisterModals";
import LoginModals from "./LoginModals";
import { AuthContext } from "@/context/auth/AuthContext";
import toast from "react-hot-toast";

interface ModalsProps {
    title: string;
    onScroll?: boolean;
}

export function Modals({
    title,
    onScroll
}: ModalsProps) {
    const [register, setRegister] = useState(false);
    const [login, setLogin] = useState(false);
    const {
        isLoading,
        setIsLoading
    } = useContext(AuthContext);

    const onBack = useCallback(() => {
        if (register) {
            setRegister(!register);
        }

        setLogin(false);
    }, [register]);

    //* WITH GOOGLE
    const loginWithGoogle = () => {
        setIsLoading(true);
        toast.success('Login success!');
        window.open('http://localhost:8000/auth/google/callback', '_self');
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className={`cursor-pointer
                ${onScroll && 'hover:text-orange-800 text-gray-500'}
                `}>
                    {title}
                </button>
            </DialogTrigger>


            <DialogContent
                className={isLoading
                    ? 'hidden'
                    : 'grid md:grid-cols-2 p-0 max-[640px]:w-full min-h-[500px] max-[640px]:h-full max-[768px]:w-[400px] max-[1024px]:w-[800px] rounded-md'}>

                {/* LEFT MODAL ===========> */}
                <section className="hidden md:block bg-orange-900 p-8 rounded-l-md text-white">
                    <ModalsHeader />
                </section>

                {/* RIGHT MODAL===========> */}
                {/* GOOGLE LOGIN SECTION */}
                <section className={`text-gray-800 p-8
                    ${register ? 'hidden' : 'block'}
                    ${login ? 'hidden' : 'block'}
                `}>
                    <>
                        <h2 className="text-2xl font-bold hidden md:block">
                            Sign in to your account
                        </h2>
                        <h1 className="text-3xl font-bold hidden max-[768px]:block">
                            Success start here
                        </h1>
                    </>

                    {/* Go To Login Modal */}
                    <div
                        onClick={() => setRegister(!register)}
                        className="font-light text-gray-700 cursor-pointer">
                        Don't have any account?
                        <span className="underline pl-1">
                            Join here
                        </span>
                    </div>

                    {/* LOGIN BUTTON ==============> */}
                    <>
                        <section className="flex flex-col gap-2 py-8">
                            {/* Google Login BUTTON */}
                            <div
                                onClick={loginWithGoogle}
                                className="border rounded-md p-2 flex items-center justify-center relative hover:bg-gray-50 cursor-pointer">
                                <div className="absolute left-4">
                                    <FcGoogle size={20} />
                                </div>
                                <h2 className="font-semibold">
                                    Continue with Google
                                </h2>
                            </div>

                            {/* Email Login BUTTON */}
                            <div
                                onClick={() => setLogin(!login)}
                                className="border rounded-md p-2 flex items-center justify-center relative hover:bg-gray-50  cursor-pointer">
                                <div className="absolute left-4">
                                    <Mail size={20} />
                                </div>
                            
                                <h2 className="font-semibold">
                                    Continue with Email & Password
                                </h2>
                            </div>
                        </section>
                    </>

                    <p className="text-gray-500 text-sm font-light">
                        By joining, you agree to the Fiverr Terms of Service and to occasionally receive emails from us. Please read our Privacy Policy to learn how we use your personal data.
                    </p>
                </section>

                {/* E-mail REGISTER MODAL */}
                <RegisterModals
                    register={register}
                    onBack={onBack}
                />


                {/* E-mail LOGIN MODAL */}
                <LoginModals
                    login={login}
                    onBack={onBack}
                />

            </DialogContent>
        </Dialog>
    )
}
