---
sidebar_label: Stuctures conditionnelles
sidebar_position: 2
---

# Les structures conditionnelles

## Les opérateurs logiques unaires

### Opérateur NOT

L'opérateur NOT (non) inverse la valeur de vérité d'une expression. Si l'expression est vraie, NOT la rend fausse, et vice versa.

| A     | not A |
|-------|-------|
| True  | False |
| False | True  |

### Opérateur AND

L'opérateur AND (et) renvoie vrai uniquement si les deux expressions sont vraies. Si l'une des expressions est fausse, le résultat est faux.

| A     | B     | A and B |
|-------|-------|---------|
| True  | True  | True    |
| True  | False | False   |
| False | True  | False   |
| False | False | False   |

### Opérateur OR

L'opérateur OR (ou) renvoie vrai si au moins une des expressions est vraie. Si les deux expressions sont fausses, le résultat est faux.

| A     | B     | A or B  |
|-------|-------|---------|
| True  | True  | True    |
| True  | False | True    |
| False | True  | True    |
| False | False | False   |

## Les opérateurs d'égalité

### Opérateur d'égalité (==)

L'opérateur `==` compare deux valeurs pour vérifier si elles sont égales. Il renvoie vrai si les valeurs sont égales, sinon il renvoie faux.

| A     | B     | A == B  |
|-------|-------|---------|
| 5     | 5     | True    |
| 5     | 3     | False   |
| 'a'   | 'a'   | True    |
| 'a'   | 'b'   | False   |

### Opérateur de différence (!=)

L'opérateur `!=` compare deux valeurs pour vérifier si elles sont différentes. Il renvoie vrai si les valeurs sont différentes, sinon il renvoie faux.

| A     | B     | A != B  |
|-------|-------|---------|
| 5     | 5     | False   |
| 5     | 3     | True    |
| 'a'   | 'a'   | False   |
| 'a'   | 'b'   | True    |

### Opérateur d'identité (is)

L'opérateur `is` vérifie si deux variables pointent vers le même objet en mémoire. Il renvoie vrai si les deux variables pointent vers le même objet, sinon il renvoie faux.

| A     | B     | A is B  |
|-------|-------|---------|
| [1, 2] | [1, 2] | False |
| a     | a     | True    |
| None  | None  | True    |

### Opérateur de non-identité (is not)

L'opérateur `is not` vérifie si deux variables pointent vers des objets différents en mémoire. Il renvoie vrai si les deux variables pointent vers des objets différents, sinon il renvoie faux.

| A     | B     | A is not B |
|-------|-------|------------|
| [1, 2] | [1, 2] | True     |
| a     | a     | False     |
| None  | None  | False     |

Voici un exemple d'utilisation des opérateurs d'égalité et d'identité :


    ```python
    print("--- Valeurs litérales ---")
    x = 4
    y = 4
    print(x is y)
    print(x is not y)

    print("--- Listes différentes ---")
    x = [1, 2, 3]
    y = [1, 2, 3]
    print(x is y) # Pas la même liste (emplacement mémoire différent), donc False
    print(x is not y)

    print("--- Listes identiques ---")
    x = [1, 2, 3]
    y = x
    print(x is y) # La même liste (même emplacement mémoire), donc True
    print(x is not y)
    ```

## Les opérateurs de comparaison

### Opérateur supérieur (>)
L'opérateur `>` compare deux valeurs et renvoie vrai si la première valeur est supérieure à la deuxième, sinon il renvoie faux.

| A     | B     | A > B   |
|-------|-------|---------|
| 5     | 3     | True    |
| 3     | 5     | False   |
| 5     | 5     | False   |

### Opérateur supérieur ou égal (>=)

L'opérateur `>=` compare deux valeurs et renvoie vrai si la première valeur est supérieure ou égale à la deuxième, sinon il renvoie faux.

| A     | B     | A >= B  |
|-------|-------|---------|
| 5     | 3     | True    |
| 3     | 5     | False   |
| 5     | 5     | True    |

### Opérateur inférieur (&lt;)

L'opérateur `<` compare deux valeurs et renvoie vrai si la première valeur est inférieure à la deuxième, sinon il renvoie faux.

| A     | B     | A < B   |
|-------|-------|---------|
| 5     | 3     | False   |
| 3     | 5     | True    |
| 5     | 5     | False   |

### Opérateur inférieur ou égal (&lt;=)

L'opérateur `<=` compare deux valeurs et renvoie vrai si la première valeur est inférieure ou égale à la deuxième, sinon il renvoie faux.

| A     | B     | A &lt;= B  |
|-------|-------|---------|
| 5     | 3     | False   |
| 3     | 5     | True    |
| 5     | 5     | True    |

Voici un exemple d'utilisation des opérateurs de comparaison :

```python linenums="1"
x = 5
y = 3
print(x > y)  # True
print(x >= y) # True
print(x < y)  # False
print(x <= y) # False

x = 3
y = 5
print(x > y)  # False
print(x >= y) # False
print(x < y)  # True
print(x <= y) # True
```

