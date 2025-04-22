---
sidebar_label: Structures itératives
sidebar_position: 3
---

# Les structures itératives

## Boucle while

La boucle `while` en Python permet d'exécuter un bloc de code tant qu'une
condition est vraie. La condition est évaluée avant chaque itération de la
boucle. Si la condition est fausse dès le début, le bloc de code ne sera jamais
exécuté.

### Syntaxe
```python
while condition:
    # bloc de code à exécuter
```

### Exemples
Cet exemple affiche les nombres de 1 à 5 :
```python linenums="1"
i = 1
while i <= 5:
    print(i)
    i += 1
```

Cet exemple continue à demander à l'utilisateur d'entrer un nombre jusqu'à ce
qu'il entre un nombre positif :
```python linenums="1"
nombre = -1
while nombre <= 0:
    nombre = int(input("Entrez un nombre positif : "))
print(f"Merci, vous avez entré {nombre}")
```

!!! tip "Conseil"
    Les boucles `while` sont un bon choix lorsqu'on ne sait pas à
    l'avance combien d'itérations seront nécessaires pour terminer une tâche.

Par exemple si vous avez un investissement de 1000$ et que vous voulez savoir
combien de temps il faudra pour doubler votre investissement à un taux de 5% par
an, vous pouvez utiliser une boucle `while` pour calculer le nombre d'années
nécessaires.

```python linenums="1"
investissement = 1000
taux = 0.05
annees = 0
while investissement < 2000:
    investissement *= 1 + taux
    annees += 1
print(f"Il faudra {annees} années pour doubler votre investissement.")
```

### Attention aux boucles infinies
Il est important de s'assurer que la condition de la boucle `while` deviendra
fausse à un moment donné, sinon la boucle continuera à s'exécuter indéfiniment.
Par exemple, la boucle suivante est une boucle infinie :
```python linenums="1"
compteur = 10
while compteur <= 10:
    print(f"Compteur: {compteur}")
    compteur -= 1
```

Pour éviter cela, assurez-vous que la condition de la boucle change à chaque
itération ou utilisez une instruction `break` pour sortir de la boucle :
```python linenums="1"
compteur = 10
while compteur <= 10:
    print(f"Compteur: {compteur}")
    compteur -= 1
    if compteur <= 0:
        break
```

## Boucle for

La boucle `for` en Python est utilisée pour itérer sur une séquence (comme une
liste, un tuple, un dictionnaire, un ensemble ou une chaîne de caractères) ou
sur une plage de nombres.

### Syntaxe
```python
for element in sequence:
    # bloc de code à exécuter
```

### Exemples
Cet exemple affiche chaque élément d'une liste :
```python linenums="1"
fruits = ["pomme", "banane", "cerise"]
for fruit in fruits:
    print(fruit)
```

Cet exemple utilise la fonction `range` pour afficher les nombres de 0 à 4 :
```python linenums="1"
for i in range(5):
    print(i)
```

### La fonction range

La fonction `range` génère une séquence de nombres. Elle peut prendre un, deux
ou trois arguments :

- `range(stop)` : génère les nombres de 0 à `stop - 1`
- `range(start, stop)` : génère les nombres de `start` à `stop - 1`
- `range(start, stop, step)` : génère les nombres de `start` à `stop - 1`, en incrémentant de `step`

### Exemples avec range
Cet exemple affiche les nombres de 1 à 5 :
```python linenums="1"
for i in range(1, 6):
    print(i)
```

Cet exemple affiche les nombres pairs de 0 à 10 :
```python linenums="1"
for i in range(0, 11, 2):
    print(i)
```

!!! tip "Conseil"
    Les boucles `for` sont un bon choix lorsqu'on sait à l'avance 
    combien d'itérations seront nécessaires pour terminer une tâche.

### Attention aux modifications de séquence
Il est important de ne pas modifier la séquence sur laquelle on itère
directement dans une boucle `for`, car cela peut entraîner des comportements
inattendus. Si vous devez modifier la séquence, il est préférable de créer une
copie de celle-ci.

```python linenums="1"
nombres = [1, 2, 3, 4, 5]
for nombre in nombres[:]:  # Crée une copie de la liste
    if nombre % 2 == 0:
        nombres.remove(nombre)
print(nombres)  # affiche [1, 3, 5]
```

## Boucles imbriquées

Les boucles imbriquées sont des boucles à l'intérieur d'autres boucles. Elles
sont utiles pour parcourir des structures de données à plusieurs dimensions,
comme des matrices ou pour générer des motifs complexes.

### Exemples

Cet exemple utilise des boucles imbriquées pour imprimer un carré de caractères
`*` :
=== "Python"
    ```python linenums="1"
    taille = 5
    for i in range(taille):
        for j in range(taille):
            print('*', end='')
        print()
    ```
=== "Résultat"
    ```
    *****
    *****
    *****
    *****
    *****
    ```

La boucle externe itère sur les lignes du carré, tandis que la boucle interne
itère sur les colonnes. Chaque itération de la boucle interne imprime un
caractère `*` et la boucle externe ajoute une nouvelle ligne après chaque ligne
complète.

Cet exemple utilise des boucles imbriquées pour imprimer un triangle de
caractères `*` :

=== "Python"
    ```python linenums="1"
    hauteur = 5
    for i in range(hauteur):
        for j in range(i + 1):
            print('*', end='')
        print()
    ```
=== "Résultat"
    ```
    *
    **
    ***
    ****
    *****
    ```

Dans ce second exemple, la boucle externe itère sur les lignes du triangle et
la boucle interne imprime un nombre croissant de caractères `*` à chaque ligne.

!!! tip "Conseil"
    Les boucles imbriquées peuvent être difficiles à lire et
    à comprendre. Il est parfois souhaitable
    d'encapsuler la deuxième boucle dans une fonction pour améliorer la
    lisibilité du code.


Cet exemple utilise une fonction `imprimer_la_ligne` pour imprimer un triangle
de caractères `*`:

=== "Python"
    ```python linenums="1"
    def imprimer_la_ligne(taille):
        for j in range(taille):
            print('*', end='')
        print()

    hauteur = 5
    for i in range(hauteur):
        imprimer_la_ligne(i + 1)
    ```
=== "Résultat"
    ```
    *
    **
    ***
    ****
    *****
    ```
