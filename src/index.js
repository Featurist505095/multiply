module.exports = function multiply(first, second) {
  let secondM = second.split('').reverse();
  let mult = [];
  let nullCounter = [];
  console.log(secondM);
  for (let i = 0; i < secondM.length; i++) {
    for (let j = secondM[i]; j > 0; j--) {
      let k = 0;
      while (k < i) {
        nullCounter = nullCounter + "0";
        k++;
      }
      mult.push((first + nullCounter).split(''));
      nullCounter = "";
    }
  }

  mult.map(e => {
    return e.reverse();
  });

  return mult.reduce((acc, currValue) => {
    while (currValue.length < acc.length) {
      currValue.push("0");
    }
    while (currValue.length > acc.length) {
      acc.push("0");
    }
    for (let i = 0; i < currValue.length; i++) {
      if (Number(currValue[i]) + Number(acc[i]) >= 10) {
        acc[i] = (Number(currValue[i]) + Number(acc[i])) % 10;
        if (acc[i + 1] != undefined)
          acc[i + 1] = Number(acc[i + 1]) + Number("1");
        else {
          acc[i + 1] = "1";
        }
      }
      else {
        acc[i] = (Number(currValue[i]) + Number(acc[i]));
      }
    }
    return acc;
  }).reverse().join('');
}