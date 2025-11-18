<template>
  <aside :class="[$style.sidebar, isCollapsed && $style.collapsed]">
    <div :class="$style.container">
      <div :class="$style.sectorLogo">
        <div :class="[$style.leftLogo, isCollapsed && $style.collapsed]">
          <div :class="$style.logo">
            <Icon
              :class="$style.icon"
              :height="iconSize"
              :width="iconSize"
              icon="ion:logo-react"
            />
          </div>
          <span :class="$style.textLogo">Company Ltd</span>
        </div>

        <button
          :class="[$style.collapse_btn, isCollapsed && $style.collapsed]"
          @click="setCollapsed"
        >
          <Icon
            :class="$style.iconCollapse"
            height="24"
            width="24"
            icon="ep:d-arrow-left"
          />
        </button>
      </div>
      <div :class="$style.divider" />
      <div :class="$style.sectorSearch">
        <SearchField :is-collapsed="isCollapsed" />
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
      <section :class="[$style.profile, isCollapsed && $style.collapsed]">
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
import { Icon } from "@iconify/vue";
import { useCollapsed } from "@/composables/useCollapsed";

const { avatar, username, email } = userData();
const { setCollapsed, isCollapsed } = useCollapsed();
const iconSize = 20;
</script>

<style module lang="scss" src="./Sidebar.module.scss"></style>
