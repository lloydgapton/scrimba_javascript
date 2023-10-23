let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2 
function add(){
    let added = num1 + num2
    document.getElementById("sum-el").textContent = "Sum: " + added
}
function subtract(){
    let minus = num1 - num2
    document.getElementById("sum-el").textContent = "Difference: " + minus
}
function divide(){
    let divided = num1 / num2
    document.getElementById("sum-el").textContent = "Division: " + divided
}
function multiply(){
    let times = num1 * num2
    document.getElementById("sum-el").textContent = "Multiplication: " + times
}
