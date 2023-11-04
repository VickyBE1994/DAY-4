// PRINT THE ODD NUMBERS NAME 
//ANNONYMOUS FUNCTION

var a=function (arr){
    var result=[];
    for(var i=0;i<arr.length;i=i+1)
    if(arr[i]%2!==0)
    {
        result.push(arr[i])
    }
    return result
}
 console.log (a([1,2,3,4,5,6,7,8,9,10]))
 
 
//IIFE FUNCTION
var result=[];
 (function (arr){
   
     for(var i=0;i<arr.length;i=i+1){
     if(arr[i]%2!==0){
         result.push(arr[i])
     }
         
     }
     console.log(result)
 })
  ([1,2,3,4,5,6,7,8,9,10])
  
//ARROW FUNCTION
  var odd= (arr)=>{
    var result=[];
    for(var i=0;i<arr.length;i=i+1)
    if(arr[i]%2!==0)
    {
        result.push(arr[i])
    }
    return result
}
 console.log (odd([1,2,3,4,5,6,7,8,9,10]))
 //sum of numbers using  anonymous function
 //USING ANNONYMOUS FUNCTION
 let add = function (n){
    let sum = 0;
    for(let i = 0; i<n.length; i++){
        sum+=n[i];
    }
    console.log(sum);
};


var n= [1,2,3,4,5];
add(n);

//IIFE FUNCTION

var n= [1,2,3,4,5];
(function (){
    let sum = 0;
    for(let i = 0; i<n.length; i++){
        sum=sum+n[i];
    } 
    console.log(sum);
})
(n);




//sum of numbers using arrow function


var n=(arr)=>{
    var sum = 0;
    for(let i = 0; i<arr.length; i++){
        sum=sum+arr[i];
    } 
     return sum;
}
console.log(n([1,2,3,4,5]))

//Convert all the strings to title caps in a string array
// to title case using  anonymous function
   let title = function (str) {

	for (var i = 0; i < str.length; i++) {
        str[i] = str[i].toLowerCase();
		str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
	}
	console.log(str.join(' '));
}

var str = ['i','aM','a','desIGn','EngiNeer.'];

title(str);
//output
//I Am A Design Engineer.


//to title case using IIFE

var str1 = ['i','aM','a','desIGn','EngiNeer.'];

(function (){
	for (var i = 0; i < str1.length; i++) {
	     str1[i] = str1[i].toLowerCase();
		str1[i] = str1[i].charAt(0).toUpperCase() + str1[i].slice(1);
	}
	console.log(str1.join(' '));
})(str1);


 //Convert all the strings to title caps in a string array
 //Using arrow function

 let str2 = ["siva", "is", "a", "good", "person"];

 let strCaps = str2.map((item) => {

    return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();

});
console.log( strCaps.join(' '));

//4.Return all the prime numbers in an array
//1. Using Anonymous fucntion.

var prime=function(a){

    var  res=[];
    for(i=0;i<a.length;i++)
    {
        var count=0;
        for(j=1;j<=a[i];j++)
        {
            if(a[i]%j===0)
            {
                count++;
            }
        }
        if(count==2)
        {
            res.push(a[i]);
        }
    }
    console.log(res);
};
prime([1,2,3,4,5,6,7,8,9,11]);



//Using IIFE

(function(a1){
    var  res1=[];
    for(i=0;i<a1.length;i++){
        count1=0;
        for(j=1;j<=a1[i];j++){

            if(a1[i]%j===0){
                count1++;
            }

        }

        if(count1==2){
                res1.push(a1[i]);

        }
    }
    console.log(res1);

})
([1,2,3,4,5,6,7,8,9,11]);




//using arrow function

let prime1 = (arr) => {
    return arr.filter((n) => {
      for (let i = 2; i < n; i++) {
        if (n % i === 0) {
          return false;
        }
      }
      return n > 1;
    });
  };
  console.log(prime1([1,2,3,4,5,6,7,8,9,10]));
  



//5.Return all the palindromes in an array
//anonymous function

let palindrome = function(arr){

    var N=arr.length;
    var out =[];
    for(let i=0;i<arr.length;i++){
        let final = arr[i];
        let str = final.split('').reverse().join('');
        if(str==arr[i])
       out.push(arr[i]);
        }
     console.log(out);

};
var arr =["abc", "mom", "dad", "madam", "teacher"];

