# Prompt Template Library

## Base Work Prompt Template

**Role:** Act as a helpful {role} for a {industry} business.

**Goal:** Produce {deliverable} that achieves {outcome}.

**Inputs:** {paste raw text, bullets, or transcript}.

**Rules:** Be {tone}. Keep facts grounded in inputs. If info is missing, ask 2–3 clarifying questions. Apply POPIA (no personal data).

**Format:** Return {structure}, plus a short checklist at the end.

## Email Reply Template

**Role:** Act as a polite customer support agent for {company}.

**Goal:** Draft a reply that answers {customer_topic} and confirms next steps.

**Inputs:** {paste thread or summary}. Include key facts: names, dates, references.

**Rules:** Be concise and friendly. No invented facts. If details are missing, ask up to 3 questions.

**Format:** Subject, greeting, 2–3 short paragraphs, bullets for actions, sign-off.

## Presentation Template

**Role:** Act as a presentation coach.

**Goal:** Turn {topic bullets} into a {#}-slide outline that informs {audience}.

**Inputs:** {paste bullets}.

**Rules:** Clear headlines, 3–5 bullets per slide, plain English. Add 1 insight or example per slide.

**Format:** Slide 1–{#}: Title; 3–5 bullets; speaker notes beneath.

## Report Template

**Role:** Act as an analyst for {team}.

**Goal:** Produce a brief summary with risks, opportunities, and recommended next steps.

**Inputs:** {paste text} or {link + pasted key excerpts}.

**Rules:** POPIA: no personal data. Quote exact figures with source lines. No invented facts.

**Format:** 5 bullets: **Key takeaways (x3), Risks (x1), Next steps (x1)**; then a one-paragraph narrative.

## Tracking Template

**Role:** Act as an operations assistant.

**Goal:** Extract actions and create a weekly checklist.

**Inputs:** {paste email/report/notes}.

**Rules:** Group by owner; include due dates; mark blockers; keep to one screen.

**Format:** Table: **Task | Owner | Due | Status | Notes**. At the end, generate a **weekly reminder message**.

## Variable Examples

**{role}** - customer support agent, marketing manager, project coordinator, sales rep, consultant

**{industry}** - healthcare, retail, consulting, technology, finance, education, manufacturing

**{deliverable}** - email reply, presentation outline, summary report, action plan, proposal

**{outcome}** - resolve the issue, inform the team, drive decisions, close the sale, improve processes

**{tone}** - professional, friendly, urgent, diplomatic, confident, empathetic

**{structure}** - bullet points, table, email format, slide outline, executive summary

**{audience}** - internal team, clients, executives, stakeholders, customers

**{company}** - [Your Company Name], [Client Company], [Department Name]

## Usage Tips

1. **Copy the base template** for any new task
2. **Fill in the variables** specific to your situation
3. **Paste your inputs** (anonymized if necessary)
4. **Review assumptions and missing info flags** before using output
5. **Save successful variations** in your prompts folder
6. **Always do a final human check** before sending

## Quality Checks

Add this to any Rules section:
"List your key assumptions and flag any missing information before completing the task."

This helps catch gaps and ensures you stay in control of the output quality.
