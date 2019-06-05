<template>
<v-app id="inspire">
    <v-container>
         <v-layout row>
            <v-flex xs10 offset-xs1 sm8 offset-sm2>
            <v-card class="elevation-12">
              <v-toolbar dark color="indigo">
                <v-toolbar-title>Register form</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                  
                     <v-form
                
                        ref="form"
                        v-model="valid"
                        validation
                     >
     
  
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
         
      ></v-text-field>
         <v-text-field
         
        v-model="password"
        
        :rules="passwordRules"
        label="Password"
        required
        type="password"
        
      ></v-text-field>
     <v-text-field
        v-model="confirmPassword"
        :rules="confirmPasswordRules"
        label="Confirm password"
        required
        type="password"
        
      ></v-text-field>
    </v-form>             
            
      
     </v-card-text>
        <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn  :dark="valid" color="indigo"  :disabled ="!valid" @click="onSubmit">Regiser</v-btn>
        </v-card-actions>
    </v-card>
    </v-flex>
        
    </v-layout>
    </v-container>
</v-app>
</template>
  
<script>
     
let ctx;
                
               
export default {
  
  data: () => ({
    valid: false,
    email: '',
    password: '',
    confirmPassword:'',
    passwordRules: [
      v => !!v || 'Password is required',
      v => (v && v.length >= 6) || 'Password must be equal or more than 6 characters'
    ],
    emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ],
    confirmPasswordRules: [
        v => v === ctx.password || 'passwords not equal',
        v => !!v || 'Confirm password is required',
    ],
   
  }),

  methods: {
    onSubmit () {
      if (this.$refs.form.validate()) {
        let dataSubmit = {
            email: this.email,
            password: this.password
        }
          this.$store.dispatch('register',dataSubmit)
          .then(() => {
            // this.$router.push("/serviceslist");
            this.$refs.form.reset()

          })
          .catch((e) => {
            console.log('Error',e.message);

          })
        
      }

    }
  },
  created(){
      ctx = this;

     
    }
}

</script>

