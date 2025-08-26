---
sidebar_label: Les fonctions en Python
sidebar_position: 0
---

# Les fonctions

Une fonction est un bloc de code qui effectue une tâche spécifique. Une fonction
permet de réutiliser ce bloc de code autant de fois que nécessaire sans avoir à
le réécrire. Par exemple, si vous avez un bloc de code qui affiche un message de
bienvenue, vous pouvez le mettre dans une fonction et l'appeler chaque fois que
vous avez besoin d'afficher ce message.

L'avantage de cette approche est que si vous voulez changer le message de
bienvenue, vous n'avez qu'à le faire à un seul endroit. Tous les appels de la
fonction afficheront le nouveau message.

Mais le vrai pouvoir des fonctions réside dans le fait qu'elles peuvent prendre
des paramètres et retourner des valeurs. Cela permet de généraliser le code et
de le rendre plus flexible, tout en gardant la caractéristique de réutilisabilité.

En Python, les fonctions sont définies en utilisant le mot-clé `def` suivi du
nom de la fonction et des paramètres entre parenthèses. Ils sont séparés par des
virgules.

```python
def bienvenue(nom):
    print(f"Bienvenue, {nom}, dans le cours de programmation objet!")

bienvenue("Léo")  # "Bienvenue, Léo, dans le cours de programmation objet!"
bienvenue("Bob")  # "Bienvenue, Bob, dans le cours de programmation objet!"
```

La fonction `bienvenue` prend un paramètre `nom` et affiche un message de
bienvenue personnalisé. Vous pouvez appeler cette fonction autant de fois que
vous le souhaitez avec différents noms. Elle ne spécifie aucune valeur de
retour. Pour spécifier une valeur de retour, utilisez le mot-clé `return`.

```python
def foo(a, b):
    return a + b * 2

resultat = foo(1, 2)
print(resultat)  # affiche 5
```

Dans cet exemple, la fonction `foo` prend deux paramètres `a` et `b` et
retourne la valeur de `a + b * 2`. La valeur de retour est stockée dans
la variable `resultat` et affichée à l'écran.

:::note

Les noms de fonctions `foo`, `bar`, `baz` sont des noms de
fonctions génériques souvent utilisés pour illustrer des concepts. En pratique,
il est préférable de donner des noms de fonctions plus descriptifs qui indiquent
clairement ce que fait la fonction.

:::

Si une fonction, comme `bienvenue`, ne spécifie pas de valeur de retour, elle
retourne `None` par défaut. Ainsi, le code suivant affichera d'abord le message
de bienvenue, puis `None`, car la fonction `bienvenue` ne spécifie pas de valeur
de retour et donc retourne `None` par défaut.

```python
resultat = bienvenue("Alice")
print(resultat)
# affiche :
# "Bienvenue, Alice, dans le cours de programmation objet!"
# "None"
```

#### Signature et corps d'une fonction

On appelle *signature* d'une fonction la combinaison de son nom et de ses
paramètres. Par exemple, la signature de la fonction `bienvenue` est
`bienvenue(nom)`. La code à l'intérieur d'une fonction est appelée le
*corps* de la fonction.

Il arrive souvent qu'un programmeur soit simplement intéressé par la signature
d'une fonction, car c'est toute l'information nécessaire pour appeler la
fonction.

## Les paramètres sont des variables

Les paramètres sont des *variables* qui sont utilisées pour stocker des valeurs
qui doivent être passées à la fonction.

```python
def ma_fonction(param1, param2):
    print(param1)
    print(param2)

a = 1
b = 2
ma_fonction(a, b)  # affiche 1 puis 2
```

Puisqu'ils sont des variables, il est possible d'affecter une nouvelle valeur à
un paramètre de la même façon que pour une variable normale. Cela n'affectera
pas la valeur de la variable passée en argument. Voici le code ci-haut modifié
pour illustrer ce point.

```python
def ma_fonction(param1, param2):
    param1 = param1 + 1
    # maintenant param1 vaut 1 de plus que la valeur passée en argument
    print(param1)
    print(param2)

a = 1
b = 2
ma_fonction(a, b)  # affiche 2 puis 2
print(a)  # a vaut toujours 1
```

