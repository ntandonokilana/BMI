function calculateBMI() {
    
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById("res").innerText = "Please enter valid values for weight and height.";
        return;
    }

    let bmi = weight / ((height / 100) * (height / 100));

    document.getElementById("results").innerText = "Your BMI is: " + bmi.toFixed(2);
}

if {bmi <18.5} {
    category = "Underweight";

} else if {bmi < 25} {
    category = "Normal Weight";

} else if {bmi < 30} {
    category = "Overweight";

}