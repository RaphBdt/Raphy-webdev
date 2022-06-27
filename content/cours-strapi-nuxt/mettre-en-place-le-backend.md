---
part: 1
id: 1
title: Mettre en place le backend

---
## Why Strapi?

The advantage of Strapi compared to other CMS (WordPress, Prestashop...) is that it allows you to create controllers in order to change the native behavior of the backend. It is therefore completely adjustable according to your needs. In addition, Strapi natively creates an API, so the frontend is completely decoupled from the backend. It's the new way to build modern apps 🚀

## Create a new projet

```
npx create-strapi-app@latest my-blog
```

Move inside your new project and start the server :

```
cd my-blog
npm run develop
```

On first login, you are prompted to choose a username and password.
![](https://paper-attachments.dropbox.com/s_4AF4FDEDF16A3DF3B0654D64C2F33EDD6CA7EA05F0D813E76F8984F96837F085_1639072772822_image.png)

Welcome to Strapi!

## Create the contents type

To develop our blog, we need two entities: Article and Category.

Click on "Content-Type Builder" and "Create new collection type".
For the first, five fields must be created:
- Title ➡️ type Text
- content ➡️ type Rich Text (allow you to write in markdown)
- image ➡️ type Media
- published_date ➡️ type Date 

We also want to assign categories to our articles. For that, we must create the second entity with just one property :
- name 

Go back on the article's content type and add a relation between the both entities. To do that, you have to add a new property to Article :
- categories ➡️ type Relation (one to many)

Your articles can now be assigned to categories!

## Manage permissions

Finally, you must authorize our frontend to retrieve the information stored in the backend. For that, go to Settings > Users & permissions plugin > Roles > Public.

Please be careful when modifying this information. Here, we only want users to be able to retrieve data from our articles. They should not be allowed to publish, modify or even delete them. Check only the "Get" boxes and click the "Update" button.