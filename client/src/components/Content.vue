<template>
    <v-container
    class="fill-height">
       <v-row>
         <v-col>

          <card-slot>
            <div slot="CardTitle">
              Content Card Title
            </div>

            <div class="text-left" slot="CardText">
              Content Card Text
            </div>
          </card-slot>

         </v-col>
       </v-row>
    </v-container>
</template>

<script>
import CardSlot from '@/components/CardSlot'
export default {
  name: 'Content',
  components: {
    CardSlot
  }
}
</script>

<style scoped>
</style>
