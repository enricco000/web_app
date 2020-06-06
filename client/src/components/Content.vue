<template>
    <v-container
    class="fill-height">
       <v-row>
         <v-col>
           <v-card
            hover>
            <v-toolbar color="primary" dark>
                <v-toolbar-title>
                  {{ cardTitle }}
                </v-toolbar-title>
              </v-toolbar>
          </v-card>
         </v-col>
       </v-row>
    </v-container>
</template>

<script>
export default {
  name: 'Content',
  data () {
    return {
      cardTitle: 'Title'
    }
  }
}
</script>

<style scoped>
</style>
