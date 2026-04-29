import { html, render } from "https://unpkg.com/lit-html?module";
import {
  sidebar,
  bio,
  hero,
  collabCta,
  researchPillars,
  industryToResearch,
  distinctiveApproach,
  featuredWork,
  teachingPhilosophy,
  experienceIntro,
  education,
  researchSections,
  experienceSections,
  media,
  interests,
  contactLinks,
  projectsFallback,
} from "./user-data/data.js";
import { URLs } from "./user-data/urls.js";

const { gitRepo } = URLs;

function sectionHeaderTemplate(data, size = "large") {
  const titleClass = size === "large" ? "section-title" : "detail-title";
  const subtitleClass = size === "large" ? "section-subtitle" : "detail-subtitle";
  return html`
    <div class="section-header">
      ${data?.eyebrow ? html`<p class="section-kicker">${data.eyebrow}</p>` : null}
      ${data?.title ? html`<h2 class="${titleClass}">${data.title}</h2>` : null}
      ${data?.subtitle ? html`<p class="${subtitleClass}">${data.subtitle}</p>` : null}
    </div>
  `;
}

function detailHeaderTemplate(title, subtitle, eyebrow) {
  return html`
    <div class="detail-header">
      ${eyebrow ? html`<p class="detail-kicker">${eyebrow}</p>` : null}
      ${title ? html`<h3 class="detail-title">${title}</h3>` : null}
      ${subtitle ? html`<p class="detail-subtitle">${subtitle}</p>` : null}
    </div>
  `;
}

