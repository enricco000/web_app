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

                    <v-col
                    cols="6">
                      <v-row>
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
                      </v-row>

                      <v-row
                      class="ma-2 text-left"
                      align="start"
                      justify="start"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut ante eu ipsum tincidunt accumsan nec eu arcu. Suspendisse potenti. Donec ut porttitor ante. Proin turpis libero, hendrerit quis lacus non, commodo convallis ipsum. Nam gravida lectus blandit massa convallis aliquet. Quisque laoreet massa ac convallis elementum. Quisque feugiat enim in lorem imperdiet mollis. Nunc auctor tempor eros, sit amet finibus odio luctus vel. Vestibulum molestie nulla id molestie tempus. Pellentesque bibendum nisi sit amet sapien rhoncus, sollicitudin gravida nisi mattis.
                      </v-row>

                    </v-col>

                    <v-col>
                      <v-row>

                        <v-col>
                            <v-container>
                              <v-row
                              :align="'center'"
                              :justify="'center'">
                                <v-img
                                class="ma-6"
                                :src="logo"
                                max-width="300">
                                </v-img>
                              </v-row>

                                <v-row>
                                  <v-col>
                                    <v-row
                                    :justify="'start'"
                                    :align="'center'"
                                    class="ml-2">
                                      Veinte pesitos
                                    </v-row>
                                  </v-col>
                                  <v-col>
                                    <v-row
                                    :justify="'end'"
                                    :align="'center'"
                                    class="mr-2">
                                      <v-btn>
                                        Comprar
                                      </v-btn>
                                    </v-row>
                                  </v-col>
                                </v-row>

                            </v-container>
                        </v-col>

                      </v-row>
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
      cardTitle: 'Home for Web App',
      logo: require('@/assets/logo.png')
    }
  }
}
</script>

<style scoped>
</style>
