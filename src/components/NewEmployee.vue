<template>
  <div class="new-employee container">
    <h2>Add New Employee</h2>
    <form @submit.prevent="addEmployee">
     <div class="row">
       <div class="input-field col s12">
         <label for="id">Employee ID</label><br>
         <input type="text" name="id" v-model="e_id" required>
        
       </div>
     </div>
     <div class="row">
       <div class="input-field col s12">
         <label>Employee Name</label><br>
         <input type="text" v-model="name" required>
        
       </div>
     </div>
     <div class="row">
       <div class="input-field col s12">
          <label>Department</label><br>
         <input type="text" v-model="dept" required>
       </div>
       </div>
       <div class="row">
       <div class="input-field col s12">
         <label>Position</label><br>
         <input type="text" v-model="postion" required>    
       </div>
       </div>
       <div class="row">
       <div class="input-field col s12">
         <label>About</label><br>
         <input type="text" v-model="about" required> 
       </div>
     </div>
    
     <div class="row">  
        <div class="col s6 left-align">   
          <router-link :to="{name: 'Dashboard'}">    
               <button class="btn red">Cancel</button>
          </router-link>
        </div>
        <div class="col s6 right-align">       
              <button class="btn light-green">Add Employee</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Database from '@/firebase/init'
export default {
  name: 'NewEmployee',
  data () {
    return {
      e_id: null,
      name:null,
      dept:null,
      postion:null,
      about:null
      
    }
  },
  methods:{
    addEmployee(){
      Database.collection('employee').add({
        e_id: this.e_id,
        name: this.name,
        dept: this.dept,
        postion: this.postion,
        about: this.about
      }).then(()=>{
        this.$router.push({name:'Dashboard'})
      }).catch(err =>{
                  console.log(err)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.new-employee{
  max-width: 500px;
}
.new-employee h2{
  text-align: center;
  font-size: 2em;
}
</style>
