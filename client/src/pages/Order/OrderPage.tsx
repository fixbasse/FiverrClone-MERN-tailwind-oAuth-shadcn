import OrderColumn from "./OrderColumn"

//* PAGE 
const OrderPage = () => {
    return (
        <div className='pt-24 p-4 md:px-20'>
                <h2 className="font-semibold text-3xl md:text-4xl text-gray-600">
                    Orders
                </h2>
            
            <OrderColumn />
        </div>
    )
}

export default OrderPage