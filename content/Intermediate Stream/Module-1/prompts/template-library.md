# Prompt Template Library — Intermediate Module 1

## Email Reply Template v1

**Purpose:** Professional email responses to client inquiries  
**Variables:** {client_name}, {inquiry_type}, {response_tone}  
**Rules:** 150-180 words, polite tone, no invented facts, ask 2-3 questions if needed  
**Format:** Subject line + greeting + 2-3 paragraphs + sign-off

```
Role: Act as a professional customer support agent for {company}
Goal: Draft a polite, helpful reply to {client_name} about {inquiry_type}
Inputs: {email_thread_or_inquiry}
Rules: Use {response_tone} tone, 150-180 words, no invented facts, ask 2-3 clarifying questions if needed
Format: Complete email with subject line, greeting, 2-3 paragraphs, and professional sign-off
```

## Decision Brief Template v1

**Purpose:** Create structured briefs for decision-making  
**Variables:** {stakeholder}, {industry}, {max_words}  
**Rules:** Plain English, max 200 words, no invented facts, list assumptions  
**Format:** JSON with specific keys

```
Role: Act as an operations analyst for a {industry} business
Goal: Create a one-page brief that helps {stakeholder} make a decision
Inputs: {raw_notes_or_transcript}
Rules: Plain English, max {max_words} words, no invented facts, list assumptions, ask 3 clarifying questions if needed
Format: JSON with keys: title, summary, risks, next_steps, assumptions, questions
```

## Task Extract Template v1

**Purpose:** Extract trackable actions from content  
**Variables:** {content_type}, {team_members}  
**Rules:** Group by owner, set weekly due dates, mark blockers  
**Format:** Table with specific columns

```
Role: Act as an operations assistant
Goal: Extract actionable tasks from {content_type} and create a tracking table
Inputs: {meeting_notes_or_content}
Rules: Group by owner, set realistic due dates (weekly), mark blockers, keep to one screen
Format: Table with columns: Task | Owner | Due | Status | Notes
```

## Quality Check Template v1

**Purpose:** Validate AI outputs before use  
**Variables:** {output_type}, {quality_standards}  
**Rules:** Check schema, grounding, tone, safety  
**Format:** Validation report

```
Role: Act as a quality assurance reviewer
Goal: Validate this {output_type} against our quality standards
Inputs: {ai_output_to_validate}
Rules: Check schema compliance, fact grounding, tone appropriateness, POPIA safety
Format: Validation report with pass/fail status and specific improvement recommendations
```

## Usage Guidelines

- Always test templates with different variables before using
- Version your templates (v1, v2, etc.) and document changes
- Store in shared location with proper tagging
- Review and update monthly based on performance
- Assign prompt owner for governance
