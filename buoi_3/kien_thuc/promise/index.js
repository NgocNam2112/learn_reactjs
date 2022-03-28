/**Callback*/

// function increaseCounter(a, b) {
//     return a + b;
// };

// increaseCounter(4, 5);

// function increaseCounter(a, b, callback) {
//     console.log('callback', callback());
//     if(callback() === true) {
//         console.log('sum', a + b);
//         return;
//     }
//     console.log('Sai tham số.')
// }


// increaseCounter(4, 5, () => {
//     return true;
// })

/**Promise */
/** Cú pháp */
// let promise = new Promise(function (resolve, reject) {

// })


let promise = new Promise(function (resolve, reject) {
    // setTimeout(() => resolve('Pendding success'), 1000);
    setTimeout(() => reject('Pendding error'), 2000);
})

console.log('promise', promise);

promise.then(response => {
    console.log('response', response);
    return response;
}).catch(error => {
    console.log('error', error)
})


// console.log('getPendingPromiseValue', getPendingPromiseValue)

// promise.then(result => console.log('result:', result))
// .catch(error => console.log('log error', error))


/**
 * 
 * Callback, callback hell, Promise, async&await
 */

