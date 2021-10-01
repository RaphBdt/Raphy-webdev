---
part: 1
id: 4
title: Présentation Patterns
---

# Patterns

## Stupid
Stupid représente les indices de code dont la qualité est insuffisante. 

S comme Singleton = c'est contre productif de créer une seule instance

T comme Tight Coupling = Couplage faible / couplage fort. Les classes dépendent l'une de l'autre pour exister. 

U comme Untestability = Un code de mauvaise qualité est un code difficile à tester

P comme Premature Optimization = Le fait d'optimiser à fond notre code avant la fin de notre projet

I comme Indescriptive naming = Ne pas donner de bons noms de variable

D comme Duplication = Éviter la duplication et privilégier les méthodes.

## DRY
Dry = Don't repeat your self

L'objectif est de ne pas se répéter pour faciliter le maintenance, le test, le débogage et les évolutions de cette dernière.

Pour ça, on peut utiliser les fonctions, les classes, les objets...

## Kiss
"Faire simple n'est pas simple"

Ne pas réinventer la roue. En effet, il est fortement conseillé d'utiliser un framework. Si on crée le notre, il va être très difficile de le maintenir sur le long terme, car on aura pas une communauté aussi importante que les frameworks les plus populaires.

Au niveau du code, ça implique aussi l'idée de ne pas faire des boucles dans des boucles... En bref faire le plus simple possible. 

## Yagni

Les programmeurs ne devraient pas ajouter de fonctionnalité à un logiciel tant que celle-ci n'est pas absolument pas nécessaire. Il y a encore une fois un objectif de maintenance, de sécurité et de simplicité...

Ne pas écrire en avance toutes les fonctionnalités dans le code. 