// let age: number = 20;
// console.log('input age is', age);

// function ageAdder(inputAge: number) {
//     if (inputAge < 50) {
//         console.log(`Added ten years to ${inputAge}`)
//         inputAge += 10;
//         console.log(`New age is:`, inputAge)
//     } else {
//         console.log('No change')
//     }
// }

// console.log(ageAdder(10))
// console.log(ageAdder(90))

function arrAgeAdder(ageArr: Array<number>) {
    if (ageArr.length === 0) {
        return false
    }
    else {
        for (let i = 0; i < ageArr.length; ++i) {
            let age = ageArr[i];
            if (age < 30) {
                console.log(`Adding ten years to ${age}`)
                age += 10;
                console.log(`New age is ${age}`);
                return age
            } else {
                console.log("You're old enough already....")
                return age
            }
        }
    }


}

console.log(arrAgeAdder([]))
console.log(arrAgeAdder([20, 10, 5, 40]))
console.log(arrAgeAdder([50, 60, 70]))