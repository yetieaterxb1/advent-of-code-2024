# Advent of Code 2024 🎄

Solutions for Advent of Code 2024 in multiple languages (TypeScript, Go, and Swift).

❄️ ⛄️ ❄️ ⛄️ ❄️ ⛄️ ❄️ ⛄️ ❄️ ⛄️ ❄️ ⛄️ ❄️ ⛄️ ❄️ ⛄️

## Setup

1. Create a `.env` file with your Advent of Code session token:

```
AOC_SESSION=your_session_token_here
```

2. Install dependencies:

```bash
npm install
```

3. Make sure you have the following installed:

-   Node.js and npm
-   Go
-   Swift

4. Set up the command shortcuts:

```bash
./scripts/setup-commands
source ~/.zshrc  # or restart your terminal
```

❄️ ⛄️ ❄️ ⛄️ ❄️ ⛄️ ❄️ ⛄️ ❄️ ⛄️ ❄️ ⛄️ ❄️ ⛄️ ❄️ ⛄️

## Usage

### Running Solutions ⛄️

You can run solutions using language-specific commands:

1. TypeScript:

```bash
aoc-ts test <day>  # Run with test input
aoc-ts day <day>   # Run with actual input
```

2. Go:

```bash
aoc-go test <day>  # Run with test input
aoc-go day <day>   # Run with actual input
```

3. Swift:

```bash
aoc-swift test <day>  # Run with test input
aoc-swift day <day>   # Run with actual input
```

❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️

### Fetching Puzzle Inputs ⛄️

To fetch all available puzzle inputs and create solution templates:

```bash
npm run fetch
```

This will:

-   Download input for all available days
-   Create solution files for each language
-   Skip days that have already been fetched

❄️ ⛄️ ❄️ ⛄️ ❄️ ⛄️ ❄️ ⛄️ ❄️ ⛄️ ❄️ ⛄️ ❄️ ⛄️ ❄️ ⛄️

## Project Structure

```
.
├── typescript/
│   └── src/
│       └── day01.ts
├── go/
│   ├── cmd/
│   │   └── main.go
│   └── solutions/
│       └── day01.go
├── swift/
│   └── src/
│       └── day01.swift
├── input/
│   └── day01.txt
├── test-input/
│   └── day01.txt
└── scripts/
    ├── fetch.ts
    ├── run.ts
    ├── test.ts
    └── setup-commands
```

❄️ ⛄️ ❄️ ⛄️ ❄️ ⛄️ ❄️ ⛄️ ❄️ ⛄️ ❄️ ⛄️ ❄️ ⛄️ ❄️ ⛄️

## Solution Templates

Each language has a template with `part1` and `part2` functions that you need to implement for each day's puzzle.

❄️ ⛄️ ❄️ ⛄️ ❄️ ⛄️ ❄️ ⛄️ ❄️ ⛄️ ❄️ ⛄️ ❄️ ⛄️ ❄️ ⛄️

## Getting Started with GitHub

1. Create a new repository on GitHub (don't initialize with any files)

2. Initialize and push your local repository:

```bash
git init
git add .
git commit -m "Initial commit: Project setup"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

Note: The `.gitignore` file is set up to exclude:

-   Your `.env` file with session token
-   Puzzle input files in `input/` and `test-input/`
-   Build artifacts and dependencies
-   System and IDE files

❄️ ⛄️ ❄️ ⛄️ ❄️ ⛄️ ❄️ ⛄️ ❄️ ⛄️ ❄️ ⛄️ ❄️ ⛄️ ❄️ ⛄️
