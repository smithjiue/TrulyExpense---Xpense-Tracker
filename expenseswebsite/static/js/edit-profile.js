// Get the form element
const form = document.querySelector('#edit-form');

// Get the input elements


// Add an event listener for the form submission
form.addEventListener('submit', (event) => {
  // Prevent the form from submitting normally
  event.preventDefault();
  const userName = document.querySelector('#username');
  const firstNameInput = document.getElementById("first-name");
  const lastNameInput = document.getElementById("last-name");
  
  // Get the user's input values
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  const username = userName.value;let url = "/me/updateinfo"

  fetch(url,{
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
  },
  body:JSON.stringify({
      firstname: firstName,
      lastname: lastName
  }),
})
.then((res)=>{
  res.json();
  }).then( result =>{
      const usernameSuccessOutput = document.querySelector(".usernameSuccessOutput")
      console.log(result)
      
          usernameSuccessOutput.style.display = "block";
          usernameSuccessOutput.textContent = `Info Updated`;
          setTimeout(8000,()=>{
          usernameSuccessOutput.style.display = "none"
          })
          firstNameInput.value = firstName
          lastNameInput.value = lastName
      
     
          usernameSuccessOutput.style.display = "block";
          usernameSuccessOutput.textContent = result.message;
          setTimeout(8000,()=>{
          usernameSuccessOutput.style.display = "none"
        } )
})
      
  });

