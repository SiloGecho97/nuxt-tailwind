<template>
  <div>
    <link
      href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
      rel="stylesheet"
    />
    <div class="flex items-center justify-center min-h-screen bg-gray-900">
      <div class="col-span-12">
        <div class="overflow-auto lg:overflow-visible">
          <table class="table text-gray-400 border-separate space-y-6 text-sm">
            <thead class="bg-gray-800 text-gray-500">
              <tr>
                <th class="p-3">Name</th>
                <th class="p-3 text-left">Category</th>
                <th class="p-3 text-left">Price</th>
                <th class="p-3 text-left">Status</th>
                <th class="p-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody
              v-for="(tutorial, index) in tutorials"
              :key="index"
              @click="setActiveTutorial(tutorial, index)"
            >
              <tr class="bg-gray-800">
                <td class="p-3">
                  <div class="flex align-items-center">
                    <img
                      class="rounded-full h-12 w-12 object-cover"
                      src="https://images.unsplash.com/photo-1613588718956-c2e80305bf61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
                      alt="unsplash image"
                    />
                    <div class="ml-3">
                      <div class="">{{ tutorial.name }}</div>
                      <div class="text-gray-500">{{ tutorial.createdAt }}</div>
                    </div>
                  </div>
                </td>
                <td class="p-3">{{ tutorial.type }}</td>
                <td class="p-3 font-bold">{{ tutorial.price }}</td>
                <td class="p-3">
                  <span class="bg-green-400 text-gray-50 rounded-md px-2">
                    {{ tutorial.status }}</span
                  >
                </td>
                <td class="p-3">
                  <a href="#" class="text-gray-400 hover:text-gray-100 mr-2">
                    <i class="material-icons-outlined text-base">visibility</i>
                  </a>
                  <a href="#" class="text-gray-400 hover:text-gray-100 mx-2">
                    <i class="material-icons-outlined text-base">edit</i>
                  </a>
                  <a
                    href="#"
                    class="text-gray-400 hover:text-gray-100 ml-2"
                    @click="removeAllTutorials"
                  >
                    <i class="material-icons-round text-base">delete_outline</i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import customerService from '~/services/customer.service'

export default {
  name: 'TutorialsList',
  data() {
    return {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      title: '',
    }
  },

  mounted() {
    this.retrieveTutorials()
  },

  methods: {
    retrieveTutorials() {
      customerService
        .get(1)
        .then((response) => {
          this.tutorials = response.data
          console.log(response.data)
        })
        .catch((e) => {
          console.log(e)
        })
    },

    refreshList() {
      this.retrieveTutorials()
      this.currentTutorial = null
      this.currentIndex = -1
    },

    setActiveTutorial(tutorial, index) {
      this.currentTutorial = tutorial
      this.currentIndex = index
    },

    removeAllTutorials() {
      customerService
        .deleteAll()
        .then((response) => {
          console.log(response.data)
          this.refreshList()
        })
        .catch((e) => {
          console.log(e)
        })
    },

    searchTitle() {
      customerService
        .findByTitle(this.title)
        .then((response) => {
          this.tutorials = response.data
          console.log(response.data)
        })
        .catch((e) => {
          console.log(e)
        })
    },
  },
}
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
.table {
  border-spacing: 0 15px;
}

i {
  font-size: 1rem !important;
}

.table tr {
  border-radius: 20px;
}

tr td:nth-child(n + 5),
tr th:nth-child(n + 5) {
  border-radius: 0 0.625rem 0.625rem 0;
}

tr td:nth-child(1),
tr th:nth-child(1) {
  border-radius: 0.625rem 0 0 0.625rem;
}
</style>
