# Code Review Rubric — Module 3 (v1)

| Area | Excellent (3) | Adequate (2) | Needs Work (1) |
|---|---|---|---|
| Data Design | Clear schema, indexes, migrations | Basic schema | Ad-hoc fields |
| DAL Boundary | Pure interface, injected | Mixed concerns | Tight coupling |
| Import/Export | Validates, reports partial failures | Basic happy-path | Brittle, no reporting |
| Filters/Search | Fast + safe | Works but slow | Missing or unsafe |
| Tests | Covers DAL + routes | Partial coverage | Minimal/none |
