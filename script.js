var App = new Vue({
  el: '#AppVue',
  data: {
    list: products,
    products: products,
    categories: {}
  },
  methods: {
    getCategories: function () {
      const categories = {}

      for (const product of App.products) {
        for (const category of product.categories) {
          if (categories[category] === undefined) {
            categories[category] = {
              name: category,
              amount: 0,
              selected: false
            }
          }

          categories[category].amount++;
        }
      }

      App.categories = categories
    },

    toFilter: function () {

      const selectedCategories = []

      for (const category in App.categories) {
        if (App.categories[category].selected) {
          selectedCategories.push(category)
        }
      }

      if (selectedCategories.length) {
        App.list = []

        for (const product of App.products) {
          for (const category of product.categories) {
            if (selectedCategories.indexOf(category) !== -1) {
              App.list.push(product)
              break
            }
          }
        }
      } else {
        App.list = App.products
      }
    }
  }
})

App.getCategories();

setTimeout(() => {
  // App.categories['colar'].selected = true
  App.categories['brinco'].selected = true
  App.toFilter()
}, 500)
