<script context="module" lang="ts">
  export interface ProjectData {
    name: string
    description: string
    link: string
    tags: string[]
  }
</script>

<script lang="ts">
  export let project: ProjectData
</script>

<a class="project" href="{project.link}" target="_blank" rel="noopener noreferrer">
  <div class="name">
    {project.name}
  </div>
  <div class="description">
    {project.description}
  </div>
  <div class="tags">
    {#each project.tags as tag}
      <span class="tag">{tag}</span>
    {/each}
  </div>
</a>

<style>
  .project {
    transition: transform .1s;
    display: flex;
    flex-direction: column;
    color: white;
    background: linear-gradient(#176999, #213665);
    padding: 10px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    text-decoration: none;
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
  }
  
  .description {
    flex-grow: 1;
  }

  .tag {
    display: inline-block;
    padding: 5px;
    background: #206690;
    margin-right: 5px;
    font-size: 0.8em;
  }
</style>