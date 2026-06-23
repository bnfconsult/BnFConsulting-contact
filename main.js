
/* ============================================
   Auto-revelation des articles programmes (data-publish-date)
   Le 1er du mois 00:00 heure du visiteur, les elements caches apparaissent automatiquement.
   ============================================ */
(function(){
    function checkScheduledArticles(){
        var now = new Date();
        document.querySelectorAll('[data-publish-date]').forEach(function(el){
            var publishStr = el.getAttribute('data-publish-date');
            if (!publishStr) return;
            var publishDate = new Date(publishStr + 'T00:00:00');
            if (now >= publishDate) {
                el.style.display = '';
                // une fois publie, on retire le badge "Nouveau" de l'article precedent
                // convention : data-publish-date="2026-07-01" => on retire data-nouveau-badge="juin2026"
                var month = publishDate.getMonth();   // 0=jan, 6=juillet
                var prevMonthNames = ['decembre','janvier','fevrier','mars','avril','mai','juin','juillet','aout','septembre','octobre','novembre'];
                var prevYear = publishDate.getFullYear() - (month === 0 ? 1 : 0);
                var prevSlug = prevMonthNames[month] + prevYear;
                document.querySelectorAll('[data-nouveau-badge="' + prevSlug + '"]').forEach(function(b){ b.remove(); });
            }
        });
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', checkScheduledArticles);
    } else {
        checkScheduledArticles();
    }
})();
