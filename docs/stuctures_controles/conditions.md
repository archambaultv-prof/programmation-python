---
sidebar_label: If, elif et else
sidebar_position: 1
description: Structures conditionnelles if, elif et else
---

# Structures conditionnelles if, elif et else

L'exécution d'un script Python se déroule normalement du haut vers le bas.
Cependant, il est parfois nécessaire d'exécuter certaines instructions que si
certaines conditions sont remplies. Les structures conditionnelles permettent
de contrôler ce flux en exécutant ou en ignorant certains blocs d'instructions
selon le résultat d'un test logique. En Python, cela se fait principalement à
l'aide des mots-clés `if`, `elif` et `else`, qui introduisent une condition et
définissent clairement quelles actions doivent être effectuées dans chaque cas.
Ces structures conditionnelles rendent ainsi votre programme capable de prendre
des décisions en fonction des données fournies ou des résultats intermédiaires
calculés durant son exécution.


## if, elif et else

Les trois principaux mots-clés utilisés pour créer des structures conditionnelles
sont `if`, `elif` et `else`. Voici un aperçu de chacun d'eux.

- `if` : introduit une condition à vérifier.
- `elif` : permet d'ajouter une ou plusieurs conditions alternatives si la
  première condition (`if`) n'est pas vraie.
- `else` : indique le bloc à exécuter si aucune des conditions précédentes n'est vraie.

Voici un exemple simple de structure conditionnelle :

```python
if condition1:
    print("Condition 1 est vraie")
elif condition2:
    print("Condition 2 est vraie")
elif condition3:
    print("Condition 3 est vraie")
else:
    print("Aucune condition n'est vraie")
```

Le nombre de `elif` est illimité, mais il est recommandé de ne pas en abuser pour
garder le code lisible.

:::note

Il n'est pas nécessaire d'avoir un `else` ou un `elif` à la fin d'une structure
conditionnelle. Le code suivant qui ne contient qu'un `if` est tout à fait
valide :

```python
if conditionSpeciale:
    print("Un message spécial")
```

:::

## L'opérateur ternaire

Puisque les structures conditionnelles `if`, `elif` et `else` ne sont pas des
expressions, elles ne peuvent pas être utilisées directement pour définir une
valeur. Par exemple, on ne peut pas faire ceci :

```python
x = if condition: 1 else: 2
```

Il faut donc utiliser une structure conditionnelle complète pour affecter une
valeur à une variable, comme ceci :

```python
if condition:
    x = 1
else:
    x = 2
```

C'est un peu long et répétitif. Heureusement, Python propose un *opérateur*
ternaire qui permet de simplifier l'écriture de certaines conditions. La
syntaxe de l'opérateur ternaire est la suivante :

```python
x = valeur_si_vrai if condition else valeur_si_faux
```

Voici comment utiliser un opérateur ternaire pour déterminer le maximum de deux
nombres :

```python
a = 10
b = 20

maximum = a if a > b else b
print(f"Le maximum entre {a} et {b} est {maximum}.")
```

---

## Conditions et opérateurs logiques

Les opérateurs logiques permettent de combiner plusieurs conditions pour créer
des expressions plus complexes. Voici quelques techniques courantes qui combinent
les structures conditionnelles et les opérateurs logiques pour écrire du code
plus concis et lisible.

### If imbriqués

Vous pouvez remplacer deux `if` imbriqués par un seul `if` imbriqué et un opérateur `and`.

```python
if condition1:
    if condition2:
        print("Les deux conditions sont vraies")
```
```python
if condition1 and condition2:
    print("Les deux conditions sont vraies")
```

### Double négation

Vous pouvez simplifier la lecture du code qui contient des `not` et `!=`
en inversant les deux branches de la condition.

```python
if not a != b:
    print("a et b sont égaux")
else:
    print("a et b sont différents")
```
```python
if a == b:
    print("a et b sont égaux")
else:
    print("a et b sont différents")
```

### Utilisation de `return`

Dans une fonction, vous pouvez utiliser `return` pour sortir de la fonction
et éviter d'utiliser un `else`.

```python
def ma_fonction(x: int) -> str:
    if x > 0:
        return "x est positif"
    else:
        return "x est négatif ou nul"
```

```python
def ma_fonction(x: int) -> str:
    if x > 0:
        return "x est positif"
    return "x est négatif ou nul"
```

Dans le deuxième exemple, si `x` est positif, la fonction renvoie immédiatement
une chaîne de caractères et sort de la fonction. Ceci est particulièrement utile
lorsque le code de la branche `else` est long et complexe alors que la branche `if`
est courte et existe principalement pour gérer les cas particuliers.

```python
def ma_fonction(x: int) -> str:
    if x <= 0:
        return "x doit être positif"
    else:
        # Code complexe maintenant trop indenté
        # ...
        return "x est positif"
```
```python
def ma_fonction(x: int) -> str:
    if x <= 0:
        return "x doit être positif"
    # Code complexe avec indentation normale
    # ...
    return "x est positif"
```