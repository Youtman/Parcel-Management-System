<template>
  <dashboard-layout>
    <div slot="main-content">
      <h2 class="dash-title">Add user</h2>

      <section class="recent">
        <div class="">
          <div class="activity-card pad-1">
            <form enctype="multipart/form-data" @submit.prevent="addUser">
              <div class="form-group">
                <label for="">Fullname</label>
                <input
                  type="text"
                  v-model="user.fullname"
                  class="form-control"
                  placeholder="Name of user"
                />
              </div>

              <div class="form-group">
                <label for="">Email</label>
                <input
                  type="text"
                  v-model="user.email"
                  class="form-control"
                  placeholder="Email of user"
                />
              </div>

              <div class="form-group">
                <label for="">Role</label>
                <input
                  type="text"
                  v-model="user.role"
                  class="form-control"
                  placeholder="Name of user"
                />
              </div>

              <div class="form-group">
                <label for="">Password</label>
                <input
                  type="password"
                  v-model="user.password"
                  class="form-control"
                  placeholder="*********"
                />
              </div>

              <div class="form-group">
                <button type="button" @click="addUser" class="btn btn-main">
                  Submit
                </button>
              </div>
            </form>
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
  name: 'Adduser',
  components: {
    DashboardLayout,
  },
  data() {
    return {
      users: [],
      user: {
        fullname: '',
        email: '',
        role: '',
        password: '',
      },
    };
  },
  methods: {
    async addUser() {
      const { fullname, email, role, password } = this.user;

      if (!fullname || !email || !role || !password) {
        return 'Incomplete form data';
      }

      const response = await axios
        .post('/api/users', {
          fullname: this.user.fullname,
          email: this.user.email,
          role: this.user.role,
          password: this.user.password,
        })
        .then(() => {
          console.log(response);
          this.$router.push('/users');
        })
        .catch((error) => {
          console.log(error);
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
