// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(26, 26, 26, 0.95)';
    } else {
        header.style.backgroundColor = '#1a1a1a';
    }
});

// Add animation to sections when they come into view
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.5s ease-in-out';
    observer.observe(section);
});

// Function to show next photo
function nextPhoto(platform) {
    const viewport = document.querySelector(`.social-card:has(.fa-${platform}) .gallery-viewport`);
    const images = viewport.querySelectorAll('img');
    const currentIndex = Array.from(images).findIndex(img => img.classList.contains('active'));
    
    // Remove active class from current image
    images[currentIndex].classList.remove('active');
    
    // Add active class to next image (or first if at the end)
    const nextIndex = (currentIndex + 1) % images.length;
    images[nextIndex].classList.add('active');
}

// Function to show previous photo
function prevPhoto(platform) {
    const viewport = document.querySelector(`.social-card:has(.fa-${platform}) .gallery-viewport`);
    const images = viewport.querySelectorAll('img');
    const currentIndex = Array.from(images).findIndex(img => img.classList.contains('active'));
    
    // Remove active class from current image
    images[currentIndex].classList.remove('active');
    
    // Add active class to previous image (or last if at the beginning)
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    images[prevIndex].classList.add('active');
}

// Image Carousel Functionality
function initCarousel(platform) {
    const viewport = document.querySelector(`.social-card[data-platform="${platform}"] .gallery-viewport`);
    const images = viewport.querySelectorAll('img');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach(img => img.classList.remove('active'));
        images[index].classList.add('active');
        viewport.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextPhoto() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function prevPhoto() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    // Add event listeners to navigation buttons
    const prevBtn = document.querySelector(`.social-card[data-platform="${platform}"] .gallery-nav.prev`);
    const nextBtn = document.querySelector(`.social-card[data-platform="${platform}"] .gallery-nav.next`);

    prevBtn.addEventListener('click', prevPhoto);
    nextBtn.addEventListener('click', nextPhoto);

    // Auto-advance every 5 seconds
    setInterval(nextPhoto, 5000);
}

// Initialize carousels when the page loads
document.addEventListener('DOMContentLoaded', () => {
    initCarousel('instagram');
    initCarousel('facebook');
});

// Video content animation
document.addEventListener('DOMContentLoaded', () => {
    const videoContainer = document.querySelector('.video-container');
    const videoContent = document.querySelector('.video-content');
    const elements = videoContent.querySelectorAll('img, p, .cyberpunk-line');
    
    // 等待视频加载完成
    const video = document.getElementById('bg-video');
    
    video.addEventListener('loadeddata', () => {
        // 显示视频容器
        videoContainer.classList.add('visible');
        
        // 延迟显示内容
        setTimeout(() => {
            elements.forEach((element, index) => {
                setTimeout(() => {
                    element.classList.add('visible');
                }, 500 + (index * 200));
            });
        }, 500);
    });
});

// Section animation
const homeSections = document.querySelectorAll('.home-section');
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

homeSections.forEach(section => {
    sectionObserver.observe(section);
}); 