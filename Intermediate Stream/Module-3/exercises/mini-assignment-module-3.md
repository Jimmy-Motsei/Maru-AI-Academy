# Mini-Assignment (Intermediate, Module 3)

**Goal:** Build a **lead handling** automation with triage, AI reply, human approval, meeting brief, CRM sync, logging, and a basic dashboard.

**Time:** 60–90 min

## Objective

Create a complete automation workflow that demonstrates all the patterns and best practices covered in the module.

## Steps

### Step 1: Design your automation flow (15 min)

Create a flow diagram showing:
- **Trigger**: How leads enter the system
- **Triage**: AI classification (intent, urgency, fit)
- **Draft**: AI-generated reply
- **Approval**: Human review step
- **Action**: Send approved reply
- **Meeting brief**: AI-generated JSON summary
- **Log**: Record in tracking system
- **Sync**: Update CRM

### Step 2: Build the automation components (30 min)

Create the following components:

#### Triage Classifier
```
Role: Act as a lead classification assistant
Goal: Classify incoming leads with structured labels
Inputs: {lead_inquiry}
Rules: Output only the requested labels, no additional text
Format: JSON with keys: intent, urgency, fit, confidence
```

#### Reply Draft Template
```
Role: Act as a sales representative for {company}
Goal: Draft a personalized reply to {lead_name} about {intent}
Inputs: {lead_inquiry} and {triage_results}
Rules: {tone} tone, max {word_limit} words, no invented facts
Format: Complete email with subject, greeting, body, sign-off
```

#### Meeting Brief Generator
```
Role: Act as a sales operations analyst
Goal: Create a structured brief from the lead conversation
Inputs: {conversation_thread}
Rules: Extract key information, identify risks and opportunities
Format: JSON with keys: summary, questions, risks, next_steps
```

### Step 3: Set up monitoring and logging (15 min)

Create a tracking system (spreadsheet or simple database) with columns:
- Timestamp
- Lead name/email
- Intent, urgency, fit
- Owner assigned
- Approval time
- Outcome
- Minutes saved
- Cost

### Step 4: Build a basic dashboard (10 min)

Create simple charts showing:
- Daily lead volume
- Success rate
- Average approval time
- Minutes saved per day
- Cost per lead

### Step 5: Test with sample data (10 min)

Run 5-10 test leads through your automation:
- Test different intents (demo, support, other)
- Test edge cases (missing info, unclear requests)
- Verify all steps work correctly
- Check logging and dashboard updates

### Step 6: Create documentation (10 min)

Write a one-page SOP including:
- Purpose and business value
- Step-by-step process
- Approval requirements
- Data handling rules
- Owner and responsibilities
- Rollback procedures

## Deliverables

Submit:
1. **Flow diagram** or screenshots of each step
2. **Prompts/components** used (triage classifier, reply draft, meeting brief JSON)
3. **Log extract** (≥20 rows) with minutes saved
4. **Dashboard** (chart/pivot table)
5. **One-page SOP** + rollback plan

## AI Rubric (Behind the Scenes)

- **Reliability & safety (40%)** — approval, error handling, POPIA-friendly logs
- **Quality & consistency (30%)** — structured outputs; stable triage; clear prompts
- **Impact (30%)** — measurable minutes saved; clean dashboard

## Success Criteria

- Complete end-to-end automation flow
- All components properly documented
- Human approval step included
- Comprehensive logging and tracking
- Basic dashboard with key metrics
- Clear SOP and rollback procedures
- Evidence of time savings

## Pro Tips

- Start with a simple flow, then add complexity
- Test thoroughly with different lead types
- Focus on error handling and edge cases
- Make sure logging captures all important data
- Keep the dashboard simple but informative
- Document everything clearly for future maintenance
