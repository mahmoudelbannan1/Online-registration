import axios from "axios";
import api from '@/database/api'

export default {
    login (user){
        return api().post('',user)
    }
}