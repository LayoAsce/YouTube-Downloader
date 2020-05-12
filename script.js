const findURL = document.querySelector('.findURL');
const inputURL = document.querySelector('.inputURL');
findURL.addEventListener('click', () => {
    console.log(`URL: ${inputURL.value}`);
    sendURL(inputURL.value);
});

// make JavaScript send a GET request to the server. 
//Also, I used the middleware cors() so my server can receive requests.
// I used fetch() to send the request from JavaScript:
function sendURL(URL) {
    window.location.href = `http://localhost:4000/download?URL=${URL}`;
}