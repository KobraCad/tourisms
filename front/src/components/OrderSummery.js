import React from 'react'
import { useNavigate } from 'react-router-dom'

export const OrderSummery = () => {
    const navigate = useNavigate()
  return (
    <>
    <div> Ordered Confirmed</div>
    <button onClick={()=> navigate(-1)}>Go back </button>
    </>
  )
}
