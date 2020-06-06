<template>
    <v-container
    class="fill-height">
       <v-row>
         <v-col>
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
                    <v-col>

                      <v-row>
                        <!-- <v-container> -->
                          <v-list-item two-line>
                            <v-list-item-content>
                              <div class="overline mb-4 text-left">OVERLINE</div>
                              <v-list-item-title
                                class="headline mb-2 text-left"
                                >
                                  Headline Element
                                </v-list-item-title>
                            </v-list-item-content>
                          </v-list-item>
                        <!-- </v-container> -->
                      </v-row>

                      <v-row
                      class="ma-2 text-left"
                      align="start"
                      justify="start"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut ante eu ipsum tincidunt accumsan nec eu arcu. Suspendisse potenti. Donec ut porttitor ante. Proin turpis libero, hendrerit quis lacus non, commodo convallis ipsum. Nam gravida lectus blandit massa convallis aliquet. Quisque laoreet massa ac convallis elementum. Quisque feugiat enim in lorem imperdiet mollis. Nunc auctor tempor eros, sit amet finibus odio luctus vel. Vestibulum molestie nulla id molestie tempus. Pellentesque bibendum nisi sit amet sapien rhoncus, sollicitudin gravida nisi mattis. Donec euismod leo vitae malesuada accumsan. Curabitur ac hendrerit nisl. Etiam gravida ex ac porta lobortis. Vivamus quis mi finibus, mattis felis a, ultricies metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum porttitor et lectus pharetra maximus.
                      </v-row>

                    </v-col>
                    <v-col>
                      <v-btn>Button</v-btn>
                    </v-col>
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
      cardTitle: 'Home for Vue.js App'
    }
  }
}
</script>

<style scoped>
</style>
