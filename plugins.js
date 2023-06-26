function calculatorAge() {
    const today = new Date();
    const birthdateinput = document.getElementById("birthdate").value;
    const birthdateparts = birthdateinput.split("-");
    console.log(birthdateinput);
    console.log(birthdateparts);

    const birthDay = birthdateparts[0];

    //I can say that the JavaScript, the date object of the JavaScript has a month started from 0 to 11 index
    const birthMonth = birthdateparts[1] - 1;

    const birthYear = birthdateparts[2];

    const birthdate = new Date(birthYear, birthMonth, birthDay);
    console.log(birthDay);
    console.log(birthMonth);
    console.log(birthYear);

    const isValidDate = (date) => {
        return (
            Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date)
        );

    };
    if (!isValidDate(birthdate)) {
        alert("Invalid Date Format: Please Enter a valid date in DD-MM-YYYY format.");
        return;
    }


    const ageInMilliseconds = today - birthdate;
    const ageInseconds = Math.floor(ageInMilliseconds / 1000);
    const ageInMinutes = Math.floor(ageInseconds / 60);
    const ageInHours = Math.floor(ageInMinutes / 60);
    const ageInDays = Math.floor(ageInHours / 24);
    const ageInWeeks = Math.floor(ageInDays / 7);
    const ageInMonths = Math.floor(ageInDays / 30.436875);
    const ageInYears = Math.floor(ageInDays / 365.25);

    const resultContainer = document.getElementById("resultContainer");
    const result = document.getElementById("result");

    result.innerHTML = `
      <div class="result-item">
        <h3>Age:</h3>
        <p>${ageInYears} Years ${ageInMonths % 12} Months ${ageInDays % 30} Days</p>
      </div>  
      <div class="result-item">
        <h3>Months Passed:</h3>
        <p>${ageInMonths} </p>
      </div> 
      <div class="result-item">
        <h3>Weeks Passed:</h3>
        <p>${ageInWeeks} </p>
      </div> 
      <div class="result-item">
      <h3>Days Passed:</h3>
      <p>${ageInDays} </p>
     </div> 
     <div class="result-item">
      <h3>Hours Passed:</h3>
      <p>${ageInHours} </p>
     </div>  
     <div class="result-item">
      <h3>Minutes Passed:</h3>
      <p>${ageInMinutes} </p>
     </div> 
     <div class="result-item">
      <h3>Seconds Passed:</h3>
      <p>${ageInseconds} </p>
     </div> 
   `;


    resultContainer.style.display = "block";

}



const ageCalculatorform = document.getElementById("ageCalculator");
ageCalculatorform.addEventListener("click", (event) => {
    event.preventDefault();
    calculatorAge();
});



