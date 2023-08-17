"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, SubmitHandler } from "react-hook-form"
import * as z from "zod"
import emailjs from '@emailjs/browser';

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { Textarea } from "./ui/textarea"


const ContactUs = () => {

    const emailServiceId = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;
    const emailTemplateId = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID;
    const emailPublicKey = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY;

    const FormSchema = z.object({
        name: z.string().default(''),
        email: z.string().email().default(''),
        message: z.string().max(1024).default(''),
    })

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: '',
            email: '',
            message: '',
        },
    })

    const onSubmit: SubmitHandler<z.infer<typeof FormSchema>> = async (data, event) => {
        event?.preventDefault()

        try {
            if (emailServiceId && emailTemplateId && emailPublicKey) {
                emailjs
                    .send(emailServiceId, emailTemplateId, data, emailPublicKey)
                    .then(
                        (result) => {
                            console.log(result.text);
                        },
                        (error) => {
                            console.error(error.text);
                        }
                    );
                form.reset();
            } else {
                throw Error("Email client is down. Try again later.")
            }
        } catch (error) {
            error instanceof Error ? alert(error.message) : alert(error)
        } finally {
            form.reset();
            toast({
                title: "Thank you for your message!",
                description: (
                    <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                        <code className="font-bold text-white">{JSON.stringify(data, null, 2)}</code>
                    </pre>
                ),
            });
        }
    }
    return (
        <div className="max-w-2xl mx-auto">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-[90%] md:w-3/4 mx-auto space-y-6">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="John Doe" {...field} />
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
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input type='email' placeholder="rx@gmail.com" {...field} />
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
                                    <Textarea className="h-48 resize-none" placeholder="Your message here..." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>

    )
}

export default ContactUs