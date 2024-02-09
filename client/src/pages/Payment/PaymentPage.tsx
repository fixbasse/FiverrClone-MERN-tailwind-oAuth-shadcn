import { AuthContext } from "@/context/auth/AuthContext"
import { useContext } from "react"
import PaymentLeft from "./PaymentLeft";
import PaymentSidebar from "./PaymentSidebar";

//* PAGE 
const PaymentPage = () => {
  const { totalPrice } = useContext(AuthContext);

  return (
    <div className='pt-24 p-4 md:px-20'>

      <div className="flex justify-between flex-[9]">

        <section className="flex-[6]">
          <PaymentLeft />
        </section>

        <section className="flex-[3]">
          <PaymentSidebar />
        </section>
      </div>
    </div>
  )
}

export default PaymentPage