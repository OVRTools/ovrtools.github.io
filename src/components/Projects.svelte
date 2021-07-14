<script lang="ts">
  import ProjectCard from "./ProjectCard.svelte"
  import type { ProjectData } from "./ProjectCard.svelte"

  const projects: ProjectData[] = [
    {
      name: "OVRSharp",
      description: "High-level idiomatic C# interface for working with the OpenVR API.",
      link: "/project/ovrsharp",
      githubRepo: "OVRTools/OVRSharp",
      tags: [
        "library",
        "c#"
      ]
    },
    {
      name: "WhereIsForward",
      description: "Helps you find the front and center of your VR space with an arrow.",
      link: "https://github.com/OVRTools/WhereIsForward",
      githubRepo: "OVRTools/WhereIsForward",
      tags: [
        "app",
        "c#"
      ]
    },
    {
      name: "OpenVRDeviceBattery",
      description: "Taskbar app to monitor battery levels and see OpenVR device info.",
      link: "https://github.com/OVRTools/OpenVRDeviceBattery",
      githubRepo: "OVRTools/OpenVRDeviceBattery",
      tags: [
        "app",
        "c#"
      ]
    },
    {
      name: "ovrtools.github.io",
      description: "This very website!",
      link: "https://github.com/OVRTools/ovrtools.github.io",
      githubRepo: "OVRTools/ovrtools.github.io",
      tags: [
        "svelte"
      ]
    }
  ]
</script>

<div class="projects">
  <h1>Projects</h1>

  <p>
    Here's what we're working on. Select a project to see it on GitHub.
  </p>

  <div class="projects-inner">
    {#each projects as project}
      <ProjectCard {project}/>
    {/each}
  </div>
</div>

<style>
  .projects-inner {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    column-gap: 10px;
    row-gap: 10px;
  }
</style>