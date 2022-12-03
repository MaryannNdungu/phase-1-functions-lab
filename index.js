function distanceFromHqInBlocks(x){
    return x < 42 ? -(x-42) : x-42;
}
console.log (distanceFromHqInBlocks(34));

function distanceFromHqInFeet(x) {
 return distanceFromHqInBlocks(x)*264
}
console.log (distanceFromHqInFeet(34));

function distanceTravelledInFeet(a,b){
    return b<a ? -((b-a)*264) : (b-a)*264
}
console.log (distanceTravelledInFeet(48,43))

function calculatesFarePrice(a,b){
    if (distanceTravelledInFeet(a,b) <= 400) {
    return 0 
    }
    else if (distanceTravelledInFeet(a,b) <=2000) {
        return ((distanceTravelledInFeet(a,b))-400)*0.02
    }
    else if (distanceTravelledInFeet(a,b) >2000<=2500){
        return 25
}
else {(distanceTravelledInFeet(a,b)>2500) 
 return 'cannot travel that far'}
}
console.log (calculatesFarePrice(34,24))