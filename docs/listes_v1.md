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
