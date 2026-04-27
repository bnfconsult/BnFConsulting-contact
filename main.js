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
        '.problem-card, .pillar-card, .target-card, .journey-step, .service-item, .data-bar, .section-label, .section-title, .section-intro, .speciale-card, .methode-step, .pilier-card'
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

        function addActionBtn(label, action) {
            var wrap = document.createElement('div');
            wrap.style.cssText = 'text-align:center; animation:cbFadeIn 0.3s ease;';
            var btn = document.createElement('button');
            btn.className = 'cb-cta';
            btn.textContent = label;
            btn.style.cursor = 'pointer';
            btn.addEventListener('click', function() { action(); });
            wrap.appendChild(btn);
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

        // --- PATH 1 : STRATÉGIE ---
        function showStrategie() {
            clear();
            addBubble('Vous avez sûrement les bons éléments. Ce qui manque, c\'est une lecture claire de l\'ensemble.');
            setTimeout(function() {
                addBubble('On commence par <b>30 minutes de diagnostic stratégique</b>, gratuit. On identifie vos 3 priorités. Vous repartez avec un plan d\'action — pas un devis.');
                addCTAs([
                    { label: 'Réserver le diagnostic — 30 min', url: CAL }
                ]);
                addActionBtn('Je préfère être rappelé', showRecallForm);
                addBack();
            }, 300);
        }

        // --- PATH 2 : DRONE / CONTENU VISUEL ---
        function showDrone() {
            clear();
            addBubble('Dans quel secteur intervenons-nous pour vous ?');
            addButtons([
                { label: 'Immobilier', action: function() { showSector('immobilier', '/immobilier/', 'Vous valorisez des biens. Vue aérienne 5.1K, captation cinématique, retouche pro — la différence se joue sur la première image.'); } },
                { label: 'Automobile', action: function() { showSector('automobile', '/automobile/', 'Vous vendez des véhicules. Mise en scène premium, captation contextuelle — chaque voiture devient une pièce de caractère.'); } },
                { label: 'Châteaux & Domaines', action: function() { showSector('domaines', '/domaines/', 'Vous avez un patrimoine d\'exception. Captation de la grandeur, narration visuelle sobre et prestigieuse.'); } },
                { label: 'Hôtellerie & Restaurants', action: function() { showSector('hôtellerie', '/hotellerie/', 'Restaurant, hôtel, rooftop. Drone FPV indoor pour traverser vos espaces, plonger sur les plats, capter l\'ambiance — une signature cinéma rare.'); } },
                { label: 'Événementiel', action: function() { showSector('événementiel', '/evenementiel/', 'Mariage, lancement, soirée privée. Plan-séquence FPV qui transforme l\'instant en moment de cinéma — partagé bien après l\'événement.'); } },
                { label: 'Architecture & Lieux d\'exception', action: function() { showSector('architecture', '/architecture/', 'Showroom, galerie, boutique flagship. Drone FPV indoor qui révèle les volumes, la lumière, le geste architectural — comme on les ressent.'); } },
                { label: 'Un autre secteur', action: showAutreSecteur }
            ]);
            addBack();
        }

        function showSector(slug, url, blurb) {
            clear();
            addBubble(blurb);
            setTimeout(function() {
                addCTAs([
                    { label: 'Voir nos prestations ' + slug, url: url },
                    { label: 'Réserver un pré-diagnostic — 30 min', url: CAL }
                ]);
                addActionBtn('Être rappelé', showRecallForm);
                addBack();
            }, 250);
        }

        function showAutreSecteur() {
            clear();
            addBubble('On intervient aussi sur d\'autres secteurs : patrimoine, commerce, agence d\'architecture, marque de luxe.');
            setTimeout(function() {
                addBubble('Décrivez votre projet en un message, on revient vers vous sous 24h.');
                addActionBtn('Être rappelé', showRecallForm);
                addBack();
            }, 250);
        }

        // --- PATH 3 : COMPRENDRE L'APPROCHE ---
        function showApproche() {
            clear();
            addBubble('BNF Consulting articule <b>deux leviers alignés</b> :');
            setTimeout(function() {
                addBubble('<b>1. Stratégie</b> — diagnostic, structuration, pilotage.<br><br><b>2. Production visuelle</b> — drone, image de marque, contenu premium.<br><br>Combinés, ils rendent votre entreprise <i style="color:#549ba2;">lisible et attractive</i>.');
                addCTAs([
                    { label: 'Lire nos articles', url: '/articles/' },
                    { label: 'Réserver un diagnostic — 30 min', url: CAL }
                ]);
                addActionBtn('Être rappelé', showRecallForm);
                addBack();
            }, 400);
        }

        // --- PATH 4 : RDV DIRECT ---
        function showRDV() {
            clear();
            addBubble('Deux options selon votre préférence :');
            setTimeout(function() {
                addCTAs([
                    { label: 'Ouvrir le calendrier — 30 min', url: CAL }
                ]);
                addActionBtn('Me faire rappeler par téléphone', showRecallForm);
                addBack();
            }, 200);
        }

        // --- MESSAGE D'ACCUEIL ---
        function showWelcome() {
            clear();
            addBubble('Bonjour.<br>Dites-nous ce qui vous amène :');
            setTimeout(function() {
                addButtons([
                    { label: 'Une stratégie claire pour ma boîte', action: showStrategie },
                    { label: 'Du contenu visuel / drone', action: showDrone },
                    { label: 'Comprendre votre approche', action: showApproche },
                    { label: 'Prendre rendez-vous tout de suite', action: showRDV }
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
/* ============================================
   Chic cursor (ring + dot) — global
   ============================================ */
(function(){
    if (!window.matchMedia('(hover:hover) and (pointer:fine)').matches) return;
    if (document.getElementById('cursorRing')) return; // déjà présent (page avec cursor inline)
    var ring = document.createElement('div');
    ring.className = 'cursor-ring';
    ring.id = 'cursorRing';
    var dot = document.createElement('div');
    dot.className = 'cursor-dot';
    dot.id = 'cursorDot';
    document.body.appendChild(ring);
    document.body.appendChild(dot);

    var x = 0, y = 0, rx = 0, ry = 0;
    document.addEventListener('mousemove', function(e){
        x = e.clientX; y = e.clientY;
        dot.style.transform = 'translate(' + x + 'px,' + y + 'px) translate(-50%,-50%)';
    });
    function loop(){
        rx += (x - rx) * 0.18;
        ry += (y - ry) * 0.18;
        ring.style.transform = 'translate(' + rx + 'px,' + ry + 'px) translate(-50%,-50%)';
        requestAnimationFrame(loop);
    }
    loop();

    function bindHover(){
        document.querySelectorAll('a, button, .pricing-card, .secteur-teaser-card, input, textarea, select').forEach(function(el){
            if (el.dataset.cursorBound) return;
            el.dataset.cursorBound = '1';
            el.addEventListener('mouseenter', function(){ ring.classList.add('hover'); dot.classList.add('hover'); });
            el.addEventListener('mouseleave', function(){ ring.classList.remove('hover'); dot.classList.remove('hover'); });
        });
    }
    bindHover();
    // Re-bind si du contenu est ajouté dynamiquement
    var mo = new MutationObserver(bindHover);
    mo.observe(document.body, { childList: true, subtree: true });
})();

/* ============================================
   FAB buttons (burger + chatbot + back-to-top + lang) — injection auto sur toutes les pages
   ============================================ */
(function(){
    if (document.getElementById('fabMenu') || document.getElementById('chatbot')) return; // homepage les a deja inline
    var html = `
    <button class="back-to-top" id="backToTop" aria-label="Retour en haut">↑</button>
    <div class="fab-menu" id="fabMenu">
        <button class="fab-trigger" id="fabTrigger" aria-label="Menu rapide">
            <span class="fab-bar"></span>
            <span class="fab-bar"></span>
            <span class="fab-bar"></span>
        </button>
        <div class="fab-panel" id="fabPanel">
            <div class="fab-section">
                <p class="fab-label">Navigation</p>
                <a href="/" class="fab-link fab-home">Accueil</a>
                <div class="fab-axes-group">
                    <a href="/#visibilite" class="fab-link">Production visuelle</a>
                    <a href="/#tarifs" class="fab-link">Nos formules</a>
                </div>
                <p class="fab-label" style="margin-top:10px;">Secteurs</p>
                <div class="fab-axes-group">
                    <a href="/immobilier/" class="fab-link">Immobilier</a>
                    <a href="/automobile/" class="fab-link">Automobile</a>
                    <a href="/domaines/" class="fab-link">Châteaux & Domaines</a>
                    <a href="/hotellerie/" class="fab-link">Hôtellerie & Restaurants</a>
                    <a href="/evenementiel/" class="fab-link">Événementiel</a>
                    <a href="/architecture/" class="fab-link">Architecture</a>
                </div>
                <a href="/articles/" class="fab-link">Articles</a>
            </div>
            <div class="fab-divider"></div>
            <div class="fab-section">
                <p class="fab-label">Contact</p>
                <a href="https://calendar.app.google/owbWjVDz11BNwd2V6" target="_blank" rel="noopener" class="fab-link">📅 Prendre rendez-vous</a>
                <a href="mailto:contact@bnf-consulting.fr" class="fab-link">✉️ Email</a>
            </div>
        </div>
    </div>
    <div class="chatbot" id="chatbot">
        <button class="chatbot-trigger" id="chatbotTrigger" aria-label="Chat">
            <span class="chatbot-tooltip" id="chatbotTooltip">Poser une question</span>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.2L4 17.2V4h16v12z"/></svg>
        </button>
        <div class="chatbot-panel" id="chatbotPanel">
            <div class="chatbot-header">
                <span>BnFConsulting</span>
                <button class="chatbot-close" id="chatbotClose">&#10005;</button>
            </div>
            <div class="chatbot-messages" id="chatbotMessages"></div>
        </div>
    </div>`;
    var wrap = document.createElement('div');
    wrap.innerHTML = html;
    while (wrap.firstChild) document.body.appendChild(wrap.firstChild);

    // FAB toggle
    var fabTrigger = document.getElementById('fabTrigger');
    var fabMenu = document.getElementById('fabMenu');
    if (fabTrigger && fabMenu) {
        fabTrigger.addEventListener('click', function(e){ e.stopPropagation(); fabMenu.classList.toggle('open'); });
        document.addEventListener('click', function(e){ if (!fabMenu.contains(e.target)) fabMenu.classList.remove('open'); });
    }

    // Chatbot toggle
    var chatTrigger = document.getElementById('chatbotTrigger');
    var chatbot = document.getElementById('chatbot');
    var chatClose = document.getElementById('chatbotClose');
    if (chatTrigger && chatbot) {
        chatTrigger.addEventListener('click', function(e){ e.stopPropagation(); chatbot.classList.toggle('open'); });
        if (chatClose) chatClose.addEventListener('click', function(){ chatbot.classList.remove('open'); });
    }

    // Back to top
    var btt = document.getElementById('backToTop');
    if (btt) {
        window.addEventListener('scroll', function(){ btt.classList.toggle('visible', window.scrollY > 400); }, { passive:true });
        btt.addEventListener('click', function(){ window.scrollTo({top:0, behavior:'smooth'}); });
    }
})();
