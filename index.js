// Code your solution in this file!
function distanceFromHqInBlocks(number){
    if (number > 42){
        return number - 42;
    } else {
        return 42 - number;
    }    
}
console.log(50);

function distanceFromHqInFeet(number){
    return distanceFromHqInBlocks(number) * 264;
}

function distanceTravelledInFeet(startingPoint,  destination){
    if (startingPoint < destination){
        return (destination - startingPoint) * 264;
    } else {
        return (startingPoint - destination) * 264;
    }
}

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination);
    if (distance < 400){
        return 0;
    } else if(distance > 400 && distance < 2000){
        return (distance - 400) * .02;
    } else if(distance > 2000 && distance <2500){
        return 25;
    }
    else {
        return "cannot travel that far"
    }
}
