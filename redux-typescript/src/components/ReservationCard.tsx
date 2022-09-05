import React from 'react'

interface ReservationCardTypes {
    name: string
}

function ReservationCard({name}: ReservationCardTypes) {
  return (
    <div className="">
            {name}  
    </div>
  )
}

export default ReservationCard