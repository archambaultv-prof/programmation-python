---
sidebar_label: Les expressions
sidebar_position: 1
---

# Les expressions en Python

## Introduction

Cette leçon couvre les notions de base en Python :

- Expressions
- Opérateurs communs
- Types de données

---

## 1. Expressions en Python
Une **expression** est une combinaison de variables, de constantes, d'opérateurs et de fonctions qui retourne une valeur.

Exemple :

```python linenums="1"
# Exemple d'expressions simples
3 + 5         # Addition
"Hello" + " World"  # Concaténation de chaînes
5 * (2 + 3)   # Expression arithmétique
len("Python") # Appel de fonction
```

### Règles importantes :
- Les expressions sont évaluées de gauche à droite (en respectant la priorité des opérateurs).

---

## 2. Les opérateurs communs
Les opérateurs permettent d'effectuer des opérations sur des variables et des valeurs. Voici les catégories principales :

### 2.1 Opérateurs arithmétiques
| Opérateur | Description           | Exemple       |
|-----------|-----------------------|---------------|
| `+`       | Addition             | `3 + 2` = 5   |
| `-`       | Soustraction         | `5 - 2` = 3   |
| `*`       | Multiplication       | `4 * 3` = 12  |
| `/`       | Division             | `10 / 2` = 5.0|
| `//`      | Division entière     | `10 // 3` = 3 |
| `%`       | Modulo (reste)       | `10 % 3` = 1  |
| `**`      | Puissance            | `2 ** 3` = 8  |

### 2.2 Opérateurs de comparaison
| Opérateur | Description                      | Exemple          |
|-----------|----------------------------------|------------------|
| `==`      | Égal à                          | `5 == 5` → `True`|
| `!=`      | Différent de                    | `5 != 3` → `True`|
| `>`       | Supérieur à                     | `5 > 3` → `True` |
| `<`       | Inférieur à                     | `3 < 5` → `True` |
| `>=`      | Supérieur ou égal à             | `5 >= 5` → `True`|
| `<=`      | Inférieur ou égal à             | `3 <= 5` → `True`|

### 2.3 Opérateurs logiques
| Opérateur | Description              | Exemple                       |
|-----------|--------------------------|-------------------------------|
| `and`     | Retourne `True` si les deux conditions sont vraies | `(5 > 3) and (3 < 10)` → `True`|
| `or`      | Retourne `True` si au moins une condition est vraie | `(5 > 3) or (3 > 10)` → `True` |
| `not`     | Inverse une condition    | `not (5 > 3)` → `False`       |

### 2.4 Opérateurs d'appartenance
| Opérateur | Description              | Exemple                       |
|-----------|--------------------------|-------------------------------|
| `in`      | Vérifie si un élément appartient à une séquence | `'a' in 'apple'` → `True` |
| `not in`  | Vérifie si un élément n'appartient pas à une séquence | `'b' not in 'apple'` → `True` |

---

## 3. Types de données
Python propose plusieurs types de données. Voici les plus courants :

### 3.1 Types numériques
- **int** : Nombres entiers.
  ```python
  x = 5      # x est un entier
  ```
- **float** : Nombres décimaux.
  ```python
  y = 3.14   # y est un flottant
  ```

### 3.2 Chaînes de caractères (str)
Les chaînes de caractères sont utilisées pour stocker du texte.

```python linenums="1"
# Exemple de chaînes
nom = "Python"
salutation = 'Bonjour'
texte_multi_ligne = """Ceci est
un texte multi-ligne."""
```

### 3.3 Types séquentiels
| Type    | Description                  | Exemple                        |
|---------|------------------------------|--------------------------------|
| **list**| Liste modifiable             | `[1, 2, 3]`                   |
| **tuple**| Tuple immuable              | `(1, 2, 3)`                   |

### 3.4 Types de tableaux associatifs
| Type    | Description                  | Exemple                        |
|---------|------------------------------|--------------------------------|
| **dict**| Dictionnaire clé-valeur      | `#!py3 {"nom": "Alice", "age": 25}` |

### 3.5 Types d'ensemble
| Type    | Description                  | Exemple                        |
|---------|------------------------------|--------------------------------|
| **set** | Ensemble non ordonné         | `{1, 2, 3}`                   |

### 3.6 Booléens
- **bool** : Peut être `True` ou `False`.
  ```python
  actif = True
  termine = False
  ```

---

## Conclusion
Ces bases constituent les fondations de tout programme Python. Comprendre les expressions, les opérateurs et les types est crucial pour écrire du code lisible et fonctionnel.

---

### Ressources supplémentaires
- [Documentation officielle Python](https://docs.python.org/fr/3/)
