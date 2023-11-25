"use client"
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast"

const QuestionButton = () => {
  const [showQuestionForm, setShowQuestionForm] = useState(false);
  const [showCustomTripForm, setShowCustomTripForm] = useState(false);
  const FormSchema = z.object({
    email: z.string().min(2, {
      message: "Email is required.",
    }),
    message: z
      .string()
      .min(10, {
        message: "Message must be at least 10 characters.",
      })
      .max(160, {
        message: "Message must not be longer than 30 characters.",
      }),
  })
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  })

  function onSubmit(data) {
    toast({
      title: "You have asked the following question:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4 whitespace-pre-wrap break-words">
          <div className="text-white">Email: {data.email}</div>
          <div className="text-white">Message: {data.message}</div>
        </pre>
      ),
    });
  }


  return (
    <>
      <Button
        onClick={() => setShowQuestionForm((prev) => {
          form.reset({
            email: "",
            message: ""
          });
          if (showCustomTripForm) {
            setShowCustomTripForm(false);
            return false;
          }
          return !prev;
        })}
        className={`bg-green-500 w-full p-2 font-semibold rounded-lg text-white hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80`}
      >
        {showCustomTripForm ? 'Plan your custom trip' : 'Ask a question'}
      </Button>
      {
        showQuestionForm ? (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type="email" placeholder="Your Email Address" {...field} />
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
                    <FormControl>
                      <Textarea
                        placeholder="Ask us your question related to this trip."
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                className={`bg-orange-500 w-full p-2 font-semibold rounded-lg text-white hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-80`}
                type="submit"
              >
                Submit
              </Button>
            </form>
          </Form>
        )
          :
          <>
            <QuestionForm showCustomTripForm={showCustomTripForm} setShowCustomTripForm={setShowCustomTripForm} />
          </>
      }
    </>

  )
}

const QuestionForm = ({ showCustomTripForm, setShowCustomTripForm }) => {
  const FormSchema = z.object({
    email: z.string().min(2, {
      message: "Email is required.",
    }),
    message: z
      .string()
      .min(10, {
        message: "Message must be at least 10 characters.",
      })
      .max(160, {
        message: "Message must not be longer than 30 characters.",
      }),
  })
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  })

  function onSubmit(data) {
    toast({
      title: "You have asked the following question:",
      description: (
        <>
          <span>We will answer your question as soon as possible</span>
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4 whitespace-pre-wrap break-words">
            <div className="text-white">Email: {data.email}</div>
            <div className="text-white">Message: {data.message}</div>
          </pre>
        </>
      ),
    });
    setShowCustomTripForm(false);
  }

  return (
    <>
      {
        !showCustomTripForm ? (
          <Button
            onClick={() => setShowCustomTripForm((prev) => {
              form.reset({
                email: "",
                message: ""
              });
              return !prev;
            })}
            className={`bg-orange-500 w-full p-2 font-semibold rounded-lg text-white hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-80`}
          >
            Plan your custom trip
          </Button>
        ) :
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type="email" placeholder="Your Email Address" {...field} />
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
                    <FormControl>
                      <Textarea
                        placeholder="Tell us a little bit about how you want to plan this trip."
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                className={`bg-orange-500 w-full p-2 font-semibold rounded-lg text-white hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-80`}
                type="submit"
              >
                Submit
              </Button>
            </form>
          </Form>
      }
    </>
  )
}

export default QuestionButton