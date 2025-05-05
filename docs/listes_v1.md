---
sidebar_label: Les listes (partie 1)
sidebar_position: 50
description: Introduction aux listes
---

# Les listes (partie 1)

## Qu'est-ce qu'une liste ?

Une liste est une structure de données en Python qui permet de stocker une
collection d'éléments. Les listes sont définies en utilisant des crochets `[]`
et les éléments sont séparés par des virgules. Les listes sont ordonnées,
modifiables (mutables) et peuvent contenir des éléments de types différents.

```python
ma_liste = [1, "texte", 3.14, True]
print(ma_liste)  # Affiche [1, 'texte', 3.14, True]
```

Dans l'exemple ci-dessus, `ma_liste` contient un entier, une chaîne de
caractères, un nombre à virgule flottante et un booléen.

## Accéder aux éléments d'une liste

On peut accéder aux éléments d'une liste en utilisant des indices. Comme pour
les chaînes de caractères, les indices commencent à 0. On peut également
utiliser des indices négatifs pour accéder aux éléments à partir de la fin de la
liste.

```python
ma_liste = [1, "texte", 3.14, True]
print(ma_liste[0])  # Affiche 1
print(ma_liste[1])  # Affiche 'texte'
print(ma_liste[-1])  # Affiche True
print(ma_liste[-2])  # Affiche 3.14
```

Une liste peut contenir d'autres listes. On peut accéder aux éléments d'une
liste de listes en utilisant des indices multiples.

```python
liste_de_listes = [[1, 2, 3], ["a", "b", "c"], [True, False, True]]
print(liste_de_listes[0])  # Affiche [1, 2, 3]
print(liste_de_listes[1][2])  # Affiche 'c'
print(liste_de_listes[2][1])  # Affiche False
```

Dans cet exemple, `liste_de_listes[1][2]` accède au troisième élément de la
deuxième liste, qui est `'c'`.

## Concaténation de listes
On peut concaténer (joindre) deux listes en utilisant l'opérateur `+`. Cela crée une nouvelle liste qui est la combinaison des deux listes d'origine.

```python
liste1 = [1, 2, 3]
liste2 = ["a", "b", "c"]
liste_concatenee = liste1 + liste2
print(liste_concatenee)  # Affiche [1, 2, 3, 'a', 'b', 'c']
```

Dans cet exemple, `liste_concatenee` est une **nouvelle** liste qui contient tous les éléments de `liste1` suivis de tous les éléments de `liste2`.

On peut également utiliser l'opérateur `*` pour répéter une liste un certain nombre de fois.

```python
liste = [1, 2, 3]
liste_repetee = liste * 3
print(liste_repetee)  # Affiche [1, 2, 3, 1, 2, 3, 1, 2, 3]
```

Dans cet exemple, `liste_repetee` est une **nouvelle** liste qui contient les éléments de `liste` répétés trois fois.

Il est aussi possible d'utiliser la méthode `extend()` pour ajouter les éléments d'une liste à une autre liste.

```python
liste1 = [1, 2, 3]
liste2 = ["a", "b", "c"]
liste1.extend(liste2)
print(liste1)  # Affiche [1, 2, 3, 'a', 'b', 'c']
```

Dans cet exemple, `liste1` est **modifiée** pour inclure les éléments de
`liste2`.

## Testez votre compréhension

<details>
<summary>🤔 Testez votre compréhension</summary>

<MultipleChoiceTabs>

<MultipleChoice>
Quelle est la syntaxe correcte pour créer une liste vide en Python ?

<MultipleChoiceOption isCorrect>

`[]`

</MultipleChoiceOption>

<MultipleChoiceOption>

`()`

</MultipleChoiceOption>

<MultipleChoiceOption>

`{}`

</MultipleChoiceOption>

<MultipleChoiceOption>

`list{}`

</MultipleChoiceOption>

</MultipleChoice>

