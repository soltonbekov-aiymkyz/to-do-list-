


// "use strict";///use usestrict error without let 
// mylifestyle = "aiymkyz";
// console.log(mylifestyle);




// const myage = 23;//const is the unchangeable form     
// //myage =12 is error 
// console.log(myage);

// const user = {
//     name: 'aiym',
//     age: 17,
//     dateofbirth: 'atrgd',
// }
// console.log(user);


// user.age =18

// console.log(user)


// i hope today is will be the best day in my lilfe Insha ALLAH
//just relax and begin just do it ineed my dreams very much 
//i am a worse but i am trying will be the best in the world 

// let a = '35';
// let b = "22"

// console.log(a*b);


// let message = "hello Aiym"
// let number = 5

// if (number>2){
//     console.log(message)
// }
//     else{
//     console.log("error:(")
//     }



// let message ="hello";
// // let user;
// // if( 5 > 1 ) {
// //     user =", Vlad";
// // } else{
// //     user =" Aiym";
// // }
// let user = (5>1) ? ", vLAD" : ",Aiym"
// message += user;
// console.log(message)

// if (11 > "1"){
//     console.log('true');
// } else{console.log('fasle')}


// let p =(23>"11" && 45<100)  ?"true" :"false";
// console.log(p)



//for and while
// let num = 0;
// for (; num<5; num++){
//     console.log(num);
//     if(num==2) break;  /*continue*/
// }
// console.log(`work stopped ,num =${num}`);

// function calcSum(numOne,numTwo) {
//     let numSum = numOne + numTwo;
//     //vozvrat
//     return numSum;
//     //dalshe kod ne vypolnaetsya 
// }

// let funcRezult = calcSum(1,2);
// console.log(`summa:${funcRezult}`)


// //funksiay vyzyvaet samy sebya rekursiya
// function calcSum(numOne,numTwo) {
//     let result = 1;
//     for (let i=0; i<numTwo; i++){
//         result *= numOne;
//     }
//     return result;
// }
// console.log(calcSum(2, 3));

// //rekursiya
// function calcSum(numOne,numTwo) {
//   if (numTwo===1){
//         return numOne;
//     }else{
//         return numOne * calcSum(numOne,numTwo -1);
//     }
// }
// console.log(calcSum(2, 3));

// function showMessage(text, name){
//     console.log(`${text},${name}`);
// }
// setTimeout(showMessage,3000,'hello','Aiym')



// function showMessage(num){
//     console.log(num);
//     if (num<5){

// setTimeout(showMessage,1000,++num);
//     }
// }
// setTimeout(showMessage,3000,1)

// function showMessage(){
//     console.log('num');

// }
// setTimeout(showMessage,0);
// console.log('lela')


// ///fd 
// function func(){
//     alert("hey")
// }
// func();

// //func expression   annonymoys function 
// var func = function () {
//     alert("hey");
// }
// func();


// function add (a,d){
//     return a+d;
// }
// add(10,23);


// /////object 
// let arab = "nationalitly"
// let userinfo ={ 
//     name: "Gaziy",
//     age: "35",
//     "likes singing": true,
//     [arab]: true,
// };
// // console.log(userinfo)
// // console.log(userinfo.age)
// // console.log(userinfo["likes singing"])
// let key = "name"
// console.log(userinfo[arab]);

// console.log(userinfo[key]);


// let userinfo ={ 
//         name: "Gaziy",
//         age: "35",
//         "likes singing": true,

//////////////add new params 
//userinfo.toy =lexus
//delete userinfo.toy
//         address:{
//             city:"saudia",
//             street:"sheikh",
//         }
//     };


//  console.log(userinfo.address.city);
//  console.log(userinfo.address);
//if else 

//  console.log(userinfo?.address?.city);




// function make(name,age){
//     return{
//          name,
//          age,
//     };
// }
// let user = make(Gaziy,35);
// console.log(user);




///object.assign(where(object),what(property#1),what(property#2))

