<template>
    <n-layout-header>
        <div class="header-container">
            Vue Cart
            <!-- <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" /> -->
            <n-space>
                <n-button text>
                <template #icon>
                <n-icon>
                    <search-icon />
                </n-icon>
                </template>
            </n-button>
            <n-button text>
                <template #icon>
                <n-icon>
                    <cart-icon />
                </n-icon>
                </template>
            </n-button>
            </n-space>
        </div>
    </n-layout-header>
</template>

<script lang="ts">
import { defineComponent, h, ref } from 'vue'
import { NIcon, NMenu, NLayoutHeader, NButton, NSpace } from 'naive-ui'

import {
  Cart as CartIcon,
  Search as SearchIcon
} from '@vicons/ionicons5'

const menuOptionsData = [
{
    label: "Search",
    key: 'hear-the-wind-sing2',
    icon: renderIcon(SearchIcon)
  },
  {
    label: "Cart",
    key: 'hear-the-wind-sing',
    icon: renderIcon(CartIcon)
  }
]

function renderIcon (icon: any) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

export default defineComponent({
    components: { NLayoutHeader, NMenu, NButton, SearchIcon, CartIcon, NIcon, NSpace },
    setup() {
        const activeKey = ref(null)
        const menuOptions = ref(menuOptionsData)

        return {
            activeKey,
            menuOptions
        }
    },
})
</script>

<style >
.n-layout-header {
  background: rgba(128, 128, 128, 0.2);
  padding: 12px 0;
}

.header-container {
  margin: 0 auto;
  max-width: 1280px;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
@media only screen and (min-width: 601px) {
  .header-container {
    width: 85%;
  }
}
@media only screen and (min-width: 993px) {
  .header-container {
    width: 70%;
  }
}
</style>