La possibilité de modifier les paramètres peut être utile dans certains cas,
comme dans le cas des paramètres optionnels expliqué plus bas.

## Paramètres positionnels et par mot clé

Python permet de passer des paramètres à une fonction de deux façons différentes&nbsp;:
par position et par mot clé. Les paramètres positionnels sont passés dans le
même ordre que la signature de la fonction. Les exemples précédents utilisent
des paramètres positionnels.

Il est aussi possible de passer des paramètres par mot clé. Dans ce cas, on
spécifie le nom du paramètre suivi de la valeur à passer avec le signe `=`
entre les deux. Cela permet de passer les paramètres dans n'importe quel ordre.
Puisque le nom du paramètre est spécifié, cela rend le code plus lisible et
plus facile à comprendre.

```python
bienvenue(nom="Alice")
foo(a=1, b=2)
foo(b=2, a=1)  # équivalent à foo(a=1, b=2)
```

Par défaut, chaque paramètre peut-être passé par position ou par mot clé. Toutefois,
une fois qu'un paramètre est passé par mot clé, tous les paramètres *suivants*
doivent aussi être passés par mot clé. Par exemple, dans le code suivant les trois
premiers appels sont valides, mais le quatrième lève une erreur.

```python del="foo(a=1, 2)"
foo(1, 1)
foo(1, b=2)
foo(a=1, b=2)
foo(a=1, 2)  # erreur : 2 est passé par position après un paramètre nommé
```

### Forcer les paramètres par mot clé

Il est possible de forcer les paramètres à être passés par mot clé en utilisant
une étoile `*` dans la signature de la fonction. Cela signifie que tous les
paramètres suivants doivent être passés par mot clé. Par exemple dans le code
suivant, `texte` peut être passé par position ou par mot clé, mais `fois` doit
être passé par mot clé.

```python del="repete_print("abc", 3)"
def repete_print(texte, *, fois):
    for _ in range(fois):
        print(texte)

repete_print("abc", fois=3)  # OK
repete_print(texte="abc", fois=3)  # OK
repete_print("abc", 3)  # lève une erreur
```

:::tip

Comme dans le code `for _ in range(fois):` ci-haut, vous pouvez 
utiliser `_` comme nom de variable si vous n'avez
pas besoin de la valeur. C'est une convention pour indiquer que la valeur n'est
pas utilisée.

:::

Forcer les paramètres par mot clé est un style de programmation souvent
 rencontré en python. Cela rend le code plus lisible et plus facile à
comprendre. Un bon exemple de cette technique est la fonction `print` qui
accepte un paramètre optionnel `sep` qui permet de spécifier le séparateur
entre les éléments à afficher.

```python
print(1, 2, 3, sep=" || ")  # affiche "1 || 2 || 3"
print(1, 2, 3)  # affiche "1 2 3"
print(1, 2, 3, " || ")  # affiche "1 2 3  || ". 'sep' n'est jamais fourni.
```

Un autre exemple est la fonction `sorted` qui accepte un paramètre optionnel `key`
et un paramètre optionnel `reverse`. Ces paramètres sont utilisés pour spécifier
la fonction de comparaison et l'ordre de tri respectivement.

```python
liste = [3, 1, 2]
print(sorted(liste))  # affiche [1, 2, 3]
print(sorted(liste, reverse=True))  # affiche [3, 2, 1]
```

Il est impossible d'utiliser les paramètres optionnels des deux exemples
ci-haut simplement par position, il faut utiliser les mots clés. Plusieurs
autres fonctions de la librairie standard de python utilisent cette technique.
Vous pouvez faire de même dans votre code.

### Forcer les paramètres par position

Bien que plus rarement utilisé, il est possible de forcer les paramètres à être
passés par position en utilisant `/` dans la signature de la fonction. Cela
signifie que tous les paramètres précédents doivent être passés par position.
Par exemple, dans le code suivant, `texte` doit être passé par position et `fois`
peut être passé par position ou par mot clé.

