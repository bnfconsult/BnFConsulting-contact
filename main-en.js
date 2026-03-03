/* ============================================
   BnFConsulting — Interactions (English)
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // --- Navigation scroll effect ---
    const nav = document.getElementById('nav');

    const handleNavScroll = () => {
        if (window.scrollY > 60) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleNavScroll, { passive: true });

    // --- Mobile menu toggle ---
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            navToggle.classList.remove('active');
        });
    });

    // --- Pillar hover → open and stay open ---
    const pillarCards = document.querySelectorAll('.pillar-card');

    pillarCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('open');
        });
    });

    // --- Scroll reveal animations ---
    const revealElements = document.querySelectorAll(
        '.problem-card, .pillar-card, .target-card, .journey-step, .service-item, .data-bar, .section-label, .section-title, .section-intro, .speciale-card'
    );

    revealElements.forEach(el => el.classList.add('reveal'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));

    // --- Partner cards scroll reveal ---
    const partnerCards = document.querySelectorAll('.partner-card');
    if (partnerCards.length) {
        const partnerObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    partnerObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -30px 0px'
        });
        partnerCards.forEach(card => partnerObserver.observe(card));
    }

    // --- Manifeste blocs fade-in ---
    const manifesteBlocs = document.querySelectorAll('.manifeste-bloc');
    if (manifesteBlocs.length) {
        const manifesteObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    manifesteObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        });
        manifesteBlocs.forEach(bloc => manifesteObserver.observe(bloc));
    }

    // --- Smooth scroll for anchor links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const offset = nav.offsetHeight + 20;
                const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    // =============================================
    // DIAGNOSTIC EXPRESS — Inline Quiz Bubble
    // =============================================
    const diagBubble = document.getElementById('diagBubble');
    const diagStart = document.getElementById('diagStart');
    const diagBody = document.getElementById('diagBody');
    const diagArrow = document.getElementById('diagArrow');

    if (diagBubble && diagStart && diagBody) {

        const diagQuestions = [
            {
                text: 'What is your most visible problem today?',
                answers: [
                    { text: 'I lack visibility', cat: 'A' },
                    { text: 'My image doesn\'t reflect my level', cat: 'B' },
                    { text: 'My internal organization is unclear', cat: 'C' },
                    { text: 'I waste time on repetitive tasks', cat: 'D' },
                    { text: 'I don\'t know where my real levers are', cat: 'E' }
                ]
            },
            {
                text: 'Your immediate priority would be:',
                answers: [
                    { text: 'Attract more clients', cat: 'A' },
                    { text: 'Improve my image and credibility', cat: 'B' },
                    { text: 'Structure my business', cat: 'C' },
                    { text: 'Save time through systems', cat: 'D' },
                    { text: 'Clarify my strategy', cat: 'E' }
                ]
            },
            {
                text: 'Today, your digital presence is:',
                answers: [
                    { text: 'Weak or non-existent', cat: 'A' },
                    { text: 'Present but underperforming', cat: 'E' },
                    { text: 'Visually average', cat: 'B' },
                    { text: 'Scattered and inconsistent', cat: 'C' },
                    { text: 'I don\'t know how it performs', cat: 'E' }
                ]
            },
            {
                text: 'An expert would probably discover:',
                answers: [
                    { text: 'A lack of SEO', cat: 'A' },
                    { text: 'A lack of impactful visual content', cat: 'B' },
                    { text: 'A lack of strategic structure', cat: 'C' },
                    { text: 'A lack of automation', cat: 'D' },
                    { text: 'A lack of reliable indicators', cat: 'E' }
                ]
            },
            {
                text: 'What you truly want:',
                answers: [
                    { text: 'Be more visible online', cat: 'A' },
                    { text: 'Have a strong, professional image', cat: 'B' },
                    { text: 'Implement effective systems', cat: 'D' },
                    { text: 'Know what to do and in what order', cat: 'C' },
                    { text: 'Drive my growth through data', cat: 'E' }
                ]
            }
        ];

        const diagScenarios = {
            A: {
                icon: '🔍',
                title: 'Your priority: strengthen your visibility.',
                text: 'A comprehensive digital audit will identify your SEO levers and optimization opportunities.',
                ctaText: 'Book a strategic diagnosis',
                ctaUrl: 'https://calendar.app.google/owbWjVDz11BNwd2V6'
            },
            B: {
                icon: '🎯',
                title: 'Your priority: strengthen your image.',
                text: 'Art direction, professional visuals and a drone plan can transform your perception.',
                ctaText: 'Book an appointment',
                ctaUrl: 'https://calendar.app.google/owbWjVDz11BNwd2V6'
            },
            C: {
                icon: '🧭',
                title: 'Your priority: clarify your trajectory.',
                text: 'A comprehensive strategic diagnosis will help structure your priorities and indicators.',
                ctaText: 'Book a strategic diagnosis',
                ctaUrl: 'https://calendar.app.google/owbWjVDz11BNwd2V6'
            },
            D: {
                icon: '⚙️',
                title: 'Your priority: structure your systems.',
                text: 'Automation and AI can save you time and optimize your processes.',
                ctaText: 'Book an appointment',
                ctaUrl: 'https://calendar.app.google/owbWjVDz11BNwd2V6'
            },
            E: {
                icon: '📊',
                title: 'Your priority: drive through data.',
                text: 'Clear indicators and dashboards will allow you to regain control.',
                ctaText: 'Book a strategic diagnosis',
                ctaUrl: 'https://calendar.app.google/owbWjVDz11BNwd2V6'
            }
        };

        let diagCurrent = 0;
        let diagStarted = false;
        const diagScores = { A: 0, B: 0, C: 0, D: 0, E: 0 };
        const letters = ['A', 'B', 'C', 'D', 'E'];

        // Toggle bubble open
        diagStart.addEventListener('click', () => {
            if (!diagStarted) {
                diagStarted = true;
                diagBubble.classList.add('active');
                renderDiagQuestion();
            } else {
                diagBubble.classList.toggle('active');
            }
        });

        // Render dots
        function renderDots() {
            let dots = '';
            for (let i = 0; i < 5; i++) {
                let cls = 'diag-dot';
                if (i < diagCurrent) cls += ' done';
                else if (i === diagCurrent) cls += ' current';
                dots += `<span class="${cls}"></span>`;
            }
            return `
                <div class="diag-progress">
                    <div class="diag-progress-dots">${dots}</div>
                    <span class="diag-progress-label">${diagCurrent + 1}/5</span>
                </div>
            `;
        }

        // Render question
        function renderDiagQuestion() {
            const q = diagQuestions[diagCurrent];
            const answersHTML = q.answers.map((a, i) => `
                <button class="diag-answer-btn" data-cat="${a.cat}" data-idx="${i}">
                    <span class="diag-answer-idx">${letters[i]}</span>
                    <span class="diag-answer-text">${a.text}</span>
                </button>
            `).join('');

            diagBody.innerHTML = `
                ${renderDots()}
                <div class="diag-question">
                    <p class="diag-question-text">${q.text}</p>
                    <div class="diag-answers">${answersHTML}</div>
                </div>
            `;

            // Bind clicks
            diagBody.querySelectorAll('.diag-answer-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    handleDiagAnswer(btn);
                });
            });
        }

        // Handle answer
        function handleDiagAnswer(btn) {
            const cat = btn.dataset.cat;

            // Visual feedback
            diagBody.querySelectorAll('.diag-answer-btn').forEach(b => {
                b.style.pointerEvents = 'none';
                b.classList.remove('selected');
            });
            btn.classList.add('selected');

            // Score
            diagScores[cat]++;

            // Advance
            setTimeout(() => {
                diagCurrent++;
                if (diagCurrent < diagQuestions.length) {
                    renderDiagQuestion();
                } else {
                    showDiagResult();
                }
            }, 400);
        }

        // Get winner
        function getDiagWinner() {
            let max = 0, winner = 'C';
            for (const [cat, score] of Object.entries(diagScores)) {
                if (score > max) { max = score; winner = cat; }
            }
            return winner;
        }

        // Show result
        function showDiagResult() {
            const s = diagScenarios[getDiagWinner()];
            const isExternal = s.ctaUrl.startsWith('http');
            const target = isExternal ? ' target="_blank" rel="noopener"' : '';

            diagBody.innerHTML = `
                <div class="diag-result">
                    <div class="diag-result-icon">${s.icon}</div>
                    <h3 class="diag-result-title">${s.title}</h3>
                    <p class="diag-result-text">${s.text}</p>
                    <a href="${s.ctaUrl}"${target} class="diag-result-cta">${s.ctaText}</a>
                    <button class="diag-restart" id="diagRestart">↻ Start over</button>
                </div>
            `;

            document.getElementById('diagRestart').addEventListener('click', (e) => {
                e.stopPropagation();
                diagCurrent = 0;
                Object.keys(diagScores).forEach(k => diagScores[k] = 0);
                renderDiagQuestion();
            });
        }
    }

    // --- FAB Menu (bottom left burger) ---
    const fabMenu = document.getElementById('fabMenu');
    const fabTrigger = document.getElementById('fabTrigger');

    if (fabTrigger && fabMenu) {
        fabTrigger.addEventListener('click', (e) => {
            e.stopPropagation();
            fabMenu.classList.toggle('open');
        });

        // Close when clicking elsewhere
        document.addEventListener('click', (e) => {
            if (!fabMenu.contains(e.target)) {
                fabMenu.classList.remove('open');
            }
        });

        // Close when clicking a menu link
        fabMenu.querySelectorAll('.fab-link').forEach(link => {
            link.addEventListener('click', () => {
                fabMenu.classList.remove('open');
            });
        });
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

    // --- Stack Viewer (Paginated card viewer) ---
    const stackTrack = document.getElementById('stackTrack');
    const stackPrev = document.getElementById('stackPrev');
    const stackNext = document.getElementById('stackNext');
    const stackCounter = document.getElementById('stackCounter');
    const stackHint = document.getElementById('stackHint');

    if (stackTrack) {
        const cards = stackTrack.querySelectorAll('.stack-card');
        const total = cards.length;
        let current = 0;
        let direction = 'next';

        function updateStack() {
            cards.forEach((card, i) => {
                card.classList.remove('active', 'exit-left', 'exit-right');
                if (i === current) {
                    card.classList.add('active');
                }
            });

            const num = String(current + 1).padStart(2, '0');
            const tot = String(total).padStart(2, '0');
            stackCounter.textContent = `${num} / ${tot}`;

            stackPrev.disabled = current === 0;
            stackNext.disabled = current === total - 1;

            if (current > 0 && stackHint) {
                stackHint.classList.add('hidden');
            }
        }

        function goTo(index, dir) {
            if (index < 0 || index >= total || index === current) return;

            const exitClass = dir === 'next' ? 'exit-left' : 'exit-right';
            cards[current].classList.remove('active');
            cards[current].classList.add(exitClass);

            current = index;
            direction = dir;
            updateStack();
        }

        updateStack();

        stackPrev.addEventListener('click', () => goTo(current - 1, 'prev'));
        stackNext.addEventListener('click', () => goTo(current + 1, 'next'));

        document.addEventListener('keydown', (e) => {
            const rect = stackTrack.getBoundingClientRect();
            const inView = rect.top < window.innerHeight && rect.bottom > 0;
            if (!inView) return;

            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                e.preventDefault();
                goTo(current + 1, 'next');
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault();
                goTo(current - 1, 'prev');
            }
        });

        let touchStartX = 0;
        let touchEndX = 0;

        stackTrack.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        stackTrack.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            const diff = touchStartX - touchEndX;
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    goTo(current + 1, 'next');
                } else {
                    goTo(current - 1, 'prev');
                }
            }
        }, { passive: true });
    }

    // --- Scripted Chatbot ---
    const chatbotTrigger = document.getElementById('chatbotTrigger');
    const chatbotPanel = document.getElementById('chatbotPanel');
    const chatbotClose = document.getElementById('chatbotClose');
    const chatbotTooltip = document.getElementById('chatbotTooltip');
    const chatbotMessages = document.getElementById('chatbotMessages');

    if (chatbotTrigger && chatbotPanel && chatbotMessages) {

        const CAL = 'https://calendar.app.google/owbWjVDz11BNwd2V6';

        function addBubble(text) {
            var b = document.createElement('div');
            b.className = 'cb-bubble';
            b.innerHTML = text;
            chatbotMessages.appendChild(b);
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }

        function addButtons(btns) {
            var wrap = document.createElement('div');
            wrap.className = 'cb-buttons';
            btns.forEach(function(item) {
                var btn = document.createElement('button');
                btn.className = 'cb-btn';
                btn.textContent = item.label;
                btn.addEventListener('click', function() { item.action(); });
                wrap.appendChild(btn);
            });
            chatbotMessages.appendChild(wrap);
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }

        function addCTAs(ctas) {
            var wrap = document.createElement('div');
            wrap.style.cssText = 'animation:cbFadeIn 0.3s ease;';
            ctas.forEach(function(c) {
                var a = document.createElement('a');
                a.className = 'cb-cta';
                a.textContent = c.label;
                a.href = c.url;
                if (c.url.indexOf('http') === 0) { a.target = '_blank'; a.rel = 'noopener'; }
                wrap.appendChild(a);
            });
            chatbotMessages.appendChild(wrap);
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }

        function addBack() {
            var btn = document.createElement('button');
            btn.className = 'cb-back';
            btn.textContent = '← Back to menu';
            btn.addEventListener('click', function() { showWelcome(); });
            chatbotMessages.appendChild(btn);
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }

        function clear() { chatbotMessages.innerHTML = ''; }

        // --- CALLBACK FORM IN CHATBOT ---
        function showRecallForm() {
            clear();
            addBubble('Leave your details, we\'ll get back to you within 24 hours.');
            var form = document.createElement('form');
            form.className = 'cb-form';
            form.innerHTML = '<input type="text" name="name" placeholder="Your name" required>' +
                '<input type="email" name="email" placeholder="Your email" required>' +
                '<input type="tel" name="phone" placeholder="Phone">' +
                '<textarea name="message" rows="2" placeholder="Your need in a few words..."></textarea>' +
                '<input type="hidden" name="_subject" value="Callback request — Chatbot BnFConsulting (EN)">' +
                '<button type="submit" class="cb-cta" style="border:none;cursor:pointer;text-align:center;display:block;width:100%;padding:10px;">Send</button>';
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                var data = new FormData(form);
                fetch('https://formspree.io/f/mbdaboon', { method: 'POST', body: data, headers: { 'Accept': 'application/json' } })
                .then(function(r) {
                    if (r.ok) {
                        clear();
                        addBubble('Thank you! We have received your request and will get back to you shortly.');
                        addBack();
                    } else {
                        addBubble('An error occurred. Please try again or contact us by email.');
                    }
                })
                .catch(function() {
                    addBubble('An error occurred. Please try again or contact us by email.');
                });
            });
            chatbotMessages.appendChild(form);
            addBack();
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }

        // --- SCENARIO 1: What does BnF do? ---
        function showQueFait() {
            clear();
            addBubble('BnFConsulting orchestrates strategy, operations and growth to transform scattered structures into coherent, manageable systems.');
            setTimeout(function() {
                addBubble('Which area would you like to know more about?');
                addButtons([
                    { label: 'Strategy', action: showStrategie },
                    { label: 'Operations', action: showOperations },
                    { label: 'Growth', action: showCroissance },
                    { label: 'Strategic audit', action: showAudit }
                ]);
            }, 400);
        }

        function showStrategie() {
            clear();
            addBubble('We analyze your positioning, visibility and hidden levers to define a clear trajectory.');
            addCTAs([
                { label: 'Discover our services', url: 'prestations.html#cat-strategie' },
                { label: 'Book a diagnosis', url: CAL }
            ]);
            addButtons([{ label: 'Get a callback', action: showRecallForm }]);
            addBack();
        }

        function showOperations() {
            clear();
            addBubble('We turn strategy into concrete systems: automation, CRM, organization, data-driven management.');
            addCTAs([
                { label: 'Discover our services', url: 'prestations.html#cat-operations' },
                { label: 'Book a diagnosis', url: CAL }
            ]);
            addButtons([{ label: 'Get a callback', action: showRecallForm }]);
            addBack();
        }

        function showCroissance() {
            clear();
            addBubble('We amplify what is structured: SEO, image, visibility, targeted lever activation.');
            addCTAs([
                { label: 'Discover our services', url: 'prestations.html#cat-croissance' },
                { label: 'Book a diagnosis', url: CAL }
            ]);
            addButtons([{ label: 'Get a callback', action: showRecallForm }]);
            addBack();
        }

        function showAudit() {
            clear();
            addBubble('The audit is our core product. It reveals invisible losses, internal inconsistencies and growth barriers.');
            addCTAs([
                { label: 'Discover our services', url: 'prestations.html#cat-strategie' },
                { label: 'Book a diagnosis', url: CAL }
            ]);
            addButtons([{ label: 'Get a callback', action: showRecallForm }]);
            addBack();
        }

        // --- SCENARIO 2: How does it work? ---
        function showComment() {
            clear();
            addBubble('Each business follows a structured path:');
            setTimeout(function() {
                addBubble('1. Strategic diagnosis<br>2. Priority identification<br>3. Operational structuring<br>4. Lever activation<br>5. Data-driven management');
                setTimeout(function() {
                    addBubble('Would you like to understand a step in detail?');
                    addButtons([
                        { label: 'The diagnosis', action: showDiagnostic },
                        { label: 'The structuring', action: showStructuration },
                        { label: 'The activation', action: showActivation },
                        { label: 'Book an appointment', action: function() { window.open(CAL, '_blank'); } }
                    ]);
                }, 300);
            }, 400);
        }

        function showDiagnostic() {
            clear();
            addBubble('The strategic diagnosis is a 30-minute exchange to identify your untapped levers, invisible losses and real priorities.<br><br>It is followed by a digital audit resulting in a strategic development report.');
            addCTAs([
                { label: 'Discover our services', url: 'prestations.html#cat-strategie' },
                { label: 'Book a diagnosis', url: CAL }
            ]);
            addButtons([{ label: 'Get a callback', action: showRecallForm }]);
            addBack();
        }

        function showStructuration() {
            clear();
            addBubble('Structuring turns your priorities into a concrete action plan: processes, tools, organization, management indicators.');
            addCTAs([
                { label: 'Discover our services', url: 'prestations.html#cat-operations' },
                { label: 'Book a diagnosis', url: CAL }
            ]);
            addButtons([{ label: 'Get a callback', action: showRecallForm }]);
            addBack();
        }

        function showActivation() {
            clear();
            addBubble('Activation sets in motion what has been structured: deployment, automation, visibility, measurable growth.');
            addCTAs([
                { label: 'Discover our services', url: 'prestations.html#cat-croissance' },
                { label: 'Book a diagnosis', url: CAL }
            ]);
            addButtons([{ label: 'Get a callback', action: showRecallForm }]);
            addBack();
        }

        // --- SCENARIO 3: I have a specific need ---
        function showBesoin() {
            clear();
            addBubble('What is your main challenge right now?');
            addButtons([
                { label: 'Lack of visibility', action: function() { showBesoinDetail('Your business has potential but remains invisible. We structure your positioning, image and channels to generate coherent, lasting visibility.', 'prestations.html#cat-croissance'); } },
                { label: 'Unclear internal organization', action: function() { showBesoinDetail('When processes are unclear, energy is scattered. We clarify roles, workflows and tools to create a manageable system.', 'prestations.html#cat-operations'); } },
                { label: 'Unstable growth', action: function() { showBesoinDetail('Growth without structure eventually runs out of steam. We identify hidden barriers and build the foundations for controlled growth.', 'prestations.html#cat-strategie'); } },
                { label: 'Need for automation', action: function() { showBesoinDetail('Repetitive tasks slow down your development. We automate what can be to free up strategic time.', 'prestations.html#cat-operations'); } }
            ]);
        }

        function showBesoinDetail(text, prestaUrl) {
            clear();
            addBubble(text);
            addCTAs([
                { label: 'Discover our services', url: prestaUrl },
                { label: 'Book a diagnosis', url: CAL }
            ]);
            addButtons([{ label: 'Get a callback', action: showRecallForm }]);
            addBack();
        }

        // --- WELCOME MESSAGE ---
        function showWelcome() {
            clear();
            addBubble('Hello.<br>Would you like to understand what BnFConsulting does or how our system works?');
            setTimeout(function() {
                addButtons([
                    { label: 'What does BnF do?', action: showQueFait },
                    { label: 'How does it work?', action: showComment },
                    { label: 'I have a specific need', action: showBesoin },
                    { label: 'Get a callback', action: showRecallForm }
                ]);
            }, 300);
        }

        // Init
        showWelcome();

        // Toggle panel
        chatbotTrigger.addEventListener('click', function(e) {
            e.stopPropagation();
            chatbotPanel.classList.toggle('open');
            if (chatbotTooltip) chatbotTooltip.classList.remove('visible');
        });

        if (chatbotClose) {
            chatbotClose.addEventListener('click', function() {
                chatbotPanel.classList.remove('open');
            });
        }

        chatbotPanel.addEventListener('click', function(e) {
            e.stopPropagation();
        });

        document.addEventListener('click', function(e) {
            if (!chatbotTrigger.contains(e.target)) {
                chatbotPanel.classList.remove('open');
            }
        });

        // Tooltip chatbot on #cibles (Use cases — index.html only)
        var ciblesSection = document.getElementById('cibles');
        if (ciblesSection && chatbotTooltip) {
            var tooltipObserver = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        chatbotTooltip.classList.add('visible');
                        setTimeout(function() {
                            chatbotTooltip.classList.remove('visible');
                        }, 4000);
                        tooltipObserver.unobserve(ciblesSection);
                    }
                });
            }, { threshold: 0.2 });
            tooltipObserver.observe(ciblesSection);
        }

        // Phone tooltip on #modele (Three pillars — index.html only)
        var phoneFab = document.querySelector('.phone-fab');
        var modeleSection = document.getElementById('modele');
        if (modeleSection && phoneFab) {
            var phoneTooltip = document.createElement('span');
            phoneTooltip.className = 'phone-tooltip';
            phoneTooltip.textContent = 'Book an appointment';
            phoneFab.appendChild(phoneTooltip);

            var phoneObserver = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        phoneTooltip.classList.add('visible');
                        setTimeout(function() {
                            phoneTooltip.classList.remove('visible');
                        }, 4000);
                        phoneObserver.unobserve(modeleSection);
                    }
                });
            }, { threshold: 0.2 });
            phoneObserver.observe(modeleSection);
        }
    }

    /* ── Dossiers BnF Specials ── */
    document.querySelectorAll('.dossier-toggle').forEach(function(toggle) {
        toggle.addEventListener('click', function() {
            var dossierId = toggle.getAttribute('data-dossier');
            var expand = document.getElementById('dossier-expand-' + dossierId);
            if (!expand) return;

            var isOpen = toggle.classList.contains('open');
            if (isOpen) {
                toggle.classList.remove('open');
                expand.classList.remove('open');
                expand.style.maxHeight = '0';
            } else {
                toggle.classList.add('open');
                expand.classList.add('open');
                expand.style.maxHeight = expand.scrollHeight + 'px';
            }
        });
    });

    // Set flip card height based on tallest face
    function updateFlipHeight(dossierId) {
        var flipCard = document.getElementById('dossier-flip-' + dossierId);
        if (!flipCard) return;
        var front = flipCard.querySelector('.dossier-flip-front');
        var back = flipCard.querySelector('.dossier-flip-back');
        back.style.position = 'static';
        back.style.transform = 'none';
        var backH = back.offsetHeight;
        back.style.position = '';
        back.style.transform = '';
        var frontH = front.offsetHeight;
        var maxH = Math.max(frontH, backH);
        flipCard.style.minHeight = maxH + 'px';
    }

    document.querySelectorAll('.dossier-tab').forEach(function(tab) {
        tab.addEventListener('click', function() {
            var dossierId = tab.getAttribute('data-dossier');
            var tabType = tab.getAttribute('data-tab');
            var flipCard = document.getElementById('dossier-flip-' + dossierId);
            var expand = document.getElementById('dossier-expand-' + dossierId);
            if (!flipCard) return;

            tab.closest('.dossier-tabs').querySelectorAll('.dossier-tab').forEach(function(t) {
                t.classList.remove('active');
            });
            tab.classList.add('active');

            if (tabType === 'article') {
                flipCard.classList.add('flipped');
            } else {
                flipCard.classList.remove('flipped');
            }

            setTimeout(function() {
                updateFlipHeight(dossierId);
                if (expand && expand.classList.contains('open')) {
                    expand.style.maxHeight = expand.scrollHeight + 'px';
                }
            }, 750);
        });
    });

    // Init flip card heights on image load
    document.querySelectorAll('.dossier-infographie').forEach(function(img) {
        var wrapper = img.closest('.dossier-wrapper');
        if (!wrapper) return;
        var dossierId = wrapper.id.replace('dossier-', '');
        img.addEventListener('load', function() { updateFlipHeight(dossierId); });
        if (img.complete) updateFlipHeight(dossierId);
    });

    /* ── Callback form page (AJAX, no redirect) ── */
    var recallForm = document.getElementById('recallForm');
    if (recallForm) {
        recallForm.addEventListener('submit', function(e) {
            e.preventDefault();
            var data = new FormData(recallForm);
            var btn = recallForm.querySelector('button[type="submit"]');
            btn.textContent = 'Sending...';
            btn.disabled = true;
            fetch(recallForm.action, { method: 'POST', body: data, headers: { 'Accept': 'application/json' } })
            .then(function(r) {
                if (r.ok) {
                    recallForm.innerHTML = '<p style="text-align:center;color:var(--accent);font-size:1.1rem;padding:30px 0;">✓ Thank you! We have received your request and will get back to you within 24 hours.</p>';
                } else {
                    btn.textContent = 'Send my request';
                    btn.disabled = false;
                    alert('An error occurred. Please try again.');
                }
            })
            .catch(function() {
                btn.textContent = 'Send my request';
                btn.disabled = false;
                alert('An error occurred. Please try again.');
            });
        });
    }

});