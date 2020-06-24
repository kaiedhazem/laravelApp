<template>
<div class="container">
<section class="content mt-4" v-if="currentUser.role==='admin'">
<div class="container-fluid">
<!-- Small boxes (Stat box) -->
<div class="row">
<div class="col-lg-3 col-6">
<!-- small box -->
<div class="small-box bg-info">
<div class="inner">
<h3>{{ projects.projects }}</h3>
<p>Projects</p>
</div>
<div class="icon">
<i class="fas fa-project-diagram"></i>
</div>
<router-link to="/project" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></router-link>
</div>
</div>
<!-- ./col -->
<div class="col-lg-3 col-6">
<!-- small box -->
<div class="small-box bg-success">
<div class="inner">
<h3>{{ clients.clients }}</h3>
<p>Clients</p>
</div>
<div class="icon">
<i class="fas fa-user"></i>
</div>
<router-link to="/client" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></router-link>
</div>
</div>
<!-- ./col -->
<div class="col-lg-3 col-6">
<!-- small box -->
<div class="small-box bg-warning">
<div class="inner">
<h3>{{ leaders.leaders }}</h3>
<p>Leaders</p>
</div>
<div class="icon">
<i class="fas fa-user-shield"></i>
</div>
<router-link to="/Chefprojet" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></router-link>
</div>
</div>
<!-- ./col -->
<div class="col-lg-3 col-6">
<!-- small box -->
<div class="small-box bg-danger">
<div class="inner">
<h3>{{ users.users }}</h3>
<p>Users</p>
</div>
<div class="icon">
<i class="fas fa-users"></i>
</div>
<router-link to="/membre" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></router-link>
</div>
</div>
<!-- ./col -->
</div>
<!-- /.row -->
<!-- Main row -->
<div class="row">
<!-- Left col -->
<section class="col-lg-12 connectedSortable ui-sortable">
<!-- Custom tabs (Charts with tabs)-->
<!-- /.card -->
<!-- DIRECT CHAT -->
<!--/.direct-chat -->
<!-- TO DO List -->
<div class="card">
<div class="card-header ui-sortable-handle" style="cursor: move;">
<h3 class="card-title">
<i class="ion ion-clipboard mr-1"></i>
Projects
</h3>
<div class="card-tools">
</div>
</div>
<!-- /.card-header -->
<div class="card-body">
<table class="table table-bordered">
<thead>
<tr>
<th style="width: 10px">#</th>
<th>Projects</th>
<th>Progress</th>
</tr>
</thead>
<tbody>
<tr v-for="(stat, ind) in stats.projectstat.data" :key="ind" >
<td>{{ ind+1 }}</td>
<td>{{ stat.name }}</td>
<td>
<div class="progress progress-xs">
<div class="progress-bar progress-bar-danger" :style="{'width':`${parseInt(stat.progress)}%`}"></div>
</div>
</td>
<td><span v-if="`${parseInt(stat.progress)}`==100" class="badge bg-success" >{{ parseInt(stat.progress) }}%</span>
<span v-if="`${parseInt(stat.progress)}`!=100" class="badge bg-danger" >{{ parseInt(stat.progress) }}%</span></td>
</tr>
</tbody>
</table>
</div>
<!-- /.card-body -->
<div class="card-footer clearfix">
</div>
</div>
<pagination :data="stats.projectstat" @pagination-change-page="getResults"></pagination>
<!-- /.card -->
</section>
</div>
<!-- Left col -->
<div class="row">
<section class="col-lg-12 connectedSortable ui-sortable" v-if="currentUser.role ==='admin'" >
<!-- Custom tabs (Charts with tabs)-->
<!-- /.card -->
<!-- DIRECT CHAT -->
<!--/.direct-chat -->
<!-- TO DO List -->
<div class="card">
<div class="card-header ui-sortable-handle" style="cursor: move;">
<h3 class="card-title">
<i class="ion ion-clipboard mr-1"></i>
Complaints
</h3>
<div class="card-tools">
</div>
</div>
<!-- /.card-header -->
<div class="card-body">
<table class="table table-bordered">
<thead>
<tr>
<th style="width: 10px">#</th>
<th>Complaints</th>
<th>Progress</th>
</tr>
</thead>
<tbody>
<tr v-for="(comp, ind) in comps.comp.data" :key="ind" >
<td>{{ ind+1 }}</td>
<td>{{ comp.description }}
<b> <small class="badge badge-success" style="float:right; color:#2d132c " > {{ comp.nameProjet }} </small></b>
</td>
<td>
<div class="progress progress-xs">
<div class="progress-bar progress-bar-danger" :style="{'width':`${parseInt(comp.progress)}%`}"></div>
</div>
</td>
<td><span v-if="`${parseInt(comp.progress)}`==100" class="badge bg-success" >{{ parseInt(comp.progress) }}%</span>
<span v-if="`${parseInt(comp.progress)}`!=100" class="badge bg-danger" >{{ parseInt(comp.progress) }}%</span></td>
</tr>
</tbody>
</table>
</div>
<!-- /.card-body -->
<div class="card-footer clearfix">
</div>
</div>
<pagination :data="comps.comp" @pagination-change-page="getResults3"></pagination>
<!-- /.card -->
</section>

