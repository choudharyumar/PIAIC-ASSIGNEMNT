let arr=[11, 15, 17, 18, 19];
let findex=arr[0]
let lindex=arr[arr.length-1]
let missing_arr=[]
for(let i=findex;i<=lindex;i++)
{
  if(arr.indexOf(i)==-1)
{
    // console.warn(i);
    missing_arr.push(i)
}

}

console.warn(missing_arr);