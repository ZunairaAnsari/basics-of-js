// console.log("hello");

// var num = prompt("enter a number here");

// for (let i = 1; i <= 10; i++) {
//     var result = num * i;
//     console.log( num + "x" + i + "=" + result);
    
// }

// var a = ['', 'zunaira', true,  false, 1, 0, undefined];

// for( i = 1;  i < a.length; i++){

//    if(a[i]){
//     console.log(a[i])
//    }

// }

// for( i = 1; i <=3 ; i++){
//     for (let j = 1; j <=3 ; j++) {
//         let res = ((i * j) + 2);
//         document.write(res + "<br />");
//     }
// }

// var a = 10;
// var b = 15;

// var res = (a - (-b));
// console.log(res);

let arr = [1,3,2,4,6,5];

var a = arr[0];

for(i = 0; i < arr.length;i++){

    if(arr[i] > arr[i+1] ){
      a = arr[i];
      arr[i] = arr[i+1];
      arr[i+1] = a
    }
    
  }
  console.log(arr)
