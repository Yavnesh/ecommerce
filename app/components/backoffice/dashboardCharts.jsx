import React from 'react'
import WeeklySalesChart from './weeklySalesChart'
import BestSellingProductsChart from './bestSellingProductsChart'

function DashboardCharts () {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 space-x-4'>
      <WeeklySalesChart />
      <BestSellingProductsChart />
    </div>
  )
}

export default DashboardCharts