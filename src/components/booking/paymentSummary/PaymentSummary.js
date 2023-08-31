import { useState } from "react";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"


const PaymentSummary = () => {

  const [referral, setReferral] = useState(null);

  const Charges = (title, price) => {
    return (
      <div className="flex justify-between gap-1">
        <h3 className="text-lg">{title}</h3>
        <span className="text-2sm">
          USD ${price}
        </span>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-5 md:sticky md:top-[120px]">
      <h2 className="text-xl">
        Your Payment Summary
      </h2>
      <Separator />
      <div className="text-lg">
        Number of travellers: 1
      </div>
      <Separator />
      <div className="flex flex-col gap-3">
        {Charges("Tour Price", "1825")}
        {Charges("Bank Charge", 1825 * (3 / 100))}
      </div>
      <Separator />
      {/* <div className="flex flex-col gap-3">
        <Input type="text" name="referral" placeholder="Enter Referral Code" onChange={(e) => setReferral(e.target.value)} value={referral} />
        <Button className="bg-green-500 hover:bg-green-600 ring-2 ring-transparent focus:ring-green-800">
          Check Referral Code
        </Button>
      </div>
      <Separator /> */}
      <div className="flex items-center gap-5 justify-center h-12 text-xl font-bold bg-[#47A5CF] text-white rounded-sm">
        <div>
          Amount Due
        </div>
        <div>
          USD 1980
        </div>
      </div>
    </div>

  )
}

export default PaymentSummary