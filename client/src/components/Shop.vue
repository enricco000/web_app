<template>
  <v-container
  fluid>

    <v-row
    class="ml-4 mr-4 text-left">
      This is a placeholder text for the Shop
    </v-row>
  <v-row>
    <v-col cols="6">
    <card-slot>
    </card-slot>
    </v-col>

    <v-col cols="6">
      <card-slot>
      </card-slot>
    </v-col>

    <v-col cols="6">
      <card-slot>
      </card-slot>
    </v-col>
  </v-row>

  </v-container>
</template>

<script>
import CardSlot from '@/components/CardSlot'
export default {
  name: 'Shop',
  components: {
    CardSlot
  }
}
</script>

<style scoped>
</style>
