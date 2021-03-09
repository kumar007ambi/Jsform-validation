console.log(`Form validation`);

const user = document.getElementById('user');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

//Set All Validation Field false initially
let validUser = false;
let validEmail = false;
let validPhone = false;

$('#failure').hide();
$('#success').hide();

user.addEventListener('blur', () => {
    //Name validation
    // console.log('Name is blureed')
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){5,15}$/;
    let str = user.value;
    //  console.log(regex, str);
    if (regex.test(str)) {
        // console.log('It Matched');
        user.classList.remove('is-invalid');
        validUser = true;
    } else {
        //console.log('Not Matched');
        user.classList.add('is-invalid');
        validUser = false;
    }

})
email.addEventListener('blur', () => {
    //email validation
    // console.log('email is blureed');
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){3,10}$/;
    let str = email.value;
    //console.log(regex, str);
    if (regex.test(str)) {
        // console.log('It Matched');
        email.classList.remove('is-invalid');
        validEmail = true;
    } else {
        // console.log('Not Matched');
        email.classList.add('is-invalid');
        validEmail = false;
    }
})
phone.addEventListener('blur', () => {
    //Phone validation
    //  console.log('Phone is blureed');
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    // console.log(regex, str);
    if (regex.test(str)) {
        //  console.log('It Matched');
        phone.classList.remove('is-invalid');
        validPhone = true;
    } else {
        //  console.log('Not Matched');
        phone.classList.add('is-invalid');
        validPhone = false;
    }
})


let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    // console.log('You Clicked Me');
    //submit Your Form here

    if (validUser && validEmail && validPhone) {
        console.log('phone,email and user are valid. Submitting the form.');
        let success = document.getElementById('success');
        success.classList.add('show');
        /* failure.classList.remove('show'); */
        $('#failure').hide();
        $('#success').show();

    } else {
        console.log('One of phone,email and user are not valid. Correct the errors and retry Submitting the form.');
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        /*  success.classList.remove('show'); */
        $('#success').hide();
        $('#failure').show();
    }

    e.preventDefault();
})