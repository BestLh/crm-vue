import crm from "../utils/baseAxios";

let brand = {
    /*findAll*/
    findAll(currentPage, pageSize) {
        return crm.get(`brand?currentPage=${currentPage}&pageSize=${pageSize}`);
    },

    /*findById*/
    findById(id){
        return crm.get(`brand/${id}`);
    },

    /*添加*/
    addEntity(entity){
        return crm.post(`brand`,entity);
    },

    /*修改*/
    updateEntity(entity){
        return crm.put(`brand`,entity);
    },

    /*删除*/
    deleteByIds(ids){
        return crm.delete(`brand/${ids}`);
    }

}

export default brand;