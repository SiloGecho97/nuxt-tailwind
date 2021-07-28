<template>
  <div class="submit-form">
    <div class="w-full bg-grey-500 py-8">
        <Nuxt-link to="/contract" class="px-2 py-1 bg-indigo-600 rounded-md shadow-md text-gray-100">Back</Nuxt-link>

      <div class="container mx-auto py-8">
        <div class="w-96 mx-auto bg-white rounded shadow">
          <div
            class="
              mx-16
              py-4
              px-8
              text-black text-xl
              font-bold
              border-b border-grey-500
            "
          >
            Contract Form
          </div>

          <form id="Contract_Form" name="student_application">
            <div class="py-4 px-8">
              <div class="mb-4">
                <label class="block text-grey-darker text-sm font-bold mb-2"
                  >Name
                </label>
                <input
                  v-model="tutorial.name"
                  class="border rounded w-full py-2 px-3 text-grey-darker"
                  type="text"
                  name="name"
                  value=""
                  placeholder="Enter Contract Name"
                />
              </div>

              <div class="mb-4">
                <label class="block text-grey-darker text-sm font-bold mb-2"
                  >Contract Type</label
                >
                <input
                  v-model="tutorial.type"
                  class="border rounded w-full py-2 px-3 text-grey-darker"
                  type="text"
                  name="type"
                  value=""
                  placeholder="Enter Contract Type"
                />
              </div>

              <div class="mb-4">
                <label class="block text-grey-darker text-sm font-bold mb-2"
                  >Price</label
                >
                <input
                  v-model="tutorial.price"
                  class="border rounded w-full py-2 px-3 text-grey-darker"
                  type="number"
                  name="price"
                  value=""
                  placeholder="Enter Your Price"
                />
                <p id="error_creater_id"></p>
              </div>
              <div class="mb-4">
                <label class="block text-grey-darker text-sm font-bold mb-2"
                  >Desciption
                </label>
                <textarea
                  v-model="tutorial.description"
                  class="border rounded w-full py-2 px-3 text-grey-darker"
                  type="text"
                  name="decription"
                  value=""
                  placeholder="Description here"
                />
              </div>

              <div class="mb-4">
                <button
                  class="
                    mb-2
                    mx-16
                    rounded-full
                    py-1
                    px-24
                    bg-gradient-to-r
                    from-green-400
                    to-blue-500
                  "
                  @click="saveTutorial"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import customerService from '~/services/customer.service'

export default {
  name: 'AddTutorial',
  data() {
    return {
      tutorial: {
        id: null,
        name: '',
        type: '',
        price: '',
        description: '',
        published: false,
      },
      submitted: false,
    }
  },
  methods: {
    saveTutorial() {
      const data = {
        name: this.tutorial.name,
        type: this.tutorial.type,
        price: this.tutorial.price,
        customerId: 1,
        description: this.tutorial.description,
      }
      customerService
        .create(data)
        .then((response) => {
          this.tutorial.id = response.data.id
          // console.log(response.data)
          this.submitted = true
          this.$router.push('/contract')
        })
        .catch((e) => {
          console.log(e)
        })
    },

    newTutorial() {
      this.submitted = false
      this.tutorial = {}
    },
  },
}
</script>

<style>
.submit-form {
  max-width: 500px;
  margin: auto;
}
</style>