// const longer = function(log){
//    console.log (log);
// }
// longer ('Message....')

//Arrow => Rút ngắn lệnh ((log) => == function(log))
// const longer = (log) => {
//     console.log (log);
//  }
//  longer ('Hello....')
 
 // Vd ngắn gọn hơn nữa
 // const sum = (a, b) => {
 //    return a + b;
 // }
 // console.log (sum(5, 6));
 
//  const sum = (a, b) => a + b;
//  console.log (sum(5, 9));
//  //End viết ngắn gọn hơn nữa ( sau => a = b == return a + b;)
 
//  const Course = function(name, price){
//     this.name = name;
//     this.price = price;
//  }
//  const jsCourse = new Course('Javascript', 1000);
//  console.log(jsCourse)

import logger from './logger.js';
console.log(logger)