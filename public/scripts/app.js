const sendButton = document.querySelector('.button');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');

sendButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('send button clicked');

    let formData = {
        name: name.value,
        email: email.value,
        message: message.value
    };

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/contact-me', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onreadystatechange = () => {
        alert('Something Went Wrong');
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {

            alert('Email Sent Sucessfully');
            console.log(xhr.responseText)

            message = '';
        } else {
            alert('Something Went Wrong');
        }
    }
    xhr.send(JSON.stringify(formData));

});

