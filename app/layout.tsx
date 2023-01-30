"use client"

import { ChakraProvider } from '@chakra-ui/react'
import Navbar from '@/componets/Navbar'
import Footer from '@/componets/Footer'
import Hero from '@/componets/Hero'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body><ChakraProvider>
        <Navbar/>
        <Hero/>
        {children}
        <Footer/>
        </ChakraProvider></body>
    </html>
  )
}
