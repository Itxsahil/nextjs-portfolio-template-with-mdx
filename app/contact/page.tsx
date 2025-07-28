"use client"
import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useActionState } from "react";
import { submitMail } from "./action"


const initialState = {
  success: false,
  message: "",
}

export default function Page() {
  const [state, action, pending] = useActionState(submitMail, initialState)
  return (
    <Container>
      <div className="py-25 px-4 relative bg-neutral-50 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-100 min-h-screen flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-sm dark:drop-shadow-lg text-center">
          Contact <span className="text-rose-500">Us</span>
        </h1>
        <p className="text-lg md:text-xl max-w-xl text-center text-neutral-600 dark:text-neutral-300 mb-12">
          Have a question or want to get in touch? Fill out the form below and we&apos;ll get back to you as soon as
          possible.
        </p>

        <form className="w-full max-w-3xl bg-white dark:bg-neutral-800 rounded-xl border dark:border-neutral-700 border-neutral-200 shadow-md dark:shadow-sm p-8 flex flex-col gap-6"
          action={action}
        >
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-2">
              Your Email
            </label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="your.email@example.com"
              className="w-full bg-neutral-100 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600 text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-500 dark:placeholder:text-neutral-400"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-2">
              Your Message
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Type your message here..."
              rows={5}
              className="w-full bg-neutral-100 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600 text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-500 dark:placeholder:text-neutral-400 resize-y"
            />
          </div>
          <p aria-live="polite">{state?.message}</p>
          <Button type="submit" disabled={pending} className="w-full bg-rose-500 dark:bg-rose-600 text-white font-semibold shadow hover:bg-rose-600 dark:hover:bg-rose-500 transition text-lg py-3">
            Submit Message
          </Button>
        </form>

        {/* Decorative Blurs - consistent with home page */}
        <div className="absolute top-10 right-10 w-48 h-48 bg-rose-200 dark:bg-rose-400 opacity-30 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-rose-100 dark:bg-rose-300 opacity-40 rounded-full blur-2xl -z-10" />
      </div>
    </Container>
  )
}