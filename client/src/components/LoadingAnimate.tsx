import { AuthContext } from "@/context/auth/AuthContext"
import { useContext } from "react"

const LoadingAnimate = () => {
    const { isLoading } = useContext(AuthContext);

    return (
        <div className={isLoading ? (
            'fixed inset-0 bg-gray-300 opacity-90 z-50 flex items-center justify-center gap-4'
        ) : (
            'hidden'
        )}>
            <div
                className="loadingAnimate one bg-gray-500"
            />
            <div
                className="loadingAnimate two bg-gray-500"
            />
            <div
                className="loadingAnimate three bg-gray-500"
            />
        </div>
    )
}

export default LoadingAnimate