function buildMailto(email, subject, body) {
  const encodedSubject = encodeURIComponent(subject || "");
  const encodedBody = encodeURIComponent(body || "");
  return `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;
}

function setSidebar() {
  if (sidebar?.name) {
    const nameEl = document.getElementById("sidebar-name");
    if (nameEl) {
      nameEl.textContent = sidebar.name;
    }
    document.title = `${sidebar.name} | Management Science`;
  }

  const titleEl = document.getElementById("sidebar-title");
  if (titleEl) {
    titleEl.textContent = sidebar.title || "";
  }

  const metaEl = document.getElementById("sidebar-meta");
  if (metaEl) {
    metaEl.textContent = sidebar.meta || "";
  }

  const taglineEl = document.getElementById("sidebar-tagline");
  if (taglineEl) {
    taglineEl.textContent = sidebar.tagline || "";
  }

  const imageEl = document.getElementById("profile-img");
  if (imageEl && sidebar?.image) {
    imageEl.src = sidebar.image;
  }
}

function populateSidebarActions(items, id) {
  const el = document.getElementById(id);
  if (!el || !items?.length) {
    return;
  }

  const template = html`
    ${items.map(
      (item) => html`
        <a
          class="sidebar-action ${item.primary ? "primary" : "secondary"}"
          href="${item.link}"
          target="_blank"
          rel="noopener noreferrer"
        >
          ${item.label}
        </a>
      `
    )}
  `;

  render(template, el);
}

function populateHero(data, paragraphs, id) {
  const el = document.getElementById(id);
  if (!el || !data) {
    return;
  }

  const template = html`
    ${sectionHeaderTemplate(data)}
    <div class="hero-grid">
      <div class="paper-panel hero-copy animate-box" data-animate-effect="fadeInLeft">
        ${paragraphs.map((line) => html`<p class="hero-paragraph">${line}</p>`)}
        <div class="hero-topic-grid">
          ${data.researchCards.map(
            (item) => html`
              <div class="hero-topic-card">
                <i class="fa fa-${item.icon}"></i>
                <span>${item.title}</span>
              </div>
            `
          )}
        </div>
        <div class="identity-ribbon">${data.statement}</div>
        <div class="hero-logo-strip">
          ${data.logos.map(
            (item) => html`
              <div class="hero-logo-card">
                <img src="${item.src}" alt="${item.label} logo" />
                <span>${item.label}</span>
              </div>
            `
          )}
        </div>
      </div>
      <div class="hero-side">
        <div class="paper-panel hero-facts animate-box" data-animate-effect="fadeInRight">
          <p class="mini-label">At a Glance</p>
          ${data.quickFacts.map(
            (item) => html`
              <div class="fact-item">
                <div class="fact-icon"><i class="fa fa-${item.icon}"></i></div>
                <div>
                  <span class="fact-label">${item.label}</span>
                  <p class="fact-value">${item.value}</p>
                </div>
              </div>
            `
          )}
        </div>
        <div class="paper-panel hero-focus animate-box" data-animate-effect="fadeInRight">
          <p class="mini-label">Core Focus</p>
          <div class="hero-focus-grid">
            ${paragraphs.map((line) => html`<div class="hero-focus-card"><span>${line}</span></div>`)}
          </div>
        </div>
      </div>
    </div>
  `;

  render(template, el);
}

function populateCollabCta(data, id) {
  const el = document.getElementById(id);
  if (!el || !data) {
    return;
  }

  const template = html`
    <div class="collab-cta animate-box" data-animate-effect="fadeInUp">
      <div class="collab-title">${data.title}</div>
      <p class="collab-body">${data.body}</p>
      <div class="collab-actions">
        <button type="button" class="collab-btn" data-recipient="academic">
          <i class="fa fa-envelope"></i>
          <i class="fa fa-graduation-cap"></i>
          ${data.academicLabel}
        </button>
        <button type="button" class="collab-btn secondary" data-recipient="personal">
          <i class="fa fa-envelope"></i>
          <i class="fa fa-user"></i>
          ${data.personalLabel}
        </button>
      </div>
    </div>
  `;

  render(template, el);
}

function setupCollabModal(data) {
  const modal = document.getElementById("collab-modal");
  const subjectInput = document.getElementById("collab-subject");
  const messageInput = document.getElementById("collab-message");
  const sendBtn = document.getElementById("collab-send");
  const copyEmailBtn = document.getElementById("collab-copy-email");
  const copyMessageBtn = document.getElementById("collab-copy-message");
  const recipientButtons = document.querySelectorAll(".recipient-btn");
  const ctaButtons = document.querySelectorAll(".collab-btn[data-recipient]");

  if (!modal || !subjectInput || !messageInput || !sendBtn) {
    return;
  }

  const recipientMap = {
    academic: {
      email: data.academicEmail,
      subject: data.academicSubject,
    },
    personal: {
      email: data.personalEmail,
      subject: data.personalSubject,
    },
  };

  let activeRecipient = "academic";

  function setRecipient(key) {
    activeRecipient = key;
    recipientButtons.forEach((btn) => {
      const isActive = btn.getAttribute("data-recipient") === key;
      btn.classList.toggle("active", isActive);
    });
    subjectInput.value = recipientMap[key].subject || "";
  }

  function openModal(recipientKey) {
    setRecipient(recipientKey || "academic");
    if (!messageInput.value) {
      messageInput.value = data.messageTemplate || "";
    }
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    subjectInput.focus();
  }

  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  }

  function copyText(text) {
    if (!text) {
      return;
    }

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text);
      return;
    }

    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }

  ctaButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      openModal(btn.getAttribute("data-recipient"));
    });
  });

  recipientButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      setRecipient(btn.getAttribute("data-recipient"));
    });
  });

  sendBtn.addEventListener("click", () => {
    const subject = subjectInput.value.trim();
    const body = messageInput.value.trim();
    const { email } = recipientMap[activeRecipient];
    window.location.href = buildMailto(email, subject, body);
  });

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", () => {
      copyText(recipientMap[activeRecipient].email);
    });
  }

  if (copyMessageBtn) {
    copyMessageBtn.addEventListener("click", () => {
      copyText(messageInput.value.trim());
    });
  }

  modal.querySelectorAll("[data-modal-close]").forEach((modalClose) => {
    modalClose.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("open")) {
      closeModal();
    }
  });
}

function populateResearchPillars(data, id) {
  const el = document.getElementById(id);
  if (!el || !data) {
    return;
  }

  const template = html`
    ${sectionHeaderTemplate(data)}
    <div class="paper-panel agenda-panel animate-box" data-animate-effect="fadeInUp">
      <div class="pillar-grid">
        ${data.pillars.map(
          (pillar) => html`
            <div class="pillar-card">
              <div class="pillar-icon"><i class="fa fa-${pillar.icon}"></i></div>
              <h3>${pillar.title}</h3>
              <p>${pillar.description}</p>
            </div>
          `
        )}
      </div>
      <p class="agenda-footer">${data.subtitle}</p>
    </div>
  `;

  render(template, el);
}

function populateIndustryToResearch(data, id) {
  const el = document.getElementById(id);
  if (!el || !data) {
    return;
  }

  const template = html`
    ${sectionHeaderTemplate(data)}
    <div class="journey-grid">
      <div class="paper-panel journey-card animate-box" data-animate-effect="fadeInLeft">
        <p class="mini-label">${data.industry.title}</p>
        <p class="journey-copy">${data.industry.description}</p>
        <div class="journey-tags">
          ${data.industry.tags.map((tag) => html`<span class="driver-chip">${tag}</span>`)}
        </div>
      </div>
      <div class="journey-arrow" aria-hidden="true"><i class="fa fa-long-arrow-right"></i></div>
      <div class="paper-panel journey-card journey-pivot animate-box" data-animate-effect="fadeInUp">
        <p class="mini-label">${data.pivot.title}</p>
        <h3 class="journey-statement">${data.pivot.statement}</h3>
        <div class="journey-steps">
          ${data.pivot.steps.map((step) => html`<span class="step-chip">${step}</span>`)}
        </div>
        <p class="journey-copy muted-copy">${data.pivot.detail}</p>
      </div>
      <div class="journey-arrow" aria-hidden="true"><i class="fa fa-long-arrow-right"></i></div>
      <div class="journey-outcomes animate-box" data-animate-effect="fadeInRight">
        ${data.outcomes.map(
          (outcome) => html`
            <div class="paper-panel outcome-card">
              <p class="mini-label">${outcome.label}</p>
              <h3>${outcome.title}</h3>
              <p>${outcome.description}</p>
            </div>
          `
        )}
      </div>
    </div>
    <div class="note-strip">${data.footer}</div>
  `;

  render(template, el);
}

function populateDistinctiveApproach(data, id) {
  const el = document.getElementById(id);
  if (!el || !data) {
    return;
  }

  const template = html`
    ${sectionHeaderTemplate(data)}
    <div class="approach-list">
      ${data.rows.map(
        (row) => html`
          <div class="paper-panel approach-row animate-box" data-animate-effect="fadeInUp">
            <div class="approach-number">${row.number}</div>
            <div class="approach-content">
              <h3>${row.title}</h3>
              <div class="approach-flow">
                <div class="approach-cell">
                  <i class="fa fa-${row.leftIcon}"></i>
                  <span>${row.leftLabel}</span>
                </div>
                <div class="approach-arrow"><i class="fa fa-long-arrow-right"></i></div>
                <div class="approach-cell">
                  <i class="fa fa-${row.rightIcon}"></i>
                  <span>${row.rightLabel}</span>
                </div>
              </div>
            </div>
          </div>
        `
      )}
    </div>
    <div class="principle-strip">
      ${data.principles.map((principle) => html`<span class="principle-chip">${principle}</span>`)}
    </div>
  `;

  render(template, el);
}

function populateFeaturedWork(data, id) {
  const el = document.getElementById(id);
  if (!el || !data) {
    return;
  }

  const template = html`
    ${sectionHeaderTemplate(data)}
    <div class="featured-grid">
      ${data.cards.map(
        (card) => html`
          <div class="featured-card animate-box" data-animate-effect="fadeInUp">
            <div class="featured-icon"><i class="fa fa-${card.icon}"></i></div>
            <h3>${card.title}</h3>
            <p>${card.description}</p>
          </div>
        `
      )}
    </div>
    <div class="forward-layout">
      <div class="paper-panel forward-panel animate-box" data-animate-effect="fadeInLeft">
        <p class="mini-label">${data.forwardDirection.title}</p>
        <div class="forward-grid">
          ${data.forwardDirection.items.map(
            (item) => html`
              <div class="forward-card">
                <div class="forward-icon"><i class="fa fa-${item.icon}"></i></div>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
              </div>
            `
          )}
        </div>
      </div>
      <div class="paper-panel outside-card animate-box" data-animate-effect="fadeInRight">
        <p class="mini-label">${data.outsideAcademia.eyebrow}</p>
        <h3>${data.outsideAcademia.title}</h3>
        <p>${data.outsideAcademia.description}</p>
        <a
          href="${data.outsideAcademia.link}"
          target="_blank"
          rel="noopener noreferrer"
          class="text-link"
        >
          ${data.outsideAcademia.linkLabel}
        </a>
      </div>
    </div>
  `;

  render(template, el);
}

function populateTeachingPhilosophy(data, id) {
  const el = document.getElementById(id);
  if (!el || !data) {
    return;
  }

  const template = html`
    ${sectionHeaderTemplate(data)}
    <div class="teaching-layout">
      <div class="teaching-top">
        <div class="paper-panel teaching-column animate-box" data-animate-effect="fadeInLeft">
          <p class="mini-label">What AI can help students do</p>
          <ul class="teaching-list">
            ${data.aiCanHelp.map((item) => html`<li>${item}</li>`)}
          </ul>
        </div>
        <div class="paper-panel teaching-quote animate-box" data-animate-effect="fadeInUp">
          ${data.subtitle}
        </div>
        <div class="paper-panel teaching-column animate-box" data-animate-effect="fadeInRight">
          <p class="mini-label">What students still must learn</p>
          <ul class="teaching-list">
            ${data.studentsMustLearn.map((item) => html`<li>${item}</li>`)}
          </ul>
        </div>
      </div>

      <div class="teaching-bottom">
        <div class="paper-panel animate-box" data-animate-effect="fadeInLeft">
          <p class="mini-label">How I structure learning</p>
          <div class="teaching-structure">
            ${data.structure.map(
              (item) => html`
                <div class="structure-step">
                  <span>${item}</span>
                </div>
              `
            )}
          </div>
        </div>
        <div class="paper-panel animate-box" data-animate-effect="fadeInRight">
          <p class="mini-label">What I want students to leave with</p>
          <div class="teaching-outcomes">
            ${data.outcomes.map(
              (item) => html`
                <div class="outcome-pill">
                  <span>${item}</span>
                </div>
              `
            )}
          </div>
        </div>
      </div>

      <div class="course-chip-row animate-box" data-animate-effect="fadeInUp">
        ${data.courses.map((course) => html`<span class="course-chip">${course}</span>`)}
      </div>
    </div>
  `;

  render(template, el);
}

function populateExperienceIntro(data, id) {
  const el = document.getElementById(id);
  if (!el || !data) {
    return;
  }

  const template = html`
    ${sectionHeaderTemplate(data)}
    <div class="paper-panel intro-panel animate-box" data-animate-effect="fadeInUp">
      ${data.body.map((line) => html`<p class="hero-paragraph">${line}</p>`)}
    </div>
  `;

  render(template, el);
}

function tagsTemplate(tags) {
  if (!tags?.length) {
    return null;
  }

  return html`
    <div class="tags-container">
      ${tags.map((tag) => html`<span class="profile-badge brown-badge">${tag}</span>`)}
    </div>
  `;
}

function timelineEntryTemplate(item) {
  return html`
    <article class="timeline-entry animate-box" data-animate-effect="fadeInUp">
      <div class="paper-panel timeline-card">
        <div class="timeline-head">
          <div class="timeline-brand">
            ${item.logo
              ? html`<img class="timeline-logo" src="${item.logo}" alt="${item.title} logo" />`
              : null}
            <div>
              <h4 class="timeline-title">${item.title}</h4>
              ${item.subtitle ? html`<p class="timeline-subtitle">${item.subtitle}</p>` : null}
            </div>
          </div>
          <span class="timeline-duration">${item.duration}</span>
        </div>
        ${item.details?.length
          ? html`
              <ul class="timeline-details">
                ${item.details.map((detail) => html`<li>${detail}</li>`)}
              </ul>
            `
          : null}
        ${tagsTemplate(item.tags)}
      </div>
    </article>
  `;
}

function timelineSectionTemplate(section) {
  return html`
    <div class="timeline-section">
      <h4 class="timeline-section-title">${section.label}</h4>
      <div class="timeline-list">
        ${section.items.map((item) => timelineEntryTemplate(item))}
      </div>
    </div>
  `;
}

function populateTimelineSections(sections, id, heading) {
  const el = document.getElementById(id);
  const safeSections = (sections || []).filter(Boolean);
  if (!el || !safeSections.length) {
    return;
  }

  const template = html`
    <div class="detail-cluster">
      ${heading ? detailHeaderTemplate(heading.title, heading.subtitle, heading.eyebrow) : null}
      ${safeSections.map((section) => timelineSectionTemplate(section))}
    </div>
  `;

  render(template, el);
}

function renderRepoSection(items, id, fetched = false) {
  const el = document.getElementById(id);
  if (!el || !items?.length) {
    return;
  }

  const template = html`
    <div class="detail-cluster">
      ${detailHeaderTemplate(
        "Selected open projects",
        fetched
          ? "A secondary technical portfolio alongside the main academic narrative."
          : "Fallback project cards when repository metadata is unavailable.",
        "Technical work"
      )}
      <div class="repo-grid">
        ${items.map(
          (item) => html`
            <div class="repo-card animate-box" data-animate-effect="fadeInUp">
              <a
                href="${item.link}"
                target="_blank"
                rel="noopener noreferrer"
                class="repo-link"
              >
                <h4 class="repo-heading">${item.name}</h4>
                <p class="repo-description">${item.description}</p>
                <div class="repo-meta">
                  ${item.language
                    ? html`
                        <span><i class="fa fa-code"></i>${item.language}</span>
                        <span><i class="fa fa-star-o"></i>${item.stars ?? 0}</span>
                        <span><i class="fa fa-code-fork"></i>${item.forks ?? 0}</span>
                      `
                    : html`<span><i class="fa fa-github"></i>GitHub profile</span>`}
                </div>
              </a>
            </div>
          `
        )}
      </div>
    </div>
  `;

  render(template, el);
}

async function fetchReposFromGit(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }

    const items = await response.json();
    const filtered = (items || [])
      .filter((item) => {
        const name = (item?.name || "").toLowerCase();
        return (
          !name.includes("mixcut") &&
          !name.includes("mix-cut") &&
          !name.includes("mix_cut") &&
          !name.includes("nba") &&
          !name.includes("garroshub.github.io")
        );
      })
      .slice(0, 3)
      .map((item) => ({
        name: item.name,
        description: item.description || "Repository overview",
        language: item.language || "Code",
        stars: item.stars,
        forks: item.forks,
        link: `https://github.com/${item.author || "garroshub"}/${item.name}`,
      }));

    if (filtered.length) {
      renderRepoSection(filtered, "repos", true);
      return;
    }
  } catch (error) {
    console.error("Error fetching repos:", error);
  }

  renderRepoSection(projectsFallback, "repos", false);
}

