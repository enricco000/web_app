<template>
  <v-container>

    <v-card
    hover>
      <v-toolbar
      color="primary"
      dark>

        <v-toolbar-title>
          <slot name="CardTitle">
            Default Card Title
          </slot>
        </v-toolbar-title>

      </v-toolbar>

        <v-card-text>
          <slot name="CardText">
            Default Card Text
          </slot>
        </v-card-text>

    </v-card>

  </v-container>
</template>

<script>
export default {
  name: 'CardSlot',
  props: [
    'CardTitle',
    'CardText'
  ]
}
</script>

<style scoped>
</style>
