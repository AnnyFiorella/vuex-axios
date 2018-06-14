<template>
  <div class="container">
    <header>
      <h1>Wikipedia Viewer</h1>
      <input type="text" placeholder="Search from Wikipedia" v-model="query" v-on:input="getArticles" autofocus>
    </header>
    <ul>
      <li v-for="(item, index) in articles" v-bind:key="index">
        <div class="card">
          <header>
            <a v-bind:href="item.link" target="_blank">
              <h2>{{ item.title }}</h2>
            </a>
          </header>
          <footer>
            <p>{{ item.snipped }}</p>
          </footer>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    query: {
      get() {
        return this.$store.state.query;
      },
      set(value) {
        this.$store.commit("updateQuery", value);
      }
    },
    articles() {
      return this.$store.getters.articles;
    }
  },
  methods: {
    getArticles() {
      if (this.query) {
        this.$store.dispatch("getArticles");
      }
    }
  }
}
</script>


<style>
  .container {
    max-width: 768px;
    margin: 0 auto;
    padding: 2rem;
  }

  h1 {
    text-align: center;
  }

  main > header {
    margin-bottom: 4rem;
  }

  ul {
    list-style-type: none;
    padding-left: 0;
  }

  li:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  a {
    display: block;
  }
</style>
