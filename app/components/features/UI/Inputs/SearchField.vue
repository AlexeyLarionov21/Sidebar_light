<template>
  <div :class="[$style.container, isCollapsed && $style.collapsed]">
    <button :class="$style.search_btn">
      <Icon icon="weui:search-outlined" height="20" width="20" />
    </button>
    <input :class="$style.input" type="text" placeholder="Search" />
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

interface Props {
  isCollapsed?: boolean;
}

defineProps<Props>();
</script>

<style module lang="scss" src="./SearchField.module.scss" />
