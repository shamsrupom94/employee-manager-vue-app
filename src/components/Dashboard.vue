<template>
  <div class="dashboard container">
     <h3>Dashboard</h3>
     <div class="row">
       <div class="input-field col s12">
         <label for="id">Search by Name</label><br>
         <input type="text" name="id" v-model="search">   
       </div>
     </div>
    <table>
        <tr>
        <th>Name</th>
        <th>Department</th>
        <th>Position</th>
        <th>See Profile</th>
        </tr>
    <tbody>    
      <tr v-for="employee in filteredEmployees" :key="employee.e_id">  
        <td>{{ employee.name }}</td>
        <td><span class="chip">{{ employee.dept }}</span></td>
        <td>{{ employee.postion }}</td>
        <td><router-link :to="{ name:'Profile',params:{ employee_id: employee.e_id }}">
          <i class="material-icons"> contacts</i>
          </router-link></td>
    </tr>
    </tbody>
    </table>
  </div>
</template>

<script>
import Database from '@/firebase/init'
export default {
  name: 'Dashboard',
  data () {
    return {
      employees:[],
      search:''   
    }
  },
  created(){
    Database.collection('employee').get().then( snapshot =>{
      snapshot.forEach(doc => {
        console.log(doc.data(), doc.id)
        let employee = doc.data()
        employee.id = doc.id
        this.employees.push(employee)
      });
    })

  },
  computed:{
    filteredEmployees: function(){
      return this.employees.filter((employee)=>{
        return employee.name.match(this.search);
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dashboard{
  max-width: 700px;
}
</style>
