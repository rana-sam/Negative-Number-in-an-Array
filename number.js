let array=[12,-2,-90,76,-5,-4]
let count=0
function negat(array)
{
     for (let x = 0; x < array.length; x++) 
    {
         if(array[x]<0)
         {
            count++;
         }
         
     }

    return count;
}

let result=negat(array);
console.log(result+" elements are negative")