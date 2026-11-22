# Forge

Un jeu de rythme à la forge : une arme forgée en trois actes sur la musique, la lame, la garde puis le pommeau, chacun avec son geste. Ta précision choisit le métal de chaque pièce, du fer à l'étoile, et chaque nouvelle arme rejoint ta collection. Joue les 1200 morceaux du plugin Rythme, ou ta propre musique.

*English version: [README.en.md](README.en.md)*

## Comment jouer

- **Acte I, la lame** : n'importe quelle touche (ou un clic) quand le lingot touche l'enclume ; sur une **barre rouge**, garde la touche jusqu'à son bout pour étirer la lame.
- **Acte II, la garde** : les pièces arrivent des deux côtés ; frappe du bon (**← ou D/F** à gauche, **→ ou J/K** à droite, ou un clic sur cette moitié de l'écran).
- **Acte III, le pommeau** : serti les gemmes qui tombent ; une **gemme double** se prend avec les deux mains (une touche de chaque côté, presque ensemble).
- La **précision de chaque acte** choisit le métal de sa pièce : fer, bronze, acier, damas, mithril ou étoile.
- Six formes d'armes : **36 lames à collectionner** (forme × métal de la lame). Les trois dernières armes se posent sur le râtelier.

## Précision et points

Les notes sont jugées selon l'écart avec le bon moment : **Parfait** (environ ±45 ms), **Bien** (±90 ms), **OK** (±140 ms), sinon raté.

Les points d'une note augmentent de 1 % par note de combo, jusqu'au double à 100 notes de suite ; une note ratée remet le combo à zéro. À la fin, la précision donne une note : **S** à partir de 95 %, **A** à 90 %, **B** à 80 %, **C** à 70 %, **D** en dessous.

## Chansons et difficulté

L'onglet **Chansons** reprend les 1200 morceaux de Rythme, en quatre difficultés (Facile, Normal, Difficile, Expert). La difficulté de chaque niveau est calculée d'après ses notes (densité, passages chargés), de 1 à 10 étoiles.

## Mes musiques

Dans **Mes musiques**, crée un niveau à partir d'un **fichier audio** importé ou d'une musique de ta bibliothèque **NeoMusic** : le jeu trouve son tempo et ses temps forts et en fait un niveau, à la **difficulté** choisie (1 à 10 étoiles).

## Réglages

- **Volume** de la musique.
- **Son des clics** : le son joué à chaque note touchée, au choix parmi 10 (Doux, Clap, Bois, Grosse caisse, Cristal, Pop, Charleston, Caisse claire, Pluck, Tok) ou aucun. Perdre un combo de 10 ou plus joue un son « combo cassé ».
- **Décalage** (−300 à +300 ms) : il se règle tout seul après chaque partie selon ton retard ou ton avance moyens ; tu peux aussi le changer à la main.
- **Touches** : deux à gauche, deux à droite (D/F et J/K au départ) ; clique une case puis appuie sur la touche voulue. Les flèches et la manette marchent toujours.

## Données et synchronisation

Tes scores et notes par niveau et tes réglages sont enregistrés par NeoDex, sauvegardés et synchronisés entre tes PC si la synchro est activée.

## Installer

Dans NeoDex : **NeoStore → À découvrir → Forge → Installer**.

Développer un plugin : voir le [SDK NeoDex](https://github.com/NDesumeur/neodex-sdk).

## La commande du jour

Chaque jour, un client passe une commande, la même pour tout le monde : une arme (elle remplace celle du morceau), un métal au moins pour une des trois pièces, et une façon de jouer (au plus quelques ratés, un combo à atteindre, ou aucune barre lâchée). Elle s'affiche sur l'écran de départ ; à la fin, l'écran dit si elle est remplie. Une fois remplie, tu forges librement jusqu'au lendemain. L'option « Commande : Non » l'enlève.

## L'armurerie

La carte « L'armurerie », sous la liste des morceaux, montre toute la collection : une colonne par arme, une ligne par métal de lame (fer, bronze, acier, damas, mithril, étoile). Les armes pas encore forgées restent en ombre, et chaque arme forgée montre la meilleure note obtenue avec elle. On y voit aussi le nombre de commandes remplies et la série de jours.

## L'enchantement (4e acte)

Dans les options, « Enchantement : Oui » ajoute un 4e acte : des runes arrivent à gauche puis à droite, à graver du bon côté. Ta précision donne une lueur à l'arme : braises, givre, foudre ou étoiles. L'armurerie garde le meilleur enchantement de chaque arme (un petit point de couleur).