// let userinfo ={ 
//         name: "Gaziy",
//         age: "35",
//     };

//     let user = Object.assign({},userinfo);
//     user.age =18; 
//     console.log(user);
//     console.log(userinfo);
//  Object.assign(userinfo,{['like meals']:true});
//  if (userinfo.age){
//      console.log(userinfo.age)
//  }

// /// if value = undefinded to we are use in 
// let userinfo ={
//     name:undefined
// }
// if ("name" in userinfo){
//     console.log(userinfo.name)
// }



// let userinfo ={
//     name:"Gaziy",
//     age:"30",

// },
// Showin function () {
//     console.log(`${userinfo.name},i love you ${userinfo.age} years old `)
// }
// userinfo.showin()

////////function  konstruktion 

// function User(name) {
//     this.name = name;
//     this.age = 30;
// }
// console.log(new User("basya"));
// console.log(new User("lena"));





//im massive save dannye 
///difference in object we can  govern control  gibche 

// let arr = [
//     'gaziy',
//     {
//         type: "js",
//         age: "23",
//     },
//     true,
//     function(){
//         console.log("hi i am wife Gaziy ")
//     }
// ];

// arr[0] = 'Aiym'
// //////delete 
// arr.splice(1,1);

// console.log(arr[1].type);
// console.log(arr);
// arr[3]();

// let matrix = [
//     [1,2,3],
//     [1,2,3],
//     [1,2,3],
// ];
// console.log(matrix);
// console.log(matrix[0][1]);








// /////PUSH POP SHIFT UNSHIFT 
// let  arr = ['Gaziy','Aiym','Rahma','Ahmad',];
// //push add element v konse 
// arr.push('jesuph');
// console.log(arr)

// ///pop delete last eleemnent in massive 
// arr.pop();
// console.log(arr)

// //shift delete element v nachale
//  arr.shift()
//  console.log(arr)

//  //unshift add element v nachale 
//  arr.unshift('Aisha')
// console.log(arr)


///SPLICE  add delete zamenyat 
// let  arr = ['Gaziy','Aiym','Rahma','Robert',];
// //delete 
// arr.splice(1,1)
// console.log(arr)

// ////zamenit 
// let  arr = ['Gaziy','Aiym','Rahma','Robert',];
// arr.splice(0,1, 'Ahmad')
// console.log(arr)





// ////ADDD 
// let  arr = ['Gaziy','Aiym','Rahma','Robert',];
// arr.splice(1,0, 'Hadicha','Aub')
// ///1 pered Aiym
// //// 0 2e znacheenie  obezatelno doljen byt 
 // console.log(arr)

// /////DELETE LAST ELEMETN
//  let  arr = ['Gaziy','Aiym','Rahma','Robert',];

// arr.splice(-1,1)
// console.log(arr)


// //SLICE
// ///sozdaet new massive cope chast libo ves massive 
// let  arr = ['Gaziy','Rob','Rahma','Aiym',];
// ///start with 1st position Rob,
// ///do last position Rahma ne vkluchaya ee 
//  let arrOne = arr.slice(2,3);
// console.log(arrOne)



// ////CONCAT
// let  arr = ['Gaziy','Rahma','Aiym',];
//  let arrOne = arr.concat('Hadicha');
// console.log(arrOne)




/////INDEX OF 
///dlya strok  naidet takoe ppozisii kaka on 
// let  arr = ['Gaziy','Rahma','Aiym',];
// console.log(arr.indexOf('Aiym'))
// console.log(arr.indexOf('Hadicha'))


// console.log(arr.includes('Gaziy'))
// console.log(arr.includes('Hadicha'))


//v massie elemnt object to use find
/////find 1 popavsheu 1u
///search elemetn with defined conditiions
// let arr =[
//     {name: 'Vasya', age:34},
//     {name: 'Gaziy', age:40},
// ]

// //item     {name: 'Vasya', age:34},
// //index key position array bes masssive 

