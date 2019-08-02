import axios from '../axios-base';

export const updatePfImg = (uri_user, pid_user) => axios.put(`/user_update_userimg/?uri_user=${uri_user}&pid_user=${pid_user}`,{uri_user,pid_user})