<template>
  <v-container
  fluid>

    <v-row
    class="ml-4 mr-4 text-left">
      This is a placeholder text for the Store component
    </v-row>

  <card-slot>
  </card-slot>

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
