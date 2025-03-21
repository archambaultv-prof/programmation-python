---
sidebar_label: Les expressions
sidebar_position: 5
---

# Les listes

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

## Parcourir une liste

### Utilisation de la boucle `for`
On peut utiliser une boucle `for` pour parcourir les éléments d'une liste.

=== "Python"
    ```python
    ma_liste = [1, "texte", 3.14, True]
    for element in ma_liste:
        print(element)
    ```
=== "Résultat"
    ```
    1
    texte
    3.14
    True
    ```

### Utilisation de `range` avec `len`
On peut utiliser la fonction `range` avec `len` pour parcourir les indices d'une liste.

=== "Python"
    ```python
    ma_liste = [1, "texte", 3.14, True]
    for i in range(len(ma_liste)):
        print(f"Index {i} : {ma_liste[i]}")
    ```
=== "Résultat"
    ```
    Index 0 : 1
    Index 1 : texte
    Index 2 : 3.14
    Index 3 : True
    ```

### Utilisation de `enumerate`
La fonction `enumerate` permet de parcourir une liste en obtenant à la fois
l'indice et l'élément.

=== "Python"
    ```python
    ma_liste = [1, "texte", 3.14, True]
    for i, element in enumerate(ma_liste):
        print(f"Index {i} : {element}")
    ```
=== "Résultat"
    ```
    Index 0 : 1
    Index 1 : texte
    Index 2 : 3.14
    Index 3 : True
    ```

Dans cet exemple, on utilise `enumerate` pour obtenir l'indice et l'élément de
`ma_liste` et les imprimer.

## Références
Pour plus d'informations sur les listes en Python, vous pouvez consulter le [manuel officiel de Python](https://docs.python.org/3/tutorial/datastructures.html).

