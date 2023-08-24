import React, { useEffect, useState } from 'react';
import { wineData } from './data';
import { calculateGamma, calculateMean, calculateMedian, calculateMode } from './utility/calculationUtilities';
import './App.css'

function App() {
  const [wineDataTable, setWineDataTable] = useState('');
  const [gammaTable, setGammaTable] = useState('');
  const wineDataSet = wineData;

  useEffect(() => {
  
    // Calculate statistics
    const gammaResult = gammaResultUi();
    const classDataResult = classDataUi();
    
    // Update the state with the calculated data
    setGammaTable(gammaResult)
    setWineDataTable(classDataResult)

  }, []);

  const gammaResultUi = () => {

    const gammaClassData = {};
    wineDataSet.forEach(item => {
      const className = item.Alcohol;
      if (!gammaClassData[className]) {
        gammaClassData[className] = [];
      }
      const gamma = calculateGamma(item);
      gammaClassData[className].push(gamma);
    });

    const gammaResultRows = [];
    for (const className in gammaClassData) {
      const gammaData = gammaClassData[className];
      const mean = calculateMean(gammaData)
      const median = calculateMedian(gammaData)
      const mode = calculateMode(gammaData)

      gammaResultRows.push(
        <tr key={className}>
          <td className='first-col'>Class {className}</td>
          <td>{mean.toFixed(3)}</td>
          <td>{median.toFixed(3)}</td>
          <td>{mode.toFixed(3)}</td>
        </tr>
      );
    }
    return gammaResultRows;
}

const classDataUi = () => {
  const classData = {};
  wineDataSet.forEach(item => {
    const className = item.Alcohol;
    if (!classData[className]) {
      classData[className] = [];
    }
    const value = parseFloat(item.Flavanoids);
    classData[className].push(value);
  });

  const resultRows = [];
  for (const className in classData) {
    const flavanoidsData = classData[className];
    const mean = calculateMean(flavanoidsData)
    const median = calculateMedian(flavanoidsData)
    const mode = calculateMode(flavanoidsData)

    resultRows.push(
      <tr key={className}>
        <td className='first-col'>Class {className}</td>
        <td>{mean.toFixed(3)}</td>
        <td>{median.toFixed(3)}</td>
        <td>{mode.toFixed(3)}</td>
      </tr>
    );
  }
  return resultRows;
}

  return (
    <div className='container'>
      <h1>Flavanoids Statistics</h1>
      <table className='data-table'>
        {wineDataTable && (
        <>
        <thead>
        <tr>
          <th>Measure</th>
          <th>Mean</th>
          <th>Median</th>
          <th>Mode</th>
        </tr>
      </thead>
      <tbody>
        {wineDataTable}
      </tbody>
      </>
      )}
      </table>

      <h1>Gamma Statistics</h1>
      <table className='data-table'>
        {gammaTable && (
        <>
          <thead>
            <tr>
              <th>Measure</th>
              <th>Mean</th>
              <th>Median</th>
              <th>Mode</th>
            </tr>
          </thead>
          <tbody>
            {gammaTable}
          </tbody>
        </>
      )}
      </table>
    </div>
  );
}

export default App;
