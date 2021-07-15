<script lang="ts">
  import Hero from "../../components/Hero.svelte"
  import Highlight from "svelte-highlight"
  import csharp from "svelte-highlight/src/languages/csharp"
  import vs2015 from "svelte-highlight/src/styles/vs2015"
  import { FontAwesomeIcon } from "fontawesome-svelte"
  import {
    faFeather,
    faCode,
    faBookOpen,
    faSmile,
    faFrown,
  } from "@fortawesome/free-solid-svg-icons"

  const withoutExample = `var err = EVRInitError.None;
var vrSystem = OpenVR.Init(ref err, EVRApplicationType.VRApplication_Overlay);

if (err != EVRInitError.None)
{
  // whatever error handling
}

// Create a dashboard overlay
var overlayErr = EVROverlayError.None;

ulong overlayHandle;
ulong thumbnailHandle;

overlayErr = OpenVR.Overlay.CreateDashboardOverlay("cool_overlay", "Cool Overlay", ref overlayHandle, ref thumbnailHandle);

if (overlayErr != EVROverlayError.None)
{
  // whatever error handling
}

overlayErr = OpenVR.Overlay.SetOverlayWidthInMeters(overlayHandle, 3.8f);

if (overlayErr != EVROverlayError.None)
{
  // whatever error handling
}

// Set the dashboard overlay up. First, the main overlay's texture
overlayErr = OpenVR.Overlay.SetOverlayFromFile(overlayHandle, @"C:\\path\\to\\file.png");

if (overlayErr != EVROverlayError.None)
{
  // whatever error handling
}

// Then the thumbnail.
overlayErr = OpenVR.Overlay.SetOverlayFromFile(thumbnailHandle, @"C:\\path\\to\\thumb.png");

if (overlayErr != EVROverlayError.None)
{
  // whatever error handling
}`

  const withExample = `Application app;

try {
  app = new Application(ApplicationType.Overlay);
} catch(OpenVRSystemException e) {
  // Errors are exceptions!
}

var overlay = new Overlay("cool_overlay", "Cool Overlay", true) {
  WidthInMeters = 3.8f
};

overlay.SetTextureFromFile(@"C:\\path\\to\\file.png");
overlay.SetThumbnailTextureFromFile(@"C:\\path\\to\\thumb.png");`

  const overlayExample = `public class MyCoolOverlay : Overlay {
  public MyCoolOverlay()
    : base("my_cool_overlay", "My Cool Overlay")
  {
    // Attach overlay to right hand
    TrackedDevice = TrackedDeviceRole.RightHand;

    // Set overlay from png
    SetTextureFromFile("cool_overlay.png");
  }
}`

  const graphicsExample = `// Use the DirectX implementation
var compositor = DirectXCompositor.Instance;

// Get a Bitmap of what the headset sees
var bitmap = compositor.GetMirrorImage();`

  const interfaceExample = `public MyCoolThing(ICompositorAPI compositor) {
  // \`compositor\` could be using DirectX, OpenGL,
  // or something else entirely!
}`

  const compositorSubmitExample = `// Building a VR game? You'll need this.
// And it's gotta be fast!
OpenVR.Compositor.Submit(EVREye.Left, ref tex);`
</script>

<svelte:head>
  <title>OVRSharp</title>
  {@html vs2015}
</svelte:head>

<Hero
  title="OVRSharp"
  subtitle="High-level idiomatic C# interface for working with the OpenVR API"
  imageUrl="/img/projects/ovrsharp.svg"
  link="https://github.com/OVRTools/OVRSharp"
  showOvrToolsSubtitle={true}
/>

<div class="content wide">
  <section>
    <div class="grid">
      <div>
        <h2>
          <FontAwesomeIcon icon={faSmile} />
          With OVRSharp
        </h2>

        <p>Beautiful. Immaculate. Easy to follow. Wow.</p>

        <Highlight language={csharp} code={withExample} />

        <p>
          It's so much shorter that I could probably write a few more paragraphs
          here to make this side as long as the other.
        </p>
      </div>

      <div>
        <h2>
          <FontAwesomeIcon icon={faFrown} />
          Without OVRSharp
        </h2>

        <p>Awful. Hard to read. It's a mess.</p>

        <Highlight language={csharp} code={withoutExample} />
      </div>
    </div>
  </section>
