---
sidebar_label: Classe abstraite et interface
sidebar_position: 3
---

Nous avons vu qu'avec la notion d'héritage, il est possible de définir des
classes qui héritent des attributs et des méthodes d'une classe mère. Il est
aussi possible pour une classe fille de redéfinir une méthode de la classe
mère.

Il arrive parfois que la classe mère constitue seulement un gabarit pour les
classes filles. C'est-à-dire qu'on ne crée pas d'instances de cette classe. On
parle alors de classe abstraite.

Un exemple de classe abstraite est la classe `Animal` qui pourrait contenir des
méthodes comme `manger`, `dormir`, `se_deplacer`, etc. Ces méthodes pourraient
être définies de manière abstraite, c'est-à-dire sans corps, car chaque animal
les implémentera de manière différente. En effet, il n'existe pas dans la nature
d'animal qui soit simplement un `Animal`, mais plutôt des chiens, des chats, des
oiseaux, etc. qui sont des types d'animaux.

Dans une premier temps, on peut implenter le concept d'une classe abstraite en
Python en utilisant le mot-clé `pass` dans les méthodes abstraites. Par exemple :

```python
class Animal:
    def manger(self):
        pass

    def dormir(self):
        pass

    def se_deplacer(self):
        pass

class Chien(Animal):
    def manger(self):
        print("Le chien mange de la viande.")

    def dormir(self):
        print("Le chien dort dans sa niche.")

    def se_deplacer(self):
        print("Le chien court dans le jardin.")
```

Dans cet exemple, les méthodes de la classe `Animal` ne font rien. Ainsi, si un
programmeur instancie un objet de type `Animal` et appelle une de ces méthodes,
il ne se passera rien car les méthodes sont vides.

Cette solution n'est pas optimale car elle ne permet pas de s'assurer que
toutes les méthodes de la classe `Animal` sont redéfinies dans les classes
filles. De plus, il est possible d'instancier un objet de type `Animal` ce qui
n'a pas de sens dans notre exemple.

## Les classes abstraites en Python

Pour pallier à ces problèmes, Python propose un module nommé `abc` (pour
*Abstract Base Classes*) qui permet de définir des classes abstraites.

Voici comment on pourrait réécrire notre exemple en utilisant le module `abc` :

```python
from abc import ABC, abstractmethod

class Animal(ABC):
    @abstractmethod
    def manger(self):
        pass

    @abstractmethod
    def dormir(self):
        pass

    @abstractmethod
    def se_deplacer(self):
        pass

class Chien(Animal):
    def manger(self):
        print("Le chien mange de la viande.")

    def dormir(self):
        print("Le chien dort dans sa niche.")

    def se_deplacer(self):
        print("Le chien court dans le jardin.")
```

La classe `Animal` hérite de la classe `ABC` et on utilise le décorateur
`@abstractmethod` pour indiquer que les méthodes de la classe `Animal` sont
abstraites. Ainsi, si un programmeur oublie de redéfinir une méthode abstraite
dans une classe fille, Python lèvera une exception. De même si on tente
d'instancier un objet de type `Animal`, Python lèvera une exception.

```python
a = Animal()  # Lève une exception TypeError
```

```python
class Chat(Animal):
    def manger(self):
        print("Le chat mange des croquettes.")

    def dormir(self):
        print("Le chat dort sur le canapé.")

c = Chat()  # Lève une exception TypeError, car la méthode se_deplacer n'est pas redéfinie
```

## Les interfaces

Ce que nous venons de voir avec la classe `Animal` est un exemple d'interface.
Une interface est une classe abstraite qui ne contient que des méthodes
abstraites. Elle ne contient aucun attribut et aucune méthode concrète. Elle
définit en quelque sorte un contrat que les classes qui l'implémentent doivent
respecter. Ainsi, le programmeur peut être sûr que les classes qui implémentent
l'interface possèdent les méthodes définies dans l'interface.

## Classes abstractes avec des attributs

Il est tout à fait possible de définir des attributs dans une classe abstraite et certaines
méthodes concrètes. Par exemple :

```python linenums="1"
from abc import ABC, abstractmethod


class Animal(ABC):
    def __init__(self, nom):
        self.nom = nom

    @abstractmethod
    def manger(self):
        pass

    @abstractmethod
    def dormir(self):
        pass

    @abstractmethod
    def se_deplacer(self):
        pass

    def __str__(self):
        return f"{self.nom} est un animal."


class Chien(Animal):
    def manger(self):
        print("Le chien mange de la viande.")

    def dormir(self):
        print("Le chien dort dans sa niche.")

    def se_deplacer(self):
        print("Le chien court dans le jardin.")


c = Chien("Médor")
print(c.nom)  # Affiche : Médor
print(c)  # Affiche : Médor est un animal.
```

Dans cet exemple, la classe `Animal` possède un attribut `nom` et une méthode
`__str__` qui retourne une chaîne de caractères décrivant l'animal. La méthode
`__str__` est concrète, c'est-à-dire qu'elle a une implémentation par défaut.
Les méthodes `manger`, `dormir` et `se_deplacer` sont abstraites et doivent être
redéfinies dans les classes filles. Comme précédemment, si on oublie de
redéfinir une méthode abstraite, Python lèvera une exception. Même chose si on
tente d'instancier un objet de type `Animal`.

Il est donc possible de définir des classes abstraites qui sont à mi-chemin
entre une interface et une classe concrète.
