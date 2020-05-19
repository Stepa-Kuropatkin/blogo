<template>
    <nav>
        <v-toolbar flat dark dense>
            <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
                <v-spacer></v-spacer>
                <span>Блог</span>
                <v-spacer></v-spacer>
                <nuxt-link to="/">
                <v-btn icon fab small> 
                        <v-icon>home</v-icon>
                </v-btn>
                </nuxt-link>
        </v-toolbar>

        <v-navigation-drawer v-model="drawer" absolute temporary>
            <v-list nav dense>
                <v-list-item-group >
                    <nuxt-link to="/blog1">
                        <v-list-item>
                            <v-list-item-title>Блог 1</v-list-item-title>
                        </v-list-item>
                    </nuxt-link>
                    <nuxt-link to="/blog2">
                        <v-list-item>
                            <v-list-item-title>Блог 2</v-list-item-title>
                        </v-list-item>
                    </nuxt-link>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>

export default {
    data()  {
        return {
            drawer: false,
        }
    },
}
</script>