"use client"

import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Button } from './ui/button'

const contactSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string()
})


export default function Contact() {
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
  })

  function onSubmit(data: z.infer<typeof contactSchema>) {
    console.log(data)
  }

  return (
    <div id='contact' className='min-h-full justify-center flex flex-col pt-32 pb-52'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-2'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem className='flex flex-col w-1/2'>
                <FormLabel htmlFor='name' className='text-lg'>Name</FormLabel>
                <FormControl className='p-2 border-slate-300 border-2'>
                  <input {...field} id='name' />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem className='flex flex-col w-1/2'>
                <FormLabel htmlFor='email' className='text-lg'>Email</FormLabel>
                <FormControl className='p-2 border-slate-300 border-2'>
                  <input {...field} id='email' />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='message'
            render={({ field }) => (
              <FormItem className='flex flex-col w-1/2'>
                <FormLabel htmlFor='message' className='text-lg'>Message</FormLabel>
                <FormControl className='p-2 h-52 w-[40rem] border-slate-300 border-2'>
                  <textarea {...field} id='message' />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
          <Button type='submit' className='w-24 p-6 text-lg ml-auto mr-2'>Submit</Button>
        </form>
      </Form>

    </div>
  )
}
