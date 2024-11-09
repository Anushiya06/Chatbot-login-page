document.getElementById('send-button').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;

    const userMessage = document.createElement('p');
    userMessage.className = 'user-message';
    userMessage.textContent = userInput;

    document.getElementById('chat-messages').appendChild(userMessage);
    document.getElementById('user-input').value = '';

    setTimeout(() => {
        const botMessage = document.createElement('p');
        botMessage.className = 'bot-message';
        botMessage.textContent = 'This is a response from the bot.';

        document.getElementById('chat-messages').appendChild(botMessage);
        document.getElementById('chat-messages').scrollTop = document.getElementById('chat-messages').scrollHeight;
    }, 1000);
});
