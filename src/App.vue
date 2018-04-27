<template>
  <v-app>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <router-link :to="{ name: 'HelloWorld'}" tag="v-list-tile">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </router-link>

        <router-link :to="{ name: 'DeviceList'}" tag="v-list-tile">
          <v-list-tile-action>
            <v-icon>device_hub</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Devices</v-list-tile-title>
          </v-list-tile-content>
        </router-link>

        <router-link :to="{ name: 'ReportList'}" tag="v-list-tile">
          <v-list-tile-action>
            <v-icon>speaker_notes</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Reports</v-list-tile-title>
          </v-list-tile-content>
        </router-link>

        <v-divider></v-divider>

        <router-link :to="{ name: 'Configuration'}" tag="v-list-tile">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Configuration</v-list-tile-title>
          </v-list-tile-content>
        </router-link>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: 'dashboard',
          title: 'Dashboard'
        },
        {
          icon: 'device_hub',
          title: 'Devices'
        },
        {
          icon: 'speaker_notes',
          title: 'Reports'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'IoT Debug Tool'
    }
  },
  name: 'App'
}
</script>