function getFavicon(url) {
  try {
    const { hostname } = new URL(url);
    return `https://www.google.com/s2/favicons?domain=${hostname}&sz=64`;
  } catch (error) {
    return "";
  }
}

function populateMedia(items, id) {
  const el = document.getElementById(id);
  if (!el || !items?.length) {
    return;
  }

  const template = html`
    ${sectionHeaderTemplate(
      {
        eyebrow: "Public Writing and Media",
        title: "Public-facing work that extends the same research concerns",
        subtitle:
          "Media contributions are not the main story of the site, but they show how the research agenda translates into broader public conversation.",
      },
      "large"
    )}
    <div class="blog-grid">
      ${items.map(
        (item) => html`
          <div class="blog-card animate-box" data-animate-effect="fadeInUp">
            <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="blog-link">
              <div class="media-header">
                ${item.link
                  ? html`
                      <img
                        class="media-logo"
                        src="${getFavicon(item.link)}"
                        alt="${item.source} logo"
                      />
                    `
                  : null}
                <span class="mini-label">${item.source}</span>
              </div>
              <h3 class="blog-heading">${item.title}</h3>
              <p class="publish-date">${item.year}</p>
              <p class="blog-description">${item.description}</p>
            </a>
          </div>
        `
      )}
    </div>
  `;

  render(template, el);
}