```python del="repete_print(texte='abc', fois=3)"
def repete_print(texte, /, fois):
    for _ in range(fois):
        print(texte)

repete_print("abc", 3)  # OK
repete_print("abc", fois=3)  # OK
repete_print(texte="abc", fois=3)  # lève une erreur
```

On rencontre très rarement cette technique en python, sauf avec certaines fonctions
de la librairie standard pour des raisons techniques (elles sont en fait implémentées
en C). Il est donc peu probable que vous ayez à utiliser cette technique dans votre
code.

Il est possible de combiner les deux techniques. Dans le code suivant, `param1`
doit être passé par position, `param2` peut être passé par position ou par mot
clé et `param3` doit être passé par mot clé.

```python
def ma_fonction(param1, /, param2, *, param3):
    print(param1)
    print(param2)
    print(param3)

ma_fonction(1, 2, param3=3)  # affiche 1, 2, 3
```


## Paramètres optionnels

Par défaut, tous les paramètres d'une fonction sont obligatoires. Cela signifie
que vous devez passer une valeur pour chaque paramètre lors de l'appel de la
fonction. Toutefois, il est possible de définir des paramètres optionnels en
leur assignant une valeur par défaut dans la signature de la fonction. Cela
permet d'appeler la fonction sans passer de valeur pour ces paramètres. C'est
très utile lorsqu'on veut permettre de modifier le comportement d'une fonction
tout fournissant un comportement par défaut.

```python
def dire_bonjour(nom, salutation="Bonjour"):
    print(f"{salutation}, {nom}!")

dire_bonjour("Alice")  # affiche "Bonjour, Alice!"
dire_bonjour("Bob", "Salut")  # affiche "Salut, Bob!"
```

Les paramètres optionnels doivent toujours être placés *après* les paramètres
obligatoires. C'est logique, s'ils étaient placés avant, comment Python
distinguerait-il les paramètres optionnels des paramètres obligatoires? Par
exemple, si python permettait d'écrire le code suivant

```python del="='Bonjour'"
def dire_bonjour(salutation='Bonjour', nom):
    print(f"{salutation}, {nom}!")
```

alors, que signifierait `dire_bonjour("Alice")`? Comment Python saurait-il s'il
s'agit du nom ou de la salutation ?

Il est à noter une particularité du langage python. La valeur par défaut est
évaluée *une seule fois* lors de la définition de la fonction. Cela signifie
que si la valeur par défaut est un objet mutable (comme une liste ou un
dictionnaire), les modifications apportées à cet objet seront persistantes entre
les appels de la fonction.

```python
def ajouter_element(element, liste=[]):
    liste.append(element)
    return liste

print(ajouter_element(1))  # affiche [1]
print(ajouter_element(2))  # affiche [1, 2]
```

Dans cet exemple, la liste par défaut est créée une seule fois lors de la
définition de la fonction. Les appels subséquents de la fonction utilisent la
même liste. Pour éviter ce comportement, il est recommandé d'utiliser `None` et
de créer une nouvelle liste à l'intérieur de la fonction.

```python
def ajouter_element(element, liste=None):
    if liste is None:
        liste = []
    liste.append(element)
    return liste

print(ajouter_element(1))  # affiche [1]
print(ajouter_element(2))  # affiche [2]
```

On utilise donc astucieusement la possibilité d'affecter une valeur à un
paramètre pour créer une nouvelle liste si le paramètre est `None`.

:::danger

Ne jamais utiliser un objet mutable comme valeur par
défaut pour un paramètre optionnel. Cela peut causer des comportements
inattendus. Utiliser `None` à la place et créer un nouvel objet à l'intérieur de
la fonction.

:::

## Nombre variable de paramètres positionnels

Il est possible de définir une fonction qui accepte un nombre variable de
paramètres positionnels en utilisant l'opérateur `*` devant le nom d'un paramètre. Par
convention, on utilise `args` pour désigner ce paramètre. Il n'est pas possible d'utiliser
`*args` dans la signature de la fonction en même temps que `*` pour forcer les paramètres
par mot clé.

