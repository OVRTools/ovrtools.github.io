<script context="module" lang="ts">
  export interface ProjectData {
    name: string
    description: string
    link: string
    githubRepo?: string
    iconName?: string
    tags: string[]
  }
</script>

<script lang="ts">
  import { FontAwesomeIcon } from "fontawesome-svelte"
  import { faStar } from "@fortawesome/free-solid-svg-icons"

  export let project: ProjectData

  let stars: number = null
  const extraLinkAttrs = project.link && project.link.startsWith("http") ? {
    target: "_blank",
    rel: "noopener noreferrer"
  } : { }

  const sessionStorageKey = `stars_${project.githubRepo}`

  const loadCachedStars = (): boolean => {
    const cached = sessionStorage.getItem(sessionStorageKey)
    
    if (cached) {
      stars = parseInt(cached)
      return true
    }
    
    return false
  }

  const loadStars = async () => {
    if (!project.githubRepo) return
    if (loadCachedStars()) return
    const response = await fetch(`https://api.github.com/repos/${project.githubRepo}`)
    const data = await response.json()
    stars = data.stargazers_count
    sessionStorage.setItem(sessionStorageKey, `${stars}`)
  }

  loadStars()
</script>

<a class="project" href="{project.link}" {...extraLinkAttrs}>
  <div class="name">
    {#if project.iconName}
      <img src={`/img/projects/${project.iconName}.svg`} alt={`Logo for ${project.name}`}>
    {/if}
    {project.name}
  </div>
  <div class="description">
    {project.description}
  </div>
  <div class="stats">
    {#if stars != null && stars > 0}
      <div class="stars">
        <FontAwesomeIcon icon={faStar} />
        {stars.toLocaleString()}
      </div>
    {/if}
    <div class="tags">
      {#each project.tags as tag}
        <span class="tag">{tag}</span>
      {/each}
    </div>
  </div>
</a>

<style>
  .project {
    transition: transform .1s;
    display: flex;
    flex-direction: column;
    color: white;
    background: linear-gradient(var(--theme-light), var(--theme-kinda-dark));
    padding: 10px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    text-decoration: none;
    /* If you remove this, the stars in the project boxes will move slightly
       when hovered over in Chrome. Yes. */
    transform: scale(1.000000001);
  }

  .project:hover {
    transform: scale(1.01);
  }

  .project:active {
    transform: scale(0.99);
  }

  a {
    color: white;
  }

  .project > div:not(:last-of-type) {
    margin-bottom: 10px;
  }
  
  .name {
    font-weight: bold;
    margin-bottom: 3px !important;
    vertical-align: middle;
  }

  .name img {
    max-height: 15px;
    position: relative;
    top: 0.125em;
    margin-right: 1px;
  }
  
  .description {
    flex-grow: 1;
  }

  .stats > div:not(:last-of-type) {
    margin-right: 5px;
  }

  .stats {
    font-size: 0.8em;
  }

  .tags {
    display: inline-block;
  }

  .tag {
    display: inline-block;
    padding: 5px;
    background: #206690;
    margin-right: 5px;
    border-radius: 2px;
  }

  .stars {
    display: inline;
  }
</style>