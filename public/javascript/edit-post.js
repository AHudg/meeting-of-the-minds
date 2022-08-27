async function editNewPost(event) {
    event.preventDefault()

    const title = document.querySelector('#post-title').value.trim();
    document.querySelector('#post-title').value = '';

    const content = document.querySelector('#post-content').value.trim();
    document.querySelector('#post-content').value = '';

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];

    if (title && content) {
        const response = await fetch(`/api/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                title,
                content
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert(response.statusText);
        };

    } else { console.log('error') };

};

document.querySelector('.login-btn').addEventListener('click', editNewPost)