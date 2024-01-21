<template>
  <p>
    <a
      :href="`https://codespaces.new/jcbhmr/webassemblybyexample.dev?quickstart=1&amp;devcontainer_path=.devcontainer%2F${$props.slug}%2Fdevcontainer.json`"
      target="_blank"
      rel="noreferrer"
      ><img
        src="https://github.com/codespaces/badge.svg"
        alt="Open in GitHub Codespaces"
        height="32"
    /></a>
  </p>
</template>

<script setup lang="ts">
defineProps<{
  slug: string;
}>();
</script>
