---
sidebar_label: Boucle for
sidebar_position: 3
description: Boucle for
---

# Boucle for

La boucle `for` en Python est utilisée pour itérer sur une séquence (comme une
liste, un tuple, un dictionnaire, un ensemble ou une chaîne de caractères) ou
sur une plage de nombres.

:::tip

    Les boucles `for` sont un bon choix lorsqu'on sait à l'avance 
    combien d'itérations seront nécessaires pour terminer une tâche.

:::

## Syntaxe

La syntaxe de la boucle `for` est la suivante :

```python
for element in sequence:
    # bloc de code à exécuter
```

Cet exemple affiche chaque élément d'une liste :
```python
fruits = ["pomme", "banane", "cerise"]
for fruit in fruits:
    print(fruit)
```

## La fonction range

Parfois, on veut simplement faire n itérations sans se soucier des
éléments d'une séquence. Dans ce cas, on peut utiliser la fonction `range` pour
générer une séquence de nombres.

La fonction `range` peut prendre un, deux ou trois arguments :

- `range(stop)` : génère les nombres de 0 à `stop - 1`
- `range(start, stop)` : génère les nombres de `start` à `stop - 1`
- `range(start, stop, step)` : génère les nombres de `start` à `stop - 1`, en incrémentant de `step`

#### Exemple 1

Cet exemple affiche les nombres de 1 à 5 :
```python
for i in range(1, 6):
    print(i)
```

#### Exemple 2

Cet exemple affiche les nombres pairs de 0 à 10 :
```python
for i in range(0, 11, 2):
    print(i)
```

## La fonction enumerate

La fonction `enumerate` permet d'itérer sur une séquence tout en gardant une
référence à l'index de chaque élément. Cela peut être utile lorsque vous avez
besoin de connaître la position d'un élément dans une liste.

Cet exemple affiche chaque fruit avec son index :

<Tabs>
  <TabItem value="code" label="Code" default>

    ```python
    fruits = ["pomme", "banane", "cerise"]
    for index, fruit in enumerate(fruits):
        print(f"Index {index}: {fruit}")
    ```

    </TabItem>

    <TabItem value="resultat" label="Résultat">
    ```
    Index 0: pomme
    Index 1: banane
    Index 2: cerise
    ```
    </TabItem>
</Tabs>

## Boucles imbriquées

Les boucles imbriquées sont des boucles à l'intérieur d'autres boucles. Elles
sont utiles pour parcourir des structures de données à plusieurs dimensions,
comme des matrices ou pour générer des motifs complexes.


Cet exemple utilise des boucles imbriquées pour imprimer un carré de caractères
`*` :

<Tabs>
  <TabItem value="code" label="Code" default>

    ```python
    taille = 5
    for i in range(taille):
        for j in range(taille):
            print('*', end='')
        print()
    ```

    </TabItem>

    <TabItem value="resultat" label="Résultat">
    ```
    *****
    *****
    *****
    *****
    *****
    ```
    </TabItem>
</Tabs>

La boucle externe itère sur les lignes du carré, tandis que la boucle interne
itère sur les colonnes. Chaque itération de la boucle interne imprime un
caractère `*` et la boucle externe ajoute une nouvelle ligne après chaque ligne
complète.

Cet exemple utilise des boucles imbriquées pour imprimer un triangle de
caractères `*` :

<Tabs>
  <TabItem value="code" label="Code" default>

    ```python
    hauteur = 5
    for i in range(hauteur):
        for j in range(i + 1):
            print('*', end='')
        print()
    ```
    </TabItem>

    <TabItem value="resultat" label="Résultat">
    ```
    *
    **
    ***
    ****
    *****
    ```
    </TabItem>
</Tabs>

Dans ce second exemple, la boucle externe itère sur les lignes du triangle et
la boucle interne imprime un nombre croissant de caractères `*` à chaque ligne. Notez
que la variable `j` de la boucle interne dépend de la variable `i` de la boucle
externe. En effet, il est fréquent que le nombre d'itérations de la boucle interne
dépende de la variable de la boucle externe.

