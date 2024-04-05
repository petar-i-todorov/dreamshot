import { Slot } from "../src/slot-machine";

const totalSpins = Number(process.argv[2]);
const betPerSpin = Number(process.argv[3]);
simulateSpins(totalSpins, betPerSpin);

function simulateSpins(totalSpins: number, betPerSpin: number) {
  if (isNaN(totalSpins) || isNaN(betPerSpin)) {
    console.error(
      "Please enter valid numbers for spins and bet. Example: 'npm run simulate 1000 1'."
    );
    return;
  }

  const slot = new Slot();
  let totalWins = 0;
  const startTime = performance.now();

  for (let i = 0; i < totalSpins; i++) {
    const totalPayout = slot.spin(betPerSpin);
    totalWins += totalPayout;
  }

  const endTime = performance.now();
  const executionTime = endTime - startTime;

  console.log(`Total spins: ${totalSpins}`);
  console.log(`Total bet: ${totalSpins * betPerSpin}`);
  console.log(`Total wins: ${totalWins}`);
  console.log(`Execution time: ${executionTime} ms`);
  console.log(
    `Spin execution speed: ${(executionTime / totalSpins).toFixed(2)} ms/spin`
  );
}
