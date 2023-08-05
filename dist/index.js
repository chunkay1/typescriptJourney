"use strict";
function arrAgeAdder(ageArr) {
    if (ageArr.length === 0) {
        return false;
    }
    for (let i = 0; i < ageArr.length; ++i) {
        let age = ageArr[i];
        if (age < 30) {
            console.log(`Adding ten years to ${age}`);
            age += 10;
            console.log(`New age is ${age}`);
        }
        else {
            console.log("You're old enough already....");
        }
    }
}
console.log(arrAgeAdder([]));
console.log(arrAgeAdder([20, 10, 5, 40]));
console.log(arrAgeAdder([50, 60, 70]));
//# sourceMappingURL=index.js.map