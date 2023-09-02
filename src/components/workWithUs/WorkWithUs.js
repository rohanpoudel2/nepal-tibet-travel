"use client"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const formSchema = z.object({
  fullname: z.string().min(2, "First name should be at least 2 characters.").max(30, "Full Name should not exceed 30 characters."),
  email: z.string().email().min(5),
  message: z.string().min(10, "Please write a longer message.").max(255, "Message should not exceed 250 characters"),
})

const WorkWithUs = () => {

  const onSubmit = (values) => {
    console.log(values)
  }

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      message: "",
    },
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-10">
        <FormField
          control={form.control}
          name="fullname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Narayan Poudel" {...field} />
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
                <Input placeholder="npoudel1@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about yourself"
                  // className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                0/255 Characters Remaining
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="bg-[#47A5CF] hover:bg-sky-600 mr-auto w-40 ring-2 ring-transparent focus:ring-sky-900"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Form>
  )
}

export default WorkWithUs