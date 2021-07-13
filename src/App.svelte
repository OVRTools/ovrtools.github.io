<script lang="ts">
  import Projects from "./components/Projects.svelte"
</script>

<main>
  <div class="hero">
    <img src="/img/logo.png" alt="logo" class="logo"/>
    <h1>
      <a href="https://github.com/OVRTools" target="_blank" rel="noopener noreferrer">OVRTools</a>
    </h1>
    <p>
      A collection of open-source tools and libraries for OpenVR focused on making VR UX better.
    </p>
  </div>

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
</main>

<style>
  :global(*) {
    box-sizing: border-box;
  }

  :global(:root) {
    --background-color: white;
    --foreground-color: black;
    --theme-light: #176999;
    --theme-dark: #111e3a;
    --link-color: var(--theme-dark);
  }

  @media(prefers-color-scheme: dark) {
    :global(:root) {
      --background-color: var(--theme-dark);
      --foreground-color: white;
      --link-color: var(--foreground-color);
    }
  }

  :global(body) {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: var(--background-color);
    color: var(--foreground-color);
  }
  
  a {
    color: var(--link-color);
  }

  .logo {
    width: 150px;
    height: 150px;
  }

  .hero {
    background: linear-gradient(var(--theme-light), transparent);
    text-align: center;
    padding: 50px 10px;
  }

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