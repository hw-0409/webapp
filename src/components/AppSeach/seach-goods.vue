<template>
        <div class="seach-goods">
             <span>热门搜索</span>
            <ul class="sug-list">
                <li @click="seachHotBox" v-for="good in seachHot" :key="good.id" >{{good}}</li>
            </ul>
            <div class="sug-box">
                <span>搜索历史</span>
                <ul class="sug-list">
                    <li>酸奶</li>
                </ul>
                <div class="cleanHostory">清空历史</div>
            </div>
        </div>

</template>
<script>
export default {
        name:'seach-goods',
        props:['seachHot'],
        methods:{
            seachHotBox(){
                this.$router.push({name:'seachHot'})
            }
        }
}
</script>
<style lang="scss" scoped>
    .seach-goods{
        padding:.8rem .2rem 0 .2rem; 
       .sug-list{
          padding-bottom: .45rem;
          overflow: hidden;
           li{
               float: left;
                   border: solid 1px #e4e4e4;
                    background-color: #FFF;
                    border-radius: 7rem;
                    color: #000;
                    margin: .06rem .1rem .04rem 0;
                    padding: .1rem .2rem;
           }
           
       }
        span{
                color: #777;
            }
        .sug-box{
            .cleanHostory{
                    margin: 0 .45rem;
                    text-align: center;
                    height: .5rem;
                    line-height: .5rem;
                    font-size: .16rem;
                    color: #aaa;
                    border: solid 1px #e0e0e0;
                    border-radius: .05rem;
            }
        }
    }

</style>
