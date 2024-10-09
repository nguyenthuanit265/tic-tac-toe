import './style.css'
import {useState} from "react";

function Square({value, onSquareClick, isWinning}) {

    // When someone wins, highlight the three squares that caused the win (and when no one wins, display a message about the result being a draw): 1.8 points.
    return (
        <button
            className={`square ${isWinning ? 'winning' : ''}`}
            onClick={onSquareClick}>
            {value}
        </button>
    );
}

function Board({xIsNext, squares, onPlay}) {
    function handleClick(i) {
        const winnerInfo = calculateWinner(squares);
        if (winnerInfo.winner || squares[i]) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O';
        }
        onPlay(nextSquares);
    }

    const winnerInfo = calculateWinner(squares);
    let status;
    if (winnerInfo.winner) {
        status = 'Winner: ' + winnerInfo.winner;
    } else if (winnerInfo.isDraw) {
        status = 'Draw: No one wins';
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

    // Rewrite the Board to use two loops to make the squares instead of hardcoding them: 1.8 points.
    let boardRows = [];
    for (let i = 0; i < 3; i++) {
        let row = [];
        for (let j = 0; j < 3; j++) {
            let index = i * 3 + j;
            row.push(
                <Square
                    key={index}
                    value={squares[index]}
                    onSquareClick={() => handleClick(index)}
                    isWinning={winnerInfo.line && winnerInfo.line.includes(index)}
                />
            );
        }
        boardRows.push(<div key={i} className="board-row">{row}</div>);
    }

    return (
        <>
            <div className="status">{status}</div>
            {boardRows}
        </>
    );
}

export default function Game() {
    // const [history, setHistory] = useState([Array(9).fill(null)]);
    const [history, setHistory] = useState([
        {
            squares: Array(9).fill(null),
            location: null
        }
    ]);

    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove].squares;
    const [isAscending, setIsAscending] = useState(true);

    function handlePlay(nextSquares) {
        // const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        const nextHistory = history.slice(0, currentMove + 1);
        const currentSquares = history[currentMove].squares;
        const moveLocation = nextSquares.findIndex((square, index) => square !== currentSquares[index]);

        const location = {
            row: Math.floor(moveLocation / 3) + 1,
            col: (moveLocation % 3) + 1
        };

        nextHistory.push({
            squares: nextSquares,
            location: location
        });

        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

    function toggleSortOrder() {
        setIsAscending(!isAscending);
    }

    // For the current move only, show “You are at move #…” instead of a button: 1.8 points.
    let moves = history.map((step, move) => {
        let description;
        if (move > 0) {
            description = `You are at move #${move} (${step.location.row}, ${step.location.col})`;
        } else {
            description = 'Go to game start';
        }
        return (
            <li key={move}>
                {move === currentMove ? (
                    <span>You are at move #{move}</span>
                ) : (
                    <button onClick={() => jumpTo(move)}>{description}</button>
                )}
            </li>
        );
    });

    if (!isAscending) {
        moves = moves.reverse();
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
            </div>
            <div className="game-info">
                {/*Add a toggle button that lets you sort the moves in either ascending or descending order: 1.8 points.*/}
                <button onClick={toggleSortOrder}>
                    {isAscending ? 'Sort Descending' : 'Sort Ascending'}
                </button>
                <ol>{moves}</ol>
            </div>
        </div>
    );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return {winner: squares[a], line: lines[i], isDraw: false};
        }
    }

    // Check for draw
    const isDraw = squares.length === 9 && squares.every(square => square !== null);
    return {winner: null, line: null, isDraw: isDraw};
}