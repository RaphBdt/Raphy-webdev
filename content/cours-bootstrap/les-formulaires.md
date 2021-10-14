---
part: 4
id: 10
title: Les formulaires

---
Pour ajouter la structure Bootstrap à nos formulaires, il faut utiliser la classe **.form-group**

    <form>
       <div class=”form-group”>
          ...
       </div>
       <div class=”form-group”>
          ...
       </div>
       ....
    </div>

Les classes que nous utilisons pour les champs des formulaires varient en fonction du type de champ :

* **input type=”text” :** .form-control
* **input type="text" readonly :** .form-control-plaintext
* **textarea :** .form-control
* **select :** .form-control
* **input type="range" :** .form-control-range

Exemples d'utilisation :

    !-- Saisie d'un temps -->
    
    <div class=”form-group”>
       <label for=”timeInput”>Temps : /label>
       <input type=”text” class=”form-control” placeholder=”mm:ss” id=”Heure”>
    </div>
    
    !-- Saisie d'un commentaire -->
    
    <div class=”form-group”>
        <label for=”note”>Note : /label>
        <textarea class=”form-control” id=”note” rows=”5” required>
    </div>

Pour les checkbox et boutons radios, il faut mettre la classe **.form-check** dans une _div_ qui est enfant de la _div avec la classe .form-group_. On doit également appliquer les classes **.form-check-input** et **.form-check-label** à chaque élément _input_ puis _label_.

    <div class=”form-group”>
       <div class="form-check">
          <input class="form-check-input" type="checkbox" id="publicCheck">
          <label class="form-check-label" for="gridCheck">
          Rendre cette notation publique
          </label>
       </div>
    </div>

Pour le bouton de validation, nous avons juste à utiliser les classes Bootstrap que nous avons apprises :

    <button type="submit" class="btn btn-primary">Envoyer </button>

Grâce à Bootstrap, si on veut que l'utilisateur remplisse obligatoirement un champ du formulaire, alors nous pouvons ajouter **required** dans un élément _input_, _select_ ou _textarea_. L'utilisateur sera averti si le champ est vide.