# Automation Templates — Intermediate Module 3

## Triage Classifier Template v1

**Purpose:** Classify incoming leads with structured labels  
**Variables:** {lead_inquiry}, {company_context}  
**Rules:** Output only requested labels, no additional text  
**Format:** JSON with specific keys

```
Role: Act as a lead classification assistant
Goal: Classify incoming leads with structured labels for routing
Inputs: {lead_inquiry} from {company_context}
Rules: Output only the requested labels, no additional text or explanation
Format: JSON with keys: intent, urgency, fit, confidence
```

## Reply Draft Template v1

**Purpose:** Generate personalized replies to leads  
**Variables:** {lead_name}, {intent}, {tone}, {word_limit}  
**Rules:** No invented facts, appropriate tone, word limit  
**Format:** Complete email structure

```
Role: Act as a sales representative for {company}
Goal: Draft a personalized reply to {lead_name} about {intent}
Inputs: {lead_inquiry} and {triage_results}
Rules: Use {tone} tone, max {word_limit} words, no invented facts
Format: Complete email with subject, greeting, body, sign-off
```

## Meeting Brief Generator Template v1

**Purpose:** Create structured briefs from conversations  
**Variables:** {conversation_thread}, {meeting_type}  
**Rules:** Extract key information, identify risks and opportunities  
**Format:** JSON with specific structure

```
Role: Act as a sales operations analyst
Goal: Create a structured brief from the lead conversation
Inputs: {conversation_thread}
Rules: Extract key information, identify risks and opportunities
Format: JSON with keys: summary, questions, risks, next_steps
```

## Quality Check Template v1

**Purpose:** Validate automation outputs before approval  
**Variables:** {output_type}, {quality_standards}  
**Rules:** Check schema, grounding, tone, safety  
**Format:** Validation report

```
Role: Act as a quality assurance reviewer
Goal: Validate this {output_type} against automation standards
Inputs: {automation_output}
Rules: Check schema compliance, fact grounding, tone appropriateness, safety
Format: Validation report with pass/fail status and specific recommendations
```

## Error Handling Template v1

**Purpose:** Handle edge cases and failures gracefully  
**Variables:** {error_type}, {context}  
**Rules:** Provide clear error messages, escalation paths  
**Format:** Error report with next steps

```
Role: Act as an error handling assistant
Goal: Provide clear guidance for {error_type} in {context}
Inputs: {error_details}
Rules: Provide clear error messages and escalation paths
Format: Error report with description, impact, and next steps
```

## Usage Guidelines

- Test all templates with different input types
- Version your templates and document changes
- Include error handling in all automation flows
- Monitor template performance and iterate
- Keep templates focused and reusable
