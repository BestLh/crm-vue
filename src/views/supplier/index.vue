<template>
  <div class="entity-box">
   <div class="execute-box">
     <el-button-group>
       <el-button type="primary" plain size="mini" @click="editDialog=true,formData={}">新建</el-button>
       <el-button type="danger" plain size="mini" @click="delDialog=true">删除</el-button>
     </el-button-group>

   </div>

    <div class="search-box">
      <!--搜索-->
    </div>
    <div class="table-box">
      <!--stripe隔行变色-->
      <el-table
          ref="dataTable"
          stripe
          tooltip-effect="dark"
          border
          :data="tableData"
          @selection-change="selectionChangeListenter"
          style="width: 100%">
        <el-table-column
            type="selection"
            width="55">
        </el-table-column>
        <el-table-column
            align="center"
            prop="id"
            label="id"
            >
        </el-table-column>
        <el-table-column
            align="center"
            prop="supplierName"
            label="运营商名称"
            >
        </el-table-column>
        <el-table-column
            align="center"
            prop="supplierContact"
            label="联系人"
            >
        </el-table-column>
        <el-table-column
            align="center"
            prop="supplierPhone"
            label="联系方式"
            >
        </el-table-column>
        <el-table-column
            align="center"
            prop="supplierEmail"
            label="联系邮箱"
            >
        </el-table-column>
        <el-table-column
            align="center"
            prop="supplierBank"
            label="开户行"
            >
        </el-table-column>
        <el-table-column
            align="center"
            prop="supplierAddress"
            show-overflow-tooltip
            label="地址">
        </el-table-column>

        <el-table-column
            align="center"
            label="操作">
          <template v-slot="obj">
            <el-button size="mini" type="primary" @click="editDialog = true,findById(obj.row.id)">编辑</el-button>
            <el-button size="mini" type="danger" @click="delDialog = true,$refs.dataTable.clearSelection(),ids=[],ids.push(obj.row.id)">删除</el-button>
          </template>

        </el-table-column>
      </el-table>
    </div>

    <div class="page-box">
      <el-pagination
          background
          layout="prev, pager, next"
          :current-page="currentPage"
          :page-size="pageSize"
          @current-change="pageChange"
          :total="total">
      </el-pagination>
    </div>

    <!--新建或者编辑弹出框-->
    <el-dialog
        title="实体操作"
        :visible.sync="editDialog"
        width="40%">
      <el-form ref="form" label-width="100px" size="small">
        <el-form-item label="运营商名称">
          <el-input v-model="formData.supplierName"></el-input>
        </el-form-item>
        <el-form-item label="联系人">
          <el-input v-model="formData.supplierContact"></el-input>
        </el-form-item>
        <el-form-item label="联系方式">
          <el-input v-model="formData.supplierPhone"></el-input>
        </el-form-item>
        <el-form-item label="联系邮箱">
          <el-input v-model="formData.supplierEmail"></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="formData.supplierAddress"></el-input>
        </el-form-item>
        <el-form-item label="开户行">
          <el-input v-model="formData.supplierBank"></el-input>
        </el-form-item>
        <el-form-item label="银行卡号">
          <el-input v-model="formData.supplierBankCode"></el-input>
        </el-form-item>
      </el-form>



      <span slot="footer" class="dialog-footer">
    <el-button @click="editDialog = false" size="mini">取 消</el-button>
    <el-button type="success" @click="editDialog = false,addOrEdit()" size="mini">确 定</el-button>
  </span>
    </el-dialog>

    <!--删除弹框-->
    <el-dialog
        title="温馨提示"
        :visible.sync="delDialog"
        width="30%">
      <span>确定要删除吗？{{ids}}</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="delDialog = false" size="mini">取 消</el-button>
    <el-button type="danger" @click="delDialog = false,deleteByIds()" size="mini">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script src="./index.js">
</script>

<style scoped lang="less">
@import "./index";
</style>