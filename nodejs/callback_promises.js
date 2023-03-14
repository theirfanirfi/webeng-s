function sum(a, b) {
  return new Promise( (resolve, reject) => {
    if (a < 0 || b < 0 ) {
      reject('number cannot be less than 0')
    } else {
      resolve('sum = ' + (a + b))
    }

  })
};


function subtract(a, b) {
  return new Promise( (resolve, reject) => {
    if (a < 0 || b < 0 ) {
      reject('number cannot be less than 0')
    } else {
      resolve('difference = ' + (a - b))
    }

  })
};

Promise.all([sum(-1,2), subtract(4,2)]).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
}).finally(() => {
  console.log('finally');
});






function welcome(number, success, error) {
  if (number >= 10) {
    success('a is equal or greater than 10');
  } else {
    error('a is less than 10');
  }
};

// welcome(1, 
//   (res)=>{
//     console.log(res)
//   },
//   (err) => {
//     console.log(err);
//   }
// );

