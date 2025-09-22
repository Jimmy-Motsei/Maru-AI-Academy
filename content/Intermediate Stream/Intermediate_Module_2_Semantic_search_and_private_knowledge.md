# Intermediate Track — Module 2: Semantic search & private knowledge

**Who this is for:** Power users/team leads who want reliable Q&A over their own documents.  
**Module goal:** Build a **mini private knowledge library** and query it with **semantic search + citations** while keeping data safe (POPIA).

Format per section:
- **Section heading**
- **Video‑ready instructor script** (3–5 min, plain English but deeper)
- **Short quiz** (3 questions) with correct answers + brief rationales)

---

## Section 1: What is semantic search (and when to use it)?

### Instructor Script
Semantic search lets AI find **meaning**, not just matching words. Instead of hunting for exact phrases, it looks for **related ideas**. This is perfect when:
- You have **policies, SOPs, FAQs, transcripts, slide notes**.
- You want the AI to answer **only from your documents**, not the open web.
- You need answers with **citations** (file + page/timestamp) you can verify.

**When to use:** long PDFs, meeting notes, knowledge bases.  
**When not:** brand‑new info that isn’t in your library yet; then first **add the source**, or the system should politely say “I don’t know.”

**Core rule:** **Grounded answers only** — if the source doesn’t say it, the assistant shouldn’t either.

### Quiz (3 questions)
1) Semantic search finds:  
   **B. Passages based on meaning, not just exact keywords.**  
   *Rationale:* It uses embeddings to map meaning.

2) If your library lacks the needed info, the assistant should:  
   **B. Say it doesn’t know and ask to add sources.**  
   *Rationale:* Prevents hallucinations.

3) A must‑have for trust is:  
   **C. Citations to the file and page/timestamp.**  
   *Rationale:* Verifiability.

---

## Section 2: Build your mini‑library (prep, metadata, versions)

### Instructor Script
Great Q&A starts with **well‑prepared documents**. Use this checklist:

1) **Collect**: Policies, SOPs, templates, product briefs, transcripts. Avoid duplicates.  
2) **Clean**: Remove outdated sections; fix headings; export to **PDF or clean HTML**.  
3) **Chunk**: Break long docs into **small sections** (≈ 2–5 paragraphs).  
4) **Tag**: Add metadata — `title`, `owner`, `version`, `date`, `doc_type` (SOP, policy, FAQ), and **access level** (public/internal/confidential).  
5) **Version**: Keep a version label (v1.2) and keep old copies archived.  
6) **Licensing**: Set `licensing` (original, client‑owned, Creative Commons) and whether it’s **searchable**.

**Tip:** Transcripts are gold. Clean them (speaker names, timestamps) and include them; they answer a lot of real‑world “what did we decide?” questions.

### Quiz (3 questions)
1) Breaking a long document into smaller sections helps because:  
   **B. The system can retrieve the exact relevant chunk.**  
   *Rationale:* Improves precision.

2) Useful metadata includes:  
   **B. Title, owner, version, date, doc_type, access level.**  
   *Rationale:* Governance and targeting.

3) If content belongs to a client, the `licensing` field should:  
   **B. Reflect client‑owned and restrict sharing/searchability as needed.**  
   *Rationale:* Rights management.

---

## Section 3: Ask better questions (prompts for precise, cited answers)

### Instructor Script
Your Q&A prompt should **force citations** and allow the model to **ask for missing info**.

**Template:**
- **Role:** Act as a company knowledge assistant.  
- **Goal:** Answer the question **only** from the provided library.  
- **Inputs:** {user question}.  
- **Rules:** **Cite sources** (file + page/timestamp) for every claim. If sources disagree or are missing, say so and ask for clarification or more docs. **No invented facts.**  
- **Format:** Short answer (≤120 words) + bullet list of citations `[Title – page/timestamp]` + “follow‑ups” (2 questions to refine).

**Variants:**  
- For procedures, ask for **step‑by‑step** outputs.  
- For numbers, ask to **quote exact figures** and where they came from.

### Quiz (3 questions)
1) The prompt must require:  
   **B. Citations for each claim and no invented facts.**  
   *Rationale:* Trust & safety.

