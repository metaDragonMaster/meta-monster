<template>
    <div class="recruit-details-view">
        <el-table :data="tableData" style="width: 100%">
            <el-table-column align="center" header-align="center" prop="date" label="Date" width="180" />
            <el-table-column align="center" header-align="center" prop="name" label="Name" width="180" />
            <el-table-column align="center" header-align="center" prop="address" label="Address" />
        </el-table>
    </div>
</template>

<script setup>
const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
]
</script>
<style lang='scss' scoped>
.recruit-details-view {
    min-height: 100vh;
    :deep(.el-table) {
        background-color: transparent;
        // .el-table--enable-row-hover .el-table__body 
        tr:hover > td {
            background-image: linear-gradient(180deg, #4374D4 30%, #f40bff) ;
            background-color: transparent;
        }
        tr,
        th.el-table__cell {
            background-color: transparent;
            color: #ffffff;
        }
        td.el-table__cell,
        th.el-table__cell.is-leaf {
            border-bottom: 0;
        }
        .el-table__inner-wrapper::before {
            //去掉 列表最下面的白边
            display: none;
        }
        .el-table__header-wrapper {
            position: relative;
            &::after {
                position: absolute;
                bottom: 0;
                content: '';
                display: block;
                height: 4px;
                width: 100%;
                background-image: linear-gradient(90deg, transparent, #f40bff,transparent );

            }
            .el-table__cell .cell {
                background-image: linear-gradient(180deg, #fff 40%, #f40bff);
                background-clip: text;
                color: transparent;
                font-weight: bold;
                font-size: 24px;
            }
        }
        .el-table__body-wrapper {
            // color: #ffffff;
            .el-table__row:hover {
                background-color: rgba($color: #000000, $alpha: 0.3);
            }
            .el-table__row:last-child > td {
                border-bottom: 0;
            }
        }
    }
}
</style>
<style>
</style>