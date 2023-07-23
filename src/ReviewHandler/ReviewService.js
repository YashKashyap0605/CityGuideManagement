import axios from "axios";

const USER_API_BASE_URL = "http://localhost:9090"


class ReviewService {
    
    addReview(data){
        return axios.post(USER_API_BASE_URL+'/addreview',data);
    }


    deleteReview(id){
        return axios.delete(USER_API_BASE_URL+"/deletereview/"+id);
    }


    getAllReviewsUnderAttraction(id){
        return axios.get(USER_API_BASE_URL+"/findallreviewsbyattraction/"+id);
    }

    likeReview(id ,username){
        return axios.put(USER_API_BASE_URL+"/likereview/"+id+"/"+username);
    }

    reportReview(id, username){
        return axios.put(USER_API_BASE_URL+"/reportreview/"+id+"/"+username);
    }


}

export default new ReviewService()

