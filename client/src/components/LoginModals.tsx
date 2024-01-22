import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import { newRequest } from "@/lib/newRequest";
import { ArrowLeft, Check, Mail } from "lucide-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";

interface ModalsProps {
    title: string;
    onScroll?: boolean;
};

type AuthInput = {
    email: string;
    password: string;
};

export function LoginModals({
    title,
    onScroll
}: ModalsProps) {
    const [email, setEmail] = useState(false);
    const [isLoading, setIsloading] = useState(false);
    const {
        register,
        handleSubmit
    } = useForm<AuthInput>();

    const onSubmit: SubmitHandler<AuthInput> = async (value) => {
        console.log(value);
        setIsloading(true);

        try {
            const res = await newRequest.post('/auth/register', value);

            console.log(res.data);
            window.location.replace('/');
        } catch (error) {
            console.log(error);
        } finally {
            setIsloading(false);
        };
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


            <DialogContent className="grid md:grid-cols-2 p-0 max-[640px]:w-full lg:h-[500px] lg:max-h-[500px] max-[640px]:h-full max-[768px]:h-[600px] max-[768px]:w-[400px] max-[1024px]:w-[800px] rounded-md">
                <section className="hidden md:block bg-orange-900 p-8 rounded-l-md text-white">
                    <h1 className="text-3xl font-bold">
                        Success start here
                    </h1>

                    <div className="flex flex-col gap-2 py-2 font-light">
                        <div className="flex gap-2 items-center">
                            <Check size={15} />
                            Over 600 categories
                        </div>
                        <div className="flex gap-2 items-center">
                            <Check size={15} />
                            Pay per project, not per hour
                        </div>
                        <div className="flex gap-2 items-baseline">
                            <Check size={15} />
                            Access to talent and businesses across the globe
                        </div>

                    </div>
                </section>

                {/* GOOGLE LOGIN SECTION ==============> */}
                <section className={`text-gray-800 p-8
                ${email ? 'hidden' : 'block'}
                `}>
                    <h2 className="text-2xl font-bold hidden md:block">
                        Sign in to your account
                    </h2>
                    <h1 className="text-3xl font-bold hidden max-[768px]:block">
                        Success start here
                    </h1>

                    <div className="font-light text-gray-700">
                        Don't have any account?
                        <span className="underline">
                            Join here
                        </span>
                    </div>

                    <section className="flex flex-col gap-2 py-8">
                        {/* GOOGLE LOGIN */}
                        <div
                            className="border rounded-md p-2 flex items-center justify-center relative hover:bg-gray-50 cursor-pointer">
                            <div className="absolute left-4">
                                <FcGoogle size={20} />
                            </div>
                            <h2 className="font-semibold">
                                Continue with Google
                            </h2>
                        </div>

                        {/* Email Register */}
                        <div
                            onClick={() => setEmail(!email)}
                            className="border rounded-md p-2 flex items-center justify-center relative hover:bg-gray-50  cursor-pointer">
                            <div className="absolute left-4">
                                <Mail size={20} />
                            </div>
                            <h2 className="font-semibold">
                                Continue with email/Username
                            </h2>
                        </div>

                    </section>

                    <p className="text-gray-500 text-sm font-light">
                        By joining, you agree to the Fiverr Terms of Service and to occasionally receive emails from us. Please read our Privacy Policy to learn how we use your personal data.
                    </p>
                </section>

                {/* E-mail LOGIN SECTION */}
                <section className={`text-gray-800 p-8
                ${email ? 'block' : 'hidden'}
                `}>
                    {/* Back */}
                    <div
                        onClick={() => setEmail(!email)}
                        className="flex items-center gap-1 text-gray-700 text-sm pb-4 cursor-pointer">
                        <ArrowLeft size={15} />
                        Back
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold">
                        Continue with your email or username
                    </h2>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col gap-2 pt-8"
                    >
                        <div className="flex flex-col gap-2">
                            <label className="font-semibold text-gray-500">
                                Email or username
                            </label>
                            <input
                                disabled={isLoading}
                                type="text"
                                className="border rounded-md p-2 outline-none focus:ring-0"
                                {...register('email', { required: true })}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-semibold text-gray-500">
                                Password
                            </label>
                            <input
                                disabled={isLoading}
                                type="password"
                                className="border rounded-md p-2 outline-none focus:ring-0"
                                {...register('password', { required: true })}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`bg-gray-900 text-gray-50 font-semibold p-3 my-4 rounded-md
                            ${isLoading && 'bg-gray-100 opacity-75 '}
                            `}>
                            Sign In
                        </button>
                    </form>

                    <p className="text-gray-500 text-sm font-light">
                        By joining, you agree to the Fiverr Terms of Service and to occasionally receive emails from us. Please read our Privacy Policy to learn how we use your personal data.
                    </p>
                </section>

            </DialogContent>
        </Dialog>
    )
}
