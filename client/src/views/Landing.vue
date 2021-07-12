<template>
  <div class="top d-flex text-center text-white bg-dark mt-5">
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <section class="px-3">
        <h1>Parcel Management System.</h1>
        <p class="lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eos,
          nostrum iusto quidem sed provident sunt ipsa vel.
        </p>
        <p class="lead mt-3">Select Your User Type:</p>
        <div class="button d-flex">
          <p class="lead">
            <a href="/teller" class="btn btn-md btn-secondary fw-bold"
              >Teller</a
            >
          </p>
          <br />
          <p class="lead">
            <a href="/admin" class="btn btn-md btn-secondary fw-bold">Admin</a>
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.top {
  padding: 10rem 1rem;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover cover;
  position: relative;
}
.cover-container {
  max-width: 42em;
}
.button {
  display: flex;
  justify-content: center;
  gap: 4px;
  color: #000;
}
.btn:hover,
.btn:focus {
  background: chocolate;
  color: #fff;
}
</style>
