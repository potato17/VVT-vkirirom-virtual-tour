<template>
<div id="app">
    
    <NavBar/>   
    <Test/>  
    <AppFooter/> 

</div>
</template>
<script>
import AppFooter from './AppFooter'
import NavBar from './NavBar'
import Test from './Test' 

export default {
 name:'Home',
 components:{NavBar,AppFooter,Test}
    
}
</script>