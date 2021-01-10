import crm from "../utils/baseAxios";

let category = {

    getTreeData() {
        return crm.get(`category/getTreeData`);
    },

    /*findAll*/
    findAll(currentPage, pageSize) {
        return crm.get(`category?currentPage=${currentPage}&pageSize=${pageSize}`);
    },

    /*findById*/
    findById(id){
        return crm.get(`category/${id}`);
    },

    /*添加*/
    addEntity(entity){
        return crm.post(`category`,entity);
    },

    /*修改*/
    updateEntity(entity){
        return crm.put(`category`,entity);
    },

    /*删除*/
    deleteByIds(ids){
        return crm.delete(`category/${ids}`);
    }

}

export default category;