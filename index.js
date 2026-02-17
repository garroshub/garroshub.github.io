import { html, render } from "https://unpkg.com/lit-html?module";
import {
  sidebar,
  bio,
  researchInterests,
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

function setSidebar() {
  if (sidebar?.name) {
    const nameEl = document.getElementById("sidebar-name");
    if (nameEl) nameEl.textContent = sidebar.name;
    document.title = sidebar.name;
  }
  const titleEl = document.getElementById("sidebar-title");
  if (titleEl) titleEl.textContent = sidebar.title || "";
  const metaEl = document.getElementById("sidebar-meta");
  if (metaEl) metaEl.textContent = sidebar.meta || "";
}

function populateBio(items, id) {
  const el = document.getElementById(id);
  if (!el) return;
  const tpl = html`${items.map((line) => html`<p>${line}</p>`)}`;
  render(tpl, el);
}

function populateResearchInterests(items, id) {
  const el = document.getElementById(id);
  if (!el || !items?.length) return;
  const tpl = html`${items.map(
    (item) => html`<div class="profile-badge brown-badge">${item}</div>`
  )}`;
  render(tpl, el);
}

function detailsTemplate(details) {
  return html`${details.map(
    (detail) => html`<p class="timeline-text">&blacksquare; ${detail}</p>`
  )}`;
}

function tagsTemplate(tags) {
  if (!tags || !tags.length) return null;
  return html`<div class="tags-container">
    ${tags.map((tag) => html`<div class="profile-badge brown-badge">${tag}</div>`)}
  </div>`;
}

function timelineEntryTemplate(item) {
  return html`<article class="timeline-entry animate-box" data-animate-effect="fadeInLeft">
    <div class="timeline-entry-inner">
      <div class="timeline-icon color-2">
        <i class="fa fa-${item.icon}"></i>
      </div>
      <div class="timeline-label">
        <div class="exp-heading">
          <div class="exp-title">
            ${item.logo
              ? html`<img class="edu-logo" src="${item.logo}" alt="${item.title} logo" />`
              : null}
            <p class="blog-heading">${item.title}</p>
          </div>
          <span class="publish-date">${item.duration}</span>
        </div>
        ${item.subtitle ? html`<span class="timeline-sublabel">${item.subtitle}</span>` : null}
        ${item.details?.length ? detailsTemplate(item.details) : null}
        ${tagsTemplate(item.tags)}
      </div>
    </div>
  </article>`;
}

function timelineTemplate(items) {
  return html`<div class="timeline-centered">
    ${items.map((item) => timelineEntryTemplate(item))}
    <article class="timeline-entry begin animate-box">
      <div class="timeline-entry-inner">
        <div class="timeline-icon color-2"></div>
      </div>
    </article>
  </div>`;
}

function populateTimelineSections(sections, id) {
  const el = document.getElementById(id);
  if (!el) return;
  const tpl = html`${sections.map(
    (section) => html`
      <div class="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
        <div class="about-desc">
          <h3>${section.label}</h3>
        </div>
      </div>
      ${timelineTemplate(section.items)}
    `
  )}`;
  render(tpl, el);
}

function populateTimeline(items, id) {
  const el = document.getElementById(id);
  if (!el) return;
  render(timelineTemplate(items), el);
}

function populateRepo(items, id) {
  const projectdesign = document.getElementById(id);
  if (!projectdesign || !items?.length) return;

  const statsTemplate = (item) => html`
    <div class="stats-row">
      <div class="language-div">
        <span class="language-dot"></span>
        ${item.language}
      </div>
      <div class="stats-div">
        <img
          src="https://img.icons8.com/ios-filled/16/666666/star--v1.png"
          alt="Stars"
        />
        ${item.stars}
      </div>
      <div class="stats-div">
        <img
          src="https://img.icons8.com/ios-filled/16/666666/code-fork.png"
          alt="Forks"
        />
        ${item.forks}
      </div>
    </div>
  `;

  const repoTemplate = html`
    <div class="repo-wrapper">
      ${items.slice(0, 6).map(
        (item) => html`
          <div class="repo-card">
            <a
              href="https://github.com/${item.author}/${item.name}"
              target="_blank"
              class="repo-link"
            >
              <p class="repo-heading">${item.name}</p>
              <p class="repo-description">${item.description}</p>
              ${statsTemplate(item)}
            </a>
          </div>
        `
      )}
    </div>
  `;

  render(repoTemplate, projectdesign);
}

function populateRepoFallback(items, id) {
  const projectdesign = document.getElementById(id);
  if (!projectdesign || !items?.length) return;

  const repoTemplate = html`
    <div class="repo-wrapper">
      ${items.map(
        (item) => html`
          <div class="repo-card">
            <a href="${item.link}" target="_blank" class="repo-link">
              <p class="repo-heading">${item.name}</p>
              <p class="repo-description">${item.description}</p>
            </a>
          </div>
        `
      )}
    </div>
  `;

  render(repoTemplate, projectdesign);
}

async function fetchReposFromGit(url) {
  try {
    const response = await fetch(url);
    const items = await response.json();
    const filtered = (items || []).filter((item) => {
      const name = (item?.name || "").toLowerCase();
      return (
        !name.includes("mixcut") &&
        !name.includes("mix-cut") &&
        !name.includes("mix_cut") &&
        !name.includes("nba")
      );
    });
    if (filtered?.length) {
      populateRepo(filtered, "repos");
      return;
    }
  } catch (error) {
    console.error("Error fetching repos:", error);
  }
  populateRepoFallback(projectsFallback, "repos");
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
  if (!el || !items?.length) return;

  const template = html`
    ${items.map(
      (item) => html`
        <div class="blog-card">
          <div class="blog-content">
            <a href="${item.link}" target="_blank" class="blog-link">
              <div class="media-header">
                ${item.link
                  ? html`<img class="media-logo" src="${getFavicon(item.link)}" alt="${item.source} logo" />`
                  : null}
                <p class="blog-heading">${item.title}</p>
              </div>
              <p class="publish-date">${item.source} · ${item.year}</p>
              <p class="blog-description">${item.description}</p>
            </a>
          </div>
        </div>
      `
    )}
  `;

  render(template, el);
}

function populateInterests(items, id) {
  const el = document.getElementById(id);
  if (!el || !items?.length) return;
  const template = html`
    ${items.map(
      (item) => html`
        <div class="col-md-4 col-sm-6 col-xs-12 col-padding">
          <div class="interest-card animate-box" data-animate-effect="fadeInUp">
            ${item.icon ? html`<i class="interest-icon ${item.icon}"></i>` : null}
            <h3 class="interest-title">${item.title}</h3>
            <p class="interest-text">${item.description}</p>
          </div>
        </div>
      `
    )}
  `;
  render(template, el);
}

function populateSidebarLinks(items, id) {
  const el = document.getElementById(id);
  if (!el || !items?.length) return;
  const template = html`${items.map(
    (item) => html`
      <li>
        <a href="${item.link}" target="_blank">
          ${item.iconUrl
            ? html`<img class="contact-icon-img" src="${item.iconUrl}" alt="${item.label} icon" />`
            : html`<i class="${item.icon}"></i>`}
          <span>${item.label}</span>
        </a>
      </li>
    `
  )}`;
  render(template, el);
}

setSidebar();
populateBio(bio, "bio");
populateResearchInterests(researchInterests, "research-interests");
populateTimeline(education, "education");
populateTimelineSections(researchSections, "research");
populateTimelineSections(experienceSections, "experience");
fetchReposFromGit(gitRepo);
populateMedia(media, "media");
populateInterests(interests, "interests");
populateSidebarLinks(contactLinks, "sidebar-links");
