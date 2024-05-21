//array.slice
// const arr=[1,2,3,4,5];
// const newArr=arr.slice(2);
// console.log(newArr);
// console.log(arr);

//solution
const chuck=function(arr,size){
    const result=[];
    let subarr=[];
    for (let i=0;i<arr.length;i+=size){
        result.push(arr.slice(i,i+size));

    //     subarr.push(arr[i]);
    //     if(subarr.length==size){
    //         result.push(subarr)
    //         subarr=[];
    //     }
    // }
    // if(subarr.length){
    //     result.push(subarr);
    }
    return result;

}
// const arr=[2,7,8,9];
// const size=2;

// const arr=[1,9,6,3,2];
// const size=3;

// const arr=[8,5,3,2,6];
// const size=6;

const arr=[];
const size=1;
console.log(chuck(arr,size));