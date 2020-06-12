<template>
    <v-container
    fluid>

      <v-card
      hover
      extended>

          <v-toolbar
          color="tertiary"
          class="white--text">
            <v-toolbar-title>
              Entries
            </v-toolbar-title>
            <template v-slot:extension>
              <v-btn
                fab
                color="quaternary"
                bottom
                dark
                right
                absolute
                to="/content/create"
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </template>
          </v-toolbar>

        <v-card-text>
          Shalalala
        </v-card-text>

      </v-card>
    </v-container>
</template>

<script>
import EntriesService from '@/services/EntriesService'
export default {
  name: 'Content',
  data () {
    return {
      entries: null
    }
  },
  async mounted () {
    this.entries = (await EntriesService.index()).data
  }
}
</script>

<style scoped>
</style>
