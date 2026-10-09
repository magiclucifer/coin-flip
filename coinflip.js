#!/usr/bin/env node

const VERSION = "2.0.0";

const COLORS = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  dim: "\x1b[2m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  cyan: "\x1b[36m",
  gray: "\x1b[90m",
  white: "\x1b[97m",
  magenta: "\x1b[35m"
};

const color = (text, ...styles) =>
  `${styles.map(style => COLORS[style]).join("")}${text}${COLORS.reset}`;

const formatNumber = number => number.toLocaleString("en-US");

const formatPercent = (value, total) =>
  total === 0 ? "0.00%" : `${((value / total) * 100).toFixed(2)}%`;

const printHeader = () => {
  console.log();
  console.log(color("  COINFLIP", "bold", "cyan") + color(` v${VERSION}`, "gray"));
  console.log(color("  Binary Random Simulator", "dim"));
  console.log(color("  " + "─".repeat(34), "gray"));
  console.log();
};

const flip = () => Math.random() < 0.5 ? 0 : 1;

const printResult = result => {
  const label = result === 1 ? "HEADS" : "TAILS";
  const resultColor = result === 1 ? "green" : "yellow";

  console.log(`  ${color("RESULT", "dim")}  ${color(String(result), "bold", resultColor)} ${color(label, "bold", resultColor)}`);
};

const printStatistics = (heads, tails, total) => {
  const headsPercent = total ? (heads / total) * 100 : 0;
  const tailsPercent = total ? (tails / total) * 100 : 0;
  const deviation = Math.abs(headsPercent - 50);

  console.log();
  console.log(color("  STATISTICS", "bold", "cyan"));
  console.log(color("  " + "─".repeat(34), "gray"));
  console.log(`  ${color("Total flips", "white")}  ${color(formatNumber(total), "bold")}`);
  console.log(`  ${color("Heads (1)", "green")}    ${formatNumber(heads)} ${color(`(${headsPercent.toFixed(2)}%)`, "dim")}`);
  console.log(`  ${color("Tails (0)", "yellow")}   ${formatNumber(tails)} ${color(`(${tailsPercent.toFixed(2)}%)`, "dim")}`);
  console.log(`  ${color("Deviation", "white")}   ${deviation.toFixed(2)}%`);
  console.log();

  const barWidth = 24;
  const headsBar = Math.round((heads / (total || 1)) * barWidth);
  const tailsBar = barWidth - headsBar;

  console.log(
    `  ${color("1", "green")} ${color("█".repeat(headsBar), "green")}${color("░".repeat(tailsBar), "gray")} ${color("0", "yellow")}`
  );
  console.log();
};

const printHelp = () => {
  console.log(color("  USAGE", "bold", "cyan"));
  console.log("  node coinflip.js [options]");
  console.log();
  console.log(color("  OPTIONS", "bold", "cyan"));
  console.log(`  ${color("-n, --count <number>", "green")}  Number of flips`);
  console.log(`  ${color("-h, --help", "green")}          Show help`);
  console.log(`  ${color("-v, --version", "green")}       Show version`);
  console.log();
  console.log(color("  EXAMPLES", "bold", "cyan"));
  console.log("  node coinflip.js");
  console.log("  node coinflip.js --count 100");
  console.log("  node coinflip.js -n 10000");
  console.log();
};

const parseArguments = args => {
  let count = 1;

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    if (arg === "--help" || arg === "-h") {
      return { action: "help" };
    }

    if (arg === "--version" || arg === "-v") {
      return { action: "version" };
    }

    if (arg === "--count" || arg === "-n") {
      const value = args[++i];

      if (value === undefined || !/^\d+$/.test(value)) {
        throw new Error("Count must be a positive integer.");
      }

      count = Number(value);

      if (!Number.isSafeInteger(count) || count < 1 || count > 10000000) {
        throw new Error("Count must be between 1 and 10,000,000.");
      }

      continue;
    }

    throw new Error(`Unknown option: ${arg}`);
  }

  return { action: "run", count };
};

const main = () => {
  let options;

  try {
    options = parseArguments(process.argv.slice(2));
  } catch (error) {
    console.error(color(`\n  Error: ${error.message}\n`, "red"));
    process.exitCode = 1;
    return;
  }

  if (options.action === "help") {
    printHeader();
    printHelp();
    return;
  }

  if (options.action === "version") {
    console.log(`CoinFlip v${VERSION}`);
    return;
  }

  printHeader();

  if (options.count === 1) {
    const result = flip();
    printResult(result);
    printStatistics(result === 1 ? 1 : 0, result === 0 ? 1 : 0, 1);
    return;
  }

  let heads = 0;
  let tails = 0;

  for (let i = 0; i < options.count; i++) {
    if (flip() === 1) {
      heads++;
    } else {
      tails++;
    }
  }

  printStatistics(heads, tails, options.count);
};

main();
