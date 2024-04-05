import assert from "node:assert";
import test from "node:test";
import { LineResult, Slot } from "../../src/slot-machine";
import { winningCombinations } from "./constants";

// we're currently testing the "getLineResults" method for the configuration provided in the task description
// if it changes, the tests will fail. This is a good thing because it will remind us to update the tests
// another approach would be to use a factory function to generate the configuration and use it in the tests
// but I was afraid it would make the tests implement the same logic as the code I was testing
// and thus make the tests useless
// another approach would be to test the method with different mock configurations to make sure a change in the configuration
// doesn't break the method, but I thought it was a bit out of scope for this task

test("calculates the winnings correctly", () => {
  const slotMachine = new Slot();
  for (const { reelPositions, lineResults } of winningCombinations) {
    assert.deepStrictEqual(
      slotMachine["getLineResults"](reelPositions),
      lineResults.map(({ pattern, payout }) => new LineResult(pattern, payout))
    );
  }
});
