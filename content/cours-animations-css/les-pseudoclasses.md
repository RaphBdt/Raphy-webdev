---
part: 1
id: 2
title: Les pseudoclasses

---
**:hover** Se déclenche au survol de la souris   
**:active** Se déclenche au clic   
**:focus** Se se déclenche lorsque l'élément reçoit le focus   
**:valid** Se déclenche lorsque l'élément reçoit la donnée attendue   
**:invalid** Se déclenche lorsque l'élément ne reçoit pas la donnée attendue   
**:not()** Prend un sélecteur en argument et cible les éléments qui ne sont pas représentés par cet argument   
**:checked** Se déclenche lorsque l'élément est coché   
**:enabled** Élément avec lequel on peut intéragir   
**:disabled** Élément dont l'intéraction a été bloquée

##   
Formulaire

    .form {
      width: 400px;
      &__group {
        & input {
          border: 2px solid $green;
          border-radius: 100rem;
          color: $dark-blue;
          outline: none;
          padding: 10px;
          width: 100%;
          transition: background-color 500ms;
          font-size: 16px;
          &:focus {
          	border: 2px solid $dark-blue;
          }
          &:not(:focus):invalid { 
            background: #b20a37;
            border: 2px solid #b20a37;
            color: #fff;
          }
        }
      }
    }

## Modifier élément voisin

     .btn {
       text-align: center;
       margin: 0 auto;
       background: $green;
       cursor: pointer;
       width: 200px;
       padding: 20px;
       border-radius: 10rem;
       color: #ffffff;
       &:active + .ball {
       	transform: scale(1.0);
       }
     }
    
    .ball {
      width: 300px;
      height: 300px;
      background: $blue;
      transform: scale(0.1);
      transition: transform 4000ms;
      border-radius: 300px * 0.5;
      margin: 1rem auto;
    }