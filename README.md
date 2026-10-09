<div align="center">CoinFlip

A Minimal Binary Random Simulator for Node.js

A lightweight, dependency-free command-line application that simulates coin flips using binary outcomes, "0" and "1".

<br>"JavaScript" (https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=000000)
"Node.js" (https://img.shields.io/badge/Node.js-18%2B-339933?style=flat-square&logo=node.js&logoColor=FFFFFF)
"Dependencies" (https://img.shields.io/badge/Dependencies-None-2EA44F?style=flat-square)
"License" (https://img.shields.io/badge/License-MIT-007EC6?style=flat-square)

0 or 1. Nothing in between.

</div>---

Overview

CoinFlip is a simple command-line utility written in JavaScript that generates random binary outcomes and provides statistical summaries for multiple trials.

Designed to be lightweight and straightforward, it runs directly on Node.js without external packages or additional setup.

Features

- Binary Outcomes: Generates "0" or "1" for each flip.
- Batch Simulation: Simulates multiple flips in a single execution.
- Statistical Analysis: Calculates the frequency and percentage of each outcome.
- Deviation Measurement: Measures the absolute difference between the observed heads percentage and the expected 50%.
- Colored Output: Uses ANSI escape codes for readable terminal output.
- Command-Line Arguments: Supports configurable flip counts, help, and version information.
- Zero Dependencies: Uses built-in JavaScript and Node.js functionality.
- Single-File Design: The entire application is contained in one JavaScript file.

Requirements

- "Node.js" (https://nodejs.org/) 18 or later.

No additional dependencies are required.

Installation

Clone the repository:

git clone https://github.com/fouad-salehi/coinflip.git

Navigate to the project directory:

cd coinflip

Usage

Single Flip

Run a single coin flip:

node coinflip.js

Example output:

COINFLIP v2.0.0
Binary Random Simulator

RESULT  1 HEADS

STATISTICS
──────────────────────────────────
Total flips  1
Heads (1)    1 (100.00%)
Tails (0)    0 (0.00%)
Deviation    50.00%

The result is randomly generated and will vary between executions.

Multiple Flips

Simulate 100 flips:

node coinflip.js --count 100

Or use the shorthand option:

node coinflip.js -n 100

Large-Scale Simulation

Run 10,000 flips:

node coinflip.js --count 10000

The application reports the total number of trials, the frequency of each outcome, their percentages, and the deviation from the expected heads percentage.

Help

Display available commands:

node coinflip.js --help

Version

Display the application version:

node coinflip.js --version

Command-Line Options

Option| Description
"-n", "--count <number>"| Set the number of flips
"-h", "--help"| Display usage instructions
"-v", "--version"| Display the current version

The flip count must be an integer between "1" and "10,000,000".

How It Works

CoinFlip uses JavaScript's built-in "Math.random()" function to generate each binary outcome.

const flip = () => Math.random() < 0.5 ? 0 : 1;

Each trial produces one of two possible results:

Value| Outcome
"0"| Tails
"1"| Heads

For multiple trials, the application counts both outcomes and calculates their percentages.

Statistical Deviation

The absolute deviation from the expected heads percentage is calculated as:

Deviation = |Observed Heads Percentage - 50|

A deviation closer to zero indicates that the observed heads percentage is closer to the expected 50% for a fair coin. Small samples can naturally produce larger deviations.

Project Structure

coinflip/
├── coinflip.js
└── README.md

The application intentionally keeps its implementation in a single JavaScript file.

Limitations

- Results are pseudorandom and are not intended for cryptographic use.
- Statistical results may vary between executions.
- A percentage close to 50% is not guaranteed, especially with a small number of flips.
- ANSI colors depend on terminal compatibility.

Contributing

Contributions, suggestions, and improvements are welcome.

1. Fork the repository.
2. Create a branch for your changes.
3. Implement your improvement.
4. Submit a pull request for review.

For substantial changes, consider opening an issue first to discuss the proposed implementation.

License

This project is distributed under the MIT License. See the "LICENSE" file for details.

---

<div align="center">CoinFlip

Heads or tails. Leave it to chance.

</div>
