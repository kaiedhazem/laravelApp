<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8 mt-4">
            <div class="card" v-if="currentUser.role ==='admin' || currentUser.role ==='chef de projet' ">
      <div class="container">
   
    
                <div class="header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                    <h4 class="modal-title" id="myModalLabel" v-if="aut.user.name">More About {{ aut.user.name | firstname}}  </h4>
                    </div>
                <div class="modal-body">
                    <center>
                   
                    <img :src="`/img/profile/${ aut.user.photo}`"  width="140" height="140" border="0" class="img-circle">
                    <h3 class="media-heading">{{ aut.user.name }} <h5> ( {{aut.user.role}}) </h5> </h3>
                    <span><strong>Skills: </strong></span>
                        <span class="label label-warning">{{ aut.user.skills }}</span>
                        
                    </center>
                    <hr>
                    <center>
                    <p class="text-left"><strong>Education: </strong><br>
                       {{ aut.user.education }} </p>
                    <br>
                    </center>
                    <center>
                    <p class="text-left"><strong>Location: </strong><br>
                       {{ aut.user.location }} </p>
                    <br>
                    </center>
                     <center>
                    <p class="text-left"><strong>Phone: </strong><br>
                       {{ aut.user.phone }} </p>
                    <br>
                    </center>
                </div>
               
            </div>
        </div>
        <div v-if="currentUser.role !=='admin' && currentUser.role !=='chef de projet' ">
   <not-found></not-found>
 </div>
    </div>
            </div>
            </div>
     
</template>
<script>
export default {
     data(){
         return{
         key: this.$route.params.id,
          user:JSON.parse(localStorage.getItem('user')),  
          aut: {
                user:{},
            },
         
}
     },
     created() {
     let axiosConfig = {
                    headers: {
                    "Authorization": 'Bearer '+this.user['token']
                    }
                    };
   axios.get('/api/userprofile/'+this.key,axiosConfig).then(({ data }) =>(this.aut = data) );

          },
                          computed: {
            currentUser() {
                return this.$store.getters.currentUser
            }
        },
}
</script>