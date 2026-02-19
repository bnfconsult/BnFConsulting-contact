/* ============================================
   BnFConsulting — Quiz Décisionnel
   Scoring & Logique de recommandation
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // =====================
    // DATA — Questions
    // =====================
    const questions = [
        {
            id: 1,
            text: 'Quel est votre problème le plus visible aujourd\'hui ?',
            answers: [
                { text: 'Je manque de visibilité', category: 'A' },
                { text: 'Mon image ne reflète pas mon niveau réel', category: 'B' },
                { text: 'Mon organisation interne est floue', category: 'C' },
                { text: 'Je perds du temps sur des tâches répétitives', category: 'D' },
                { text: 'Je ne sais pas où sont mes vrais leviers', category: 'E' }
            ]
        },
        {
            id: 2,
            text: 'Votre priorité immédiate serait :',
            answers: [
                { text: 'Attirer plus de clients', category: 'A' },
                { text: 'Améliorer mon image et ma crédibilité', category: 'B' },
                { text: 'Structurer mon entreprise', category: 'C' },
                { text: 'Gagner du temps grâce à des systèmes', category: 'D' },
                { text: 'Clarifier ma stratégie', category: 'E' }
            ]
        },
        {
            id: 3,
            text: 'Aujourd\'hui, votre présence digitale est :',
            answers: [
                { text: 'Faible ou inexistante', category: 'A' },
                { text: 'Présente mais peu performante', category: 'E' },
                { text: 'Visuellement moyenne', category: 'B' },
                { text: 'Dispersée et incohérente', category: 'C' },
                { text: 'Je ne sais pas comment elle performe', category: 'E' }
            ]
        },
        {
            id: 4,
            text: 'Si un expert analyse votre entreprise demain, il découvrirait probablement :',
            answers: [
                { text: 'Un manque de référencement', category: 'A' },
                { text: 'Un manque de contenu visuel impactant', category: 'B' },
                { text: 'Un manque de structure stratégique', category: 'C' },
                { text: 'Un manque d\'automatisation', category: 'D' },
                { text: 'Un manque d\'indicateurs fiables', category: 'E' }
            ]
        },
        {
            id: 5,
            text: 'Ce que vous voulez vraiment :',
            answers: [
                { text: 'Être plus visible localement et en ligne', category: 'A' },
                { text: 'Avoir une image forte et professionnelle', category: 'B' },
                { text: 'Mettre en place des systèmes efficaces', category: 'D' },
                { text: 'Comprendre exactement quoi faire et dans quel ordre', category: 'C' },
                { text: 'Piloter votre croissance avec des données claires', category: 'E' }
            ]
        }
    ];

    // =====================
    // DATA — Scénarios
    // =====================
    const scenarios = {
        A: {
            icon: '🔍',
            label: 'Votre recommandation',
            title: 'Votre priorité : renforcer votre visibilité.',
            text: 'Un audit digital complet permettra d\'identifier vos leviers SEO, votre positionnement et vos axes d\'optimisation.',
            ctaText: 'Réserver un diagnostic stratégique',
            ctaUrl: 'https://calendar.app.google/owbWjVDz11BNwd2V6',
            ctaType: 'primary'
        },
        B: {
            icon: '🎯',
            label: 'Votre recommandation',
            title: 'Votre priorité : renforcer votre image.',
            text: 'Une direction artistique, des visuels professionnels et un plan drone structuré peuvent transformer votre perception.',
            ctaText: 'Contacter BnFConsulting',
            ctaUrl: 'mailto:bnfconsulting.contact@gmail.com',
            ctaType: 'primary'
        },
        C: {
            icon: '🧭',
            label: 'Votre recommandation',
            title: 'Votre priorité : clarifier votre trajectoire.',
            text: 'Un diagnostic stratégique complet permettra de structurer vos priorités et vos indicateurs.',
            ctaText: 'Réserver un diagnostic stratégique',
            ctaUrl: 'https://calendar.app.google/owbWjVDz11BNwd2V6',
            ctaType: 'primary'
        },
        D: {
            icon: '⚙️',
            label: 'Votre recommandation',
            title: 'Votre priorité : structurer vos systèmes.',
            text: 'L\'automatisation et l\'intégration d\'IA peuvent vous faire gagner du temps et optimiser vos processus.',
            ctaText: 'Contacter BnFConsulting',
            ctaUrl: 'mailto:bnfconsulting.contact@gmail.com',
            ctaType: 'primary'
        },
        E: {
            icon: '📊',
            label: 'Votre recommandation',
            title: 'Votre priorité : piloter par la donnée.',
            text: 'Mettre en place des indicateurs clairs et des dashboards vous permettra de reprendre le contrôle.',
            ctaText: 'Réserver un diagnostic stratégique',
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
            <div class="answers-list" role="radiogroup" aria-label="Réponses possibles">
                ${answersHTML}
            </div>
        `;

        // Trigger fade-in animation
        questionContainer.classList.remove('fade-in');
        void questionContainer.offsetWidth; // Force reflow
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

        // Visual feedback — selected state
        const allBtns = questionContainer.querySelectorAll('.answer-btn');
        allBtns.forEach(b => {
            b.classList.remove('selected');
            b.style.pointerEvents = 'none'; // Prevent double-clicks
        });
        btn.classList.add('selected');

        // Increment score
        scores[category]++;

        // Delay then advance
        setTimeout(() => {
            currentQuestion++;

            if (currentQuestion < questions.length) {
                // Fade out then render next
                questionContainer.classList.add('fade-out');
                questionContainer.classList.remove('fade-in');

                setTimeout(() => {
                    questionContainer.classList.remove('fade-out');
                    renderQuestion();
                }, 300);
            } else {
                // Show result
                showResult();
            }
        }, 500);
    }

    // =====================
    // CALCULATE WINNER
    // =====================
    function getWinningCategory() {
        let maxScore = 0;
        let winner = 'C'; // Default fallback

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

        // Determine if CTA link is external or mailto
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
                <button class="restart-btn" id="restartQuiz" aria-label="Recommencer le diagnostic">
                    ↻ Recommencer le diagnostic
                </button>
            </div>
        `;

        // Bind restart
        document.getElementById('restartQuiz').addEventListener('click', restartQuiz);
    }

    // =====================
    // RESTART QUIZ
    // =====================
    function restartQuiz() {
        // Reset state
        currentQuestion = 0;
        Object.keys(scores).forEach(key => scores[key] = 0);

        // Reset UI
        quizResult.style.display = 'none';
        quizIntro.style.display = 'block';
    }

    // --- Bouton retour en haut ---
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