<script lang="ts">
  import Project from "./Project.svelte"
  import type { ProjectData } from "./Project.svelte"

  const projects: ProjectData[] = [
    {
      name: "OVRSharp",
      description: "High-level idiomatic C# interface for working with the OpenVR API.",
      link: "https://github.com/OVRTools/OVRSharp",
      tags: [
        "library",
        "c#"
      ]
    },
    {
      name: "WhereIsForward",
      description: "Helps you find the front and center of your VR space with an arrow.",
      link: "https://github.com/OVRTools/WhereIsForward",
      tags: [
        "app",
        "c#"
      ]
    },
    {
      name: "OpenVRDeviceBattery",
      description: "Taskbar app to monitor battery levels and see OpenVR device info.",
      link: "https://github.com/OVRTools/OpenVRDeviceBattery",
      tags: [
        "app",
        "c#"
      ]
    },
    {
      name: "ovrtools.github.io",
      description: "This very website!",
      link: "https://github.com/OVRTools/ovrtools.github.io",
      tags: [
        "svelte"
      ]
    }
  ]
</script>

<div class="projects">
  <h1>Projects</h1>

  <div class="projects-inner">
    {#each projects as project}
      <Project {project}/>
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