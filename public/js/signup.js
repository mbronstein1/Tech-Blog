const signupFormEl = document.getElementById('signup-form');
const signupUsernameEl = document.getElementById('signup-username');
const signupPasswordEl = document.getElementById('signup-password');

const signupFormHandler = async (e) => {
    e.preventDefault();
    usernameVal = signupUsernameEl.value.trim();
    passwordVal = signupPasswordEl.value.trim();

    // console.log(usernameVal, passwordVal)

    if(usernameVal && passwordVal) {
        const response = await fetch('/api/users/signup', {
            method: 'POST',
            body: JSON.stringify({
                username: usernameVal,
                password: passwordVal
            }),
            headers: {'Content-Type': 'application/json'},
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to sign up.');
        }
    }
};



signupFormEl.addEventListener('submit', signupFormHandler)