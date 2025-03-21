---
sidebar_label: Statistiques
sidebar_position: 2
---

# Fonctions statistiques

NumPy propose de nombreuses fonctions pour effectuer des calculs statistiques
sur des tableaux. Voici quelques-unes des fonctions les plus couramment
utilisées :

- `np.mean()` : Calcule la moyenne des éléments du tableau. On peut notamment passer un
  tableau de poids en argument pour calculer une moyenne pondérée.
- `np.median()` : Calcule la médiane des éléments du tableau.
- `np.std()` : Calcule l'écart-type des éléments du tableau.
- `np.amax()` : Retourne la valeur maximale du tableau.
- `np.amin()` : Retourne la valeur minimale du tableau.

Il est possible de spécifier l'axe sur lequel effectuer les calculs en passant
l'argument `axis` à ces fonctions. L'axe 0 correspond aux colonnes, tandis que
l'axe 1 correspond aux lignes.

```python linenums="1"
import numpy as np

# Calcul des statistiques sur un tableau
arr = np.array([[1, 2, 3], [4, 5, 6]])
moyenne = np.mean(arr)
mediane = np.median(arr)
std = np.std(arr)
max_value = np.amax(arr)
min_value = np.amin(arr)

print(f"Moyenne : {moyenne}")
print(f"Médiane : {mediane}")
print(f"Écart-type : {std}")
print(f"Valeur maximale : {max_value}")
print(f"Valeur minimale : {min_value}")

# Calcul des statistiques sur un tableau en fonction de l'axe
moyenne_axe_0 = np.mean(arr, axis=0)
mediane_axe_0 = np.median(arr, axis=0)
std_axe_0 = np.std(arr, axis=0)
max_value_axe_0 = np.amax(arr, axis=0)
min_value_axe_0 = np.amin(arr, axis=0)

print(f"Moyenne par colonne : {moyenne_axe_0}")
print(f"Médiane par colonne : {mediane_axe_0}")
print(f"Écart-type par colonne : {std_axe_0}")
print(f"Valeur maximale par colonne : {max_value_axe_0}")
print(f"Valeur minimale par colonne : {min_value_axe_0}")
```
