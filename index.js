// Code your solution in this file!
function distanceFromHqInBlocks(location){
  if(location > 42){
    return location - 42;
  }
  else if(location < 42)
  return 42 - location;
}


function distanceFromHqInFeet(location){
  return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet(start, destination)
{
  if(destination > start){
    const dist = destination - start;
    return dist * 264;
     }else if (start > destination){
        const dist = start - destination;
        return dist * 264;
      }else
      {
        return 0;
      }

    }

    function calculatesFarePrice(start, destination)
    {
      const distance = distanceTravelledInFeet(start, destination);
      {
        if(destination === 0){
          return "return fare to customer.";
        }else if (distance<= 400){
          return 0;
        }else if(distance<= 2000){
          const remainingDistance = distance - 400;
          return remainingDistance * 0.02;
        }else if (distance <= 2500){
          return 25;
        }
        else if (distance > 2500)
        return 'cannot travel that far';
      }
    }
  
  

