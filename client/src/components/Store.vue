<template>
    <v-container
    class="fill-height">
       <v-row>
         <v-col
         cols="12">
           <v-card
           class="d-inline-block mx-auto"
            hover
            >

            <v-toolbar color="primary" dark>
                <v-toolbar-title>
                  {{ cardTitle }}
                </v-toolbar-title>
              </v-toolbar>

                <v-container>

                  <v-row>
                    <slot></slot>
                  </v-row>

                </v-container>

          </v-card>
         </v-col>
       </v-row>
    </v-container>
</template>

<script>
export default {
  name: 'Root',
  data () {
    return {
      cardTitle: 'Card Title'
    }
  }
}
</script>

<style scoped>
</style>