function populateInterests(items, id) {
  const el = document.getElementById(id);
  if (!el || !items?.length) {
    return;
  }

  const template = html`
    ${sectionHeaderTemplate(
      {
        eyebrow: "Beyond Work",
        title: "Personal interests that reinforce the way I think",
        subtitle:
          "These stay at the end of the site so the faculty-market narrative remains clear, but they still matter for how I read strategy, narrative, and performance.",
      },
      "large"
    )}
    <div class="interest-grid">
      ${items.map(
        (item) => html`
          <div class="interest-card animate-box" data-animate-effect="fadeInUp">
            ${item.icon ? html`<i class="interest-icon ${item.icon}"></i>` : null}
            <h3 class="interest-title">${item.title}</h3>
            <p class="interest-text">${item.description}</p>
          </div>
        `
      )}
    </div>
  `;

  render(template, el);
}

function populateSidebarLinks(items, id) {
  const el = document.getElementById(id);
  if (!el || !items?.length) {
    return;
  }

  const template = html`
    ${items.map(
      (item) => html`
        <li>
          <a href="${item.link}" target="_blank" rel="noopener noreferrer">
            ${item.iconUrl
              ? html`<img class="contact-icon-img" src="${item.iconUrl}" alt="${item.label} icon" />`
              : html`<i class="${item.icon}"></i>`}
            <span>${item.label}</span>
          </a>
        </li>
      `
    )}
  `;

  render(template, el);
}

