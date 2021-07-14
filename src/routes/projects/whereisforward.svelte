<script lang="ts">
  import Hero from "../../components/Hero.svelte"
</script>

<svelte:head>
  <title>WhereIsForward</title>
</svelte:head>

<Hero
  title="WhereIsForward"
  subtitle="Helps you find the front and center of your VR space with an arrow."
  imageUrl="/img/projects/whereisforward.svg"
  link="https://github.com/OVRTools/WhereIsForward"
  showOvrToolsSubtitle={true}
/>

<div class="content centered">
  <blockquote class="twitter-tweet"><p lang="und" dir="ltr"><a href="https://t.co/5nPE4H7Hmf">https://t.co/5nPE4H7Hmf</a> <a href="https://t.co/pbK7V90IDY">pic.twitter.com/pbK7V90IDY</a></p>&mdash; ︀ (@tjhorner) <a href="https://twitter.com/tjhorner/status/1329667055478566915?ref_src=twsrc%5Etfw">November 20, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>

<style>
  .content {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 15px;
  }

  .content.centered {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .content p {
    line-height: 25px;
  }
</style>
