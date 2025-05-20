---
sidebar_label: Les chaînes de caractères
sidebar_position: 2
description: Les chaînes de caractères (partie 2)
---

# Les chaînes de caractères (partie 2)


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


## Comparaison de chaînes de caractères

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

:::warning

    En présence de caractères spéciaux, la comparaison de chaînes de caractères 
    peut donner des résultats inattendus. Par exemple, un même symbole peut être représenté de plusieurs 
    façon en Unicode. Pour éviter ce genre de problème, il est possible de normaliser les chaînes de caractères
    en utilisant la fonction `unicodedata.normalize()` du module `unicodedata`.

:::

```python
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