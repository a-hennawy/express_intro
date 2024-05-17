function mean(arr) {
  const intArr = arr.map((num) => parseInt(num));
  let sum = intArr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  let mean = sum / numsArr.length;
  return mean;
}

function median(arr) {
  const intArr = arr.map((num) => parseInt(num));
  let sortedArr = intArr.sort((a, b) => a - b);

  let length = sortedArr.length;
  let midArr = Math.floor(length / 2);

  if (length % 2 === 0) {
    return (sortedArr[midArr - 1] + sortedArr[midArr]) / 2;
  } else {
    return sortedArr[midArr];
  }
}

function mode(arr) {
  const intArr = arr.map((num) => parseInt(num));
  let countObj = {};

  intArr.forEach((num) => {
    countObj[num] = (countObj[num] || 0) + 1;
  });

  let highestCount = Math.max(...Object.values(countObj));

  let modeArr = [];
  for (let numKey in countObj) {
    if (countObj[numKey] === highestCount) {
      modeArr.push(numKey);
    }
  }
  return modeArr;
}

module.exports = {
  mean: mean,
  median: median,
  mode: mode,
};
