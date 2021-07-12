<template>
  <div class="">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Firstname</th>
          <th scope="col">Lastname</th>
          <th scope="col">Email</th>
          <th scope="col">Phone Number</th>
          <th scope="col">Address</th>
          <th scope="col">City</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(customer, index) in customers" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ customer.firstname }}</td>
          <td>{{ customer.lastname }}</td>
          <td>{{ customer.email }}</td>
          <td>{{ customer.phone }}</td>
          <td>{{ customer.address }}</td>
          <td>{{ customer.city }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'CustomerDetails',
  props: {
    msg: String,
  },
  data() {
    return {
      customers: [],
    };
  },
  mounted() {
    this.getCustomers();
  },
  methods: {
    async getCustomers() {
      await axios
        .get('/api/customers')
        .then((res) => {
          this.customers = res.data;
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
