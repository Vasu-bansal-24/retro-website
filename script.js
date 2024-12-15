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

function changeBackgroundColor() {
    const colors = [' #ffcc00', 'rgb(190, 26, 26)', ' #ff00ff', ' #00ff00', ' #ff6600', ' #ff3399', ' #00ccff'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

function showRandomGif() {
    const gifs = [
        "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjE0bGJqamQwcmIyM3ozdm4zam51Nmt1cWM2ejkwYzRhNWg3cjYyYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xTiN0jHuzhUAo7yGsM/giphy.gif", 
        "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXhpaHR6dnNiOHJnOTBhdG15aDJtc2pidmVnODJrc21ieGR1ZXZ2OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ihVjxokZuNswo/giphy.gif", 
        "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWY3MWNjMGIyYXVkNXFrOHZzeTFlN2wzOTV5b2theWE1N3ZmMmQzZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1EVPGsbaNSmIw/giphy.gif", 
        "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXlwdHAzeHg5ZHFxN2c4amEzYjJ0aTd2eWgzbTY3emthdmpsdjVrZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fRgwpuil2wHww7OXjT/giphy.gif", 
        "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWtmcjM4bzYydHo3OG83eno0eHdybnh5YzVwaXowanhnMjhtdnJkZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/FM7PBJBV0Lms1UkIJx/giphy.gif" 
    ];
    const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
    
    const gifImage = document.createElement('img');
    gifImage.src = randomGif;
    gifImage.alt = "Random 90s GIF";
    gifImage.style.width = "300px";
    gifImage.style.border = "2px solid #ff00ff";
    gifImage.style.display = "block";
    gifImage.style.margin = "20px auto";

    const gallerySection = document.querySelector('#gallery');
    gallerySection.appendChild(gifImage);
}


document.addEventListener('DOMContentLoaded', function() {
    const contactSection = document.querySelector('#contact');
    
    
    contactSection.addEventListener('click', function() {
        showFunFact();
    });

    const aboutSection = document.querySelector('#about');
    aboutSection.addEventListener('click', function() {
        showFunFact();
    });

    
    const homeSection = document.querySelector('#home');
    homeSection.addEventListener('click', function() {
        changeBackgroundColor();
    });

    
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