const teachingSection = experienceSections.find((section) => section.id === "teaching");
const industrySection = experienceSections.find((section) => section.id === "industry");
const affiliationSection = experienceSections.find((section) => section.id === "affiliation");

setSidebar();
populateSidebarActions(sidebar.actions, "sidebar-actions");
populateHero(hero, bio, "hero");
populateCollabCta(collabCta, "collab-cta");
populateResearchPillars(researchPillars, "research-pillars");
populateIndustryToResearch(industryToResearch, "industry-to-research");
populateDistinctiveApproach(distinctiveApproach, "distinctive-approach");
populateFeaturedWork(featuredWork, "featured-work");
populateTimelineSections(researchSections, "research-details", {
  eyebrow: "Research record",
  title: "Publications, working papers, presentations, and work in progress",
  subtitle:
    "Detailed research entries remain available below the thematic overview so the site reads as both narrative portfolio and academic record.",
});
populateTeachingPhilosophy(teachingPhilosophy, "teaching-philosophy");
populateTimelineSections(teachingSection ? [teachingSection] : [], "teaching-experience", {
  eyebrow: "Teaching record",
  title: "Formal teaching experience",
  subtitle: "Course design and instruction experience that complements the teaching philosophy above.",
});
populateExperienceIntro(experienceIntro, "experience-summary");
populateTimelineSections(industrySection ? [industrySection] : [], "experience", {
  eyebrow: "Professional record",
  title: "Applied leadership and decision work",
  subtitle: "Professional experience is retained here as context for the research and teaching agenda.",
});
populateTimelineSections([{ label: "Education", items: education }], "education");
populateTimelineSections(affiliationSection ? [affiliationSection] : [], "affiliations");
populateMedia(media, "media");
populateInterests(interests, "interests");
populateSidebarLinks(contactLinks, "sidebar-links");
fetchReposFromGit(gitRepo);
setupCollabModal(collabCta);
