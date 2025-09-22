# Cursor/Copilot Prompts — Quick Start

**Task:** Create a Node.js function that takes a JSON array of leads and returns scored segments using the same rubric.

> System/Instruction: “You are a senior TypeScript engineer. Write clean, typed code, export a single function, include JSDoc and simple tests.”

> User:
- “Inputs: array of `{ message: string, budget?: number | string, urgency?: string }`”
- “Output: array of `{ score: number, segment: 'Hot'|'Warm'|'Nurture' }`”
- “Implement a pure function, no API calls. Add TODOs where LLM scoring would plug in.”
