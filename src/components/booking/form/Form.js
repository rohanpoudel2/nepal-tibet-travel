import { useMemo } from "react";
import * as z from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { countries } from "@/utils/countryList";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ScrollArea } from "@/components/ui/scroll-area"

const formSchema = z.object({
  firstname: z.string().min(2).max(20),
  lastname: z.string().min(2).max(20),
  email: z.string().email().min(5),
  country: z.string(),
  tripName: z.string(),
  groupSize: z.string().min(2).max(2),
  paymentOptions: z.enum(["full", "deposit"]),
  creditcardnumber: z.string().regex(/^\d{16}$/),
  expDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/),
  cvv: z.string().regex(/^\d{3,4}$/),
  tandc: z.boolean()
})

const BookingForm = () => {

  function onSubmit(values) {
    console.log("hello")
    console.log(values)
  }

  const GroupSize = useMemo(() => {
    const size = [1]
    let i = 2;
    while (true) {
      if (i % 2 === 0) {
        size.push(i);
        if (i === 20) {
          break;
        }
      }
      i++;
    }
    return size.map(String);
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      tripName: "Everest Base Camp Trek",
      paymentOptions: "deposit",
      creditcardnumber: "",
      expDate: "",
      cvv: "",
      tandc: "",

    },
  })

  const formFieldTitle = (number, title) => {
    return (
      <div className="flex flex-col gap-2">
        <span className="text-lg">{number}</span>
        <h3 className="text-2xl">{title}</h3>
      </div>
    )
  }


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-8">
        {formFieldTitle(
          "01",
          "Personal Details"
        )}
        <div className="grid grid-cols-2 grid-rows-1 gap-5">
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="Rajesh" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last name</FormLabel>
                <FormControl>
                  <Input placeholder="Hamal" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="rajeshhamal@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Country</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Where are you from ?" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <ScrollArea className="h-[200px]">
                      {
                        countries.map((country) => (
                          <SelectItem key={country.code} value={country.code}>{country.name}</SelectItem>
                        ))
                      }
                    </ScrollArea>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {formFieldTitle(
          "02",
          "Trip Details"
        )}
        <div className="grid grid-cols-2 gap-5">
          <FormField
            control={form.control}
            name="tripName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Selected Trek</FormLabel>
                <FormControl>
                  <Input readOnly {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="groupSize"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Group Size</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="What is your Group Size ?" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <ScrollArea className="h-[200px]">
                      {
                        GroupSize.map((size, i) => (
                          <SelectItem key={i} value={size}>{size}</SelectItem>
                        ))
                      }
                    </ScrollArea>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {formFieldTitle(
          "03",
          "Payment Method"
        )}
        <div className="grid grid-cols-1 grid-rows-3 gap-5">
          <FormField
            control={form.control}
            name="paymentOptions"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Payment Options</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue="deposit"
                    className="flex flex-col space-y-2"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="full" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Pay Full Amount
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="deposit" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Pay Deposit Only
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="creditcardnumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Credit / Debit Card Number</FormLabel>
                <FormControl>
                  <Input placeholder="Credit / Debit Card Number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name="expDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Expiry Date</FormLabel>
                  <FormControl>
                    <Input placeholder="Expiry Date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cvv"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CVV</FormLabel>
                  <FormControl>
                    <Input placeholder="CVV" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 grid-rows-2 gap-5">
          <FormField
            control={form.control}
            name="tandc"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    Accept terms and conditions
                  </FormLabel>
                  <FormDescription>
                    You agree to our Terms of Service and Privacy Policy.
                  </FormDescription>
                </div>
              </FormItem>
            )}
          />
          <Button
            className="bg-[#47A5CF] hover:bg-sky-600 mr-auto w-40 ring-2 ring-transparent focus:ring-sky-900"
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default BookingForm