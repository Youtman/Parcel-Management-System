<template>
  <div class="container">
    <h3>Customer Details:</h3>
    <button class="btn btn-primary btn-md mt-2 mb-3">
      <a href="/addcustomer">Add Customer</a>
    </button>
    <CustomerDetails />
    <button class="btn btn-primary btn-md mt-3 mb-2">
      <a href="/">Logout</a>
    </button>
  </div>
</template>

<script>
import CustomerDetails from '@/components/CustomerDetails.vue';

export default {
  name: 'Home',
  components: {
    CustomerDetails,
  },
};
</script>
<style lang="scss" scoped>
a {
  color: #fff;
  text-decoration: none;
}
</style>
