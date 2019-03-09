<template>
  <div class="edit-employee container">
     <h2>Update {{employee.name }}'s Profile</h2>
     <form @submit.prevent="updateEmployee">
     <div class="row">
       <div class="input-field col s12">
         <label for="id">Employee ID</label><br>
         <input type="text" name="id" v-model="employee.e_id" required>   
       </div>
     </div>
     <div class="row">
       <div class="input-field col s12">
         <label>Employee Name</label><br>
         <input type="text" v-model="employee.name" required>
        
       </div>
     </div>
     <div class="row">
       <div class="input-field col s12">
          <label>Department</label><br>
         <input type="text" v-model="employee.dept" required>
       </div>
       </div>
       <div class="row">
       <div class="input-field col s12">
         <label>Position</label><br>
         <input type="text" v-model="employee.postion" required>    
       </div>
       </div>
       <div class="row">
       <div class="input-field col s12">
         <label>About</label><br>
         <input type="text" v-model="employee.about" required> 
       </div>
     </div>
    
     <div class="row">  
        <div class="col s6 left-align">   
          <router-link :to="{ name:'Profile',params:{employee_id:employee.e_id}}">    
               <button class="btn red">Cancel</button>
          </router-link>
        </div>
        <div class="col s6 right-align">       
              <button class="btn light-green">Update Info</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Database from '@/firebase/init'
export default {
  name: 'EditEmployee',
  data () {
    return {
      employee:null
      
    }
  },
  methods:{
   updateEmployee(){
              Database.collection('employee').doc(this.employee.id).update({
                  e_id: this.employee.e_id,
                  name: this.employee.name,
                  dept: this.employee.dept,
                  postion: this.employee.postion,
                  about: this.employee.about
              }).then(()=>{
                  this.$router.push({ name:'Dashboard'})
              }).catch(err =>{
                  console.log(err)
              })
   }
  },
  created(){
       Database.collection('employee').where('e_id','==',this.$route.params.employee_id).get().then(snapshot=>{
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
.edit-employee{
  max-width: 500px;
}
.edit-employee h2{
  text-align: center;
  font-size: 2em;
}
</style>
