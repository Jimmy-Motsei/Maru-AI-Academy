# Intermediate Track — Module 1: From ad‑hoc prompts to repeatable workflows

**Who this is for:** Power users / team leads comfortable with spreadsheets and light configuration.  
**Module goal:** Turn one‑off prompting into **reusable, reliable templates** that produce consistent, business‑ready outputs.

Format per section:
- **Section heading**
- **Video‑ready instructor script** (3–5 min, plain English but deeper)
- **Short quiz** (3 questions) with correct answers + brief rationales)

---

## Section 1: Design prompts as templates (variables, constraints, outputs)

### Instructor Script
Welcome to Intermediate Module 1. Our aim: design prompts that behave like **mini‑apps**. A good template has three traits:

1) **Variables**: named placeholders to swap fast — `{client}`, `{deadline}`, `{tone}`, `{country}`, `{max_words}`.  
2) **Constraints**: firm rules — word limits, tone, banned phrases, “**no invented facts**,” “**ask for missing info**.”  
3) **Structured outputs**: predictable shapes — email blocks, bullet lists, or even **JSON** you can feed into a tool.

**Example: Decision Brief Template**
- **Role:** Act as an operations analyst for a {industry} business in {country}.  
- **Goal:** Create a one‑page brief that helps {stakeholder} make a decision.  
- **Inputs:** {raw notes / transcript / bullets}.  
- **Rules:** Plain English; max {max_words} words; **no invented facts**; list **assumptions**; ask **3 clarifying questions** if needed.  
- **Format:** JSON with keys: `title`, `summary`, `risks`, `next_steps`, `assumptions`, `questions`.

**Why JSON?** Tools can read it. That means you can chain steps without manual editing.

### Quiz (3 questions)
1) Variables exist to:  
   **B. Swap context quickly without rewriting the whole prompt.**  
   *Rationale:* Reuse at speed.

2) “No invented facts; ask when unsure” is a:  
   **B. Constraint.**  
   *Rationale:* It governs behavior.

3) Structured output (like JSON) helps because:  
   **C. Other tools can reliably read and use the result.**  
   *Rationale:* Enables automation.

---

## Section 2: Output contracts (how to make AI predictable)

### Instructor Script
Think of the output as a **contract**. If the model agrees to the contract, you can depend on it in a workflow.

**Contract checklist:**
- **Schema:** exact keys/sections (e.g., `title`, `summary`, `risks`).  
- **Types:** strings vs lists; allowed values (e.g., `priority` in {"low","med","high"}).  
- **Limits:** word/character counts; bullet counts.  
- **Validation sentence:** “If you cannot meet the schema, reply with `{"error":"missing_inputs"}` and list needed info.”

**Tighten with examples:** Show **one good example** and **one bad anti‑example** so the model learns what not to do.

**Tip:** After generating, ask the model to **self‑check**: “Validate your output against the schema. If invalid, fix it.”

### Quiz (3 questions)
1) An “output contract” is mainly about:  
   **B. Defining a schema and rules the AI must follow.**  
   *Rationale:* Predictability.

2) Asking the model to return `{"error":"missing_inputs"}` is useful to:  
   **C. Detect when inputs are insufficient and avoid bad outputs.**  
   *Rationale:* Fail fast.

3) Including a bad example helps because it:  
   **B. Shows the model what to avoid.**  
   *Rationale:* Contrast learning.

---

## Section 3: Data readiness (clean inputs = clean outputs)

### Instructor Script
Great outputs start with **clean inputs**. Use this 4‑step pre‑flight:

1) **Select**: Keep only relevant sections; remove noise.  
2) **Sanitize**: Anonymize names, IDs, exact amounts unless necessary (POPIA).  
3) **Structure**: Convert into bullets, Q&A, or a simple table.  
4) **Signal quality**: Tell the model what’s trustworthy (“numbers in the table are authoritative”).

**Template snippet:**  
“**Use only the provided inputs.** If details are missing, ask questions first. If there are conflicting numbers, flag them in `assumptions`.”

**Reality check:** Even small cleanup boosts accuracy and reduces hallucinations.

### Quiz (3 questions)
1) The biggest driver of output quality is:  
   **B. Clean, relevant, well‑structured inputs.**  
   *Rationale:* Garbage in → garbage out.

2) POPIA‑friendly prep includes:  
   **B. Anonymizing personal data where not required.**  
   *Rationale:* Data minimization.

