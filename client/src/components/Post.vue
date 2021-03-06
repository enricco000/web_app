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
        class="ml-2 mt-2"
        v-if="$store.state.isUserLoggedin && bookmarked">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
            fab
            small
            v-bind="attrs"
            v-on="on"
            @click="removeBookmark(post.id); bookmarked=false">
          <v-icon>
            mdi-star
          </v-icon>
        </v-btn>
          </template>
          <span>Remove bookmark</span>
        </v-tooltip>
      </v-row>

      <v-row
        class="ml-2 mt-2"
        v-if="$store.state.isUserLoggedin && !bookmarked">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
            fab
            small
            v-bind="attrs"
            v-on="on"
            @click="createBookmark(post.id); bookmarked=true">
          <v-icon>
            mdi-star-outline
          </v-icon>
        </v-btn>
          </template>
          <span>Bookmark this post</span>
        </v-tooltip>
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

          <v-row
          no-gutters>
            <v-row>
              <v-col
              cols="12" xs="6" class="mr-auto">
                    <div class="overline text-left ma-4">
                      {{ post.author }} - {{ post.date }} UTC
                    </div>
                    <div class="headline ma-4 text-left">{{ post.title }}</div>
                    <div class="text-left mr-4 ml-4 mb-4">{{ post.subTitle }}</div>
              </v-col>
            </v-row>
            
            <v-row
            no-gutters
            :align="'end'"
            :justify="'end'">
              <v-col
              v-if="this.$store.state.token != null"
              cols="3"
              xs="2">
                <v-row
                no-gutters
                :justify="'end'"
                :align="'end'"
                class="mr-2 mb-2">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                      fab
                      v-bind="attrs"
                      exact
                      :to="{name: 'edit-content'}"
                      v-on="on">
                    <v-icon>
                      mdi-playlist-edit
                    </v-icon>
                  </v-btn>
                    </template>
                    <span>Edit this post</span>
                  </v-tooltip>
                </v-row>
              </v-col>

              <v-col
              cols="3"
              xs="2">
                <v-row
                no-gutters
                :justify="'end'"
                :align="'end'"
                class="mr-2 mb-2">
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
                    <span>Back to content</span>
                  </v-tooltip>
                </v-row>
              </v-col>
            </v-row>

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
              <nl2br tag="p" :text="`${this.post.content}`" />
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
import BookmarksService from '@/services/BookmarksService'
import EntriesService from '@/services/EntriesService'
import Nl2br from 'vue-nl2br'
export default {
  name: 'Post',
  components: {
    Nl2br
  },
  data () {
    return {
      error: null,
      post: {},
      bookmarked: false
    }
  },
  async mounted () {
    const postId = this.$store.state.route.params.postId
    this.post = (await EntriesService.show(postId)).data
    this.post.date = this.post.createdAt.substring(0, 19)
    this.bookmarked = this.$store.state.route.params.bookmarked
  },
  computed: {
  mobileNav () {
      return this.$vuetify.breakpoint.smAndDown
    }
  },
  methods: {
    async createBookmark (entryId) {
      try {
        await BookmarksService.post({
        EntryId: entryId,
        UserId: this.$store.state.user.id
      })
      } catch (error) {
        this.error = error
      }
    },
    async removeBookmark (entryId) {
      try {
        await BookmarksService.delete({
        EntryId: entryId,
        UserId: this.$store.state.user.id
      })
      } catch (error) {
        this.error = error
      }
    }
  }
}
</script>

<style scoped>
</style>