<!-- /.Left col -->
<!-- right col -->
</div>

<!-- /.row (main row) -->
</div><!-- /.container-fluid -->
</section>
<section class="content mt-4" v-if="currentUser.role !== 'admin' ">
<div class="container-fluid">
<!-- Small boxes (Stat box) -->
<div class="row" v-if="currentUser.user === 'chef de projet'">
<div class="col-lg-3 col-6">
<!-- small box -->
<div class="small-box bg-info">
<div class="inner">
<h3>{{ projects.projects }}</h3>
<p>Projects</p>
</div>
<div class="icon">
<i class="fas fa-project-diagram"></i>
</div>
<router-link to="/projectemploye" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></router-link>
</div>
</div>
<!-- ./col -->
<div class="col-lg-3 col-6">
<!-- small box -->
<div class="small-box bg-success">
<div class="inner">
<h3>{{ clients.clients }}</h3>
<p>Clients</p>
</div>
<div class="icon">
<i class="fas fa-user"></i>
</div>
<router-link to="/client" v-if="currentUser.role==='chef de projet'" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></router-link>
</div>
</div>
<!-- ./col -->
<div class="col-lg-3 col-6">
<!-- small box -->
<div class="small-box bg-warning">
<div class="inner">
<h3>{{ leaders.leaders }}</h3>
<p>Leaders</p>
</div>
<div class="icon">
<i class="fas fa-user-shield"></i>
</div>
<router-link to="/Chefprojet" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></router-link>
</div>
</div>
<!-- ./col -->
<div class="col-lg-3 col-6">
<!-- small box -->
<div class="small-box bg-danger">
<div class="inner">
<h3>{{ users.users }}</h3>
<p>Users</p>
</div>
<div class="icon">
<i class="fas fa-users"></i>
</div>
<router-link to="/membre" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></router-link>
</div>
</div>
<!-- ./col -->
</div>
<div class="row" v-if="currentUser.role!=='admin' && currentUser.role !=='client' ">
<div class="col-lg-4 col-9">
<!-- small box -->
<div class="small-box bg-info">
<div class="inner">
<h3>{{ projectusers.projects }}</h3>
<p>Projects</p>
</div>
<div class="icon">
<i class="fas fa-project-diagram"></i>
</div>
<router-link to="/projectemploye" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></router-link>
</div>
</div>
<!-- ./col -->
<!-- ./col -->
<div class="col-lg-4 col-9">
<!-- small box -->
<div class="small-box bg-warning">
<div class="inner">
<h3>{{ leaders.leaders }}</h3>
<p>Leaders</p>
</div>
<div class="icon">
<i class="fas fa-user-shield"></i>
</div>
<span class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></span>
</div>
</div>
<!-- ./col -->
<div class="col-lg-4 col-9">
<!-- small box -->
<div class="small-box bg-danger">
<div class="inner">
<h3>{{ users.users }}</h3>
<p>Users</p>
</div>
<div class="icon">
<i class="fas fa-users"></i>
</div>
<span class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></span>
</div>
</div>
<!-- ./col -->
</div>
<!-- /.row -->
<!-- Main row -->
<div class="row">
<!-- Left col -->
<section class="col-lg-6 connectedSortable ui-sortable">
<!-- Custom tabs (Charts with tabs)-->
<!-- /.card -->
<!-- DIRECT CHAT -->
<!--/.direct-chat -->
<!-- TO DO List -->
<div class="card" v-if="currentUser.role==='admin'">
<div class="card-header ui-sortable-handle" style="cursor: move;">
<h3 class="card-title">
<i class="ion ion-clipboard mr-1" ></i>
Projects
</h3>
<div class="card-tools">
</div>
</div>
<!-- /.card-header -->
<div class="card-body">
<table class="table table-bordered">
<thead>
<tr>
<th style="width: 10px">#</th>
<th>Projects</th>
<th>Progress</th>
</tr>
</thead>
<tbody>
<tr v-for="(stat, ind) in stats.projectstat.data" :key="ind" >
<td>{{ ind+1 }}</td>
<td>{{ stat.name }}</td>
<td>
<div class="progress progress-xs">
<div class="progress-bar progress-bar-danger" :style="{'width':`${parseInt(stat.progress)}%`}"></div>
</div>
</td>
<td><span v-if="`${parseInt(stat.progress)}`==100" class="badge bg-success" >{{ parseInt(stat.progress) }}%</span>
<span v-if="`${parseInt(stat.progress)}!=100`" class="badge bg-danger" >{{ parseInt(stat.progress) }}%</span></td>
</tr>
</tbody>
</table>
</div>
<!-- /.card-body -->
<div class="card-footer clearfix">
<pagination :data="stats.projectstat" @pagination-change-page="getResults"></pagination>
</div>
</div>
<div class="card">
<div class="card-header ui-sortable-handle" style="cursor: move;">
<h3 class="card-title">
<i class="ion ion-clipboard mr-1" v-if="currentUser.role==='admin'"></i>
Projects
</h3>
<div class="card-tools">
</div>
</div>
<!-- /.card-header -->
<div class="card-body" v-if="currentUser.role!=='admin'">
<table class="table table-bordered">
<thead>
<tr>
<th style="width: 10px">#</th>
<th>Projects </th>
<th>Progress</th>
</tr>
</thead>
<tbody v-if="currentUser.role!=='client'">
<tr v-for="(stat, ind) in Ustats.projectstat" :key="ind" >
<td>{{ ind+1 }}</td>
<td>{{ stat.name }}</td>
<td>
<div class="progress progress-xs">
<div class="progress-bar progress-bar-danger" :style="{'width':`${parseInt(stat.progress)}%`}"></div>
</div>
</td>
<td><span v-if="`${parseInt(stat.progress)}`==100" class="badge bg-success" >{{ parseInt(stat.progress) }}%</span>
<span v-if="`${parseInt(stat.progress)}`!=100" class="badge bg-danger" >{{ parseInt(stat.progress) }}%</span></td>
</tr>
</tbody>
<tbody v-if="currentUser.role==='client'">
<tr v-for="(stat, ind) in Cprojets.projects.data" :key="ind" >
<td>{{ ind+1 }}</td>
<td>{{ stat.name }}</td>
<td>
<div class="progress progress-xs">
<div class="progress-bar progress-bar-danger" :style="{'width':`${parseInt(stat.progress)}%`}"></div>
</div>
</td>
<td><span v-if="`${parseInt(stat.progress)}`==100" class="badge bg-success" >{{ parseInt(stat.progress) }}%</span>
<span v-if="`${parseInt(stat.progress)}`!=100" class="badge bg-danger" >{{ parseInt(stat.progress) }}%</span></td>
</tr>
</tbody>
</table>
</div>
<!-- /.card-body -->

