const users = [
    { username: 'Ace', password: 'OgAce07', role: 'admin' },
    { username: 'Dev', password: 'Dev@2005', role: 'admin' },
    { username: 'Em', password: 'Kamikaze@97', role: 'client' },
    { username: 'Ippo', password: 'Hajime2000', role: 'client' },
    { username: 'Lelouch', password: 'CodeGeass', role: 'client' },
    { username: 'Dele', password: 'Potential15', role: 'client' },
    { username: 'Antony', password: 'TheGoat', role: 'client' }
];

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login');
    const logoutButton = document.getElementById('logout-button');
    const loginMessage = document.getElementById('login-message'); 

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); 

            const usernameInput = document.getElementById('username').value;
            const passwordInput = document.getElementById('password').value;

            const foundUser = users.find(user => 
                user.username === usernameInput && user.password === passwordInput
            );

            if (foundUser) {
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('userRole', foundUser.role);
                localStorage.setItem('username', foundUser.username); 

                loginMessage.textContent = 'Welcome '+ foundUser.username + ' (' + foundUser.role + ')';

                if (foundUser.role === 'admin') {
                    window.location.href = 'home.html'; 
                } 
                else {
                    window.location.href = 'homepage.html'; 
                }
            } 
            else {
                loginMessage.textContent = 'Invalid username or password.';
                loginMessage.style.color = 'red'; 
            }
        });
    }

    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('userRole');
            localStorage.removeItem('username');
            window.location.href = 'index.html';
        });
    }

    const isDashboardPage = document.body.querySelector('.dashboard-header') !== null;

    if (isDashboardPage) {
        if (!localStorage.getItem('isLoggedIn')) {
            window.location.href = 'index.html';
        } else {
            const userRole = localStorage.getItem('userRole');
            const username = localStorage.getItem('username');
            console.log(`User ${username} with role ${userRole} is logged in.`);
        }
    }
});