<template>
    <v-form 
            ref="form"
            v-model="valid"
            validation
            >
         
            <v-layout  wrap align-center>
                <v-flex xs10 offset-xs1  d-flex>
                   <v-text-field
                        label="Ваше Имя"
                        required
                        :rules="firstNameRules"
                        v-model="activeFirstName"
                    ></v-text-field>
                </v-flex>
                <v-flex xs10 offset-xs1  d-flex class="mt-3">
                    <v-text-field
                        label="Ваша фамилия"
                        required
                        :rules="lastNameRules"
                        v-model="activeLastName"
                    ></v-text-field>
                </v-flex>
                <v-flex xs10 offset-xs1 class="mt-3">
                   <v-menu
            ref="menu1"
            v-model="menu1"
            :close-on-content-click="false"
            :nudge-right="40"
            lazy
            transition="fade"
            offset-y
            
            full-width
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="dateFormatted"
                label="Дата Вашего рождения"
                hint="MM/DD/YYYY format"
                persistent-hint
                prepend-icon="event"
                @blur="date = parseDate(dateFormatted)"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
          </v-menu>
          <p>Date in ISO format: <strong>{{ date }}</strong></p>
                </v-flex>
               
            </v-layout>
            <v-flex >
                 <v-btn
                    :loading="false"
                    :disabled="false"
                    color="green"
                    class="white--text"
                    @click="onClickImage"
                >
                    Загрузить изображение
                    <v-icon right dark>cloud_upload</v-icon>
              </v-btn>
              <input type="file" style="display:none;" accept="image/*" ref="imageInput" @change="onChangeImage" />
            </v-flex>
            <v-flex >
                <img :src="imageSrc"   alt="" v-if="imageSrc"/>
            </v-flex>    
           
        </v-form>
</template>
<script>
let regOne = /^[A-ZА-Я]{1}[a-zа-я]{1,}/;
let regTwo = /^[A-ZА-Я]{1}[a-zа-я]*/;
export default {
    
  data: vm => ({
  imageSrc:false,
  valid:false,
  firstNameRules:[
       v => !!v || 'Укажите Ваше Имя',
       v => regTwo.test(v) || 'Укажите корректное имя',
       v => regOne.test(v) || 'Имя не может состоять из одной буквы',
  ],
  lastNameRules:[
      v => !!v || 'Укажите Вашу фамилию',
      v => regTwo.test(v) || 'Укажите корректную фамилию',
      v => regOne.test(v) || 'Фамилия не может состоять из одной буквы',
  ],
  activeFirstName:'',
  activeLastName:'',  
    date: new Date().toISOString().substr(0, 10),
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    menu1: false,
    menu2: false
  }),

  computed: {
    computedDateFormatted () {
      return this.formatDate(this.date)
    }
  },

  watch: {
    date (val) {
      this.dateFormatted = this.formatDate(this.date)
    }
  },

  methods: {
    onClickImage(){
        this.$refs.imageInput.click();
    },
    onChangeImage(e){
        const file = e.target.files[0]
        const reader = new FileReader();
        reader.onload = (e) => {
            // console.log(reader.result)
            this.imageSrc = reader.result
        }
        reader.readAsDataURL(file)
    },
    formatDate (date) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${month}/${day}/${year}`
    },
    parseDate (date) {
      if (!date) return null

      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    }
  }
}
</script>
<style scoped>
    img{
        max-height: 500px;
    }
</style>

