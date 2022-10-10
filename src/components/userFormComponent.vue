<template>
    <form @submit.prevent="onSubmitHandler($event)">
        <div class="form-group">
            <label for="fname">First name: </label>
            <input type="text" id="fname" name="fname" ref="fname" v-model="addUser.fname">
            <div v-if="errorfname" class="errors">The name is missing</div>
        </div>
        <div class="form-group">
            <label for="lname">Last name: </label>
            <input type="text" id="lname" name="lname" ref="lname" v-model="addUser.lname">
            <div v-if="errorlname" class="errors">The last name is missing</div>
        </div>
        <div class="form-group">
            <label for="age">Age: </label>
            <input type="number" id="age" name="age" ref="age" v-model="addUser.age">
            <div v-if="errorage" class="errors">The age is missing</div>
        </div>
        <button type="submit" class="btn btn-primary">Send</button>
        <button type="reset" class="btn btn-primary" value="clear">Clear</button>
    </form>
    <ListUsers @updateUser="updateUser" :editForm="users"></ListUsers>
</template>

<script>
import listUsersVue from './listUsers.vue';
import addUser from '../models/addUser';
import validation from '../validations/validUser';
import ListUsers from './listUsers.vue';

export default {
    name: "userFormComponent",
    data() {
        return {
            errorfname:true,
            errorlname:true,
            errorage:true,
            editUserID:-1,
            isUpdate:false,
            validName:'',
            users: [],
            addUser: new addUser(),
            errorName: ""
        };
    },
    watch: {
        'addUser.fname':function(){
            if (this.addUser.fname ==''){
                this.errorfname = true
            }else{
                this.errorfname = false
            }
        },
        'addUser.lname':function(){
            if (this.addUser.lname ==''){
                this.errorlname = true
            }else{
                this.errorlname = false
            }
        },
        'addUser.age':function(){
            if (this.addUser.age ==''){
                this.errorage = true
            }else{
                this.errorage = false
            }
        },

    },
    methods: {
        onSubmitHandler(e) {
            if (this.errorfname || this.errorlname || this.errorage) {
                alert('invalid form');
            } else {
                if (this.editUserID<0) {
                this.users.push(this.addUser);

            }else{
                this.users[this.editUserID]=this.addUser
                this.editUserID=-1
            }
            this.addUser = new addUser();  
            }
            
        },
        updateUser(item,i){
            this.addUser=item;
            this.editUserID=i
            this.isUpdate=true
        }
    },
    mounted(){
        this.validName = this.errorFname
        console.log(this.validName);
    },
    components: { ListUsers }
}

</script>

<style scoped>
.form-group {
    padding: 10px;
}

</style>