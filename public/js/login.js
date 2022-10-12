const loginFormEl = document.getElementById('login-form');
const loginUsernameEl = document.getElementById('login-username');
const loginPasswordEl = document.getElementById('login-password');

const loginFormHandler = async (e) => {
    e.preventDefault();
    const usernameVal = loginUsernameEl.value.trim();
    const passwordVal = loginPasswordEl.value.trim();

    // console.log(usernameVal, passwordVal)

    if(usernameVal && passwordVal) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({
                username: usernameVal,
                password: passwordVal,
            }),
            headers: {'Content-type': 'application/json'},
        });

        if(response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to log in');
        }
    }
};



loginFormEl.addEventListener('submit', loginFormHandler);