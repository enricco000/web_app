<template>

<v-row>

      <card-slot
      v-if="$store.state.isUserLoggedin">
        <div slot=CardTitle>
          Bookmarked Entries
        </div>

        <div slot="CardText">
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Title</th>
                  <th class="text-left">Author</th>
                  <th class="text-left">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr
                v-for="entry in starredEntries" :key="entry.id"
                link
                @click="navigateTo({name: 'post', params: {postId: entry.id, bookmarked: true}})">
                  <td class="text-left">{{ entry.title }}</td>
                  <td class="text-left">{{ entry.author }}</td>
                  <td class="text-left">{{ entry.createdAt.substring(0, 19) }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </div>
      </card-slot>
    </v-row>

</template>

<script>
import CardSlot from '@/components/CardSlot'
import BookmarksService from '@/services/BookmarksService'
export default {
  name: 'BookmarkedEntries',
  data () {
    return {
      starredEntries: []
    }
  },
  components: {
    CardSlot
  },
  methods: {
    navigateTo ({name, params}) {
      if (this.$route.name !== name) {
        this.$router.push({name: name, params: params})
      }
    }
  },
  async mounted () {
    const { getters } = this.$store
    if (getters.isUserLoggedin === true) {
      this.starredEntries = (await BookmarksService.indexer({
        UserId: getters.user.id
      })).data
    }
  },
}
</script>

<style scoped>
</style>
