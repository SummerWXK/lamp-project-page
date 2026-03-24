/**
 * LaMP Project Page - Main JavaScript
 */

// Copy BibTeX to clipboard
function copyBibtex() {
    const bibtexContent = document.getElementById('bibtex-content').innerText;
    const copyBtn = document.querySelector('.copy-btn');

    navigator.clipboard.writeText(bibtexContent).then(() => {
        // Visual feedback
        const originalHTML = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
        copyBtn.classList.add('copied');

        // Reset after 2 seconds
        setTimeout(() => {
            copyBtn.innerHTML = originalHTML;
            copyBtn.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
        // Fallback for older browsers
        fallbackCopyTextToClipboard(bibtexContent);
    });
}

// Fallback copy function for older browsers
function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        document.execCommand('copy');
        const copyBtn = document.querySelector('.copy-btn');
        const originalHTML = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
        copyBtn.classList.add('copied');

        setTimeout(() => {
            copyBtn.innerHTML = originalHTML;
            copyBtn.classList.remove('copied');
        }, 2000);
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
    }

    document.body.removeChild(textArea);
}

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Lazy load images (if needed in the future)
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    }

    // Add hover effect to achievement cards
    const achievementCards = document.querySelectorAll('.achievement-card');
    achievementCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Video player enhancements (for when videos are added)
function initVideoPlayers() {
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        // Pause other videos when one starts playing
        video.addEventListener('play', function() {
            videos.forEach(otherVideo => {
                if (otherVideo !== video) {
                    otherVideo.pause();
                }
            });
        });
    });
}

// Initialize video players when DOM is ready
document.addEventListener('DOMContentLoaded', initVideoPlayers);

// Table highlighting on hover (enhance readability)
document.addEventListener('DOMContentLoaded', function() {
    const tables = document.querySelectorAll('.results-table');
    tables.forEach(table => {
        const rows = table.querySelectorAll('tbody tr');
        rows.forEach(row => {
            row.addEventListener('mouseenter', function() {
                // Highlight the hovered row
                this.style.backgroundColor = '#f0f9ff';
            });
            row.addEventListener('mouseleave', function() {
                // Reset to original state
                if (this.classList.contains('highlight-row') || this.classList.contains('average-row')) {
                    this.style.backgroundColor = '#eff6ff';
                } else {
                    this.style.backgroundColor = '';
                }
            });
        });
    });
});

// Animate numbers on scroll (for achievement cards)
function animateNumber(element, target, duration = 1000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + (element.dataset.suffix || '');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + (element.dataset.suffix || '');
        }
    }, 16);
}

// Optional: Animate achievement numbers when they come into view
document.addEventListener('DOMContentLoaded', function() {
    if ('IntersectionObserver' in window) {
        const achievementNumbers = document.querySelectorAll('.achievement-number');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        achievementNumbers.forEach(num => observer.observe(num));
    }
});
