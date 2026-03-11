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

    // --- Drone showcase scroll reveal ---
    const droneRevealEls = document.querySelectorAll(
        '.drone-showcase__header, .drone-showcase__media, .drone-feature-card'
    );
    if (droneRevealEls.length) {
        const droneObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    droneObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -40px 0px'
        });
        droneRevealEls.forEach(el => droneObserver.observe(el));
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
                ctaText: 'Prendre rendez-vous',
                ctaUrl: 'https://calendar.app.google/owbWjVDz11BNwd2V6'
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
                ctaText: 'Prendre rendez-vous',
                ctaUrl: 'https://calendar.app.google/owbWjVDz11BNwd2V6'
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
                '<input type="hidden" name="_subject" value="Demande de rappel — Chatbot BNF CONSULTING">' +
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

        // --- SCÉNARIO 1 : Comprendre l'architecture BNF ---
        function showArchitecture() {
            clear();
            addBubble('BNF n\'est pas une agence classique.<br>C\'est une architecture stratégique permettant de structurer et développer une entreprise.');
            setTimeout(function() {
                addButtons([
                    { label: 'Stratégie', action: showStrategie },
                    { label: 'Optimisation', action: showOptimisation },
                    { label: 'Visibilité', action: showVisibilite },
                    { label: 'Produit cœur : rapport stratégique', action: showProduitCoeur }
                ]);
            }, 400);
        }

        function showStrategie() {
            clear();
            addBubble('Lecture stratégique globale de l\'entreprise.');
            setTimeout(function() {
                addBubble('• Analyse du positionnement<br>• Analyse concurrentielle<br>• Identification des leviers pouvant être optimisés');
                addCTAs([
                    { label: 'Voir BNF Consulting', url: 'home.html' },
                    { label: 'Réserver un diagnostic', url: CAL }
                ]);
                addBack();
            }, 300);
        }

        function showOptimisation() {
            clear();
            addBubble('Transformation de la stratégie en système opérationnel.');
            setTimeout(function() {
                addBubble('• Structuration des opérations<br>• Automatisation des workflows<br>• Organisation pilotable<br>• Centralisation des données');
                addCTAs([
                    { label: 'Comprendre Flow', url: 'flow.html' },
                    { label: 'Réserver un diagnostic', url: CAL }
                ]);
                addBack();
            }, 300);
        }

        function showVisibilite() {
            clear();
            addBubble('Activation des leviers de visibilité et d\'image.');
            setTimeout(function() {
                addBubble('• Stratégie digitale<br>• SEO<br>• Identité de marque<br>• Prises de vue aériennes drone');
                addCTAs([
                    { label: 'Voir les leviers de visibilité', url: 'drones.html' }
                ]);
                addButtons([{ label: 'Être rappelé', action: showRecallForm }]);
                addBack();
            }, 300);
        }

        function showProduitCoeur() {
            clear();
            addBubble('Le produit central de BNF est le diagnostic stratégique.');
            setTimeout(function() {
                addBubble('Il révèle :<br>• Pertes invisibles<br>• Incohérences internes<br>• Leviers non activés');
                addCTAs([
                    { label: 'Réserver un diagnostic', url: CAL }
                ]);
                addBack();
            }, 300);
        }

        // --- SCÉNARIO 2 : Comment se profile notre accompagnement ---
        function showAccompagnement() {
            clear();
            addBubble('Chaque entreprise suit un parcours structuré.');
            setTimeout(function() {
                addBubble('1. Diagnostic stratégique<br>2. Identification des leviers à travailler<br>3. Structuration opérationnelle<br>4. Activation des leviers<br>5. Pilotage par la donnée');
                addCTAs([
                    { label: 'Réserver un diagnostic', url: CAL }
                ]);
                addButtons([{ label: 'Être rappelé', action: showRecallForm }]);
                addBack();
            }, 400);
        }

        // --- SCÉNARIO 3 : J'ai un besoin précis ---
        function showBesoin() {
            clear();
            addBubble('Quel est votre principal enjeu actuellement ?');
            addButtons([
                { label: 'Manque de visibilité', action: showBesoinVisibilite },
                { label: 'Organisation interne floue', action: showBesoinOrga },
                { label: 'Croissance instable', action: showBesoinCroissance },
                { label: 'Besoin d\'automatisation', action: showBesoinAuto },
                { label: 'Drone et prise de vue aérienne', action: showBesoinDrone }
            ]);
        }

        function showBesoinVisibilite() {
            clear();
            addBubble('Stratégie digitale, SEO, identité de marque : nous structurons votre visibilité pour qu\'elle devienne un levier de croissance.');
            addCTAs([
                { label: 'Voir le pilier visibilité', url: 'drones.html' },
                { label: 'Réserver un diagnostic', url: CAL }
            ]);
            addBack();
        }

        function showBesoinOrga() {
            clear();
            addBubble('Structuration des opérations, clarification des process, vision pilotable : nous transformons le flou en système.');
            addCTAs([
                { label: 'Comprendre Flow', url: 'flow.html' },
                { label: 'Réserver un diagnostic', url: CAL }
            ]);
            addBack();
        }

        function showBesoinCroissance() {
            clear();
            addBubble('Manque de structure stratégique, priorités mal définies : nous identifions les freins et installons les fondations.');
            addCTAs([
                { label: 'Comprendre l\'architecture BNF', url: 'home.html' },
                { label: 'Réserver un diagnostic', url: CAL }
            ]);
            addBack();
        }

        function showBesoinAuto() {
            clear();
            addBubble('Automatisation des workflows, structuration CRM, optimisation des opérations : nous libérons du temps stratégique.');
            addCTAs([
                { label: 'Voir Optimisation (Flow)', url: 'flow.html' },
                { label: 'Réserver un diagnostic', url: CAL }
            ]);
            addBack();
        }

        function showBesoinDrone() {
            clear();
            addBubble('Captation aérienne, contenu visuel stratégique, différenciation marketing : la vue d\'en haut change la perspective.');
            addCTAs([
                { label: 'Voir DRONE PRO MOTION', url: 'drones.html' }
            ]);
            addButtons([{ label: 'Être rappelé', action: showRecallForm }]);
            addBack();
        }

        // --- SCÉNARIO 4 : Découvrir l'écosystème BNF ---
        function showEcosysteme() {
            clear();
            addBubble('Une entreprise n\'achète pas une prestation isolée.<br>Elle entre dans un système.');
            setTimeout(function() {
                addBubble('BNF Consulting → Stratégie<br>Flow → Optimisation<br>DRONE PRO MOTION → Visibilité');
                addCTAs([
                    { label: 'Découvrir l\'écosystème', url: 'home.html#modele' },
                    { label: 'Réserver un diagnostic', url: CAL }
                ]);
                addBack();
            }, 400);
        }

        // --- MESSAGE D'ACCUEIL ---
        function showWelcome() {
            clear();
            addBubble('Bonjour.<br>Comment pouvons-nous vous orienter ?');
            setTimeout(function() {
                addButtons([
                    { label: 'Comprendre l\'architecture BNF', action: showArchitecture },
                    { label: 'Comment se profile notre accompagnement', action: showAccompagnement },
                    { label: 'J\'ai un besoin précis', action: showBesoin },
                    { label: 'Découvrir l\'écosystème BNF', action: showEcosysteme },
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

        // Tooltip chatbot on #cibles (Cas d'usage — index.html only)
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

        // Tooltip téléphone on #modele (Trois piliers — index.html only)
        var phoneFab = document.querySelector('.phone-fab');
        var modeleSection = document.getElementById('modele');
        if (modeleSection && phoneFab) {
            // Créer le tooltip
            var phoneTooltip = document.createElement('span');
            phoneTooltip.className = 'phone-tooltip';
            phoneTooltip.textContent = 'Prendre rendez-vous';
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

    /* ── Dossiers Spéciales BnF ── */
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

    // Set flip card height based on active face
    function updateFlipHeight(dossierId) {
        var flipCard = document.getElementById('dossier-flip-' + dossierId);
        if (!flipCard) return;
        var front = flipCard.querySelector('.dossier-flip-front');
        var back = flipCard.querySelector('.dossier-flip-back');
        var isFlipped = flipCard.classList.contains('flipped');
        if (isFlipped) {
            // Article mode — measure back
            back.style.position = 'static';
            back.style.transform = 'none';
            var activeH = back.offsetHeight;
            back.style.position = '';
            back.style.transform = '';
        } else {
            // Infographie mode — measure front
            var activeH = front.offsetHeight;
        }
        flipCard.style.minHeight = activeH + 'px';
    }

    document.querySelectorAll('.dossier-tab').forEach(function(tab) {
        tab.addEventListener('click', function() {
            var dossierId = tab.getAttribute('data-dossier');
            var tabType = tab.getAttribute('data-tab');
            var flipCard = document.getElementById('dossier-flip-' + dossierId);
            var expand = document.getElementById('dossier-expand-' + dossierId);
            if (!flipCard) return;

            // Update active tab
            tab.closest('.dossier-tabs').querySelectorAll('.dossier-tab').forEach(function(t) {
                t.classList.remove('active');
            });
            tab.classList.add('active');

            // Flip the card
            if (tabType === 'article') {
                flipCard.classList.add('flipped');
            } else {
                flipCard.classList.remove('flipped');
            }

            // Recalculate heights after flip transition
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

    /* ── Formulaire rappel page (AJAX, pas de redirection) ── */
    var recallForm = document.getElementById('recallForm');
    if (recallForm) {
        recallForm.addEventListener('submit', function(e) {
            e.preventDefault();
            var data = new FormData(recallForm);
            var btn = recallForm.querySelector('button[type="submit"]');
            btn.textContent = 'Envoi en cours…';
            btn.disabled = true;
            fetch(recallForm.action, { method: 'POST', body: data, headers: { 'Accept': 'application/json' } })
            .then(function(r) {
                if (r.ok) {
                    recallForm.innerHTML = '<p style="text-align:center;color:var(--accent);font-size:1.1rem;padding:30px 0;">✓ Merci ! Nous avons bien reçu votre demande et vous recontacterons sous 24h.</p>';
                } else {
                    btn.textContent = 'Envoyer ma demande';
                    btn.disabled = false;
                    alert('Une erreur est survenue. Veuillez réessayer.');
                }
            })
            .catch(function() {
                btn.textContent = 'Envoyer ma demande';
                btn.disabled = false;
                alert('Une erreur est survenue. Veuillez réessayer.');
            });
        });
    }

});