// import { useState } from 'react'
// import './App.css'
// import TodoList from './components/TodoList'
// import BarChart from './components/BarChart'

// function App() {
//   // const [count, setCount] = useState(0)

//   return (
//     <>
//       <BarChart/>
//       {/* <TodoList/> */}
//     </>
//   )
// }

// export default App

import React from 'react';
import { Bar } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels =  ['Flour', 'Butter', 'Sugar', 'Eggs'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Croissants',
      data: [3, 2, 0, 0],
      backgroundColor: '#FFA500',
    },
    {
      label: 'Pancakes',
      data: [1, 1, 2, 3],
      backgroundColor: '#808080',
    },
    {
      label: 'Cookies',
      data: [2, 1, 0, 0],
      backgroundColor: '#FFD700',
    },
    {
      label: 'Doughnuts',
      data: [0, 0, 1, 1],
      backgroundColor: '#8B4513',
    },
  ],
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

export default function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Bar data={data} options={options} />
    </div>
  );
} 

