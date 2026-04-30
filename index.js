import { html, render } from "https://unpkg.com/lit-html?module";
import {
  sidebar,
  bio,
  hero,
  collabCta,
  education,
  researchSection,
  media,
  professionalExperience,
  contactLinks,
} from "./user-data/data.js";

function sectionHeaderTemplate(data) {
  return html`
    <div class="section-header">
      <div class="section-title-row">
        ${data?.icon
          ? html`
              <span class="section-icon" aria-hidden="true">
                <i class="fa fa-${data.icon}"></i>
              </span>
            `
          : null}
        <div>
          ${data?.eyebrow ? html`<p class="section-kicker">${data.eyebrow}</p>` : null}
          ${data?.title ? html`<h2 class="section-title">${data.title}</h2>` : null}
        </div>
      </div>
      ${data?.subtitle ? html`<p class="section-subtitle">${data.subtitle}</p>` : null}
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
    document.title = `${sidebar.name} | Academic Homepage`;
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

  render(
    html`
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
    `,
    el
  );
}

function populateCollabCta(data, id) {
  const el = document.getElementById(id);
  if (!el || !data) {
    return;
  }

  render(
    html`
      <div class="collab-strip animate-box" data-animate-effect="fadeInUp">
        <div class="collab-copy">
          <p class="section-kicker">Contact</p>
          <div class="collab-title">${data.title}</div>
          <p class="collab-body">${data.body}</p>
        </div>
        <div class="collab-actions">
          <button type="button" class="collab-btn" data-recipient="academic">
            <i class="fa fa-envelope"></i>
            ${data.academicLabel}
          </button>
          <button type="button" class="collab-btn secondary" data-recipient="personal">
            <i class="fa fa-envelope"></i>
            ${data.personalLabel}
          </button>
        </div>
      </div>
    `,
    el
  );
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

function populateAbout(data, paragraphs, id) {
  const el = document.getElementById(id);
  if (!el || !data) {
    return;
  }

  render(
    html`
      ${sectionHeaderTemplate(data)}
      <div class="about-summary animate-box" data-animate-effect="fadeInUp">
        ${paragraphs.map((line) => html`<p>${line}</p>`)}
      </div>
      <div class="research-pill-row animate-box" data-animate-effect="fadeInUp">
        ${data.researchAreas.map(
          (item) => html`
            <div class="research-pill">
              <span class="pill-icon" aria-hidden="true">
                <i class="fa fa-${item.icon}"></i>
              </span>
              <span>${item.title}</span>
            </div>
          `
        )}
      </div>
    `,
    el
  );
}

function detailListTemplate(details) {
  if (!details?.length) {
    return null;
  }

  return html`
    <ul class="record-details">
      ${details.map((detail) => html`<li>${detail}</li>`)}
    </ul>
  `;
}

function educationEntryTemplate(item) {
  return html`
    <article class="record-item animate-box" data-animate-effect="fadeInUp">
      <div class="record-mark">
        ${item.logo
          ? html`<img class="record-logo" src="${item.logo}" alt="${item.title} logo" />`
          : html`
              <span class="record-icon" aria-hidden="true">
                <i class="fa fa-graduation-cap"></i>
              </span>
            `}
      </div>
      <div class="record-copy">
        <div class="record-head">
          <div>
            <h3 class="record-title">${item.title}</h3>
            <p class="record-subtitle">${item.subtitle}</p>
          </div>
          <span class="record-duration">${item.duration}</span>
        </div>
        ${detailListTemplate(item.details)}
      </div>
    </article>
  `;
}

function populateEducation(items, id) {
  const el = document.getElementById(id);
  if (!el || !items?.length) {
    return;
  }

  render(
    html`
      ${sectionHeaderTemplate({
        icon: "graduation-cap",
        title: "Education",
        subtitle: "Training in management science, business analytics, and financial mathematics.",
      })}
      <div class="record-list">
        ${items.map((item) => educationEntryTemplate(item))}
      </div>
    `,
    el
  );
}

function researchItemTemplate(item) {
  return html`
    <article class="research-item animate-box" data-animate-effect="fadeInUp">
      <div class="research-top">
        <span class="pill-icon small" aria-hidden="true">
          <i class="fa fa-${item.icon}"></i>
        </span>
        <span class="research-label">${item.label}</span>
        <span class="research-venue">${item.venue}</span>
      </div>
      <h3 class="research-title">${item.title}</h3>
      <p class="research-summary">${item.summary}</p>
      ${item.link
        ? html`
            <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="text-link">
              ${item.linkLabel || "Read more"}
            </a>
          `
        : null}
    </article>
  `;
}

function populateResearchSection(data, id) {
  const el = document.getElementById(id);
  if (!el || !data?.groups?.length) {
    return;
  }

  render(
    html`
      ${sectionHeaderTemplate(data)}
      <div class="research-groups">
        ${data.groups.map(
          (group) => html`
            <div class="research-group">
              <h3 class="research-group-title">${group.title}</h3>
              <div class="research-list">
                ${group.items.map((item) => researchItemTemplate(item))}
              </div>
            </div>
          `
        )}
      </div>
    `,
    el
  );
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

  render(
    html`
      ${sectionHeaderTemplate({
        icon: "newspaper-o",
        title: "Selected Media",
        subtitle: "A few public-facing pieces connected to policy, markets, and institutional change.",
      })}
      <div class="media-grid">
        ${items.map(
          (item) => html`
            <article class="media-card animate-box" data-animate-effect="fadeInUp">
              <div class="media-top">
                ${item.link
                  ? html`
                      <img class="media-logo" src="${getFavicon(item.link)}" alt="${item.source} logo" />
                    `
                  : null}
                <span class="media-source">${item.source}</span>
                <span class="media-year">${item.year}</span>
              </div>
              <h3 class="media-title">${item.title}</h3>
              <p class="media-description">${item.description}</p>
              <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="text-link">
                Read article
              </a>
            </article>
          `
        )}
      </div>
    `,
    el
  );
}

function experienceEntryTemplate(item) {
  return html`
    <article class="record-item animate-box" data-animate-effect="fadeInUp">
      <div class="record-mark">
        <span class="record-icon" aria-hidden="true">
          <i class="fa fa-${item.icon || "briefcase"}"></i>
        </span>
      </div>
      <div class="record-copy">
        <div class="record-head">
          <div>
            <h3 class="record-title">${item.title}</h3>
            <p class="record-subtitle">${item.subtitle}</p>
          </div>
          <span class="record-duration">${item.duration}</span>
        </div>
        ${detailListTemplate(item.details)}
      </div>
    </article>
  `;
}

function populateExperience(items, id) {
  const el = document.getElementById(id);
  if (!el || !items?.length) {
    return;
  }

  render(
    html`
      ${sectionHeaderTemplate({
        icon: "briefcase",
        title: "Professional Experience",
        subtitle: "Industry experience that informs my research questions and applied perspective.",
      })}
      <div class="record-list">
        ${items.map((item) => experienceEntryTemplate(item))}
      </div>
    `,
    el
  );
}

function populateSidebarLinks(items, id) {
  const el = document.getElementById(id);
  if (!el || !items?.length) {
    return;
  }

  render(
    html`
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
    `,
    el
  );
}

setSidebar();
populateSidebarActions(sidebar.actions, "sidebar-actions");
populateCollabCta(collabCta, "collab-cta");
populateAbout(hero, bio, "hero");
populateEducation(education, "education");
populateResearchSection(researchSection, "featured-publications");
populateMedia(media, "media");
populateExperience(professionalExperience, "experience");
populateSidebarLinks(contactLinks, "sidebar-links");
setupCollabModal(collabCta);
