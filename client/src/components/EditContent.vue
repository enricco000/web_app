<template>
    <v-container
    class="fill-height"
    fluid>
       <v-row>
         <v-col>

          <card-slot>
            <div slot="CardTitle">
                Edit Entry
            </div>

            <div class="text-left" slot="CardText">
              
              <v-row>
                <v-col>
                  <v-card
                  outlined>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6">
                          <v-text-field
                            v-model="entry.title"
                            label="Title*"
                            :rules="[value => !!value || 'Required']"
                            :prepend-inner-icon="'mdi-crown'">
                          </v-text-field>
                        </v-col>
                      </v-row>

                      <v-row>
                        <v-col cols="6">
                          <v-text-field
                            v-model="entry.subTitle"
                            label="Subtitle"
                            :prepend-inner-icon="'mdi-crown-outline'">
                          </v-text-field>
                        </v-col>

                        <v-col cols="6">
                          <v-text-field
                            v-model="entry.topics"
                            label="Topics"
                            :prepend-inner-icon="'mdi-chart-bubble'">
                          </v-text-field>
                        </v-col>                
                      </v-row>
                    </v-container>
                  </v-card>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-card
                  outlined>
                    <v-container>
                      <v-row>
                        <v-col>
                          <v-textarea
                          v-model="entry.content"
                          label="Content*"
                          :rules="[value => !!value || 'Required']"
                          rows="4"
                          auto-grow
                          clearable
                          clear-icon="cancel"
                          :prepend-inner-icon="'mdi-form-textarea'">
                          </v-textarea>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-card
                  outlined>
                  <v-container>
                    <v-text-field
                      v-model="entry.image"
                      label="Image URL"
                      :prepend-inner-icon="'mdi-image'">
                    </v-text-field>
                  </v-container>
                  </v-card>
                </v-col>

                <v-col>
                  <v-card
                  outlined>
                  <v-container>
                    <v-text-field
                      v-model="entry.youtubeId"
                      label="YouTube ID"
                      :prepend-inner-icon="'mdi-youtube'">
                    </v-text-field>
                  </v-container>
                  </v-card>
                </v-col>
              </v-row>

              <v-alert
              type="error"
              v-if="error"
              elevation=6
              dismissible
              class="text-left"
              >
                {{ error }}
              </v-alert>

              <v-snackbar
              v-model="snackbarRules.snackbar"
              :timeout="snackbarRules.timeout">
                {{ snackbarRules.text }}
                <v-btn
                  color="green"
                  text
                  @click="snackbarRules.snackbar = false">
                  OK
                </v-btn>
              </v-snackbar>

            </div>

            <v-card-actions
            slot="BottomCard">
              <v-row
              :justify="'end'"
              class="mr-2 pb-2">
                  <v-btn
                  :disabled="!entry.title || !entry.content"
                  color="tertiary"
                  class="white--text"
                  @click="save()">
                    Save Edit
                  </v-btn>
              </v-row>
            </v-card-actions>

          </card-slot>

         </v-col>
       </v-row>
    </v-container>
</template>

<script>
import CardSlot from '@/components/CardSlot'
import EntriesService from '@/services/EntriesService'
export default {
  name: 'EditContent',
  data () {
    return {
      error: null,
      entry: {
        title: null,
        subTitle: null,
        author: null,
        content: null,
        topics: null,
        image: null,
        youtubeId: null
      },
      snackbarRules: {
        snackbar: false,
        text: 'Edit successful!',
        timeout: 1000 
      }
    }
  },
  components: {
    CardSlot
  },
  methods: {
    async save () {
      try {
        await EntriesService.put(this.entry)
        this.snackbarRules.snackbar = true
        this.error = null
        setTimeout(() => this.$router.push({name: 'content'}), 1250)
      } catch (error) {
        this.error = error.response.data.error
      }
    },
  },
  async mounted () {
    const postId = this.$store.state.route.params.postId
    this.postId = postId
    this.entry = (await EntriesService.show(this.postId)).data
  }
}
</script>

<style scoped>
</style>
