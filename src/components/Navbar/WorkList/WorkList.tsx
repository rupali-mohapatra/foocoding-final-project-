import React, { useRef, useState } from 'react';
import './WorkList.css';

const WorkList = () => {
  const [taskItems, setTaskItems] = useState([
    'Call the client',
    'Meeting with the developer team',
    'Make changes in the cloud project',
  ]);
  const [newTaskItem, setNewTaskItem] = useState('');
  //save refernce for dragItem and dragOverItem
  const dragItem = useRef<any>(null);
  const dragOverItem = useRef<any>(null);

  //handle drag sorting
  const handleSort = () => {
    //duplicate items
    let _taskItems = [...taskItems];
    //remove and save the dragged item
    const draggedItemContent = _taskItems.splice(dragItem.current, 1)[0];
    //Switch the position
    _taskItems.splice(dragOverItem.current, 0, draggedItemContent);
    //reset the position ref
    dragItem.current = null;
    dragOverItem.current = null;

    //update the actual array
    setTaskItems(_taskItems);
  };
  //handle Task change
  const handleTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskItem(e.target.value);
  };
  //handle new item addition
  const handleAddItem = () => {
    const _taskItems = [...taskItems];
    _taskItems.push(newTaskItem);
    setTaskItems(_taskItems);
  };

  return (
    <div className="workList">
      <h2>Tasks to complete</h2>
      <div className="input-group">
        <input
          type="text"
          name="task name"
          placeholder="Contact the client"
          onChange={handleTaskChange}
        />
        <button className="add-btn" onClick={handleAddItem}>
          Add a Task
        </button>
      </div>
      <div className="list-container">
        {taskItems.map((item, index) => (
          <div
            key={index}
            className="list-item"
            draggable
            onDragStart={(e) => (dragItem.current = index)}
            onDragEnter={(e) => (dragOverItem.current = index)}
            onDragEnd={handleSort}
            onDragOver={(e) => e.preventDefault()}
          >
            <i className=" fa-solid fa-bars"></i>
            <h4>{item}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkList;
