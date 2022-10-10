<template>
    <div>
    <table id="customers">
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Action</th>
            </tr>
        </thead>
        <tr v-for="(item,i) in editForm">
            <td>{{item.fname}}</td>
            <td>{{item.lname}}</td>
            <td>{{item.age}}</td>
            <td>
                <a href="#" @click="editMode(item,i)">
                    Editar
                </a>
            </td>
        </tr>
    </table>   
    </div>
</template>

<script>
export default {
    props:['editForm'],
    setup () {
        
        return {}
    },
    methods:{
        editMode (item,i) {
           this.$emit('updateUser',item,i) 
        }
    }
}
</script>

<style scoped>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  margin-top: 30px;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #4e4444;}

#customers tr:hover {background-color: rgb(14, 156, 192);}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}
</style>