<MultipleChoice>
Quelle méthode permet d'ajouter un élément à la fin d'une liste ?

<MultipleChoiceOption>

`add()`

</MultipleChoiceOption>

<MultipleChoiceOption>

`extend()`

</MultipleChoiceOption>

<MultipleChoiceOption isCorrect>

`append()`

</MultipleChoiceOption>

<MultipleChoiceOption>

`insert()`

</MultipleChoiceOption>

</MultipleChoice>

<MultipleChoice>
Comment accède-t-on au premier élément d'une liste `ma_liste` ?

<MultipleChoiceOption>

`ma_liste[1]`

</MultipleChoiceOption>

<MultipleChoiceOption isCorrect>

`ma_liste[0]`

</MultipleChoiceOption>

<MultipleChoiceOption>

`ma_liste[-1]`

</MultipleChoiceOption>

<MultipleChoiceOption>

`ma_liste.first()`

</MultipleChoiceOption>

</MultipleChoice>

<MultipleChoice>
Quelle opération permet d'obtenir le nombre d'éléments dans une liste ?

<MultipleChoiceOption>

`ma_liste.size()`

</MultipleChoiceOption>

<MultipleChoiceOption>

`ma_liste.count()`

</MultipleChoiceOption>

<MultipleChoiceOption isCorrect>

`len(ma_liste)`

</MultipleChoiceOption>

<MultipleChoiceOption>

`length(ma_liste)`

</MultipleChoiceOption>

</MultipleChoice>

<MultipleChoice>
Quel est le résultat de `len([1, [2, 3], 4])` ?

<MultipleChoiceOption>

`2`

</MultipleChoiceOption>

<MultipleChoiceOption>

`4`

</MultipleChoiceOption>

<MultipleChoiceOption isCorrect>

`3`

</MultipleChoiceOption>

<MultipleChoiceOption>

`1`

</MultipleChoiceOption>

</MultipleChoice>

<MultipleChoice>
Comment fusionner deux listes `a` et `b` en une seule liste ?

<MultipleChoiceOption>

`merge(a, b)`

</MultipleChoiceOption>

<MultipleChoiceOption>

`a + b`

</MultipleChoiceOption>

<MultipleChoiceOption isCorrect>

`a.extend(b)`

</MultipleChoiceOption>

<MultipleChoiceOption>

`concat(a, b)`

</MultipleChoiceOption>

</MultipleChoice>

<MultipleChoice>
Quelle méthode retire un élément d'une liste en fonction de son index ?

<MultipleChoiceOption>

`remove()`

</MultipleChoiceOption>

<MultipleChoiceOption isCorrect>

`pop()`

</MultipleChoiceOption>

<MultipleChoiceOption>

`delete()`

</MultipleChoiceOption>

<MultipleChoiceOption>

`erase()`

</MultipleChoiceOption>

</MultipleChoice>

<MultipleChoice>
Quel est le résultat de `[1, 2, 3] * 2` ?

<MultipleChoiceOption>

`[2, 4, 6]`

</MultipleChoiceOption>

<MultipleChoiceOption isCorrect>

`[1, 2, 3, 1, 2, 3]`

</MultipleChoiceOption>

<MultipleChoiceOption>

`[1, 4, 9]`

</MultipleChoiceOption>

<MultipleChoiceOption>

`[1, 2, 3, 2, 4, 6]`

</MultipleChoiceOption>

</MultipleChoice>

<MultipleChoice>
Quelle expression crée une liste de nombres de 0 à 4 ?

<MultipleChoiceOption>

`range(1, 5)`

</MultipleChoiceOption>

<MultipleChoiceOption>

`range(0, 5, 2)`

</MultipleChoiceOption>

<MultipleChoiceOption isCorrect>

`list(range(5))`

</MultipleChoiceOption>

<MultipleChoiceOption>

`[0...4]`

</MultipleChoiceOption>

</MultipleChoice>

</MultipleChoiceTabs>

</details>
