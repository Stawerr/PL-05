<template>
    <form @submit.prevent="enviar(user)">
        <div class="form-group">
            <label for="fname">First name: </label>
            <input type="text" id="fname" name="fname" v-model="addUser.fname">
        </div>
        <div class="form-group">
            <label for="lname">Last name: </label>
            <input type="text" id="lname" name="lname" v-model="addUser.lname">
        </div>
        <div class="form-group">
            <label for="age">Age: </label>
            <input type="number" id="age" name="age" v-model="addUser.age">
        </div>
        <button type="submit" class="btn btn-primary">Send</button>
    </form>
</template>

<script>
import addUser from '../models/addUser';
export default {
    name: 'userFormComponent',
    data() {
        return {
            addUser: new addUser()
        }
    },
    methods: {

    }
}

</script>

<style scoped>
.form-group {
    padding: 10px;
}

</style>