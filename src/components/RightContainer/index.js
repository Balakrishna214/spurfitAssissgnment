import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import BarChart from '../BarChart';
import './index.css';

const sectionColors = {
  warmUp: '#8884d8',
  active: '#82ca9d',
  coolDown: '#ffc658',
  twoStepRepeats: '#ff8042',
  rampUp: '#8dd1e1',
  rampDown: '#d0ed57',
};

const RightContainer = ({ data, barChartData, clearBlocks }) => {
  const chartData = data.flatMap((key) => {
    const section = barChartData[key];
    return section.x.map((xValue, index) => ({
      x: xValue,
      y: section.y[index],
      key,
    }));
  });

  return (
    <div className="right-container">
      <button className="clear-button" onClick={clearBlocks}>Clear Blocks</button>
      <Droppable droppableId="right" direction="horizontal">
        {(provided) => (
          <div className="chart-area" {...provided.droppableProps} ref={provided.innerRef}>
            {chartData.length === 0 ? (
              <div className="empty-chart">
                <BarChart data={[]} width="100%" height="400px" />
                <div className="placeholder-text">Click the blocks or drag them here to begin building your workout.</div>
              </div>
            ) : (
              <BarChart
                data={chartData}
                width="100%"
                height="400px"
                color={chartData.map(d => sectionColors[d.key])}
              />
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <div className="section-details">
        {data.map((key) => (
          <div key={key} className="section-container">
            <div className="section-title">{key}</div>
            <div className="section-info">
              <div className="section-distance">
                {barChartData[key].x.reduce((a, b) => a + b, 0).toFixed(2)} km
              </div>
              <div className="menu-icon">⋮</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightContainer;



// import React from 'react';
// import { Droppable } from 'react-beautiful-dnd';
// import BarChart from '../BarChart';
// import './index.css';

// const RightContainer = ({ data, barChartData, clearBlocks }) => {
//   const chartData = data.flatMap((key) => {
//     const section = barChartData[key];
//     return section.x.map((xValue, index) => ({
//       x: xValue,
//       y: section.y[index],
//       key,
//     }));
//   });

//   return (
//     <div className="right-container">
//       <button className="clear-button" onClick={clearBlocks}>Clear Blocks</button>
//       <Droppable droppableId="right" direction="horizontal">
//         {(provided) => (
//           <div className="chart-area" {...provided.droppableProps} ref={provided.innerRef}>
//             {chartData.length === 0 ? (
//               <div className="empty-chart">
//                 <BarChart data={[]} width="100%" height="400px" />
//                 <div className="placeholder-text">Click the blocks or drag them here to begin building your workout.</div>
//               </div>
//             ) : (
//               <BarChart data={chartData} width="100%" height="400px" />
//             )}
//             {provided.placeholder}
//           </div>
//         )}
//       </Droppable>
//       <div className="section-details">
//         {data.map((key) => (
//           <div key={key} className="section-container">
//             <div className="section-title">{key}</div>
//             <div className="section-info">
//               <div className="section-distance">
//                 {barChartData[key].x.reduce((a, b) => a + b, 0).toFixed(2)} km
//               </div>
//               <div className="menu-icon">⋮</div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RightContainer;