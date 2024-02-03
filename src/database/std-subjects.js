import api from '@/database/api'

export default {
    stdsubjects (){
        return api().get('user-dashboard')
    }
}