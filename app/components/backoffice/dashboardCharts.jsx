import React from 'react'
import WeeklySalesChart from './weeklySalesChart'
import BestSellingProductsChart from './bestSellingProductsChart'

function DashboardCharts () {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 lg:space-x-4 space-y-4 lg:space-y-0'>
      <WeeklySalesChart />
      <BestSellingProductsChart />
    </div>
  )
}

export default DashboardCharts