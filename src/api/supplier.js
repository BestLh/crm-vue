import crm from "../utils/baseAxios";

let supplier = {
    /*findAll*/
    findAll(currentPage, pageSize) {
        return crm.get(`supplier?currentPage=${currentPage}&pageSize=${pageSize}`);
    },

    /*findById*/
    findById(id){
        return crm.get(`supplier/${id}`);
    },

    /*添加*/
    addEntity(entity){
        return crm.post(`supplier`,entity);
    },

    /*修改*/
    updateEntity(entity){
        return crm.put(`supplier`,entity);
    },

    /*删除*/
    deleteByIds(ids){
        return crm.delete(`supplier/${ids}`);
    }

}

export default supplier;