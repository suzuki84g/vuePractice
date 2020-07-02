<template>
  <div class="container">
      <product-header
          v-bind:count="filteredList.length"
          v-bind:showSaleItem="showSaleItem"
          v-bind:showDelvFree="showDelvFree"
          v-bind:sortOrder="sortOrder"
          v-on:showSaleItemChanged="showSaleItem=!showSaleItem"
          v-on:showDelvFreeChanged="showDelvFree=!showDelvFree"
          v-on:sortOrderChanged="sortOrderChanged"
      >
      </product-header>
      <div class="list">
          <product
              v-for="product in filteredList"
              v-bind:product="product"
              v-bind:key="product.id">
          </product>
      </div>
  </div>
</template>

<script>
import productHeader from './product-header.vue';
import product from './product.vue'

export default {
  
}
</script>