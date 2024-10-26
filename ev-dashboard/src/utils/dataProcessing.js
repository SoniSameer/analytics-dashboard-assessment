export const getTotalEVs = (data) => {
  return data.length;
};

export const getEVDistributionByMake = (data) => {
  const distribution = {};

  data.forEach((vehicle) => {
    const make = vehicle.Make;
    if (distribution[make]) {
      distribution[make]++;
    } else {
      distribution[make] = 1;
    }
  });

  return Object.entries(distribution).map(([make, count]) => ({ make, count }));
};

export const getAverageElectricRange = (data) => {
  const totalRange = data.reduce(
    (acc, vehicle) => acc + (parseInt(vehicle['Electric Range']) || 0),
    0
  );
  const totalEVs = data.length;

  return totalEVs > 0 ? (totalRange / totalEVs).toFixed(2) : 0;
};

export const processCsvDataForLineChart = (csvData) => {
  // Filter out invalid rows and create a map to store electric range sums and counts by year
  const aggregatedData = {};

  csvData.forEach((row) => {
    const modelYear = parseInt(row['Model Year']);
    const electricRange = parseInt(row['Electric Range']);

    if (!isNaN(modelYear) && !isNaN(electricRange)) {
      if (!aggregatedData[modelYear]) {
        aggregatedData[modelYear] = { sum: 0, count: 0 };
      }
      aggregatedData[modelYear].sum += electricRange;
      aggregatedData[modelYear].count += 1;
    }
  });

  // Convert the aggregated data to an array of objects with the average electric range
  const processedData = Object.keys(aggregatedData).map((year) => ({
    'Model Year': parseInt(year),
    'Average Electric Range': Math.round(
      aggregatedData[year].sum / aggregatedData[year].count
    ),
  }));

  // Sort by model year
  processedData.sort((a, b) => a['Model Year'] - b['Model Year']);

  return processedData;
};

export const getVehiclesByCountyData = (data) => {
  const result = {};
  data.forEach((entry) => {
    result[entry.County] = (result[entry.County] || 0) + 1;
  });
  return Object.entries(result).map(([county, vehicles]) => ({
    County: county,
    Vehicles: vehicles,
  }));
};

export const getAverageElectricRangeByMakeData = (data) => {
  const ranges = {};
  const counts = {};

  data.forEach((entry) => {
    // Ensure ElectricRange is a valid number
    const electricRange = Number(entry['Electric Range']);
    if (entry.Make && !isNaN(electricRange) && electricRange > 0) {
      ranges[entry.Make] = (ranges[entry.Make] || 0) + electricRange;
      counts[entry.Make] = (counts[entry.Make] || 0) + 1;
    }
  });

  return Object.entries(ranges).map(([make, totalRange]) => ({
    Make: make,
    'Avg Electric Range': Math.round(totalRange / counts[make]),
  }));
};

export const getVehiclesByModelYearData = (data) => {
  const result = {};

  data.forEach((entry) => {
    // Ensure ModelYear is a valid number
    const modelYear = Number(entry['Model Year']);
    if (!isNaN(modelYear) && modelYear > 0) {
      result[entry['Model Year']] = (result[entry['Model Year']] || 0) + 1;
    }
  });

  console.log(
    'second',
    Object.entries(result).map(([year, vehicles]) => ({
      'Model Year': year,
      Vehicles: vehicles,
    }))
  );

  return Object.entries(result).map(([year, vehicles]) => ({
    'Model Year': year,
    Vehicles: vehicles,
  }));
};
