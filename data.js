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
    "image": "assets/maps/mine-hantee/portrait.jpg",
    "minimapImage": "assets/maps/mine-hantee/minimap.jpg",
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
  },
  {
    "id": "passe-alterac",
    "enabled": false,
    "name": {
      "fr": "Passe d'Alterac",
      "en": "Alterac Pass"
    },
    "image": "assets/maps/passe-alterac/portrait.jpg",
    "minimapImage": "assets/maps/passe-alterac/minimap.jpg",
    "headline": {
      "fr": "Deux camps d'emprisonnement à prendre et à tenir : chacun libère une cavalerie qui charge les voies. Les idoles sont remplacées par des généraux.",
      "en": "Two Prison Camps to take and hold: each one releases a Cavalry that charges down the lanes. The Cores are replaced by Generals."
    },
    "objectives": {
      "fr": "Capturer le camp d'emprisonnement adverse invoque votre cavalerie. Les camps se reprennent — héros comme serviteurs peuvent les retourner —, il faut donc les garder. Une fois invoquée, la cavalerie charge le long de chaque voie et augmente les dégâts et la vitesse de déplacement des héros alliés proches. Particularité de la carte : l'idole de chaque équipe est remplacée par un général qui se défend lui-même, et détruire un bastion réduit son armure.",
      "en": "Capturing the enemy Prison Camp summons your Cavalry. Camps can be retaken — both Heroes and Minions can flip them — so they need guarding. Once summoned, the Cavalry charges down each lane and grants nearby allied Heroes bonus damage and movement speed. The map's quirk: each team's Core is replaced by a General who fights back, and destroying a Keep strips away some of its Armor."
    },
    "tips": [],
    "hotspots": [],
    "guideVideos": []
  },
  {
    "id": "jardins-de-terreur",
    "enabled": false,
    "name": {
      "fr": "Jardins de terreur",
      "en": "Garden of Terror"
    },
    "image": "assets/maps/jardins-de-terreur/portrait.jpg",
    "minimapImage": "assets/maps/jardins-de-terreur/minimap.jpg",
    "headline": {
      "fr": "La reine Belladone fait pousser des graines gardées par des traîne-racines. Trois graines réunies, et une terreur de jardin part sur chaque voie.",
      "en": "Queen Nightshade grows Seeds guarded by Shamblers. Gather three and a Garden Terror burrows to every lane."
    },
    "objectives": {
      "fr": "La reine Belladone invoque régulièrement une graine, gardée par des traîne-racines qu'il faut terrasser avant de s'en emparer. Trois graines récoltées suffisent : des terreurs de jardin apparaissent aussitôt sur chacune des voies. Elles neutralisent les tours et les forts qu'elles approchent — d'où l'intérêt de les accompagner plutôt que de les laisser avancer seules.",
      "en": "Queen Nightshade periodically summons a Seed, guarded by Shamblers that have to be cleared before it can be taken. Three Seeds are enough: Garden Terrors immediately burrow to each lane. They disable the towers and forts they reach — which is why it pays to fight alongside them rather than let them push alone."
    },
    "tips": [],
    "hotspots": [],
    "guideVideos": []
  },
  {
    "id": "temple-hanamura",
    "enabled": false,
    "name": {
      "fr": "Temple d'Hanamura",
      "en": "Hanamura Temple"
    },
    "image": "assets/maps/temple-hanamura/portrait.jpg",
    "minimapImage": "assets/maps/temple-hanamura/minimap.jpg",
    "headline": {
      "fr": "Un seul convoi, au centre, que les deux équipes se disputent. Mené à destination, il bombarde les forts adverses.",
      "en": "A single payload at the centre, contested by both teams. Escorted to its destination, it bombards the enemy forts."
    },
    "objectives": {
      "fr": "À intervalles réguliers, un convoi apparaît au centre du champ de bataille. Il n'y en a qu'un, et les deux équipes se le disputent : rester à côté le fait avancer vers sa destination, et empêcher l'adversaire d'en faire autant fait partie du travail. Arrivé au bout, le convoi ouvre le feu sur les forts de l'équipe adverse.",
      "en": "At regular intervals a payload spawns at the centre of the battleground. There is only one, and both teams contest it: standing next to it moves it toward its destination, and keeping the enemy off it is half the job. Once it arrives, the payload opens fire on the enemy forts."
    },
    "tips": [],
    "hotspots": [],
    "guideVideos": []
  },
  {
    "id": "fonderie-volskaya",
    "enabled": false,
    "name": {
      "fr": "Fonderie Volskaya",
      "en": "Volskaya Foundry"
    },
    "image": "assets/maps/fonderie-volskaya/portrait.jpg",
    "minimapImage": "assets/maps/fonderie-volskaya/minimap.jpg",
    "headline": {
      "fr": "Des points de contrôle qui débloquent un méca géant, le protecteur Triglav, piloté à deux joueurs.",
      "en": "Control points that unlock a giant mech, the Triglav Protector, crewed by two players."
    },
    "objectives": {
      "fr": "Des points de contrôle s'activent régulièrement : il faut se tenir dedans pour les capturer. Une capture complète donne les commandes du protecteur Triglav, un méca géant qui demande deux opérateurs, un pilote et un artilleur — la coordination entre les deux fait toute la différence. Ses capacités infligent des dégâts considérables aux bâtiments comme aux héros.",
      "en": "Control points activate periodically: you capture one by standing inside it. A full capture hands you the Triglav Protector, a giant mech that needs two operators, a pilot and a gunner — how well those two coordinate decides everything. Its abilities deal heavy damage to structures and Heroes alike."
    },
    "tips": [],
    "hotspots": [],
    "guideVideos": []
  },
  {
    "id": "tours-du-destin",
    "enabled": false,
    "name": {
      "fr": "Tours du destin",
      "en": "Towers of Doom"
    },
    "image": "assets/maps/tours-du-destin/portrait.jpg",
    "minimapImage": "assets/maps/tours-du-destin/minimap.jpg",
    "headline": {
      "fr": "Les idoles sont intouchables : on gagne en activant des autels, et chaque clocher tenu ajoute des dégâts.",
      "en": "The Cores cannot be touched: you win by activating Altars, and every Bell Tower you hold adds damage."
    },
    "objectives": {
      "fr": "Les deux idoles sont protégées par une barrière que les héros ne peuvent pas attaquer — les frapper directement ne sert à rien. La victoire passe par les autels, qui s'élèvent périodiquement sur le champ de bataille : les activer déclenche le tir de vos clochers sur l'idole adverse. Détruire un clocher ennemi le fait passer sous votre contrôle, et plus vous en tenez, plus l'activation d'un autel fait mal.",
      "en": "Both Cores sit behind a barrier that Heroes cannot attack — hitting them directly achieves nothing. Victory runs through the Altars that rise periodically across the battlefield: activating one makes your Bell Towers fire on the enemy Core. Destroying an enemy Tower brings it under your control, and the more you hold, the harder each Altar hits."
    },
    "tips": [],
    "hotspots": [],
    "guideVideos": []
  },
  {
    "id": "sanctuaires-infernaux",
    "enabled": false,
    "name": {
      "fr": "Sanctuaires infernaux",
      "en": "Infernal Shrines"
    },
    "image": "assets/maps/sanctuaires-infernaux/portrait.jpg",
    "minimapImage": "assets/maps/sanctuaires-infernaux/minimap.jpg",
    "headline": {
      "fr": "Un sanctuaire s'allume, 40 gardiens à tuer avant l'adversaire, et un dominateur part sur une voie.",
      "en": "A shrine lights up, 40 Guardians to kill before the enemy, and a Punisher walks a lane."
    },
    "objectives": {
      "fr": "Les sanctuaires accumulent de la puissance et s'activent régulièrement. Une fois l'un d'eux allumé, la course est lancée : la première équipe à tuer 40 gardiens invoque un dominateur. Celui-ci arrive avec l'un de trois pouvoirs dévastateurs, et il vise les héros en priorité plutôt que les bâtiments — c'est un adversaire, pas seulement un bélier.",
      "en": "The shrines gather power and activate periodically. Once one lights up the race is on: the first team to slay 40 Guardians summons a Punisher. It arrives with one of three devastating powers, and it goes for Heroes before structures — it is an opponent, not just a battering ram."
    },
    "tips": [],
    "hotspots": [],
    "guideVideos": []
  },
  {
    "id": "champs-eternite",
    "enabled": true,
    "name": {
      "fr": "Champs de l'éternité",
      "en": "Battlefield of Eternity"
    },
    "image": "assets/maps/champs-eternite/portrait.jpg",
    "minimapImage": "assets/maps/champs-eternite/minimap.jpg",
    "headline": {
      "fr": "Deux Immortels s'affrontent sans fin. Aider le sien à l'emporter lâche un allié qui rase les forts adverses.",
      "en": "Two Immortals fight without end. Helping yours prevail releases an ally that levels the enemy forts."
    },
    "objectives": {
      "fr": "L'ange Ilarian et le seigneur démon Beleth se livrent un combat sans fin au centre de la carte. Ils ne se font aucun dégât : c'est aux héros d'abattre celui d'en face. Le premier affrontement démarre à 3:00, et l'Immortel vainqueur part ensuite dévaster les bâtiments adverses, dans la voie la moins endommagée. L'accompagner vaut mieux que le laisser seul — sa puissance ne remplace pas une équipe.",
      "en": "The angel Ilarian and the demon lord Beleth are locked in an endless duel at the centre of the map. They deal no damage to each other: it falls to the Heroes to bring the opposing one down. The first clash starts at 3:00, and the winning Immortal then walks into the lane with the least structural damage to wreck the enemy's buildings. Escorting it beats leaving it alone — its power does not replace a team."
    },
    "tips": [
      {
        "fr": "L'objectif tombe à 3:00, puis 1:45 après la mort du dernier Immortel parti en ligne. Arriver cinq secondes en retard offre 25 % d'avance à l'adversaire ; dix secondes, 50 %.",
        "en": "The objective starts at 3:00, then 1:45 after the last laning Immortal dies. Showing up five seconds late hands the enemy a 25% lead; ten seconds, 50%."
      },
      {
        "fr": "Les deux Immortels ne se blessent pas entre eux. Seuls les héros peuvent entamer celui d'en face — frapper le vôtre ne sert à rien.",
        "en": "The two Immortals deal no damage to each other. Only Heroes can bring the opposing one down — hitting your own achieves nothing."
      },
      {
        "fr": "Pendant la phase d'objectif, chaque Immortel porte un bouclier égal à ses points de vie restants : il y a donc deux fois plus à abattre qu'il n'y paraît.",
        "en": "During the objective phase each Immortal carries a shield equal to its remaining Health: there is twice as much to chew through as the bar suggests."
      },
      {
        "fr": "À 50 % de vie, les Immortels mettent dix secondes à échanger leurs places, et sont intouchables pendant ce temps. C'est la fenêtre pour se replacer, se soigner ou prendre un camp.",
        "en": "At 50% health the Immortals take ten seconds to swap places, and cannot be damaged meanwhile. That is the window to reposition, heal, or take a camp."
      },
      {
        "fr": "Leurs deux attaques ont 14 secondes de recharge, 16 une fois en ligne : l'une projette et étourdit une demi-seconde, l'autre frappe une zone après deux secondes et étourdit deux secondes. Les deux tuent un serviteur d'un seul coup.",
        "en": "Their two attacks have a 14-second cooldown, 16 once in a lane: one knocks back and stuns for half a second, the other hits an area after a two-second delay and stuns for two. Both one-shot minions."
      },
      {
        "fr": "Pousser un adversaire sous la zone d'explosion avec une projection cumule les dégâts et l'étourdissement — c'est le meilleur usage des compétences de déplacement sur cette carte.",
        "en": "Shoving an opponent under the delayed explosion with a knockback stacks the damage and the stun — the best use of displacement abilities on this map."
      },
      {
        "fr": "L'Immortel vainqueur part dans la voie la moins endommagée, et deux globes de régénération apparaissent au centre du champ de bataille.",
        "en": "The winning Immortal walks into the lane with the least structural damage, and two Regeneration Globes appear at the centre of the battleground."
      },
      {
        "fr": "Prendre le camp de bruisers vers 2:45 le fait arriver avec la vague de serviteurs, juste avant le début de la phase.",
        "en": "Taking the Bruiser camp around 2:45 lands it with the minion wave, right before the phase begins."
      },
      {
        "fr": "Les camps disparaissent dès que les Immortels entrent en ligne — sauf si des mercenaires y sont déjà engagés — et reviennent à la mort de l'Immortel.",
        "en": "Camps vanish as soon as the Immortals enter the lanes — unless mercenaries are already fighting there — and come back when the Immortal dies."
      },
      {
        "fr": "L'idole tire deux salves d'orbes glacées toutes les 12 secondes : elles explosent pour 5 % de vie maximale et immobilisent 1,5 seconde. Plonger sur une idole n'est jamais gratuit.",
        "en": "The Core fires two volleys of Frozen Orbs every 12 seconds: they explode for 5% maximum Health and root for 1.5 seconds. Diving a Core is never free."
      }
    ],
    "hotspots": [
      {
        "id": "be1",
        "type": "objectif",
        "x": 49.4,
        "y": 38.2,
        "name": {
          "fr": "Beleth, le seigneur démon",
          "en": "Beleth, the Demon Lord"
        },
        "description": {
          "fr": "L'Immortel de l'équipe du côté démoniaque. Il occupe la plateforme nord de l'arène et bascule au sud à 50 % de vie. Le faire tomber, c'est libérer Ilarian sur une voie.",
          "en": "The Immortal fighting for the demonic side. He holds the northern platform of the arena and swaps south at 50% health. Bringing him down releases Ilarian into a lane."
        },
        "image": "assets/maps/champs-eternite/captures/2.jpg"
      },
      {
        "id": "il1",
        "type": "objectif",
        "x": 49.9,
        "y": 60.6,
        "name": {
          "fr": "Ilarian, l'ange",
          "en": "Ilarian, the Angel"
        },
        "description": {
          "fr": "L'Immortel de l'équipe du côté angélique. Il occupe la plateforme sud et bascule au nord à 50 % de vie. Les deux Immortels se battent sans jamais s'entamer : tout dépend des héros.",
          "en": "The Immortal fighting for the angelic side. He holds the southern platform and swaps north at 50% health. The two Immortals fight without ever hurting each other: everything rests on the Heroes."
        },
        "image": "assets/maps/champs-eternite/captures/1.jpg"
      },
      {
        "id": "ca1",
        "type": "camp",
        "x": 36.3,
        "y": 22.8,
        "name": {
          "fr": "Camp de mercenaires — côté angélique",
          "en": "Mercenary camp — angelic side"
        },
        "description": {
          "fr": "Le champ de bataille compte quatre camps : deux de siège sur les voies du haut et du bas, deux de bruisers en diagonale. Disponibles dès 0:30, ils réapparaissent en 3:00 pour le siège et 4:00 pour les bruisers.",
          "en": "The battleground has four camps: two Siege on the top and bottom lanes, two Bruiser set diagonally. Available from 0:30, they respawn in 3:00 for Siege and 4:00 for Bruiser."
        },
        "image": ""
      },
      {
        "id": "ca2",
        "type": "camp",
        "x": 63.3,
        "y": 75,
        "name": {
          "fr": "Camp de mercenaires — côté démoniaque",
          "en": "Mercenary camp — demonic side"
        },
        "description": {
          "fr": "Le symétrique du camp d'en face. Les bruisers infligent 100 % de dégâts supplémentaires aux serviteurs et aux structures ; les impaleurs du camp de siège frappent les bâtiments sans entrer à leur portée.",
          "en": "The mirror of the camp opposite. Bruisers deal 100% bonus damage to minions and structures; the Siege camp Impalers hit buildings without walking into their range."
        },
        "image": "assets/maps/champs-eternite/captures/5.jpg"
      },
      {
        "id": "fo1",
        "type": "fontaine",
        "x": 26.4,
        "y": 14.4,
        "name": {
          "fr": "Fontaine de soins — côté angélique",
          "en": "Healing fountain — angelic side"
        },
        "description": {
          "fr": "Deux minutes de recharge. Sur une carte où la phase d'objectif revient toutes les 1:45, savoir si la fontaine est disponible pèse autant que les points de vie restants.",
          "en": "Two-minute cooldown. On a map where the objective comes back every 1:45, knowing whether the fountain is up matters as much as the health bars."
        },
        "image": ""
      }
    ],
    "guideVideos": []
  },
  {
    "id": "tombe-reine-araignee",
    "enabled": false,
    "name": {
      "fr": "Tombe de la reine araignée",
      "en": "Tomb of the Spider Queen"
    },
    "image": "assets/maps/tombe-reine-araignee/portrait.jpg",
    "minimapImage": "assets/maps/tombe-reine-araignee/minimap.jpg",
    "headline": {
      "fr": "Des gemmes ramassées sur les morts, à rapporter aux autels avant de mourir soi-même.",
      "en": "Gems dropped by the dead, to be handed in at the altars before you die yourself."
    },
    "objectives": {
      "fr": "Les serviteurs araignées et les héros adverses lâchent des gemmes en mourant. Il faut les ramasser, puis les rapporter à l'un des autels de la Reine araignée : mourir avec ses gemmes sur soi, c'est les perdre toutes. La première équipe à en livrer assez déclenche les tissetoiles, qui partent détruire les défenses adverses.",
      "en": "Enemy spider minions and Heroes drop Gems when they die. You pick them up, then hand them in at one of the Spider Queen's altars: dying while carrying them means losing the lot. The first team to turn in enough unleashes the Webweavers on the enemy's defences."
    },
    "tips": [],
    "hotspots": [],
    "guideVideos": []
  },
  {
    "id": "temple-celeste",
    "enabled": false,
    "name": {
      "fr": "Temple céleste",
      "en": "Sky Temple"
    },
    "image": "assets/maps/temple-celeste/portrait.jpg",
    "minimapImage": "assets/maps/temple-celeste/minimap.jpg",
    "headline": {
      "fr": "Des temples à capturer et à tenir, sous le feu de gardiens qui cherchent à les reprendre.",
      "en": "Temples to capture and hold, under fire from Guardians trying to take them back."
    },
    "objectives": {
      "fr": "Les temples s'activent périodiquement : se tenir dans l'enceinte de l'un d'eux en absorbe la puissance. Y rester assez longtemps déclenche une salve sur les forts adverses. Mais des gardiens sortent pour reprendre leur temple — les repousser fait partie de l'objectif, sans quoi la puissance change de camp.",
      "en": "Temples activate periodically: standing inside one's grounds captures its power. Holding it long enough unleashes a volley on the enemy forts. But Guardians come out to take their temple back — pushing them off is part of the objective, otherwise the power changes hands."
    },
    "tips": [],
    "hotspots": [],
    "guideVideos": []
  },
  {
    "id": "baie-coeur-noir",
    "enabled": false,
    "name": {
      "fr": "Baie de Cœur-Noir",
      "en": "Blackheart's Bay"
    },
    "image": "assets/maps/baie-coeur-noir/portrait.jpg",
    "minimapImage": "assets/maps/baie-coeur-noir/minimap.jpg",
    "headline": {
      "fr": "Des doublons arrachés aux coffres et aux mercenaires, à livrer au pirate fantôme qui bombarde ensuite.",
      "en": "Doubloons taken from chests and mercenaries, handed to the ghost pirate who then opens fire."
    },
    "objectives": {
      "fr": "Les doublons se récupèrent en attaquant les coffres au trésor et les mercenaires. Il faut ensuite les livrer à Cœur-Noir en personne : mourir en les portant, c'est tout perdre. Quand une équipe lui en a donné assez, il bombarde les forts adverses depuis son navire.",
      "en": "Doubloons come from attacking Treasure Chests and Mercenaries. You then hand them to Blackheart himself: dying while carrying them means losing everything. Once a team has given him enough, he bombards the enemy forts from his ship."
    },
    "tips": [],
    "hotspots": [],
    "guideVideos": []
  },
  {
    "id": "comte-du-dragon",
    "enabled": false,
    "name": {
      "fr": "Comté du dragon",
      "en": "Dragon Shire"
    },
    "image": "assets/maps/comte-du-dragon/portrait.jpg",
    "minimapImage": "assets/maps/comte-du-dragon/minimap.jpg",
    "headline": {
      "fr": "Deux sanctuaires à tenir en même temps, puis un héros à envoyer dans la statue pour incarner le chevalier dragon.",
      "en": "Two shrines to hold at once, then a Hero sent into the statue to become the Dragon Knight."
    },
    "objectives": {
      "fr": "Deux sanctuaires : il faut tenir les deux en même temps pour activer la statue du chevalier dragon. Une fois la statue active, un héros doit s'y rendre pour libérer le dragon — et c'est lui qui l'incarne. Sa puissance sert avant tout à raser les forts adverses.",
      "en": "Two shrines: you have to hold both at once to activate the Dragon Knight's statue. Once it is active, a Hero must reach it to free the Dragon — and that Hero becomes it. Its power is best spent levelling the enemy forts."
    },
    "tips": [],
    "hotspots": [],
    "guideVideos": []
  },
  {
    "id": "val-maudit",
    "enabled": false,
    "name": {
      "fr": "Val maudit",
      "en": "Cursed Hollow"
    },
    "image": "assets/maps/val-maudit/portrait.jpg",
    "minimapImage": "assets/maps/val-maudit/minimap.jpg",
    "headline": {
      "fr": "Trois tributs du seigneur corbeau, et l'équipe adverse se retrouve maudite : forts muets, serviteurs à un point de vie.",
      "en": "Three of the Raven Lord's Tributes, and the enemy team is cursed: silent forts, Minions on one Health."
    },
    "objectives": {
      "fr": "Le seigneur corbeau fait apparaître des tributs à intervalles réguliers ; il faut s'en emparer avant l'équipe adverse. Trois tributs suffisent à déclencher la malédiction : les forts ennemis cessent d'attaquer et leurs serviteurs tombent à un seul point de vie. C'est la fenêtre pour pousser.",
      "en": "The Raven Lord spawns Tributes at regular intervals, and they have to be taken before the enemy does. Three of them trigger the curse: enemy forts stop attacking and their Minions drop to a single Health. That is the window to push."
    },
    "tips": [],
    "hotspots": [],
    "guideVideos": []
  },
  {
    "id": "laboratoire-braxis",
    "enabled": false,
    "name": {
      "fr": "Laboratoire de Braxis",
      "en": "Braxis Holdout"
    },
    "image": "assets/maps/laboratoire-braxis/portrait.jpg",
    "minimapImage": "assets/maps/laboratoire-braxis/minimap.jpg",
    "headline": {
      "fr": "Deux balises à capturer pour remplir sa cellule de Zergs — et les vagues partent des deux côtés à la fois.",
      "en": "Two beacons to capture to fill your cell with Zerg — and the waves go out on both sides at once."
    },
    "objectives": {
      "fr": "Deux balises s'activent périodiquement : les tenir remplit votre cellule de détention de Zergs. Dès qu'une des deux cellules est pleine, les deux s'ouvrent et lâchent des vagues sur la base de chaque équipe — la vôtre part en même temps que celle d'en face. Les Zergs s'en prennent aux héros, ce qui rend l'engagement plus risqué qu'il n'y paraît.",
      "en": "Two beacons activate periodically: holding them fills your Holding Cell with Zerg. As soon as either cell is full, both open and send waves at each team's base — yours leaves at the same time as theirs. The Zerg attack Heroes, which makes engaging riskier than it looks."
    },
    "tips": [],
    "hotspots": [],
    "guideVideos": []
  },
  {
    "id": "menace-nucleaire",
    "enabled": false,
    "name": {
      "fr": "Menace nucléaire",
      "en": "Warhead Junction"
    },
    "image": "assets/maps/menace-nucleaire/portrait.jpg",
    "minimapImage": "assets/maps/menace-nucleaire/minimap.jpg",
    "headline": {
      "fr": "Des ogives éparpillées sur la carte : en ramasser une arme une frappe, mourir avec la fait perdre.",
      "en": "Warheads scattered across the map: picking one up arms a nuke, dying with it loses it."
    },
    "objectives": {
      "fr": "Des ogives apparaissent de temps à autre, plusieurs à la fois, un peu partout sur le champ de bataille. En ramasser une arme votre frappe nucléaire ; il faut l'utiliser, car mourir avec sur soi la fait perdre. Les frappes servent à dévaster les fortifications adverses.",
      "en": "Warheads appear from time to time, several at once, scattered across the battleground. Picking one up arms your nuke; you have to use it, because dying while carrying it means dropping it. The strikes are there to wreck the enemy fortifications."
    },
    "tips": [],
    "hotspots": [],
    "guideVideos": []
  }
];
