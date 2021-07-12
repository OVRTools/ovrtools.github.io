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

<div class="project">
  <div class="name">
    <a href="{project.link}" target="_blank">{project.name}</a>
  </div>
  <div class="description">
    {project.description}
  </div>
  <div class="tags">
    {#each project.tags as tag}
      <span class="tag">{tag}</span>
    {/each}
  </div>
</div>

<style>
  .project {
    display: flex;
    flex-direction: column;
    color: white;
    background: #2184bf;
    padding: 10px;
    border-radius: 5px;
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
  }
</style>