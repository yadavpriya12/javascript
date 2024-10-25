function Smallest()
{
 
  let  arr=[12,66,434,5,3,9,2,5,34,1]
  let min=arr[0];
  for(let i=0;i<=10;i++)
  {
     if(arr[i]<min)
        {
            min=arr[i]
        } 
  }
  document.writeln(`smallest value in arr is = ${min}`)
}

Smallest()