---
part: 2
id: 1
title: Mettre en place le frontend

---
Nuxt is a static site generator. It has the advantage of offering fast and fluid navigation to our user. Let's start creating our frontend 💪

## Create the project

Put this commande in your terminal :

```
npm init nuxt-app
```

You will be presented with a set of choices. For this tutorial, I used the Tailwind CSS framework, so I recommend you choose that as well.

## Install dependencies et configure the config.js file


You need to install the @nuxtjs/strapi dependency in order to be able to fetch Strapi data from Nuxt.
```
npm install @nuxtjs/strapi --save-dev
```

After that, you must specify the entities to retrieve from Strapi, in the nuxt.config.js file. In our case, we want to retrieve the articles and the categories. So add the following code:

```
modules: [
    '@nuxtjs/strapi'
],

strapi: {
    url: 'http://localhost:1337/api',
    entities: ['articles', 'categories']
},
```

## Create the pages and components

We are entering the major part of the project. For this tutorial, I suggest you make a simple blog with a homepage and an "animals" category. We will display a card per article and when we click on it we will access the content.


In pages > index.vue :
```
<template>
  <div>
    <div class="bg-white">
      <div class="max-w-2xl mx-auto py-24 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="mt-11 grid items-start grid-cols-1 gap-y-16 gap-x-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          <Article v-for="article in articles.data" :key="article.id" :id="article.id" :title="article.attributes.title" :image="article.attributes.image.data.attributes.formats.thumbnail.url" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      articles: [],
    }
  },
  async mounted () {
    try {
      this.articles = await this.$strapi.$articles.find({populate: '*'});
    } catch (error) {
      this.error = error
    }
    console.log(this.articles);
  }
}
</script>
```

The code "this.$strapi.$articles.find({populate: '*'});" allows to get all the datas of our articles. 

As you can see, there is a component called "Article". This allows you to display the cards of all the articles published on Strapi.

In component, create the "Article.vue" file and put the code bellow : 
```
<template>
  <div>
    <div class="flex flex-col-reverse">
        <div class="mt-6">
            <h3 class="text-sm font-medium text-gray-900 mb-4">{{ title }}</h3>
            <nuxt-link :to="{ name: 'article-id', params: { id: id } }" class="text-sm bg-purple-900 text-white p-2 rounded">Read article</nuxt-link>
        </div>
        <div class="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
            <img :src="'http://localhost:1337' + image" alt="Green cardstock box containing white, beige, and brown cards." class="object-center object-cover w-full">
        </div>
    </div>
    {{ theGoodArticle }}
  </div>
</template>

<script>
export default {
  props: ["title", "id", "image"],
}
</script>

<style>

</style>
``` 

You also need to create the menu component. For that, still in the "components" folder, create a new file "Menu.vue" and put the code bellow (It is simply a Tailwind UI component.) :
```
<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
    <nav class="bg-gray-800">
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div class="relative flex items-center justify-between h-16">
                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <!-- Mobile menu button-->
                    <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <!--
                        Icon when menu is closed.

                        Heroicon name: outline/menu

                        Menu open: "hidden", Menu closed: "block"
                    -->
                    <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <!--
                        Icon when menu is open.

                        Heroicon name: outline/x

                        Menu open: "block", Menu closed: "hidden"
                    -->
                    <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    </button>
                </div>
                <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    <div class="flex-shrink-0 flex items-center">

                    </div>
                    <div class="hidden sm:block">
                        <div class="flex space-x-4">
                            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                            <nuxt-link to="/" class="text-white px-3 py-2 rounded-md text-sm font-medium">Home</nuxt-link>

                            <nuxt-link to="/animals" class="text-white px-3 py-2 rounded-md text-sm font-medium">Animals</nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Mobile menu, show/hide based on menu state. -->
        <div class="sm:hidden" id="mobile-menu">
            <div class="px-2 pt-2 pb-3 space-y-1">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <nuxt-link to="/" class="text-white block px-3 py-2 rounded-md text-base font-medium">Home</nuxt-link>

            <nuxt-link to="/animals" class="text-white block px-3 py-2 rounded-md text-base font-medium">Animals</nuxt-link>
            </div>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>
```

