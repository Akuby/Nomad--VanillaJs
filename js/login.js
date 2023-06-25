const loginForm = document.getElementById('login-form');
const loginInput = document.getElementById('user-name');
const greeting = document.getElementById('greeting');


const HIDDEN_CLASSNAME = 'displaynone';

const chkLogin = localStorage.getItem('username');
if (!!chkLogin) {
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.innerText = `Welcome ${chkLogin}!`
    greeting.classList.remove(HIDDEN_CLASSNAME);
} else {
    loginForm.addEventListener('submit', login)
}

function login(e) {
    e.preventDefault();

    const username = loginInput.value;
    
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.innerText = `Welcome ${username}!`
    greeting.classList.remove(HIDDEN_CLASSNAME);

    localStorage.setItem('username', username);

}
