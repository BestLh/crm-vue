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
            prop="brandName"
            label="品牌名称"
            >
        </el-table-column>
        <el-table-column
            align="center"
            prop="brandDesc"
            label="品牌描述"
            >
        </el-table-column>
        <el-table-column
            align="center"
            prop="brandSite"
            label="品牌站点"
            >
        </el-table-column>
        <el-table-column
            align="center"
            prop="brandLogo"
            label="品牌logo"
            >
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
        <el-form-item label="品牌名称">
          <el-input v-model="formData.brandName"></el-input>
        </el-form-item>
        <el-form-item label="品牌描述">
          <el-input v-model="formData.brandDesc"></el-input>
        </el-form-item>
        <el-form-item label="品牌站点">
          <el-input v-model="formData.brandSite"></el-input>
        </el-form-item>
        <el-form-item label="品牌logo">
          <el-input v-model="formData.brandLogo"></el-input>
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