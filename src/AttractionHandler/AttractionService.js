import axios from "axios";

const USER_API_BASE_URL = "http://localhost:9090"


class AttractionService {
    
    addAttraction(data){
        return axios.post(USER_API_BASE_URL+'/addattraction',data);
    }

    getAllAttractions(){
        return axios.get(USER_API_BASE_URL+"/getallattractions");
    }

    searchAttractionByKeyword(name){
        return axios.get(USER_API_BASE_URL+"/getattractionbyname/"+name);
    }

    getAllAttractionsByRatings(ratings){
        return axios.get(USER_API_BASE_URL+"/getallattractionsbyratings/"+ratings);
    }

    getAllAttractionsByLikes(likes){
        return axios.get(USER_API_BASE_URL+"/getallattractionsbylikes/"+likes);
    }

    getAllAttractionsByReports(reports){
        return axios.get(USER_API_BASE_URL+"/getattractionbyreports/"+reports);
    }

    searchAttractionByKeyword(key){
        return axios.get(USER_API_BASE_URL+"/searchbykeywordattraction/"+key);
    }

    deleteAttraction(id){
        return axios.delete(USER_API_BASE_URL+"/deleteattractions/"+id);
    }

    getAllAttractionsByType(type){
        return axios.get(USER_API_BASE_URL+"/getattractionsoftype/"+type);
    }

    getAllAttractionsByUser(id){
        return axios.get(USER_API_BASE_URL+"/findallattractionsbyuser/"+id);
    }

    likeAttraction(id, uid){
        return axios.put(USER_API_BASE_URL+"/likeattraction/"+id+"/"+uid);
    }

    reportAttraction(id, uid){
        return axios.put(USER_API_BASE_URL+"/reportattraction/"+id+"/"+uid);
    }


}

export default new AttractionService()

