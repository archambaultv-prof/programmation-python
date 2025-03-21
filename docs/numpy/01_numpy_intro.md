---
sidebar_label: Introduction à NumPy
sidebar_position: 1
---

# Introduction à NumPy

## Qu'est-ce que NumPy ?

[NumPy](https://numpy.org) (Numerical Python) est une bibliothèque essentielle
pour le calcul scientifique en Python. Elle permet de manipuler efficacement des
tableaux de données à plusieurs dimensions appelés `ndarray` et offre une
vaste collection de fonctions mathématiques optimisées pour les opérations sur
ces tableaux.

### Avantages de NumPy

1. **Performances accrues** : Les tableaux NumPy sont plus rapides et utilisent
   moins de mémoire que les listes Python classiques.
2. **Syntaxe concise et expressive** : Les opérations sur les tableaux sont plus
   simples et ressemblent à celles de [MATLAB](https://www.mathworks.com/products/matlab.html) 
   ou [R](https://www.r-project.org).
3. **Large écosystème scientifique** : De nombreuses bibliothèques comme [SciPy](https://www.scipy.org),
   [Pandas](https://pandas.pydata.org) et [Matplotlib](https://matplotlib.org) reposent sur NumPy.
4. **Gestion efficace des opérations mathématiques** : Opérations vectorielles,
   algèbre linéaire, génération de nombres aléatoires, etc.

## Installation de NumPy

Après avoir activé votre environnement virtuel, vous pouvez installer NumPy avec la commande suivante :

```sh
python -m pip install numpy
```

## Le concept de `ndarray`

L'objet fondamental de NumPy est le `ndarray` (N-dimensional array), qui est une
structure de données optimisée pour le stockage et la manipulation de tableaux
multidimensionnels.

Quelques propriétés importantes des `ndarray` :

- **Homogène** : Tous les éléments d'un tableau NumPy sont du même type
  (contrairement aux listes Python qui peuvent contenir des types mixtes).
- **Indexation avancée** : Possibilité d'accéder et de modifier des
  sous-ensembles de données facilement.
- **Support des opérations vectorielles** : Permet d'appliquer des fonctions sur
  tout un tableau sans boucle explicite.

Exemple de création et manipulation d'un `ndarray` :

```python
import numpy as np

# Création d'un tableau NumPy
arr = np.array([1, 2, 3, 4, 5])
print(arr)
print("Type de l'objet:", type(arr))  # <class 'numpy.ndarray'>
print("Type des éléments:", arr.dtype)  # int64
```

## Différence de performance entre les listes Python et NumPy

NumPy est bien plus efficace que les listes Python en termes de performances et
d'utilisation de mémoire.  L'exécution avec NumPy est beaucoup plus rapide car
les opérations sont optimisées en C. L'utilisation mémoire est bien moindre, car
les tableaux NumPy utilisent des types de données fixes, contrairement aux
listes Python qui stockent des objets dynamiques.

Voici un exemple comparant le temps d'exécution et la mémoire utilisée par une
opération sur une liste Python et un tableau NumPy.

```python
import numpy as np
import time
import sys

# Taille du tableau
size = 10_000_000

# Liste Python
list_py = list(range(size))
start_py = time.time()
list_py = [x * 2 for x in list_py]
end_py = time.time()
print(f"Temps d'exécution (listes Python) : {end_py - start_py:.3f} secondes")
sz = sys.getsizeof(list_py[0]) * len(list_py) + sys.getsizeof(list_py)
print(f"Taille en mémoire (listes Python) : {sz / 1_000_000:.1f} Mo")

# Tableau NumPy
arr_np = np.arange(size)
start_np = time.time()
arr_np = arr_np * 2
end_np = time.time()
print(f"Temps d'exécution (NumPy) : {end_np - start_np:.3f} secondes")
print(f"Taille en mémoire (NumPy) : {arr_np.nbytes / 1_000_000:.1f} Mo")

# Comparaison des résultats
gain = (end_py - start_py) / (end_np - start_np)
# Environ 20 à 40 fois plus rapide
print(f"Nympy est {gain:.2f} fois plus rapide.")
# Environ 4 fois moins de mémoire
print(f"NumPy utilise {round(sz / arr_np.nbytes, 2)} fois moins de mémoire.")
```

## Conclusion

NumPy est un outil indispensable pour la manipulation efficace de données
numériques en Python. Son utilisation permet d'améliorer significativement les
performances de calcul et de réduire la consommation mémoire. Son adoption est
essentielle pour tout étudiant en informatique souhaitant travailler avec des
données massives ou faire de l'analyse numérique.