// let result = arr.find(function(item, index, array){
// return item.age=== 40;
// });
// console.log(result)



// ////FILTER
// let arr =[
//     {name: 'Vasya', age:34},
//     {name: 'Gaziy', age:36},
// ]

// let result = arr.filter(function(item, index, array){
// return item.age >= 30;
// });
// console.log(result)



///SORT sortiruet massive na mestte menyaaa b nem poryadok elementa

// //sortirovka slov 
// let  arr = ['Gaziy','Rahma','Aiym',"Ahmad"];
//  console.log(arr.sort())

//REVERSE na obratnuu storonu 
//let  arr = ['Gaziy','Rahma','Aiym',"Ahmad"];
//  console.log(arr.reverse())




// /////SORT NNUMBERA
//  let  arr = ['2','1','33',"48"];
//  ////sunction sortirovki 
// //  function compareNumeric(a,b) {
// // console.log(`compare ${a} and ${b}`);
// // // if (a > b) return 1;
// // // if (a == b) return 0;
// // // if (a < b) return -1;

// // return a - b 
// //  }
// //  console.log(arr.sort(comareNumeric)); 




//  console.log(arr.sort((a, b ) => a -b ));




// //////------MAP-----
// ///vyzyvaet funcsiu dlya kajdogo elementa massiva 
// //i vozvrashaet massiv rezultatov vypolneniya etoi funcsii
// let  arr = ['Gaziy','Rahma','Aiym',"Ahmad"];
// ///ITEM-kajdyi element v massive 
// //INDEX ego kluch
// //ARRAY sam massive polnostu
// let result = arr.map(function(item,index,array){
//     return item[0];
// });

// console.log(arr);
// console.log(result);



// //---SPLIT
// ///pereobrazyvaet stroku v massive 
// let str = 'Gaziy, Aiym, Ahmad ';
// let arr = str.split(',')
// console.log(arr)

// let sam = str.split(',',2);
// console.log(sam);

// ///----JOIN
// //masiivdi stroka kylat 
// let str = ['Gaziy', 'aiym', 'Ahmad ',];
// let arr = str.join(',')
// console.log(arr)



///---isArray v masssive kak type of 

// let arr = ['Gaziy', 'aiym', 'Ahmad ',];
// console.log(arr.length);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


// let arr = ['Gaziy', 'aiym', 'Ahmad ',];

// for (let arrItem of arr) {
//     console.log(arrItem)
// }


// ////----FOR EACH
// let arr = ['Gaziy', 'aiym', 'Ahmad ',];

// arr.forEach(function (item, index, array){
//     console.log(`${item} nahoditsya na ${index} pozisii v ${array} `)
// });


//-----REDUSE ----
//perebrat massive vernut dannye  kajdogo elementa/
//previus value rezultat prededushego vyzova etogo funcsii



// let arr = [1,2,3,4,];
// let reduse = arr.reduce(function(previousValue,item,index,array){
//     return item + previousValue;
// },0);
// console.log(reduse)



// const er = prompt('who are you ');
// console.log(er)

//closet ishet blijaishii parent 

//matches  nichego ne ishet a proveryaet udevlotvorit 
//li element css selectory



// ////BEFORE   APEND PREPEND AFTER 
// const text = document.querySelector('.lesson');
// const newE = document.createElement('div');
// newE.innerHTML  = `live and work in free time `
// ///pered obektom
// text.before(newE);
// ///posle obekta
// text.after(newE);
// //vnutr i v nachalo obekta
// text.prepend(newE);
// ///vnutr iv kones obekta
// text.append(newE);




//  const element = document.querySelector('.lesson');

//  /// add class
//  element.classList.add('active');
//  //delete class
//  element.classList.remove('active');
 
//  /// add  class if her no remove class if her have 
//  element.classList.toggle('active');
//  //proverka nalichii class bozvrashaet true fals 
//  element.classList.contains('active');





