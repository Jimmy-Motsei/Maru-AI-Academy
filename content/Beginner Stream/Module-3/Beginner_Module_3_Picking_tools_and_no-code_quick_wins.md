# Beginner Track — Module 3: Picking tools & no‑code quick wins

Format per section:
- **Section heading**
- **Video-ready instructor script** (2–4 min, plain English)
- **Short quiz** (3 questions) with correct answers + brief rationales

---

## Section 1: Choose the right tool (simple checklist)

### Instructor Script
Welcome to Module 3. Today we’ll choose tools the **easy way** and build your **first no‑code automation**.

Use this **5‑point checklist** when picking a tool:
1) **Job to be done** — What exact task will it do? (e.g., auto‑reply to enquiries, summarize PDFs)  
2) **Data safety** — POPIA: does it store personal data? Can you anonymize? Is there a privacy policy and data export?  
3) **Bandwidth & devices** — Works well on mobile? Low‑data mode or transcript‑first?  
4) **Cost & limits** — Free tier, monthly cap, per‑use fees. Can you set **usage caps** and alerts?  
5) **Fit & support** — Is it simple enough for your team? Tutorials? Local support or community?

**Rule of thumb:** Start with **one chat assistant** + **one document helper** + **one no‑code automation tool**. Keep it small; prove value in a week.

### Quiz (3 questions)
1) The first question to ask when choosing a tool is:  
   **B. What job will it do?**  
   *Rationale:* Purpose drives selection.

2) For POPIA, a safe habit is to:  
   **B. Anonymize personal data and check export options.**  
   *Rationale:* Data minimization + portability.

3) To avoid surprise bills, you should:  
   **C. Set monthly usage caps and alerts.**  
   *Rationale:* Cost control.

---

## Section 2: No‑code automation basics (trigger → actions → checks)

### Instructor Script
No‑code automations are **recipes**. Think: **Trigger → Actions → Checks**.

- **Trigger:** the event that starts the flow. Example: *“New enquiry email arrives”* or *“Form submitted.”*  
- **Actions:** steps that happen next. Example: *“Draft reply → send for approval → log to sheet/CRM.”*  
- **Checks (guardrails):** rules that prevent mistakes. Example: *“If message lacks phone number, ask for it instead of sending.”*

**Golden rules:**
- Keep the **first version short** (2–3 actions).  
- Always include a **human‑approval step** for anything customer‑facing.  
- **Log every run** (timestamp, contact, outcome) so you can audit and improve.

### Quiz (3 questions)
1) In no‑code flows, the **trigger** is:  
   **C. The event that starts the automation.**  
   *Rationale:* First step.

2) A good first build should have:  
   **B. 2–3 actions and a human approval step.**  
   *Rationale:* Small and safe.

3) Logging each run matters because:  
   **B. You can audit issues and measure success.**  
   *Rationale:* Visibility enables improvement.

---

## Section 3: Build your first micro‑automation (enquiry auto‑reply + log)

### Instructor Script
Let’s build a **simple but powerful** flow you can ship today:

**Use case:** When a new enquiry arrives (form or email), send a polite **draft reply** for approval, then **log** the enquiry.

**Recipe:**  
- **Trigger:** New form submission (or email with subject contains “Enquiry”).  
- **Action 1 (AI draft):** Create a **polite reply** using your prompt template. Include 2–3 clarifying questions if details are missing.  
- **Action 2 (Approval):** Send the draft to a human approver (you) by email/WhatsApp. Only **send to customer after approval**.  
- **Action 3 (Log):** Append a row to a **Google Sheet/Excel** with: Date, Name, Contact, Topic, Status (Replied/Questions Sent).

**Prompt snippet for the draft:**  
*Role:* “Act as a polite support agent for {Company}.”  
*Goal:* “Draft a reply confirming we received the enquiry and asking missing details.”  
*Rules:* “No invented facts. POPIA: no personal data beyond what client sent. Keep to 120–160 words.”  
*Format:* “Subject + greeting + body + bullets for questions + sign‑off.”

**Safety:** If contact details are missing, **do not send**; ask for them in the approval message.

### Quiz (3 questions)
1) The safest step before sending a customer email is:  
   **C. Human approval of the AI draft.**  
   *Rationale:* You remain accountable.

