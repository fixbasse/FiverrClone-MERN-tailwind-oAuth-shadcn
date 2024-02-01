
const LoadingAnimate = () => {
    return (
        <div className='fixed w-full h-full bg-black/20 inset-0'>
            <div
                className="loadingAnimate one bg-gray-400"
            />
            <div
                className="loadingAnimate two bg-gray-400"
            />
            <div
                className="loadingAnimate three bg-gray-400"
            />
        </div>
    )
}

export default LoadingAnimate