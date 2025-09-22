# Intermediate Track — Module 4: Measurement, governance & handover

**Who this is for:** Team leads/ops owners rolling out AI workflows across a team or business unit.  
**Module goal:** Prove impact with numbers, keep systems safe/compliant, and hand over reliable playbooks to the team.

Format per section:
- **Section heading**
- **Video‑ready instructor script** (3–5 min)
- **Short quiz** (3 questions) with correct answers + brief rationales

---

## Section 1: KPIs that matter (from activity to outcomes)

### Instructor Script
Dashboards only help if they drive **decisions**. Shift from counting clicks to measuring **outcomes**.

**Outcome KPIs:**
- **Time ROI:** minutes saved per run × volume (daily/weekly).  
- **Quality:** rework rate (how often humans fix outputs); error rate in customer‑facing items.  
- **Throughput:** items handled per day/week; response times.  
- **Conversion/Revenue (if applicable):** replies → meetings → sales.  
- **Adoption:** % of target users who used the workflow this week.

**Targets:** set a baseline (last 2–4 weeks), then aim for **+30–50% throughput** or **–40–60% time per item** in the first month.

### Quiz (3 questions)
1) The most important KPI family for this course is:  
   **B. Time ROI (minutes saved × volume).**  
   *Rationale:* Links directly to promised value.

2) “Rework rate” measures:  
   **B. How often humans must fix AI outputs.**  
   *Rationale:* Quality indicator.

3) A good starting point for targets is to:  
   **B. Use recent baseline data then set improvement goals.**  
   *Rationale:* Data‑driven.

---

## Section 2: Instrumentation & data model (log once, learn forever)

### Instructor Script
If you **don’t log it**, you can’t improve it. Standardize your log across workflows.

**Minimal log schema (per run):**  
`timestamp | workflow_name | trigger | owner | input_size | outcome | approval_time_sec | model_tier | tokens_or_cost | minutes_saved | notes`

**Why each field:**  
- **owner** for accountability; **approval_time** to see bottlenecks; **model_tier/cost** for spend control; **minutes_saved** for ROI.  
- Keep **personal data out** or anonymize (POPIA).

**Storage:** start with a Sheet/DB; later move to a warehouse/BI. Ensure **retention** (e.g., 90–180 days) and access controls.

### Quiz (3 questions)
1) Without logging, you cannot:  
   **B. Measure and improve reliably.**  
   *Rationale:* Data is required for iteration.

2) One spend‑related field to log is:  
   **B. Model tier or tokens/cost.**  
   *Rationale:* Cost visibility.

3) POPIA‑friendly logs should:  
   **B. Avoid unnecessary personal data and set retention windows.**  
   *Rationale:* Compliance.

---

## Section 3: Dashboards & reviews (cadence that sustains momentum)

### Instructor Script
Make a **single weekly view** that leaders actually read.

**Starter dashboard cards:**
- **Minutes saved (this week vs last)**  
- **Items processed** & **response time**  
- **Rework rate** & top 3 failure reasons  
- **Spend vs cap** (month‑to‑date)  
- **Adoption** (% of target users active)

**Cadence:**
- **Weekly 15‑min ops review:** scan metrics, pick **one fix**.  
- **Monthly 45‑min governance review:** examine risks, policies, model tiers, budget.

### Quiz (3 questions)
1) A useful weekly dashboard shows:  
   **B. Minutes saved, items, response time, rework, spend vs cap.**  
   *Rationale:* Balanced view.

2) The output of a weekly review should be:  
   **B. One prioritized improvement to implement.**  
   *Rationale:* Focused iteration.

3) Monthly reviews focus more on:  
   **B. Governance, risks, model tiers, and budget.**  
   *Rationale:* Strategic oversight.

---

## Section 4: Policy & risk (simple rules that actually get used)

### Instructor Script
Policies must be **short and clear** so people follow them.

**One‑page policy essentials:**
- **Allowed uses** and **banned uses** (with examples).  
- **Data rules:** green/yellow/red; anonymize by default; consent for personal data.  
- **Approval & human‑in‑the‑loop:** what must be reviewed.  
- **Citations & grounding:** no invented facts; cite when applicable.  
- **Retention & deletion:** how long logs and drafts are kept.  
- **Incident response:** who to call; disable switch; rollback steps.

**Rollout:** publish in the LMS; add a short **quiz** for sign‑off; track acknowledgements.

### Quiz (3 questions)
1) The goal of a one‑page policy is to be:  
   **B. Short, clear, and actually used.**  
   *Rationale:* Practical compliance.

2) Banned/allowed examples help because they:  
   **B. Make the policy easier to apply in real cases.**  
   *Rationale:* Concrete guidance.

3) Retention rules define:  
   **B. How long data/logs are kept before deletion.**  
   *Rationale:* Compliance control.

---

## Section 5: Handover & SOPs (make it run without you)

### Instructor Script
To scale, your workflows need **SOPs anyone can follow** and a clean handover.

**SOP template (one page):**
- **Purpose & outcomes**  
- **Trigger & steps** (2–6, with screenshots)  
- **Approval checklist** (tone, facts, format, safety)  
- **Common errors & fixes**  
- **Owner & backup**  
- **Disable/rollback** instructions

**Handover pack:** SOP + prompt components (versions), dashboard link, log access, contacts. Do a **30‑min live walkthrough** with Q&A.

### Quiz (3 questions)
1) A good SOP includes:  
   **B. Purpose, steps with screenshots, approval checklist, owner, rollback.**  
   *Rationale:* Operable document.

2) The handover pack should contain:  
   **B. SOP, prompts, dashboard link, log access, contacts.**  
   *Rationale:* Everything to run it.

3) A live walkthrough is useful because it:  
   **B. Surfaces questions and builds confidence to operate.**  
   *Rationale:* Smooth transition.

---

## Section 6: Scale‑out & sunset (portfolio thinking)

### Instructor Script
Treat automations like a **portfolio**: add winners, fix maybes, retire losers.

**Scale‑out checklist:**  
- Stable **quality** (low rework) for 2–4 weeks.  
- Clear **ROI** (minutes saved) and owner capacity.  
- **Training** complete (policy sign‑off + SOP read).  
- **Spend** within cap.

**Sunset criteria:**  
- Low usage; rework too high; negative ROI; better alternative exists.  
- Archive SOP; disable; keep a summary note in your registry.

### Quiz (3 questions)
1) Scale‑out is appropriate when:  
   **B. Quality is stable and ROI is clear.**  
   *Rationale:* Proven value first.

2) A sunset decision may be triggered by:  
   **B. High rework and low usage.**  
   *Rationale:* Not worth maintaining.

3) After sunsetting, you should:  
   **B. Archive the SOP and keep a registry note.**  
   *Rationale:* Knowledge retention.

---

## Module 4 Mini‑Assignment (Intermediate)

**Task (60–90 min):**  
Pick one live workflow from Module 3 and **productionize** it.

**Deliverables:**
1) **KPI sheet** with baseline vs this week.  
2) **One‑page policy** (your version) + signed quiz acknowledgment screenshot.  
3) **SOP (one page)** + **handover pack** (prompts, dashboards, logs).  
4) **Monthly review note** (1 page): risks, improvements, budget status.  
5) **Scale/sunset decision** with rationale.

**AI Rubric focus:**
- **Governance & safety (40%)** — policy clarity, approvals, retention, POPIA.  
- **Operational readiness (30%)** — SOP quality, handover completeness.  
- **Impact evidence (30%)** — KPIs demonstrate value; decisions justified.

---

### End of Intermediate Module 4 — You’re ready to run AI at team scale
