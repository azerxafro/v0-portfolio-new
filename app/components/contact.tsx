"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    // In a real implementation, you would send this data to your backend
    alert("Thank you for your message! I'll get back to you soon.")
    form.reset()
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-zinc-900 py-20">
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl">Get in Touch</h2>
          <p className="mb-8 text-text-secondary">
            Interested in working together? Let&apos;s discuss your project and create something amazing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6 text-text-heading">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-purple-400 mt-0.5" />
                <div>
                  <h4 className="font-medium text-text-heading">Email</h4>
                  <a href="mailto:ashwinazer@hotmail.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                    ashwinazer@hotmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-purple-400 mt-0.5" />
                <div>
                  <h4 className="font-medium text-text-heading">Phone</h4>
                  <a href="tel:+918778222061" className="text-purple-400 hover:text-purple-300 transition-colors">
                    +91 87782 22061
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-purple-400 mt-0.5" />
                <div>
                  <h4 className="font-medium text-text-heading">Location</h4>
                  <p className="text-text-secondary">Coimbatore, India</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-5 w-5 mr-3 text-purple-400 mt-0.5" />
                <div>
                  <h4 className="font-medium text-text-heading">Working Hours</h4>
                  <p className="text-text-secondary">Monday - Friday: 9am - 6pm IST</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-text-heading">Follow Me</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-zinc-800 hover:bg-purple-700 p-3 rounded-full transition-colors text-text-primary"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-zinc-800 hover:bg-purple-700 p-3 rounded-full transition-colors text-text-primary"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.663 9.151 8.437 9.879v-6.988h-2.54v2.888h2.54v2.991c0 .542-.058 1.62-.425 2.285a2.184 2.184 0 01-1.129.948V21h3.414v-6.155c0-.682.095-1.654.485-2.357.39-.703.922-1.142 1.585-1.142 1.049 0 1.951.079 2.21 1.077v3.304H22v-4.077c-.299-.492-.534-1.474-.534-2.203 0-1.591 1.096-2.711 2.702-2.711h.003z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-zinc-800 hover:bg-purple-700 p-3 rounded-full transition-colors text-text-primary"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.477 2 12c0 3.55 2.302 6.55 5.5 7.646V14.5h-.923v-2.428H7.5V9.86c0-2.424 1.487-3.756 3.66-3.756 1.046 0 1.945.078 2.227.113v2.58H13.7c-.888 0-1.062.42-1.062 1.031v1.914h2.473l-.386 2.428h-2.087V19.64c3.2-1.077 5.5-4.076 5.5-7.646 0-5.523-4.477-10-10-10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-text-heading">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} className="text-text-primary" />
                      </FormControl>
                      <FormMessage className="text-destructive" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-text-heading">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Your email" {...field} className="text-text-primary" />
                      </FormControl>
                      <FormMessage className="text-destructive" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-text-heading">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Write your message here"
                          className="resize-none text-text-primary"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-destructive" />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-purple-700 to-purple-500 text-black font-medium hover:opacity-90"
                >
                  Send Message
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

