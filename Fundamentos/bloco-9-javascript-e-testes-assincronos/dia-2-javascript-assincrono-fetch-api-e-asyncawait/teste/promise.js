// const aPromise = new Promise((resolve, reject) => {
//   const aNumber = 37;

//   resolve(aNumber);
// });

// aPromise.then((value) => value).then(value => {

// }).catch(() => { })


var p2 = new Promise(function(resolve, reject) {
  resolve(1);
});

p2.then(function(value) {
  console.log(value); // 1
  return value + 1;
}).then(function(value) {
  console.log(value); // 2
});