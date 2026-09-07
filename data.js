/*
  data.js — Données du site Cartes (Battlegrounds).
  Généré / mis à jour par admin.html. À ne pas éditer à la main sauf nécessité.

  STREAMER_CONFIG : réglages communs du site (titre, réseaux, liens de navigation,
                    date de mise à jour, journal des changements, mesure d'audience).
  BATTLEGROUNDS   : la liste des cartes.
*/

const STREAMER_CONFIG = {
  "logoImage": "",
  "siteTitle": {
    "fr": "EOWEA BUILDS",
    "en": "EOWEA BUILDS"
  },
  "siteSubtitle": {
    "fr": "Recherche le build du héros qui t'intéresse grâce à la barre de recherche, aux filtres ou en cliquant dans la liste. Passe ton curseur sur les sorts et talents pour un descriptif écrit et vidéo.",
    "en": "Search for the hero build you're interested in using the search bar, filters, or by clicking in the list. Hover over spells and talents for a written and video description."
  },
  "socials": [
    {
      "label": "Twitch",
      "url": "https://www.twitch.tv/eowea",
      "icon": "twitch"
    },
    {
      "label": "YouTube",
      "url": "https://www.youtube.com/@eowea?sub_confirmation=1",
      "icon": "youtube"
    },
    {
      "label": "X",
      "url": "https://x.com/eowea_",
      "icon": "x"
    },
    {
      "label": "Discord",
      "url": "https://discord.gg/KTAKdKUe5g",
      "icon": "discord"
    },
    {
      "label": "Ko-fi",
      "url": "https://ko-fi.com/eowea",
      "icon": "kofi"
    }
  ],
  "navLinks": [
    {
      "enabled": true,
      "label": {
        "fr": "Patchs",
        "en": "Patches"
      },
      "url": "https://nexus-patch-notes.github.io",
      "newTab": true
    }
  ],
  "latestVideos": [
    {
      "title": {
        "fr": "GUIDE COMPLET: Mine Hantée",
        "en": "COMPLETE GUIDE: Haunted Mine"
      },
      "youtubeId": "https://youtu.be/6LcTtaws0yk"
    },
    {
      "title": {
        "fr": "Slapathur Master Gameplay - Aucun commentaire",
        "en": "Slapathur Master Gameplay - No commentary"
      },
      "youtubeId": "sNeMU-aHYQY"
    },
    {
      "title": {
        "fr": "Ana Grand Master Gameplay - Aucun commentaire",
        "en": "Ana Grand Master Gameplay - No commentary"
      },
      "youtubeId": "Fl23LG4v-U0"
    },
    {
      "title": {
        "fr": "Dehaka Grand Master Gameplay - Analyse & Explications",
        "en": "Dehaka Grandmaster Gameplay - Analysis & Explanations"
      },
      "youtubeId": "Nfp1w2JU-DQ"
    }
  ],
  "patchVideos": [
    {
      "title": {
        "fr": "NOUVEAU PATCH HotS : Skin Lúcio, Mine Hantée, Reworks, ...",
        "en": "NEW HotS PATCH: Lúcio Skin, Haunted Mine, Reworks, ..."
      },
      "youtubeId": "https://youtu.be/m8kifCbSy-s"
    }
  ],
  "showHeroRotation": true,
  "siteUpdate": {
    "enabled": true,
    "autoDate": true,
    "date": {
      "fr": "7 Septembre 2026",
      "en": "September 7, 2026"
    },
    "changelog": [
      {
        "date": {
          "fr": "7 Septembre 2026",
          "en": "September 7, 2026"
        },
        "items": [
          {
            "fr": "Les 90 héros sont en ligne : 38 nouvelles fiches, dont Fenix, Maiev, Méphisto, Nova, Orphéa, Qhira, Samuro et Zeratul pour boucler le roster.",
            "en": "All 90 Heroes are online: 38 new pages, including Fenix, Maiev, Mephisto, Nova, Orphea, Qhira, Samuro and Zeratul to round out the roster."
          },
          {
            "fr": "57 builds ajoutés, avec plusieurs choix sur 15 héros — jusqu'à trois sur Alarak, Chromie, Hanzo et Leoric.",
            "en": "57 builds added, with several options on 15 Heroes — up to three on Alarak, Chromie, Hanzo and Leoric."
          }
        ]
      },
      {
        "date": {
          "fr": "2 Septembre 2026",
          "en": "September 2, 2026"
        },
        "items": [
          {
            "fr": "5 nouveaux héros en ligne : Grisetête, Kel'Thuzad, Malthaël, Tassadar et Tracer.",
            "en": "5 new Heroes online: Greymane, Kel'Thuzad, Malthael, Tassadar and Tracer."
          },
          {
            "fr": "Plusieurs builds au choix sur Asmodan, Blanchetête, Cassia, Diablo, Kel'Thuzad, Ragnaros, Tassadar et Tyrande.",
            "en": "Several builds to choose from on Azmodan, Cassia, Diablo, Kel'Thuzad, Ragnaros, Tassadar, Tyrande and Whitemane."
          },
          {
            "fr": "7 codes de build corrigés sur Deckard Cain, Li-Ming, Lt. Morales, Nasibo, Sgt. Marteau et Tychus : le code que vous copiez correspond maintenant à l'arbre affiché.",
            "en": "7 build codes fixed on Deckard Cain, Li-Ming, Lt. Morales, Nazeebo, Sgt. Hammer and Tychus: the code you copy now matches the tree on the page."
          },
          {
            "fr": "Descriptions revues sur Aile de Mort, Alexstrasza, Artanis, Asmodan, Cassia, Cho, Diablo, Impérius, Malfurion, Mal'Ganis et Tyrael.",
            "en": "Descriptions reworked on Alexstrasza, Artanis, Azmodan, Cassia, Cho, Deathwing, Diablo, Imperius, Malfurion, Mal'Ganis and Tyrael."
          },
          {
            "fr": "Conseils revus sur Jaina et Sonya.",
            "en": "Tips reworked for Jaina and Sonya."
          },
          {
            "fr": "Le site mesure sa fréquentation, sans cookie ni donnée personnelle.",
            "en": "The site measures its traffic, with no cookies and no personal data."
          },
          {
            "fr": "Ajout des rotations de héros gratuits sur la page d'accueil.",
            "en": "Added free hero rotations to the home page."
          }
        ]
      },
      {
        "date": {
          "fr": "20 Août 2026",
          "en": "August 20, 2026"
        },
        "items": [
          {
            "fr": "19 nouveaux héros en ligne, dont 13 tanks.",
            "en": "19 new Heroes are live, 13 of them Tanks."
          },
          {
            "fr": "Sélecteur de forme sur les héros qui changent de capacités en combat : Abathur, Aile de Mort, Alexstrasza, Ragnaros, Tychus et Uther.",
            "en": "A form switcher on the Heroes whose abilities change mid-fight: Abathur, Deathwing, Alexstrasza, Ragnaros, Tychus and Uther."
          },
          {
            "fr": "Nouvelle carte « Bugs connus » sur les fiches concernées, avec la date du relevé.",
            "en": "New \"Known issues\" card on the Heroes concerned, with the date it was recorded."
          },
          {
            "fr": "Les conseils indiquent désormais la touche du sort dont ils parlent.",
            "en": "Tips now show the key of the Ability they mention."
          },
          {
            "fr": "La rotation gratuite se met à jour toute seule chaque semaine, et chaque héros déjà en ligne est cliquable.",
            "en": "The free rotation now updates itself every week, and every Hero already on the site is clickable."
          },
          {
            "fr": "La recherche accepte les noms sans ponctuation : « etc » trouve E.T.C.",
            "en": "Search accepts names without punctuation: \"etc\" finds E.T.C."
          }
        ]
      }
    ]
  },
  "analytics": {
    "enabled": true,
    "goatcounterCode": "eowea"
  }
};

const BATTLEGROUNDS = [
  {
    "id": "test",
    "enabled": true,
    "name": {
      "fr": "test",
      "en": "test"
    },
    "image": "assets/heroes/portraits/storm_ui_glues_draft_portrait_abathur.png",
    "minimapImage": "assets/maps/minimap/map_mines.jpg",
    "headline": {
      "fr": "blablabla",
      "en": ""
    },
    "objectives": {
      "fr": "blablabla",
      "en": ""
    },
    "tips": [
      {
        "fr": "attention",
        "en": ""
      }
    ],
    "mercenaryCamps": [
      {
        "image": "assets/heroes/portraits/storm_ui_glues_draft_portrait_deathwing.png",
        "name": {
          "fr": "jean",
          "en": ""
        },
        "description": {
          "fr": "jean",
          "en": ""
        }
      }
    ],
    "guideVideos": []
  }
];
