<template>
  <v-container>
      <v-row>
          <v-col>
              <v-row>
                    <v-col>
                                <p>Fall</p>
                            </v-col>
                            <v-col>
                                <p>Total Unints</p>
                    </v-col>
                </v-row>

                <v-row>
                        <v-col>
                            <v-simple-table height="150px" dark>
                                <template v-slot:default>
                                    <thead>
                                        <tr>
                                        <th class="text-left">
                                            Prefix
                                        </th>
                                        <th class="text-left">
                                            Course Title
                                        </th>
                                        
                                        <th class="text-left">
                                            Units
                                        </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr
                                        v-for="(item, k) in courseinfo"
                                        :key="k"
                                        >
                                        <td>{{ item.prefix }}</td>
                                        <td>{{ item.coursetitle }}</td>
                                        <td>{{item.units}}</td>
                                        </tr>
                                    </tbody>
                                    </template>
                                </v-simple-table>
                            </v-col>
              </v-row>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {
    name:"yearsectioncom",
    data(){
        return {
               courseinfo: [
          {
            prefix: 'CMM101',
            coursetitle: 'INTRODUCTION TO CHEM ',
            units: 4 ,
          },
          {
            prefix: 'CMM101',
            coursetitle: 'INTRODUCTION TO CHEM ',
            units: 4 ,
          },
          {
            prefix: 'CMM101',
            coursetitle: 'INTRODUCTION TO CHEM ',
            units: 4 ,
          },
          {
            prefix: 'CMM101',
            coursetitle: 'INTRODUCTION TO CHEM ',
            units: 4 ,
          },
          {
            prefix: 'CMM101',
            coursetitle: 'INTRODUCTION TO CHEM ',
            units: 4 ,
          },
        ],

        }
    },

}
</script>

<style>

</style>