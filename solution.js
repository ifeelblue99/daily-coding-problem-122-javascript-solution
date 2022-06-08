const coinBoard = [
  1, 3, 1, 1,
  2, 0, 0, 4,
  1, 5, 3, 1
]

let maxValue = 0
function collectCoins(board) {
  const adjacency = _adjacencyListHelper(board)

  const stack = [0]
  let total = 0
  while (stack.length !== 0) {
    const current = stack.pop()
    total += board[current]
    
    console.log(current)
    
    if(adjacency[current][0])
      stack.push(adjacency[current][0])
      
    if(adjacency[current][1])
      stack.push(adjacency[current][1])
      
    if(adjacency[current].length === 0) {
      
      maxValue = Math.max(maxValue, total)
      total = board[current]
    }
  }
  return maxValue
}
function _adjacencyListHelper(board) {
  let map = new Map()
  
  for (let indx = 0; indx < board.length; indx++) {
    if(board[indx] > 0) {
      const neighbours = []
      if(board[indx + 1] > 0 && indx%4 !== 3) neighbours.push(indx + 1)
      if(board[indx + 4] > 0) neighbours.push(indx + 4)
      map[indx] = neighbours
    }
  }
  return map
}
console.log(collectCoins(coinBoard))