:::tip

    Les boucles imbriquées peuvent être difficiles à lire et
    à comprendre. Il est parfois souhaitable
    d'encapsuler la deuxième boucle dans une fonction pour améliorer la
    lisibilité du code.


Cet exemple utilise une fonction `imprimer_la_ligne` pour imprimer un triangle
de caractères `*`:

    ```python
    def imprimer_la_ligne(taille):
        for j in range(taille):
            print('*', end='')
        print()

    hauteur = 5
    for i in range(hauteur):
        imprimer_la_ligne(i + 1)
    ```

:::

## Break et continue

Les instructions `break` et `continue` permettent de contrôler le flux d'une
boucle.
- `break` : sort de la boucle en cours.
- `continue` : passe à l'itération suivante de la boucle, en ignorant le
    reste du code dans le bloc de la boucle.

Par exemple, si vous voulez afficher les nombres de 1 à 10, mais ignorer le
nombre 5, vous pouvez utiliser `continue` :

```python
for i in range(1, 11):
    if i == 5:
        continue
    print(i)
```

Autre exemple, si vous voulez sortir de la boucle lorsque le mot
"stop" est rencontré, vous pouvez utiliser `break` :

```python
mots = ["bonjour", "salut", "stop", "au revoir"]
for mot in mots:
    if mot == "stop":
        break
    print(mot)
```

Dans cet exemple, la boucle s'arrête dès que le mot "stop" est rencontré, et
aucun mot après "stop" n'est affiché.

:::warning

    Attention à ne pas abuser de `break` et `continue`, car cela peut rendre le
    code difficile à lire et à comprendre. Utilisez-les avec parcimonie et
    privilégiez des structures de contrôle claires.

:::

:::warning

    Le mot `continue` porte un peu à confusion, car il ne signifie pas
    "continuer les instructions de la boucle", mais
    "continuer à l'itération suivante".
    
:::

## Testez votre compréhension


<details>
<summary>🤔 Testez votre compréhension</summary>

