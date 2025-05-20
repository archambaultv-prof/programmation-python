---
sidebar_label: Les chaînes de caractères
sidebar_position: 2
description: Introduction aux chaînes de caractères
---

# Les chaînes de caractères (partie 1)

## Qu'est-ce qu'une chaîne de caractères ?

En Python, une chaîne de caractères est une séquence de caractères entourée de
guillemets simples (`'`) ou doubles (`"`). Par exemple :

```python
ma_chaine = "Bonjour, monde !"
print(ma_chaine)
```

Les chaînes de caractères peuvent contenir des lettres, des chiffres,
des espaces et des symboles spéciaux comme des emojis, des caractères accentués ou 
des caractères de différentes langues.

```python
ma_chaine_unicode = "你好，世界！😊"
print(ma_chaine_unicode)
```

La chaîne de caractères vide est représentée par deux guillemets consécutifs sans
aucun caractère entre eux :

```python
chaine_vide = ""
print(chaine_vide)
```


## Accéder aux éléments d'une chaîne de caractères

On peut accéder aux caractères d'une chaîne en utilisant des indices de la même
manière que pour les listes. Les indices commencent à 0, et on peut aussi
utiliser des indices négatifs pour accéder aux caractères à partir de la fin de
la chaîne.

```python
ma_chaine = "Bonjour"
print(ma_chaine[0])  # Affiche 'B'
print(ma_chaine[1])  # Affiche 'o'
print(ma_chaine[-1])  # Affiche 'r'
print(ma_chaine[-2])  # Affiche 'u'
```

## Concaténation de chaînes de caractères


On peut concaténer (joindre) deux chaînes de caractères en utilisant l'opérateur
`+`. Cela crée une **nouvelle** chaîne qui est la combinaison des deux chaînes d'origine.

```python
chaine1 = "Bonjour"
chaine2 = " monde !"
chaine_concatenee = chaine1 + chaine2
print(chaine_concatenee)  # Affiche 'Bonjour monde !'
```

On peut également utiliser l'opérateur `*` pour répéter une chaîne un certain
nombre de fois.

```python
exclamation = "!" * 3
print(exclamation)  # Affiche '!!!'
```


## Testez votre compréhension

<details>
<summary>🤔 Testez votre compréhension</summary>

<MultipleChoiceTabs>

<MultipleChoice>
Quelle est la syntaxe correcte pour créer une chaîne de caractères vide en Python ?

<MultipleChoiceOption isCorrect>
`""`
</MultipleChoiceOption>

<MultipleChoiceOption>
`[]`
</MultipleChoiceOption>

<MultipleChoiceOption>
`'''''`
</MultipleChoiceOption>

<MultipleChoiceOption>
`None`
</MultipleChoiceOption>
</MultipleChoice>

<MultipleChoice>
Comment accède-t-on au premier caractère d'une chaîne `texte` ?

<MultipleChoiceOption isCorrect>
`texte[0]`
</MultipleChoiceOption>

<MultipleChoiceOption>
`texte[1]`
</MultipleChoiceOption>

<MultipleChoiceOption>
`texte.first()`
</MultipleChoiceOption>

<MultipleChoiceOption>
`texte[-1]`
</MultipleChoiceOption>
</MultipleChoice>

<MultipleChoice>
Quelle opération permet de connaître la longueur d'une chaîne `mot` ?

<MultipleChoiceOption isCorrect>
`len(mot)`
</MultipleChoiceOption>

<MultipleChoiceOption>
`mot.length()`
</MultipleChoiceOption>

<MultipleChoiceOption>
`mot.size()`
</MultipleChoiceOption>

<MultipleChoiceOption>
`length(mot)`
</MultipleChoiceOption>
</MultipleChoice>

<MultipleChoice>
Quel est le résultat de `"abc" * 2` ?

<MultipleChoiceOption isCorrect>
`"abcabc"`
</MultipleChoiceOption>

<MultipleChoiceOption>
`"aabbcc"`
</MultipleChoiceOption>

<MultipleChoiceOption>
`"abc2"`
</MultipleChoiceOption>

<MultipleChoiceOption>
`"abcbc"`
</MultipleChoiceOption>
</MultipleChoice>

<MultipleChoice>
Comment concaténer deux chaînes `a` et `b` ?

<MultipleChoiceOption isCorrect>
`a + b`
</MultipleChoiceOption>

<MultipleChoiceOption>
`a.append(b)`
</MultipleChoiceOption>

<MultipleChoiceOption>
`a.concat(b)`
</MultipleChoiceOption>

<MultipleChoiceOption>
`a & b`
</MultipleChoiceOption>
</MultipleChoice>

</MultipleChoiceTabs>

</details>
