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
      <div :class="$style.divider" />
      <div :class="$style.sectorSearch">
        <SearchField />
      </div>
      <div :class="$style.sectorMenu">
        <Menu :menu="mainMenu" />
      </div>
      <div :class="$style.sectorMenu">
        <Menu :menu="middleMenu" />
      </div>
      <div :class="$style.divider" />
      <div :class="$style.sectorMenu">
        <Menu :menu="profileMenu" />
      </div>
      <section :class="$style.profile">
        <div :class="$style.avatar">
          <img :src="avatar" alt="avatar" />
          <span :class="$style.status" />
        </div>
        <div :class="$style.information">
          <span :class="$style.name">{{ username }}</span>
          <span :class="$style.email">{{ email }}</span>
        </div>
      </section>
    </div>
  </aside>
</template>

<script setup lang="ts">
import SearchField from "~/components/features/UI/Inputs/SearchField.vue";
import Menu from "~/components/features/UI/Menu/Menu.vue";
import { mainMenu, middleMenu, profileMenu } from "@/models/menuItems";
import { userData } from "@/models/userData";

const { avatar, username, email } = userData();
</script>

<style module lang="scss" src="./Sidebar.module.scss"></style>
