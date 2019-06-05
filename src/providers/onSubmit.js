
export const provide =  () => {
    return {
      onSubmit: function(){
         if (this.$refs.form.validate()) {
            let dataSubmit = {
                type:this.activeType,
                name:this.activeName,
                number:this.activeNumber,
                status:this.activeStatus,
                description:this.value            
            }
            window.requestAnimationFrame(() => {
                this.$refs.form.reset();
            })
            console.log('data - ',dataSubmit)
          }
      }
    }
  };