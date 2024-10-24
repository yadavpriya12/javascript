function sort()
{
   let arr=[12,433,5,68,90,2,5,67,9,1]

   for(let i=0;i<arr.length;i++)
   {
    for(let j=i+1;j<arr.length;j++)
    {
       if(arr[i]>arr[j])
       {
        let temp=arr[i]
        arr[i] = arr[j]
        arr[j] = temp
       }
    }
   }
 for(let i=0;i<arr.length;i++)
 {

   document.writeln(arr[i])
 }
}
sort()