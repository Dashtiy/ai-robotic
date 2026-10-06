const qaData = [
    {
        category: "Workplace & Tech",
        question: "How do working professionals use AI in a business setting (tonality, tech sandbox, security)?",
        answer: "Professionals use AI to enforce consistent brand tone in communication, spin up rapid coding sandboxes to prototype features for clients, and utilize enterprise zero-data-retention APIs to ensure internal proprietary information is never leaked or used for model training."
    },
    {
        category: "Risks & Reliability",
        question: "Are there risks with us becoming dependent on AI (outages, sudden regulations)?",
        answer: "Yes. System over-reliance creates single points of failure during API outages and technical debt when models change or new regulations limit previous automation pipelines. Building resilient fallbacks is mandatory."
    },
    {
        category: "Ethics & Regulation",
        question: "Do we have laws in the EU or Sweden regarding AI use?",
        answer: "Yes, the EU AI Act enforces risk-tier standards. Banned practices include manipulative AI and social scoring, while high-risk tools (like automated recruitment) require strict data audits, cybersecurity measures, and human oversight."
    },
    {
        category: "Security & Tools",
        question: "Which AIs have a good or bad reputation, and why do schools avoid free ChatGPT?",
        answer: "Standard free consumer tools often log and retain prompt data for model re-training. Educational and public institutions avoid them to prevent data leakage and comply with GDPR, preferring enterprise-grade sandboxes with strict privacy guarantees."
    },
    {
        category: "Careers & Market",
        question: "Job ads demand rapid AI workflows, but what if I want to think for myself and work in teams?",
        answer: "The job market values velocity, but durable value lies in system design, critical thinking, and team dynamics. AI is best treated as a multiplier for teamwork and brainstorming rather than a total replacement for original thought."
    },
    {
        category: "Industry Trends",
        question: "AI is in every tool (Notion, VSCode, GitHub). Will this slow down or stay everywhere?",
        answer: "The hype cycle will settle into utility. Just as spellcheck and linters became standard baseline utilities in software, AI-assisted autocompletion and contextual search are now permanent fixtures of digital tooling."
    },
    {
        category: "Careers & Market",
        question: "Are developers and designers becoming obsolete?",
        answer: "No. Roles are evolving from purely writing boilerplate syntax to high-level architecture, user experience nuance, code review, and verifying algorithmic integrity. AI writes syntax; humans solve human problems."
    },
    {
        category: "Risks & Reliability",
        question: "What are the unforeseen risks of AI learning more and more about us?",
        answer: "The risks include behavioral manipulation, privacy erosion, and echo-chamber reinforcement. Rapid model evolution can produce unforeseen feedback loops that the original creators cannot easily debug or reverse."
    },
    {
        category: "Education & Coding",
        question: "Why learn to code when AI creates templates?",
        answer: "Templates break when scaled. Understanding fundamentals like DOM manipulation, state management, security, and edge cases is required to fix errors, optimize performance, and adapt solutions to custom business needs."
    },
    {
        category: "Future Outlook",
        question: "What will our role be when AI gets significantly better in the future?",
        answer: "Our role will center on problem definition, system architecture, ethical evaluation, and validation. The focus shifts from executing code line-by-line to orchestrating solutions and maintaining quality control."
    },
    {
        category: "Practical Setup",
        question: "How do you set up AI for personal use and give the right instructions?",
        answer: "Provide clear context, specify the exact persona/role, define the required output format, set explicit constraints, and iterate incrementally instead of expecting perfection from a single prompt."
    },
    {
        category: "Practical Setup",
        question: "What is the difference between using AI as a question-asker vs. writing code?",
        answer: "Using AI as a question-asker is interactive research and conceptual learning. Using it to write code requires strict verification, sandbox testing, and manual auditing before pushing to production."
    },
    {
        category: "Security & Ethics",
        question: "Should big corporations use AI in programming, and what happens if an AI provider gets hacked?",
        answer: "Corporations must use isolated on-premise or compliant enterprise APIs. If an AI vendor gets breached, any proprietary code or customer data transmitted in prompts without zero-retention protections could be compromised."
    },
    {
        category: "Ethics & Governance",
        question: "Who controls the information AI receives and who determines what is considered 'true'?",
        answer: "Training datasets, curation filters, and RLHF (Reinforcement Learning from Human Feedback) guidelines set by AI companies shape the output. Since datasets reflect inherent biases, outputs should always be cross-referenced."
    },
    {
        category: "Education & Coding",
        question: "What happens if AI goes away, and how do we code websites without it?",
        answer: "Developers who master fundamental HTML, CSS, JavaScript, and programming paradigms remain self-sufficient. Foundational literacy ensures you can build and debug independently under any condition."
    },
    {
        category: "Practical Setup",
        question: "How do you work effectively with AI?",
        answer: "Treat it as an articulate junior assistant: review everything it outputs, break large problems into modular sub-tasks, challenge its assumptions, and maintain ultimate ownership of your work."
    }
];

// Function to render Q&A cards dynamically into the grid
function renderQA() {
    const container = document.getElementById('qa-container');
    if (!container) return;

    // Render cards and attach data-index to each one
    container.innerHTML = qaData.map((item, index) => `
        <article class="inquiry-card" data-index="${index}">
            <span class="category-badge">${item.category}</span>
            <h3>${item.question}</h3>
            <p>${item.answer.substring(0, 85)}...</p>
        </article>
    `).join('');

    // Add click event listeners to every card
    document.querySelectorAll('.inquiry-card').forEach(card => {
        card.addEventListener('click', () => {
            const index = card.getAttribute('data-index');
            openModal(qaData[index]);
        });
    });
}

function openModal(data) {
    const modal = document.getElementById('qa-modal');
    document.getElementById('modal-category').textContent = data.category;
    document.getElementById('modal-question').textContent = data.question;
    document.getElementById('modal-answer').textContent = data.answer;
    modal.classList.add('active');
}

function closeModal() {
    const modal = document.getElementById('qa-modal');
    modal.classList.remove('active');
}

// Event listeners for closing the modal
document.addEventListener('DOMContentLoaded', () => {
    renderQA();

    const modal = document.getElementById('qa-modal');
    const closeBtn = document.getElementById('modal-close-btn');

    // Close on button click
    closeBtn.addEventListener('click', closeModal);

    // Close when clicking the dark backdrop outside the box
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close when pressing the Escape key on the keyboard
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});

// Run on page load
document.addEventListener('DOMContentLoaded', renderQA);