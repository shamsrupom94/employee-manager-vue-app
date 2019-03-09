<template>
  <div class="profile container">
    <div class="card light-grey ">
    <div class="card-content">
      <h2 class="card-title">Profile of {{ employee.name }} </h2>
      <table>
   <tbody>
      <tr>
         <td><b> Name </b>: </td>
         <td> {{employee.name}} </td>
      </tr>
      <tr>
         <td><b> Department:</b> </td>
         <td> <span class="chip"> {{employee.dept}}</span> </td>
      </tr>
      <tr>
         <td><b> Position </b>: </td>
         <td> {{employee.postion}} </td>
      </tr>
      <tr>
         <td><b> About </b>: </td>
         <td> {{employee.about}} </td>
      </tr>
      
   </tbody>
</table> 
 <button class="btn-floating btn-large halfway-fab red deletebutt" @click="deleteEmployee(employee.id)" ><i class="material-icons">delete</i></button>
 <router-link :to="{ name:'EditEmployee', params:{ employee_id: employee.e_id }}">
 <button class="btn-floating btn-large halfway-fab red"><i class="material-icons">edit</i></button>
 </router-link>     
</div>
</div>
</div>

</template>

<script>
import Database from '@/firebase/init'
export default {
  name: 'Profile',
  components: {
  },
  data () {
    return {
      employee: null,
      modal: false
    }
  },
  methods:{
    deleteEmployee(id){
        console.log("Somethings")
        Database.collection('employee').doc(id).delete().then(()=>{
            this.$router.push({ name: 'Dashboard'})
        })
    },
    appear(){
        this.modal = true
    }
  },
  created()
  {
      let reference = Database.collection('employee').where('e_id', '==', this.$route.params.employee_id)
      reference.get().then(snapshot =>{
          snapshot.forEach(doc => {
             this.employee = doc.data()
             this.employee.id = doc.id
          });
      })

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.profile h2{
    padding: 20px 20px;
    font-size: 2.5em;
    text-align: center;
}
.profile {
    padding: 20px 0;
    max-width: 500px;
    margin-bottom: 50px;
}
.profile .deletebutt{
    bottom: -28px;
    right: 100px;
}


</style>
