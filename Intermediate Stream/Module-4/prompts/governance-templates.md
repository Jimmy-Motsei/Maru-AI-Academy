# Governance Templates — Intermediate Module 4

## KPI Calculation Template v1

**Purpose:** Calculate time ROI and business impact  
**Variables:** {manual_time}, {automated_time}, {volume}, {cost_per_hour}  
**Rules:** Use consistent time units, include all costs  
**Format:** Structured calculation with breakdown

```
Time ROI Calculation:
Manual time per item: {manual_time} minutes
Automated time per item: {automated_time} minutes
Time saved per item: {manual_time - automated_time} minutes
Volume this week: {volume} items
Total time saved: {(manual_time - automated_time) × volume} minutes
Cost per hour: ${cost_per_hour}
Value created: ${((manual_time - automated_time) × volume × cost_per_hour) / 60}
```

## Policy Template v1

**Purpose:** Create clear, actionable AI usage policies  
**Variables:** {company_name}, {data_types}, {approval_roles}  
**Rules:** Keep under one page, use clear examples  
**Format:** Structured policy with examples

```
AI Usage Policy - {company_name}

ALLOWED USES:
✅ Green data: Public info, anonymized examples
✅ Yellow data: Internal docs (remove names/IDs first)
✅ Customer service: Approved templates only

BANNED USES:
❌ Red data: Customer PII, financial data, health info
❌ Legal advice: Never provide legal guidance
❌ Medical advice: Never provide health recommendations

APPROVAL REQUIRED:
- All customer-facing content
- Any financial claims or promises
- Responses to complaints or escalations

DATA RULES:
- Default to anonymization
- Set 90-day retention for logs
- Report incidents within 24 hours
```

## SOP Template v1

**Purpose:** Create comprehensive operational procedures  
**Variables:** {workflow_name}, {steps}, {approval_process}  
**Rules:** Include screenshots, common errors, rollback  
**Format:** Step-by-step guide with visual aids

```
{workflow_name} SOP

PURPOSE: {workflow_description}
EXPECTED OUTCOME: {success_metrics}

STEPS:
1. {trigger_description} → {action}
2. {triage_step} → {classification}
3. {draft_step} → {ai_generation}
4. {approval_step} → {human_review}
5. {action_step} → {execution}
6. {logging_step} → {record_keeping}

APPROVAL CHECKLIST:
□ Tone appropriate for audience
□ Facts verified and accurate
□ Format matches requirements
□ No personal data exposed
□ Citations included where needed

COMMON ERRORS & FIXES:
- Missing contact info → Escalate to human
- Unclear request → Ask for clarification
- Wrong tone → Edit before sending
- Technical error → Check logs and retry

OWNER: {primary_contact}
BACKUP: {secondary_contact}
DISABLE: {disable_instructions}
```

## Dashboard Template v1

**Purpose:** Create effective monitoring dashboards  
**Variables:** {metrics}, {time_periods}, {targets}  
**Rules:** Focus on actionable metrics, keep simple  
**Format:** Structured dashboard with trends

```
Weekly Automation Dashboard - {date_range}

PERFORMANCE METRICS:
┌─────────────────┬──────────┬──────────┬─────────┐
│ Metric          │ This Week│ Last Week│ Change  │
├─────────────────┼──────────┼──────────┼─────────┤
│ Minutes saved   │ {current}│ {previous}│ {change}%│
│ Items processed │ {current}│ {previous}│ {change}%│
│ Rework rate     │ {current}%│ {previous}%│ {change}%│
│ Response time   │ {current}h│ {previous}h│ {change}%│
│ Spend vs cap    │ {current}%│ {previous}%│ {change}%│
│ User adoption   │ {current}%│ {previous}%│ {change}%│
└─────────────────┴──────────┴──────────┴─────────┘

THIS WEEK'S FOCUS: {priority_improvement}
NEXT WEEK'S GOAL: {next_priority}
```

## Handover Checklist Template v1

**Purpose:** Ensure complete knowledge transfer  
**Variables:** {workflow_name}, {team_members}, {resources}  
**Rules:** Include all necessary resources and contacts  
**Format:** Comprehensive checklist

```
Handover Checklist - {workflow_name}

DOCUMENTATION:
□ Complete SOP reviewed
□ Policy signed and acknowledged
□ Prompt components (versioned)
□ Dashboard access provided
□ Log access configured

TRAINING:
□ Live walkthrough completed
□ Test run with new owner
□ Q&A session conducted
□ Backup training scheduled

RESOURCES:
□ Dashboard link: {url}
□ Log access: {credentials}
□ Prompt library: {location}
□ Contact list: {contacts}

SUPPORT:
□ Primary owner: {name}
□ Backup owner: {name}
□ Escalation contact: {name}
□ Technical support: {contact}

FOLLOW-UP:
□ 1-week check-in scheduled
□ 1-month review planned
□ Feedback collection process
```

## Usage Guidelines

- Customize templates for your specific workflows
- Include real examples and data where possible
- Test templates with actual users before deployment
- Update templates based on feedback and experience
- Maintain version control for all templates
