<script lang="ts">
  export let title: string = ""
  export let description: string = ""
  export let imageUrl: string = ""
</script>

<svelte:head>
  {#if title !== ""}
    <title>{title} - OVRTools</title>
  {:else}
    <title>OVRTools</title>
  {/if}

  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:site_name" content="OVRTools" />
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  {#if imageUrl !== ""}
    <meta property="og:image" content={imageUrl} />
  {/if}

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:creator" content="@tjhorner" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  {#if imageUrl !== ""}
    <meta name="twitter:image" content={imageUrl} />
  {/if}
</svelte:head>