<template>
  <div :class="[$style.container, isCollapsed && $style.collapsed]">
    <span :class="$style.title">{{ menu.title }}</span>
    <nav>
      <ul :class="$style.menu">
        <li
          v-for="item in menu.items"
          :key="item.id"
          :class="[$style.item, isActive(item.id) && $style.selected]"
        >
          <NuxtLink
            :to="item.to"
            :class="$style.link"
            @click="setActive(item.id)"
          >
            <Icon :icon="item.icon" :height="iconSize" :width="iconSize" />
            <span :class="$style.label">{{ item.label }}</span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style module lang="scss" src="./Menu.module.scss" />

<script setup lang="ts">
import type { Menu } from "~/types/item";
import { Icon } from "@iconify/vue";
import { useSelected } from "@/composables/useSelected";
import { useCollapsed } from "@/composables/useCollapsed";

const props = defineProps<{
  menu: Menu;
}>();

const { isActive, setActive } = useSelected();
const { isCollapsed } = useCollapsed();

const iconSize = 22;
</script>
