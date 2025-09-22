# Mini-Assignment (Intermediate, Module 4)

**Goal:** Pick one live workflow from Module 3 and **productionize** it with proper measurement, governance, and handover procedures.

**Time:** 60–90 min

## Objective

Transform a working automation into a production-ready system that can be safely scaled across teams.

## Steps

### Step 1: Select and analyze your workflow (10 min)

Choose one automation from Module 3 that you want to productionize:

- Lead handling workflow
- Email processing automation
- Document analysis system
- Or any other working automation

**Analyze current state:**

- What's working well?
- What needs improvement?
- What are the current pain points?

### Step 2: Create KPI tracking system (15 min)

Set up measurement for your workflow:

**Define outcome KPIs:**

- Time ROI (minutes saved × volume)
- Quality metrics (rework rate, error rate)
- Throughput (items processed per day/week)
- Adoption (% of target users active)
- Cost per item

**Create baseline measurement:**

- Track current performance for 1 week
- Calculate baseline metrics
- Set improvement targets (+30-50% throughput or -40-60% time per item)

### Step 3: Implement comprehensive logging (10 min)

Set up standardized logging with the minimal schema:

- timestamp, workflow_name, trigger, owner
- input_size, outcome, approval_time_sec
- model_tier, tokens_or_cost, minutes_saved, notes

**Ensure POPIA compliance:**

- Anonymize personal data
- Set retention periods (90-180 days)
- Implement access controls

### Step 4: Create one-page policy (15 min)

Develop a clear, actionable policy covering:

- Allowed and banned uses (with examples)
- Data rules (green/yellow/red classification)
- Approval requirements
- Citation and grounding rules
- Retention and deletion policies
- Incident response procedures

**Include a short quiz** for team sign-off and understanding.

### Step 5: Create comprehensive SOP (15 min)

Write a one-page SOP including:

- Purpose and expected outcomes
- Step-by-step process (2-6 steps with screenshots)
- Approval checklist (tone, facts, format, safety)
- Common errors and fixes
- Owner and backup contacts
- Disable/rollback instructions

### Step 6: Prepare handover pack (10 min)

Compile everything needed for team handover:

- Complete SOP
- Prompt components (with versions)
- Dashboard link (monitoring access)
- Log access (data and analytics)
- Contact information
- Policy and quiz

### Step 7: Make scale/sunset decision (5 min)

Based on your analysis, decide:

- **Scale**: Quality is stable, ROI is clear, team is ready
- **Fix**: Needs improvement before scaling
- **Sunset**: Low usage, high rework, better alternatives exist

**Document your rationale** with supporting data.

## Deliverables

Submit:

1. **KPI sheet** with baseline vs this week comparison
2. **One-page policy** + signed quiz acknowledgment screenshot
3. **SOP (one page)** + **handover pack** (prompts, dashboards, logs)
4. **Monthly review note** (1 page): risks, improvements, budget status
5. **Scale/sunset decision** with rationale and supporting data

## AI Rubric (Behind the Scenes)

- **Governance & safety (40%)** — policy clarity, approvals, retention, POPIA
- **Operational readiness (30%)** — SOP quality, handover completeness
- **Impact evidence (30%)** — KPIs demonstrate value; decisions justified

## Success Criteria

- Clear, measurable KPIs with baseline data
- Comprehensive policy that's easy to follow
- Complete SOP with all necessary details
- Ready-to-use handover pack
- Data-driven scale/sunset decision
- Evidence of business value and impact

## Pro Tips

- Start with simple KPIs and expand over time
- Make policies practical, not theoretical
- Include visual guides in SOPs
- Test handover with someone unfamiliar with the system
- Use data to support all decisions
- Focus on what drives real business value
