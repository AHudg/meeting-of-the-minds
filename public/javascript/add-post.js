async function addNewPostHandler(event) {
    event.preventDefault()

    const title = document.querySelector('#post-title').value.trim();
    document.querySelector('#post-title').value = '';

    const content = document.querySelector('#post-content').value.trim();
    document.querySelector('#post-content').value = '';

    if (title && content) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({
                title,
                content
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        };
    } else { console.log('error') };

};

document.querySelector('.login-btn').addEventListener('click', addNewPostHandler)