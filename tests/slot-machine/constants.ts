import configuration from "../../src/configuration";

const winningSymbol = 1;

// prettier-ignore
export const winningCombinations =
[
  // x - x - x - x - x
  // 3 - 4 - 5 - 6 - 7
  // 5 - 6 - 7 - 8 - 9
  { 
    reelPositions: [
      [{ symbol: winningSymbol, position: 0 }, { symbol: 3, position: 1 }, { symbol: 5, position: 2, }],
      [{ symbol: winningSymbol, position: 1 }, { symbol: 4, position: 2 }, { symbol: 6, position: 3, }],
      [{ symbol: winningSymbol, position: 2 }, { symbol: 5, position: 3 }, { symbol: 7, position: 4, }],
      [{ symbol: winningSymbol, position: 3 }, { symbol: 6, position: 4 }, { symbol: 8, position: 5, }],
      [{ symbol: winningSymbol, position: 4 }, { symbol: 7, position: 5 }, { symbol: 9, position: 6, }]],
    lineResults: [
      { pattern: configuration.lines[0], payout: configuration.symbols[winningSymbol][4] },
      { pattern: configuration.lines[1], payout: 0 },
      { pattern: configuration.lines[2], payout: 0 },
      { pattern: configuration.lines[3], payout: 0 },
      { pattern: configuration.lines[4], payout: 0 },
    ]
  },
  {
    // 2 - 3 - 4 - 5 - 6
    // x - x - x - x - x
    // 2 - 3 - 4 - 5 - 6
    reelPositions: [
      [{ symbol: 2, position: 0 }, { symbol: winningSymbol, position: 1 }, { symbol: 2, position: 2 }],
      [{ symbol: 3, position: 1 }, { symbol: winningSymbol, position: 2 }, { symbol: 3, position: 3 }],
      [{ symbol: 4, position: 2 }, { symbol: winningSymbol, position: 3 }, { symbol: 4, position: 4 }],
      [{ symbol: 5, position: 3 }, { symbol: winningSymbol, position: 4 }, { symbol: 5, position: 5 }],
      [{ symbol: 6, position: 4 }, { symbol: winningSymbol, position: 5 }, { symbol: 6, position: 6 }]
    ],
    lineResults: [
      { pattern: configuration.lines[0], payout: 0 },
      { pattern: configuration.lines[1], payout: configuration.symbols[winningSymbol][4] },
      { pattern: configuration.lines[2], payout: 0 },
      { pattern: configuration.lines[3], payout: 0 },
      { pattern: configuration.lines[4], payout: 0 }
    ]
  },
  {
    // 2 - 3 - 4 - 5 - 6
    // 2 - 3 - 4 - 5 - 6
    // x - x - x - x - x
    reelPositions: [
      [{ symbol: 2, position: 0 }, { symbol: 2, position: 1 }, { symbol: winningSymbol, position: 2 }],
      [{ symbol: 3, position: 1 }, { symbol: 3, position: 2 }, { symbol: winningSymbol, position: 3 }],
      [{ symbol: 4, position: 2 }, { symbol: 4, position: 3 }, { symbol: winningSymbol, position: 4 }],
      [{ symbol: 5, position: 3 }, { symbol: 5, position: 4 }, { symbol: winningSymbol, position: 5 }],
      [{ symbol: 6, position: 4 }, { symbol: 6, position: 5 }, { symbol: winningSymbol, position: 6 }]
    ],
    lineResults: [
      { pattern: configuration.lines[0], payout: 0 },
      { pattern: configuration.lines[1], payout: 0 },
      { pattern: configuration.lines[2], payout: configuration.symbols[winningSymbol][4] },
      { pattern: configuration.lines[3], payout: 0 },
      { pattern: configuration.lines[4], payout: 0 }
    ]
  },
  {
    // x - 3 - x - 5 - x
    // 2 - x - 4 - x - 6
    // 2 - 3 - 4 - 5 - 6
    reelPositions: [
      [{ symbol: winningSymbol, position: 0 }, { symbol: 2, position: 1 }, { symbol: 2, position: 2 }],
      [{ symbol: 3, position: 1 }, { symbol: winningSymbol, position: 2 }, { symbol: 3, position: 3 }],
      [{ symbol: winningSymbol, position: 2 }, { symbol: 4, position: 3 }, { symbol: 4, position: 4 }],
      [{ symbol: 5, position: 3 }, { symbol: winningSymbol, position: 4 }, { symbol: 5, position: 5 }],
      [{ symbol: winningSymbol, position: 4 }, { symbol: 6, position: 5 }, { symbol: 6, position: 6 }]
    ],
    lineResults: [
      { pattern: configuration.lines[0], payout: 0 },
      { pattern: configuration.lines[1], payout: 0 },
      { pattern: configuration.lines[2], payout: 0 },
      { pattern: configuration.lines[3], payout: configuration.symbols[winningSymbol][4] },
      { pattern: configuration.lines[4], payout: 0 }
    ]
  },
  {
    // 2 - 3 - 4 - 5 - 6
    // x - 2 - x - 3 - x
    // 2 - x - 4 - x - 6
    reelPositions: [
      [{ symbol: 2, position: 0 }, { symbol: winningSymbol, position: 1 }, { symbol: 2, position: 2 }],
      [{ symbol: 3, position: 1 }, { symbol: 2, position: 2 }, { symbol: winningSymbol, position: 3 }],
      [{ symbol: 4, position: 2 }, { symbol: winningSymbol, position: 3 }, { symbol: 4, position: 4 }],
      [{ symbol: 5, position: 3 }, { symbol: 3, position: 4 }, { symbol: winningSymbol, position: 5 }],
      [{ symbol: 6, position: 4 }, { symbol: winningSymbol, position: 5 }, { symbol: 6, position: 6 }]
    ],
    lineResults: [
      { pattern: configuration.lines[0], payout: 0 },
      { pattern: configuration.lines[1], payout: 0 },
      { pattern: configuration.lines[2], payout: 0 },
      { pattern: configuration.lines[3], payout: 0 },
      { pattern: configuration.lines[4], payout: configuration.symbols[winningSymbol][4] }
    ]
  },    
];
