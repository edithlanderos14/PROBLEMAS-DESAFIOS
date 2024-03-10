const image = document.getElementById('myImage');

image.addEventListener('click', () => {
    if (image.style.border === '') {
        image.style.border = '10px solid red';
    } else {
        image.style.border = ''; 
    }
});