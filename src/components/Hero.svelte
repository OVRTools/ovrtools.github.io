<script lang="ts">
  export let title: string
  export let subtitle: string
  export let imageUrl: string
  export let link: string
  export let showOvrToolsSubtitle: boolean = false
</script>

<div class="hero">
  <img src={imageUrl} alt="logo" class="logo"/>
  <h1>
    <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
  </h1>
  {#if showOvrToolsSubtitle}
    <p>
      A project from <a href="/">OVRTools</a>
    </p>
  {/if}
  <p>
    {subtitle}
  </p>
</div>

<style>
  .logo {
    width: 150px;
    height: 150px;
  }

  .hero {
    text-align: center;
    padding: 30px 10px;
  }
</style>