<MultipleChoiceTabs>

  <MultipleChoice>
  Que va afficher ce code ?
  ```python
  fruits = ["pomme", "banane", "cerise"]
  for f in fruits:
      print(f)
  ```

  <MultipleChoiceOption>
  Rien
  </MultipleChoiceOption>
  <MultipleChoiceOption isCorrect>
  pomme  
  banane  
  cerise
  </MultipleChoiceOption>
  <MultipleChoiceOption>
  ["pomme", "banane", "cerise"]
  </MultipleChoiceOption>
  <MultipleChoiceOption>
  Une erreur
  </MultipleChoiceOption>
  </MultipleChoice>

  <MultipleChoice>
  Quel est le résultat de ce code ?
  ```python
  for i in range(1, 6, 2):
      print(i)
  ```
  <MultipleChoiceOption>
  0 2 4
  </MultipleChoiceOption>
  <MultipleChoiceOption isCorrect>
  1 3 5
  </MultipleChoiceOption>
  <MultipleChoiceOption>
  1 3
  </MultipleChoiceOption>
  <MultipleChoiceOption>
  1 2 3 4 5
  </MultipleChoiceOption>
  </MultipleChoice>

  <MultipleChoice>
  Que renvoie cette boucle ?
  ```python
  colors = ["rouge", "vert", "bleu"]
  for idx, col in enumerate(colors, start=1):
      print(idx, col)
  ```
  <MultipleChoiceOption>
  (0, "rouge") (1, "vert") (2, "bleu")
  </MultipleChoiceOption>
  <MultipleChoiceOption>
  0 rouge  
  1 vert  
  2 bleu
  </MultipleChoiceOption>
  <MultipleChoiceOption isCorrect>
  1 rouge  
  2 vert  
  3 bleu
  </MultipleChoiceOption>
  <MultipleChoiceOption>
  rouge vert bleu séparés par des virgules
  </MultipleChoiceOption>
  </MultipleChoice>

  <MultipleChoice>
  Quel sera le résultat de ce code utilisant `zip` ? ([définition de zip](https://docs.python.org/3.3/library/functions.html#zip)) 
  ```python
  a = [1, 2, 3]
  b = ["a", "b", "c"]
  for x, y in zip(a, b):
      print(x, y)
  ```
  <MultipleChoiceOption isCorrect>
  1 a  
  2 b  
  3 c
  </MultipleChoiceOption>
  <MultipleChoiceOption>
  [1, "a"], [2, "b"], [3, "c"]
  </MultipleChoiceOption>
  <MultipleChoiceOption>
  ("1","a"), ("2","b"), ("3","c")
  </MultipleChoiceOption>
  <MultipleChoiceOption>
  Rien
  </MultipleChoiceOption>
  </MultipleChoice>

  <MultipleChoice>
  Que fait ce code ?
  ```python
  for n in range(10):
      if n == 5:
          break
      print(n)
  ```
  <MultipleChoiceOption>
  Affiche 5 puis stop
  </MultipleChoiceOption>
  <MultipleChoiceOption isCorrect>
  Affiche 0 1 2 3 4 puis stop
  </MultipleChoiceOption>
  <MultipleChoiceOption>
  Affiche 0 à 9
  </MultipleChoiceOption>
  <MultipleChoiceOption>
  Erreur
  </MultipleChoiceOption>
  </MultipleChoice>

  <MultipleChoice>
  Quel est le comportement de ce code ?
  ```python
  for n in range(6):
      if n % 2 == 0:
          continue
      print(n)
  ```
  <MultipleChoiceOption>
  Affiche 0 2 4
  </MultipleChoiceOption>
  <MultipleChoiceOption>
  Affiche 1 3
  </MultipleChoiceOption>
  <MultipleChoiceOption isCorrect>
  Affiche 1 3 5
  </MultipleChoiceOption>
  <MultipleChoiceOption>
  Rien
  </MultipleChoiceOption>
  </MultipleChoice>

  <!-- Questions plus difficiles -->

  <MultipleChoice>
  Que va afficher ce code ?
  ```python
  for i in range(5):
      if i == 2:
          continue
      if i == 4:
          break
      print(i)
  ```
  <MultipleChoiceOption>
  0 1 2 3 4
  </MultipleChoiceOption>
  <MultipleChoiceOption>
  0 1 3 4
  </MultipleChoiceOption>
  <MultipleChoiceOption isCorrect>
  0 1 3
  </MultipleChoiceOption>
  <MultipleChoiceOption>
  Erreur
  </MultipleChoiceOption>
  </MultipleChoice>

  <MultipleChoice>
  Que produit ce code imbriqué ?
  ```python
  for i in [1, 2]:
      for j in [0, 1]:
          if j == 1:
              break
          print(i, j)
  print("fin")
  ```
  <MultipleChoiceOption>
  1 0  
  1 1  
  2 0  
  2 1  
  fin
  </MultipleChoiceOption>
  <MultipleChoiceOption isCorrect>
  1 0  
  2 0  
  fin
  </MultipleChoiceOption>
  <MultipleChoiceOption>
  1 0 2 0 fin  dans une seule ligne
  </MultipleChoiceOption>
  <MultipleChoiceOption>
  Erreur
  </MultipleChoiceOption>
  </MultipleChoice>

  <MultipleChoice>
  Quel sera le contenu final de `lst` ? Ceci n'est **pas** un exemple de code lisible.
  ```python
  lst = [1, 2, 3, 4]
  for x in lst:
      if x % 2 == 0:
          lst.remove(x)
  print(lst)
  ```
  <MultipleChoiceOption>
  [1, 2, 3, 4]
  </MultipleChoiceOption>
  <MultipleChoiceOption isCorrect>
  [1, 3]
  </MultipleChoiceOption>
  <MultipleChoiceOption>
  [2, 4]
  </MultipleChoiceOption>
  <MultipleChoiceOption>
  Erreur
  </MultipleChoiceOption>
  </MultipleChoice>

</MultipleChoiceTabs>
</details>