<div class="card-footer clearfix" v-if="currentUser.role!=='client'">
<pagination :data="Cprojets.projects" @pagination-change-page="getResults1"></pagination>
</div>
<div class="card-footer clearfix" v-if="currentUser.role==='client'">
<pagination :data="Cprojets.projects" @pagination-change-page="getResults2"></pagination>
</div>

</div>
<!-- /.card -->
</section>
<div class="col-lg-3 col-6" v-if="currentUser.role === 'client'">
<!-- small box -->
<div class="small-box bg-info">
<div class="inner">
<h3>{{ projectsclient.projects }}</h3>
<p>Projects</p>
</div>
<div class="icon">
<i class="fas fa-project-diagram"></i>
</div>
<router-link to="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></router-link>
</div>
</div>
<div class="col-lg-3 col-6" v-if="currentUser.role === 'client'">
<!-- small box -->
<div class="small-box bg-success">
<div class="inner">
<h3>{{ complaintsclient.comp }}</h3>
<p>Complaints</p>
</div>
<div class="icon">
<i class="fas fa-user"></i>
</div>
<router-link to="/reclamation" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></router-link>
</div>
</div>
<section class="col-lg-6">
<div class="card" v-if="(currentUser.role !=='admin'  && currentUser.role !=='client' )">
<div class="card-header ui-sortable-handle" style="cursor: move;">
<h3 class="card-title">
<i class="ion ion-clipboard mr-1" ></i>
Tasks
</h3>
</div>
<!-- /.card-header -->
<div class="card-body" v-if="currentUser.role !=='admin'">
<table class="table table-bordered">
<thead>
<tr style="width:20px;">
<th style="width: 10px">#</th>
<th>Tasks </th>
<th>Progress</th>
</tr>
</thead>
<tbody>
<tr v-for="(stat, ind) in Utasks.tasks.data" :key="ind" >
<td>{{ ind+1 }}</td>
<td>{{ stat.text}}  
    <b v-for="(proj) in Ustats.projectstat"  :key="proj.id"  v-if="proj.id == stat.projet_id"> <small class="badge badge-success" style="float:right; color:#2d132c " > {{ proj.name }} </small></b>
