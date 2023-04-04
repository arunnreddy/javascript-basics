// async function arun(){
//     let r=await fetch("https://jsonplaceholder.typicode.com/users")
//   let d=await r.json()
// let m=d.map((d)=>d.name)
// console.log(m)
// }
// arun()


// let a="ARMY";
//  let b="MRAY";
//  let c=""

//  for(let i=0;i<=a.length;i++){

//     for(let j=0;j<=b.length;j++){
//         if(a[i]==b[j]){
//             c+=b[j]
//         }

//     }
//     console.log(c)
//  }

// let a="arun";
// console.log(a.length)


 /*number */
// let a=10.00;
// let b=parseFloat(a)
// console.log(typeof b)

// let c=  Number(a)
// console.log(c)
//big int 
// let max=Number.MIN_SAFE_INTEGER
// console.log(max)

//boolean and null

// let isRunning=true
// console.log(isRunning)
// console.log(typeof isRunning)

// let d=null
// console.log(typeof d)


//reference data type 


//objects 


// let data=JSON.parse(JSON.stringify(user))
// console.log(data)()
// data.age.class="11th"
// console.log(data)
// console.log(user)



 //conditional

//  let a=10;
//  if(a>5){
//     console.log( "a is greater than 5" )
//  }if(a>4){
//     console.log('a is not greater than 4')
//  }else{
// console.log("a is  not greater than 10")
//  }

// /ternary

// let a=10;
// let b=20

// let result=a>=10?b===20?"hai":"hello":"none"
// console.log(result)
// let users=[12]

// let mar=users.length>0?"display the users":"no users available"
// console.log(mar)

//switch 

// let data="add user"

// switch(data){
//     case "add user":
//         console.log("adding user")
//         break;
//         case "adduser":
//             console.log("addinguser")
//             break;
//             default:
//                 console.log("nothing matc")

// }


//for loop
// let data=["A","B","C"]
// let text=""
// console.log( typeof text)
// for(let i=0;i<data.length;i++){
//     text+=data[i] + "<br/>" //text=text+dat[o] <br/>
//     document.write(text)
//     // console.log(text)
    
// }
// // document.write(text)
// document.getElementById("arun").innerHTML=text


//for in
// let data=[{
    //     name:"arun",
    //     rollnumber:23,
    //     class:"10th"
    // } 
    // for(let keys of data){
//     console.log(keys)
// }
// for of
//,{
//     name:"arun",
//     rollnumber:23,
//     class:"10th"
// }]
// for(let keys of data){
//     console.log(keys)
// }
// let raw=[1,2,34,45]
// let text=""
// for (let data of raw){
//   text+=data+ "<br/>"
//  document.write(text)
// }



// let a=33

// for(let i=30;i<a;i++){
//     console.log(a)
//     console.log("hai")

//   a=32
// }
// console.log("sjank")
// function arun(){
//     return  new Promise((resolve,reject)=>{
//         let a=10
//         if(a>1){
//             resolve("hai")
//         }else{
//             reject("hello")
//         }
//     })
    
// }
// console.log(arun())
// arun().catch((y)=>console.log(y))

// console.log("arun")
// .then() is reason for asynchronous functionality in javascript



