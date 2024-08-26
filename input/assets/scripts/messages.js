document.addEventListener('DOMContentLoaded', () => {
    const messages = [
        'Loading your experience...',
        'You can follow me on Instagram @benoitbiraguma',
        'In the meantime, here are some facts about me...',
        'I speak 3 languages: Dutch, English and French 🌍',
        'I was born in Brussels 🇧🇪',
        'I am a tech enthusiast, especially Apple products 🍎',
        'I love going to the gym and working out 💪',
        ];
    let messageIndex = 0;
    const messageElement = document.getElementById('loadingMessage');

    setInterval(() => {
        messageIndex = (messageIndex + 1) % messages.length;
        messageElement.textContent = messages[messageIndex];
    }, 4000);
});