<template>
  <aside :class="$style.sidebar">
    <div :class="$style.container">
      <div :class="$style.sectorLogo">
        <div :class="$style.leftLogo">
          <span>icon</span>
          <span :class="$style.textLogo">Logo</span>
        </div>
        <button :class="$style.buttonCollapse">collapse</button>
      </div>
      <div :class="$style.sectorSearch">
        <SearchField />
      </div>
      <div :class="$style.sectorMenu">
        <Menu />
      </div>
      <div :class="$style.sectorMenu">
        <Menu />
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import SearchField from "~/components/features/UI/Inputs/SearchField.vue";
import Menu from "~/components/features/UI/Menu/Menu.vue";
</script>

<style module lang="scss" src="./Sidebar.module.scss"></style>
