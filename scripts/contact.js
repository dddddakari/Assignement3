// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
document.querySelector('#submit-button').addEventListener('click', e => {
  const userMsg = document.querySelector("#user-message" );
  if(userMsg.value==="") {
    e.preventDefault();
    //alert("Please Enter some text");
    return;
  }
    const userMail = document.querySelector("#user-email" );
  if(userMail.value==="") {
    e.preventDefault();
    //alert("Please Enter your Email");
    return;
  }
    const userName = document.querySelector("#user-name" );
  if(userName.value==="") {
    e.preventDefault();
    // alert("please enter your name")
    return;
  }
  document.querySelector('#contact-page').innerHTML = '<p style="font-size: 24px">Thank you for your message!</p>';
});

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

