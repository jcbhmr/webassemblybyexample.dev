<template>
  <p>
    <a href="https://replit.com/github/jcbhmr/webassemblybyexample.dev">
      <img
        style="display: inline; vertical-align: middle"
        alt="Run on Replit"
        src="https://replit.com/badge/github/replit/clui"
      />
    </a>
    🎗️ Remember to <code>cd {{ $props.slug }}</code
    >!
  </p>
</template>

<script setup lang="ts">
defineProps<{
  slug: string;
}>();
</script>
