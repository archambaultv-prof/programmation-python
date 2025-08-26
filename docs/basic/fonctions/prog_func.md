---
sidebar_label: Fonction d'ordre supérieur
sidebar_position: 1
---

# Fonction d'ordre supérieur

Python est un langage de programmation très flexible. Vous êtes déjà habitué à
écrire des programmes de manière impérative, c'est-à-dire en utilisant des
boucles et en définissant les fonctions à l'aide du mot clé `def`. Cependant, Python
supporte également la programmation fonctionnelle. Nous allons voir dans ce
cours certains aspects de la programmation fonctionnelle en Python comme les
fonctions lambda, les fonctions d'ordre supérieur et la compréhension de liste.

## Les fonctions d'ordre supérieur

En programmation fonctionnelle, les fonctions sont des objets de première classe.
Cela signifie que vous pouvez les passer en argument à d'autres fonctions,
les retourner comme valeur de retour, ou les stocker dans des variables.
Une fonction qui prend une ou plusieurs fonctions en argument ou qui retourne
une fonction est appelée une fonction d'ordre supérieur.

Puisque les fonctions représentent un "code réutilisable", lorsque vous passez
une fonction en argument à une autre fonction, c'est comme si vous passiez du
code en argument. Ceci est très puissant et permet de personnaliser le
comportement d'une fonction.

Par exemple, si vous avez une fonction qui prend une liste d'objet et une fonction 
pour convertir ces objets en un nombre, vous pouvez créer une fonction qui prend
cette fonction de conversion en argument et retourne la somme des nombres obtenus.

```python
def sum_objects(objects, convert):
    s = 0
    for obj in objects:
        s += convert(obj)
    return s

objects = ["1", "2", "3", "4"]
print(sum_objects(objects, int))  # 10
```

Cela vous évite d'avoir à écrire une fonction qui fonctionne uniquement pour
les nombres. Cela permet aussi d'encapsuler la logique de conversion dans une
fonction séparée.

Les fonctions d'ordre supérieur les plus courantes en Python sont `map`, `filter`
et `reduce`.

### La fonction `map`

La fonction `map` prend une fonction et une séquence en argument et retourne une
nouvelle séquence qui est le résultat de l'application de la fonction à chaque
élément de la séquence. Par exemple, pour calculer le carré de chaque élément
d'une liste, vous pouvez utiliser la fonction `map` comme suit :

```python
def square(x):
    return x * x

numbers = [1, 2, 3, 4, 5]
squared_numbers = map(square, numbers)
print(list(squared_numbers))  # [1, 4, 9, 16, 25]
```

De façon générale, pour appliquer une fonction `f` à chaque élément d'une
séquence `lst`, vous pouvez utiliser `map(f, lst)`. Si `lst` est la liste
`[x1, x2, ..., xn]`, alors `map(f, lst)` retourne la liste `[f(x1), f(x2), ..., f(xn)]`.

Pour les listes, on peut facilement définir la fonction `map` en Python comme suit :

```python
def map(f, lst):
    xs = []
    for x in lst:
        xs.append(f(x))
    return xs
```

Ainsi au final, `map(f, lst)` est équivalent à faire une simple boucle ce qui
s'exprime plus simplement avec une compréhension de liste :  `[f(x) for x in lst]`.

### La fonction `filter`

La fonction `filter` prend une fonction prédicat et une séquence en argument et
retourne une nouvelle séquence qui contient uniquement les éléments de la
séquence pour lesquels la fonction prédicat retourne `True`. Par exemple, pour
filtrer les nombres pairs d'une liste, vous pouvez utiliser la fonction `filter`
comme suit :

```python
def is_even(x):
    return x % 2 == 0

numbers = [1, 2, 3, 4, 5]
even_numbers = filter(is_even, numbers)
print(list(even_numbers))  # [2, 4]
```

Pour les listes, on peut facilement définir la fonction `filter` en Python comme suit :

```python
def filter(pred, lst):
    xs = []
    for x in lst:
        if pred(x):
            xs.append(x)
    return xs
```

### La fonction `reduce`

La fonction `reduce` prend une fonction à deux arguments et une séquence en
argument et retourne une valeur qui est le résultat de l'application de la
fonction binaire de manière cumulative. C'est à dire que la fonction est
d'abord appliquée aux deux premiers éléments de la séquence, puis au résultat
de cette application et au troisième élément, puis au résultat de cette
application et au quatrième élément, et ainsi de suite.

Par exemple, pour calculer la somme des éléments d'une liste, vous pouvez
utiliser la fonction `reduce` comme suit :

```python
from functools import reduce

def add(x, y):
    return x + y

numbers = [1, 2, 3, 4, 5]
sum_numbers = reduce(add, numbers)
print(sum_numbers)  # 15
```

:::note

Notez que la fonction `reduce` doit être importée du module `functools`. 

:::

:::warning

La fonction `reduce` retourne une erreur si la séquence est vide.

:::

### Testez votre compréhension

<details>
<summary>🤔 Testez votre compréhension</summary>

<MultipleChoiceTabs>

<MultipleChoice>
Quelle fonction applique une opération à tous les éléments d'un itérable ?

<MultipleChoiceOption isCorrect>

`map`

</MultipleChoiceOption>

<MultipleChoiceOption>

`filter`

</MultipleChoiceOption>

<MultipleChoiceOption>

`reduce`

</MultipleChoiceOption>

<MultipleChoiceOption>

`zip`

</MultipleChoiceOption>

</MultipleChoice>

<MultipleChoice>
Quelle fonction permet de sélectionner des éléments en fonction d'une condition ?

<MultipleChoiceOption>

`map`

