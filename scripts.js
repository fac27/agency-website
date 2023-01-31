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