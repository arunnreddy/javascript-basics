// function callback(){
//     return "welcome"
// }
// function  higher(a,cbf){
// if(a>4){
//   console.log(cbf())
// }
 
 
// }
// higher(10,callback)


// function hai(a){
// a()
// }

// hai(function(){
//   console.log("hai")
// })

// let promise=new Promise((resolve,reject)=>{
//   console.log("hai")
//     let a=10;
//     if(a>2){
//         resolve("hai")
//     }else{
//         reject("hello")
//     }
// })
// promise.then((x)=>{console.log(x)})
// promise.catch((y)=>console.log(y))

// console.log("first excuted")



// function data(){
//     console.log("first excuted")
//     fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json()).then((data)=>console.log(data)).catch((e)=>console.log(e))
//    console.log("second excuted")
// }
// data()
// console.log("hai")


// async function meta(){
//     console.log("first excuted")
//     let result=await fetch("https://jsonplaceholder.typicode.com/users")
//     let final= await result.json()
//     console.log(final)
//     console.log("second excuted")
// }
// meta()
// console.log("hai")



// function arun(){
//     console.log("hai")
//     let res=fetch("https://jsonplaceholder.typicode.com/users")
//     console.log(res)
//     console.log("hello")
// }
// arun()

// function outer(){
//     let a=10;
//      return function inner(){
//         let b=20
//         return a+b

//     }
// }
// let b=outer()
// console.dir(b)


