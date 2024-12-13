import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import BarChart from "../BarChart";
import "./index.css";

const sectionColors = {
  warmUp: '#8884d8',
  active: '#82ca9d',
  coolDown: '#ffc658',
  twoStepRepeats: '#ff8042',
  rampUp: '#8dd1e1',
  rampDown: '#d0ed57',
};

const LeftContainer = ({ items, barChartData }) => {
  return (
    <Droppable droppableId="left" isDropDisabled={true}>
      {(provided) => (
        <div
          className="left-container"
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          <div className="charts-grid">
            {items.map((key, index) => (
              <Draggable key={key} draggableId={key} index={index}>
                {(provided) => (
                  <div
                    className="small-chart-box"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <div className="chart-title">{key}</div>
                    <BarChart
                      data={barChartData[key].x.map((xValue, i) => ({
                        x: xValue,
                        y: barChartData[key].y[i],
                        key,
                      }))}
                      width="100%"
                      height="80px"
                      hideAxes={true}
                      color={sectionColors[key]}
                    />
                  </div>
                )}
              </Draggable>
            ))}
          </div>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default LeftContainer;







// import React from "react";
// import { Droppable, Draggable } from "react-beautiful-dnd";
// import BarChart from "../BarChart";
// import "./index.css";

// const LeftContainer = ({ items, barChartData }) => {
//   return (
//     <Droppable droppableId="left" isDropDisabled={true}>
//       {(provided) => (
//         <div
//           className="left-container"
//           {...provided.droppableProps}
//           ref={provided.innerRef}
//         >
//           <div className="charts-grid">
//             {items.map((key, index) => (
//               <Draggable key={key} draggableId={key} index={index}>
//                 {(provided) => (
//                   <div
//                     className="small-chart-box"
//                     ref={provided.innerRef}
//                     {...provided.draggableProps}
//                     {...provided.dragHandleProps}
//                   >
//                     <div className="chart-title">{key}</div>
//                     <BarChart
//                       data={barChartData[key].x.map((xValue, i) => ({
//                         x: xValue,
//                         y: barChartData[key].y[i],
//                       }))}
//                       width="100%"
//                       height="80px"
//                       hideAxes={true}
//                     />
//                   </div>
//                 )}
//               </Draggable>
//             ))}
//           </div>
//           {provided.placeholder}
//         </div>
//       )}
//     </Droppable>
//   );
// };

// export default LeftContainer;