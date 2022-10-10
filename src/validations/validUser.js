import addUser from "../models/addUser";

export default function validation(addUser){
    let errorFname= ''
    let errorLname= ''
    let errorAge= ''

    errorFname= validateFname(addUser.fname)
    errorLname= validateLname(addUser.lname)
    errorAge= validateAge(addUser.age)

    return errorAge, errorFname, errorLname
}

function validateFname(fname){
    if(fname == null || fname ===''){
        return "First name is required"
    }
}
function validateLname(lname){
    if(lname == null || lname ===''){
        return "Last name is required"
    }
    
}
function validateAge(age){
    if(age == null || age ===''){
        return "Age is required"
    }
    
}