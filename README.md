# battlegrounds

Site des **cartes** de Heroes of the Storm, et son panneau d'administration.

C'est le pendant « cartes » du dépôt [builds](https://github.com/Eowea/builds) : même
charte graphique, même façon de travailler, mais l'objet éditorial est une carte
(minimap, objectif, conseils, camps de mercenaires, vidéos guide) au lieu d'un héros.

## Les fichiers

| Fichier | Rôle |
| --- | --- |
| `index.html` | La page publique des cartes. |
| `battlegrounds.js` | Tout l'affichage de cette page (liste, fiche, carrousel vidéo, bilingue FR/EN). |
| `style.css` | La feuille de style du site, identique à celle du dépôt builds. |
| `data.js` | Les données : `STREAMER_CONFIG` (réglages du site) et `BATTLEGROUNDS` (les cartes). |
| `admin.html` | Le panneau d'administration, autonome : il lit et écrit `data.js` via l'API GitHub. |
| `admins.js` | Les comptes autorisés à ouvrir le panneau. Aucun mot de passe en clair, uniquement des empreintes. |
| `assets/fonts/` | La police Metronic for Blizzard. |
| `assets/maps/` | Les images des cartes : minimaps, camps de mercenaires, vignettes. |

## Le panneau d'administration

Ouvre `admin.html` (en ligne ou en local, peu importe), puis :

1. **Connexion** avec un compte de `admins.js`.
2. **Token GitHub** — un jeton personnel avec le droit *Contents: Read and write* sur ce
   dépôt. Il ne quitte jamais le navigateur : il ne part qu'à l'API GitHub.
3. La barre de gauche liste les cartes. On en choisit une, et elle s'ouvre à droite en
   quatre onglets : **Informations**, **Conseils**, **Camps de mercenaires**,
   **Vidéos guide**. La poignée ⠿ réordonne les listes par glisser-déposer.
4. **Enregistrer sur GitHub** montre le dépôt visé et le message de commit avant d'envoyer.
   Si `data.js` a changé entre-temps, le panneau le dit au lieu d'écraser en silence.

Deux écrans complètent l'édition des cartes :

- **Configuration du site** — titre, logo, réseaux sociaux, liens du header, date de mise à
  jour, journal des changements, mesure d'audience.
- **Administrateurs** — ajout et retrait de comptes, avec deux rôles : *administrateur*
  (accès complet) et *éditeur* (édite les cartes et la configuration, mais ne gère pas les
  comptes). Réservé aux administrateurs.

### Ajouter les images d'une carte

Le sélecteur d'images lit le dossier `assets/` **du dépôt sur GitHub**, pas les fichiers
locaux : dépose d'abord les images dans `assets/maps/`, puis elles apparaissent dans le
panneau. Il les regroupe par carte quand le nom du fichier ou du dossier correspond au nom
ou à l'identifiant d'une carte, et les range en *Vignettes* / *Minimap* / *Camps*.

## Aperçu en local

`.claude/launch.json` lance un serveur statique sur le port 8123 :

```bash
python -m http.server 8123
```

Puis `http://localhost:8123/` pour le site, `http://localhost:8123/admin.html` pour le
panneau. Ouvrir les fichiers directement en `file://` fonctionne aussi, mais le serveur
évite les surprises sur les polices.

## À savoir

- **Un seul lien en dur** vers l'autre site : le bouton « maison » de la barre d'outils,
  dans `index.html`, pointe vers `https://eowea.github.io/builds/`. Tous les autres liens
  du header se règlent depuis *Configuration du site → Liens de navigation*.
- `data.js` conserve quelques réglages qui appartiennent au site des builds
  (`latestVideos`, `patchVideos`, `showHeroRotation`). Ils ne servent pas aux cartes et ne
  sont pas éditables ici, mais le panneau les réenregistre tels quels : rien ne se perd.
- Les deux dépôts ont chacun leur `data.js`. Une modification faite ici ne remonte pas
  dans builds, et inversement.
