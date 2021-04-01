function check_url_change(cb) {
    let old_url = current_url = window.location.href,
        check = function() {
            if (old_url !== current_url) {
                old_url = current_url;
                
                cb(current_url);
            }            
        };

    setInterval(function() {
        current_url = window.location.href;
        check();
    }, 1000);
}

function element_ready(selector) {
    return new Promise(function (resolve, reject) {
        const el = document.querySelector(selector);
        let timer_reject;
        
        if (el) resolve(el);

        let mutation_observer = new MutationObserver(function(mutationRecords, observer) {
            Array.from(document.querySelectorAll(selector)).forEach(function(element) {
                resolve(element);
                observer.disconnect();
                clearTimeout(timer_reject);
            });
        })
        
        mutation_observer.observe(document.documentElement, {
            childList: true,
            subtree: true
        });

        timer_reject = setTimeout(function() {
            reject();
            mutation_observer.disconnect();
        }, 8 * 1000);
    });
}

function init() {
    if (window.location.pathname === '/') {
        element_ready('#guide[opened]').then(function(el) {
            document.getElementById('guide-button').click();
        });
    }    
}



try {
    check_url_change(function() {
        init();
    });

    init();
} catch (error) {}