# Mini-Assignment (Intermediate, Module 2)

**Goal:** Create a **mini knowledge library** (5–10 docs) and a **Q&A assistant** that answers with citations only.

**Time:** 45–60 min

## Objective

Build a private knowledge Q&A system that:

- Contains 5-10 well-prepared documents
- Provides accurate, cited answers
- Implements proper access controls
- Includes quality evaluation

## Steps

### Step 1: Collect and prepare documents (15 min)

Gather 5-10 documents from your work:

- Policies, SOPs, or procedures
- Meeting notes or transcripts
- Product briefs or specifications
- FAQs or knowledge base articles

**Clean and prepare each document:**

- Remove outdated information
- Fix headings and formatting
- Export to PDF or clean HTML
- Anonymize any sensitive data

### Step 2: Add metadata and chunk (10 min)

For each document, add metadata:

- **Title**: Clear, descriptive name
- **Owner**: Who owns this content
- **Version**: Version number (v1.0)
- **Date**: Last updated
- **Doc_type**: SOP, policy, FAQ, transcript, etc.
- **Access_level**: public, internal, or confidential
- **Licensing**: original, client-owned, Creative Commons

**Chunk documents** into 2-5 paragraph sections for optimal retrieval.

### Step 3: Create Q&A prompt (10 min)

Design a prompt that ensures:

- **Citations required** for every claim
- **No invented facts** - only from library
- **Honest fallbacks** when information is missing
- **Clear format** with citations and follow-up questions

**Example prompt structure:**

```
Role: Act as a company knowledge assistant
Goal: Answer questions only from the provided library
Inputs: {user_question}
Rules: Cite sources (file + page/timestamp) for every claim. If sources disagree or are missing, say so and ask for clarification. No invented facts.
Format: Short answer (≤120 words) + bullet list of citations [Title – page/timestamp] + follow-ups (2 questions to refine)
```

### Step 4: Test and evaluate (15 min)

Create 10 test questions covering:

- Policy questions
- Procedural steps
- Specific facts or numbers
- Scenarios requiring multiple sources

**For each test question:**

- Check if answer is grounded in sources
- Verify citations are accurate
- Confirm no invented information
- Note any gaps or conflicts

### Step 5: Document and submit (10 min)

Submit:

- **Library manifest** (list of docs + metadata)
- **10 test questions** with expected citations
- **Screenshots** of correct answers (with citations)
- **Gap analysis** - what's missing and what conflicts were found
- **Access control plan** - who can see what
- **Evaluation results** - what worked well and what needs improvement

## AI Rubric (Behind the Scenes)

- **Library quality (40%)** — clean docs, helpful metadata, access set correctly
- **Answer faithfulness (30%)** — accurate answers with citations, honest fallbacks
- **Evaluation & iteration (30%)** — test set quality and proposed improvements

## Success Criteria

- All documents properly cleaned and chunked
- Metadata complete and accurate
- Q&A prompt enforces citations and prevents hallucinations
- Test questions cover different types of queries
- Answers are grounded in sources with proper citations
- Access controls are appropriate for content sensitivity
- Evaluation identifies areas for improvement

## Pro Tips

- Start with documents you know well
- Include different types of content (policies, procedures, transcripts)
- Test with both specific and general questions
- Pay attention to conflicting information
- Document gaps for future library expansion
- Consider who should have access to each document type
