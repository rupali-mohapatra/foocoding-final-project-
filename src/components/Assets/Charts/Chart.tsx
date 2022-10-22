import React from 'react';
import './Chart.css';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const data = [
  {
    name: 'Jan',
    ActiveUser: 4000,
  },
  {
    name: 'Feb',
    ActiveUser: 3000,
  },
  {
    name: 'Mar',
    ActiveUser: 7000,
  },
  {
    name: 'Apr',
    ActiveUser: 4000,
  },
  {
    name: 'May',
    ActiveUser: 1890,
  },
  {
    name: 'Jun',
    ActiveUser: 2390,
  },
  {
    name: 'Jul',
    ActiveUser: 2200,
  },
  {
    name: 'Aug',
    ActiveUser: 1000,
  },
  {
    name: 'Sep',
    ActiveUser: 4000,
  },
  {
    name: 'Oct',
    ActiveUser: 5500,
  },
  {
    name: 'Nov',
    ActiveUser: 6000,
  },
  {
    name: 'Dec',
    ActiveUser: 7000,
  },
];
const Chart: React.FC = () => {
  return (
    <div className="chart">
      <h3 className="chartTitle">Sales Analytics</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey="ActiveUser" stroke="#5550bd" />
          <Tooltip />
          <CartesianGrid stroke="#cbc3e3" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
