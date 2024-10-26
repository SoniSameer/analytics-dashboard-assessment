import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import '../styles/components.css';

const BarChartComponent = ({ data }) => {
  return (
    <div className='bar-chart'>
      <h2>Electric Vehicle Model Distribution</h2>
      <ResponsiveContainer width='100%' height={400}>
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 50,
          }}
          style={{ cursor: 'pointer' }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis
            dataKey='make'
            tick={{ fontSize: 12, angle: -30, textAnchor: 'end' }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey='count' fill='#8884d8' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;