</div>

<div class="content">
  <section class="grid">
    <div>
      <h2>
        <FontAwesomeIcon icon={faFeather} size="xs" />
        Lightweight
      </h2>

      <p>
        OVRSharp can be integrated into any C# project, whether you're using
        Unity, Godot, or even no engine at all. With a light footprint, you can
        use as little or as much as you need.
      </p>
    </div>

    <div>
      <h2>
        <FontAwesomeIcon icon={faCode} size="xs" />
        Idiomatic
      </h2>

      <p>
        Instead of accessing low-level APIs, dealing with pointers, and the
        like, you can use the familiar .NET types and features you already know
        and love.
      </p>
    </div>

    <div>
      <h2>
        <FontAwesomeIcon icon={faBookOpen} size="xs" />
        Open source
      </h2>

      <p>
        As with all our other projects, OVRSharp is open source. This means you
        can benefit from the hard work of the community, as well as tweak and
        improve the library to suit your needs.
      </p>
    </div>
  </section>

  <section>
    <div class="grid code-example">
      <div>
        <Highlight language={csharp} code={overlayExample} />
      </div>

      <div>
        <p>
          OVRSharp's simple API makes it easy to write overlays for OpenVR. Just
          extend the Overlay class, implement your logic, and you're good to go.
          The raw OpenVR API is hidden behind a simple interface.
        </p>
      </div>
    </div>
  </section>

  <section>
    <div class="grid code-example">
      <div>
        <Highlight language={csharp} code={graphicsExample} />
      </div>

      <div>
        <p>
          Some parts of the OpenVR API require specialized knowledge of graphics
          APIs like OpenGL or DirectX. We've abstracted these details away, so
          you can focus on the core of your overlay.
        </p>
      </div>
    </div>
  </section>

  <section>
    <div class="grid code-example">
      <div>
        <Highlight language={csharp} code={interfaceExample} />
      </div>

      <div>
        <p>
          With an interface-based API, OVRSharp easily works with patterns like
          dependency injection, so you don't need to worry about what's
          happening under the hood.
        </p>
      </div>
    </div>
  </section>

  <section>
    <div class="grid code-example">
      <div>
        <Highlight language={csharp} code={compositorSubmitExample} />
      </div>

      <div>
        <p>
          If you want to run "close to the metal", you can still use the
          underlying OpenVR API. This is useful if you need functionality that's
          not yet available in the library or if performance is critical.
        </p>
      </div>
    </div>
  </section>

  <section>
    <h2>Get started</h2>

    <p>
      Ready to write your first VR overlay? Check out our
      <a
        href="https://github.com/OVRTools/OVRSharp/wiki/Getting-Started"
        target="_blank"
        rel="noopener noreferrer">getting started</a
      >
      guide, where you'll write your first overlay in a few minutes. You can also
      check out the
      <a
        href="https://github.com/OVRTools/OVRSharp"
        target="_blank"
        rel="noopener noreferrer">repository</a
      >
      on GitHub, where you can find the source code for the library and get help
      from the community.
    </p>
  </section>
</div>

<style>
  .content {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 15px;
  }

  .content.wide {
    max-width: 1150px;
  }

  .content p {
    line-height: 25px;
  }

  div > p:first-of-type {
    margin-top: 0;
  }

  section {
    margin-bottom: 20px;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    column-gap: 20px;
  }

  .grid.code-example {
    row-gap: 20px;
  }

  :global(h2 svg) {
    margin-right: 3px;
  }

  :global(pre) {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    overflow: scroll;
    background: linear-gradient(45deg, #2d2d2d, #353535) !important;
    font-family: "Fira Code", "Fira Mono", monospace;
    padding: 20px;
    border-radius: 5px;
    margin: 0;
    white-space: pre-wrap;
  }
</style>
