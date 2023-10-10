// // TODO: write your code here
// import sum from './basic';

// console.log('worked');

// console.log(sum([1, 2]));


export default function setHealth(hp) {
    if (hp.health > 50) {
        return "healthy";
    } else if (hp.health <= 50 && hp.health > 15) {
        return "wounded";
    } else {
        return "critical";
    }
}