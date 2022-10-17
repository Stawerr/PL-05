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
        <tr v-for="(item) in getUsers">
            <td>{{item.fname}}</td>
            <td>{{item.lname}}</td>
            <td>{{item.age}}</td>
            <td>
                <button @click="editMode(item)">
                    Editar
                </button>
            </td>
        </tr>
    </table>  
    </div>
</template>

<script>
import { mapState } from 'pinia'
import {userStore} from '../../src/store/userStore'
export default {
    data () {
        // initialize the store
        const userStoreT = userStore()
        return {userStoreT}
    },
    computed: {
        ...mapState(userStore,['getUsers'])
    },
    methods:{
        editMode (item) {
           this.userStoreT.update(item);
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