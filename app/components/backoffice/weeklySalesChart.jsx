"use client"
import React, { useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';




ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function WeeklySalesChart () {
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  
  const tabs = [
    {
      title: "Sales",
      type: "sales",
      data: {
        labels,
        datasets: [
          {
            label: 'Sales',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
      }
    },
    {
      title: "Orders",
      type: "orders",
      data: {
        labels,
        datasets: [
          {
            label: 'Orders',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      }
    }
  ]

  const [chartToDisplay, setChartToDisplay] = useState(tabs[0].type)

  // const data = {
  //   labels,
  //   datasets: [
  //     {
  //       label: 'Dataset 1',
  //       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
  //       borderColor: 'rgb(255, 99, 132)',
  //       backgroundColor: 'rgba(255, 99, 132, 0.5)',
  //     },
  //     {
  //       label: 'Dataset 2',
  //       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
  //       borderColor: 'rgb(53, 162, 235)',
  //       backgroundColor: 'rgba(53, 162, 235, 0.5)',
  //     },
  //   ],
  // };

  return (
    <div className='bg-slate-700 p-8 rounded-lg'>
      <h2 className='text-xl font-bold mb-4'>
        Best Selling Products
      </h2>
      {/* Chart */}
      <div className='p-4'>
        {/* Tabs */}
        <div className="text-sm font-medium text-center text-gray-200 border-b border-gray-400 dark:text-gray-400 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px">
              {
                tabs.map((tab, i) => {
                  return(
                    <li className="me-2" key={i}>
                    <button onClick={() => setChartToDisplay(tab.type)} className={chartToDisplay == tab.type ? "inline-block p-4 text-orange-600 border-b-2 border-orange-600 rounded-t-lg active dark:text-orange-500 dark:border-orange-500" : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-300 hover:border-gray-100 dark:hover:text-gray-100"}>{tab.title}</button>
                </li>
                  );
                })
              }
            </ul>
        </div>
        {/* Content to display */}
        {tabs.map((tab,i) => {
          if(chartToDisplay=== tab.type){
            return(
              <Line options={options} data={tab.data} />
            );
          }
          return null;
        })}
      </div>
    </div>
  )
}

export default WeeklySalesChart