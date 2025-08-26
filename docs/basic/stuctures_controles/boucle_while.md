---
sidebar_label: Boucle while
sidebar_position: 4
description: Boucle while
---

# Boucle while

La boucle `while` en Python permet d'exécuter un bloc de code tant qu'une
condition est vraie. La condition est évaluée avant chaque itération de la
boucle. Si la condition est fausse dès le début, le bloc de code ne sera jamais
exécuté.

:::tip

    Les boucles `while` sont un bon choix lorsqu'on ne sait pas à
    l'avance combien d'itérations seront nécessaires pour terminer une tâche.

:::

## Syntaxe

```python
while condition:
    # bloc de code à exécuter
```

#### Exemple 1

Cet exemple affiche les nombres de 1 à 5 :

```python
i = 1
while i <= 5:
    print(i)
    i += 1
```

#### Exemple 2

Cet exemple continue à demander à l'utilisateur d'entrer un nombre jusqu'à ce
qu'il entre un nombre positif :

```python
nombre = -1
while nombre <= 0:
    nombre = int(input("Entrez un nombre positif : "))
print(f"Merci, vous avez entré {nombre}")
```

#### Exemple 3

Si vous avez un investissement de 1000$ et que vous voulez savoir
combien de temps il faudra pour doubler votre investissement à un taux de 5% par
an, vous pouvez utiliser une boucle `while` pour calculer le nombre d'années
nécessaires.

```python
investissement = 1000
taux = 0.05
annees = 0
while investissement < 2000:
    investissement *= 1 + taux
    annees += 1
print(f"Il faudra {annees} années pour doubler votre investissement.")
```

## Attention aux boucles infinies

Il est important de s'assurer que la condition de la boucle `while` deviendra
fausse à un moment donné, sinon la boucle continuera à s'exécuter indéfiniment.
Par exemple, la boucle suivante est une boucle infinie :

```python
compteur = 10
while compteur <= 10:
    print(f"Compteur: {compteur}")
    compteur -= 1
```

Pour éviter cela, assurez-vous que la condition de la boucle change à chaque
itération.

## Break et continue

Les instructions `break` et `continue` vue à la section sur la [boucle `for`](boucle_for.md) fonctionnent
aussi avec la boucle `while`. Voici un exemple d'utilisation de `continue` :

```python
i = 0
while i < 10:
    i += 1
    if i % 2 == 0:
        continue  # N'imprime pas les nombres pairs
    print(i)
```

## Testez votre compréhension


<details>
<summary>🤔 Testez votre compréhension</summary>

