---
sidebar_label: Chaines de caractères
sidebar_position: 4
---

# Les chaînes de caractères

## Concaténation
La concaténation est l'opération qui consiste à joindre deux chaînes de caractères. En Python, cela peut être fait en utilisant l'opérateur `+`.


```python
prenom = "Jean"
nom = "Dupont"
nom_complet = prenom + " " + nom
print(nom_complet)  # Affiche "Jean Dupont"
```

## f-strings
Les f-strings (formatted string literals) sont une manière moderne et pratique de formater des chaînes de caractères en Python. Elles permettent d'incorporer des expressions à l'intérieur de chaînes en les précédant de la lettre `f`.


```python
prenom = "Jean"
nom = "Dupont"
nom_complet = f"{prenom} {nom}"
print(nom_complet)  # Affiche "Jean Dupont"
```

## Méthode `format`
Avant l'introduction des f-strings, la méthode `format` était couramment utilisée pour formater des chaînes de caractères. Elle permet d'insérer des valeurs dans une chaîne en utilisant des accolades `{}` comme espaces réservés.


```python
prenom = "Jean"
nom = "Dupont"
nom_complet = "{} {}".format(prenom, nom)
print(nom_complet)  # Affiche "Jean Dupont"
```

## Indexation
L'indexation permet d'accéder à des caractères spécifiques dans une chaîne de caractères en utilisant des indices. En Python, comme c'est souvent le cas en informatique, les indices commencent à 0.


```python
chaine = "Bonjour"
premiere_lettre = chaine[0]
print(premiere_lettre)  # Affiche "B"
```

Les indices négatifs peuvent être utilisés pour accéder aux caractères en partant de la fin de la chaîne.


```python
chaine = "Bonjour"
derniere_lettre = chaine[-1]
print(derniere_lettre)  # Affiche "r"
```

Il est également possible d'extraire des sous-chaînes en utilisant la notation de tranches (slicing).


```python
chaine = "Bonjour"
sous_chaine = chaine[1:4]
print(sous_chaine)  # Affiche "onj"
```

### Cas spéciaux de l'indexation

#### Indices identiques
Lorsque les deux indices sont identiques, la sous-chaîne résultante est vide.


```python
chaine = "Bonjour"
sous_chaine = chaine[2:2]
print(sous_chaine)  # Affiche ""
```

#### Omission d'un indice
Si l'on omet le premier indice, la tranche commence au début de la chaîne. Si
l'on omet le deuxième indice, la tranche s'étend jusqu'à la fin de la chaîne.

```python
chaine = "Bonjour"
sous_chaine = chaine[:3]
print(sous_chaine)  # Affiche "Bon"

sous_chaine = chaine[3:]
print(sous_chaine)  # Affiche "jour"
```

#### Utilisation d'un troisième indice pour le pas
Le troisième indice spécifie le pas (ou l'incrément) entre les indices de début
et de fin.

```python
chaine = "Bonjour"
sous_chaine = chaine[1:6:2]
print(sous_chaine)  # Affiche "oju"
```

Il peut même être négatif ! Dans ce cas, la tranche est retournée en ordre
inverse.

```python
chaine = "Bonjour"
sous_chaine = chaine[::-1]
print(sous_chaine)  # Affiche "ruojnoB"
```

## Méthodes de chaînes de caractères

### `upper()`
La méthode `upper()` renvoie une copie de la chaîne avec tous les caractères en majuscules.

```python
chaine = "bonjour"
chaine_majuscule = chaine.upper()
print(chaine_majuscule)  # Affiche "BONJOUR"
```

### `lower()`
La méthode `lower()` renvoie une copie de la chaîne avec tous les caractères en minuscules.

```python
chaine = "BONJOUR"
chaine_minuscule = chaine.lower()
print(chaine_minuscule)  # Affiche "bonjour"
```

### `strip()`
La méthode `strip()` renvoie une copie de la chaîne avec les espaces en début et en fin de chaîne supprimés.

```python
chaine = "  bonjour  "
chaine_strippee = chaine.strip()
print(chaine_strippee)  # Affiche "bonjour"
```

### `find()`
La méthode `find()` renvoie l'indice de la première occurrence d'une sous-chaîne dans une chaîne. Si la sous-chaîne n'est pas trouvée, la méthode renvoie `-1`.

```python
chaine = "bonjour tout le monde"
indice = chaine.find("tout")
print(indice)  # Affiche 8
```

### `replace()`
La méthode `replace()` renvoie une copie de la chaîne avec toutes les occurrences d'une sous-chaîne remplacées par une autre sous-chaîne.

```python
chaine = "bonjour tout le monde"
chaine_remplacee = chaine.replace("bonjour", "salut")
print(chaine_remplacee)  # Affiche "salut tout le monde"
```

### `split()`
La méthode `split()` divise la chaîne en une liste de sous-chaînes en utilisant un séparateur spécifié.

```python
chaine = "bonjour tout le monde"
liste_mots = chaine.split(" ")
print(liste_mots)  # Affiche ['bonjour', 'tout', 'le', 'monde']
```

### `join()`
La méthode `join()` renvoie une chaîne qui est la concaténation des éléments d'une liste, séparés par une chaîne spécifiée.

```python
liste_mots = ['bonjour', 'tout', 'le', 'monde']
chaine = " ".join(liste_mots)
print(chaine)  # Affiche "bonjour tout le monde"
```

### `count()`
La méthode `count()` renvoie le nombre d'occurrences d'une sous-chaîne dans une chaîne.

```python
chaine = "bonjour tout le monde"
occurrences = chaine.count("o")
print(occurrences)  # Affiche 5
```
