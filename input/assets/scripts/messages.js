document.addEventListener('DOMContentLoaded', () => {
    const messages = [
        'Loading your experience...',
        'You can follow me on Instagram @benoitbiraguma',
        'In the meantime, here are some facts about me...',
        'I am a tech enthusiast, especially Apple products 🍎',
        'I am 23 years old and I was born in Brussels 🇧🇪',
        'I love going to the gym and working out 💪',
        'My favorite football team is Manchester City 💙',
        'I speak 3 languages: Dutch, English and French 🌍',
        ];
    let messageIndex = 0;
    const messageElement = document.getElementById('loadingMessage');

    setInterval(() => {
        messageIndex = (messageIndex + 1) % messages.length;
        messageElement.textContent = messages[messageIndex];
    }, 4000);
});