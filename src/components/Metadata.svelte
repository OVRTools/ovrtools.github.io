<script lang="ts">
  export let title: string = ""
  export let description: string = ""
  export let imageUrl: string = "/img/logo.png"

  if (title !== "")
    title = `${title} - OVRTools`
  else
    title = "OVRTools"

  // I hate hardcoding the domain, but twitter wants a fully qualified
  // URL for the image
  imageUrl = `https://ovrtools.dev${imageUrl}`
</script>

<svelte:head>
  <title>{title}</title>

  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:site_name" content="OVRTools" />
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content={imageUrl} />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:creator" content="@tjhorner" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={imageUrl} />
</svelte:head>