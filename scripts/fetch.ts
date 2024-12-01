const axios = require("axios");
const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

const SESSION_TOKEN = process.env.AOC_SESSION;
const YEAR = 2024;

async function fetchInput(day: number): Promise<string> {
    const url = `https://adventofcode.com/${YEAR}/day/${day}/input`;
    const response = await axios.get(url, {
        headers: {
            Cookie: `session=${SESSION_TOKEN}`,
        },
    });
    return response.data;
}

async function createDayFiles(day: number, input: string) {
    const dayStr = String(day).padStart(2, "0");
    const languages = ["typescript", "go", "swift"];

    // Save input
    const inputDir = path.join(process.cwd(), "input");
    if (!fs.existsSync(inputDir)) {
        fs.mkdirSync(inputDir);
    }
    fs.writeFileSync(path.join(inputDir, `day${dayStr}.txt`), input);

    // Create solution files for each language
    for (const lang of languages) {
        let solutionDir;
        if (lang === "go") {
            solutionDir = path.join(process.cwd(), "go", "solutions");
        } else {
            solutionDir = path.join(process.cwd(), lang, "src");
        }

        if (!fs.existsSync(solutionDir)) {
            fs.mkdirSync(solutionDir, { recursive: true });
        }

        const templates: Record<string, string> = {
            typescript: `export function part1(input: string): number {
    // TODO: Implement part 1
    return 0;
}

export function part2(input: string): number {
    // TODO: Implement part 2
    return 0;
}`,
            go: `package solutions

func Part1(input string) int {
    // TODO: Implement part 1
    return 0
}

func Part2(input string) int {
    // TODO: Implement part 2
    return 0
}`,
            swift: `import Foundation

func part1(input: String) -> Int {
    // TODO: Implement part 1
    return 0
}

func part2(input: String) -> Int {
    // TODO: Implement part 2
    return 0
}`,
        };

        const extension = lang === "typescript" ? "ts" : lang === "go" ? "go" : "swift";
        const filePath = path.join(solutionDir, `day${dayStr}.${extension}`);

        if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, templates[lang]);
            console.log(`Created ${lang} solution file for day ${day}`);
        }
    }
}

async function main() {
    const currentDay = new Date().getDate();
    const maxDay = Math.min(25, currentDay);

    for (let day = 1; day <= maxDay; day++) {
        const dayStr = String(day).padStart(2, "0");
        const inputPath = path.join(process.cwd(), "input", `day${dayStr}.txt`);

        if (!fs.existsSync(inputPath)) {
            try {
                console.log(`Fetching input for day ${day}...`);
                const input = await fetchInput(day);
                await createDayFiles(day, input);
                console.log(`Successfully fetched and created files for day ${day}`);
            } catch (error: any) {
                console.error(`Error fetching day ${day}:`, error?.message || "Unknown error");
            }
        }
    }
}

main().catch((error: any) => {
    console.error("Fatal error:", error?.message || "Unknown error");
    process.exit(1);
});
