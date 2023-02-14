import React from 'react'
import Footer from './footer'
import Navbar from './navbar/navbar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="pt-12">
        <Navbar />
        <div className="">{children}</div>
        <Footer />
      </div>
    </>
  )
}
