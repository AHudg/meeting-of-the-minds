async function logoutButtonHandler() {
    const response = await fetch('api/accounts/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/login');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('#logout-btn').addEventListener('click', logoutButtonHandler);