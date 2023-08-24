// Utility functions for calculating mean, median, mode
// Implementation of mean calculation
export function calculateMean(numbers) {
  const sum = numbers.reduce((total, num) => total + num, 0);
  return sum / numbers.length;
}

// Implementation of median calculation
export function calculateMedian(numbers) {
    const sortedNumbers = numbers.slice().sort((a, b) => a - b);
    const middle = Math.floor(sortedNumbers.length / 2);
    return sortedNumbers.length % 2 === 0
      ? (sortedNumbers[middle - 1] + sortedNumbers[middle]) / 2
      : sortedNumbers[middle];
  }

  // Implementation of mode calculation
  export function calculateMode(numbers) {
    const counts = {};
    numbers.forEach(num => {
      counts[num] = (counts[num] || 0) + 1;
    });
    let mode;
    let maxCount = 0;
    for (const num in counts) {
      if (counts[num] > maxCount) {
        maxCount = counts[num];
        mode = num;
      }
    }
    return parseFloat(mode);
  }

  // Implementation of Gamma calculation
  export function calculateGamma(point) {
    return (point.Ash * point.Hue) / point.Magnesium;
  }