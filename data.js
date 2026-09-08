/*
  data.js — Données du site Cartes (Battlegrounds).
  Généré / mis à jour par admin.html. À ne pas éditer à la main sauf nécessité.

  STREAMER_CONFIG : réglages communs du site (titre, réseaux, liens de navigation,
                    date de mise à jour, journal des changements, mesure d'audience).
  BATTLEGROUNDS   : la liste des cartes. Chaque carte porte ses "hotspots" : les points
                    cliquables posés sur la minimap, en pourcentage de sa largeur et de
                    sa hauteur, pour qu'ils suivent l'image à toutes les tailles d'écran.
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
    "id": "mine-hantee",
    "enabled": true,
    "name": {
      "fr": "Mine Hantée",
      "en": "Haunted Mines"
    },
    "image": "assets/maps/minimap/map_mines.jpg",
    "minimapImage": "assets/maps/minimap/map_mines.jpg",
    "headline": {
      "fr": "Deux lignes en surface, une mine ouverte en permanence en dessous. La première équipe à y ramasser 55 crânes maudits déclenche les golems sépulcraux.",
      "en": "Two lanes above ground, a permanently open mine below. The first team to gather 55 Cursed Skulls down there triggers the Grave Golems."
    },
    "objectives": {
      "fr": "À 3:00, l'armée de morts-vivants se lève dans la mine, qui reste ouverte jusqu'à la fin de la partie. Huit groupes de mineurs et un golem sépulcral y lâchent 110 crânes maudits en tout : chaque mineur en donne 2, et le golem souterrain 8 par tranche de 25 % de vie perdue, plus 6 à sa mort — 38 à lui seul. La première équipe à en ramasser 55 met fin à la phase. Les deux camps reçoivent alors leur propre golem sépulcral, qui part pousser une ligne : chaque crâne récolté lui ajoute 7 % de puissance. L'armée réapparaît 2:00 après la mort des golems.",
      "en": "At 3:00 the Undead Army rises inside the mine, which then stays open for the rest of the game. Eight groups of miners and one Grave Golem drop 110 Cursed Skulls in total: each miner gives 2, and the underground Golem gives 8 for every 25% of health it loses, plus 6 on death — 38 on its own. The first team to gather 55 ends the phase. Both sides then get their own Grave Golem, which walks down a lane to push: every skull collected adds 7% to its power. The Army returns 2:00 after the Golems die."
    },
    "tips": [
      {
        "fr": "Les groupes de mineurs en haut à droite et en bas à gauche rapportent 10 crânes au lieu de 8. Commence toujours par eux, puis enchaîne sur les groupes voisins encore debout.",
        "en": "The miner groups in the top-right and bottom-left drop 10 skulls instead of 8. Always start there, then move on to the nearest groups still standing."
      },
      {
        "fr": "Sous terre, la vision des héros tombe de 12 à 6,5 : on ne voit plus arriver l'équipe adverse, et certaines compétences perdent de la portée. Reste près d'un allié ou d'une unité qui donne de la vision avant d'engager.",
        "en": "Underground, Hero vision drops from 12 to 6.5: you no longer see the enemy team coming, and some Abilities lose range. Stay near an ally or a unit that grants vision before committing."
      },
      {
        "fr": "Les deux tours de guet gardent les entrées gauche et droite de la mine. Les tenir, c'est voir l'équipe adverse descendre avant qu'elle n'atteigne les crânes.",
        "en": "The two Watch Towers overlook the left and right entrances to the mine. Holding them means seeing the enemy team go down before they reach the skulls."
      },
      {
        "fr": "Prends le camp de sapeurs dès 0:30, avant que la mine n'ouvre : c'est de la pression gratuite tant que personne ne peut y répondre.",
        "en": "Take the Sapper Camp as early as 0:30, before the mine opens: it is free pressure while nobody can answer it."
      },
      {
        "fr": "Enchaîne sur le camp de géants de siège vers 2:20–2:40, juste avant l'apparition de l'armée : les géants poussent pendant que les dix héros sont sous terre.",
        "en": "Follow up with the Siege Camp around 2:20–2:40, right before the Army spawns: the giants push while all ten Heroes are underground."
      },
      {
        "fr": "Descendre à cinq n'a rien d'obligatoire. Si ton équipe pousse mieux qu'elle ne se bat, laisser une ligne travailler pendant que les autres ramassent rapporte parfois plus que les crânes eux-mêmes.",
        "en": "Going down five-strong is never mandatory. If your team pushes better than it fights, leaving someone to work a lane while the rest collect can pay more than the skulls themselves."
      },
      {
        "fr": "Entre la fin de la phase et l'arrivée des golems, il reste une trentaine de secondes : c'est le moment de prendre le camp de siège de ton côté pour accompagner ton golem.",
        "en": "There is about half a minute between the end of the phase and the Golems arriving: that is the window to take the Siege Camp on your side and escort your Golem."
      },
      {
        "fr": "La mine est pleine de murs infranchissables. Les compétences de contrôle et de déplacement y valent bien plus qu'en surface, dans un sens comme dans l'autre.",
        "en": "The mine is full of impassable terrain. Crowd control and mobility Abilities are worth far more down there than above ground — for both teams."
      }
    ],
    "guideVideos": [
      {
        "title": {
          "fr": "GUIDE COMPLET : Mine Hantée",
          "en": "COMPLETE GUIDE: Haunted Mines"
        },
        "youtubeId": "https://youtu.be/6LcTtaws0yk"
      }
    ],
    "hotspots": [
      {
        "id": "p1",
        "type": "camp",
        "x": 16,
        "y": 37.5,
        "name": {
          "fr": "Camp de sapeurs",
          "en": "Sapper Camp"
        },
        "description": {
          "fr": "Un au centre de chaque ligne. Trois sapeurs qui foncent sur la première structure venue et explosent dessus. Disponible à 0:30, réapparaît 2:30 après avoir été pris. Un étourdissement, un silence ou une projection suffit à interrompre leur course.",
          "en": "One in the middle of each lane. Three Sappers that sprint at the nearest structure and explode on it. Available at 0:30, respawns 2:30 after being taken. A stun, a silence or a knockback is enough to stop their run."
        },
        "image": ""
      },
      {
        "id": "p2",
        "type": "camp",
        "x": 16,
        "y": 65.5,
        "name": {
          "fr": "Camp de géants de siège",
          "en": "Siege Camp"
        },
        "description": {
          "fr": "À gauche de la ligne du haut et à droite de la ligne du bas. Deux géants qui lancent des rochers esquivables et infligent 100 % de dégâts supplémentaires aux structures, sans avoir besoin de s'en approcher. Disponible à 0:30, réapparaît 3:00 après avoir été pris.",
          "en": "Left side of the top lane, right side of the bottom lane. Two Siege Giants that throw dodgeable boulders and deal 100% bonus damage to structures, without having to close in. Available at 0:30, respawns 3:00 after being taken."
        },
        "image": ""
      }
    ]
  }
];
