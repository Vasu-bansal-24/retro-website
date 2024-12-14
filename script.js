// script.js

// Function to display an alert with a fun 90s fact
function showFunFact() {
    const facts = [
        "Did you know? The first website was created in 1991!",
        "In the 90s, the average internet speed was just 56 Kbps!",
        "Tamagotchis were all the rage in the 90s!",
        "The first text message was sent in 1992!",
        "Remember dial-up? It was the sound of the internet connecting!"
    ];
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    alert(randomFact);
}

// Function to change the background color randomly
function changeBackgroundColor() {
    const colors = [' #ffcc00', 'rgb(190, 26, 26)', ' #ff00ff', ' #00ff00', ' #ff6600', ' #ff3399', ' #00ccff'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Function to display a random animated GIF
function showRandomGif() {
    const gifs = [
        "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjE0bGJqamQwcmIyM3ozdm4zam51Nmt1cWM2ejkwYzRhNWg3cjYyYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xTiN0jHuzhUAo7yGsM/giphy.gif", // Example GIF
        "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXhpaHR6dnNiOHJnOTBhdG15aDJtc2pidmVnODJrc21ieGR1ZXZ2OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ihVjxokZuNswo/giphy.gif", // Example GIF
        "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWY3MWNjMGIyYXVkNXFrOHZzeTFlN2wzOTV5b2theWE1N3ZmMmQzZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1EVPGsbaNSmIw/giphy.gif", // Example GIF
        "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXlwdHAzeHg5ZHFxN2c4amEzYjJ0aTd2eWgzbTY3emthdmpsdjVrZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fRgwpuil2wHww7OXjT/giphy.gif", // Example GIF
        "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWtmcjM4bzYydHo3OG83eno0eHdybnh5YzVwaXowanhnMjhtdnJkZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/FM7PBJBV0Lms1UkIJx/giphy.gif"  // Example GIF
    ];
    const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
    
    // Create an image element for the GIF
    const gifImage = document.createElement('img');
    gifImage.src = randomGif;
    gifImage.alt = "Random 90s GIF";
    gifImage.style.width = "300px"; // Set a fixed width for the GIF
    gifImage.style.border = "2px solid #ff00ff"; // Pink border around the GIF
    gifImage.style.display = "block"; // Block display for proper spacing
    gifImage.style.margin = "20px auto"; // Center the GIF

    // Append the GIF to the gallery section
    const gallerySection = document.querySelector('#gallery');
    gallerySection.appendChild(gifImage);
}

// Event listeners for buttons
document.addEventListener('DOMContentLoaded', function() {
    const contactSection = document.querySelector('#contact');
    
    // Show a fun fact when the contact section is clicked
    contactSection.addEventListener('click', function() {
        showFunFact();
    });

    const aboutSection = document.querySelector('#about');
    aboutSection.addEventListener('click', function() {
        showFunFact();
    });

    // Change background color when the home section is clicked
    const homeSection = document.querySelector('#home');
    homeSection.addEventListener('click', function() {
        changeBackgroundColor();
    });

    // Show a random GIF when the gallery section is clicked
    const gallerySection = document.querySelector('#gallery');
    gallerySection.addEventListener('click', function() {
        showRandomGif();
    });
});

const gif = document.getElementById('sound-trigger');
const audio = document.getElementById('audio-player');

gif.addEventListener('click', () => {
  audio.play();
});