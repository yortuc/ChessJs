# Chees Game

```jsx
<ChessGame gameState={}>
  <PlayerInfo playerInfo={ gameState.player } />
  <Board board={gameState.board} />
</ChessGame>
```


## Components

### ChessGame

Whole game state is held and all the game logic handled in this component. 

### Board

Renders the given chess board state. Exposes some events for ChessGame components such as `tileClicked(:tileIndex)`.

## Datastructures

Game state is held in this structure

```
const gameState = {
	pieces: [[]],
	selected: null,
	player: 0
}
```