</td>
<td>
<div class="progress progress-xs">
<div class="progress-bar progress-bar-danger" :style=" {'width':`${parseInt(100 * stat.progress)}%`}"></div>
</div>
</td>
<td><span v-if="`${parseInt(stat.progress*100)}`==100" class="badge bg-success" >{{ parseInt(100*stat.progress) }}%</span>
<span v-if="`${parseInt(100 * stat.progress)}`!=100" class="badge bg-danger" >{{parseInt(100 * stat.progress)}}%</span></td>
</tr>
</tbody>
</table>
</div>
<!-- /.card-body -->
<div class="card-footer clearfix">
<pagination :data="Utasks.tasks" @pagination-change-page="getResults1"></pagination>
</div>
</div>
<!-- solid sales graph -->
<!-- /.card -->
<!-- Calendar -->
<!-- /.card -->
</section>

<!-- /.Left col -->
<!-- right col -->
</div>
<div class="row">
<section class="col-lg-12 connectedSortable ui-sortable" v-if="currentUser.role ==='client'" >
<!-- Custom tabs (Charts with tabs)-->
<!-- /.card -->
<!-- DIRECT CHAT -->
<!--/.direct-chat -->
<!-- TO DO List -->
<div class="card">
<div class="card-header ui-sortable-handle" style="cursor: move;">
<h3 class="card-title">
<i class="ion ion-clipboard mr-1"></i>
Complaints
</h3>
<div class="card-tools">
</div>
</div>
<!-- /.card-header -->
<div class="card-body">
<table class="table table-bordered">
<thead>
<tr>
<th style="width: 10px">#</th>
<th>Complaints</th>
<th>Progress</th>
</tr>
</thead>
<tbody>
<tr v-for="(comp, ind) in comps.comp.data" :key="ind" v-if="comp.client_id === currentUser.id">
<td>{{ ind+1 }}</td>
<td>{{ comp.description }}
<b> <small class="badge badge-success" style="float:right; color:#2d132c " > {{ comp.nameProjet }} </small></b>
</td>
<td>
<div class="progress progress-xs">
<div class="progress-bar progress-bar-danger" :style="{'width':`${parseInt(comp.progress)}%`}"></div>
</div>
</td>
<td><span v-if="`${parseInt(comp.progress)}`==100" class="badge bg-success" >{{ parseInt(comp.progress) }}%</span>
<span v-if="`${parseInt(comp.progress)}`!=100" class="badge bg-danger" >{{ parseInt(comp.progress) }}%</span></td>
</tr>
</tbody>
</table>
</div>
<!-- /.card-body -->
<div class="card-footer clearfix">
</div>
</div>
<pagination :data="comps.comp" @pagination-change-page="getResults3"></pagination>
<!-- /.card -->
</section>

