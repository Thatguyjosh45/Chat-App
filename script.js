document.addEventListener('DOMContentLoaded', () => {
    const usernameScreen = document.getElementById('username-screen');
    const chatScreen = document.getElementById('chat-screen');
    const usernameInput = document.getElementById('username-input');
    const enterChatButton = document.getElementById('enter-chat');
    const messageInput = document.getElementById('message-input');
    const sendMessageButton = document.getElementById('send-message');
    const clearChatButton = document.getElementById('clear-chat');
    const chatBox = document.getElementById('chat-box');

    let username = localStorage.getItem('chatUsername');

    if (username) {
        usernameScreen.style.display = 'none';
        chatScreen.style.display = 'block';
        displayMessages();
    } else {
        chatScreen.style.display = 'none';
    }

    enterChatButton.addEventListener('click', () => {
        username = usernameInput.value.trim();
        if (username) {
            localStorage.setItem('chatUsername', username);
            usernameScreen.style.display = 'none';
            chatScreen.style.display = 'block';
            displayMessages();
        }
    });

    sendMessageButton.addEventListener('click', sendMessage);
    messageInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            sendMessage();
        }
    });

    clearChatButton.addEventListener('click', clearChat);

    function sendMessage() {
        const message = messageInput.value.trim();
        if (message) {
            const data = { username, message, timestamp: new Date().toLocaleTimeString() };
            saveMessage(data);
            messageInput.value = '';
        }
    }

    function clearChat() {
        localStorage.removeItem('chatMessages');
        displayMessages();
    }

    function saveMessage(data) {
        const messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
        messages.push(data);
        localStorage.setItem('chatMessages', JSON.stringify(messages));
        displayMessages();
    }

    function displayMessages() {
        const messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
        chatBox.innerHTML = '';
        messages.forEach(msg => {
            const messageElement = document.createElement('div');
            const timeElement = document.createElement('small');
            timeElement.textContent = `(${msg.timestamp}) `;

            messageElement.textContent = `${msg.username}: ${msg.message}`;
            messageElement.insertBefore(timeElement, messageElement.firstChild);
            chatBox.appendChild(messageElement);
        });
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});
