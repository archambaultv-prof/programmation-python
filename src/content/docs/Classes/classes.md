---
title: Classes
description: Les classes en Python.
sidebar:
  order: 900
---

# Les classes en Python

Les classes sont des structures de données qui permettent de regrouper des
données et des fonctions qui agissent sur ces données. Un objet est une instance
d'une classe. Le concept de programmation
orientée objet remonte aux [années 1960](https://fr.wikipedia.org/wiki/Programmation_orient%C3%A9e_objet)
, mais il a été popularisé par des langages comme C++, Java et Python.

## Distinction entre classe et objet

Une classe est un modèle pour créer des objets. Elle définit les attributs et
les méthodes que les objets de la classe auront. Il s'agit d'une structure
abstraite qui ne contient pas de données réelles. En Python, une classe est
définie à l'aide du mot-clé `class`. Un objet est une instance d'une classe et
il est créé à l'aide du constructeur de la classe.

Autrement dit, la classe est le plan pour construire des objets. Avec un même plan,
vous pouvez construire plusieurs objets.

## Définir une classe

En Python, une classe est définie à l'aide du mot-clé `class`. Voici un exemple
de classe qui définit un point dans un espace à deux dimensions :

```python
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def distance(self, other):
        return ((self.x - other.x) ** 2 + (self.y - other.y) ** 2) ** 0.5
```

Dans cet exemple, la classe `Point` a deux attributs `x` et `y` qui représentent
les coordonnées du point. La méthode `__init__` est un constructeur qui initialise
les attributs de la classe. La méthode `distance` calcule la distance entre le
point courant et un autre point passé en argument.

Pour créer une instance de la classe `Point`, vous pouvez utiliser le constructeur
comme suit :

```python
p1 = Point(0, 0)
p2 = Point(3, 4)
print(p1.distance(p2))  # 5.0
```

## Constructeurs

Le constructeur d'une classe est une méthode spéciale appelée `__init__`. Cette
méthode est appelée lors de la création d'une instance de la classe. Elle est
utilisée pour initialiser les attributs de la classe. Le premier argument de
la méthode `__init__` est `self`, qui est une référence à l'instance de la classe
elle-même.

Il n'est pas nécessaire de déclarer explicitement le constructeur dans une classe
Python. Si vous ne le faites pas, Python crée un constructeur par défaut qui ne
fait rien.

Contrairement à d'autres langages de programmation, Python ne permet pas de définir
plusieurs constructeurs pour une classe. Cependant, vous pouvez définir des valeurs
par défaut pour les arguments du constructeur pour simuler des constructeurs
surchargés. Par exemples :

```python
class Point:
    def __init__(self, x=0, y=0):
        self.x = x
        self.y = y
```

Dans cet exemple, si vous ne fournissez pas d'arguments lors de la création d'une
instance de la classe `Point`, les valeurs par défaut `0` seront utilisées pour
les attributs `x` et `y`.

De façon générale, l'ensemble des attributs d'une classe est initialisé dans le
constructeur. Cela permet de garantir que chaque instance de la classe a un état
cohérent.

## Attributs et méthodes

On appelle attributs les variables qui appartiennent à une classe. Les attributs
sont accessibles à l'aide de la notation pointée (`.`). Par exemple, pour accéder
à l'attribut `x` d'une instance de la classe `Point`, vous pouvez utiliser `p.x`.

Les méthodes sont des fonctions qui appartiennent à une classe. Elles sont définies
de la même manière que les fonctions, mais elles prennent toujours `self` comme
premier argument. `self` est une référence à l'instance de la classe elle-même.
Par exemple, pour appeler la méthode `distance` de la classe `Point`, vous pouvez
utiliser `p1.distance(p2)`. Notez que vous n'avez pas besoin de passer `self` en
argument, Python le fait automatiquement pour vous.

En python, tous les attributs et méthodes d'une classe sont publics.
Cela signifie qu'ils peuvent être accédés et modifiés de l'extérieur de la classe.
Toutefois, la convention veut que les attributs et méthodes qui commencent par un
underscore `_` soient considérés comme privés et ne doivent pas être accédés de
l'extérieur de la classe. Par exemple, vous pouvez définir un attribut privé comme
suit :

```python
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y
        self._est_un_carre = x == y
```

Ceci n'est qu'une convention et vous pouvez toujours accéder aux attributs et méthodes
privés en Python. Cependant, il est recommandé de ne pas le faire, car cela peut
rendre votre code fragile et difficile à maintenir.

## Attributes de classe et attributs d'instance

En Python, il existe deux types d'attributs : les attributs de classe et les attributs
d'instance. Les attributs de classe sont partagés par toutes les instances de la
classe, tandis que les attributs d'instance sont propres à chaque instance.

Les attributs de classe sont définis à l'extérieur des méthodes de la classe. Ils
sont accessibles à l'aide de la notation pointée (`.`) à partir de la classe ou
de ses instances. Par exemple, pour définir un attribut de classe `compteur` qui
compte le nombre d'instances de la classe `Point`, vous pouvez faire :

```python
class Point:
    compteur = 0

    def __init__(self, x, y):
        self.x = x
        self.y = y
        Point.compteur += 1
```

Dans cet exemple, chaque fois qu'une nouvelle instance de la classe `Point` est
créée, l'attribut de classe `compteur` est incrémenté de `1`. Notez que le mot-clé
`Point` est utilisé pour accéder à l'attribut de classe `compteur` à l'intérieur
de la méthode `__init__`. Aussi, `compteur` n'est pas déclaré avec `self`, ce qui
signifie qu'il s'agit d'un attribut de classe.

Les attributs d'instance sont définis à l'intérieur des méthodes de la classe.
Ils sont accessibles à l'aide de la notation pointée (`.`) à partir de
l'instance de la classe représentée par `self`. Par exemple, pour définir un
attribut d'instance `couleur` qui représente la couleur d'un point, vous pouvez
faire :

```python
class Point:
    def __init__(self, x, y, couleur):
        self.x = x
        self.y = y
        self.couleur = couleur
```

## Méthodes spéciales

En Python, les méthodes spéciales sont des méthodes qui ont un nom spécial et
qui sont appelées automatiquement dans des situations particulières. Par exemple,
la méthode `__init__` est appelée lors de la création d'une instance de la classe.
Voici quelques-unes des méthodes spéciales les plus couramment utilisées :

- `__init__(self, ...)`: Constructeur de la classe.
- `__str__(self)`: Méthode appelée par la fonction `str` pour obtenir une représentation
  sous forme de chaîne de caractères de l'objet.
- `__repr__(self)`: Méthode appelée par la fonction `repr` pour obtenir une représentation
  sous forme de chaîne de caractères de l'objet. La différence avec `__str__` est que
    `__repr__` doit retourner une chaîne de caractères qui peut être évaluée pour
    recréer l'objet.
- `__eq__(self, other)`: Méthode appelée lors de l'évaluation de l'égalité entre deux
  objets à l'aide de l'opérateur `==`.
- `__lt__(self, other)`: Méthode appelée lors de l'évaluation de l'opérateur `<`.
- `__gt__(self, other)`: Méthode appelée lors de l'évaluation de l'opérateur `>`.
- `__le__(self, other)`: Méthode appelée lors de l'évaluation de l'opérateur `<=`.
- `__ge__(self, other)`: Méthode appelée lors de l'évaluation de l'opérateur `>=`.
- `__add__(self, other)`: Méthode appelée lors de l'addition de deux objets à l'aide
  de l'opérateur `+`.
- `__sub__(self, other)`: Méthode appelée lors de la soustraction de deux objets à l'aide
  de l'opérateur `-`.
- `__mul__(self, other)`: Méthode appelée lors de la multiplication de deux objets à l'aide
- `__truediv__(self, other)`: Méthode appelée lors de la division de deux objets à l'aide
  de l'opérateur `/`.

Voici un exemple de classe `Point` qui redéfinit les méthodes `__str__` et `__eq__` :

```python
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __str__(self):
        return f"({self.x}, {self.y})"

    def __eq__(self, other):
        return self.x == other.x and self.y == other.y
```

Dans tous les cas, les méthodes commençant et se terminant par deux traits de
soulignement `__` sont des méthodes spéciales et ne doivent pas être
appelées directement par le programmeur.