2) What should be logged for each enquiry?  
   **B. Date, Name, Contact, Topic, Status.**  
   *Rationale:* Minimal but useful.

3) If key details are missing, the flow should:  
   **B. Ask for details during approval, not auto‑send.**  
   *Rationale:* Prevent bad customer messages.

---

## Section 4: Tracking & dashboards (make results visible)

### Instructor Script
If you don’t **see the wins**, you’ll stop using the flow. Let’s track them.

1) **Log sheet columns:** Timestamp, Channel (email/form), Contact, Topic, **Time saved (minutes)**, Outcome, Notes.  
2) **Weekly view:** Count enquiries, average response time, % needing clarifications, **total minutes saved**.  
3) **Dashboard options:** simple pivot/chart in Excel/Sheets; or a lightweight BI like Data Studio/Power BI later.

**Tip:** Add a column **“Minutes saved”**. If your draft cuts 8 minutes per reply and you send 10 replies/day, that’s **80 minutes saved daily**.

### Quiz (3 questions)
1) One key metric to include is:  
   **C. Total minutes saved.**  
   *Rationale:* Ties to ROI.

2) The simplest dashboard tool to start with is:  
   **B. A chart or pivot in your Sheet.**  
   *Rationale:* Start lightweight.

3) A weekly review helps you:  
   **B. Spot bottlenecks and improve templates.**  
   *Rationale:* Iterate based on data.

---

## Section 5: Cost caps & privacy guardrails (simple, non‑negotiable)

### Instructor Script
Protect your wallet and your customers with two quick setups:

**Cost caps:**  
- Use a tool that supports **monthly limits** and **alerts**.  
- Prefer cheaper models for drafts; reserve higher‑quality models for final checks.  
- Cache and **reuse prompts/templates**.

**Privacy rules:**  
- Treat personal data as **red** unless you have consent.  
- Share the **least data** needed. Remove names/IDs when possible.  
- Keep a **one‑page policy**: what’s allowed, who approves, how long you retain logs.

**Checklist to post on your wall:**  
“**No invented facts. Ask when unsure. Cite sources where relevant. Human review before sending.**”

### Quiz (3 questions)
1) A good cost habit is to:  
   **B. Set monthly limits and alerts.**  
   *Rationale:* Prevent bill shock.

2) The safest approach to personal data is to:  
   **C. Share the least needed and anonymize.**  
   *Rationale:* POPIA basics.

3) “No invented facts; ask when unsure” should live in:  
   **B. Your standard prompts and policy.**  
   *Rationale:* Built‑in guardrails.

---

## Section 6: Troubleshooting & iteration (make it better each week)

### Instructor Script
Every flow needs **tuning**. Use this checklist:

- **If outputs are vague:** tighten the **Goal** and **Format**; add examples.  
- **If info is missing:** prompt the AI to **list assumptions** and questions.  
- **If tone is off:** add **tone words** (warm, direct, formal) and word limits.  
- **If errors slip through:** add a **human‑approval** step earlier.  
- **If costs rise:** switch to a **cheaper model** for drafts; limit run frequency.

Run a **Friday 15‑minute review**: look at the log, update prompts, and celebrate time saved.

### Quiz (3 questions)
1) To reduce vague outputs, you should:  
   **B. Tighten Goal/Format and add examples.**  
   *Rationale:* Specificity wins.

2) If the tone is too formal, fix by:  
   **C. Adding tone guidance (e.g., warm, concise).**  
   *Rationale:* Explicit tone control.

3) A simple weekly habit that improves quality is:  
   **B. A 15‑minute log review and prompt tweak.**  
   *Rationale:* Continuous improvement.

---

## Mini‑Assignment (Beginner, Module 3)

**Goal:** Build and ship a **no‑code micro‑automation** that handles new enquiries with an AI‑drafted reply and a log entry.

**Deliverables:**
1) A screenshot or short screen‑capture of your flow (trigger, actions, approval, log).  
2) Your **prompt text** for the draft reply.  
3) Your log sheet (5–10 sample rows).  
4) A 3‑line note: **minutes saved per enquiry × enquiries per day**.

**AI Rubric focus:**
- **Function & safety (40%)** — approvals in place; no personal data leaks.  
- **Clarity & structure (30%)** — clean prompt and log fields.  
- **Impact (30%)** — realistic minutes saved and evidence in the log.

---

### End of Module 3
