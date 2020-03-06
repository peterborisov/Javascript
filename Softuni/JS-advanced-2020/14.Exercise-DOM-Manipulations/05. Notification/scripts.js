function notify(message) {
    let info = document.getElementById('notification');
    info.style.display = 'block';
    info.innerText += message;
    setTimeout(() => {
        info.style.display = 'none';
    }, 2000);
}