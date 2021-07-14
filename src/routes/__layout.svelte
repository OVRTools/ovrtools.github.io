<script lang="ts">
  import Footer from "../components/Footer.svelte"
</script>

<main>
  <slot></slot>
</main>

<Footer />

<style>
  :global(*) {
    box-sizing: border-box;
  }

  :global(:root) {
    --background-color: white;
    --foreground-color: black;
    --theme-light: #176999;
    --theme-kinda-dark: #213665;
    --theme-dark: #111e3a;
    --link-color: var(--theme-dark);
  }

  @media(prefers-color-scheme: dark) {
    :global(:root) {
      --background-color: #232323;
      --foreground-color: white;
      --link-color: var(--foreground-color);
    }
  }

  :global(body) {
    margin: 0;
    padding: 0;
    font-family: "Nunito", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: var(--background-color);
    color: var(--foreground-color);
  }

  :global(a) {
    color: var(--link-color);
  }
</style>