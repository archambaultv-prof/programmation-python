---
sidebar_label: Réinventer les classes
sidebar_position: 50
---

# Réinventer les classes

:::warning

Page en construction.

:::

## En Python, tout est un dictionnaire

On entend souvent dire que "tout est un dictionnaire" en Python. En effet, pour
les classes et objets, les attributs et méthodes d'une classe sont bel et bien
stockés dans des dictionnaires. Il est possible d'accéder à tous les attributs
d'un objet en utilisant l'attribut spécial `__dict__` de l'objet.

```python
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def distance(self, other):
        return ((self.x - other.x) ** 2 + (self.y - other.y) ** 2) ** 0.5

p = Point(0, 0)
print(p.__dict__)  # {'x': 0, 'y': 0}
```

Pour les méthodes, elles sont stockées dans le dictionnaire
`__dict__` de la classe. Ce dictionnaire contient toutes les méthodes de la
classe, y compris les méthodes spéciales mais pas méthodes héritées sauf si elles
ont été redéfinies dans la classe fille. Bref ce que le programmeur a défini
dans la classe et les méthodes spéciales par défaut.

Il est possible d'obtenir la classe d'un objet en utilisant l'attribut spécial `__class__`.
Ainsi le code suivant affiche le dictionnaire des méthodes de la classe `Point`
pour l'objet `p`.

```python
print(p.__class__.__dict__)
```

### La fonction `dir`

Il y a beaucoup à dire sur la façon dont Python gère les attributs et les
méthodes des objets et les possibilités pour les manipuler. Nous allons néanmoins
simplement présenter une dernière fonction qui est très utile pour inspecter
les objets : la fonction `dir`. Elle combine en une seule liste les attributs et méthodes d'un objet
ou d'une classe et parcours la chaîne d'héritage pour afficher tous les attributs
et méthodes accessibles. Cela évite de devoir utiliser `__dict__` et `__class__`
pour inspecter les objets.

Dans la section précédente, nous avons décris le concept de classe. Dans cette
section, nous allons revoir ce même concept, mais en le réinventant.

Un programmeur veut créer des objets 'Personne' et 'Employé'. Dans un
langage de programmation qui ne supporte pas les classes, il pourrait utiliser des
dictionnaires pour représenter ces objets :

```python
def creer_personne(nom, age):
    return {'nom': nom, 'age': age}

p1 = creer_personne('Alice', 25)
p2 = creer_personne('Bob', 30)

print(f"{p1['nom']} a {p1['age']} ans.")  # Affiche : Alice a 25 ans.
print(f"{p2['nom']} a {p2['age']} ans.")  # Affiche : Bob a 30 ans.
```

On pourrait aussi ajouter des fonctions pour manipuler ces objets :

```python
def dire_bonjour(personne):
    print(f"Bonjour, je m'appelle {personne['nom']}.")
```

Ainsi, la clé du dictionnaire sert à accéder à l'attribut de l'objet. Les
fonctions qui agissent sur ces objets prennent ces dictionnaires en argument.
Si on voulait maintenant créer un objet 'Employé', on pourrait ajouter des clés
'salaire' et 'poste' au dictionnaire. On pourrait même réutiliser la fonction
'creer_personne' pour créer un objet 'Employé' :

```python
def creer_employe(nom, age, salaire, poste):
    employe = creer_personne(nom, age)
    employe['salaire'] = salaire
    employe['poste'] = poste
    return employe
```

On voit donc ici apparaître une notion de constructeur et d'héritage. Les
classes sont en quelques sortes des dictionnaires améliorés. Elles sont moins
générales, car on ne peut pas y ajouter des clés arbitraires, mais cette
restriction est justement ce qui les rend plus puissantes. En effet, les
attributs d'une classe sont définis explicitement et les méthodes qui agissent
sur ces attributs sont aussi définies explicitement. Ceci permet de mieux
structurer le code et de le rendre plus lisible. Cela permet aussi à votre éditeur
de code de vous aider en vous proposant des suggestions de code et en vous
signalant des erreurs.

Sous forme de classe, le code précédent pourrait ressembler à ceci :

```python
class Personne:
    def __init__(self, nom, age):
        self.nom = nom
        self.age = age

    def dire_bonjour(self):
        print(f"Bonjour, je m'appelle {self.nom}.")

class Employe(Personne):
    def __init__(self, nom, age, salaire, poste):
        super().__init__(nom, age)
        self.salaire = salaire
        self.poste = poste
```

On voit donc que les classes sont une manière plus structurée de gérer des
objets en programmation. Néanmoins les concepts de base sont les mêmes. L'appel
à `super().__init__` dans la classe `Employe` est l'équivalent de l'appel à
`creer_personne` dans la version sans classes. La méthode `dire_bonjour` de la
classe `Personne` est l'équivalent de la fonction `dire_bonjour` de la version
sans classes. Notez que `dire_bonjour` de la version sans classes fonctionne
également avec les dictinonnaires créés par `creer_employe` de la même manière
que `dire_bonjour` de la classe `Personne` fonctionne avec les objets de la
classe `Employe`.

Pour ce qui est du `self` de la méthode `__init__` ou `dire_bonjour` de la
classe `Personne`, il remplace le dictionnaire passé en argument dans la version
sans classes. En effet, `self` est une référence à l'instance de la classe
elle-même. Ainsi, `self.nom` est l'équivalent de `personne['nom']` dans la
version sans classes. De plus, `self` est passé automatiquement en argument à
toutes les méthodes de la classe, ce qui simplifie le code.
