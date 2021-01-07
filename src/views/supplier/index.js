import supplier from "@/api/supplier";

export default {
    name: "index",
    data() {
        return {
            tableData: [],
            currentPage: 1,
            pageSize: 5,
        }
    },
    created() {
        this.findAll();
    },
    methods: {
        async findAll() {
            let response = await supplier.findAll(this.currentPage,this.pageSize);
            this.tableData = response.list;
            this.total = response.total;
        }
    }
}