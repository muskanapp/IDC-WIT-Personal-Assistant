import React from 'react'
import Column3D from "./charts/Column3d";


// Preparing the chart data
const chartData = [
  {
    label: "Real Estate Poject",
    value: "10"
  },
  {
    label: "Hotel Site",
    value: "6"
  },
  {
    label: "Hotel Booking App",
    value: "18.2"
  },
  {
    label: "Food Delivery App",
    value: "10"
  },
  {
    label: "Google Maps Integration",
    value: "19"
  },
  {
    label: "Travelling Site",
    value: "2.5"
  },
  {
    label: "3D Modeling",
    value: "21"
  },
  {
    label: "Electric Bike Site",
    value: "3"
  }
];

function UsersOverview() {
  return (
    <div>
      <Column3D data={chartData} />
    </div>
  )
}

export default UsersOverview
