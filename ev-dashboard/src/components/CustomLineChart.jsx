import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Brush,
} from 'recharts';

const CustomLineChart = ({ data }) => {
  return (
    <div className='linechart-container'>
      <h2>Electric Range by Model Year</h2>
      <ResponsiveContainer width='100%' height={400}>
        <LineChart
          width={800}
          height={400}
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          style={{ cursor: 'pointer' }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='Model Year' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type='monotone'
            dataKey='Average Electric Range'
            stroke='#8884d8'
            activeDot={{ r: 8 }}
          />
          <Brush dataKey='Model Year' height={30} stroke='#8884d8' />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomLineChart;
