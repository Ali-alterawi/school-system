// q5
// for loop
// let b =[ 1, 2 ,3]
// let c =[]
// for (let i = 0 ; i <b.length ; i++){
//     c.push(2 **b[i]);
// }

// console.log(c);

// for each
// b.forEach((value ,i , b) => {
//     b[i]=2 ** value
// });
// console.log(b);

// map
// let d = b.map((v)=>2**v)
// console.log(d);

// Q6:
// let e0= [1,2,3,"israa","ali" , "mmm",5,10]
// let e1= e0.map((v)=>{
//     if (isNaN(v)){
//         return "N/A";
//     }
//     else if(v%2 == 0){
//         return "even";
// }
//     else{
//         return "odd";
//     }
// })
// console.log(e1);
//q6:

let ff =[3,4,5,6,7,8,9,10,15,30];

let e2 = ff.map((v)=>{
    if (v%3 == 0 && v%5 ==0)
    { return "fizz buzz"}
    else if (v%3 == 0)
    { return "fizz"}
    else if (v%5 == 0)
    { return "buzz"}
    else
    { return v}
})
console.log(e2);