!!! note "Saviez-vous que..."
    Il est possible de combiner deux opérateurs de comparaison dans la même expression pour vérifier si une valeur est comprise entre deux autres valeurs.

Par exemple, pour vérifier si un nombre est compris entre 5 et 10, on peut écrire :

```python
x = 7
print(5 <= x <= 10) # True
```

### Comparaison de chaînes de caractères

La comparaison de chaînes de caractères se fait en utilisant les opérateurs de
comparaison habituels (`==`, `!=`, `<`, `>`, `<=`, `>=`). Les chaînes de
caractères sont comparées lexicographiquement, c'est-à-dire en fonction de
l'ordre des caractères dans la table [Unicode](https://fr.wikipedia.org/wiki/Unicode). Notez que la table [ASCII](https://fr.wikipedia.org/wiki/American_Standard_Code_for_Information_Interchange) est un sous-ensemble de la table Unicode.

Voici un exemple d'utilisation des opérateurs de comparaison avec des chaînes de caractères :

```python linenums="1"
str1 = "apple"
str2 = "banana"
print(str1 < str2)  # True
print(str1 == str2) # False
print(str1 > str2)  # False

str1 = "apple"
str2 = "apple"
print(str1 < str2)  # False
print(str1 == str2) # True
print(str1 > str2)  # False

str1 = "banana"
str2 = "apple"
print(str1 < str2)  # False
print(str1 == str2) # False
print(str1 > str2)  # True
```

!!! warning "Attention"
    En présence de caractères spéciaux, la comparaison de chaînes de caractères 
    peut donner des résultats inattendus. Par exemple, un même symbole peut être représenté de plusieurs 
    façon en Unicode. Pour éviter ce genre de problème, il est possible de normaliser les chaînes de caractères
    en utilisant la fonction `unicodedata.normalize()` du module `unicodedata`.

=== "Python"
    ```python linenums="1"
    import unicodedata

    # Deux chaînes de caractères qui représentent la même chose
    str1 = "école"  # Caractère 'é' (U+00E9) + "cole"
    str2 = "e\u0301cole"  # Caracter 'e' (U+0065) + diacritique accent aigu (U+0301) + "cole"

    # Les deux chaînes s'affichent de la même façon
    print("Même affichage:")
    print(f"str1 (original): {repr(str1)}") # 'école'
    print(f"str2 (original): {repr(str2)}") # 'école'

    # Mais elles ne sont pas équivalentes sans normalisation
    print("Sans normalisation:")
    print(len(str1)) # 5
    print(len(str2)) # 6
    print(f"str1 == str2: {str1 == str2}")  # False

    # Avec normalisation NFC
    str1_nfc = unicodedata.normalize("NFC", str1)
    str2_nfc = unicodedata.normalize("NFC", str2)
    print("Après normalisation NFC:")
    print(f"str1_nfc == str2_nfc: {str1_nfc == str2_nfc}")  # True

    # Avec normalisation NFD
    str1_nfd = unicodedata.normalize("NFD", str1)
    str2_nfd = unicodedata.normalize("NFD", str2)
    print("Après normalisation NFD:")
    print(f"str1_nfd == str2_nfd: {str1_nfd == str2_nfd}")  # True

    ```
=== "Résultat"
    ```
    Même affichage:
    str1 (original): 'école'
    str2 (original): 'école'

    Sans normalisation:
    5
    6
    str1 == str2: False

    Après normalisation NFC:
    str1_nfc == str2_nfc: True

    Après normalisation NFD:
    str1_nfd == str2_nfd: True
    ```

## Les structures conditionnelles

Les structures conditionnelles permettent d'exécuter du code de manière
conditionnelle, en fonction de la valeur d'une expression booléenne.

### Structure if

La structure `if` permet d'exécuter un bloc de code si une condition est vraie.

```python
x = 10
if x > 5:
    print("x est supérieur à 5")
```

### Structure if...else

La structure `if...else` permet d'exécuter un bloc de code si une condition est
vraie, et un autre bloc de code si la condition est fausse.

```python
x = 10
if x > 5:
    print("x est supérieur à 5")
else:
    print("x est inférieur ou égal à 5")
```

### Structure if...elif...else

La structure `if...elif...else` permet de tester plusieurs conditions. Le
premier bloc de code dont la condition est vraie est exécuté.

```python
x = 10
if x > 15:
    print("x est supérieur à 15")
elif x > 5:
    print("x est supérieur à 5 mais inférieur ou égal à 15")
else:
    print("x est inférieur ou égal à 5")
```

### Structure ternaire

L'opérateur ternaire permet d'écrire une condition simple sur une seule ligne.

```python
x = 10
message = "x est supérieur à 5" if x > 5 else "x est inférieur ou égal à 5"
print(message)
```
