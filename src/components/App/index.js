import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Header from '../Header';
import LeftContainer from '../LeftContainer';
import RightContainer from '../RightContainer';
import './index.css';

const barChartData = {
  warmUp: { x: [3], y: [75] },
  active: { x: [3], y: [110] },
  coolDown: { x: [3], y: [65] },
  twoStepRepeats: { x: [2, 2], y: [110, 80] },
  rampUp: { x: [1, 1, 1, 1], y: [80, 95, 100, 105] },
  rampDown: { x: [1, 1, 1, 1], y: [120, 100, 95, 90] },
};

const Dashboard = () => {
  const [rightContainerData, setRightContainerData] = useState([]);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    const newData = Array.from(rightContainerData);

    if (source.droppableId === 'left' && destination.droppableId === 'right') {
      if (!newData.includes(result.draggableId)) {
        newData.splice(destination.index, 0, result.draggableId);
      }
    } else if (source.droppableId === 'right' && destination.droppableId === 'right') {
      const [movedItem] = newData.splice(source.index, 1);
      newData.splice(destination.index, 0, movedItem);
    }

    setRightContainerData(newData);
  };

  const clearBlocks = () => {
    setRightContainerData([]);
  };

  return (
    <div className="dashboard-container">
      <Header />
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="main-content">
          <LeftContainer items={Object.keys(barChartData)} barChartData={barChartData} />
          <RightContainer data={rightContainerData} barChartData={barChartData} clearBlocks={clearBlocks} />
        </div>
      </DragDropContext>
    </div>
  );
};

export default Dashboard;