palindrome(arr);


//IIFE function


(function(){
    var arr1 =["abc", "mom", "dad", "madam", "teacher"];
    var N1=arr1.length;
    var out =[];
    for(let i=0;i<arr1.length;i++){
        let final = arr1[i];
        let str = final.split('').reverse().join('');
        if(str==arr1[i])
       out.push(arr1[i]);
        }
     console.log(out);

})(); 



//using arrow function
var arr =["abc", "mom", "dad", "madam", "teacher"];
arr = arr.filter((s) =>{
let len = s.length;
for (var i = 0; i<len / 2; i++) {
if (s[i] == s[len - i - 1]){
return true;
}
else{
return false;
}
}
});
console.log(arr);




//-----------------------------------------------------------------------------------------------------


//6.Return median of two sorted arrays of the same size.
//anonymous function
let median = function (arr1,arr2){
    let arr = [...arr1, ...arr2];

    arr.sort((a,b) => a-b);
    let len = arr.length;

    if(len%2!==0){

 let ans = arr[Math.round(len/2)-1];
 let final = ans;

 }else{

 ans = arr[Math.round(len/2)-1]+arr[Math.round(len/2)];
 final = ans;

}
console.log(final);
};
var arr1 = [3,2,1,4,5];
var arr2 = [8,6,7,9,10];
median(arr1,arr2);



//Return median of two sorted array using IIFE

var arr1 = [3,2,1,4,5];
var arr2 = [8,6,7,9,10];
(function (){

let arr = [...arr1, ...arr2];

    arr.sort((a,b) => a-b);
    let len = arr.length;

    if(len%2!==0){

 let ans = arr[Math.round(len/2)-1];
 let final = ans;

 }else{

 ans = arr[Math.round(len/2)-1]+arr[Math.round(len/2)];
 final = ans;
 }
 console.log(final);
})(arr1,arr2);



//----------------------------------------------------------------------------------------------------


//7.Remove duplicates from an array
//Using anonymous function

var dup=function(arr){
    var frequency = {};

    for(let i = 0; i < arr.length; i++) {
       if(frequency[arr[i]]) {
         frequency[arr[i]] = frequency[arr[i]] + 1;
       } else {
         frequency[arr[i]] = 1;
       }
    }

   let final = [];
   for(let x in frequency) {
     if(frequency[x] === 1) {
       final.push(x);
     }
   }

   console.log(final); 

   };
   dup([1,12,11,3,4,5,12]);
   
   

   //Using IIFE

   (function (arr){
     var frequency = {};

    for(let i = 0; i < arr.length; i++) {
       if(frequency[arr[i]]) {
         frequency[arr[i]] = frequency[arr[i]] + 1;
       } else {
         frequency[arr[i]] = 1;
       }
    }

   let final = [];
   for(let x in frequency) {
     if(frequency[x] === 1) {
       final.push(x);
     }
   }

   console.log(final);   
   })([1,2,3,4,4,5,6,7,5]);

   
   


//---------------------------------------------------------------------------------------------------------


   //8.Rotate an array by k times
//Using anonymous function
let rotation = function (arr,n,d)
{
    let p = 1;
        while (p <= k) {
            let last = arr[0];
            for (let i = 0; i < n - 1; i++) {
                arr[i] = arr[i + 1];
            }
            arr[n - 1] = last;
            p++;

        }
         let out = [];
        for (let i = 0; i < n; i++) {
           out.push(arr[i]);

        }
        console.log(out);
};
var arr =[4,5,6,1,2,3];
var n = arr.length;
var k = 3;

rotation(arr, n,k);



var arr =[4,5,6,1,2,3];
var n = arr.length;
var k = 3;

(function(arr,n,k){
   let p = 1;
        while (p <= k) {
            let last = arr[0];
            for (let i = 0; i < n - 1; i++) {
                arr[i] = arr[i + 1];
            }
            arr[n - 1] = last;
            p++;

        }
         let out = [];
        for (let i = 0; i < n; i++) {
            out.push(arr[i]);

        }
        console.log(out);  
})(arr,n,k);





