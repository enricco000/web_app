<template>
  <v-container
  fluid>
    <card-slot>

      <div
      slot="CardTitle">
        404: Not Found
      </div>

      <div
      slot="CardText"
      class="text-center">
        <h3
        class="text-center">
          It's dangerous to go alone!
        </h3>

        <h3>
          Take this.
        </h3>
      </div>

      <div
      slot="BottomCard">
        <v-card-actions>
          <v-row
          :justify="'center'">
            <v-btn
            fab
            dark
            color="quaternary"
            @click="navigateTo('content')">
              <v-icon>
                mdi-sword
              </v-icon>
            </v-btn>
          </v-row>
        </v-card-actions>
      </div>

    </card-slot>
  </v-container>
</template>

<script>
import CardSlot from '@/components/CardSlot'
export default {
  name: 'NotFound',
  components: {
    CardSlot
  },
  methods: {
    navigateTo (name) {
      if (this.$route.name !== name) {
        this.$router.push({name: name})
      }
    }
  }
}
</script>

<style scoped>
</style>
