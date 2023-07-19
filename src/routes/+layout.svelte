<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";

  import "$lib/css/globals.css";
  import "$lib/css/layouts.css";
</script>

<Header />

<main id="main-content" class="stacker--x-large">
  <slot />
</main>

<Footer />
