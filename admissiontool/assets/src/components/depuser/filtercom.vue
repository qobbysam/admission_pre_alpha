<template>
<div>
  <v-row>
      <v-col>

<v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
  <v-container>
      <v-row>
          <v-col>
            <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="Name"
            required
            ></v-text-field>
          </v-col>
          <v-col>
            <v-select
            v-model="select"
            :items="items"
            :rules="[v => !!v || 'Item is required']"
            label="Item"
            required
            ></v-select>
          </v-col>
        <v-col>
            <v-select
            v-model="select"
            :items="items"
            :rules="[v => !!v || 'Item is required']"
            label="Item"
            required
            ></v-select>
          </v-col>

        <v-col>
            <v-select
            v-model="select"
            :items="items"
            :rules="[v => !!v || 'Item is required']"
            label="Item"
            required
            ></v-select>
          </v-col>

        <v-col>
            <v-select
            v-model="select"
            :items="items"
            :rules="[v => !!v || 'Item is required']"
            label="Item"
            required
            ></v-select>
          </v-col>
          
      </v-row>
  </v-container>








    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Apply
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Filters
    </v-btn>


  </v-form>

      </v-col>

  </v-row>
  <v-row>
      <v-col>

      </v-col>
  </v-row>
  </div>
</template>

<script>
export default {
    name: "filtercom",
    data() {
        return {
            valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],


        }
    },

    methods: {

        validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },

    },

}
</script>

<style>

</style>