---
sidebar_label: Compréhension de liste
sidebar_position: 2
---

# Compréhension de liste

Un autre aspect important de la programmation fonctionnelle en Python est la
compréhension de liste. La compréhension de liste est une manière concise de
créer des listes. Elle incorpore dans une syntaxe compacte les boucles `for` et
les conditions `if`. C'est en quelque sorte une manière d'utiliser les
fonctions d'ordre supérieur `map` et `filter` de manière plus lisible.

Par exemple, pour créer une liste contenant les carrés des nombres de 1 à 5, vous
pouvez utiliser une compréhension de liste comme suit :

```python
squared_numbers = [x * x for x in range(1, 6)]
print(squared_numbers)  # [1, 4, 9, 16, 25]
```

De façon générale, pour créer une liste à partir d'une séquence `lst` en
appliquant une fonction `f` à chaque élément de la séquence, vous pouvez
utiliser une compréhension de liste comme suit : `[f(x) for x in lst]`. Si vous
désirez filtrer les éléments de la séquence en premier lieu, vous pouvez ajouter
une condition `if` à la fin de la compréhension de liste. Par exemple, pour
créer une liste contenant les carrés des nombres pairs de 1 à 5, vous pouvez
utiliser une compréhension de liste comme suit :

```python
squared_even_numbers = [x * x for x in range(1, 6) if x % 2 == 0]
print(squared_even_numbers)  # [4, 16]
```

## Boucles imbriquées

Tout comme il est possible de créer des boucles imbriquées, c'est à dire des
boucles à l'intérieur d'autres boucles, il est possible de créer des
compréhensions de liste imbriquées. Par exemple, pour créer une liste contenant
toutes les paires possibles de nombres de deux listes, vous pouvez utiliser une
compréhension de liste imbriquée comme suit :

```python
list1 = [1, 2, 3]
list2 = [4, 5, 6]
products = [(x, y) for x in list1 for y in list2]
print(products)
# [(1, 4), (1, 5), (1, 6), (2, 4), (2, 5), (2, 6), (3, 4), (3, 5), (3, 6)]
```

Le code ci-dessus est équivalent à la boucle imbriquée suivante :

```python
products = []
for x in list1:
    for y in list2:
        products.append((x, y))
```

Tous comme il est possible d'utiliser la variable de la première boucle dans la
deuxième boucle, il est possible dans une compréhension de liste imbriquée
d'utiliser la variable du premier `for` dans le deuxième `for`. Par exemple,
pour créer une liste contenant toutes les paires de nombres où le deuxième
nombre de la paire va de 0 au premier nombre de la paire, vous pouvez utiliser une
compréhension de

```python
list1 = [1, 2, 3]
products = [(x, y) for x in list1 for y in range(x + 1)]
print(products)
#[(1, 0), (1, 1), (2, 0), (2, 1), (2, 2), (3, 0), (3, 1), (3, 2), (3, 3)]
```

Le code ci-dessus est équivalent à la boucle imbriquée suivante :

```python
products = []
for x in list1:
    for y in range(x + 1):
        products.append((x, y))
```

## Conclusion

La communauté Python encourage l'utilisation des compréhensions de liste pour
leur lisibilité et leur concision. Les compréhensions de liste sont un outil
puissant pour créer des listes de manière concise et élégante. Elles permettent
de réduire la quantité de code nécessaire pour créer des listes en utilisant des
boucles `for` et des conditions `if`. Les compréhensions de liste sont un
moyen efficace de rendre votre code plus lisible et plus expressif.

## Testez votre compréhension

<details>
<summary>🤔 Testez votre compréhension</summary>

<MultipleChoiceTabs>

<MultipleChoice>
Quelle syntaxe correspond à une compréhension de liste en Python ?

<MultipleChoiceOption isCorrect>

`[x**2 for x in range(5)]`

</MultipleChoiceOption>

<MultipleChoiceOption>

`(x**2 for x in range(5))`

</MultipleChoiceOption>

<MultipleChoiceOption>

`{x**2 for x in range(5)}`

</MultipleChoiceOption>

<MultipleChoiceOption>

`<x**2 for x in range(5)>`

</MultipleChoiceOption>

</MultipleChoice>

<MultipleChoice>
Quel est le résultat de `[x*2 for x in [1, 2, 3]]` ?

<MultipleChoiceOption>

`[1, 2, 3]`

</MultipleChoiceOption>

<MultipleChoiceOption isCorrect>

`[2, 4, 6]`

</MultipleChoiceOption>

<MultipleChoiceOption>

`[1, 4, 9]`

</MultipleChoiceOption>

<MultipleChoiceOption>

`[1, 2, 3, 1, 2, 3]`

</MultipleChoiceOption>

</MultipleChoice>

<MultipleChoice>
Quelle expression crée une liste contenant uniquement les nombres pairs jusqu'à 10 ?

<MultipleChoiceOption>

`[x for x in range(10)]`

</MultipleChoiceOption>

<MultipleChoiceOption>

`[x for x in range(1, 10, 2)]`

</MultipleChoiceOption>

<MultipleChoiceOption isCorrect>

`[x for x in range(11) if x % 2 == 0]`

</MultipleChoiceOption>

<MultipleChoiceOption>

`[x*2 for x in range(10)]`

</MultipleChoiceOption>

</MultipleChoice>

<MultipleChoice>
Quelle syntaxe génère la liste `['A', 'B', 'C']` à partir de `['a', 'b', 'c']` ?

<MultipleChoiceOption>

`[x.capitalize() for x in ['a', 'b', 'c']]`

</MultipleChoiceOption>

<MultipleChoiceOption>

`[x.lower() for x in ['a', 'b', 'c']]`

</MultipleChoiceOption>

<MultipleChoiceOption>

`[x.swapcase() for x in ['a', 'b', 'c']]`

</MultipleChoiceOption>

<MultipleChoiceOption isCorrect>

`[x.upper() for x in ['a', 'b', 'c']]`

</MultipleChoiceOption>

</MultipleChoice>

<MultipleChoice>
Quelle compréhension de liste permet de générer `[1, 4, 9, 16]` ?

<MultipleChoiceOption>

`[x*x for x in range(1, 5, 2)]`

</MultipleChoiceOption>

<MultipleChoiceOption>

`[x*2 for x in range(4)]`

</MultipleChoiceOption>

<MultipleChoiceOption isCorrect>

`[x**2 for x in range(1, 5)]`

</MultipleChoiceOption>

<MultipleChoiceOption>

`[x+x for x in range(1, 5)]`

</MultipleChoiceOption>

</MultipleChoice>

<MultipleChoice>
Comment filtrer uniquement les nombres supérieurs à 2 dans la liste `[1, 2, 3, 4]` ?

<MultipleChoiceOption>

`[x for x in [1, 2, 3, 4]]`

</MultipleChoiceOption>

<MultipleChoiceOption>

`[x*2 for x in [1, 2, 3, 4]]`

</MultipleChoiceOption>

<MultipleChoiceOption isCorrect>

`[x for x in [1, 2, 3, 4] if x > 2]`

</MultipleChoiceOption>

<MultipleChoiceOption>

`[x > 2 for x in [1, 2, 3, 4]]`

</MultipleChoiceOption>

</MultipleChoice>

</MultipleChoiceTabs>

</details>
