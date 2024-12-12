# Local Chat App

A simple chat application that allows users to send and view messages locally using `localStorage`. This app does not require a server and runs entirely in the browser.

## Features

- **Username Setup**: Users can enter a username to participate in the chat.
- **Local Chat**: Messages are stored in the browser using `localStorage`, making it a completely offline chat app.
- **Message History**: Previously sent messages are displayed every time the user revisits the app.
- **Clear Chat**: Users can clear all chat messages with a single click.
- **Responsive Design**: The app adjusts for different screen sizes.

## Technologies Used

- **HTML**: Structure of the app.
- **CSS**: Styling and layout.
- **JavaScript**: Core functionality including local message storage, chat display, and user interactions.

## How to Use

1. Clone or download the repository.
2. Open the `index.html` file in your favorite web browser.
3. Enter a username to start the chat.
4. Type a message in the input box and click the "Send" button to send it.
5. Click the "Clear Chat" button to remove all messages.

## File Structure

- `index.html`: Contains the structure of the chat app.
- `styles.css`: Styles for the app's layout and appearance.
- `script.js`: Core functionality and logic for the app.
- `README.md`: Documentation for the project.

## How It Works

1. When a user enters their username, it is stored in `localStorage` to remember them across sessions.
2. Messages sent by the user are stored in `localStorage` as a JSON array.
3. On loading the app, messages are retrieved from `localStorage` and displayed in the chat box.
4. Users can clear all messages using the "Clear Chat" button, which removes all stored messages from `localStorage`.

## Known Limitations

- **Local Storage Only**: The chat history is local to each user's browser and is not shared across devices or users.
- **No Backend**: This is an offline-only app with no real-time communication.
- **No Persistence for Username**: If `localStorage` is cleared, the username and messages will be lost.

## Future Enhancements

- Add support for real-time chat with a backend server.
- Allow multiple users to connect and chat over a network.
- Add timestamps to messages with more detailed formatting.
- Provide options to customize the chat theme.

## License

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).

---

Enjoy using the Local Chat App!
