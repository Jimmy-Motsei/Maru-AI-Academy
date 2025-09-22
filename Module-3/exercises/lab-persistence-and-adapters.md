# Mini-assignment — No-code Automation Challenge (15–30 min)

**Time:** 15–30 min

## Objective

Build and ship a **no-code micro-automation** that handles new enquiries with an AI-drafted reply and a log entry.

## Deliverables

1. A screenshot or short screen-capture of your flow (trigger, actions, approval, log)
2. Your **prompt text** for the draft reply
3. Your log sheet (5–10 sample rows)
4. A 3-line note: **minutes saved per enquiry × enquiries per day**

## Steps

### Step 1: Choose your automation tool (3 min)

Pick one of these no-code platforms:

- **Zapier** (most popular, good free tier)
- **Microsoft Power Automate** (if you use Office 365)
- **IFTTT** (simple, good for basic automations)
- **Make.com** (formerly Integromat, more advanced)

**Pro tip**: Start with the one you're most familiar with or that integrates best with your existing tools.

### Step 2: Set up the trigger (5 min)

Create a trigger for new enquiries:

- **Email trigger**: When email arrives with subject containing "Enquiry"
- **Form trigger**: When new form submission arrives
- **Manual trigger**: For testing purposes

**Test the trigger** with a sample enquiry to make sure it works.

### Step 3: Add AI draft action (5 min)

Connect to an AI tool (ChatGPT, Claude, etc.) and use this prompt:

**Role**: "Act as a polite support agent for {Company}."

**Goal**: "Draft a reply confirming we received the enquiry and asking missing details."

**Rules**: "No invented facts. POPIA: no personal data beyond what client sent. Keep to 120–160 words."

**Format**: "Subject + greeting + body + bullets for questions + sign-off."

**Test the AI action** to ensure it generates appropriate replies.

### Step 4: Add approval step (3 min)

Set up human approval:

- Send draft to your email or WhatsApp
- Include original enquiry details
- Only proceed after approval
- Add safety check: if contact details missing, flag for review

**Test the approval flow** to ensure you receive drafts for review.

### Step 5: Add logging action (3 min)

Create a log entry in Google Sheets or Excel with columns:

- **Timestamp**: When enquiry arrived
- **Channel**: email/form/phone
- **Contact**: Name and contact details (anonymized)
- **Topic**: What they're asking about
- **Time saved (minutes)**: How much time the automation saved
- **Outcome**: Replied/Questions Sent/Escalated
- **Notes**: Any special circumstances

**Test the logging** to ensure data is captured correctly.

### Step 6: Test the complete flow (5 min)

Run through the entire automation:

1. Send test enquiry
2. Check AI draft is generated
3. Review and approve the draft
4. Verify log entry is created
5. Send approved reply to test email

**Fix any issues** that come up during testing.

### Step 7: Document your results (3 min)

Create your deliverables:

- **Screenshot**: Show your complete flow (trigger → AI → approval → log)
- **Prompt text**: Copy the exact prompt you used
- **Log sheet**: Show 5-10 sample entries
- **Time calculation**: Minutes saved per enquiry × enquiries per day

## AI Rubric (Behind the Scenes)

- **Function & safety (40%)** — approvals in place; no personal data leaks
- **Clarity & structure (30%)** — clean prompt and log fields
- **Impact (30%)** — realistic minutes saved and evidence in the log

## Success criteria

- Complete automation flow is working
- Human approval step is in place
- Logging captures essential information
- Time savings are clearly documented
- No sensitive data is exposed

## Pro tips

- Start simple and add complexity later
- Test thoroughly before going live
- Monitor the first few enquiries closely
- Keep your prompts simple and clear
- Focus on safety over speed

## Troubleshooting

- **If trigger doesn't work**: Check email filters or form settings
- **If AI output is poor**: Tighten your prompt and add examples
- **If approval step fails**: Check email settings and spam folders
- **If logging doesn't work**: Verify sheet permissions and column names
- **If costs are high**: Switch to cheaper AI models or reduce frequency
