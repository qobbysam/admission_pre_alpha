<template>
  <v-row>
      <v-col>
        <v-simple-table
            fixed-header
            height="300px"
        >
            <template v-slot:default>
            <thead>
                <tr>
                <th class="text-left">
                    Email
                </th>
                <th class="text-left">
                    First Name
                </th>
              <th class="text-left">
                    Last Name
                </th>
                 <th class="text-left">
                    Status
                </th>
                <th class="text-left">
                    Actions
                </th>
                </tr>
            </thead>
            <tbody>
                <tr
                v-for="(item,k) in users"
                :key="k"
                >
                <td>{{ item.email }}</td>
                <td>{{ item.firstname }}</td>
                <td>{{item.lastname}}</td>
                <td>{{item.status}}</td>
                <td>
                  <v-container>
                 <v-row>
                   <v-col>
                      <v-btn>Recover Password</v-btn>
                   </v-col>
                   <v-col>
                         <v-btn>Delete </v-btn>
                   </v-col>
                 </v-row>
                    </v-container>
                  
                 
                 
                  </td>
                </tr>
            </tbody>
            </template>
        </v-simple-table>
      </v-col>
  </v-row>
</template>

<script>
export default {

    name:"usertable",

   data () {
      return {
        users: [
          {
            email: 'example@test.com',
            firstname: 'user1',
            lastname: 'lastname2',
            status: "active"
          },
                   {
            email: 'example2@test.com',
            firstname: 'user1',
            lastname: 'lastname2',
            status: "active"
          },
                    {
            email: 'example3@test.com',
            firstname: 'user1',
            lastname: 'lastname2',
            status: "active"
          },
                    {
            email: 'example4@test.com',
            firstname: 'user1',
            lastname: 'lastname2',
            status: "active"
          },
                    {
            email: 'example5@test.com',
            firstname: 'user1',
            lastname: 'lastname2',
            status: "active"
          },
        ],
      }
    },
}
</script>

<style>

</style>