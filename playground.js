function distanceFromHqInBlocks (blockNumber) {
    if (blockNumber > 42) {
        return blockNumber - 42;
    } else {
        return 42 - blockNumber;
    }
}

function distanceFromHqInFeet (blockNumber) {
    return distanceFromHqInBlocks(blockNumber) * 264;
}

function distanceTravelledInFeet (start, destination) {
    if (start < destination) {
      return (destination - start) * 264;
    } else {
      return (start - destination) * 264;
    }
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination)
    console.log(distanceTravelledInFeet)
    console.log(distance)

    // if (distanceTravelledInFeet <= 400){
    //     return 0;
    // }else if (distanceTravelledInFeet(start, destination))
    // console.log(distance)
}

calculatesFarePrice(20, 21)