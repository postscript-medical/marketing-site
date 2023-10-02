<script lang="ts">
  import "$lib/css/globals.css";
  import "$lib/css/layouts.css";

  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<Header />

<main id="main-content" class="stacker--x-large">
  <slot />
</main>

<Footer />
