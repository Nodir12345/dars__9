

// let ism=[
// "azim", "jeack"
// ];
// let ism2 = [...ism] 
// ism2.push("nodir")
// console.log(ism2);
// function  a(){
//   for(i=0;i<ism2.length;i++){
//     console.log(ism2[i]);
//   }
// }
// a()
// let ism=[ "azim", "jeack"]

// let ism2 = ism.map((a)=>a)  
// console.log(ism2);


// let ism=[ "azim", "jeack"]

// let son=[ 1,2,3,4,5]
// let sum = ism.concat(son)
// console.log(sum);

// let person =[

// {
//   ism:"nodir",
//   age:20,
//   insof:false
// },
// {
//   ism:"nodir",
//   age:30,
//   insof:true
// },
// {
//   ism:"nodir",
//   age:18,
//   insof:false
// },
// {
//   ism:"nodir",
//   age:8,
//   insof:true
// }
// ]
  
// let sum = person.find((person)=>person.age < 20)
// console.log(sum);
// function x(p,d){
// let c = ""
// for(let i of person){
//   if (d(i)){
//     c=i
//   }
// }
// return c
// }
// let sum = x(person,(item)=>item.age===20)
// console.log(sum);

// function x(person,func){
//   let s =""
//   for(let i of person){
// if(func(i)){
// s=i
// }
//   }
//   return s

// }
// let summ = x(person,(item)=>item.age ===18)
// console.log(summ);
// let yosh = 2008
// let yil = 2022
// let b = (a,b) => {
//   return yil - yosh
// }
// console.log(b(yil,yosh));
// let person =[

//   {
//     ism:"nodir",
//     age:20,
//     insof:false
//   },
//   {
//     ism:"nodir",
//     age:30,
//     insof:true
//   },
//   {
//     ism:"nodir",
//     age:18,
//     insof:false
//   },
//   {
//     ism:"nodir",
//     age:8,
//     insof:true
//   }
//   ]

//   function x(a,f){
//     let c = ""
//     for(let i of person){
//   if(f(i)===18){
//   c = i
//   }
//   }
//   return c
//   }
//   let s = x(person,(item)=>item.age == 18)
//   console.log(s);

//   let a = "dog"
//   let animal = ["cat","pat",a]
//   // console.log(animal.includes(a));
//   let c = "cat"
//   function x(){
    
//   for(let i of animal){
//     if(c == i){
// console.log(true);
//     }
//     else{
//       console.log(false);
//     }

//   }
// }
// x()


// ----------------------------------------------------------------------------------------
// let a = "dog"

// let animal = ["cat","pat",a]
// function x(animal,f){
//   let g = ""
// for(let i of animal){
//   if(f(i)){
//     if(g = i){
//       g = "bor"
//     }
//   }
//   else {
//     console.log("yuq");
//   }
 
// }
// return g
// }
// let summ =  x(animal,(index)=> index == "pat")
// console.log(summ);

// let arr3=["ejhg","wdhuuefhoip eqgf",91, "qde"];
// console.log(arr3.sort());



// let person =[

//   {
//     ism:"nodir",
//     age:20,
//     insof:false
//   },
//   {
//     ism:"nodir",
//     age:30,
//     insof:true
//   },
//   {
//     ism:"nodir",
//     age:18,
//     insof:false
//   },
//   {
//     ism:"nodir",
//     age:8,
//     insof:true
//   }
//   ]
//   function x(person,func){
//     let s = ""
//     for(let i of person){
//      if(func(i)){
  
//       s = func(i)
//      }
//     }
//     return(s)
//   }
//   let summ = x(person,(index)=>index)
//   console.log(summ);
//  let a =["ffff",["gsfddvy",345],"Hgf"]
//  console.log(a.flat());
//  let son= "546,48,68,86,86,8f9,fdgfh,f54,879,54,87,5,878,51,864,"
//  console.log(son.split("f"));

// let son = [1,2,3,4,5,6,45,46,47,47757]
// let summ = son.join()
// console.log(typeof son);

// let str = "aeirooooshkeeeeeeeeeeekkfkkfkkfkkkfffffffkkkkkkkkkkkkkkkeeerrrrrrrrrrrreeeeeeeeeeeeeeeeekkkkk"
// // let ggg = str.length > 40 ? str.slice(0,40)+ "..." :str ;
// // console.log(ggg);
// let kk = ""
// function x (){
//   if (str.length>40){
//    kk=  str.slice(0,40)+ "..."
//   }
//   else{
//     kk = str
//   }
// return kk
// }
// console.log(x());

// let person =[

//     {
//       ism:"nodir",
//       age:20,
//       insof:false
//     },
//     {
//       ism:"nodir",
//       age:30,
//       insof:true
//     },
//     {
//       ism:"nodir",
//       age:18,
//       insof:false
//     },
//     {
//       ism:"nodir",
//       age:8,
//       insof:true
//     }
//     ]


// let result = person.filter((item )=> item.age != 18)
// // console.log(result);

// function x(person,func){
//   let b = []
//   for(let i = 0 ; i < person.length; i++){
// if(func(person[i])){
//   b.push(person[i])
// }

//   }
//   return b
// }
// let summ = x(person,item => item.age !=18)
// console.log(summ);




let a = "dog"

let animal = ["cat","pat",a]
function x(animal,f){
  let g = ""
for(let i of animal){
  if(f(i)){
    if(g = i){
      g = true
    }
  }
  else {
    console.log(false);
  }
 
}
return g
}
let summ =  x(animal,(index)=> index == "pat")
console.log(summ);