Il peut sembler étrange de définir une fonction qui accepte un nombre variable
de paramètres, mais cela peut être très utile dans certains cas. Par exemple la
fonction `print` accepte un nombre variable de paramètres et les affiche tous.
Si elle prenait une liste à la place qui contient les éléments à afficher, il
serait impossible de savoir s'il faut imprimer la liste (avec les crochets) ou
les éléments de la liste.

Un autre cas est lorsqu'on veut écrire une fonction qui manipule des fonctions.
Il est souvent utile de faire abstraction du nombre exact de paramètres de la
fonction manipulée. Les
décorateurs utilisent cette
technique pour fonctionner sur tous les types de fonctions, peut importe le
nombre de paramètres.

Néanmoins, avant de continuer plus loin, il est important de noter que
dans la plupart des cas, mieux vaut prendre une liste en paramètre plutôt que
d'utiliser un nombre variable de paramètres. Cela rend le code plus lisible et
plus facile à comprendre. De plus, la structure de données naturelle pour
stocker un nombre variable d'éléments est une liste.

:::tip

À moins d'avoir une très bonne raison, mieux vaut utiliser
une liste comme paramètre plutôt qu'un nombre variable de paramètres.

:::

Un autre exemple d'utilisation de paramètres variables est la fonction `sum` qui
calcule la somme de tous les paramètres passés. Voici une implémentation
possible de cette fonction.

```python
def somme(*args):
    total = 0
    for arg in args:
        total += arg
    return total

print(somme(1, 2, 3))  # affiche 6
```

Il ne peut y avoir qu'un seul paramètre variable par fonction. La fonction 
suivante est mal définie et lèvera une erreur.

```python del="*args2"
def ma_fonction(param1, *args1, *args2):
    pass
```

Il est possible de combiner des paramètres obligatoires, des paramètres
optionnels et le paramètre variable dans une même fonction. Dans ce cas,
n'importe quel ordre des paramètres est permis. Oui c'est mélangeant, car sans
paramètre variable les paramètres optionnels doivent être placés après les
paramètres obligatoires. La raison est qu'il n'y a plus d'ambiguïté, car le
paramètre variable peut prendre tous les paramètres restants.

Dans le case simple suivant, on a deux paramètres obligatoires et un paramètre
variable.
```python
def ma_fonction(param1, param2, *args):
    print(param1)
    print(param2)
    print(args)

ma_fonction(1, 2, 3, 4, 5)  # affiche 1, 2, (3, 4, 5)
ma_fonction(1, 2)  # affiche 1, 2, ()
```

On peut aussi combiner des paramètres optionnels et un paramètre variable. Dans le
code ci-dessous, si jamais un seul paramètre est passé, le deuxième paramètre
sera `defaut` et le paramètre variable sera vide. Si deux paramètres sont passés,
le paramètre variable sera vide. Le paramètre variable sera non vide seulement
si plus de deux paramètres sont passés.

```python
def ma_fonction(param1, param2="defaut", *args):
    print(param1)
    print(param2)
    print(args)

ma_fonction(1, 2, 3, 4, 5)  # affiche 1, 2, (3, 4, 5)
ma_fonction(1)  # affiche 1, defaut, ()
```

Bien que plus mélangeant, le code ci-dessous est parfaitement valide. La seule façon
de founir une valeur au `param2` est de faire un appel par mot clé. Puisque `param2`
n'a pas de valeur par défaut, il est obligatoire de fournir une valeur pour ce paramètre.

```python
def ma_fonction(param1, *args, param2):
    print(param1)
    print(args)
    print(param2)

ma_fonction(1, 2, 3, param2=4)  # affiche 1, (2, 3), 4
ma_fonction(1, param2=4)  # affiche 1, (), 4
ma_fonction(1, 2, 3, 4)  # lève une erreur  
```

Finalement, on peut aussi mettre des paramètres optionnels après le paramètre variable.

