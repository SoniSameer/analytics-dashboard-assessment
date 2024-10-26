const InsightsComponent = ({
  vehiclesByCounty,
  avgElectricRangeByMake,
  vehiclesByModelYear,
}) => {
  return (
    <div className='dashboard-container'>
      <div className='data-card'>
        <h3>Vehicles by County</h3>
        <table className='table'>
          <thead>
            <tr>
              <th>County</th>
              <th>Vehicles</th>
            </tr>
          </thead>
          <tbody>
            {vehiclesByCounty.map((entry, index) => (
              <tr key={index}>
                <td>{entry.County}</td>
                <td>{entry.Vehicles}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='data-card'>
        <h3>Average Electric Range by Make</h3>
        <table className='table'>
          <thead>
            <tr>
              <th>Make</th>
              <th>Avg Electric Range</th>
            </tr>
          </thead>
          <tbody>
            {avgElectricRangeByMake.map((entry, index) => (
              <tr key={index}>
                <td>{entry.Make}</td>
                <td>{entry['Avg Electric Range']}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='data-card'>
        <h3>Vehicles by Model Year</h3>
        <table className='table'>
          <thead>
            <tr>
              <th>Model Year</th>
              <th>Vehicles</th>
            </tr>
          </thead>
          <tbody>
            {vehiclesByModelYear.map((entry, index) => (
              <tr key={index}>
                <td>{entry['Model Year']}</td>
                <td>{entry.Vehicles}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InsightsComponent;
