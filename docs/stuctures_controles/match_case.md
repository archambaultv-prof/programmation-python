---
sidebar_label: Match et case
sidebar_position: 2
description: Structures conditionnelles match et case
---

# Match et case

Introduit en **Python 3.10**, `match case` permet d'éviter une longue série de
`if/elif` en offrant une syntaxe plus claire et expressive pour le filtrage par
motifs (pattern matching). La structure `match/case` permet de :

- Comparer des valeurs simples (`int`, `str`, etc.).
- Décomposer des structures comme des tuples ou des listes.
- Exprimer facilement des conditions telles que si `x` vaut `42` ou `43`.
- Exprimer facilement des conditions plus complexes telles que si `x > 100`.

:::info

Le `match/case` est une structure de contrôle complexe. Pour une description
complète, vous pouvez consulter sa description [PEP 636](https://peps.python.org/pep-0636/#or-patterns)
ainsi que la [documentation officielle](https://docs.python.org/3/reference/compound_stmts.html#the-match-statement).

:::

## Syntaxe de base

Voici la syntaxe de base de cette structure de contrôle :

```python
match variable:
    case valeur1:
        # instructions
    case valeur2:
        # instructions
    case _:
        # valeur par défaut (équivalent à else)
```

Par exemple, pour traduire la note d'un étudiant en appréciation :

```python
note = "A"

match note:
    case "A":
        print("Parfait!")
    case "B":
        print("Très bien!")
    case "C":
        print("Bien.")
    case "D":
        print("Passable.")
    case _:
        print("Échec.")
```

Le dernier cas `case _` est le cas par défaut, qui est exécuté si aucune des
autres conditions n'est remplie. Il est similaire à `else` dans une structure
`if/elif`.

### Comparaison avec `if/elif`

L'exemple précédent pourrait être écrit avec des `if/elif` :

```python
note = "A"
if note == "A":
    print("Parfait!")
elif note == "B":
    print("Très bien!")
elif note == "C":
    print("Bien.")
elif note == "D":
    print("Passable.")
else:
    print("Échec.")
```

Cependant, le `match/case` est plus lisible et extensible, surtout pour des motifs complexes.

## Case avec conditions

Parfois on aimerait exprimer des conditions plus complexes qu'une simple
comparaison. On peut le faire en ajoutant une condition `if` à la fin du
`case`. Par exemple, si nous voulons vérifier si une valeur est supérieure à 100
ou à 50, nous pouvons le faire comme suit :

```python
valeur = 42

match valeur:
    case x if x > 100:
        print("Très grand")
    case x if x > 50:
        print("Grand")
    case x:
        print(f"Petit : {x}")
```

## Cas multiples

Il est possible de combiner plusieurs cas en les séparant par ` | `. Par
exemple, si nous voulons traiter les notes A et B de la même manière, nous
pouvons le faire comme suit :

```python
note = "A"
match note:
    case "A" | "B":
        print("Très bien!")
    case "C":
        print("Bien.")
    case "D":
        print("Passable.")
    case _:
        print("Échec.")
```

--- 

:::warning

Le reste de cette section présente des exemples de motifs plus avancés, y compris la
décomposition de tuples, de listes, de dictionnaires et de classes. Vous pouvez
y revenir plus tard lorsque vous aurez acquis plus d'expérience avec
les structures de données en Python.

:::

---

## Décomposition de tuples

Il est possible de décomposer des tuples directement dans le `case`. Cela
permet d'extraire facilement des valeurs sans avoir à les indexer manuellement.

```python
point = (3, 0)

match point:
    case (0, 0):
        print("Origine")
    case (0, y):
        print(f"Sur l'axe Y à {y}")
    case (x, 0):
        print(f"Sur l'axe X à {x}")
    case (x, y):
        print(f"Coordonnées quelconques : x={x}, y={y}")
```

Notez comment nous avons pu extraire une valeur pour `x` et `y` directement
dans le `case`. Cela rend le code plus clair et évite d'avoir à écrire des
instructions supplémentaires pour accéder aux éléments du tuple.

## Décomposition de listes

Il est également possible de décomposer des listes. Par exemple, si nous avons
une liste de fruits et que nous voulons extraire le deuxième et le troisième
élément tout en vérifiant que le premier est "pomme", nous pouvons le faire comme
suit :

```python
fruits = ["pomme", "banane", "cerise"]

match fruits:
    case ["pomme", deuxieme, troisieme]:
        print(f"Deuxième fruit : {deuxieme}, troisième : {troisieme}")
    case _:
        print("Autre combinaison")
```

Il arrive souvent qu'on veuille vérifier la présence d'un élément en début de
liste, mais que le reste de la liste soit variable. Dans ce cas, on peut utiliser le
caractère `*` pour capturer le reste de la liste :

```python
fruits = ["pomme", "banane", "cerise"]
match fruits:
    case ["pomme", *autres]:  # autres est une liste
        print(f"Autres fruits : {autres}")
    case _:
        print("Pas de pomme")
```

## Décomposition de dictionnaires

Il est aussi possible de décomposer des dictionnaires. Par exemple, si nous
avons un dictionnaire représentant une personne avec des clés "nom" et "âge",
nous pouvons le faire comme suit :

```python
personne = {"nom": "Alice", "âge": 30}
match personne:
    case {"nom": nom, "âge": age}:
        print(f"Nom : {nom}, Âge : {age}")
    case _:
        print("Personne inconnue")
```

Notez que n'importe quel ordre des clés est accepté, ce qui est différent de la
décomposition de tuples ou de listes où l'ordre est important. Ainsi, dans
l'exemple ci-dessus, tout dictionnaire contenant les clés "nom" et "âge" sera
accepté, peu importe leur ordre. Par exemple `{"nom": "Alice", "âge": 30,
"ville": "Paris", "pays": "France"}` sera également accepté.


## Décomposition de classes

Nous verrons les classes dans un chapitre ultérieur, pour l'instant vous
pouvez les considérer comme des structures de données personnalisées. Le
`match/case` fonctionne aussi avec des classes. Par exemple, si nous avons une
classe `Point` qui représente un point dans un plan 2D, nous pouvons
l'utiliser comme suit :

```python
class Point:
    __match_args__ = ("x", "y")

    def __init__(self, x, y):
        self.x = x
        self.y = y

p = Point(1, 2)

match p:
    case Point(x=0, y=0):
        print("Origine")
    case Point(x, y):
        print(f"Point quelconque : x={x}, y={y}")
```

Notez que nous avons utilisé `__match_args__` pour indiquer les attributs
que nous voulons utiliser pour le `match`. Cela permet de décomposer
automatiquement les attributs de la classe dans le `case`.
