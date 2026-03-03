/* ============================================
   BnFConsulting — Decision Quiz (English)
   Scoring & Recommendation Logic
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // =====================
    // DATA — Questions
    // =====================
    const questions = [
        {
            id: 1,
            text: 'What is your most visible problem today?',
            answers: [
                { text: 'I lack visibility', category: 'A' },
                { text: 'My image doesn\'t reflect my actual level', category: 'B' },
                { text: 'My internal organization is unclear', category: 'C' },
                { text: 'I waste time on repetitive tasks', category: 'D' },
                { text: 'I don\'t know where my real levers are', category: 'E' }
            ]
        },
        {
            id: 2,
            text: 'Your immediate priority would be:',
            answers: [
                { text: 'Attract more clients', category: 'A' },
                { text: 'Improve my image and credibility', category: 'B' },
                { text: 'Structure my business', category: 'C' },
                { text: 'Save time through systems', category: 'D' },
                { text: 'Clarify my strategy', category: 'E' }
            ]
        },
        {
            id: 3,
            text: 'Today, your digital presence is:',
            answers: [
                { text: 'Weak or non-existent', category: 'A' },
                { text: 'Present but underperforming', category: 'E' },
                { text: 'Visually average', category: 'B' },
                { text: 'Scattered and inconsistent', category: 'C' },
                { text: 'I don\'t know how it performs', category: 'E' }
            ]
        },
        {
            id: 4,
            text: 'If an expert analyzed your business tomorrow, they would probably discover:',
            answers: [
                { text: 'A lack of SEO', category: 'A' },
                { text: 'A lack of impactful visual content', category: 'B' },
                { text: 'A lack of strategic structure', category: 'C' },
                { text: 'A lack of automation', category: 'D' },
                { text: 'A lack of reliable indicators', category: 'E' }
            ]
        },
        {
            id: 5,
            text: 'What you truly want:',
            answers: [
                { text: 'Be more visible locally and online', category: 'A' },
                { text: 'Have a strong, professional image', category: 'B' },
                { text: 'Implement effective systems', category: 'D' },
                { text: 'Know exactly what to do and in what order', category: 'C' },
                { text: 'Drive your growth with clear data', category: 'E' }
            ]
        }
    ];

    // =====================
    // DATA — Scenarios
    // =====================
    const scenarios = {
        A: {
            icon: '🔍',
            label: 'Your recommendation',
            title: 'Your priority: strengthen your visibility.',
            text: 'A comprehensive digital audit will identify your SEO levers, positioning and optimization opportunities.',
            ctaText: 'Book a strategic diagnosis',
            ctaUrl: 'https://calendar.app.google/owbWjVDz11BNwd2V6',
            ctaType: 'primary'
        },
        B: {
            icon: '🎯',
            label: 'Your recommendation',
            title: 'Your priority: strengthen your image.',
            text: 'Art direction, professional visuals and a structured drone plan can transform your perception.',
            ctaText: 'Book an appointment',
            ctaUrl: 'https://calendar.app.google/owbWjVDz11BNwd2V6',
            ctaType: 'primary'
        },
        C: {
            icon: '🧭',
            label: 'Your recommendation',
            title: 'Your priority: clarify your trajectory.',
            text: 'A comprehensive strategic diagnosis will help structure your priorities and indicators.',
            ctaText: 'Book a strategic diagnosis',
            ctaUrl: 'https://calendar.app.google/owbWjVDz11BNwd2V6',
            ctaType: 'primary'
        },
        D: {
            icon: '⚙️',
            label: 'Your recommendation',
            title: 'Your priority: structure your systems.',
            text: 'Automation and AI integration can save you time and optimize your processes.',
            ctaText: 'Book an appointment',
            ctaUrl: 'https://calendar.app.google/owbWjVDz11BNwd2V6',
            ctaType: 'primary'
        },
        E: {
            icon: '📊',
            label: 'Your recommendation',
            title: 'Your priority: drive through data.',
            text: 'Setting up clear indicators and dashboards will allow you to regain control.',
            ctaText: 'Book a strategic diagnosis',
            ctaUrl: 'https://calendar.app.google/owbWjVDz11BNwd2V6',
            ctaType: 'primary'
        }
    };

    // =====================
    // STATE
    // =====================
    let currentQuestion = 0;
    const scores = { A: 0, B: 0, C: 0, D: 0, E: 0 };

    // =====================
    // DOM ELEMENTS
    // =====================
    const quizIntro = document.getElementById('quizIntro');
    const quizQuestions = document.getElementById('quizQuestions');
    const quizResult = document.getElementById('quizResult');
    const questionContainer = document.getElementById('questionContainer');
    const progressStep = document.getElementById('progressStep');
    const progressFill = document.getElementById('progressFill');
    const progressBar = document.getElementById('progressBar');
    const resultCard = document.getElementById('resultCard');
    const startBtn = document.getElementById('startQuiz');

    // =====================
    // START QUIZ
    // =====================
    startBtn.addEventListener('click', () => {
        quizIntro.style.display = 'none';
        quizQuestions.style.display = 'block';
        renderQuestion();
    });

    // =====================
    // RENDER QUESTION
    // =====================
    function renderQuestion() {
        const q = questions[currentQuestion];
        const step = currentQuestion + 1;

        // Update progress
        progressStep.textContent = `${step}/5`;
        progressFill.style.width = `${(step / 5) * 100}%`;
        progressBar.setAttribute('aria-valuenow', step);

        // Build HTML
        const answersHTML = q.answers.map((answer, i) => {
            const letters = ['A', 'B', 'C', 'D', 'E'];
            return `
                <button class="answer-btn"
                        data-category="${answer.category}"
                        data-index="${i}"
                        aria-label="${answer.text}"
                        tabindex="0">
                    <span class="answer-index">${letters[i]}</span>
                    <span class="answer-text">${answer.text}</span>
                </button>
            `;
        }).join('');

        questionContainer.innerHTML = `
            <div class="question-number">0${step}</div>
            <h2 class="question-text">${q.text}</h2>
            <div class="answers-list" role="radiogroup" aria-label="Possible answers">
                ${answersHTML}
            </div>
        `;

        // Trigger fade-in animation
        questionContainer.classList.remove('fade-in');
        void questionContainer.offsetWidth;
        questionContainer.classList.add('fade-in');

        // Bind answer clicks
        const answerBtns = questionContainer.querySelectorAll('.answer-btn');
        answerBtns.forEach(btn => {
            btn.addEventListener('click', () => handleAnswer(btn));
        });
    }

    // =====================
    // HANDLE ANSWER
    // =====================
    function handleAnswer(btn) {
        const category = btn.dataset.category;

        const allBtns = questionContainer.querySelectorAll('.answer-btn');
        allBtns.forEach(b => {
            b.classList.remove('selected');
            b.style.pointerEvents = 'none';
        });
        btn.classList.add('selected');

        scores[category]++;

        setTimeout(() => {
            currentQuestion++;

            if (currentQuestion < questions.length) {
                questionContainer.classList.add('fade-out');
                questionContainer.classList.remove('fade-in');

                setTimeout(() => {
                    questionContainer.classList.remove('fade-out');
                    renderQuestion();
                }, 300);
            } else {
                showResult();
            }
        }, 500);
    }

    // =====================
    // CALCULATE WINNER
    // =====================
    function getWinningCategory() {
        let maxScore = 0;
        let winner = 'C';

        for (const [category, score] of Object.entries(scores)) {
            if (score > maxScore) {
                maxScore = score;
                winner = category;
            }
        }

        return winner;
    }

    // =====================
    // SHOW RESULT
    // =====================
    function showResult() {
        const winner = getWinningCategory();
        const scenario = scenarios[winner];

        quizQuestions.style.display = 'none';
        quizResult.style.display = 'block';

        const isExternal = scenario.ctaUrl.startsWith('http');
        const targetAttr = isExternal ? 'target="_blank" rel="noopener"' : '';

        resultCard.innerHTML = `
            <div class="result-icon">${scenario.icon}</div>
            <p class="result-label">${scenario.label}</p>
            <h2 class="result-title">${scenario.title}</h2>
            <p class="result-text">${scenario.text}</p>
            <div class="result-ctas">
                <a href="${scenario.ctaUrl}" ${targetAttr} class="btn btn-${scenario.ctaType} btn-large" aria-label="${scenario.ctaText}">
                    ${scenario.ctaText}
                </a>
                <button class="restart-btn" id="restartQuiz" aria-label="Restart the diagnosis">
                    ↻ Restart the diagnosis
                </button>
            </div>
        `;

        document.getElementById('restartQuiz').addEventListener('click', restartQuiz);
    }

    // =====================
    // RESTART QUIZ
    // =====================
    function restartQuiz() {
        currentQuestion = 0;
        Object.keys(scores).forEach(key => scores[key] = 0);

        quizResult.style.display = 'none';
        quizIntro.style.display = 'block';
    }

    // --- Back to top button ---
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }, { passive: true });

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

});