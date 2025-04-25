---
sidebar_label: Boucle while
sidebar_position: 4
sidebar_class_name: Boucle while
description: Boucle while
---

# Boucle while

La boucle `while` en Python permet d'exécuter un bloc de code tant qu'une
condition est vraie. La condition est évaluée avant chaque itération de la
boucle. Si la condition est fausse dès le début, le bloc de code ne sera jamais
exécuté.

:::tip

    Les boucles `while` sont un bon choix lorsqu'on ne sait pas à
    l'avance combien d'itérations seront nécessaires pour terminer une tâche.

:::

## Syntaxe

```python
while condition:
    # bloc de code à exécuter
```

#### Exemple 1

Cet exemple affiche les nombres de 1 à 5 :

```python
i = 1
while i <= 5:
    print(i)
    i += 1
```

#### Exemple 2

Cet exemple continue à demander à l'utilisateur d'entrer un nombre jusqu'à ce
qu'il entre un nombre positif :

```python
nombre = -1
while nombre <= 0:
    nombre = int(input("Entrez un nombre positif : "))
print(f"Merci, vous avez entré {nombre}")
```

#### Exemple 3

Si vous avez un investissement de 1000$ et que vous voulez savoir
combien de temps il faudra pour doubler votre investissement à un taux de 5% par
an, vous pouvez utiliser une boucle `while` pour calculer le nombre d'années
nécessaires.

```python
investissement = 1000
taux = 0.05
annees = 0
while investissement < 2000:
    investissement *= 1 + taux
    annees += 1
print(f"Il faudra {annees} années pour doubler votre investissement.")
```

## Attention aux boucles infinies

Il est important de s'assurer que la condition de la boucle `while` deviendra
fausse à un moment donné, sinon la boucle continuera à s'exécuter indéfiniment.
Par exemple, la boucle suivante est une boucle infinie :

```python
compteur = 10
while compteur <= 10:
    print(f"Compteur: {compteur}")
    compteur -= 1
```

Pour éviter cela, assurez-vous que la condition de la boucle change à chaque
itération.

## Break et continue

Les instructions `break` et `continue` vue à la section sur la [boucle `for`](boucle_for.md) fonctionnent
aussi avec la boucle `while`. Voici un exemple d'utilisation de `continue` :

```python
i = 0
while i < 10:
    i += 1
    if i % 2 == 0:
        continue  # N'imprime pas les nombres pairs
    print(i)
```