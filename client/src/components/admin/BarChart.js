import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Sales Per Month',
      },
    },
  };
  
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'
                  ,'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Sales',
        data: [21, 30, 3, 13, 34, 23, 98, 21, 12, 3, 41, 34],
        // backgroundColor: 'rgba(255, 99, 132, 0.5)',
        backgroundColor: 'rgba(53, 162, 235, 0.7)',
      }
    ],
  };

const BarChart = () => {
  return (
    <Bar options={options} data={data} />
  )
}

export default BarChart;