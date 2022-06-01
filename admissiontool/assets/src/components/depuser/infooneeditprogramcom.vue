<template>
  <div>

     <v-dialog
        v-model="dialog"

        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
        persistent
        scrollable
          >

<template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          View Program
        </v-btn>
    </template>


      <v-card>

            <v-toolbar
                    dark
                    color="primary"
                    >
                    <v-btn
                        icon
                        dark
                        @click="dialog = false"
                    >
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title> Program Name here</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn
                        dark
                        text
                        @click="dialog = false"
                        >
                        Download Pdf
                        </v-btn>
                    </v-toolbar-items>
            </v-toolbar>
          
          


        <v-card-text>
            <v-container>
                <v-row>
                    <v-col>
                        <v-row>
                            <v-col>
                                <h3>Year One</h3>
                            </v-col>
                        </v-row>
                        <v-row>

                           <v-col>
                               <infoyearsection></infoyearsection>
                           </v-col>
                           <v-col>
                               <infoyearsection></infoyearsection>
                           </v-col>
                           <v-col>
                               <infoyearsection></infoyearsection>
                           </v-col>
                           
                        </v-row>
                        <v-row>
                            <v-col>
                                <h3>Year Two</h3>
                            </v-col>
                        </v-row>
                        <v-row>

                           <v-col>
                               <infoyearsection></infoyearsection>
                           </v-col>
                           <v-col>
                               <infoyearsection></infoyearsection>
                           </v-col>
                           <v-col>
                               <infoyearsection></infoyearsection>
                           </v-col>
                           
                        </v-row>

                        <v-row>
                            <v-col>
                                <h3>Year 3</h3>
                            </v-col>
                        </v-row>
                        <v-row>

                           <v-col>
                              <infoyearsection></infoyearsection>
                           </v-col>
                           <v-col>
                               <infoyearsection></infoyearsection>
                           </v-col>
                           <v-col>
                               <infoyearsection></infoyearsection>
                           </v-col>
                           
                        </v-row>

                        <v-row>
                            <v-col>
                                <h3>Year four</h3>
                            </v-col>
                        </v-row>
                        <v-row>

                           <v-col>
                               <infoyearsection></infoyearsection>
                           </v-col>
                           <v-col>
                               <infoyearsection></infoyearsection>
                           </v-col>
                           <v-col>
                               <infoyearsection></infoyearsection>
                           </v-col>
                           
                        </v-row>

                        <v-row>
                            <v-col>
                                <v-row>
                                    <v-col>
                                        <v-row>
                                            <v-col>
                                                <h3>Courses in major Units</h3>
                                            </v-col>
                                            
                                        </v-row>

                                        <v-row>
                                            <v-col><infoyearsection></infoyearsection> </v-col>
                                        </v-row>

                                    </v-col>
                                    <v-col>
                                        <v-row>
                                            <v-col>
                                                <h3>General Education Requirements</h3>
                                            </v-col>
                                            
                                        </v-row>

                                        <v-row>
                                            <v-col><infoyearsection></infoyearsection></v-col>
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>

        </v-card-text>


      </v-card>

    </v-dialog>
     
  </div>
</template>

<script>
import Infoyearsection from './infoyearsection.vue'
export default {

    name:"infoedditprogramcom",
    components: {Infoyearsection},
    data() {
        return {
        
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
        }
    },

}
</script>

<style>

</style>