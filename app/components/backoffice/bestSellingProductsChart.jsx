"use client"
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function BestSellingProductsChart () {

  const data = {
    labels: ['Necklace', 'Earrings', 'Chains', 'Pendents', 'Rings'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 23, 45, 20],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className='bg-slate-700 p-8 rounded-lg'>
      <h2 className='text-xl font-bold mb-4'>
        Best Selling Chart
      </h2>
      {/* Chart */}
      <div className='p-4'>
        <Pie data={data} />
      </div>
    </div>
  )
}

export default BestSellingProductsChart