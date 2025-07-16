
// Variables globales
let isScrolled = false;
let isMobileMenuOpen = false;
let currentSection = 'home';

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    updateActiveSection();
    addClickOutsideListener();
});

// Gestion du scroll
window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const navbar = document.getElementById('navbar');
    
    if (scrollTop > 50 && !isScrolled) {
        isScrolled = true;
        navbar.classList.add('scrolled');
    } else if (scrollTop <= 50 && isScrolled) {
        isScrolled = false;
        navbar.classList.remove('scrolled');
    }
    
    updateActiveSection();
});

// Gestion du redimensionnement de la fenêtre
window.addEventListener('resize', function() {
    // Fermer le menu mobile si l'écran devient plus grand
    if (window.innerWidth >= 992 && isMobileMenuOpen) {
        closeMobileMenu();
    }
});

// Toggle du menu mobile
function toggleMobileMenu() {
    const toggler = document.querySelector('.navbar-toggler');
    const collapse = document.getElementById('navbarNav');
    
    isMobileMenuOpen = !isMobileMenuOpen;
    
    if (isMobileMenuOpen) {
        toggler.classList.remove('collapsed');
        toggler.setAttribute('aria-expanded', 'true');
        collapse.classList.add('show');
        document.body.classList.add('menu-open');
    } else {
        toggler.classList.add('collapsed');
        toggler.setAttribute('aria-expanded', 'false');
        collapse.classList.remove('show');
        document.body.classList.remove('menu-open');
    }
}

// Fermer le menu mobile
function closeMobileMenu() {
    if (isMobileMenuOpen) {
        const toggler = document.querySelector('.navbar-toggler');
        const collapse = document.getElementById('navbarNav');
        
        isMobileMenuOpen = false;
        toggler.classList.add('collapsed');
        toggler.setAttribute('aria-expanded', 'false');
        collapse.classList.remove('show');
        document.body.classList.remove('menu-open');
    }
}

// Scroll vers une section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        // Fermer le menu mobile d'abord
        closeMobileMenu();
        
        // Ajouter un petit délai pour s'assurer que le menu se ferme avant le scroll
        setTimeout(() => {
            const navbar = document.querySelector('.navbar');
            const headerHeight = navbar ? navbar.offsetHeight : 80;
            const elementPosition = element.offsetTop - headerHeight;
            
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }, 100);
    }
}

// Mettre à jour la section active
function updateActiveSection() {
    const sections = ['home', 'skills', 'projects-uiux', 'projects', 'contact'];
    const navbar = document.querySelector('.navbar');
    const headerHeight = navbar ? navbar.offsetHeight : 80;
    const scrollPosition = window.pageYOffset + headerHeight + 50;

    for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
            const offsetTop = element.offsetTop;
            const offsetHeight = element.offsetHeight;
            
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                if (currentSection !== section) {
                    currentSection = section;
                    updateActiveNavLink(section);
                }
                break;
            }
        }
    }
}

// Mettre à jour le lien de navigation actif
function updateActiveNavLink(activeSection) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const section = link.getAttribute('data-section');
        if (section === activeSection) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Ajouter un écouteur de clic à l'extérieur pour fermer le menu mobile
function addClickOutsideListener() {
    document.addEventListener('click', function(event) {
        const target = event.target;
        const navbar = document.querySelector('.navbar');
        
        if (isMobileMenuOpen && navbar && !navbar.contains(target)) {
            closeMobileMenu();
        }
    });
}

