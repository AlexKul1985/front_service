<template>
        <v-form 
            ref="form"
            v-model="valid"
            validation
            >
            <v-layout  wrap align-center>
                <v-flex xs10 offset-xs1  d-flex>
                    <v-select
                        :items="types"
                        label="Выбирете тип изделия"
                        solo
                        v-model="activeType"
                        :rules="typeRules"
                        required
                    ></v-select>
                </v-flex>
                <v-flex xs10 offset-xs1  d-flex>
                    <v-select
                        :items="names"
                        label="Название изделия"
                        solo
                        v-model="activeName"
                        :rules="nameRules"
                        required
                    ></v-select>
                </v-flex>
                <v-flex xs10 offset-xs1>
                    <v-text-field
                        label="Номер изделия"
                        required
                        :rules="numberRules"
                        v-model="activeNumber"
                    ></v-text-field>
                </v-flex>
                <v-flex xs10 offset-xs1>
                    <v-textarea
                    name="input-7-1"
                    label="Описание неисправности"
                    :value="value"
                    @input = "onInput"
                    ></v-textarea>
                </v-flex>
            </v-layout>
            <v-layout row wrap>
                <v-flex xs10 offset-xs1>
                    <v-radio-group v-model="activeStatus" row>
                        <v-radio
                        color="indigo darken-3"
                        v-for="status in statuses"
                        :key="status.id"
                        :label="status.label"
                        :value="status.id"
                        ></v-radio>
                    </v-radio-group>
                </v-flex>
            </v-layout>   
        </v-form>
</template>
<script>

import Vue from 'vue'


export default {
    
    inject:['onSubmit'],

    props: {
        names:Array,
        types:Array,
        statuses: Array,
        value:{
            dafault:'',
            type:String
        },
        trigger:{
            type: Boolean
        }
            
    },
    
    data () {
        return {
            valid:false,
            activeStatus:1,
            activeType:null,
            activeName:null,
            activeNumber:'',
            typeRules:[
                v => !!v || 'Type is required',
            ],
            nameRules:[
                v => !!v || 'Name is required',
            ],
            numberRules:[
                v => !!v || 'Number is required',
            ]
        }
            
    },
    watch:{
        valid(value){
            this.$emit('changeValid',value)
        },
            
        trigger(value){
            this.onSubmit.call(this);
            this.$emit('update:trigger',value)
        }
    },
    methods:{
        onInput(v){
            this.$emit('input',v);
        },
        
    }  
}
            
</script>

