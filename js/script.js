(function () {
  "use strict";

  /* ============================================
     I18N DICTIONARY
     ============================================ */
  var dict = {
    en: {
      "nav.about": "Profile", "nav.experience": "Experience", "nav.journey": "Journey", "nav.projects": "Projects",
      "nav.skills": "Skills", "nav.achievements": "Achievements", "nav.contact": "Contact",
      "hero.greeting": "Hi, I'm",
      "hero.description": "I combine development and design to turn real needs into clear, functional web applications. I take each project from initial requirements to launch.",
      "hero.downloadCv": "Download CV",
      "hero.scroll": "View skills",
      "about.heading": "About",
      "journey.heading": "Professional Journey",
      "journey.sub": "Profile, experience, education, and activities organized for quick scanning.",
      "journey.experience": "Experience",
      "journey.lead": "Software engineering, web development, and design working together to build clear digital products.",
      "journey.tag.web": "Web development",
      "journey.tag.design": "UI/UX mindset",
      "journey.tag.delivery": "End-to-end delivery",
      "journey.stat.projects": "published institutional websites",
      "journey.stat.paths": "technical and design learning paths",
      "about.p1": "I'm a Software Engineering student, Systems Development technician, and web developer with a design background. I like building interfaces that are clear, useful, and grounded in real user needs.",
      "about.p2": "I've delivered institutional websites from requirements to deployment, working across structure, interface, implementation, testing, and publication.",
      "about.p3": "Beyond web development, I've taken part in robotics projects, hackathons, and initiatives that encourage women's presence in STEM fields. I enjoy challenges that call for research, creativity, testing, and a few tries before landing on something solid.",
      "about.p4": "Right now, I'm continuing to deepen my knowledge in software engineering and digital product development, working toward building solutions that are useful, reliable, and well thought out.",
      "experience.heading": "Experience & Education",
      "experience.sub": "Web projects delivered end-to-end, supported by software engineering and design training.",
      "experience.period": "2023 — Present",
      "experience.title": "Freelance Web Developer",
      "experience.company": "Self-employed",
      "experience.bullet1": "Built and published institutional websites with attention to structure, responsiveness, accessibility, and maintainability.",
      "experience.bullet2": "Turned institutional needs from family farming organizations into practical web experiences.",
      "education.heading": "Education",
      "education.uva": "Bachelor's in Software Engineering",
      "education.uva.desc": "Ongoing degree with a focus on software engineering, systems development, and digital product design.",
      "education.senai": "Systems Development Technician",
      "education.senai.desc": "Capstone project presented as final coursework, with hands-on experience in web development, APIs, and databases.",
      "education.zion": "Design Master",
      "education.zion.desc": "Graphic design, UI/UX, Adobe Creative Cloud, 3D modeling, ZBrush, and Autodesk Maya.",
      "projects.heading": "Projects",
      "projects.sub": "Selected projects with real users, real requirements, and shipped results.",
      "projects.code": "Code",
      "projects.demo": "Website",
      "projects.domainSoon": "Coming soon",
      "projects.feaferj": "Institutional website for the Rio de Janeiro State Federation of Family Farmers. I worked from requirements to deployment, creating a clear structure for institutional content and public communication.",
      "projects.cobraf": "Institutional website for the Brazilian Confederation of Family Farming, focused on performance, organization, and a more professional national presence.",
      "projects.fireEthics": "AI prototype created during Hack & Ethics to support fairer hiring analysis and reduce bias in recruitment workflows.",
      "projects.evencity": "Academic itinerary planner that helps people organize multiple stops and make better use of a day in the city.",
      "skills.heading": "Skills",
      "skills.sub": "Technologies I work with.",
      "skills.languages": "Languages", "skills.frontend": "Frontend", "skills.backend": "Backend",
      "skills.databases": "Databases", "skills.tools": "Tools",
      "achievements.heading": "Achievements & Activities",
      "achievements.hack.title": "Hack & Ética — Grand Prix de Soluções Éticas",
      "achievements.hack.desc": "Participated in the 2024 and 2025 editions, collaborating on Fire Ethics, an AI prototype for ethical analysis of hiring processes, and Lupix, an app to combat cyberbullying.",
      "achievements.moi.title": "MOI — Meninas Olímpicas do IMPA",
      "achievements.moi.desc": "Took part in an initiative by the Institute for Pure and Applied Mathematics (IMPA) that encourages women's presence in Mathematics, Computer Science, and STEM fields.",
      "achievements.ninja.title": "Ninja Tigers Robotics Team — Firjan SESI",
      "achievements.ninja.desc": "Took part in collaborative robotics and software projects, contributing with programming, problem-solving, and teamwork. Ninja Tigers placed runner-up (2nd place) at the FIRA World Cup Robotics 2023 — I was part of the team during that period, though I didn't attend the competition in person; other members represented the team on-site.",
      "contact.heading": "Contact",
      "contact.sub": "Have an opportunity, a project, or just want to say hi? My inbox is open.",
      "contact.email": "Email", "contact.github": "GitHub", "contact.linkedin": "LinkedIn", "contact.website": "Website",
      "footer.rights": "All rights reserved.",
      "footer.built": "Built with HTML, CSS & JavaScript."
    },
    pt: {
      "nav.about": "Perfil", "nav.experience": "Experiência", "nav.journey": "Trajetória", "nav.projects": "Projetos",
      "nav.skills": "Habilidades", "nav.achievements": "Conquistas", "nav.contact": "Contato",
      "hero.greeting": "Olá, eu sou",
      "hero.description": "Uno desenvolvimento e design para transformar necessidades reais em aplicações web claras, funcionais e fáceis de usar. Acompanho cada projeto dos primeiros requisitos à publicação.",
      "hero.downloadCv": "Baixar CV",
      "hero.scroll": "Ver habilidades",
      "about.heading": "Sobre",
      "journey.heading": "Trajetória profissional",
      "journey.sub": "Perfil, experiência, formação e atividades organizados para leitura rápida.",
      "journey.experience": "Experiência",
      "journey.lead": "Engenharia de software, desenvolvimento web e design trabalhando juntos para criar produtos digitais claros.",
      "journey.tag.web": "Desenvolvimento web",
      "journey.tag.design": "Visão de UI/UX",
      "journey.tag.delivery": "Entrega ponta a ponta",
      "journey.stat.projects": "sites institucionais publicados",
      "journey.stat.paths": "formações entre tecnologia e design",
      "about.p1": "Sou estudante de Engenharia de Software, técnica em Desenvolvimento de Sistemas e desenvolvedora web com base em design. Gosto de criar interfaces claras, úteis e pensadas para necessidades reais.",
      "about.p2": "Já entreguei sites institucionais do levantamento de requisitos ao deploy, atuando em estrutura, interface, implementação, testes e publicação.",
      "experience.heading": "Experiência e Formação",
      "experience.sub": "Projetos web entregues de ponta a ponta, com base em engenharia de software e design.",
      "experience.period": "2023 — Presente",
      "experience.title": "Desenvolvedora Web Freelance",
      "experience.company": "Autônoma",
      "experience.bullet1": "Construí e publiquei websites institucionais com atenção a estrutura, responsividade, acessibilidade e manutenção.",
      "experience.bullet2": "Transformei necessidades institucionais de organizações da agricultura familiar em experiências web práticas.",
      "education.heading": "Formação",
      "education.uva": "Bacharelado em Engenharia de Software",
      "education.uva.desc": "Formação em andamento, com foco em engenharia de software, desenvolvimento de sistemas e construção de produtos digitais.",
      "education.senai": "Técnico em Desenvolvimento de Sistemas",
      "education.senai.desc": "Projeto Integrador apresentado como Trabalho de Conclusão de Curso, com prática em desenvolvimento web, APIs e bancos de dados.",
      "education.zion": "Design Master",
      "education.zion.desc": "Design Gráfico, UI/UX, Adobe Creative Cloud, modelagem 3D, ZBrush e Autodesk Maya.",
      "projects.heading": "Projetos",
      "projects.sub": "Projetos selecionados com usuários reais, requisitos reais e entregas publicadas.",
      "projects.code": "Código",
      "projects.demo": "Site",
      "projects.domainSoon": "Domínio em breve",
      "projects.feaferj": "Website institucional para a Federação Estadual dos Agricultores Familiares do Rio de Janeiro. Atuei dos requisitos ao deploy, criando uma estrutura clara para conteúdo institucional e comunicação pública.",
      "projects.cobraf": "Website institucional para a Confederação Brasileira da Agricultura Familiar, com foco em performance, organização e presença nacional mais profissional.",
      "projects.fireEthics": "Protótipo com IA criado no Hack & Ética para apoiar análises mais justas em processos seletivos e reduzir vieses no recrutamento.",
      "projects.evencity": "Planejador acadêmico de roteiros que ajuda pessoas a organizar várias paradas e aproveitar melhor um dia na cidade.",
      "skills.heading": "Habilidades",
      "skills.sub": "Tecnologias com as quais trabalho.",
      "skills.languages": "Linguagens", "skills.frontend": "Frontend", "skills.backend": "Backend",
      "skills.databases": "Bancos de Dados", "skills.tools": "Ferramentas",
      "achievements.heading": "Conquistas e Atividades",
      "achievements.hack.title": "Hack & Ética — Grand Prix de Soluções Éticas",
      "achievements.hack.desc": "Participação nas edições de 2024 e 2025, colaborando no desenvolvimento do Fire Ethics, protótipo com inteligência artificial voltado à análise ética de processos seletivos, e do Lupix, aplicativo de combate ao cyberbullying.",
      "achievements.moi.title": "MOI — Meninas Olímpicas do IMPA",
      "achievements.moi.desc": "Participação em iniciativa do Instituto de Matemática Pura e Aplicada voltada ao incentivo da presença feminina em Matemática, Computação e áreas STEM.",
      "achievements.ninja.title": "Ninja Tigers Robotics Team — Firjan SESI",
      "achievements.ninja.desc": "Participação em projetos colaborativos de robótica e software, contribuindo com programação, resolução de problemas e trabalho em equipe. A Ninja Tigers foi vice-campeã — 2º lugar — na FIRA World Cup de Robótica 2023. Eu integrava a equipe nesse período, embora não tenha participado presencialmente da competição, que contou com a presença de outros integrantes.",
      "contact.heading": "Contato",
      "contact.sub": "Tem uma oportunidade, um projeto, ou só quer dizer oi? Minha caixa de entrada está aberta.",
      "contact.email": "Email", "contact.github": "GitHub", "contact.linkedin": "LinkedIn", "contact.website": "Website",
      "footer.rights": "Todos os direitos reservados.",
      "footer.built": "Construído com HTML, CSS & JavaScript."
    }
  };

  var roles = {
    en: ["Software Engineering Student", "Systems Development Technician"],
    pt: ["Estudante de Engenharia de Software", "Técnica em Desenvolviment de Sistemas"]
  };

  var cvFiles = {
    en: "assets/stephanie-loureiro-resume-en.pdf",
    pt: "assets/stephanie-loureiro-curriculo-pt.pdf"
  };

  /* ============================================
     THEME
     ============================================ */
  var root = document.documentElement;
  var themeToggle = document.getElementById("themeToggle");

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }

  (function initTheme() {
    var saved = localStorage.getItem("portfolio-theme");
    if (saved === "dark" || saved === "light") {
      applyTheme(saved);
    } else {
      var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      applyTheme(prefersDark ? "dark" : "light");
    }
  })();

  themeToggle.addEventListener("click", function () {
    var current = root.getAttribute("data-theme");
    applyTheme(current === "dark" ? "light" : "dark");
  });

  /* ============================================
     LANGUAGE
     ============================================ */
  var currentLang = "en";
  var langButtons = document.querySelectorAll(".lang-btn");
  var roleTextEl = document.getElementById("roleText");
  var roleIndex = 0;
  var roleTimer = null;

  function translatePage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[lang][key]) {
        el.textContent = dict[lang][key];
      }
    });
    document.documentElement.lang = lang;
  }

  function setLanguage(lang) {
    currentLang = lang;
    translatePage(lang);
    langButtons.forEach(function (btn) {
      var isActive = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
    roleIndex = 0;
    roleTextEl.textContent = roles[lang][0];
    var cvLink = document.getElementById("cvLink");
    var cvLinkNav = document.getElementById("cvLinkNav");
    if (cvFiles[lang]) {
      if (cvLink) cvLink.setAttribute("href", cvFiles[lang]);
      if (cvLinkNav) cvLinkNav.setAttribute("href", cvFiles[lang]);
    }
    localStorage.setItem("portfolio-lang", lang);
  }

  langButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      setLanguage(btn.getAttribute("data-lang"));
    });
  });

  (function initLang() {
    var saved = localStorage.getItem("portfolio-lang");
    if (saved === "en" || saved === "pt") {
      setLanguage(saved);
    } else {
      var browserLang = (navigator.language || "en").toLowerCase();
      setLanguage(browserLang.indexOf("pt") === 0 ? "pt" : "en");
    }
  })();

  /* ============================================
     ROTATING ROLE TEXT
     ============================================ */
  function rotateRole() {
    roleTextEl.classList.add("swap");
    setTimeout(function () {
      var list = roles[currentLang];
      roleIndex = (roleIndex + 1) % list.length;
      roleTextEl.textContent = list[roleIndex];
      roleTextEl.classList.remove("swap");
    }, 300);
  }
  setInterval(rotateRole, 2800);

  /* ============================================
     SMART NAVBAR (hide on scroll down, show on scroll up)
     ============================================ */
  var navbar = document.getElementById("navbar");
  var lastScroll = 0;

  window.addEventListener("scroll", function () {
    var current = window.scrollY;
    navbar.classList.toggle("scrolled", current > 24);

    if (current < 80) {
      navbar.classList.remove("hidden");
    } else if (current > lastScroll + 4) {
      navbar.classList.add("hidden");
    } else if (current < lastScroll - 4) {
      navbar.classList.remove("hidden");
    }
    lastScroll = current;
  }, { passive: true });

  /* ============================================
     MOBILE MENU
     ============================================ */
  var menuToggle = document.getElementById("menuToggle");
  var navLinks = document.getElementById("navLinks");

  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("open");
  });
  navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("open");
    });
  });

  /* ============================================
     ACTIVE SECTION HIGHLIGHT
     ============================================ */
  var sections = ["skills", "projects", "journey", "contact"];
  var navAnchors = document.querySelectorAll(".nav-links a");

  var sectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        navAnchors.forEach(function (a) {
          a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id);
        });
      }
    });
  }, { rootMargin: "-40% 0px -50% 0px", threshold: 0 });

  sections.forEach(function (id) {
    var el = document.getElementById(id);
    if (el) sectionObserver.observe(el);
  });

  /* ============================================
     SCROLL REVEAL
     ============================================ */
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry, i) {
      if (entry.isIntersecting) {
        setTimeout(function () {
          entry.target.classList.add("in-view");
        }, (i % 4) * 60);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -60px 0px" });

  document.querySelectorAll(".reveal").forEach(function (el) {
    revealObserver.observe(el);
  });

  /* ============================================
     FOOTER YEAR
     ============================================ */
  document.getElementById("year").textContent = new Date().getFullYear();

})();
