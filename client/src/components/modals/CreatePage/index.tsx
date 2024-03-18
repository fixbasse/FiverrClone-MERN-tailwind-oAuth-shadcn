import { useCallback } from "react";

interface LayoutCreateModalProps {
    body: React.ReactElement;
    submitButton: () => void;
    backButton?: () => void;
    disabled?: boolean;
    label: string;
    subLabel?: string;
}

const LayoutCreatePageModal = ({
    body,
    submitButton,
    backButton,
    disabled,
    label,
    subLabel
}: LayoutCreateModalProps) => {
    const handleSubmit = useCallback(() => {
        if (disabled) {
            return;
        }

        submitButton();
    }, [submitButton, disabled]);

    return (
        <div className='pt-40 pb-20 flex flex-col items-center justify-center bg-gray-100'>

            {/* BODY CONTENT */}
            <main className='bg-white p-8 rounded-sm border flex flex-col gap-8 max-[768px]:w-full'>
                <>
                    {body}
                </>
                <button
                    onClick={handleSubmit}
                    className='bg-gray-800 text-white p-3 rounded-md w-[160px]'>
                    {label}
                </button>
                <button className=" text-left text-orange-600 font-light text-sm hover:underline"
                    onClick={backButton}
                >
                    {subLabel}
                </button>
            </main>

        </div>
    )
}

export default LayoutCreatePageModal