import configuration from "./configuration";

export class SymbolResult {
  symbol: number;
  position: number;

  constructor(symbol: number, position: number) {
    this.symbol = symbol;
    this.position = position;
  }
}

export class LineResult {
  line: number[];
  payout: number;

  constructor(line: Array<number>, payout: number) {
    this.line = line;
    this.payout = payout;
  }
}

export class Slot {
  private config = configuration;

  spin(betPerSpin: number = 1) {
    const reelPositions = this.getReelPositions();
    const lineResults = this.getLineResults(reelPositions);
    this.printResults(reelPositions, lineResults);
    const totalPayout = lineResults.reduce(
      (total, result) => total + result.payout,
      0
    );

    return totalPayout * betPerSpin;
  }

  private getReelPositions() {
    return this.config.reels.map((reel) => {
      let positions = new Set<number>();
      while (positions.size < this.config.rowsCount) {
        positions.add(Math.floor(Math.random() * reel.length));
      }

      return Array.from(positions).map(
        (position) => new SymbolResult(reel[position], position)
      );
    });
  }

  private getLineResults(reelPositions: SymbolResult[][]) {
    return this.config.lines.map((pattern) => {
      let payout = 0;
      const lineSymbols = pattern.map((rowPosition, reelIndex) => {
        return reelPositions[reelIndex][rowPosition].symbol;
      });

      const firstSymbol = lineSymbols[0];
      let matchCount = 1;
      for (let i = 1; i < lineSymbols.length; i++) {
        if (lineSymbols[i] === firstSymbol) {
          matchCount++;
        } else {
          break;
        }
      }

      if (matchCount >= 3) {
        payout =
          this.config.symbols[firstSymbol as keyof typeof this.config.symbols][
            matchCount - 1
          ] || 0;
      }

      return new LineResult(pattern, payout);
    });
  }

  private printResults(
    reelPositions: SymbolResult[][],
    lineResults: Array<LineResult>
  ) {
    console.info("Spin result:");

    const rows: number[][] = [];
    for (let rowIndex = 0; rowIndex < this.config.rowsCount; rowIndex++) {
      const row = reelPositions.map((reel) => reel[rowIndex].symbol);
      rows.push(row);
    }

    rows.forEach((rowSymbols, index) => {
      console.info(`Row ${index + 1}: ${rowSymbols.join(" | ")}`);
    });

    console.info("Line payouts:");
    lineResults.forEach((result, index) => {
      console.info(
        `Line ${index + 1}: ${result.line
          .map((pos, reelIndex) => rows[pos][reelIndex])
          .join(" | ")}, Payout: ${result.payout}`
      );
    });
  }
}
