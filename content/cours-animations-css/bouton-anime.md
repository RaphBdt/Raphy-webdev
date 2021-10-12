---
part: 1
id: 1
title: Bouton animé

---
Deux méthodes pour faire des animations en CSS : **les transitions** et **les keyframes**.

Code source (SCSS) :

    .btn {
      text-align: center;
      width: 200px;
      margin: 50px auto;
      background: $green;
      color: #333333;
      cursor: pointer;
      padding: 20px;
      border-radius: 10rem;
      transform: scale(1);
      transition: transform 400ms;
      &:hover {
      	transform: scale(1.15);
      }
    }

Pour tout ce qui est interface fonctionnelle, il est déconseillé d'utiliser des délais de plus de 0.2s.