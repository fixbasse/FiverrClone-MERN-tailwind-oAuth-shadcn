import { useContext } from "react";
import { AuthContext } from "@/context/auth/AuthContext";
import { newRequest } from "@/lib/newRequest";
import { ArrowLeft } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface RegisterModalsProps {
    register: boolean;
    onBack: () => void;
}

type AuthInput = {
    username: string;
    email: string;
    password: string;
};

//* REGISTER MODALS ==============> 
const RegisterModals = ({
    register,
    onBack
}: RegisterModalsProps) => {
    const { isLoading, setIsLoading } = useContext(AuthContext);

    const {
        register: registerInp,
        handleSubmit
    } = useForm<AuthInput>();

    //* REGISTER 
    const onSubmit: SubmitHandler<AuthInput> = async (value) => {
        console.log(value);
        setIsLoading(true);

        try {
            const res = await newRequest.post('/auth/register', value);

            console.log(res.data);
            toast.success('Register success!');

            setTimeout(() => {
                window.location.replace('/');
            }, 1000);
            
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong.');
        }
    };

    return (
        <section className={`text-gray-800 p-8
             ${register ? 'block' : 'hidden'}
        `}>
            {/* Back */}
            <div
                onClick={onBack}
                className="flex items-center gap-1 text-gray-700 text-sm pb-4 cursor-pointer">
                <ArrowLeft size={15} />
                Back
            </div>
            <h2 className="text-xl md:text-2xl font-bold">
                Register
            </h2>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-2 pt-8"
            >
                <>
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-gray-500">
                            Username
                        </label>
                        <input
                            disabled={isLoading}
                            type="text"
                            className="border rounded-md p-2 outline-none focus:ring-0"
                            {...registerInp('username', { required: true })}
                        />
                    </div>
                </>
                <>
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-gray-500">
                            Email
                        </label>
                        <input
                            disabled={isLoading}
                            type="text"
                            className="border rounded-md p-2 outline-none focus:ring-0"
                            {...registerInp('email', { required: true })}
                        />
                    </div>
                </>
                <>
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-gray-500">
                            Password
                        </label>
                        <input
                            disabled={isLoading}
                            type="password"
                            className="border rounded-md p-2 outline-none focus:ring-0"
                            {...registerInp('password', { required: true })}
                        />
                    </div>
                </>

                <button
                    type="submit"
                    disabled={isLoading}
                    className={`bg-gray-900 text-gray-50 font-semibold p-3 my-4 rounded-md
                        ${isLoading && 'bg-gray-100 opacity-75 '}
                `}>
                    Register
                </button>
            </form>

            <p className="text-gray-500 text-sm font-light">
                By joining, you agree to the Fiverr Terms of Service and to occasionally receive emails from us. Please read our Privacy Policy to learn how we use your personal data.
            </p>
        </section>
    )
}

export default RegisterModals