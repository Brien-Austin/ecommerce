"use client"
import {useState}from 'react'
import {QueryClient,QueryClientProvider} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'

const TanStackProvider = ({children} : {children : React.ReactNode}) => {
    const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider >
  )
}

export default TanStackProvider