3) If numbers conflict, you should:  
   **B. Flag the conflict and list assumptions.**  
   *Rationale:* Transparency.

---

## Section 4: Turning prompts into components (libraries & reuse)

### Instructor Script
Stop writing from scratch. Build a **prompt library** and treat each prompt like a **component** you can reuse.

**Component design:**
- **Name**: “Decision Brief v2”, “Email Reply v3”.  
- **Purpose**: when to use it.  
- **Inputs**: required variables.  
- **Rules**: tone, word limits, safety lines.  
- **Format**: schema or block layout.  
- **Example**: one good example output.  
- **Version**: v1, v2, with a change note.

**Storage options:** a shared doc, a repo, or your LMS prompt vault. Add tags (email, slides, summary, analysis).

**Governance:** nominate one **Prompt Owner** per team to review updates monthly.

### Quiz (3 questions)
1) A prompt “component” should always include:  
   **B. Purpose, inputs, rules, and format.**  
   *Rationale:* Clear contract.

2) Versioning prompts helps you:  
   **B. Track improvements and roll back if needed.**  
   *Rationale:* Control & quality.

3) A prompt library should be:  
   **B. Shared and tagged for discoverability.**  
   *Rationale:* Team reuse.

---

## Section 5: From template to workflow (email → brief → tasks)

### Instructor Script
Let’s chain components into a reliable **mini‑workflow**:

**Goal:** Turn an email thread into (1) a client‑ready reply, (2) a decision brief (JSON), and (3) a task table.

**Step A: Email Reply (component)**  
- Role: support agent; Rules: polite, 150–180 words; **no invented facts**; ask 2–3 questions if needed; Format: email blocks.

**Step B: Decision Brief (component)**  
- Role: analyst; Format: JSON (`title`, `summary`, `risks`, `next_steps`, `assumptions`, `questions`); Constraints: max 180 words; cite figures to line numbers if provided.

**Step C: Task Extract (component)**  
- Role: operations assistant; Format: Table `Task | Owner | Due | Status | Notes`; Rules: group by owner, set weekly due dates, mark blockers.

**Hand‑off tip:** Save the JSON/text to a sheet or database; it becomes searchable and trackable.

### Quiz (3 questions)
1) Chaining components gives you:  
   **B. Repeatable multi‑step workflows.**  
   *Rationale:* Scale beyond one prompt.

2) Decision briefs in JSON are useful because:  
   **B. You can feed them into tools or dashboards.**  
   *Rationale:* Machine‑readable.

3) A helpful final format for tracking is a:  
   **B. Task table with Owner and Due.**  
   *Rationale:* Execution focus.

---

## Section 6: Quality gates & human‑in‑the‑loop

### Instructor Script
Intermediate users add **quality gates**. Three layers:

1) **Self‑check**: ask the model to validate schema and list uncertainties.  
2) **Human review**: a person approves customer‑facing outputs.  
3) **Feedback loop**: track issues and update the prompt component monthly.

**Rubric outline for reviewers:**
- Fit‑for‑purpose (does it answer the ask?)  
- Grounding (facts trace to inputs)  
- Tone & length (meets constraints)  
- Safety (no personal data beyond inputs; POPIA respected)

**Policy reminder:** “If in doubt, stop and ask.”

### Quiz (3 questions)
1) A self‑check step asks the model to:  
   **B. Validate its output and fix schema errors.**  
   *Rationale:* First quality gate.

2) Customer‑facing content should be:  
   **B. Approved by a human before sending.**  
   *Rationale:* Accountability.

3) Monthly prompt reviews exist to:  
   **B. Incorporate feedback and retire weak versions.**  
   *Rationale:* Continuous improvement.

---

## Module 1 Mini‑Assignment (Intermediate)

**Task (30–45 min):**  
Convert an email thread or meeting notes into a **three‑component workflow**:
1) Email reply (blocks).  
2) Decision brief (JSON).  
3) Task table for tracking.

**Submit:** the three outputs, your **prompt components** (with variables/constraints/schema), and a short note on **assumptions** & **questions** the model raised.

**AI Rubric focus:**
- **Structure & contracts (40%)** — variables, constraints, JSON validity.  
- **Grounding & safety (30%)** — facts tie to inputs; POPIA‑friendly.  
- **Reusability (30%)** — clarity of components and version labels.

---

### End of Intermediate Module 1