```python
def ma_fonction(param1, *args, param2="defaut"):
    print(param1)
    print(args)
    print(param2)

ma_fonction(1, 2, 3, param2=4)  # affiche 1, (2, 3), 4
ma_fonction(1, 2, 3)  # affiche 1, (2, 3), defaut
```

## Nombre variable de paramètres nommés

Il est possible de définir une fonction qui accepte un nombre variable de
paramètres par mot clé en utilisant l'opérateur `**` devant le nom d'un
paramètre. Par convention, on utilise `kwargs` pour désigner ce paramètre.
Contraitement au paramètre positionnel variable, le paramètre par mot clé variable
*doit* être le dernier paramètre de la fonction. De plus, sa valeur est un
dictionnaire qui contient les paramètres nommés passés à la fonction. La clé
est le nom du paramètre et la valeur est la valeur passée.

```python
def repete_print(**kwargs):
    fois = kwargs.get("fois", 1)
    texte = kwargs.get("texte", None)
    if texte is None:
        return
    for _ in range(fois):
        print(texte)

repete_print(texte="abc", fois=3)  # affiche "abc" trois fois
repete_print(fois=3, texte="abc")  # affiche "abc" trois fois
repete_print(texte="abc")  # affiche "abc" une fois
repete_print(fois=3)  # n'affiche rien
repete_print()  # n'affiche rien
```

## Appel avec * et **

Finalement, il est possible de passer une liste ou un dictionnaire à une fonction
qui accepte un nombre variable de paramètres positionnels ou par mot clé en utilisant
l'opérateur `*` ou `**` respectivement. Cela permet de déballer les éléments de la
liste ou du dictionnaire et de les passer à la fonction.

```python
def ma_fonction(param1, param2, param3):
    print(param1)
    print(param2)
    print(param3)

args_liste = [1, 2, 3]
ma_fonction(*args_liste)  # affiche 1, 2, 3

kwargs_dict = {"param1": 1, "param2": 2, "param3": 3}
ma_fonction(**kwargs_dict)  # affiche 1, 2, 3
```

Il est aussi possible de combiner les deux techniques si vous voulez vraiment mélanger
le programmeur qui lira votre code.

```python
args_liste = [1, 2]
kwargs_dict = {"param3": 3}
ma_fonction(*args_liste, **kwargs_dict)  # affiche 1, 2, 3
```

:::caution

À moins d'avoir une bonne raison, mieux vaut éviter
d'utiliser `*` et `**` pour passer des paramètres à une fonction. Cela rend le
code plus difficile à lire et à comprendre.

:::

---

Ancien site :

## Utilité des fonctions

Les fonctions sont des blocs de code réutilisables qui permettent de structurer et d'organiser le code de manière logique. Elles facilitent la maintenance, la lisibilité et la réutilisation du code. En encapsulant des tâches spécifiques dans des fonctions, on peut éviter la duplication de code et rendre le programme plus modulaire.

## Retourner plusieurs valeurs

En Python, une fonction peut retourner plus d'une valeur en utilisant des tuples. Cela permet de renvoyer plusieurs résultats à partir d'une seule fonction.

```python
def calculer(a, b):
    somme = a + b
    produit = a * b
    return somme, produit

s, p = calculer(3, 4)
print(f"Somme: {s}, Produit: {p}")  # Affiche "Somme: 7, Produit: 12"
```

## Appeler une fonction depuis une autre fonction

Une fonction peut appeler une autre fonction. Cela permet de décomposer des tâches complexes en sous-tâches plus simples et de réutiliser des fonctions existantes.

=== "Python"
    ```python
    def chauffer_eau(temperature):
        print(f"Chauffage de l'eau à {temperature} degrés.")
        return f"eau à {temperature} degrés"

    def moudre_grains():
        print("Mouture des grains de café.")
        return "café moulu"

    def preparer_cafe():
        eau = chauffer_eau(90)
        cafe = moudre_grains()
        print(f"Préparation du café avec {eau} et {cafe}.")
        return "café prêt"

    cafe = preparer_cafe()
    print(cafe)
    ```
