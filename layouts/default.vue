<template>
  <div>
    <d-navbar
      toggleable="md"
      type="dark"
      theme="dark">
      <d-navbar-toggle target="nav-collapse" />
      <d-navbar-brand>
        <h6 class="text-white my-auto mr-4">Shards Vue</h6>
      </d-navbar-brand>

      <d-collapse
        id="nav-collapse"
        is-nav >
        <d-navbar-nav>
          <d-nav-item href="#">Link</d-nav-item>
          <d-nav-item
            href="#"
            disabled>Disabled</d-nav-item>
          <d-dropdown
            text="Dropdown"
            is-nav>
            <d-dropdown-item>Action</d-dropdown-item>
            <d-dropdown-item>Another action</d-dropdown-item>
            <d-dropdown-item>Something else here</d-dropdown-item>
            <d-dropdown-divider />
            <d-dropdown-item>Separated link</d-dropdown-item>
          </d-dropdown>
        </d-navbar-nav>

        <d-navbar-nav class="ml-auto">
          <d-input-group seamless>
            Hey
          </d-input-group>
        </d-navbar-nav>
      </d-collapse>
    </d-navbar>
    <nuxt/>
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
