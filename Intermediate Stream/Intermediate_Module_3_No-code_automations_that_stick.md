# Intermediate Track — Module 3: No‑code automations that stick

**Who this is for:** Power users / ops leads who want reliable, multi‑step automations with human review.  
**Module goal:** Build durable, auditable automations (triage → draft → approve → send → log → dashboard) with cost control and rollbacks.

Format per section:
- **Section heading**
- **Video‑ready instructor script** (3–5 min)
- **Short quiz** (3 questions) with correct answers + brief rationales

---

## Section 1: Automation patterns (triage, routing, approvals, logging)

### Instructor Script
Great automations follow repeatable **patterns**. Learn these four and you can build most business flows:

1) **Triage** — classify the incoming item (lead type, urgency, topic).  
2) **Routing** — send it to the right person/team (sales, support, finance).  
3) **Approval** — a human checks any customer‑facing draft.  
4) **Logging** — write a record (who/what/when/result) for audit and reporting.

**Recipe mindset:** *Trigger → Triage → Draft → Approval → Action → Log → Notify*.  
Start small, then add branches (if/else) based on triage labels.

### Quiz (3 questions)
1) A safe default for customer messages is to include:  
   **B. A human approval step before sending.**  
   *Rationale:* Accountability.

2) Logging matters because it:  
   **B. Creates an audit trail and powers reporting.**  
   *Rationale:* Visibility and compliance.

3) After triage, the next common step is:  
   **B. Route to the right owner or queue.**  
   *Rationale:* Work goes to the right place.

---

## Section 2: Build a multi‑step flow (lead → first reply → meeting brief → CRM)

### Instructor Script
We’ll build a robust **lead handling** flow:

**Trigger:** Web form submission or “New lead email”.  
**Triage (AI):** Classify **Intent** (demo/support/other), **Urgency** (low/med/high), **Fit** (basic/high‑fit).  
**Draft reply (AI):** Use a template with tone + word limit + “no invented facts”.  
**Approval (Human):** Approver edits/approves in email/WhatsApp; only then send.  
**Action:** Send reply to lead; schedule a meeting link if requested.  
**Meeting brief (AI):** From the thread, produce a JSON brief (`summary`, `questions`, `risks`, `next_steps`).  
**Log:** Append to a Sheet/DB: timestamp, lead name, intent, urgency, owner, outcome, minutes saved.  
**Sync:** Create/update **CRM** (HubSpot) with contact + last activity.

**Edge cases:** missing contact, unclear request → bounce to approver with questions; **do not send** to the lead.

### Quiz (3 questions)
1) The **Triage** step should output:  
   **B. Labels like intent, urgency, fit.**  
   *Rationale:* Drives routing logic.

2) The meeting brief should be returned as:  
   **B. JSON with predictable keys.**  
   *Rationale:* Reuse in tools.

3) If contact details are missing you should:  
   **B. Ask for details during approval; do not auto‑send.**  
   *Rationale:* Prevent misfires.

---

## Section 3: Cost control & model tiering (fast where you can, strong where you must)

### Instructor Script
Keep automations affordable by **tiering** models and limiting runs.

**Rules of thumb:**
- Use a **cheaper/faster model** for triage and first drafts.  
- Use a **higher‑quality model** only for final checks or complex tasks.  
- Add **rate limits** (e.g., max runs per hour/day).  
- Add a **monthly cap** + alerts.  
- Cache and reuse common outputs (e.g., signature blocks, boilerplates).

**Prompt hygiene:** short, focused prompts; reuse templates; avoid dumping huge threads unless necessary.

### Quiz (3 questions)
1) A good cost‑saving tactic is to:  
   **B. Use cheaper models for triage/drafts and stronger models for final checks.**  
   *Rationale:* Tiering controls spend.

2) To avoid bill shock you should:  
   **B. Set monthly caps and alerts.**  
   *Rationale:* Guardrails.

