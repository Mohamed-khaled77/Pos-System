let emailInput = document.querySelector("#email");
let passwordInput = document.querySelector("#password");


const handleSubmit = (event) => {
  event.preventDefault();
  //   Validation
  let email = emailInput.value;

  let password = passwordInput.value;

  let obj = {  password, email };

  let hasError = 0;

  if (!emailRegex.test(email)) {
    alert("Invalid Email");
    hasError++;
  }

  if (!passwordRegex.test(password)) {
    alert(`
        Invalid Password
        Password Must Containts Special Charts Like [@ & _ -]
        Password Must Be min 6 chars
        Password Must Be max 20 chars
        Password Must Containts Capital Letter & Smaill Letters
        Password Must Containts Number
    `);
    hasError++;
  }

  

 

  if (hasError > 0) {
    alert("Fix Problems");
  } else {
    alert("Form is Good");
  }

  //   Post Data To Back end

  //   Submit Data to Backend (localStorage)
  //   Key in localStorage is [users]
  let usersString = localStorage.getItem("users");
  let usersarry = [];
  if (usersString) {
    usersarry = JSON.parse(usersString);
    let emailIndex = usersarry.findIndex((el, index) => {
      return el.email.toLowerCase() == email.toLowerCase();
    });

    if (emailIndex == -1) {
      usersarry.push(obj);
    } else {
      alert("This email is alreeady Registered");
    }
  }
  else{
    usersarry.push(obj);
  }
  localStorage.setItem("users", JSON.stringify(usersarry));
};
