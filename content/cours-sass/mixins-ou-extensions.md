---
part: 2
id: 10
title: Mixins ou extensions ?

---
Dèlà, si on veut utiliser des arguments, il faut utiliser les mixins parce que les extensions ne le permettent tout simplement pas.   
Ensuite, l'autre différence réside dans le code compilé. C'est plus optimisé du côté des extensions, mais c'est moins lisible dans notre fichier .css. Par exemple, si on a étendu un ensemble de règles dans un h1, alors toutes les règles ne seront pas directement visibles depuis notre bloc h1 contrairement aux mixins qui génèrent du code pour chaque bloc.

Dès lors, **il faut privilégier les mixins aux extensions**. Même si ça génère plus de code, ça nous permettra d'avoir un code plus propre et structuré. C'est toujours bien de savoir comment fonctionne les extensions si un jour on tombe dessus dans le code de quelqu'un d'autre.