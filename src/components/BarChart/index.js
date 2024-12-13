import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ data = [], width, height, hideAxes, color }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return null;
  }

  const cumulativeX = data.reduce((acc, d) => {
    const lastValue = acc.length > 0 ? acc[acc.length - 1] : 0;
    return acc.concat(lastValue + d.x);
  }, []);

  const chartData = {
    labels: cumulativeX,
    datasets: [{
      label: 'Workout',
      data: data.map(d => d.y),
      backgroundColor: color,
      hoverBackgroundColor: color,
    }],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: !hideAxes,
      },
      tooltip: {
        callbacks: {
          title: (tooltipItems) => {
            const index = tooltipItems[0].dataIndex;
            return data[index].key;
          },
        },
      },
    },
    scales: {
      x: {
        display: !hideAxes,
        grid: {
          display: !hideAxes,
        },
      },
      y: {
        display: !hideAxes,
        grid: {
          display: !hideAxes,
        },
      },
    },
    barPercentage: 1.0,
    categoryPercentage: 1.0,
  };

  return (
    <div style={{ width, height }} className="chart-container">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChart;






























// import React from 'react';
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const sectionColors = {
//   warmUp: '#8884d8',
//   active: '#82ca9d',
//   coolDown: '#ffc658',
//   twoStepRepeats: '#ff8042',
//   rampUp: '#8dd1e1',
//   rampDown: '#d0ed57',
// };

// const BarChart = ({ data = [], width, height, hideAxes }) => {
//   if (!Array.isArray(data) || data.length === 0) {
//     return null;
//   }

//   const cumulativeX = data.reduce((acc, d) => {
//     const lastValue = acc.length > 0 ? acc[acc.length - 1] : 0;
//     return acc.concat(lastValue + d.x);
//   }, []);

//   const chartData = {
//     labels: cumulativeX,
//     datasets: [{
//       label: 'Workout',
//       data: data.map(d => d.y),
//       backgroundColor: data.map(d => sectionColors[d.key]),
//       hoverBackgroundColor: data.map(d => sectionColors[d.key]),
//     }],
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         display: !hideAxes,
//       },
//       tooltip: {
//         callbacks: {
//           title: (tooltipItems) => {
//             const index = tooltipItems[0].dataIndex;
//             return data[index].key;
//           },
//         },
//       },
//     },
//     scales: {
//       x: {
//         display: !hideAxes,
//         grid: {
//           display: !hideAxes,
//         },
//       },
//       y: {
//         display: !hideAxes,
//         grid: {
//           display: !hideAxes,
//         },
//       },
//     },
//     barPercentage: 1.0,
//     categoryPercentage: 1.0,
//   };

//   return (
//     <div style={{ width, height }} className="chart-container">
//       <Bar data={chartData} options={options} />
//     </div>
//   );
// };

// export default BarChart;