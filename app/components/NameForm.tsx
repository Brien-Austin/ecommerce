"use client"
import * as z from 'zod'
import axios from 'axios'
import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'

import {
    Form,FormControl,FormDescription,FormField,FormLabel,FormMessage,FormItem
} from '@/components/ui/form'

import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { Pencil, PlusCircle } from 'lucide-react'
import { useState } from 'react'
import path from 'path'
import { AddProduct } from '@/actions/addProduct'
const formSchema = z.object({
    name:z.string().min(1,{
        message:"Enter name of the product"
    }),
    
})




const NameForm = () => {

    const [isEditing , setEditing] = useState<boolean>(false)
 
    const form = useForm<z.infer<typeof formSchema>>({
        resolver:zodResolver(formSchema),
        defaultValues:{
            name:""
        }
    })
    
const {isSubmitting , isValid  } = form.formState;

const router = useRouter();

    const onSubmit =  async(values:z.infer<typeof formSchema>) =>{
        try {
            await AddProduct(values.name)

            toast.success('Title updated successfully',{
                position:'top-right'
            })
            toggleEdit();
            router.refresh();
            
          
        } catch  {
            console.log('Error from Component')
            toast.error('Something went wrong')
            
        }
       
    }
 
const toggleEdit =()=> setEditing((current)=>!current)
   
    return ( 
       <div className='mt-6 border bg-slate-100 w-fit rounded-md p-4'>
        <div className='font-medium flex items-center justify-between '>
            Add a product
            <Button onClick={toggleEdit} variant="ghost">
               {
                isEditing ? (
                    <>
                    Cancel
                    </>
                ) : (
                    <>
                    <PlusCircle className='h-4 w-4 mr-2'/>
                    
                    </>
                   )
               }

            
           
            </Button>

        </div>
        {!isEditing ? (
            <>
         
            </>
        ) : (<>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}className='space-y-4 mt-4'>
                <FormField control={form.control} name="name" render={({field})=>
            <FormItem>
                <FormControl>
                    <Input disabled={isSubmitting}

                    {...field}/>
                </FormControl>
                <FormMessage/>
            </FormItem>}/>
            <div className='flex items-center gap-x-2 '>
                <Button
                type='submit'>
                    Save

                </Button>
            </div>

            </form>
            </Form>
        </>)
}
       
       </div>
     );
}
 
export default NameForm;