=== "Résultat"
    ```
    Chauffage de l'eau à 90 degrés.
    Mouture des grains de café.
    Préparation du café avec eau à 90 degrés et café moulu.
    café prêt
    ```

## Paramètres d'une fonction

### 0 ou plusieurs paramètres

Une fonction peut être définie sans paramètres ou avec plusieurs paramètres. 

```python
def saluer():
    print("Bonjour!")

def additionner(a, b):
    return a + b

saluer()  # Affiche "Bonjour!"
print(additionner(3, 4))  # Affiche 7
```

### Valeur par défaut

Les paramètres peuvent avoir des valeurs par défaut, ce qui permet de les omettre lors de l'appel de la fonction.

```python
def saluer(nom="tout le monde"):
    print(f"Bonjour, {nom}!")

saluer()  # Affiche "Bonjour, tout le monde!"
saluer("Alice")  # Affiche "Bonjour, Alice!"
```

!!! warning "Attention"
    Les objets mutables (comme les listes ou les dictionnaires) utilisés comme valeurs par défaut peuvent poser des problèmes. Ils sont partagés entre les appels de la fonction, ce qui peut entraîner des effets de bord inattendus.
    Mieux vaut utiliser `None` comme valeur par défaut et initialiser l'objet à l'intérieur de la fonction.

```python linenums="1"
def ajouter_element(element, liste=[]):
    liste.append(element)
    return liste

print(ajouter_element(1))  # Affiche [1]
print(ajouter_element(2))  # Affiche [1, 2]

def ajouter_element2(element, liste=None):
    if liste is None:
        liste = []
    liste.append(element)
    return liste

print(ajouter_element2(1))  # Affiche [1]
print(ajouter_element2(2))  # Affiche [2]
```

### Paramètres variables avec `*args`

Une fonction peut accepter un nombre variable de paramètres en utilisant `*args`.

```python
def additionner_tout(*args):
    return sum(args)

print(additionner_tout(1, 2, 3))  # Affiche 6
print(additionner_tout(5, 10, 15, 20))  # Affiche 50
```

### Appel avec mot clé

Les paramètres peuvent être passés par mot clé, ce qui permet de les spécifier dans n'importe quel ordre.

```python
def decrire_personne(nom, age, ville):
    print(f"{nom} a {age} ans et habite à {ville}.")

decrire_personne(age=30, ville="Paris", nom="Alice")
# Affiche "Alice a 30 ans et habite à Paris."
```

## Portée locale et globale

La portée d'une variable détermine où elle peut être utilisée dans le code. En
Python, les variables peuvent avoir une portée locale ou globale.

### Variables locales

Les variables définies à l'intérieur d'une fonction sont locales à cette
fonction et ne peuvent pas être utilisées en dehors de celle-ci.

```python
def ma_fonction():
    x = 10  # Variable locale
    print(x)

ma_fonction()  # Affiche 10
print(x)  # Erreur : x n'est pas défini en dehors de la fonction
```

### Variables globales

Les variables définies en dehors de toutes les fonctions sont globales et
peuvent être utilisées dans n'importe quelle fonction. Pour modifier une
variable globale à l'intérieur d'une fonction, on doit utiliser le mot-clé
`global`.

```python
x = 10  # Variable globale

def ma_fonction():
    global x
    x = 20  # Modification de la variable globale
    print(x)

ma_fonction()  # Affiche 20
print(x)  # Affiche 20
```

!!! warning "Attention"
    L'utilisation excessive de variables globales peut rendre le code difficile à comprendre et à maintenir. Il est recommandé de limiter l'utilisation des variables globales et de préférer les variables locales autant que possible.

### Variables locales et globales avec le même nom

Si une variable locale et une variable globale ont le même nom, la variable
locale masque la variable globale à l'intérieur de la fonction.

```python
x = 10  # Variable globale

def ma_fonction():
    x = 20  # Variable locale
    print(x)  # Affiche 20

ma_fonction()
print(x)  # Affiche 10
```
