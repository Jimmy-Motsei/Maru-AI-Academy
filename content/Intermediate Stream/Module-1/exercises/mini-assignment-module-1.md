# Mini-Assignment (Intermediate, Module 1)

**Goal:** Convert an email thread or meeting notes into a **three-component workflow** that produces consistent, business-ready outputs.

**Time:** 30–45 min

## Objective

Transform real work content into:

1. **Email reply** (professional blocks)
2. **Decision brief** (structured JSON)
3. **Task table** (trackable actions)

## Steps

### Step 1: Choose your content (5 min)

Pick one of these from your actual work:

- A client email thread that needs a response
- Meeting notes that require follow-up actions
- A project update that needs communication

**Important:** Anonymize any sensitive data before proceeding.

### Step 2: Create your prompt components (15 min)

Design three reusable prompt components:

#### Component A: Email Reply

- **Name**: "Professional Email Reply v1"
- **Purpose**: Respond to client inquiries professionally
- **Variables**: {client_name}, {inquiry_type}, {response_tone}
- **Rules**: 150-180 words, polite tone, no invented facts, ask 2-3 questions if needed
- **Format**: Subject line + greeting + 2-3 paragraphs + sign-off

#### Component B: Decision Brief

- **Name**: "Decision Brief v1"
- **Purpose**: Create structured briefs for decision-making
- **Variables**: {stakeholder}, {industry}, {max_words}
- **Rules**: Plain English, max 200 words, no invented facts, list assumptions
- **Format**: JSON with keys: title, summary, risks, next_steps, assumptions, questions

#### Component C: Task Extract

- **Name**: "Task Table v1"
- **Purpose**: Extract trackable actions from content
- **Variables**: {content_type}, {team_members}
- **Rules**: Group by owner, set weekly due dates, mark blockers
- **Format**: Table with columns: Task | Owner | Due | Status | Notes

### Step 3: Execute the workflow (15 min)

Run your three components on the same input:

1. **Email Reply**: Generate a professional response
2. **Decision Brief**: Create a structured JSON brief
3. **Task Table**: Extract trackable actions

### Step 4: Quality check (5 min)

- Validate JSON structure
- Check for invented facts
- Ensure all outputs are grounded in inputs
- Verify POPIA compliance (no personal data)

### Step 5: Document and submit (5 min)

Submit:

- Original content (anonymized)
- Your three prompt components (with variables/constraints/schema)
- The three outputs generated
- A brief note on assumptions and questions the model raised
- Time saved estimate (vs. doing this manually)

## AI Rubric (Behind the Scenes)

- **Structure & contracts (40%)** — variables, constraints, JSON validity
- **Grounding & safety (30%)** — facts tie to inputs; POPIA-friendly
- **Reusability (30%)** — clarity of components and version labels

## Success Criteria

- All three components are well-documented and reusable
- JSON output is valid and follows the schema
- No invented facts or personal data in outputs
- Clear task tracking with realistic due dates
- Components can be easily reused for similar content

## Pro Tips

- Test your components with different inputs to ensure reusability
- Save successful components in your prompt library
- Use version numbers to track improvements
- Focus on making components that work across different contexts
