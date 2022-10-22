import React from 'react';

import Chart from '../../components/Assets/Charts/Chart';
import FeaturedInfo from '../../components/Assets/FeaturedInfo/FeaturedInfo';
import WidgetLg from '../../components/Assets/Widgets/WidgetLg/WidgetLg';
import WidgetSm from '../../components/Assets/Widgets/WidgetSm/WidgetSm';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
