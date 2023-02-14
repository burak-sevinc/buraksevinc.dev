import React from 'react'
import Navbar from './navbar/navbar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="pt-12">
        <Navbar />
        <div className="">{children}</div>
      </div>
    </>
  )
}
