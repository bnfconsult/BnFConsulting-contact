/* ============================================
   BnFConsulting — Interactions
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
                text: 'Quel est votre problème le plus visible aujourd\'hui ?',
                answers: [
                    { text: 'Je manque de visibilité', cat: 'A' },
                    { text: 'Mon image ne reflète pas mon niveau', cat: 'B' },
                    { text: 'Mon organisation interne est floue', cat: 'C' },
                    { text: 'Je perds du temps sur des tâches répétitives', cat: 'D' },
                    { text: 'Je ne sais pas où sont mes vrais leviers', cat: 'E' }
                ]
            },
            {
                text: 'Votre priorité immédiate serait :',
                answers: [
                    { text: 'Attirer plus de clients', cat: 'A' },
                    { text: 'Améliorer mon image et ma crédibilité', cat: 'B' },
                    { text: 'Structurer mon entreprise', cat: 'C' },
                    { text: 'Gagner du temps grâce à des systèmes', cat: 'D' },
                    { text: 'Clarifier ma stratégie', cat: 'E' }
                ]
            },
            {
                text: 'Aujourd\'hui, votre présence digitale est :',
                answers: [
                    { text: 'Faible ou inexistante', cat: 'A' },
                    { text: 'Présente mais peu performante', cat: 'E' },
                    { text: 'Visuellement moyenne', cat: 'B' },
                    { text: 'Dispersée et incohérente', cat: 'C' },
                    { text: 'Je ne sais pas comment elle performe', cat: 'E' }
                ]
            },
            {
                text: 'Un expert découvrirait probablement :',
                answers: [
                    { text: 'Un manque de référencement', cat: 'A' },
                    { text: 'Un manque de contenu visuel impactant', cat: 'B' },
                    { text: 'Un manque de structure stratégique', cat: 'C' },
                    { text: 'Un manque d\'automatisation', cat: 'D' },
                    { text: 'Un manque d\'indicateurs fiables', cat: 'E' }
                ]
            },
            {
                text: 'Ce que vous voulez vraiment :',
                answers: [
                    { text: 'Être plus visible en ligne', cat: 'A' },
                    { text: 'Avoir une image forte et pro', cat: 'B' },
                    { text: 'Mettre en place des systèmes efficaces', cat: 'D' },
                    { text: 'Savoir quoi faire et dans quel ordre', cat: 'C' },
                    { text: 'Piloter ma croissance par la donnée', cat: 'E' }
                ]
            }
        ];

        const diagScenarios = {
            A: {
                icon: '🔍',
                title: 'Votre priorité : renforcer votre visibilité.',
                text: 'Un audit digital complet permettra d\'identifier vos leviers SEO et vos axes d\'optimisation.',
                ctaText: 'Réserver un diagnostic stratégique',
                ctaUrl: 'https://calendar.app.google/owbWjVDz11BNwd2V6'
            },
            B: {
                icon: '🎯',
                title: 'Votre priorité : renforcer votre image.',
                text: 'Direction artistique, visuels professionnels et plan drone peuvent transformer votre perception.',
                ctaText: 'Contacter BnFConsulting',
                ctaUrl: 'mailto:bnfconsulting.contact@gmail.com'
            },
            C: {
                icon: '🧭',
                title: 'Votre priorité : clarifier votre trajectoire.',
                text: 'Un diagnostic stratégique complet permettra de structurer vos priorités et indicateurs.',
                ctaText: 'Réserver un diagnostic stratégique',
                ctaUrl: 'https://calendar.app.google/owbWjVDz11BNwd2V6'
            },
            D: {
                icon: '⚙️',
                title: 'Votre priorité : structurer vos systèmes.',
                text: 'L\'automatisation et l\'IA peuvent vous faire gagner du temps et optimiser vos processus.',
                ctaText: 'Contacter BnFConsulting',
                ctaUrl: 'mailto:bnfconsulting.contact@gmail.com'
            },
            E: {
                icon: '📊',
                title: 'Votre priorité : piloter par la donnée.',
                text: 'Des indicateurs clairs et des dashboards vous permettront de reprendre le contrôle.',
                ctaText: 'Réserver un diagnostic stratégique',
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
                    <button class="diag-restart" id="diagRestart">↻ Recommencer</button>
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

    // --- FAB Menu (burger bas gauche) ---
    const fabMenu = document.getElementById('fabMenu');
    const fabTrigger = document.getElementById('fabTrigger');

    if (fabTrigger && fabMenu) {
        fabTrigger.addEventListener('click', (e) => {
            e.stopPropagation();
            fabMenu.classList.toggle('open');
        });

        // Fermer en cliquant ailleurs
        document.addEventListener('click', (e) => {
            if (!fabMenu.contains(e.target)) {
                fabMenu.classList.remove('open');
            }
        });

        // Fermer quand on clique sur un lien du menu
        fabMenu.querySelectorAll('.fab-link').forEach(link => {
            link.addEventListener('click', () => {
                fabMenu.classList.remove('open');
            });
        });
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

    // --- Stack Viewer (Dossier cartes paginées) ---
    const stackTrack = document.getElementById('stackTrack');
    const stackPrev = document.getElementById('stackPrev');
    const stackNext = document.getElementById('stackNext');
    const stackCounter = document.getElementById('stackCounter');
    const stackHint = document.getElementById('stackHint');

    if (stackTrack) {
        const cards = stackTrack.querySelectorAll('.stack-card');
        const total = cards.length;
        let current = 0;
        let direction = 'next'; // track animation direction

        function updateStack() {
            cards.forEach((card, i) => {
                card.classList.remove('active', 'exit-left', 'exit-right');
                if (i === current) {
                    card.classList.add('active');
                }
            });

            // Counter
            const num = String(current + 1).padStart(2, '0');
            const tot = String(total).padStart(2, '0');
            stackCounter.textContent = `${num} / ${tot}`;

            // Disable arrows at edges
            stackPrev.disabled = current === 0;
            stackNext.disabled = current === total - 1;

            // Hide hint after first interaction
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

        // Init
        updateStack();

        // Arrow navigation
        stackPrev.addEventListener('click', () => goTo(current - 1, 'prev'));
        stackNext.addEventListener('click', () => goTo(current + 1, 'next'));

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            // Only if stack is in viewport
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

        // Swipe mobile
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

    // --- Chatbot scénarisé ---
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
            btn.textContent = '← Revenir au menu';
            btn.addEventListener('click', function() { showWelcome(); });
            chatbotMessages.appendChild(btn);
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }

        function clear() { chatbotMessages.innerHTML = ''; }

        // --- FORMULAIRE RAPPEL DANS LE CHATBOT ---
        function showRecallForm() {
            clear();
            addBubble('Laissez vos coordonnées, nous vous recontactons sous 24h.');
            var form = document.createElement('form');
            form.className = 'cb-form';
            form.innerHTML = '<input type="text" name="name" placeholder="Votre nom" required>' +
                '<input type="email" name="email" placeholder="Votre email" required>' +
                '<input type="tel" name="phone" placeholder="Téléphone">' +
                '<textarea name="message" rows="2" placeholder="Votre besoin en quelques mots…"></textarea>' +
                '<input type="hidden" name="_subject" value="Demande de rappel — Chatbot BnFConsulting">' +
                '<button type="submit" class="cb-cta" style="border:none;cursor:pointer;text-align:center;display:block;width:100%;padding:10px;">Envoyer</button>';
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                var data = new FormData(form);
                fetch('https://formspree.io/f/mbdaboon', { method: 'POST', body: data, headers: { 'Accept': 'application/json' } })
                .then(function(r) {
                    if (r.ok) {
                        clear();
                        addBubble('Merci ! Nous avons bien reçu votre demande et vous recontacterons très vite.');
                        addBack();
                    } else {
                        addBubble('Une erreur est survenue. Réessayez ou contactez-nous par email.');
                    }
                })
                .catch(function() {
                    addBubble('Une erreur est survenue. Réessayez ou contactez-nous par email.');
                });
            });
            chatbotMessages.appendChild(form);
            addBack();
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }

        // --- SCÉNARIO 1 : Que fait BnF ? ---
        function showQueFait() {
            clear();
            addBubble('BnFConsulting orchestre stratégie, opérations et croissance pour transformer des structures dispersées en systèmes cohérents et pilotables.');
            setTimeout(function() {
                addBubble('Sur quel axe souhaitez-vous en savoir plus ?');
                addButtons([
                    { label: 'Stratégie', action: showStrategie },
                    { label: 'Opérations', action: showOperations },
                    { label: 'Croissance', action: showCroissance },
                    { label: 'Audit stratégique', action: showAudit }
                ]);
            }, 400);
        }

        function showStrategie() {
            clear();
            addBubble('Nous analysons votre positionnement, votre visibilité et vos leviers invisibles afin de définir une trajectoire claire.');
            addCTAs([
                { label: 'Voir le modèle', url: 'index.html#modele' },
                { label: 'Réserver un diagnostic', url: CAL }
            ]);
            addButtons([{ label: 'Être rappelé', action: showRecallForm }]);
            addBack();
        }

        function showOperations() {
            clear();
            addBubble('Nous transformons la stratégie en systèmes concrets : automatisation, CRM, organisation, pilotage par la donnée.');
            addCTAs([
                { label: 'Notre méthode', url: 'prestations.html' },
                { label: 'Réserver un diagnostic', url: CAL }
            ]);
            addButtons([{ label: 'Être rappelé', action: showRecallForm }]);
            addBack();
        }

        function showCroissance() {
            clear();
            addBubble('Nous amplifions ce qui est structuré : SEO, image, visibilité, activation de leviers ciblés.');
            addCTAs([
                { label: 'Cas d\'usage', url: 'index.html#cibles' },
                { label: 'Réserver un diagnostic', url: CAL }
            ]);
            addButtons([{ label: 'Être rappelé', action: showRecallForm }]);
            addBack();
        }

        function showAudit() {
            clear();
            addBubble('L\'audit est notre produit cœur. Il révèle les pertes invisibles, les incohérences internes et les freins à la croissance.');
            addCTAs([
                { label: 'Réserver un diagnostic stratégique', url: CAL }
            ]);
            addButtons([{ label: 'Être rappelé', action: showRecallForm }]);
            addBack();
        }

        // --- SCÉNARIO 2 : Comment ça marche ? ---
        function showComment() {
            clear();
            addBubble('Chaque entreprise suit un parcours structuré :');
            setTimeout(function() {
                addBubble('1. Diagnostic stratégique<br>2. Identification des priorités<br>3. Structuration opérationnelle<br>4. Activation des leviers<br>5. Pilotage par la data');
                setTimeout(function() {
                    addBubble('Souhaitez-vous comprendre une étape en détail ?');
                    addButtons([
                        { label: 'Le diagnostic', action: showDiagnostic },
                        { label: 'La structuration', action: showStructuration },
                        { label: 'L\'activation', action: showActivation },
                        { label: 'Prendre rendez-vous', action: function() { window.open(CAL, '_blank'); } }
                    ]);
                }, 300);
            }, 400);
        }

        function showDiagnostic() {
            clear();
            addBubble('Le diagnostic stratégique est un échange de 30 minutes pour identifier vos leviers inexploités, vos pertes invisibles et vos priorités réelles.');
            addCTAs([
                { label: 'Réserver un diagnostic', url: CAL }
            ]);
            addButtons([{ label: 'Être rappelé', action: showRecallForm }]);
            addBack();
        }

        function showStructuration() {
            clear();
            addBubble('La structuration transforme vos priorités en plan d\'action concret : process, outils, organisation, indicateurs de pilotage.');
            addCTAs([
                { label: 'Voir nos prestations', url: 'prestations.html' },
                { label: 'Réserver un diagnostic', url: CAL }
            ]);
            addButtons([{ label: 'Être rappelé', action: showRecallForm }]);
            addBack();
        }

        function showActivation() {
            clear();
            addBubble('L\'activation met en mouvement ce qui a été structuré : déploiement, automatisation, visibilité, croissance mesurable.');
            addCTAs([
                { label: 'Réserver un diagnostic', url: CAL }
            ]);
            addButtons([{ label: 'Être rappelé', action: showRecallForm }]);
            addBack();
        }

        // --- SCÉNARIO 3 : J'ai un besoin précis ---
        function showBesoin() {
            clear();
            addBubble('Quel est votre principal enjeu actuellement ?');
            addButtons([
                { label: 'Manque de visibilité', action: function() { showBesoinDetail('Votre entreprise a du potentiel mais reste invisible. Nous structurons votre positionnement, votre image et vos canaux pour générer une visibilité cohérente et durable.'); } },
                { label: 'Organisation interne floue', action: function() { showBesoinDetail('Quand les process sont flous, l\'énergie se disperse. Nous clarifions les rôles, les flux et les outils pour créer un système pilotable.'); } },
                { label: 'Croissance instable', action: function() { showBesoinDetail('Une croissance sans structure finit par s\'essouffler. Nous identifions les freins cachés et installons les fondations d\'une croissance maîtrisée.'); } },
                { label: 'Besoin d\'automatisation', action: function() { showBesoinDetail('Les tâches répétitives freinent votre développement. Nous automatisons ce qui peut l\'être pour libérer du temps stratégique.'); } }
            ]);
        }

        function showBesoinDetail(text) {
            clear();
            addBubble(text);
            addCTAs([
                { label: 'Réserver un diagnostic', url: CAL }
            ]);
            addButtons([{ label: 'Être rappelé', action: showRecallForm }]);
            addBack();
        }

        // --- MESSAGE D'ACCUEIL ---
        function showWelcome() {
            clear();
            addBubble('Bonjour. Souhaitez-vous comprendre ce que fait BnFConsulting ou comment fonctionne notre système ?');
            setTimeout(function() {
                addButtons([
                    { label: 'Que fait BnF ?', action: showQueFait },
                    { label: 'Comment ça marche ?', action: showComment },
                    { label: 'J\'ai un besoin précis', action: showBesoin },
                    { label: 'Être rappelé', action: showRecallForm }
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

        // Tooltip on #probleme (index.html only)
        var problemeSection = document.getElementById('probleme');
        if (problemeSection && chatbotTooltip) {
            var tooltipObserver = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        chatbotTooltip.classList.add('visible');
                        setTimeout(function() {
                            chatbotTooltip.classList.remove('visible');
                        }, 4000);
                        tooltipObserver.unobserve(problemeSection);
                    }
                });
            }, { threshold: 0.2 });
            tooltipObserver.observe(problemeSection);
        }
    }

});