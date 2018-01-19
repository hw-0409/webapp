<template>
  <div class="position-addres">
        <ul>
            <li :key='item.id' v-for="(item,i) in infoAddress" >
                <span class="mark" v-if="item.isShow"></span>  
                <div class="person-info" @click="isGOShow({id:item.id})">
                    <p class="person-name">{{item.person}}    {{item.phone}}</p>
                    <p  class="person-addres">{{item.meryaddress}}&nbsp;&nbsp;&nbsp;{{item.detailaddress}}</p>
                </div>
                <div class="exit">
                    <span class="yo-ico">&#xf04a;</span>
                </div>
            </li>
        </ul>
    
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
    name:'position-addres',
    data(){
        return{
        }
    },
    computed:{
        ...mapState(["address","info",'infoAddress']),
    },
    methods:{
        ...mapActions(["isShou"]),
        isGOShow(id){
            this.isShou(id)
            this.$router.go(-1)
        }
        
    },
}
</script>

<style lang="scss" scoped>
    .mark{
        margin-top: 2%;
        height: 85%;
        width: 5px;
        background: #ffd600;
        border-radius: 0 5px 5px 0;
    }
</style>
