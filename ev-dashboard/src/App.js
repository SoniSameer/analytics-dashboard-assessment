import useFetchData from './hooks/useFetchData';
import {
  getTotalEVs,
  getEVDistributionByMake,
  getAverageElectricRange,
  processCsvDataForLineChart,
  getVehiclesByCountyData,
  getAverageElectricRangeByMakeData,
  getVehiclesByModelYearData,
} from './utils/dataProcessing';
import BarChart from './components/BarChart';
import Loader from './components/Loader';
import CustomLineChart from './components/CustomLineChart';
import InsightsComponent from './components/InsightsComponent';
import './styles/App.css';

const App = () => {
  const { data, loading, error } = useFetchData('/data.csv');

  if (loading) return <Loader />;
  if (error) return <div>Error loading data</div>;

  return (
    <div>
      <h1>Electric Vehicle Dashboard</h1>
      <h2>Total EVs: {getTotalEVs(data)}</h2>
      <h2>Average Electric Range: {getAverageElectricRange(data)} miles</h2>
      <BarChart data={getEVDistributionByMake(data)} />
      <CustomLineChart data={processCsvDataForLineChart(data)} />
      <h2>Key Insights Table</h2>
      <InsightsComponent
        vehiclesByCounty={getVehiclesByCountyData(data)}
        avgElectricRangeByMake={getAverageElectricRangeByMakeData(data)}
        vehiclesByModelYear={getVehiclesByModelYearData(data)}
      />
    </div>
  );
};

export default App;
