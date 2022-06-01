<template>
  <v-container>
      <v-row>
          <v-col>
                <v-simple-table dark>
                    <template v-slot:default>
                        <thead>
                            <tr>
                            <th class="text-left">
                                Type
                            </th>
                            <th class="text-left">
                                Name
                            </th>
                            <th class="text-left">
                                Bulletin Yr
                            </th>
                            <th class="text-left">
                                School
                            </th>
                            <th class="text-left">
                                Actions
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                            v-for="item in inforec"
                            :key="item.name"
                            >
                            <td>{{ item.type }}</td>
                            <td>{{ item.name }}</td>
                            <td>{{item.bulletinyr}}</td>
                            <td>{{item.school}}</td>
                            <td><oneprogramcom></oneprogramcom> <v-btn>Edit</v-btn></td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>           
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
import oneprogramcom from './oneprogramcom.vue'
export default {
    name:"tablecom",
  components: { oneprogramcom },
  data () {
      return {
    inforec: [
          {
            name: 'Name here',
            type: 159,
            bulletinyr: '2020',
            school: 'school info'
            
          },
          {
           name: 'Name here',
            type: 159,
            bulletinyr: '2020',
            school: 'school info'
          },
          {
          name: 'Name here',
            type: 159,
            bulletinyr: '2020',
            school: 'school info'
          },
          {
            name: 'Name here',
            type: 159,
            bulletinyr: '2020',
            school: 'school info'
          },
          {
            name: 'Name here',
            type: 159,
            bulletinyr: '2020',
            school: 'school info'
          },
          {
            name: 'Name here',
            type: 159,
            bulletinyr: '2020',
            school: 'school info'
          },
  
        ],
      }
  },

}
</script>

<style>

</style>