import userRepository from "../repositories/userRepository.js";

async function createUser(data){
    if(!data.name || !data.email) throw new Error("user name, email must be provided");
    return await userRepository.create(data);
}

async function getAllUsers(){
    // filtreleme veya diğer düzenlemeler gerekirse burada olabilir
    return await userRepository.getAll();
}


async function updateUser(id, data){
    if(!data || !id) throw new Error("Id and Data must be provided properly");
    return await userRepository.updateById(id, data);
}


async function deleteUser(id){
    if(!id) throw new Error("Id must be provided");
    return await userRepository.deleteById(id);
}



async function findUserById(id){
    if(!id) throw new Error("Id must be provided");
    return await userRepository.findById(id);
}




export {createUser, deleteUser, findUserById, updateUser, getAllUsers}