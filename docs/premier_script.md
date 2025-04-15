---
sidebar_position: 3
sidebar_label: Mon premier script Python
description: Écrire et exécuter un script Python
---

# Mon premier script Python

Python est un langage de programmation généraliste, simple à prendre en main,
et très utilisé dans de nombreux domaines (développement web, data science, IA,
scripts d’automatisation, etc.). Avant de plonger dans la syntaxe et les
concepts, assurons-nous d’avoir une vision d’ensemble de la structure d’un
script Python.

## Structure d’un script Python

Un script Python est simplement un fichier texte contenant du code Python,
généralement enregistré avec l’extension `.py`. Voici un exemple de
script Python simple :

```python
# Mon premier script Python
# Les commentaires commencent par un dièse (#)
print("Hello, world!")
```

Pour exécuter ce script, vous devez l’enregistrer dans un fichier avec
l’extension `.py`, par exemple `mon_script.py`. Ensuite, ouvrez un terminal
et tapez la commande suivante :

<Tabs>
  <TabItem value="apple" label="Windows" default>
    ```bash
    py mon_script.py
    ```
  </TabItem>
  <TabItem value="orange" label="Mac / Linux">
    ```bash
    python3 mon_script.py
    ```
  </TabItem>
</Tabs>


<details>
<summary>🤔 Testez votre compréhension</summary>

 <MultipleChoiceTabs>
    <MultipleChoice>
    Comment écrit-on un commentaire en Python ?

    <MultipleChoiceOption isCorrect>

    `# Mon commentaire`

    </MultipleChoiceOption>

    <MultipleChoiceOption >

    `// Mon commentaire`

    </MultipleChoiceOption>
    
    <MultipleChoiceOption>

    `/* Mon commentaire */`

    </MultipleChoiceOption>

    <MultipleChoiceOption>

    `<!-- Mon commentaire -->`

    </MultipleChoiceOption>

    </MultipleChoice>

    <MultipleChoice>
    Quelle est l'extension habituelle d'un fichier Python ?

    <MultipleChoiceOption>

    `.pyth`

    </MultipleChoiceOption>

    <MultipleChoiceOption isCorrect>

    `.py`

    </MultipleChoiceOption>
    
    <MultipleChoiceOption>

    `.py3`

    </MultipleChoiceOption>

    <MultipleChoiceOption>

    `.python`

    </MultipleChoiceOption>

    </MultipleChoice>

 </MultipleChoiceTabs>
 </details> 

:::info

Le classique `"Hello, world!"` est souvent le premier programme que l'on écrit
lorsqu'on apprend un nouveau langage de programmation. Cette [tradition](https://fr.wikipedia.org/wiki/Hello_world)
remonte aux années 1970 avec le langage C.

:::

---

## Syntaxe de base

La syntaxe de base de Python repose sur :

- Une indentation (4 espaces recommandé) pour structurer un bloc d'instructions.
- L’absence de points-virgules obligatoires en fin de ligne.
- L’utilisation de deux points `:` pour introduire un bloc (ex. dans les définitions de fonctions, de boucles, etc.).

```python
# def est le mot-clé pour définir une fonction
def dire_bonjour():  # <- utilisation de deux-points pour introduire un bloc d'instructions
    print("Bonjour tout le monde !")
    # Le code à l'intérieur de la fonction est indenté (4 espaces)

# Appel de la fonction à l'aide de son nom et de parenthèses
dire_bonjour()
```
