## Link host: https://nguyenthuanit265.github.io/tic-tac-toe

# Enhanced Tic-Tac-Toe Game

This project is an enhanced version of the classic Tic-Tac-Toe game, built with React. It includes several advanced
features that go beyond the basic game mechanics.

## Features

1. **Basic Tic-Tac-Toe Gameplay**: Play the classic game of Tic-Tac-Toe against another player.
2. **Move History**: Keep track of all moves made during the game.
3. **Time Travel**: Jump to any previous state of the game board.
4. **Move Locations**: Display the location (row, col) for each move in the move history list.
5. **Sort Moves**: Toggle between ascending and descending order of moves in the history list.
6. **Highlight Winning Squares**: When a player wins, the three squares that caused the win are highlighted.
7. **Draw Detection**: The game detects and announces when the result is a draw.

## Installation

To run this project locally, follow these steps:

1. Ensure you have [Node.js](https://nodejs.org/) installed on your system.
2. Clone this repository to your local machine.
3. Navigate to the project directory in your terminal.
4. Run the following command to install the necessary dependencies:

   ```
   npm install
   ```

## Usage

After installation, you can start the development server by running:

```
npm start
```

This will start the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your
browser.

## How to Play

1. The game starts with Player X. Click on any square to make a move.
2. Players take turns to place their marks (X or O) on empty squares.
3. The first player to get three of their marks in a row (horizontally, vertically, or diagonally) wins the game.
4. If all squares are filled and no player has won, the game is a draw.
5. Use the move history list to jump to any previous state of the game.
6. Click the "Sort Ascending/Descending" button to change the order of moves in the history list.

## Deployment

This app is deployed using GitHub Pages. You can view the live version
at: [https://yourusername.github.io/your-repo-name](https://yourusername.github.io/your-repo-name)

To deploy your own version:

1. Fork this repository.
2. Clone your forked repository to your local machine.
3. Install dependencies with `npm install`.
4. Install gh-pages with `npm install gh-pages --save-dev`.
5. In `package.json`, add:
   ```json
   "homepage": "https://yourusername.github.io/your-repo-name",
   ```
   And in the "scripts" section:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
6. Commit and push these changes.
7. Run `npm run deploy`.
8. Go to your repository settings on GitHub, scroll to "GitHub Pages", and select "gh-pages branch" as the source.

Your app should now be live at the URL you specified in the `homepage` field.

### Localhost

![Screenshot 2024-10-09 at 20.27.14.png](public/Screenshot%202024-10-09%20at%2020.27.14.png)

### Go live

![Screenshot 2024-10-09 at 20.29.56.png](public/Screenshot%202024-10-09%20at%2020.29.56.png)