-- Initial seed data for Maru AI Academy
-- Seed: 001_initial_data.sql

-- Insert streams
INSERT INTO streams (name, description, level) VALUES
('Beginner Stream', 'Perfect for getting started with AI. Learn the fundamentals of AI productivity, safety, and basic automation.', 'beginner'),
('Intermediate Stream', 'For power users ready to scale AI across teams. Advanced workflows, governance, and team automation.', 'intermediate');

-- Insert modules for Beginner Stream
INSERT INTO modules (stream_id, title, description, order_index, is_published) VALUES
(1, 'AI Made Simple (Foundations & Safety)', 'Give business users a confident, practical start with AI to save 3-5 hours per day on routine work through safe, effective AI use.', 1, true),
(1, 'Prompts that work at work (Advanced Productivity)', 'Turn one-off prompting into reusable, reliable templates that produce consistent, business-ready outputs.', 2, true),
(1, 'Picking tools & no-code quick wins', 'Build durable, auditable automations with human review and cost control.', 3, true),
(1, 'Your first live workflow (Capstone)', 'Prove impact with numbers, keep systems safe/compliant, and hand over reliable playbooks to the team.', 4, true);

-- Insert modules for Intermediate Stream
INSERT INTO modules (stream_id, title, description, order_index, is_published) VALUES
(2, 'From ad-hoc prompts to repeatable workflows', 'Turn one-off prompting into reusable, reliable templates that produce consistent, business-ready outputs.', 1, true),
(2, 'Semantic search & private knowledge', 'Build a mini private knowledge library and query it with semantic search + citations while keeping data safe.', 2, true),
(2, 'No-code automations that stick', 'Build durable, auditable automations with human review and cost control.', 3, true),
(2, 'Measurement, governance & handover', 'Prove impact with numbers, keep systems safe/compliant, and hand over reliable playbooks to the team.', 4, true);

-- Insert sample quiz questions for Module 1
INSERT INTO quizzes (module_id, question, options, correct_answer, explanation, order_index) VALUES
(1, 'In this course, a "model" is best described as:', '["The app''s pricing plan", "The AI brain that generates answers", "A file you download", "A plugin store"]', 'B', 'Models = the underlying AI system that processes inputs and generates outputs.', 1),
(1, 'A "prompt" is:', '["A database", "Your instruction to the AI", "An integration", "A browser extension"]', 'B', 'Prompts are the instructions you give to AI to tell it what you want it to do.', 2),
(1, 'The outcome we want from AI is mainly to:', '["Replace every employee", "Save time on routine work with quality outputs", "Build robots", "Do heavy coding"]', 'B', 'The goal is productivity and quality improvements, not replacement of human workers.', 3);

-- Insert sample assignment for Module 1
INSERT INTO assignments (module_id, title, description, instructions, rubric, max_score, due_date) VALUES
(1, 'AI Productivity Practice', 'Pick one real email or report from your work. Use the 5-part prompt pattern to produce a clean output.', 'Choose a real work item, anonymize data, use 5-part prompt pattern, record time saved, submit results.', '{"clarity": 40, "safety": 30, "fit_for_purpose": 30}', 100.00, NULL);

-- Insert sample users (for testing)
INSERT INTO users (email, name, password_hash, role) VALUES
('admin@maruai.academy', 'Admin User', '$2b$10$example_hash', 'admin'),
('instructor@maruai.academy', 'Instructor User', '$2b$10$example_hash', 'instructor'),
('student@maruai.academy', 'Student User', '$2b$10$example_hash', 'student');
