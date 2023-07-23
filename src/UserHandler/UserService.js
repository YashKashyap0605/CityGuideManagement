import axios from "axios";

const USER_API_BASE_URL = "http://localhost:9090"


class UserService {

    loginUser(email,password){
        return axios.get(USER_API_BASE_URL+"/login/"+email+"/"+password);
    }
    
    registerUser(data){
        return axios.post(USER_API_BASE_URL+"/adduser",data);
    }

    searchUserByName(key){
        return axios.get(USER_API_BASE_URL+"/searchbykeyword/"+key);
    }

    searchUserByUserName(key){
        return axios.get(USER_API_BASE_URL+"/getuserbyusername/"+key);
    }

    searchUserByEmail(key){
        return axios.get(USER_API_BASE_URL+"/getuserbyemail/"+key);
    }

    deleteUser(id){
        return axios.delete(USER_API_BASE_URL+"/deleteuser/"+id);
    }

   
}

export default new UserService()

