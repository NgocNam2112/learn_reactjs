// // Object method.

// const job = {
//     position: 'cashier',
//     type: 'hourly',
//     isAvailable: true,
// };


// // Use Object.create to pass properties
// const barista = Object.create(job);

// barista.position = "barista";
// barista.showDetails();

// Output
// // The barista position is hourly and is accepting applications.

// // Object.values()
// // Initialize an object
// const session = {
//     id: 1,
//     time: `26-July-2018`,
//     device: 'mobile',
//     browser: 'Chrome'
// };

// // Get all values of the object
// const values = Object.values(session);

// console.log(values);
// // Output
// // [1, "26-July-2018", "mobile", "Chrome"]

arr1 = ['John', 'Pete', 'Mary']
arr2 = ['Mary', 'Henry', 'Harry']
var arr3 = arr1.concat(arr2)

const uniqueSet = new Set(arr3);
uniqueSet.map(item => console.log('item'))