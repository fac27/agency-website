
    // Declare all global variables.

    let nameInput = document.getElementById('name');
    let emailInput = document.getElementById('email');
    let commentInput = document.getElementById('comment');
    
    // Function which will run when a user clicks 'Submit', submitting a form containing a name, email and comment.
    function submitThis(event){

        // Prevent the form from submitting automatically, requiring a user to actually click the send button first.
        event.preventDefault();

        // Declare an object to hold all submitted info.
        let submittedInfo = {};

        /* Regex which defines the pattern of the email address. 
        It matches one or more characters which can be letters or digits, 
        an '@' symbol, then one or more characters which can be 
        letters or digits followed by a dot, and finally one or more
        characters that can be letters or digits. */
        const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;

        /* If statement which checks to see if no name,  email, 
        or comment has been entered. If any fields are missing
        an alert will display preventing submission. If a user 
        attempts to submit with an email address which doesn't 
        match emailRegex, a separate alert will display, also 
        preventing submission. If both of these conditions are 
        false, the third condition will run, adding the user's
        name, email and comment to the submittedInfo object, 
        displaying an alert and clearing the name, email and
        comment fields for the next inputs. */
        if (!nameInput.value || !emailInput.value || !commentInput.value) {
            alert("Please fill out all fields.");
        } else if(!emailRegex.test(emailInput.value)) {
            alert("Please enter a valid email address.");
        } else {
            submittedInfo.name = nameInput.value;
            submittedInfo.email = emailInput.value;
            submittedInfo.comment = commentInput.value;
            console.log(submittedInfo);
            alert('Thank you for your comment. We will endeavour to respond to you within 365 days.');
            nameInput.value = "";
            emailInput.value = "";
            commentInput.value = "";
        }
    }

    document.querySelector('.bar').addEventListener('click', function() {
        document.querySelector('#nav-list').classList.toggle('show');
      });

document.getElementById("contact-form").addEventListener("submit", function(){
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const commentInput = document.getElementById('comment');
    alert(`Thank you for your comment ${nameInput.value}. We will endeavour to respond to you within 365 working days.`);
    nameInput.value = "";
    emailInput.value = "";
    commentInput.value = "";
})
