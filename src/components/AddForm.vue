<template>
        <v-form 
            ref="form"
            v-model="valid"
            validation
            >
              <v-layout row wrap>
            <v-flex xs10 offset-xs1>
                  <v-radio-group 
                  v-model="activeVariant"
                  :rules="variantRules"
                  required
                  >
                    <v-radio
                        v-for="variant in variants"
                        :key="variant.id_variant"
                        :label="variant.variant_name"
                        :value="variant.id_variant"
                        
                    ></v-radio>

                </v-radio-group>
             </v-flex>
         </v-layout>
            <v-layout  wrap align-center>
                <v-flex xs10 offset-xs1  d-flex>
                    <v-select
                        :items="types"
                        label="Выбирете тип изделия"
                        solo
                        v-model="activeType"
                        :rules="typeRules"
                         :item-text="'type_name'"
                         :item-value="'id_type'"
                         @change = "onChangeIdType"
            
            
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
                         :item-text="'malf_name'"
                         :item-value="'id_malf'"
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
                <v-flex xs10 offset-xs1 v-if="flagAddMalf">
                    <!-- <v-textarea
                    name="input-7-1"
                    label="Описание неисправности"
                    :value="value"
                    @input = "onInput"
                    ></v-textarea> -->
                    <!-- <editor 
                     :value="value"
                    @input = "onInput"
                    ></editor> -->
                    <quill-editor
                   :value="value"
                    @input = "onInput"
                    ref="myQuillEditor"
                    :options="editorOption"
                    ></quill-editor>
                </v-flex>
            </v-layout>
            <v-layout row wrap>
                <v-flex xs10 offset-xs1>
                    <v-radio-group 
                    v-model="activeStatus"
                    :rules="statusRules"
                    required 
                    row>
                        <v-radio
                        color="indigo darken-3"
                        v-for="status in statuses"
                        :key="status.id_status"
                        :label="status.status_name"
                        :value="status.id_status"
                        
                        ></v-radio>
                    </v-radio-group>
                </v-flex>
            </v-layout>   
        </v-form>
</template>
<script>

import Vue from 'vue'
// import Editor from '@tinymce/tinymce-vue';
// import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
// import 'quill/dist/quill.bubble.css'

import {quillEditor} from 'vue-quill-editor'
// import {Button, Input, Select} from 'iview'

export default {
    components:{
        // 'editor': Editor
        // Button,Input, Select, 
        quillEditor
    },
    inject:['onSubmit'],

    props: {
        names:Array,
        types:Array,
        statuses: Array,
        variants:Array,
        value:{
            dafault:'',
            type:String
        },
        triggerSubmit:{
            type: Boolean
        },
        method:{
            type:String,
            required:true
        },
        closeFunction:{
            type:Function,
            default:() => {}
        },
        flagAddMalf:{
            type:Boolean,
            default:false
        }
            
    },
    
    data () {
        return {
            
            editorOption: { 
                debug:false,
                placeholder: 'Описание неисправности...',
                readOnly:true,
                theme:'snow'
            },
            
            valid:false,
            activeStatus:null,
            activeType:null,
            activeName:null,
            activeNumber:'',
            
            activeVariant: null,
            typeRules:[
                v => !!v || 'Type is required',
            ],
            nameRules:[
                v => !!v || 'Name is required',
            ],
            numberRules:[
                v => !!v || 'Number is required',
            ],
            variantRules:[
                v => !!v || 'Variant is required',
            ],
            statusRules:[
                v => !!v || 'Status is required',
   
            ]
        }
    },
    computed:{
        editData(){
            return this.$store.getters.editData
        }
    },
            
    watch:{
        valid(value){
            this.$emit('changeValid',value)
        },
        editData(v){
            this.activeStatus = v.id_status
            this.activeType = v.id_type
            this.activeName = v.id_malf
            this.activeVariant = v.id_variant
            this.activeNumber = v.number
        },
            
        async triggerSubmit(value){
            this.$store.dispatch('setLoading',true);
            try{

                let data = await this.onSubmit(this.method);
                // console.log(data);
            }
            catch(e){
                this.$store.dispatch('setError',true)
                }
            finally{
                this.$store.dispatch('setLoading',false)
                this.closeFunction()

            }
        }
    },
           
           
    methods:{
        onInput(v){
            this.$emit('input',v);
        },
        onChangeIdType(){
            this.$emit('onChangeIdType',this.activeType)
        }
    }  
        
}
            
</script>
<style >
    .ql-editor{
        height: 200px;
    }
</style>