<!-- /.Left col -->
<!-- right col -->
</div>
<div class="row">
<section class="col-lg-12 connectedSortable ui-sortable" v-if="currentUser.role ==='chef de projet'" >
<!-- Custom tabs (Charts with tabs)-->
<!-- /.card -->
<!-- DIRECT CHAT -->
<!--/.direct-chat -->
<!-- TO DO List -->
<div class="card">
<div class="card-header ui-sortable-handle" style="cursor: move;">
<h3 class="card-title">
<i class="ion ion-clipboard mr-1"></i>
Complaints
</h3>
<div class="card-tools">
</div>
</div>
<!-- /.card-header -->
<div class="card-body">
<table class="table table-bordered">
<thead>
<tr>
<th style="width: 10px">#</th>
<th>Complaints</th>
<th>Progress</th>
</tr>
</thead>
<tbody>
<tr v-for="(comp, ind) in comps.comp.data" :key="ind" v-if="comp.chef_id === currentUser.id" >
<td>{{ ind+1 }}</td>
<td>{{ comp.description }}
<b> <small class="badge badge-success" style="float:right; color:#2d132c " > {{ comp.nameProjet }} </small></b>
</td>
<td>
<div class="progress progress-xs">
<div class="progress-bar progress-bar-danger" :style="{'width':`${parseInt(comp.progress)}%`}"></div>
</div>
</td>
<td><span v-if="`${parseInt(comp.progress)}`==100" class="badge bg-success" >{{ parseInt(comp.progress) }}%</span>
<span v-if="`${parseInt(comp.progress)}`!=100" class="badge bg-danger" >{{ parseInt(comp.progress) }}%</span></td>
</tr>
</tbody>
</table>
</div>
<!-- /.card-body -->
<div class="card-footer clearfix">
</div>
</div>
<pagination :data="comps.comp" @pagination-change-page="getResults3"></pagination>
<!-- /.card -->
</section>

<!-- /.Left col -->
<!-- right col -->
</div>
<!-- /.row (main row) -->
</div><!-- /.container-fluid -->
</section>
</div>
</template>
<script>
export default {
data(){
return{
id: this.$route.params.id,
projects:[],
leaders:[],
clients:[],
users:[],
projectsclient:[],
complaintsclient:[],
user:JSON.parse(localStorage.getItem('user')),
stats:{
projectstat:{}
},
Ustats:{
projectstat:{}
},
Utasks:{
tasks:{}
},
projectusers:[],
Cprojets:{
projects:{}
},
comps:{
comp:{}
}

}

},
created(){
let axiosConfig = {
headers: {
"Authorization": 'Bearer '+this.user['token']
}
};
axios.get('api/Nprojects',axiosConfig).then(({data}) => {this.projects=data});
axios.get('api/Nclients',axiosConfig).then(({data}) => {this.clients=data});
axios.get('api/Nleaders',axiosConfig).then(({data}) => {this.leaders=data});
axios.get('api/Nusers',axiosConfig).then(({data}) => {this.users=data});
axios.get('api/stats',axiosConfig).then(({data}) => {this.stats=data});
axios.get('api/Uprojects',axiosConfig).then(({data}) => {this.projectusers=data});
axios.get('api/Ustats',axiosConfig).then(({data}) => {this.Ustats=data});
axios.get('api/Utasks',axiosConfig).then(({data}) => {this.Utasks=data});
axios.get('api/Cprojets',axiosConfig).then(({data}) => {this.Cprojets=data});
axios.get('api/Ucomplaint',axiosConfig).then(({data}) => {this.comps=data});
axios.get('api/Nprojectsc',axiosConfig).then(({data}) => {this.projectsclient=data});
axios.get('api/NcomplaintsC',axiosConfig).then(({data}) => {this.complaintsclient=data});


},
methods:{
getResults(page = 1) {
          axios.get('api/stats?page=' + page)
                .then(response => {
                this.stats = response.data;
});},
getResults1(page = 1) {
          axios.get('api/Utasks?page=' + page)
                .then(response => {
                this.Utasks = response.data;
});},
getResults2(page = 1) {
          axios.get('api/Cprojets?page=' + page)
                .then(response => {
                this.Cprojets= response.data;
});},
getResults3(page = 1) {
          axios.get('api/Ucomplaint?page=' + page)
                .then(response => {
                this.comps= response.data;
});},

},
computed: {
currentUser() {
return this.$store.getters.currentUser
}
},
mounted() {
console.log('Component mounted.')
}
}
</script>