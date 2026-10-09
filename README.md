CoinFlip

A minimal binary random simulator for Node.js.

CoinFlip is a lightweight command-line application that simulates coin flips using binary outcomes: "0" and "1". It supports batch simulations, statistical summaries, and colored terminal output.

"JavaScript" (https://img.shields.io/badge/JavaScript-ES6%2B-yellow)
"Node.js" (https://img.shields.io/badge/Node.js-18%2B-green)
"Dependencies" (https://img.shields.io/badge/Dependencies-None-blue)

Features

- Single coin flip with a binary result.
- Batch simulation with a configurable number of flips.
- Statistics for both outcomes.
- Percentage calculations and deviation measurement.
- Colored terminal output using ANSI escape codes.
- Command-line arguments for count, help, and version.
- No external dependencies.
- Single-file implementation.

Requirements

- Node.js 18 or later.

Installation

Clone the repository:

git clone https://github.com/fouad-salehi/coinflip.git

Navigate to the project directory:

cd coinflip

Usage

Single Flip

node coinflip.js

The application generates one random result:

COINFLIP v2.0.0
Binary Random Simulator

RESULT  1 HEADS

The result can be either "0" (Tails) or "1" (Heads).

Multiple Flips

Run 100 flips:

node coinflip.js --count 100

Or use the shorthand option:

node coinflip.js -n 100

Run 10,000 flips:

node coinflip.js --count 10000

The application displays the total number of flips, the count and percentage of each outcome, and the deviation from the expected heads percentage.

Help

node coinflip.js --help

Version

node coinflip.js --version

Command-Line Options

Option| Description
"-n", "--count <number>"| Set the number of flips
"-h", "--help"| Display help information
"-v", "--version"| Display the application version

The number of flips must be between "1" and "10,000,000".

How It Works

CoinFlip uses JavaScript's built-in "Math.random()" function to generate binary outcomes.

const flip = () => Math.random() < 0.5 ? 0 : 1;

Each flip produces one of two possible results:

Value| Outcome
"0"| Tails
"1"| Heads

Statistics

For multiple flips, CoinFlip calculates the percentage of each outcome.

The deviation is the absolute difference between the observed heads percentage and the expected "50%".

Deviation = |Heads Percentage - 50|

Actual results may vary between runs. A small deviation is not guaranteed, particularly for small sample sizes.

Project Structure

coinflip/
├── coinflip.js
└── README.md

Limitations

- Results are pseudorandom and are not suitable for cryptographic purposes.
- Statistical results vary between executions.
- ANSI colors require a compatible terminal.

Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a branch for your changes.
3. Make your changes.
4. Submit a pull request.

License

Choose a license for this project and include its text in a "LICENSE" file before claiming a specific license here.

---

CoinFlip — Heads or tails. Leave it to chance.
