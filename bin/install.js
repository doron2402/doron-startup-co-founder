#!/usr/bin/env node
// Copies this skill into a Claude Code skills directory.
//   npx doron-startup-co-founder            -> ~/.claude/skills/doron-startup-co-founder
//   npx doron-startup-co-founder --project  -> ./.claude/skills/doron-startup-co-founder
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

const SKILL_NAME = "doron-startup-co-founder";
const FILES = ["SKILL.md", "references"];

const args = process.argv.slice(2);
if (args.includes("--help") || args.includes("-h")) {
  console.log(`Usage: npx ${SKILL_NAME} [--project] [--force]

  (default)   install to ~/.claude/skills/${SKILL_NAME} (all projects)
  --project   install to ./.claude/skills/${SKILL_NAME} (this project only)
  --force     overwrite an existing install`);
  process.exit(0);
}

const baseDir = args.includes("--project")
  ? path.join(process.cwd(), ".claude", "skills")
  : path.join(os.homedir(), ".claude", "skills");
const target = path.join(baseDir, SKILL_NAME);

if (fs.existsSync(target) && !args.includes("--force")) {
  console.error(`${target} already exists. Re-run with --force to overwrite it.`);
  process.exit(1);
}

const packageRoot = path.join(__dirname, "..");
fs.mkdirSync(target, { recursive: true });
for (const file of FILES) {
  fs.cpSync(path.join(packageRoot, file), path.join(target, file), { recursive: true });
}

console.log(`Installed the ${SKILL_NAME} skill to ${target}`);
console.log(`Start a new Claude Code session and say "be my co-founder" or "I have an idea".`);
