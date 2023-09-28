function distanceFromHqInBlocks(pickupBlock) {
  const headquartersBlock = 42;
  return Math.abs(pickupBlock - headquartersBlock);
}

function distanceFromHqInFeet(pickupBlock){
  const blocks = distanceFromHqInBlocks(pickupBlock);
  return blocks * 264;
}

function distanceTravelledInFeet(startBlock, destinationBlock){
  return Math.abs(destinationBlock - startBlock)*264;
}

function calculatesFarePrice(startBlock, destinationBlock){
  const distance = distanceTravelledInFeet(startBlock, destinationBlock);
   
      if (distance <= 400){
      return 0;
      } else if (distance <= 2000){
        return (distance - 400)*0.02;
      } else if (distance <= 2500){
        return 25;
      }else {
        return 'cannot travel that far';
      }

}