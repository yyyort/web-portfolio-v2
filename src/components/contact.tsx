"use client"

import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Button } from './ui/button'
import { useToast } from '@/hooks/use-toast'
import { contactSchema, ContactSchema } from '@/lib/schema'
import { cn } from '@/lib/utils'


export default function Contact() {
  const { toast } = useToast()

  const form = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  })

  const onSubmit = async (data: ContactSchema) => {
    console.log(data)

    // Send data to the server
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data as ContactSchema)
      });

      if (res.ok) {
        toast({
          title: 'Success',
          description: 'Message sent',
        })
        const response = await res.json();
        console.log(response);
      }
    } catch (error: any) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error,
      })
    }

  }

  return (
    <div id='contact' className='min-h-full justify-center flex flex-col pt-32 pb-52'>
      <h1 className='text-2xl font-bold ml-auto mr-3'>Contact</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-2'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem className='flex flex-col 
              lg:w-1/2
              mobile_s:w-[70%]
              '>
                <FormLabel htmlFor='name' className='
                lg:text-lg
                mobile_s:text-base
                '>Name</FormLabel>
                <FormControl className='border-slate-300 border-2 rounded-md
                lg:p-2
                mobile_s:p-1  
                '>
                  <input {...field} />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem className='flex flex-col
              lg:w-1/2
              mobile_s:w-[70%]
              '>
                <FormLabel htmlFor='email' className='lg:text-lg mobile_s:text-base'>Email</FormLabel>
                <FormControl className='lg:p-2 mobile_s:p-1 border-slate-300 border-2 rounded-md'>
                  <input {...field} />
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
                <FormControl className='p-2 h-52 xl:w-[36rem] border-slate-300 border-2 rounded-md
                mobile_s:w-[94vw]
                '>
                  <textarea {...field}/>
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
          <Button type='submit' className={cn('w-24 p-6 text-lg ml-auto mr-2', form.formState.isSubmitting === true ? 'bg-slate-600 cursor-not-allowed' : '')} disabled={
            form.formState.isSubmitting
          }>Submit</Button>
        </form>
      </Form>

    </div>
  )
}
