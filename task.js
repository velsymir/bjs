function getArrayParams(...arr) {
  let min = Math.min.apply(null, arr),
      max = Math.max.apply(null, arr),
      avg = Number(arr.reduce(function (avg, item, index, arr) {
        avg += item;
        if (index === arr.length - 1) {
          return avg / arr.length;
        }
        return avg;
      }).toFixed(2));
  // for (let i = 0 ; i < arr.length ; i++) {
  //     if (arr[i] < min) {
  //       min = arr[i]
  //     }
  //     if (arr[i] > max) {
  //       max = arr[i]
  //     }
  //     avg += arr[i]
  // }
  // avg = +((avg / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let summ = 0;
  if (arr.length == 0) {
    return summ = 0;
  }
  summ = arr.reduce((sum, item) => {
    return sum += item;
  });
  return summ;
}

function differenceMaxMinWorker(...arr) {
  let diff;
  if (arr.length === 0) {
    return diff = 0;
  }
  return diff = Math.max.apply(null, arr) - Math.min.apply(null, arr)

}

function differenceEvenOddWorker(...arr) {
  let sumEvenEl = 0,
      sumOddEl = 0,
      difElem = 0;
      console.log(arr.length);
  if (arr.length === 0) {
    return difElem;
  }
  for (let i = 0 ; i < arr.length ; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenEl += arr[i];
    } else {
      sumOddEl += arr[i]
    }
  }

  return difElem = sumEvenEl - sumOddEl;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenEl = 0,
      countEvenEl = 0;
  if (arr.length === 0) {
    return 0;
  }
  for (let i = 0 ; i < arr.length ; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenEl += arr[i];
      countEvenEl++;
      }
    }
    return sumEvenEl / countEvenEl;
  }




function makeWork (arrOfArr, func) {

}
