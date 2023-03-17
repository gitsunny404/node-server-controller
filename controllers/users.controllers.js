let users = [];
// user format data
// users = {
//     id : 0,
//     name : '',
//     email : '',
//     phone : ''
// }
export const getAllusers = (req, res)=>{
    console.log("User Page Get method");
    // res.send("User Page");
    res.send(users);
};

export const createUser = (req, res)=>{
    const newUser = req.body;
    users.push(newUser);
    res.send(`User is added of name ${req.body.name} successfully....`)
    console.log("New User has been added..");
};

export const getOneuser = (req, res)=>{
    // console.log("Get user by ID");
    const { id } = req.params;
    // console.log(id);
    const newUsers = users.find((user)=> user.id == id);
    // console.log(newUsers);
    res.send(newUsers);
};

export const deleteUser = (req, res)=>{
    const { id } = req.params;
    console.log("Delete method is called... ");
    console.log(id);
    users = users.filter((user) => user.id != id);
    console.log(users);
    res.send(`User with the user id : ${id} has been deleted successfully ...`);
};

export const updateUser = (req, res)=>{
    const { id } = req.params;
    const { name , email, phone } = req.body;
    const user = users.find((user)=> user.id ==id);
    if(name){
        user.name = name;
    }
    if(email){
        user.email = email;
    }
    if(phone){
        user.phone = phone;
    }
    res.send(`User with the id : ${id} has been updated`)
};