(function () {
  "use strict";

  /* ============================================
     I18N DICTIONARY
     ============================================ */
  var dict = {
    en: {
      "nav.about": "About", "nav.experience": "Experience", "nav.projects": "Projects",
      "nav.skills": "Skills", "nav.achievements": "Achievements", "nav.contact": "Contact",
      "hero.greeting": "Hi, I'm",
      "hero.description": "I build web applications and digital products, combining programming, design, and attention to user experience. I like turning ideas into functional, well-structured, and easy-to-use solutions.",
      "hero.downloadCv": "Download CV",
      "hero.scroll": "Scroll",
      "about.heading": "About",
      "about.p1": "I'm a Software Engineering student and a Systems Development technician from SENAI FIRJAN. I also have a background in Design from Zion — an experience that directly shapes how I build: to me, a good product has to work well, be clear, and make sense for the person using it.",
      "about.p2": "My experience started with real web development projects. I was responsible for building and launching two institutional websites for organizations representing family farming, taking part in the whole process — from gathering requirements to implementation, testing, refinement, and deployment.",
      "about.p3": "Beyond web development, I've taken part in robotics projects, hackathons, and initiatives that encourage women's presence in STEM fields. I enjoy challenges that call for research, creativity, testing, and a few tries before landing on something solid.",
      "about.p4": "Right now, I'm continuing to deepen my knowledge in software engineering and digital product development, working toward building solutions that are useful, reliable, and well thought out.",
      "experience.heading": "Experience",
      "experience.period": "2023 — Present",
      "experience.title": "Freelance Web Developer",
      "experience.company": "Self-employed",
      "experience.bullet1": "Designed and developed institutional websites end-to-end, from first conversation to deployment.",
      "experience.bullet2": "Delivered projects for public organizations and third-sector entities, including federations and confederations focused on family farming.",
      "education.heading": "Education",
      "education.uva": "Bachelor's in Software Engineering",
      "education.uva.desc": "Ongoing degree with a focus on software engineering, systems development, and digital product design.",
      "education.senai": "Systems Development Technician",
      "education.senai.desc": "Capstone project presented as final coursework, with hands-on experience in web development, APIs, and databases.",
      "education.zion": "Design Master",
      "education.zion.desc": "Graphic design, UI/UX, Adobe Creative Cloud, 3D modeling, ZBrush, and Autodesk Maya.",
      "projects.heading": "Projects",
      "projects.sub": "A selection of things I've built.",
      "projects.code": "Code",
      "projects.demo": "Website",
      "projects.domainSoon": "Coming soon",
      "projects.feaferj": "Institutional website developed for the Rio de Janeiro State Federation of Family Farmers, built to give the organization a clear, accessible presence online.",
      "projects.cobraf": "Institutional website developed for the Brazilian Confederation of Family Farming, translating the organization's national scope into a fast, well-structured site.",
      "projects.fireEthics": "Built during the Hack & Ética: Grand Prix de Soluções Éticas. An HR tool that uses AI to reduce bias in hiring and make recruitment more ethical and inclusive.",
      "projects.evencity": "An academic project that generates personalized itineraries, helping people plan multiple stops and visit several places in a single day.",
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
      "nav.about": "Sobre", "nav.experience": "Experiência", "nav.projects": "Projetos",
      "nav.skills": "Habilidades", "nav.achievements": "Conquistas", "nav.contact": "Contato",
      "hero.greeting": "Olá, eu sou",
      "hero.description": "Desenvolvo aplicações web e produtos digitais combinando programação, design e atenção à experiência do usuário. Gosto de transformar ideias em soluções funcionais, bem estruturadas e fáceis de usar.",
      "hero.downloadCv": "Baixar CV",
      "hero.scroll": "Rolar",
      "about.heading": "Sobre",
      "about.p1": "Sou estudante de Engenharia de Software e técnica em Desenvolvimento de Sistemas pelo SENAI FIRJAN. Também tenho formação em Design pela Zion, experiência que influencia diretamente a maneira como desenvolvo: para mim, um bom produto precisa funcionar bem, ser claro e fazer sentido para quem o utiliza.",
      "about.p2": "Minha experiência começou com projetos reais de desenvolvimento web. Fui responsável pela criação e publicação de dois sites institucionais para entidades representativas da agricultura familiar, participando de todo o processo — desde o levantamento de requisitos até a implementação, os testes, os ajustes e o deploy.",
      "about.p3": "Além do desenvolvimento web, participei de projetos de robótica, hackathons e iniciativas de incentivo à presença feminina em áreas STEM. Gosto de desafios que exigem pesquisa, criatividade, testes e diferentes tentativas até chegar a uma solução consistente.",
      "about.p4": "Atualmente, continuo aprofundando meus conhecimentos em engenharia de software e desenvolvimento de produtos digitais, buscando construir soluções úteis, confiáveis e bem planejadas.",
      "experience.heading": "Experiência",
      "experience.period": "2023 — Presente",
      "experience.title": "Desenvolvedora Web Freelance",
      "experience.company": "Autônoma",
      "experience.bullet1": "Projetei e desenvolvi websites institucionais do início ao fim, da primeira conversa até o deploy.",
      "experience.bullet2": "Entreguei projetos para organizações públicas e entidades do terceiro setor, incluindo federações e confederações da agricultura familiar.",
      "education.heading": "Formação",
      "education.uva": "Bacharelado em Engenharia de Software",
      "education.uva.desc": "Formação em andamento, com foco em engenharia de software, desenvolvimento de sistemas e construção de produtos digitais.",
      "education.senai": "Técnico em Desenvolvimento de Sistemas",
      "education.senai.desc": "Projeto Integrador apresentado como Trabalho de Conclusão de Curso, com prática em desenvolvimento web, APIs e bancos de dados.",
      "education.zion": "Design Master",
      "education.zion.desc": "Design Gráfico, UI/UX, Adobe Creative Cloud, modelagem 3D, ZBrush e Autodesk Maya.",
      "projects.heading": "Projetos",
      "projects.sub": "Uma seleção do que já construí.",
      "projects.code": "Código",
      "projects.demo": "Site",
      "projects.domainSoon": "Domínio em breve",
      "projects.feaferj": "Website institucional desenvolvido para a Federação Estadual dos Agricultores Familiares do Rio de Janeiro, criado para dar à organização uma presença online clara e acessível.",
      "projects.cobraf": "Website institucional desenvolvido para a Confederação Brasileira da Agricultura Familiar, traduzindo o alcance nacional da organização em um site rápido e bem estruturado.",
      "projects.fireEthics": "Criado durante o Hack & Ética: Grand Prix de Soluções Éticas. Uma ferramenta de RH que usa inteligência artificial para reduzir vieses no recrutamento e tornar a seleção mais ética e inclusiva.",
      "projects.evencity": "Projeto acadêmico que gera roteiros personalizados, ajudando as pessoas a planejar diversas paradas e visitar vários lugares no mesmo dia.",
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
    en: ["Software Engineering Student", "Web Developer"],
    pt: ["Estudante de Engenharia de Software", "Desenvolvedora Web"]
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
  var sections = ["about", "experience", "projects", "skills", "achievements", "contact"];
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