2) If documents disagree, the assistant should:  
   **B. Say they conflict and ask for clarification.**  
   *Rationale:* Transparency.

3) For numerical outputs, you should ask to:  
   **B. Quote exact figures and cite the source line.**  
   *Rationale:* Accuracy.

---

## Section 4: Access, privacy & POPIA (who sees what)

### Instructor Script
Not everyone should see everything. Set rules up front:

- **Access levels:** public → internal → confidential.  
- **Per‑team libraries:** finance, ops, HR.  
- **RLS (row‑level security):** users only search within their org/team.  
- **POPIA:** avoid indexing **personal data** unless necessary and consented. Mask IDs where possible.  
- **Audit:** log who searched what (aggregate for improvement; protect privacy).

**Practical guideline:** default to **internal**, promote to **public** only when approved; keep **confidential** for named roles.

### Quiz (3 questions)
1) RLS (row‑level security) ensures:  
   **B. Users only query documents they’re allowed to access.**  
   *Rationale:* Data isolation.

2) A POPIA‑friendly library avoids:  
   **B. Indexing personal data unless required and consented.**  
   *Rationale:* Data minimization.

3) Search/audit logs should be used to:  
   **B. Improve content coverage while protecting user privacy.**  
   *Rationale:* Governance.

---

## Section 5: Reduce hallucinations (quality checks & evaluation)

### Instructor Script
Make the system **say less but say it right**.

- **Top‑k retrieval sanity:** start with 3–5 chunks; increase only if needed.  
- **Diversity:** prefer unique sources over many from the same page.  
- **Faithfulness checks:** ask the model to **quote or paraphrase** and align to citations.  
- **Low‑confidence fallback:** reply “I don’t know from the library” and propose what to add.  
- **Evaluation:** keep a small test set (10–20 Q&As) with expected citations; review monthly.

**Safety line for all Q&A prompts:** “**Only answer from the library. If unsure, say so.**”

### Quiz (3 questions)
1) A good default number of chunks to retrieve is:  
   **B. 3–5.**  
   *Rationale:* Precision first.

2) If confidence is low, the system should:  
   **B. Say it doesn’t know and suggest adding sources.**  
   *Rationale:* Honest fallback.

3) A lightweight evaluation approach is to:  
   **B. Keep a 10–20 question test set with expected citations.**  
   *Rationale:* Continuous quality.

---

## Section 6: Hands‑on workflow (create a mini‑library + Q&A)

### Instructor Script
Let’s build your first **private knowledge Q&A**:

1) **Collect 5–10 docs** (policy, SOP, transcript). Clean headings; export as PDF/HTML.  
2) **Add metadata** (title, owner, version, date, doc_type, access).  
3) **Chunk & index** (2–5 paragraphs per chunk).  
4) **Create the Q&A prompt** with strict citations and “no invented facts.”  
5) **Test** with 10 common questions; check citations & correctness.  
6) **Publish** to the team with access rules; add a quick help note: *“If an answer lacks citations, don’t trust it—report it.”*

**Iteration:** Add missing docs the system asks for. Build a simple **FAQ top‑hits** page from the searches.

### Quiz (3 questions)
1) Before indexing, you should:  
   **B. Clean headings and export to PDF/HTML.**  
   *Rationale:* Improves chunking.

2) After testing, publish with:  
   **B. Clear access rules and a help note about trusting citations.**  
   *Rationale:* Safe rollout.

3) A useful follow‑on artifact is a:  
   **B. “Top‑hits” FAQ built from real searches.**  
   *Rationale:* Self‑improving library.

---

## Module 2 Mini‑Assignment (Intermediate)

**Task (45–60 min):**  
Create a **mini knowledge library** (5–10 docs) and a **Q&A assistant** that answers with citations only.

**Deliverables:**
1) Library manifest (list of docs + metadata).  
2) 10 test questions with expected citations.  
3) Screenshots of correct answers (with citations).  
4) A short note on **gaps to add** and any **conflicting documents** found.

**AI Rubric focus:**
- **Library quality (40%)** — clean docs, helpful metadata, access set correctly.  
- **Answer faithfulness (30%)** — accurate answers with citations, honest fallbacks.  
- **Evaluation & iteration (30%)** — test set quality and proposed improvements.

---

### End of Intermediate Module 2
