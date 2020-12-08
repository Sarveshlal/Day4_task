// Print odd numbers in an array

var data = [10,11,12,13,14,15,16,17,1,5,8];
var oddnum = function(arr)
{
    for(var i in arr)
    {
        if(arr[i]%2 !== 0)
            console.log(arr[i]);
    }
};
oddnum(data);

(function(arr)
{
    for(var i in arr)
    {
        if(arr[i]%2 !== 0)
            console.log(arr[i]);
    }
})(data);

// Convert all the strings to title caps in a string array

var data = ["string","value","name"];
var str = "";
var titlecase = function(arr)
{
    for(var i in arr)
    {
        str += arr[i][0].toUpperCase();
        for(var j = 1 ; j < arr[i].length ; j++)
            str += arr[i][j];
        console.log(str);
        str = "";
    }
};
titlecase(data)

console.log();

(function(arr)
{
    for(var i in arr)
    {
        str += arr[i][0].toUpperCase();
        for(var j = 1 ; j < arr[i].length ; j++)
            str += arr[i][j];
        console.log(str);
        str = "";
    }
})(data);

//Sum of all numbers in an array

var data = [1,2,3,4,5,6,4,345,23,66,87,322,66,44];
var sumofnumbers = function(arr)
{
    var sum = 0;
    for(var i in arr)
    {
        sum += arr[i];
    }   
    console.log(sum);
};
sumofnumbers(data);

console.log();

(function(arr)
{
    var sum = 0;
    for(var i in arr)
    {
        sum += arr[i];
    }   
    console.log(sum);
})(data);

//Return all the prime numbers in an array
var data = [1,2,3,4,5,6,7,8,9,11];
var primenumber = function(arr){
for(var i in arr)
{
    let prime = true;
    if(arr[i] > 1)
    {
        for(var j=2;j<arr[i];j++)
        {
            if(arr[i] % j === 0)
            {
                prime = false;
                break;
            }
        }
        if(prime === true)
            console.log(arr[i]);
    }
}
};
primenumber(data);

console.log();

(function(arr){
for(var i in arr)
{
    let prime = true;
    if(arr[i] > 1)
    {
        for(var j=2;j<arr[i];j++)
        {
            if(arr[i] % j === 0)
            {
                prime = false;
                break;
            }
        }
        if(prime === true)
            console.log(arr[i]);
    }
}
})(data);

// Return all the palindromes in an array
var data = ["madam","string","value","dood"];
var palindrome = function(arr)
{
    for(var i in arr)
    {
        var str = arr[i].split("").reverse().join("");
        if(str == arr[i])
            console.log(str);
    }
};
palindrome(data);
console.log();
(function(arr)
{
    for(var i in arr)
    {
        var str = arr[i].split("").reverse().join("");
        if(str == arr[i])
            console.log(str);
    }
})(data);

//Return median of two sorted arrays of same size
var data1 = [1,31,5,13,7];
var data2 = [11,12,15,17,18];
var median = function(arr1,arr2)
{
    var data = [];
    for(var i in arr1)
        data.push(arr1[i]);
    for(var j in arr2)
        data.push(arr2[j]);
    data.sort((a,b) => a-b)
    return (data[data.length/2]+data[(data.length/2)-1])/2;
};
var result = median(data1,data2);
console.log(result);
(function(arr1,arr2)
{
    var data = [];
    for(var i in arr1)
        data.push(arr1[i]);
    for(var j in arr2)
        data.push(arr2[j]);
    data.sort((a,b) => a-b)
    console.log((data[data.length/2]+data[(data.length/2)-1])/2);
})(data1,data2);

//Remove duplicates from an array
var data = ["call","me",5,5,"call"];
var duplicates = function(arr){
    for(var i in arr)
    {
        var count = 0;
        for(var j in arr ){
            if(arr[i] == arr[j])
            {
                count++;
                if(count>1)
                    arr.pop(arr[j]);
            }
        }  
    }
    console.log(arr);
};
duplicates(data)
(function(arr){
    for(var i in arr)
    {
        var count = 0;
        for(var j in arr ){
            if(arr[i] == arr[j])
            {
                count++;
                if(count>1)
                    arr.pop(arr[j]);
            }
        }  
    }
    console.log(arr);
})(data);

//1.Rotate an array by k times and return the rotated array
var data = [1,2,3,4,5,9,8];
var rotatearray = function(arr)
{
    var k = 3,temp=[];
    for(var i=0;i<k;i++)
        temp.push(arr[i]);
    arr.reverse();
    for(var j=0;j<k;j++)
        arr.pop();
    arr.reverse();
    for(var m=0;m<k;m++)
        arr.push(temp[m]);
    return arr;
}
var result = rotatearray(data);
console.log(result);
(function(arr)
{
    var k = 3,temp=[];
    for(var i=0;i<k;i++)
        temp.push(arr[i]);
    arr.reverse();
    for(var j=0;j<k;j++)
        arr.pop();
    arr.reverse();
    for(var m=0;m<k;m++)
        arr.push(temp[m]);
    console.log(arr)
})(data);
//2.Rotate an array by k times and return the rotated array
var data=[1,2,3,4,5,8,11,15];
var rotatearray=function(arr)
{
    var k = 6;
    for(let i=0;i<k;i++)
        arr.push(arr.shift());
    return arr;
};
var result = rotatearray(data);
console.log(result);
(function(arr)
{
    var k = 6;
    for(let i=0;i<k;i++)
        arr.push(arr.shift());
    console.log(arr);
})(data);