import supplier from "@/api/supplier";

export default {
    name: "index",
    data() {
        return {
            tableData: [],
            currentPage: 1,
            pageSize: 5,
            total: 0,
            editDialog: false,
            delDialog: false,
            formData: {},
            ids: []

        }
    },
    created() {
        this.findAll();
    },
    methods: {
        async findAll() {
            let response = await supplier.findAll(this.currentPage,this.pageSize);
            if (response.list.length != 0){
                this.tableData = response.list;
                this.total = response.total;
            }else {
                this.currentPage=this.currentPage-1;
                this.findAll();
            }

        },

        async addOrEdit() {
            if (this.formData.id){
                await supplier.updateEntity(this.formData);
            }else {
                await supplier.addEntity(this.formData);
            }
            this.findAll();
        },
        pageChange(page){
            console.log(page);
            this.currentPage = page;
            this.findAll()
        },

        async findById(id){
            this.formData = await supplier.findById(id);
        },

        selectionChangeListenter(selection){
            this.ids = [];
            selection.forEach(item=>this.ids.push(item.id));
        },
        async deleteByIds() {
            if (this.ids.length == 0){
                this.$notify.error({
                    title: '错误',
                    message: '请选择后再删除'
                })
            }else{
                await supplier.deleteByIds(this.ids);
                this.findAll();
            }
        }
    }
}