const dbConnect = require('./mongodb');
// console.log(dbConnect());
// dbConnect().then(response =>{
//     response.find().toArray().then(data=>{
//         console.log(data);
//     })
// });

const main = async() =>{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
}
main();