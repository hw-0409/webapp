<template>
  <div class="position-addres">
        <ul>
            <li>
                <div class="person-info">
                    <p class="person-name">张三   {{info}}</p>
                    <p  class="person-addres">{{address}}</p>
                </div>
                <div class="exit">
                    <span class="yo-ico">&#xf04a;</span>
                </div>
            </li>
        </ul>
    
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name:'position-addres',
    computed:{
        ...mapState(["address","info"])
    }
}
</script>