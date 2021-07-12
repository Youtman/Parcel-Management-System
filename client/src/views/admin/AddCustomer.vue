<template>
  <div class="container">
    <h3>Add New Customer</h3>
    <form @submit.prevent="addCustomer">
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="firstname">First name</label>
          <input
            type="text"
            v-model="customer.firstname"
            class="form-control"
            placeholder="John"
          />
        </div>
        <div class="form-group col-md-6">
          <label for="lastname">Last name</label>
          <input
            type="text"
            v-model="customer.lastname"
            class="form-control"
            placeholder="Doe"
          />
        </div>
        <div class="form-group col-md-6">
          <label for="email">Email</label>
          <input
            type="email"
            v-model="customer.email"
            class="form-control"
            placeholder="example@mail.com"
          />
        </div>
        <div class="form-group col-md-6">
          <label for="phone number">Phone Number</label>
          <input
            type="number"
            v-model="customer.phone"
            class="form-control"
            placeholder="(+254) 712 345 678"
          />
        </div>
      </div>
      <div class="form-group">
        <label for="address">Address</label>
        <input
          type="text"
          v-model="customer.address"
          class="form-control"
          placeholder="1234 Main St"
        />
      </div>
      <div class="form-group">
        <label for="city">City</label>
        <input
          type="text"
          v-model="customer.city"
          class="form-control"
          placeholder="Nairobi"
        />
      </div>
      <button type="submit" class="btn btn-primary" @click="addCustomer">
        Sign in
      </button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'AddCustomer',
  data() {
    return {
      customers: [],
      customer: {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        address: '',
        city: '',
      },
    };
  },
  methods: {
    async addCustomer() {
      const { firstname, lastname, email, phone, address, city } =
        this.customer;

      if (!firstname || !lastname || !email || !phone || !address || !city) {
        return 'Incomplete form data';
      }

      const response = await axios
        .post('/api/customers', {
          firstname: this.customer.firstname,
          lastname: this.customer.lastname,
          email: this.customer.email,
          phone: this.customer.phone,
          address: this.customer.address,
          city: this.customer.city,
        })
        .then(() => {
          console.log(response);
          this.$router.push('/teller');
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
