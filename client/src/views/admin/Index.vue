<template>
  <dashboard-layout>
    <div slot="main-content">
      <h2 class="dash-title">Overview</h2>

      <div class="dash-cards">
        <div class="card-single">
          <div class="card-body">
            <span class="ti-briefcase"></span>
            <div>
              <h5>Account Balance</h5>
              <h4>Ksh. 30,659.45</h4>
            </div>
          </div>
          <div class="card-footer">
            <a href="">View all</a>
          </div>
        </div>

        <div class="card-single">
          <div class="card-body">
            <span class="ti-reload"></span>
            <div>
              <h5>Pending</h5>
              <h4>Ksh. 19,500.45</h4>
            </div>
          </div>
          <div class="card-footer">
            <a href="">View all</a>
          </div>
        </div>

        <div class="card-single">
          <div class="card-body">
            <span class="ti-check-box"></span>
            <div>
              <h5>Processed</h5>
              <h4>Ksh. 20,659</h4>
            </div>
          </div>
          <div class="card-footer">
            <a href="">View all</a>
          </div>
        </div>
      </div>

      <section class="recent">
        <div class="">
          <div class="activity-card">
            <h3>Added users</h3>

            <div class="table-responsive">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(user, index) in users" :key="index">
                    <td>#{{ index + 1 }}</td>
                    <td>{{ user.fullname }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.role }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  </dashboard-layout>
</template>

<script>
import DashboardLayout from '@/components/Layouts/DashboardLayout';
import axios from 'axios';

export default {
  components: {
    DashboardLayout,
  },
  name: 'AdminHome',
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
      await axios
        .get('/api/users')
        .then((res) => {
          this.users = res.data;
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
  },
};
</script>

<style lang="css">
.pad-1 {
  padding: 1rem;
}
</style>
