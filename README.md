CoinFlip

A lightweight binary random simulator for Node.js.

CoinFlip is a command-line tool that simulates coin flips using "0" and "1". It supports batch simulations, statistical analysis, and colored terminal output.

"JavaScript" (https://img.shields.io/badge/JavaScript-ES6%2B-yellow?style=flat-square&logo=javascript&logoColor=black)
"Node.js" (https://img.shields.io/badge/Node.js-18%2B-green?style=flat-square&logo=node.js&logoColor=white)
"Dependencies" (https://img.shields.io/badge/Dependencies-None-blue?style=flat-square)

Features

- Binary outcomes: Generates "0" or "1".
- Batch simulation: Run up to 10,000,000 flips.
- Statistical analysis: Calculates counts, percentages, and deviation.
- Colored output: Displays results in the terminal using ANSI colors.
- CLI options: Supports count, help, and version arguments.
- Zero dependencies: Uses built-in Node.js functionality.
- Single-file application: Simple and easy to run.

Requirements

- Node.js 18 or later

Installation

Clone the repository:

git clone https://github.com/fouad-salehi/coinflip.git
cd coinflip

Usage

Single Flip

node coinflip.js

Each execution generates one random result:

- "0" — Tails
- "1" — Heads

Multiple Flips

Run 100 flips:

node coinflip.js --count 100

Or use the shorthand:

node coinflip.js -n 100

Run 10,000 flips:

node coinflip.js --count 10000

Help

node coinflip.js --help

Version

node coinflip.js --version

Command-Line Options

Option| Description
"-n", "--count <number>"| Set the number of flips
"-h", "--help"| Display help information
"-v", "--version"| Display the application version

Count range: "1" to "10,000,000".

How It Works

CoinFlip uses JavaScript's built-in "Math.random()" function to generate binary outcomes.

const flip = () => Math.random() < 0.5 ? 0 : 1;

Each flip produces one of two possible outcomes, with an intended probability of approximately 50% for each.

Statistics

For batch simulations, CoinFlip reports:

- Total flips
- Heads count and percentage
- Tails count and percentage
- Deviation from the expected 50% heads rate

The deviation is calculated as:

"Deviation = |Heads Percentage - 50|"

Results vary between executions. A small deviation is not guaranteed, especially with fewer flips.

Project Structure

coinflip/
├── coinflip.js
└── README.md

Limitations

- Results are pseudorandom and not suitable for cryptographic use.
- Statistical results vary between runs.
- ANSI colors require a compatible terminal.

Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a branch for your changes.
3. Make your changes.
4. Submit a pull request.

License

Add a "LICENSE" file to specify the terms under which this project can be used and distributed.

---

CoinFlip — Heads or tails. Leave it to chance.
