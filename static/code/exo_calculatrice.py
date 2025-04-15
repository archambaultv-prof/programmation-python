# ==================================================
#  Exercice : Calculatrice interactive
# ==================================================


def msg_bienvenue():
    """
    Cette fonction affiche le menu de la calculatrice.
    """
    print("Bienvenue dans la calculatrice interactive !")
    print("Vous pouvez quitter à tout moment en tapant 'exit'.")
    print()  # Affiche une ligne vide


def verifier_sortie(entree: str):
    """
    Cette fonction vérifie si l'utilisateur a entré 'exit'.
    Si c'est le cas, elle affiche un message et quitte le programme.
    """
    if entree.lower() == 'exit':
        print("Merci d'avoir utilisé la calculatrice !")
        exit(0)


def lire_entree() -> tuple[str, str, str]:
    """
    Cette fonction :

    1. Demande une première valeur à l'utilisateur.
    2. Demande une opération à l'utilisateur.
    3. Demande une seconde valeur à l'utilisateur.

    Elle retourne les valeurs sous forme de
    tuple (valeur1, opération, valeur2).
    """

    v1 = input("Entrez la première valeur : ")
    verifier_sortie(v1)

    # TODO : Demander l'opération à l'utilisateur et appeler la fonction
    # verifier_sortie() pour vérifier si l'utilisateur a entré 'exit'
    op = '+'

    # TODO : Demander la 2ème valeur à l'utilisateur et appeler la fonction
    # verifier_sortie() pour vérifier si l'utilisateur a entré 'exit'
    v2 = '2'

    return v1, op, v2


def str_to_bool(s: str) -> bool:
    """
    Convertit une chaîne de caractères en booléen.
    Si la chaîne est "true", elle retourne True.
    Si la chaîne est "false", elle retourne False.
    Sinon, elle lève une exception ValueError.
    """
    s = s.strip().lower()

    if s == "true":
        return True
    elif s == "false":
        return False
    else:
        raise ValueError(f"Cannot convert '{s}' to a boolean.")


def calculer(v1: str, op: str, v2: str) -> float | str | bool:
    """
    Cette fonction effectue le calcul en fonction de l'opération choisie.
    Elle retourne le résultat du calcul.
    """

    # float(v1) convertit la chaîne de caractères v1 en nombre flottant
    # int(v1) convertit la chaîne de caractères v1 en entier
    # Pour les booléens, vous pouvez utiliser la fonction str_to_bool()
    # définie plus haut.

    if op == '+':
        return float(v1) + float(v2)
    elif op == '-':
        return float(v1) - float(v2)
    # TODO : Implanter les autres opérations.
    # Par exemple '*', '/', '^', '%', mais aussi 'and', 'or', 'not', etc.
    else:
        raise ValueError("Opération non valide.")


if __name__ == "__main__":
    # Lance l'exécution de la fonction principale
    msg_bienvenue()
    while True:
        v1, op, v2 = lire_entree()

        # TODO : Appeler la fonction calculer() pour effectuer le calcul
        try:
            resultat = calculer(v1, op, v2)
            print(f"Le résultat de {v1} {op} {v2} est : {resultat}")
            print()  # Affiche une ligne vide pour séparer les résultats
        except ValueError as e:
            print(e)
