<template>
  <v-container
  fluid>

      <v-card
      hover
      extended>

      <v-card-text>
        <v-card
        outlined>

          <v-row
          no-gutters>

            <v-col
            cols="12" sm="6">
              <v-list-item>
                <v-list-item-content>
                  <div class="overline text-left mb-1">
                    {{ post.author }} - {{ post.date }} UTC
                  </div>
                  <v-list-item-title class="headline mb-1 text-left">{{ post.title }}</v-list-item-title>
                  <v-list-item-subtitle class="text-left mb-2">{{ post.subTitle }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>

            <v-col>
              <v-row
              no-gutters
              :justify="'end'"
              :align="'end'"
              class="mr-2 ma-2">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    fab
                    v-bind="attrs"
                    exact
                    to="/content"
                    v-on="on">
                  <v-icon>
                    mdi-duck
                  </v-icon>
                </v-btn>
                  </template>
                  <span>Back to Content</span>
                </v-tooltip>
              </v-row>
            </v-col>
          </v-row>

          <v-row
          v-if="post.image"
          no-gutters>
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-header>Image</v-expansion-panel-header>
                <v-expansion-panel-content>
                 <v-fade-transition mode="out-in">
                      <v-card
                      dark
                      hover>
                      <v-row>
                        <v-img
                          width=400
                          :src="post.image"
                          class="secondary"
                        ></v-img>
                      </v-row>
                      </v-card>
                    </v-fade-transition>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-row>

          <v-row
          class="text-left ml-2 mr-2">
            <v-col>
              {{ post.content }}
            </v-col>
          </v-row>

          <v-row
          v-if="post.youtubeId"
          no-gutters>
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-header>Video</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-card
                  dark
                  hover>

                      <youtube
                      v-if="!mobileNav"
                      :video-id="post.youtubeId"
                      :player-width="640"
                      :player-height="360">
                      </youtube>

                      <youtube
                      v-if="mobileNav"
                      :video-id="post.youtubeId"
                      :player-width="200"
                      :player-height="100">
                      </youtube>

                  </v-card>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-row>

        </v-card>
      </v-card-text>

      </v-card>

  </v-container>
</template>

<script>
import EntriesService from '@/services/EntriesService'
export default {
  name: 'Post',
  data () {
    return {
      post: {}
    }
  },
  async mounted () {
    const postId = this.$store.state.route.params.postId
    this.post = (await EntriesService.show(postId)).data
    this.post.date = this.post.createdAt.slice(0 ,19)
  },
  computed: {
  mobileNav () {
      return this.$vuetify.breakpoint.smAndDown
    }
  }
}
</script>

<style scoped>
</style>
