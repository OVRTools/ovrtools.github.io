<svelte:head>
  <title>OVRTools</title>
</svelte:head>

<script lang="ts">
  import Projects from "../components/Projects.svelte"
  import Hero from "../components/Hero.svelte"
</script>

<Hero
  title="OVRTools"
  link="https://github.com/OVRTools"
  imageUrl="/img/logo.png"
  subtitle="A collection of open-source tools and libraries for OpenVR focused on making VR UX better." />

<div class="content">
  <div class="about">
    <h1>About</h1>

    <p>
      There are many luxuries we take for granted in desktop-land but often
      forget about in VR. We're trying to fill that gap by creating a collection of
      open-source tools and libraries for OpenVR that make your life in VR easier.
    </p>

    <p>
      At the moment, we are focused on creating useful VR overlays that can be used
      in any VR application. We're also making libraries to support the creation
      of these overlays and make working with the OpenVR API easier by handling all
      the lower-level details for you, and exposing an idiomatic high-level API. We hope
      this empowers everyone to easily create and publish VR overlays.
    </p>
  </div>

  <Projects/>

  <div class="contribute">
    <h1>Contribute</h1>

    <p>
      If you would like to help us make the VR user experience better,
      we accept different types of contributions to our projects,
      including but not limited to:
    </p>

    <ul>
      <li>Bug fixes</li>
      <li>New features</li>
      <li>Documentation</li>
      <li>Testing</li>
      <li>Feature requests</li>
    </ul>

    <p>
      Additionally, if you have an existing project that you think would
      feel at home in our collection (and get all the support that
      comes with it) please reach out to us! We'd love to adopt it.
    </p>
  </div>
</div>

<style>
  .content {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 10px;
  }

  .content p {
    line-height: 25px;
  }

  li {
    margin-bottom: 5px;
  }
</style>