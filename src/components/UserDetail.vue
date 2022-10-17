<template>
    <form @submit.prevent="onSubmitHandler($event)" @reset="resetForm">
        <div class="form-group">
            <label for="fname">First name: </label>
            <input type="text" id="fname" name="fname" ref="fname" v-model="addUser.fname">
            <div v-if="form.firstNameError" class="errors">The name is missing</div>
        </div>
        <div class="form-group">
            <label for="lname">Last name: </label>
            <input type="text" id="lname" name="lname" ref="lname" v-model="addUser.lname">
            <div v-if="form.lastNameError" class="errors">The last name is missing</div>
        </div>
        <div class="form-group">
            <label for="age">Age: </label>
            <input type="number" id="age" name="age" ref="age" v-model="addUser.age">
            <div v-if="form.ageError" class="errors">The age is missing</div>
        </div>
        <button type="submit" class="btn btn-primary" :value="changeTitleButoon">Send</button>
        <button type="reset" class="btn btn-primary" value="clear">Clear</button>
    </form>
</template>
<script>
import addUser from '../models/addUser';
import isEmptyValue from '../validations/validUser';
import {userStore} from '../store/userStore'
import { mapActions } from 'pinia'
import UsersVue from './Users.vue';

export default {
    setup() {
    // initialize the store
    const userStoreT = userStore()
    return {userStoreT}
  },
    name: "userFormComponent",
    data() {
        return {
            buttonTile: 'Send',
            editUserID:-1,
            isUpdate:false,
            addUser:this.userStoreT.getUserEdit ? this.userStoreT.getUserEdit : new addUser(),
            form:{
                firstNameError: false,
                lastNameError: false,
                ageError: false,
                genderError: false
            }
        };
    },
    watch: {
        'addUser.fname': function () {
            if (isEmptyValue.exec(this.addUser.fname))
                this.form.firstNameError = true
            else
                this.form.firstNameError = false
        },
        'addUser.lName': function () {
            if (isEmptyValue.exec(this.addUser.lname))
                this.form.lastNameError = true
            else
                this.form.lastNameError = false
        },
        'addUser.age': function () {
            if (isEmptyValue.exec(this.addUser.age))
                this.form.ageError = true
            else
                this.form.ageError = false
        },
    },
    computed: {
        getUsers(){
            return this.userStoreT.getUsers
        },
        changeTitleButoon(){
            return this.addUser.id ? 'Update' :'Send'
        },
    },
    methods: {
        onSubmitHandler(e) {
            Object.entries(this.addUser).forEach(user => {
                const [key, value] = user
                if (isEmptyValue.exec(value) && key != 'id')
                    this.form[`${key}Error`] = true
            });
            if (Object.values(this.form).some(value => value == true))
                return
                if(this.addUser.id){
                    this.userStoreT.update(this.addUser)
                    this.resetForm()
                }
                else{
                    this.userStoreT.add(this.addUser)
                    this.resetForm()
                }
            },
            resetForm() {
                this.addUser = new addUser();
                this.userStoreT.cleanEdit();
                    this.form.firstNameError= false;
                    this.form.lastNameError= false;
                    this.form.ageError= false;
                    this.form.genderError= false
                this.form = {}
            },
        },
}

</script>

<style scoped>
.form-group {
    padding: 10px;
}

</style>