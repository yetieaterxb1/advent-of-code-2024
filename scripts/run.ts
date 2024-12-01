import type { ExecSyncOptions } from "child_process";
const fs = require("fs") as typeof import("fs");
const path = require("path") as typeof import("path");
const { execSync } = require("child_process") as typeof import("child_process");

const [, , dayArg, language = "typescript"] = process.argv;
const day = dayArg.replace("day", "");
const dayStr = day.padStart(2, "0");

if (!["typescript", "go", "swift"].includes(language)) {
    console.error("❌ Invalid language. Must be typescript, go, or swift");
    process.exit(1);
}

const inputPath = path.join(process.cwd(), "input", `day${dayStr}.txt`);
if (!fs.existsSync(inputPath)) {
    console.error(`❌ No input file found for day ${day}`);
    process.exit(1);
}

const input = fs.readFileSync(inputPath, "utf-8");

async function runTypeScript(day: string) {
    console.log("\n🚀 Running TypeScript solution...");
    const solution = require(path.join(process.cwd(), "typescript", "src", `day${dayStr}.ts`));
    console.log("✨ Results:");
    console.log("🎁 Part 1:", solution.part1(input));
    console.log("🎁 Part 2:", solution.part2(input));
}

async function runGo(day: string) {
    console.log("\n🚀 Running Go solution...");
    const tempFile = path.join(process.cwd(), "go", "cmd", "main.go");
    const solutionFile = path.join(process.cwd(), "go", "solutions", `day${dayStr}.go`);

    const mainContent = `
package main

import (
    "fmt"
    "aoc2024/solutions"
)

func main() {
    input := "${input.replace(/\n/g, "\\n")}"
    fmt.Printf("🎁 Part 1: %d\\n", solutions.Part1(input))
    fmt.Printf("🎁 Part 2: %d\\n", solutions.Part2(input))
}`;

    fs.writeFileSync(tempFile, mainContent);

    const execOptions: ExecSyncOptions = { stdio: "inherit" };
    try {
        console.log("✨ Results:");
        execSync("cd go && go run cmd/main.go", execOptions);
    } finally {
        fs.unlinkSync(tempFile);
    }
}

async function runSwift(day: string) {
    console.log("\n🚀 Running Swift solution...");
    const tempFile = path.join(process.cwd(), "swift", "src", "main.swift");
    const solutionFile = path.join(process.cwd(), "swift", "src", `day${dayStr}.swift`);

    const mainContent = `
import Foundation

let input = """
${input}
"""

print("🎁 Part 1:", part1(input: input))
print("🎁 Part 2:", part2(input: input))
`;

    fs.writeFileSync(tempFile, mainContent);

    const execOptions: ExecSyncOptions = { stdio: "inherit" };
    try {
        console.log("✨ Results:");
        execSync(`cd swift/src && swift ${path.basename(solutionFile)} main.swift`, execOptions);
    } finally {
        fs.unlinkSync(tempFile);
    }
}

async function main() {
    console.log(`\n❄️  Running solution for Day ${day} using ${language} ❄️`);
    console.log("🎅 Using input from:", inputPath);

    try {
        switch (language) {
            case "typescript":
                await runTypeScript(day);
                break;
            case "go":
                await runGo(day);
                break;
            case "swift":
                await runSwift(day);
                break;
        }
        console.log("\n🌟 All done! Happy coding! 🎄");
    } catch (error: any) {
        console.error("\n❌ Error running solution:", error?.message || "Unknown error");
        process.exit(1);
    }
}

main().catch((error: any) => {
    console.error("\n❌ Fatal error:", error?.message || "Unknown error");
    process.exit(1);
});
