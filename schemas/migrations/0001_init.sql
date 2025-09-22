-- Initial database schema for Maru AI Academy
-- Migration: 0001_init.sql

-- Users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(50) DEFAULT 'student',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Streams table
CREATE TABLE streams (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    level VARCHAR(50) NOT NULL, -- 'beginner' or 'intermediate'
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Modules table
CREATE TABLE modules (
    id SERIAL PRIMARY KEY,
    stream_id INTEGER REFERENCES streams(id),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    order_index INTEGER NOT NULL,
    is_published BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- User progress table
CREATE TABLE user_progress (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    module_id INTEGER REFERENCES modules(id),
    status VARCHAR(50) DEFAULT 'not_started', -- 'not_started', 'in_progress', 'completed'
    started_at TIMESTAMP,
    completed_at TIMESTAMP,
    quiz_score DECIMAL(5,2),
    assignment_score DECIMAL(5,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, module_id)
);

-- Quizzes table
CREATE TABLE quizzes (
    id SERIAL PRIMARY KEY,
    module_id INTEGER REFERENCES modules(id),
    question TEXT NOT NULL,
    options JSONB NOT NULL, -- Array of answer options
    correct_answer VARCHAR(10) NOT NULL, -- 'A', 'B', 'C', 'D'
    explanation TEXT,
    order_index INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- User quiz attempts
CREATE TABLE user_quiz_attempts (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    quiz_id INTEGER REFERENCES quizzes(id),
    selected_answer VARCHAR(10),
    is_correct BOOLEAN,
    attempted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Assignments table
CREATE TABLE assignments (
    id SERIAL PRIMARY KEY,
    module_id INTEGER REFERENCES modules(id),
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    instructions TEXT NOT NULL,
    rubric JSONB, -- JSON structure for grading rubric
    max_score DECIMAL(5,2) DEFAULT 100.00,
    due_date TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- User assignment submissions
CREATE TABLE user_assignment_submissions (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    assignment_id INTEGER REFERENCES assignments(id),
    submission_text TEXT,
    submission_files JSONB, -- Array of file references
    score DECIMAL(5,2),
    feedback TEXT,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    graded_at TIMESTAMP,
    status VARCHAR(50) DEFAULT 'submitted' -- 'submitted', 'graded', 'returned'
);

-- Create indexes for better performance
CREATE INDEX idx_user_progress_user_id ON user_progress(user_id);
CREATE INDEX idx_user_progress_module_id ON user_progress(module_id);
CREATE INDEX idx_quizzes_module_id ON quizzes(module_id);
CREATE INDEX idx_assignments_module_id ON assignments(module_id);
CREATE INDEX idx_user_quiz_attempts_user_id ON user_quiz_attempts(user_id);
CREATE INDEX idx_user_assignment_submissions_user_id ON user_assignment_submissions(user_id);