<MultipleChoiceTabs>

  <MultipleChoice>
  Que va afficher ce code ?
  ```python
  i = 0
  while i < 3:
      print(i)
      i += 1
 ```

  <MultipleChoiceOption>
  1 2 3
  </MultipleChoiceOption>
  <MultipleChoiceOption>
  0 1 2 3
  </MultipleChoiceOption>
  <MultipleChoiceOption isCorrect>
  0 1 2
  </MultipleChoiceOption>
  <MultipleChoiceOption>
  Rien (boucle infinie)
  </MultipleChoiceOption>
  </MultipleChoice>

  <MultipleChoice>
  Quel est le résultat de ce code ?
  ```python
  i = 5
  while i > 0:
      print(i)
      i -= 2
  ```
  <MultipleChoiceOption>
  5 4 3 2 1
  </MultipleChoiceOption>
  <MultipleChoiceOption isCorrect>
  5 3 1
  </MultipleChoiceOption>
  <MultipleChoiceOption>
  5 3 1 et boucle infinie
  </MultipleChoiceOption>
  <MultipleChoiceOption>
  Rien
  </MultipleChoiceOption>
  </MultipleChoice>

  <MultipleChoice>
  Que va afficher ce code ?
  ```python
  i = 1
  while i < 7:
      if i % 3 == 0:
          print("divisible")
      i += 1
  ```
  <MultipleChoiceOption>
   divisible  
   divisible  
   divisible
  </MultipleChoiceOption>
  <MultipleChoiceOption isCorrect>
  divisible  
  divisible  
  </MultipleChoiceOption>
  <MultipleChoiceOption>
  3 6 9
  </MultipleChoiceOption>
  <MultipleChoiceOption>
  Rien
  </MultipleChoiceOption>
  </MultipleChoice>

  <MultipleChoice>
  Que va afficher ce code ?
  ```python
  i = 0
  while i < 5:
      i += 1
      if i == 3:
          continue
      print(i)
  ```
  <MultipleChoiceOption>
  1 2 3 4 5
  </MultipleChoiceOption>
  <MultipleChoiceOption isCorrect>
  1 2 4 5
  </MultipleChoiceOption>
  <MultipleChoiceOption>
  0 1 2 4 5
  </MultipleChoiceOption>
  <MultipleChoiceOption>
  Rien
  </MultipleChoiceOption>
  </MultipleChoice>

  <MultipleChoice>
  Quel sera le résultat de ce bloc ?
  ```python
  i = 0
  while True:
      print(i)
      if i == 2:
          break
      i += 1
  ```
  <MultipleChoiceOption>
  0 1
  </MultipleChoiceOption>
  <MultipleChoiceOption isCorrect>
  0 1 2
  </MultipleChoiceOption>
  <MultipleChoiceOption>
  Boucle infinie
  </MultipleChoiceOption>
  <MultipleChoiceOption>
  Erreur
  </MultipleChoiceOption>
  </MultipleChoice>



  <MultipleChoice>
  Que va afficher ce code ?
  ```python
  i = 0
  while i < 5:
      i += 1
      if i % 2 == 0:
          continue
      if i == 5:
          break
      print(i)
  ```
  <MultipleChoiceOption>
  0 1 3 5
  </MultipleChoiceOption>
  <MultipleChoiceOption isCorrect>
  1 3
  </MultipleChoiceOption>
  <MultipleChoiceOption>
  1 3 5
  </MultipleChoiceOption>
  <MultipleChoiceOption>
  Erreur
  </MultipleChoiceOption>
  </MultipleChoice>

  <MultipleChoice>
  Quel est le comportement de ce code imbriqué ?
  ```python
  i = 0
  j = 0
  while i < 2:
      j = 0
      while j < 3:
          print(i, j)
          j += 1
      i += 1
  ```
  <MultipleChoiceOption>
  0 0 1 0 0 1 2
  </MultipleChoiceOption>
  <MultipleChoiceOption isCorrect>
  0 0  
  0 1  
  0 2  
  1 0  
  1 1  
  1 2
  </MultipleChoiceOption>
  <MultipleChoiceOption>
  0 0 0 1 0 2 (puis arrêt)
  </MultipleChoiceOption>
  <MultipleChoiceOption>
  Erreur
  </MultipleChoiceOption>
  </MultipleChoice>

  <MultipleChoice>
  Quel sera le contenu final de `items` ? Ceci n'est **pas** un exemple de code lisible.
  ```python
  items = [1, 2, 3, 4, 5]
  idx = 0
  while idx < len(items):
      if items[idx] % 2 == 0:
          items.pop(idx)
      else:
          idx += 1
  print(items)
  ```
  <MultipleChoiceOption>
  [1, 2, 3, 4, 5]
  </MultipleChoiceOption>
  <MultipleChoiceOption isCorrect>
  [1, 3, 5]
  </MultipleChoiceOption>
  <MultipleChoiceOption>
  [2, 4]
  </MultipleChoiceOption>
  <MultipleChoiceOption>
  Erreur
  </MultipleChoiceOption>
  </MultipleChoice>

  <MultipleChoice>
  Que produit ce code ?
  ```python
  i = 1
  while i < 10:
      if i % 4 == 0:
          print("quad")
      if i > 6:
          break
      print(i)
      i += 2
  ```
  <MultipleChoiceOption>
  1 3 5 quad 7
  </MultipleChoiceOption>
  <MultipleChoiceOption isCorrect>
  1  
  3  
  5
  </MultipleChoiceOption>
  <MultipleChoiceOption>
  quad 4  
  quad 8
  </MultipleChoiceOption>
  <MultipleChoiceOption>
  Erreur
  </MultipleChoiceOption>
  </MultipleChoice>

  <MultipleChoice>
  Que va afficher ce code avec `continue` et boulces imbriquées ?
  ```python
  i = 0
  while i < 3:
      j = 0
      while j < 3:
          j += 1
          if j == 2:
              continue
          print(i, j)
      i += 1
  ```
  <MultipleChoiceOption>
  0 1 0 2 1 1 1 2 2 1 2 2
  </MultipleChoiceOption>
  <MultipleChoiceOption isCorrect>
  0 1  
  0 3  
  1 1  
  1 3  
  2 1  
  2 3
  </MultipleChoiceOption>
  <MultipleChoiceOption>
  1 2 (fois 6)
  </MultipleChoiceOption>
  <MultipleChoiceOption>
  Erreur
  </MultipleChoiceOption>
  </MultipleChoice>

</MultipleChoiceTabs>
</details>
