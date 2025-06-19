document.addEventListener('DOMContentLoaded', () => { 
    const infoIcon = document.getElementById('rand');
    const popup = document.getElementById('popup'); 
    const closeButton = popup.querySelector('.close');
    const popupMessage = document.getElementById('message');

    const messages = [
        "Did you know, Every 60mins an hour passes?",
        "Suiiiii!",
        "Que miras bobo?",
        "Why are you gae?",
        "Never gonna give you up, never gonna let you down, never gonna run around and desert you!",
        "Chipi chipi chapa chapa, dubi dubi daba daba!"
    ];

    infoIcon.addEventListener('click', (event) => {
        event.stopPropagation(); 
                
        const randomIndex = Math.floor(Math.random() * messages.length);
        popupMessage.textContent = messages[randomIndex];
        popup.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (popup.style.display === 'block' && !infoIcon.contains(event.target) && !popup.contains(event.target)) {
            popup.style.display = 'none';
        }
    });
});