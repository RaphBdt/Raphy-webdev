---
part: 0
id: 4
title: Animations avec plusieurs propriétés

---
## Même durée

        $cd-btn: #AEC3B0;
        $cd-btn-start: rgba(#AEC3B0, 0);
        $cd-btn-end: rgba(#AEC3B0, 1);
        $cd-txt: #333333;
        .btn {
          text-align: center;
          border: 2px solid $cd-btn;
          width: 200px;
          margin: 50px auto;
          background: $cd-btn-start;
          color: $cd-txt;
          cursor: pointer;
          padding: 20px;
          border-radius: 10rem;
          transition: all 450ms;
          &:hover {
          	transform: scale(1.13);
          	background-color: $cd-btn-end;
          }
        }

Le mot clé **all** indique au qu'il faut appliquer une transition à toutes les propriétés modifiées dans la pseudoclasse **:hover**.

## Animations avec plusieures durées

Bouton avec un "transform" à 450ms et un "background-color" à 300ms

    transition: transform 450ms, background-color 300ms;

## Retarder le début d'une transition

Le background-color va commencer 150ms après le transform. L'effet sera plus authentique, intéressant et captivant.

      transition: transform 450ms, background-color 300ms 150ms;

Si aucune valeur n'est précisée, l'animation commencera sans délai.