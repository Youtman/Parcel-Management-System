<template>
  <div>
    <!-- <input type="checkbox" id="sidebar-toggle" /> -->
    <div class="sidebar">
      <div class="sidebar-header">
        <h3 class="brand text-center">
          <span>P.M.S</span>
        </h3>
        <label for="sidebar-toggle"></label>
      </div>

      <div class="sidebar-menu">
        <ul>
          <li>
            <router-link to="/admin">
              <span>Home</span>
            </router-link>
          </li>
          <li>
            <router-link to="/users">
              <span>Users</span>
            </router-link>
          </li>
          <li>
            <router-link to="#">
              <span>Parcel Sent/ Recieved</span>
            </router-link>
          </li>
          <li>
            <router-link to="#">
              <span>Total Revenue</span>
            </router-link>
          </li>
          <li>
            <router-link to="#">
              <span>Reports</span>
            </router-link>
          </li>
          <li>
            <router-link to="#">
              <span>Graphical Analysis</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <div class="main-content">
      <header>
        <div class="search-wrapper">
          <input type="search" placeholder="Search" />
        </div>

        <div class="social-icons">
          <button @click="signout" class="btn btn-sm btn-primary">
            Log out
          </button>
          <div></div>
        </div>
      </header>

      <main>
        <slot name="main-content"></slot>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardLayout',
  methods: {
    signout() {
      localStorage.removeItem('authtoken');
      localStorage.removeItem('admin');
      this.$router.push('/');
    },
  },
};
</script>
<style lang="css" scoped></style>
