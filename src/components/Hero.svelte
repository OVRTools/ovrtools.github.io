<script lang="ts">
  export let title: string
  export let subtitle: string
  export let imageUrl: string
  export let link: string
</script>

<div class="hero">
  <img src={imageUrl} alt="logo" class="logo"/>
  <h1>
    <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
  </h1>
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
    padding: 50px 10px;
  }
</style>