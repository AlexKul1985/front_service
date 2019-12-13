

export default  function(method){
         if (this.$refs.form.validate()) {
             if(method == 'POST'){
                let dataSubmit = {
                    id_variant:this.activeVariant,
                    id_malf:this.activeName,
                    number:this.activeNumber,
                    id_status:this.activeStatus,
                    description:this.value            
                }
                this.$store.dispatch('setLoading',true);
                this.$store.dispatch('createMalf', dataSubmit)
                .then(() => {
                    this.$store.dispatch('setLoading',false);
                    this.$router.push('/serviceslist')
                })
                .catch(() => {
                    this.$store.dispatch('setError',true);
                    this.$store.dispatch('setLoading',false);
                    
                })
            }
            else if(method == 'PUT'){
                // console.log('PUT')
                let id_malf_info = 0;
                let dataSubmit = {
                    id_variant:this.activeVariant,
                    id_malf:this.activeName,
                    number:this.activeNumber,
                    id_status:this.activeStatus,
                    flagChangeStatus: this.$store.getters.idOldStatus != this.activeStatus
                    // filterData
                }
                // let filterData = {}
                if(this.$route.params.id){
                    console.log('route');
                    
                    id_malf_info = this.$route.params.id;
                }
                else{
                    console.log('store');
                    id_malf_info = this.$store.getters.editData['id_malf_info'];
                    dataSubmit.filterData =  this.$store.getters.filterData;
                   
                    // console.log(dataSubmit)
                   
                }

                this.$store.dispatch('setLoading',true);
                this.$store.dispatch('editMalf',{ dataSubmit, id_malf_info })
                .then(() => {
                
                    this.$store.dispatch('setLoading',false);
                })
                .catch(() => {
                    this.$store.dispatch('setError',true);
                    this.$store.dispatch('setLoading',false);

                })
                
                
            }
                
               
            

            // window.requestAnimationFrame(() => {
            //     this.$refs.form.reset();
            // })
            
           
          }
      }
    
 