// Télécharger le CV
function downloadCV() {
    // Fermer le menu mobile si ouvert
    closeMobileMenu();
    
    // Créer un lien de téléchargement
    const link = document.createElement('a');
    link.href = 'assets/Download/CV_Saied_Dhia.pdf';
    link.download = 'Dhia_Saied_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}



// Scroll to section function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Download CV function
function downloadCV() {
    const loadingOverlay = document.getElementById('cvLoadingOverlay');
    loadingOverlay.style.display = 'flex';
    
    setTimeout(() => {
        const link = document.createElement('a');
        link.href = 'assets/Download/CV_Saied_Dhia.pdf';
        link.download = 'CV_Saied_Dhia.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        loadingOverlay.style.display = 'none';
    }, 1500);
}

// Contact me function
function contactMe() {
    const contactOptions = [
        {
            label: 'WhatsApp',
            icon: 'fab fa-whatsapp',
            action: () => window.open('https://wa.me/21692021578', '_blank', 'noopener,noreferrer')
        },
        {
            label: 'LinkedIn Profile',
            icon: 'fab fa-linkedin',
            action: () => window.open('https://www.linkedin.com/in/saied-dhia/', '_blank', 'noopener,noreferrer')
        },
        {
            label: 'Contact Form',
            icon: 'fas fa-address-card',
            action: () => scrollToSection('contact')
        }
    ];

    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        backdrop-filter: blur(5px);
    `;

    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: rgba(255, 255, 255, 0.05);
        border-radius: 20px;
        padding: 30px;
        max-width: 400px;
        width: 90%;
        text-align: center;
        border: 1px solid #64748b;
        box-shadow: 0 20px 40px#64748b;
    `;

    const title = document.createElement('h3');
    title.textContent = 'Contact Me';
    title.style.cssText = `
        color: white;
        margin-bottom: 20px;
        font-size: 1.5rem;
        font-weight: 600;
    `;

    const optionsContainer = document.createElement('div');
    optionsContainer.style.cssText = `
        display: flex;
        flex-direction: column;
        gap: 15px;
    `;

    contactOptions.forEach(option => {
        const button = document.createElement('button');
        button.style.cssText = `
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 15px 30px;
            border: none;
            border-radius: 50px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            position: relative;
            overflow: hidden;
            background: #64748b;
            color: #fff;
            width: 100%;
            justify-content: center;
        `;

        const icon = document.createElement('i');
        icon.className = option.icon;
        icon.style.cssText = `font-size: 1.1rem;`;

        const text = document.createElement('span');
        text.textContent = option.label;

        button.appendChild(icon);
        button.appendChild(text);

        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-3px)';
            button.style.boxShadow = '0 0 5px #64748b, 0 0 10px #64748b, 0 0 15px #64748b, 0 0 20px #64748b';
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
            button.style.boxShadow = 'none';
        });

        button.addEventListener('click', () => {
            option.action();
            document.body.removeChild(modal);
        });

        optionsContainer.appendChild(button);
    });

    const closeButton = document.createElement('button');
    closeButton.textContent = '✕';
    closeButton.style.cssText = `
        position: absolute;
        top: 15px;
        right: 15px;
        background: none;
        border: none;
        color: rgba(255, 255, 255, 0.7);
        font-size: 1.5rem;
        cursor: pointer;
        padding: 5px;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
    `;

    closeButton.addEventListener('mouseenter', () => {
        closeButton.style.background = 'rgba(255, 255, 255, 0.1)';
        closeButton.style.color = 'white';
    });

    closeButton.addEventListener('mouseleave', () => {
        closeButton.style.background = 'none';
        closeButton.style.color = 'rgba(255, 255, 255, 0.7)';
    });

    closeButton.addEventListener('click', () => {
        document.body.removeChild(modal);
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });

    modalContent.appendChild(closeButton);
    modalContent.appendChild(title);
    modalContent.appendChild(optionsContainer);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
}

// Open project function
function openProject(url) {
    window.open(url, '_blank', 'noopener,noreferrer');
}

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animate skill bars on scroll
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBars = entry.target.querySelectorAll('.skill-progress');
                skillBars.forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0%';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 200);
                });
            }
        });
    }, observerOptions);

    const skillsSection = document.querySelector('.skills-section');
    if (skillsSection) {
        observer.observe(skillsSection);
    }
});


 // Définir l'année courante
 document.getElementById('currentYear').textContent = new Date().getFullYear();

 // Fonction pour ouvrir un lien social
 function onSocialClick(url) {
     window.open(url, '_blank');
 }

 // Fonction pour ouvrir l'email
 function onEmailClick() {
     window.location.href = 'mailto:Dhiasaied733@gmail.com';
 }

 // Fonction pour appeler le téléphone
 function onPhoneClick() {
     window.location.href = 'tel:92021578';
 }

 // Smooth scrolling pour les liens de navigation
 document.addEventListener('DOMContentLoaded', function() {
     const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
     
     navLinks.forEach(link => {
         link.addEventListener('click', function(e) {
             e.preventDefault();
             const targetId = this.getAttribute('href').substring(1);
             const targetElement = document.getElementById(targetId);
             
             if (targetElement) {
                 targetElement.scrollIntoView({
                     behavior: 'smooth',
                     block: 'start'
                 });
             }
         });
     });
 });

 // Animation d'apparition au scroll (optionnel)
 function animateOnScroll() {
     const observer = new IntersectionObserver((entries) => {
         entries.forEach(entry => {
             if (entry.isIntersecting) {
                 entry.target.style.opacity = '1';
                 entry.target.style.transform = 'translateY(0)';
             }
         });
     }, {
         threshold: 0.1,
         rootMargin: '0px 0px -50px 0px'
     });

     const footerColumns = document.querySelectorAll('.footer-column');
     footerColumns.forEach((column, index) => {
         column.style.opacity = '0';
         column.style.transform = 'translateY(30px)';
         column.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
         observer.observe(column);
     });
 }

 // Initialiser les animations au chargement de la page
 document.addEventListener('DOMContentLoaded', animateOnScroll);