3) One way to reduce tokens is to:  
   **B. Keep prompts focused and reuse templates.**  
   *Rationale:* Less context length.

---

## Section 4: Monitoring, alerts, and dashboards

### Instructor Script
Automations are “set‑and‑tend,” not “set‑and‑forget.” Track **health** and **impact**.

**Operational metrics:** success rate, failure rate, approval turnaround, latency.  
**Business metrics:** volume processed, conversion rate, **minutes saved**, revenue tied to automation.  
**Alerts:** payment/webhook failures, high failure rates, approval queue backlog, spend nearing cap.

**Dashboard:** start in your Sheet/DB with simple charts; later move to BI (Data Studio/Power BI).

### Quiz (3 questions)
1) Operational metrics help you:  
   **B. Detect errors and slow approvals.**  
   *Rationale:* Keep it healthy.

2) A core business metric for this course is:  
   **B. Minutes saved (time ROI).**  
   *Rationale:* Ties to value promise.

3) An alert worth wiring is:  
   **B. When spend approaches your monthly cap.**  
   *Rationale:* Cost control.

---

## Section 5: Quality checks, A/B tests, and continuous improvement

### Instructor Script
Keep improving with light **experiments**.

- **Self‑check**: ask the model to validate schema and list assumptions.  
- **A/B prompts**: compare two prompt versions on a small sample; pick the winner.  
- **Golden set**: 10–20 representative cases you re‑run to ensure quality stays stable.  
- **Feedback capture**: add a quick thumbs‑up/down or short tag from approvers (tone/clarity/fact).

**Iteration cadence:** weekly 15‑minute review; monthly prompt/component updates (versioned).

### Quiz (3 questions)
1) An A/B test compares:  
   **B. Two prompt versions on the same task.**  
   *Rationale:* Choose better variant.

2) A “golden set” is:  
   **B. A small fixed test set to check ongoing quality.**  
   *Rationale:* Regression guard.

3) Capturing approver feedback helps you:  
   **B. Target the exact weaknesses to fix.**  
   *Rationale:* Guided iteration.

---

## Section 6: Governance, privacy & rollbacks

### Instructor Script
Make automations **trustworthy**.

- **SOP** per flow (purpose, steps, approval, data rules, owner).  
- **Access**: who can edit/run; enforce least privilege.  
- **POPIA**: minimize personal data; consent; retention windows; redact in logs.  
- **Rollback**: keep a **manual path** (what to do if the flow fails) and **disable switch**.  
- **Change log**: version prompt/components; record dates and reasons.

**Culture rule:** “When in doubt, stop and ask.” It’s better to pause than send a wrong message.

### Quiz (3 questions)
1) Least privilege means:  
   **B. Give people only the access they need to do their job.**  
   *Rationale:* Reduce risk.

2) A rollback plan should include:  
   **B. Manual steps to handle work if the automation fails.**  
   *Rationale:* Resilience.

3) Logs under POPIA should:  
   **B. Avoid storing unnecessary personal data and set retention.**  
   *Rationale:* Compliance.

---

## Module 3 Mini‑Assignment (Intermediate)

**Task (60–90 min):**  
Build a **lead handling** automation with triage, AI reply, human approval, meeting brief, CRM sync, logging, and a basic dashboard.

**Deliverables:**
1) Flow diagram or screenshots of each step.  
2) Prompts/components used (triage classifier, reply draft, meeting brief JSON).  
3) Log extract (≥20 rows) with minutes saved.  
4) A tiny dashboard (chart/pivot).  
5) A one‑page SOP + rollback plan.

**AI Rubric focus:**
- **Reliability & safety (40%)** — approval, error handling, POPIA‑friendly logs.  
- **Quality & consistency (30%)** — structured outputs; stable triage; clear prompts.  
- **Impact (30%)** — measurable minutes saved; clean dashboard.

---

### End of Intermediate Module 3
