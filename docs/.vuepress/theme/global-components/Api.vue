<template>
    <Tabs v-if="api">
        <Tab v-for="(tab, index) in api" :key="index" :title="tab.title">
            <table>
                <template v-for="(item, i) in tab.items">
                    <tr v-if="i === 0" :key="i">
                        <th v-for="(value, key, idx) in item" :key="idx">
                            {{ key }}
                        </th>
                    </tr>
                    <tr :key="item.id">
                        <td v-for="(value, key, idx) in item" :key="idx">
                            {{ value }}
                        </td>
                    </tr>
                </template>
            </table>
        </Tab>
    </Tabs>
</template>

<script>
    import Tabs from '@theme/components/Tabs'
    import Tab from '@theme/components/Tab'

    export default {
        components: {
            Tab,
            Tabs
        },
        props: {
            data: {
                type: Array,
                default: undefined
            }
        },
        computed: {
            api () {
                return this.data ? this.data : this.$page.frontmatter.API
            }
        }
    }
</script>

<style lang="scss" scoped>
  th {
    text-transform: capitalize;
  }
</style>
