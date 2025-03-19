import React from 'react'
import { Outlet } from 'react-router-dom'

export default function ShoppingLayout() {
  return (
    <div className="flex flex-col bg-white overflow-hidden">
     <main>
        <Outlet />
     </main>
    </div>
  )
}
