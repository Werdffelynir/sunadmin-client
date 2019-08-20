<template>
    <div>
        <div class="text-center mt-10">
            <SettingsIcon size="12" :decorative="true"></SettingsIcon>
        </div>

        <VList dense rounded>
            <span v-for="item in items">
                <router-link :to="item.to">
                    <VListItem :key="item.title" link>
                            <VListItemIcon>
                                <VIcon>{{ item.icon }}</VIcon>
                            </VListItemIcon>

                            <VListItemContent>
                                <VListItemTitle>{{ item.title }}</VListItemTitle>
                            </VListItemContent>
                    </VListItem>
                </router-link>
            </span>
        </VList>
    </div>
</template>

<script>
    export default {

        name: 'Sidebar',

        data() {
            return {
                title: "Component - Sidebar",
                items: [
                    {icon: 'dashboard', title: 'three_cards', to: 'three_cards'},
                    {icon: 'dashboard', title: 'more_info', to: 'more_info'},
                    {icon: 'dashboard', title: 'intro', to: 'intro'},
                    {icon: 'dashboard', title: 'services', to: 'services'},
                ],
            }
        },
    }
</script>