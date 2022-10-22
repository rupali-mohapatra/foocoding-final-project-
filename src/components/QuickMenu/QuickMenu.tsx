import React from 'react';
import { Outlet } from 'react-router-dom';

const QuickMenu = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default QuickMenu;
