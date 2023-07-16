function calcBMI(height, weight) {
    let bmi = weight / Math.pow(height, 2)
    return bmi
}

console.log(Math.round(calcBMI(1.85, 77)))