<template>
  <div class="entity-box">
   <div class="execute-box">
     <el-button-group>
       <el-button type="primary" plain size="mini">新建</el-button>
       <el-button type="danger" plain size="mini">删除</el-button>
     </el-button-group>

   </div>

    <div class="search-box">
      <!--搜索-->
    </div>
    <div class="table-box">
      <!--stripe隔行变色-->
      <el-table
          stripe
          tooltip-effect="dark"
          border
          :data="tableData"
          style="width: 100%">
        <el-table-column
            type="selection"
            width="55">
        </el-table-column>
        <el-table-column
            align="center"
            prop="date"
            label="日期"
            width="180">
        </el-table-column>
        <el-table-column
            align="center"
            prop="name"
            label="姓名"
            width="180">
        </el-table-column>
        <el-table-column
            align="center"
            prop="address"
            show-overflow-tooltip
            label="地址">
        </el-table-column>

        <el-table-column
            align="center"
            label="操作">
          <template>
            <el-button size="mini" type="primary">编辑</el-button>
            <el-button size="mini" type="danger">删除</el-button>
          </template>

        </el-table-column>
      </el-table>
    </div>

    <div class="page-box">
      <el-pagination
          background
          layout="prev, pager, next"
          :total="1000">
      </el-pagination>
    </div>

  </div>
</template>

<script src="./index.js">
</script>

<style scoped lang="less">
@import "./index";
</style>