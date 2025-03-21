---
sidebar_label: Polymorphisme
sidebar_position: 4
---

Le polymorphisme est un concept fondamental en programmation orientée objet. Il
permet de définir des méthodes dans une classe de base qui peuvent être
*redéfinies* dans les classes dérivées. Cela permet à un objet d'une classe
dérivée d'être traité comme un objet de la classe de base. Ce type de polymorphisme
est appelé *polymorphisme d'inclusion*.

Nous avons déjà vu des exemples de polymorphisme dans les sections précédentes.
À chaque fois que nous avons redéfini une méthode dans une classe fille, nous
avons utilisé le polymorphisme.

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

## Polymorphisme et typage canard

Puisque c'est comme si tout est un dictionnaire en Python, le polymorphisme est très facile à
mettre en œuvre. Lorsque vous appelez une méthode sur un objet, Python cherche d'abord la
méthode dans le dictionnaire de l'objet. Si la *signature* de la méthode est
trouvée, Python appelle la méthode. Sinon, Python remonte la chaîne d'héritage
pour trouver la méthode.

Ainsi, il n'est même pas nécessaire d'hériter d'une classe mère pour avoir
une méthode en commun. Vous pouvez simplement ajouter une méthode à un objet existant qui a
la même signature qu'une méthode de la classe mère.

```python
class Animal:
    def parler(self):
        print("L'animal parle.")

class Chien():
    def parler(self):
        print("Le chien aboie.")

animal = Animal()
chien = Chien()
for el in [animal, chien]:
    el.parler()  # La méthode parler est disponible pour les deux objets.
```

C'est ce qu'on appelle le *typage canard* en programmation orientée objet. Si
un objet a la méthode `parler`, alors il peut être traité comme une instance
d'une classe qui a la méthode `parler`.

## Quand utiliser le typage canard ?

De façon à bien structurer votre code, il est *recommandé* de définir des classes
mères, des classes abstraites ou des interfaces pour garantir que les méthodes
sont redéfinies dans les classes filles. Cela permet de rendre votre code plus
lisible et plus facile à maintenir. Cela évite aussi de dupliquer du code.

Néanmoins, l'utilisation du typage canard permet de ne pas avoir à utiliser
l'héritage pour obtenir du polymorphisme. Vous pouvez simplement ajouter des
méthodes à des objets existants pour obtenir le même effet. Cela est très utile
lorsque vous devez interagir avec des objets qui ne sont pas sous votre contrôle,
comme ceux provenant de bibliothèques tierces ou de la librairie standard.

Par exemple, la fonction `open` de Python retourne un objet qui représente un
fichier. L'objet retourné par `open` a plusieurs méthodes, mais si votre code n'a besoin
que de la méthode `read`, vous pouvez simplement ajouter cette méthode à un objet
existante pour obtenir le même effet.

```python
class MonFichier:
    def __init__(self, contenu):
        self.contenu = contenu

    def read(self):
        return self.contenu


f = MonFichier("Hello, world!")
print(f.read())  # Affiche : Hello, world!
```

Ainsi, chaque fois qu'une fonction dans votre code à besoin d'un fichier et
utilise uniquement la méthode `read`, vous pouvez simplement lui passer un
objet `MonFichier`. Ceci est beaucoup plus flexible et bien plus simple que
d'utiliser l'héritage.