</MultipleChoiceOption>

<MultipleChoiceOption isCorrect>

`filter`

</MultipleChoiceOption>

<MultipleChoiceOption>

`reduce`

</MultipleChoiceOption>

<MultipleChoiceOption>

`enumerate`

</MultipleChoiceOption>

</MultipleChoice>

<MultipleChoice>
Quelle fonction permet d'appliquer cumulativement une opération à tous les éléments d'un itérable ?

<MultipleChoiceOption>

`map`

</MultipleChoiceOption>

<MultipleChoiceOption>

`filter`

</MultipleChoiceOption>

<MultipleChoiceOption isCorrect>

`reduce`

</MultipleChoiceOption>

<MultipleChoiceOption>

`sorted`

</MultipleChoiceOption>

</MultipleChoice>

<MultipleChoice>
Quel est le résultat de : `list(map(lambda x: x**2, [1, 2, 3]))` ?

<MultipleChoiceOption>

`[1, 2, 3]`

</MultipleChoiceOption>

<MultipleChoiceOption isCorrect>

`[1, 4, 9]`

</MultipleChoiceOption>

<MultipleChoiceOption>

`[1, 8, 27]`

</MultipleChoiceOption>

<MultipleChoiceOption>

`[2, 3, 4]`

</MultipleChoiceOption>

</MultipleChoice>

<MultipleChoice>
Quel est le résultat de : `list(filter(lambda x: x % 2 == 0, [1, 2, 3, 4]))` ?

<MultipleChoiceOption isCorrect>

`[2, 4]`

</MultipleChoiceOption>

<MultipleChoiceOption>

`[1, 3]`

</MultipleChoiceOption>

<MultipleChoiceOption>

`[1, 2, 3, 4]`

</MultipleChoiceOption>

<MultipleChoiceOption>

`[4]`

</MultipleChoiceOption>

</MultipleChoice>

<MultipleChoice>
Quel est le résultat de : `reduce(lambda x, y: x+y, [1, 2, 3])` ?

<MultipleChoiceOption>

`[1, 2, 3]`

</MultipleChoiceOption>

<MultipleChoiceOption>

`[1, 3, 6]`

</MultipleChoiceOption>

<MultipleChoiceOption isCorrect>

`6`

</MultipleChoiceOption>

<MultipleChoiceOption>

`[3, 5]`

</MultipleChoiceOption>

</MultipleChoice>

<MultipleChoice>
Quelle fonction doit être importée depuis le module functools pour être utilisée ?

<MultipleChoiceOption>

`map`

</MultipleChoiceOption>

<MultipleChoiceOption>

`filter`

</MultipleChoiceOption>

<MultipleChoiceOption isCorrect>

`reduce`

</MultipleChoiceOption>

<MultipleChoiceOption>

`sorted`

</MultipleChoiceOption>

</MultipleChoice>

<MultipleChoice>
Quel résultat donne : `list(map(str.upper, ['a', 'b', 'c']))` ?

<MultipleChoiceOption>

`['a', 'b', 'c']`

</MultipleChoiceOption>

<MultipleChoiceOption>

`['abc']`

</MultipleChoiceOption>

<MultipleChoiceOption isCorrect>

`['A', 'B', 'C']`

</MultipleChoiceOption>

<MultipleChoiceOption>

`['A B C']`

</MultipleChoiceOption>

</MultipleChoice>

<MultipleChoice>
Quel résultat donne : `list(filter(None, [0, '', 'Python', None]))` ?

<MultipleChoiceOption>

`[0, '', 'Python', None]`

</MultipleChoiceOption>

<MultipleChoiceOption isCorrect>

`['Python']`

</MultipleChoiceOption>

<MultipleChoiceOption>

`[0, None]`

</MultipleChoiceOption>

<MultipleChoiceOption>

`[0, 'Python']`

</MultipleChoiceOption>

</MultipleChoice>

<MultipleChoice>
Comment obtenir le produit des éléments `[1, 2, 3, 4]` avec `reduce` ?

<MultipleChoiceOption isCorrect>

`reduce(lambda x, y: x*y, [1, 2, 3, 4])`

</MultipleChoiceOption>

<MultipleChoiceOption>

`reduce(lambda x, y: x+y, [1, 2, 3, 4])`

</MultipleChoiceOption>

<MultipleChoiceOption>

`reduce(lambda x, y: x/y, [1, 2, 3, 4])`

</MultipleChoiceOption>

<MultipleChoiceOption>

`reduce(lambda x, y: x-y, [1, 2, 3, 4])`

</MultipleChoiceOption>

</MultipleChoice>

</MultipleChoiceTabs>

</details>


## Les fonctions lambda

Les fonctions lambda sont des fonctions anonymes qui sont définies à l'aide du
mot clé `lambda`. Elles sont souvent utilisées pour définir des fonctions
simples qui ne nécessitent pas de nom. Par exemple, pour définir une fonction
qui retourne le carré d'un nombre, vous pouvez utiliser une fonction lambda
comme suit :

```python
square = lambda x: x * x
print(square(5))  # 25
```

Les fonctions lambda sont souvent utilisées en combinaison avec les fonctions
d'ordre supérieur comme `map`, `filter` et `reduce`. Elle évitent d'avoir à
définir une fonction séparée à l'aide du mot clé `def` pour des opérations
simples. Par exemple, pour calculer le carré de chaque élément d'une liste, vous
pouvez utiliser une fonction lambda avec la fonction `map` comme suit :

```python
numbers = [1, 2, 3, 4, 5]

squared_numbers = map(lambda x: x * x, numbers)
print(list(squared_numbers))  # [1, 4, 9, 16, 25]
```