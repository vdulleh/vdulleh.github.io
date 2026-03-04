// ─── Navbar: sticky + background on scroll ────────────────
const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10,10,10,0.92)';
        navbar.style.backdropFilter = 'blur(12px)';
        navbar.style.borderBottom = '1px solid rgba(201,168,76,0.1)';
      } else {
        navbar.style.background = 'transparent';
        navbar.style.backdropFilter = 'none';
        navbar.style.borderBottom = 'none';
      }
    });

    // ─── Mobile menu toggle ───────────────────────────────────
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const bar1 = document.getElementById('bar1');
    const bar2 = document.getElementById('bar2');
    const bar3 = document.getElementById('bar3');
    let menuOpen = false;

    menuBtn.addEventListener('click', () => {
      menuOpen = !menuOpen;
      mobileMenu.classList.toggle('open', menuOpen);
      bar1.style.transform = menuOpen ? 'rotate(45deg) translate(4px, 4px)' : '';
      bar2.style.opacity = menuOpen ? '0' : '1';
      bar3.style.transform = menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : '';
      bar3.style.width = menuOpen ? '100%' : '';
    });

    function closeMobileMenu() {
      menuOpen = false;
      mobileMenu.classList.remove('open');
      bar1.style.transform = bar2.style.opacity = bar3.style.transform = '';
      bar3.style.width = '';
    }

    // ─── Dark / Light mode toggle ─────────────────────────────
    const html = document.documentElement;
    const themeIcon = document.getElementById('theme-icon');
    let dark = true;

    document.getElementById('theme-toggle').addEventListener('click', () => {
      dark = !dark;
      html.classList.toggle('dark', dark);
      html.classList.toggle('light', !dark);
      themeIcon.className = dark ? 'fas fa-sun text-sm' : 'fas fa-moon text-sm';

      // Adjust form inputs and mist backgrounds for light mode
      document.querySelectorAll('.bg-mist').forEach(el => {
        el.style.background = dark ? '' : '#ede8dc';
      });
      document.querySelectorAll('.bg-mist-2').forEach(el => {
        el.style.background = dark ? '' : '#e0dace';
      });
      document.body.style.background = dark ? '#0a0a0a' : '#f5f0e8';
      document.body.style.color = dark ? '#f5f0e8' : '#0a0a0a';
    });

    // ─── Scroll to top button ─────────────────────────────────
    const scrollTop = document.getElementById('scroll-top');
    window.addEventListener('scroll', () => {
      scrollTop.classList.toggle('visible', window.scrollY > 400);
    });

    // ─── Intersection Observer — reveal on scroll ─────────────
    const revealEls = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);

          // Animate skill bars when visible
          if (entry.target.querySelector('.skill-bar-fill')) {
            animateSkillBars(entry.target);
          }
        }
      });
    }, { threshold: 0.15 });

    revealEls.forEach(el => observer.observe(el));

    // ─── Skill bar animation ──────────────────────────────────
    function animateSkillBars(container) {
      container.querySelectorAll('.skill-item').forEach(item => {
        const pct = item.dataset.pct;
        const bar = item.querySelector('.skill-bar-fill');
        if (bar && pct) {
          setTimeout(() => { bar.style.width = pct + '%'; }, 200);
        }
      });
    }

    // Also animate all visible skill bars on load
    document.querySelectorAll('.skill-item').forEach(item => {
      const pct = item.dataset.pct;
      const bar = item.querySelector('.skill-bar-fill');
      if (bar) bar.style.width = '0%';
    });

    // ─── Active nav link on scroll ────────────────────────────
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
        const top = section.offsetTop - 100;
        if (window.scrollY >= top) current = section.id;
      });
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + current);
      });
    });

    // ─── Contact form validation ──────────────────────────────
    document.getElementById('contact-form').addEventListener('submit', function(e) {
      e.preventDefault();
      let valid = true;

      const fields = [
        { id: 'name',    type: 'text' },
        { id: 'email',   type: 'email' },
        { id: 'message', type: 'text' },
      ];

      fields.forEach(field => {
        const input = document.getElementById(field.id);
        const error = input.parentElement.querySelector('.error-msg');
        const val = input.value.trim();
        let ok = val.length > 0;
        if (field.type === 'email') ok = ok && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

        input.style.borderColor = ok ? '' : '#f87171';
        if (error) error.classList.toggle('hidden', ok);
        if (!ok) valid = false;
      });

      if (!valid) return;

      // Simulate submission
      const btn = document.getElementById('submit-btn');
      const text = document.getElementById('submit-text');
      const icon = document.getElementById('submit-icon');

      btn.disabled = true;
      btn.style.opacity = '0.7';
      text.textContent = 'Sending…';
      icon.className = 'fas fa-circle-notch fa-spin text-xs';

      setTimeout(() => {
        btn.style.display = 'none';
        document.getElementById('success-msg').classList.remove('hidden');
        document.getElementById('contact-form').reset();
      }, 1800);
    });

        // Clear validation on input
        document.querySelectorAll('.form-input').forEach(input => {
          input.addEventListener('input', () => {
            input.style.borderColor = '';
            const error = input.parentElement.querySelector('.error-msg');
            if (error) error.classList.add('hidden');
          });
    });