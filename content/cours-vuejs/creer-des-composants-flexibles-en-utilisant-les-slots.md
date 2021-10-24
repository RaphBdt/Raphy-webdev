---
part: 3
id: 11
title: Créer des composants flexibles en utilisant les slots

---
Le problème avec les props, c'est qu'on peut facilement s'y perdre quand on en utilise trop. Vue propose une solution plus flexible, les _slots_.

## Découvrir les slots

Pour commencer, il faut mettre une balise HTML _slot_ dans notre composant (par exemple _CustomBanner.vue_) :

    // Template
    <div class="banner">
        <slot></slot>
    </div>

Ensuite, dans notre fichier _.vue_ où on appelle le composant en question, on peut mettre **n'importe quelle contenu HTML entre les deux balises qui délimitent notre composant**. Celui-ci sera "retransmis" entre les balises _slot_ du composant.

    // Template
    <div id="app">
        <CustomBanner>
            <p>
                <span>✌🏼</span>
                Voici ma bannière personnalisée
                <span>👍🏼</span>
            </p>
        </CustomBanner>
    </div>

## Utiliser plusieurs slots

Si on veut ajouter plusieurs slots, on il faut spécifier la propriété _name_ :

    // Template
    <div class="banner">
        <slot name="top"></slot>
        <slot></slot>
        <slot name="bottom"></slot>
    </div>

Puis dans notre fichier qui appelle le composant, il faut écrire une balise HTML _template_ avec l'attribut _v-slot:nameofthetemplate_ :

    // Template
    <div id="app">
        <CustomBanner>
            <p>
                <template v-slot:top>
                    <span>☀️</span>
                </template>
                <span>✌🏼</span>
                Voici ma bannière personnalisée
                <span>👍🏼</span>
                <template v-slot:bottom>
                    <span>🌧</span>
                </template>
            </p>
        </CustomBanner>
    </div>