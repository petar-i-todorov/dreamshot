import { Slot } from "./slot-machine";

const slotMachine = new Slot();
let totalBet = 0;
let totalPayout = 0;

console.info("Press 'Enter' to spin once. Press 'Ctrl + C' to exit.");
process.stdin.setEncoding("utf8");
process.stdin.on("data", () => {
  totalPayout += slotMachine.spin();
  console.info(`Total payout: ${totalPayout}. Total bet: ${++totalBet}.`);
});
