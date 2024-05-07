//1-masala-------------------------------------------------------------------------------------

// let str = prompt("So'zni kiriting");
// if(str.includes('!')){
//     console.log(str.slice(0, -1));
// }else if(str != str.length ){
//     console.log(str);
// }

//2-MASALA-----------------------------------------------------------------------------------

// let n1 =[2,2,3];
// let n2 =[5,4,1];
// function mathLocal(){
//     let work1 = n1[0]*n1[1]*n1[2];
//     let work2 = n2[0]*n2[1]*n2[2];
//     if(work1<work2){
//         console.log(work2 - work1);
//     }
// }
// mathLocal()

//3-MASALA---------------------------------------------------------------------------------

// let n1 = prompt('sonni kiriting');
// if(n1>0){
//     console.log(-n1);
// }else if(n1<0){
//     -Math.abs(n1)
// }
// console.log(n1);

//4-MASALA----------------------------------------------------------------------------------

//------------------------------------------------------------
// let arr1 = ['codewars', 'flick', 'code', 'wars'];
// function arrays(){
//     for(let i=0; i < arr1.length; i++){
//         console.log(arr1[i].includes('flick'));
//     }
// }
// arrays(arr1)

//--------------------------------------------------------------

// let arr2 = ['flick', 'chocolate', 'adventure', 'sunshine'];
// function arrays(){
//     for(let i=0; i < arr2.length; i++){
//         console.log(arr2[i].includes('flick'));
//     }
// }
// arrays(arr2)

//--------------------------------------------------------------

// let arr3 = ["bicycle", "jarmony", "flick", "sheep", "flick"];
// function arrays(){
//     for(let i=0; i < arr3.length; i++){
//         console.log(arr3[i].includes('flick'));
//     }
// }
// arrays(arr3)


//5-masala-----------------------------------------------------------------------------------

// function excludingPrice(price){
//     if(price === null) return -1
//     return  +(price / 1.15).toFixed(2);
// }
// let result = price(200.00) ;
// console.log(result);
// excludingPrice()

//6-MASALA------------------------------------------------------------------------------------
// let hours = 3;
// let minuts = 45;
// let sekund = 30;
// function HourseMinutSecund(h,m,s){
//     let times = (h * 3600 + m *60 +s)* 1000;
//     return times;
// }
// console.log("yarim tunda: " +HourseMinutSecund(hours , minuts,sekund) + " :secund vaqt o'tdi");


//7-MASALA

// let arr3 = 4;
// function arrays(arr3){
//     for(let i=0; i < arr3; i++){
//     }   
    
// }
// console.log(arr3%1==0);
// arrays()

//8-MASALA

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
//     for(let i =0; i<arr.length; i++){
//         if(arr[i] >0) {console.log(arr[i]);
//             console.log("------- 0 dan kat son ---------");
//         }
//         if (arr[i] <0) {console.log(arr[i]);
//             console.log("======= 0 da kichik son ======");
//         }
//     }

//9-MASALA


// let pupils = [
//   {
//     name: "bob",
//     examEvaluation: [3,4,5,5,4,4]
//   },
//   {
//     name: "Tom",
//     examEvaluation: [3,3,4,4,5,4]
    
//   },
//   {
//     name: "Twin",
//     examEvaluation: [3,3,4,4,3,4]
//   },
//   {
//     name: "Jack",
//     examEvaluation: [5,5,4,5,4,5]
//   },
// ];
// let futureStudents = [];
// let studentName = [];
// for(let i =0; i <pupils.length;i++){
//     futureStudents.push(pupils[i].examEvaluation.reduce((a,b ) => a+b ));
//     studentName.push(pupils[i].name);
//     console.log(studentName.pop() +':'+ futureStudents.pop());
// }
