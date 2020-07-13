<template>
    <div>
    <div v-if="days <= '0' &&  hours <= '0' && minutes <= '0' && seconds <= '0'" >
        <p style="color:red;" :v-model="time">
            0:0:0:0

        <span class="label label-danger pull-right">  </span>
        </p>
    </div>
    <div v-else>
        <p style="color:green;"> {{ Math.trunc(days) }}:{{ Math.trunc(hours) }}:{{ Math.trunc(minutes) }}:{{ Math.trunc(seconds) }}
        <span class="label label-success pull-right"></span>
        </p>
    </div>
    </div>
</template>

<script>
export default {
    props: {
     id:{
        type: Number
     },
     user:{
         type: Number
     },
     date: {
         type: String
        },
     time:{
          type: String
     }
    },
    data() {
        return {
            til:"",
            now: 0,
            count: 0,
            fgr:[],
   idt:this.$props.id,
   usere:this.$props.user

   }
    },
    methods:{
        timer_loop() {
            this.count++
            this.now = Math.trunc(new Date().getTime() / 1000)
            //console.log(this.now);
            this.count < 200 && setTimeout(this.timer_loop, 1000)
        },
    },
    created(){
 if(this.usere != null && ((Math.trunc(Date.parse(this.date) / 1000)-this.now) / 60 / 60 / 24) <= '0' ){
axios.get("/api/sendalert/"+this.idt+'/'+this.usere).then(({data})=>(this.fgrr =data));



 }
    },

    mounted() {
        this.timer_loop()
    },
    computed: {
        seconds() {
            return (this.modifiedDate - this.now) % 60
        },
        minutes() {
            return ((this.modifiedDate - this.now) / 60) % 60
        },
        hours() {
            return ((this.modifiedDate - this.now) / 60 / 60) % 24
        },
        days() {
            return ((this.modifiedDate - this.now) / 60 / 60 / 24)
        },
        modifiedDate: function () {
            return Math.trunc(Date.parse(this.date) / 1000)
        }
    }
}
</script>

<style>
</style>
