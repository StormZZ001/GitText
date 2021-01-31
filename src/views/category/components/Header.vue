<template>
    <div class="header">
      <div class="searchBox">
        <div class="iconSearchWrapper"><svg  viewBox="0 0 32 32" class="icon iconSearch"><path data-v-0ee2eb66="" fill="#999" fill-rule="evenodd" d="M23.624 21.503c3.47-4.51 3.14-11.003-.992-15.135-4.491-4.49-11.773-4.49-16.264 0-4.49 4.491-4.49 11.773 0 16.264 4.132 4.131 10.625 4.462 15.135.992l4.66 4.66a1.5 1.5 0 1 0 2.121-2.121l-4.66-4.66zm-3.114-.993A8.5 8.5 0 1 0 8.49 8.49a8.5 8.5 0 0 0 12.02 12.02z"></path></svg></div>
        <input type="text" class="searchInput" placeholder="输入商品名称"/>
      </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
    .header{
      position: fixed;
      width: 100%;
      top: 0;
      left: 0;
      background-color: #fff;
      padding: .5rem .625rem;
      border-bottom: 1px solid #e6e6e6;
      z-index: 2;
    }
    .searchBox{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 1,75rem;
      line-height: 1.75rem;
      background-color: #f2f2f2;
      border-radius: 3.125rem;
    }
    .icon{
      width: 1.5rem;
      height: 1.5rem;
    }
    .searchInput{
      width: 90%;
      height: 100%;
      background-color: #f2f2f2;
      border-radius: 3.125rem;
    }
    .iconSearchWrapper{
      position: relative;
      top: 5px;
      left: 5px;
    }
</style>