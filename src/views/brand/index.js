import brand from "@/api/brand";

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
            let response = await brand.findAll(this.currentPage,this.pageSize);
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
                await brand.updateEntity(this.formData);
            }else {
                await brand.addEntity(this.formData);
            }
            this.findAll();
        },
        pageChange(page){
            console.log(page);
            this.currentPage = page;
            this.findAll()
        },

        async findById(id){
            this.formData = await brand.findById(id);
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
                await brand.deleteByIds(this.ids);
                this.findAll();
            }
        }
    }
}