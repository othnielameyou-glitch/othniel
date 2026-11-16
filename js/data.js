/* ============================================================
   GRIMOIRE DE CLOVER — Données du monde magique
   ============================================================ */

const CHARACTERS = [
  {
    id: "asta",
    name: "Asta",
    epithet: "Le Chevalier sans Magie",
    squad: "Taureau Noir",
    rank: "Chevalier de 3e classe supérieure",
    grimoire: "Trèfle à 5 feuilles (Anti-Magie)",
    magic: "Anti-Magie",
    country: "Royaume de Clover",
    birthday: "4 octobre",
    age: "15-16 ans",
    height: "155 cm",
    origin: "Village de Hage (Royaume Oublié)",
    color: "#1b1b1f",
    emoji: "😤",
    bio: "Abandonné bébé à l'église de Hage le même jour que Yuno, Asta grandit sans la moindre once de magie dans un monde où elle est tout. Refusant le désespoir, il s'entraîne son corps à la limite du possible pendant des années. Le jour de la cérémonie des grimoires, alors que Yuno reçoit le légendaire trèfle à 4 feuilles, Asta reçoit un grimoire délabré à 5 feuilles contenant l'Anti-Magie et une épée géante. Il intègre la pire compagnie du royaume, le Taureau Noir, et grimpe les rangs en prouvant que la volonté vaut plus que le talent.",
    techniques: [
      { name: "Coupe Noire (Black Divider)", desc: "L'épée démoniaque brise les sorts et coupe la magie elle-même." },
      { name: "Forme Berserk", desc: "Canalisation du pouvoir de Li'l Devil : force et vitesse démoniaques." },
      { name: "Union : Démon Bouledogue Noir", desc: "Union avec le démon pour une puissance d'anti-magie maximale." },
      { name: "Épée du Démon Écraseur", desc: "Épée qui annule et absorbe les effets magiques." }
    ],
    facts: ["Sa voix est célèbre pour être extrêmement bruyante — un gag récurrent du manga.", "Il est incapable de mentir.", "Il veut devenir Roi-Mage pour prouver que n'importe qui peut réussir."]
  },
  {
    id: "yuno",
    name: "Yuno Grinberryall",
    epithet: "Le Génie du Vent",
    squad: "Aurore Dorée",
    rank: "Vice-Capitaine puis Capitaine",
    grimoire: "Trèfle à 4 feuilles (Vent) + Étoiles",
    magic: "Magie du Vent et des Étoiles",
    country: "Royaume de Clover (né à Spade)",
    birthday: "4 octobre",
    age: "15-16 ans",
    height: "172 cm",
    origin: "Village de Hage — prince du Royaume de Spade",
    color: "#3ba7c4",
    emoji: "🌬️",
    bio: "Héritier caché de la famille royale Grinberryall du Royaume de Spade, Yuno est abandonné bébé à l'église de Hage lors de la purge de son pays. Prodige absolu, il reçoit le trèfle à 4 feuilles et intègre directement l'Aurore Dorée, la meilleure compagnie du royaume. Froid en apparence mais profondément loyal, il ne jure qu'une chose : dépasser Asta, son rival d'enfance devenu son frère d'âme. Il éveillera plus tard la magie des Étoiles, marque des rois de Spade.",
    techniques: [
      { name: "Lame de Vent Spirituelle", desc: "Lames d'air comprimé tranchant l'acier." },
      { name: "Union : Sylph — Danse du Vent Fuyant", desc: "Fusion avec l'esprit du vent Sylph." },
      { name: "Étoile Nordique", desc: "Magie des Étoiles : téléportation par constellation." },
      { name: "Tourbillon Céleste", desc: "Cyclone géant dévastant un champ de bataille entier." }
    ],
    facts: ["Il parle très peu mais chaque mot compte.", "Il a été le premier rival déclaré d'Asta.", "Son trèfle à 4 feuilles est un symbole de chance énorme dans la société magique."]
  },
  {
    id: "noelle",
    name: "Noelle Silva",
    epithet: "La Reine des Eaux",
    squad: "Taureau Noir",
    rank: "Chevalier junior puis Chevalier de 3e classe",
    grimoire: "Trèfle à 3 feuilles (Eau)",
    magic: "Magie de l'Eau (sang royal)",
    country: "Royaume de Clover",
    birthday: "15 novembre",
    age: "15-16 ans",
    height: "160 cm",
    origin: "Maison royale Silva, capitale du Royaume de Clover",
    color: "#5aa7e8",
    emoji: "🌊",
    bio: "Fille de la maison royale Silva, Noelle est méprisée depuis l'enfance : incapable de contrôler sa magie de l'eau, elle est accusée d'avoir causé la mort de sa mère Acier. Rejetée par sa famille, elle rejoint le Taureau Noir où, pour la première fois, on la félicite d'échouer. Sous la tutelle de Yami, elle apprend à dompter son pouvoir et développe les armures Valkyrie. Elle deviendra l'une des mages aquatiques les plus puissantes de sa génération.",
    techniques: [
      { name: "Dragon de l'Eau", desc: "Serpent d'eau géant capable de percer les défenses." },
      { name: "Valkyrie Robe", desc: "Armure aqueuse volante qui canalise parfaitement sa magie." },
      { name: "Mer de la Mort d'Acier", desc: "Attaque ultime héritée du style de sa mère." },
      { name: "Sainte Valkyrie", desc: "Forme sanctifiée obtenue grâce à la magie de l'eau sacrée." }
    ],
    facts: ["Tsundere assumée : elle nie farouchement ses sentiments pour Asta.", "Sa mère Acier était la mage aquatique la plus forte de l'histoire de Clover.", "Elle finit par réconcilier sa famille."]
  },
  {
    id: "yami",
    name: "Yami Sukehiro",
    epithet: "Le Seigneur des Ténèbres",
    squad: "Taureau Noir",
    rank: "Capitaine",
    grimoire: "Trèfle à 3 feuilles (Ténèbres)",
    magic: "Magie des Ténèbres",
    country: "Royaume de Clover (né au pays du Soleil Levant)",
    birthday: "17 septembre",
    age: "28-29 ans",
    height: "192 cm",
    origin: "Pays du Soleil Levant — immigré à Clover",
    color: "#7b5cff",
    emoji: "🌑",
    bio: "Né dans un lointain pays inspiré du Japon, Yami échoue dans le Royaume de Clover enfant et y est traité d'étranger barbare. Recueilli puis trahi, il forge sa propre voie et fonde le Taureau Noir, une compagnie de rebonds où les marginaux trouvent enfin une place. Capitaine le plus fort au corps-à-corps, il manie la magie des ténèbres qui dévore tout et entraîne ses recrues avec une brutalité légendaire. Son passe-temps : les toilettes, son sanctuaire absolu.",
    techniques: [
      { name: "Dimension Slash : Éclipse", desc: "Coupe l'espace-temps lui-même." },
      { name: "Union : Gardien des Ténèbres", desc: "Union avec la magie démoniaque de Nacht." },
      { name: "Sombre Cloaque", desc: "Mer de ténèbres qui absorbe et écrase les sorts." },
      { name: "Death Thrust", desc: "Percée noire concentrée perçant toute dimension." }
    ],
    facts: ["Il fume une nouvelle cigarette à chaque scène importante.", "Sa phrase fétiche : « Dépasse tes limites ! »", "Il a recruté presque tous les membres du Taureau Noir personnellement."]
  },
  {
    id: "mimosa",
    name: "Mimosa Vermillion",
    epithet: "La Princesse Guérisseuse",
    squad: "Aigle Ailé",
    rank: "Chevalier de 5e classe intermédiaire",
    grimoire: "Trèfle à 3 feuilles (Plantes)",
    magic: "Magie des Plantes et de la Récupération",
    country: "Royaume de Clover",
    birthday: "16 mai",
    age: "15-16 ans",
    height: "158 cm",
    origin: "Maison royale Vermillion, capitale de Clover",
    color: "#f08fb4",
    emoji: "🌸",
    bio: "Princesse de la maison Vermillion, Mimosa refuse le mépris de caste qui gangrène la noblesse. Guérisseuse d'exception, elle soigne indifféremment roturiers et royaux, ce qui lui vaut l'affection de tous. Dans l'ombre de sa douceur se cache une redoutable combattante : sa magie de plantes peut aussi brûler, écraser et cartographier un champ de bataille entier. Elle nourrit secrètement des sentiments pour Asta, au grand dam de Noelle.",
    techniques: [
      { name: "Fleur de Récupération Princesse-Guérisseuse", desc: "Soigne toutes les blessures d'un allié." },
      { name: "Bouquet de Feu Illusoire", desc: "Fleurs explosives aux flammes dévastatrices." },
      { name: "Cartographie du Monde des Plantes", desc: "Vision tactique totale du terrain." },
      { name: "Princesse-Ouverture : Couronne de Fleurs", desc: "Dôme de soin de masse pour une armée." }
    ],
    facts: ["Elle est la cousine de Fuegoleon et Kirsch Vermillion.", "Son duel de guérisseuse contre la magie temporelle de la reine des sorcières est culte.", "Elle est classée parmi les meilleurs supports de la série."]
  },
  {
    id: "fuegoleon",
    name: "Fuegoleon Vermillion",
    epithet: "Le Lion de Feu",
    squad: "Aigle Ailé",
    rank: "Capitaine",
    grimoire: "Trèfle à 3 feuilles (Feu)",
    magic: "Magie du Feu",
    country: "Royaume de Clover",
    birthday: "11 juin",
    age: "28 ans",
    height: "185 cm",
    origin: "Maison royale Vermillion, capitale de Clover",
    color: "#ff7a3c",
    emoji: "🔥",
    bio: "Capitaine de l'Aigle Ailé et modèle du chevalier idéal, Fuegoleon incarne la noblesse au sens propre comme au figuré. Sa magie de feu, la plus puissante du royaume après celle du Roi-Mage, est canalisée par Salamander, l'esprit du feu. Gravement blessé lors de l'attaque de l'Œil du Soleil de Minuit, il revient plus fort que jamais, bras de feu légendaire, pour mener la défense du royaume contre l'invasion de Spade.",
    techniques: [
      { name: "Poing de Feu Ardent", desc: "Explosion de flammes à bout portant." },
      { name: "Union : Salamander — Souffle du Dragon de Feu", desc: "Fusion avec l'esprit du feu." },
      { name: "Lion de Feu Royal", desc: "Manifestation d'un lion de flammes titanesque." },
      { name: "Bras de Flammes Éternelles", desc: "Bras magique de feu pur après sa résurrection." }
    ],
    facts: ["Il est la voix de la morale parmi les capitaines.", "Son frère Kirsch est son exact opposé en matière d'élégance.", "Il a failli devenir Roi-Mage avant l'attaque de Licht."]
  },
  {
    id: "nozel",
    name: "Nozel Silva",
    epithet: "Le Chevalier d'Argent",
    squad: "Rose Bleue",
    rank: "Capitaine",
    grimoire: "Trèfle à 3 feuilles (Mercure)",
    magic: "Magie du Mercure",
    country: "Royaume de Clover",
    birthday: "2 février",
    age: "30 ans",
    height: "181 cm",
    origin: "Maison royale Silva, capitale de Clover",
    color: "#9fb4c7",
    emoji: "⚔️",
    bio: "Capitaine de la Rose Bleue et aîné de la maison Silva, Nozel cache derrière son arrogance glaciale un deuil dévorant : la mort de sa mère Acier, la plus grande mage de l'histoire. Il blâme Noelle pendant des années avant de révéler la vérité — il cherchait surtout à la protéger. Ses tresses d'argent sont des armes de mercure mortelles, et sa loyauté envers le royaume finit par dépasser tous ses préjugés de caste.",
    techniques: [
      { name: "Lance d'Argent", desc: "Projectiles de mercure durci à la vitesse de l'éclair." },
      { name: "Aigle d'Argent", desc: "Faucon de métal fonçant sur l'ennemi." },
      { name: "Pluie d'Argent", desc: "Tempête de gouttes de mercure perforantes." },
      { name: "Armure d'Argent Sacrée", desc: "Forme sanctifiée contre les démons." }
    ],
    facts: ["Il déteste que quelqu'un touche à sa sœur Noelle — même en bien.", "Sa magie de mercure est l'une des plus difficiles à maîtriser.", "Il finit par s'incliner devant Asta, acte impensable pour un noble."]
  },
  {
    id: "charlotte",
    name: "Charlotte Roselei",
    epithet: "La Princesse Épineuse",
    squad: "Rose Bleue",
    rank: "Capitaine",
    grimoire: "Trèfle à 3 feuilles (Épines)",
    magic: "Magie des Épines (maudite par la magie du temps)",
    country: "Royaume de Clover",
    birthday: "18 novembre",
    age: "27-28 ans",
    height: "170 cm",
    origin: "Maison noble Roselei, frontière du Royaume de Clover",
    color: "#e05a8f",
    emoji: "🌹",
    bio: "À 16 ans, Charlotte fut maudite par la magie du temps de la Reine des Sorcières : chaque année, des épines envahissent son corps et celui de son entourage. Yami brisa la malédiction en la sauvant, et depuis, elle cache un amour total derrière une froideur de capitaine. Sa magie d'épines, amplifiée par la malédiction, devient une arme de siège capable d'emprisonner une armée entière dans une forêt de roses noires.",
    techniques: [
      { name: "Roi des Épines Enlacées", desc: "Prison de ronces géantes." },
      { name: "Bride Écarlate", desc: "Vignes épineuses fouettantes à distance." },
      { name: "Amour Éternel : Rose Bleue Céleste", desc: "Forme sanctifiée de sa magie maudite." },
      { name: "Champ d'Épines Absolu", desc: "Terrain entièrement converti en forteresse de ronces." }
    ],
    facts: ["Elle rougit instantanément devant Yami.", "Sa malédiction se réactive chaque année à la même date.", "Elle entraîne ses chevalières à ne jamais dépendre d'un homme — ironie suprême."]
  },
  {
    id: "julius",
    name: "Julius Novachrono",
    epithet: "Le Roi-Mage du Temps",
    squad: "Corbeau Royal",
    rank: "Roi-Mage (28e)",
    grimoire: "Trèfle à 3 feuilles (Temps)",
    magic: "Magie du Temps",
    country: "Royaume de Clover",
    birthday: "18 décembre",
    age: "42 ans (corps de 13 ans)",
    height: "174 cm (avant) / 145 cm (après)",
    origin: "Capitale du Royaume de Clover",
    color: "#d4af37",
    emoji: "⏳",
    bio: "Mage le plus puissant du Royaume de Clover, Julius consacre sa vie à explorer la magie inconnue pour protéger l'avenir. Sa magie du temps lui permet de voler, ralentir, accélérer et stocker le temps. Il se déguise volontiers en simple citoyen pour observer son peuple. Sacrifiant ses années pour sauver le royaume de l'Œil du Soleil de Minuit, il renaît dans le corps d'un adolescent — sans renoncer à son rôle ni à son obsession pour les bonbons magiques.",
    techniques: [
      { name: "Chrono Stasis", desc: "Fige le temps autour d'une cible." },
      { name: "Chrono Anansi : Ilya", desc: "Toile temporelle ralentissant tout un champ de bataille." },
      { name: "Chrono Récupération", desc: "Restaure son propre temps de vie." },
      { name: "Chrono Gratia : Lame du Temps", desc: "Attaque tranchant le flux temporel." }
    ],
    facts: ["Il adore se déguiser et se faire passer pour un passant.", "Il a sacrifié sa forme adulte pour sauver le royaume.", "Il collectionne les bonbons rares de tout le continent."]
  },
  {
    id: "nacht",
    name: "Nacht Faust",
    epithet: "Le Vice-Capitaine Démoniaque",
    squad: "Taureau Noir",
    rank: "Vice-Capitaine",
    grimoire: "Trèfle à 3 feuilles (Démons)",
    magic: "Magie des Démons (Union)",
    country: "Royaume de Clover",
    birthday: "30 avril",
    age: "29 ans",
    height: "180 cm",
    origin: "Maison Faust, capitale du Royaume de Clover",
    color: "#4a4a55",
    emoji: "😈",
    bio: "Vice-capitaine fantôme du Taureau Noir, Nacht est un ancien prêtre devenu chercheur de vérité par la douleur : son frère jumeau Morgen est mort à cause de ses expériences démoniaques. Depuis, il n'hésite plus jamais : il contracte quatre démons et développe la magie d'Union pour les fusionner. Cynique, brutal dans ses jugements, il voit en Asta le seul être capable d'unir les héros et les démons — et décide de le forger.",
    techniques: [
      { name: "Union : Gimodelo — Chien Noir", desc: "Fusion démoniaque de vitesse et de lames." },
      { name: "Union : Slototh — Ombre Rampante", desc: "Déplacement par les ombres." },
      { name: "Union : Plumede — Plumes de Guerre", desc: "Attaque d'anges déchus." },
      { name: "Quadruple Union : Mode Déchu", desc: "Fusion des quatre démons à la fois." }
    ],
    facts: ["Il méprise les héros qui n'assument pas leurs fautes.", "Son frère Morgen était la lumière qu'il a lui-même éteinte.", "Il a été le premier à croire au potentiel de l'Anti-Magie."]
  },
  {
    id: "vanessa",
    name: "Vanessa Enoteca",
    epithet: "La Sorcière du Destin",
    squad: "Taureau Noir",
    rank: "Chevalier de 1re classe intermédiaire",
    grimoire: "Trèfle à 3 feuilles (Fils)",
    magic: "Magie du Fil (Rouge du Destin)",
    country: "Forêt des Sorcières",
    birthday: "22 mars",
    age: "24 ans",
    height: "170 cm",
    origin: "Forêt des Sorcières",
    color: "#c86bd9",
    emoji: "🧵",
    bio: "Enfant prodige de la Reine des Sorcières, Vanessa était enchaînée pour son potentiel de changer le destin. Libérée par Yami lors d'une expédition, elle a fui sa mère et trouvé au Taureau Noir la famille qu'elle n'avait jamais eue. Sa magie du fil, d'abord jugée faible, éveille le « Fil Rouge du Destin » : elle peut réécrire les probabilités et sauver ses camarades de n'importe quelle fatalité.",
    techniques: [
      { name: "Fil Rouge du Destin", desc: "Réécrit le destin pour esquiver l'inévitable." },
      { name: "Chat Enchanté : Rouge", desc: "Familier qui annule les blessures fatales." },
      { name: "Filet de la Sorcière", desc: "Piège de fils indestructibles." },
      { name: "Rouge : Lien du Destin", desc: "Relie les destins de plusieurs alliés." }
    ],
    facts: ["Elle dort souvent éveillée, entourée de bouteilles vides.", "Sa mère est la Reine des Sorcières en personne.", "Son familier Rouge est indestructible tant qu'elle reste consciente."]
  },
  {
    id: "mars",
    name: "Mars",
    epithet: "L'Enfant du Diamant",
    squad: "Hors Royaume",
    rank: "Général du Royaume de Diamond",
    grimoire: "Trèfle à 3 feuilles (Cristal) + Grimoire volé",
    magic: "Magie du Cristal et de la Restauration",
    country: "Royaume de Diamond",
    birthday: "inconnue",
    age: "18-19 ans",
    height: "178 cm",
    origin: "Laboratoire du Royaume de Diamond",
    color: "#7fe3d4",
    emoji: "💎",
    bio: "Enfant d'expérience du Royaume de Diamond, Mars a été élevé comme une arme aux côtés de sa sœur d'armes Fana. Grâce à la greffe d'un second grimoire, il manie à la fois le cristal et la restauration — un exploit unique. Après sa défaite contre Asta, il retourne dans son pays pour le réformer de l'intérieur et renverser le régime du scientifique Morris, rêvant d'un monde où plus aucun enfant ne sera fabriqué en laboratoire.",
    techniques: [
      { name: "Lames de Cristal", desc: "Épées de cristal auto-régénérantes." },
      { name: "Champ de Cristal Absolu", desc: "Prison minérale indestructible." },
      { name: "Phénix de Restauration", desc: "Régénération complète du corps." },
      { name: "Cristal Étoilé", desc: "Attaque combinée cristal + restauration." }
    ],
    facts: ["Il est le seul personnage connu à porter deux grimoires.", "Il voue une loyauté éternelle à Fana.", "Il devient le dirigeant de facto de Diamond après la guerre."]
  },
  {
    id: "yuno-spirit",
    name: "Sylph",
    epithet: "L'Esprit du Vent",
    squad: "Aurore Dorée",
    rank: "Esprit élémentaire",
    grimoire: "—",
    magic: "Magie du Vent spirituelle",
    country: "Monde des Esprits",
    birthday: "inconnue",
    age: "immortelle",
    height: "30 cm",
    origin: "Monde des Esprits",
    color: "#a8e6cf",
    emoji: "🧚",
    bio: "Esprit élémentaire du vent, Sylph n'élit qu'un mage digne d'elle par génération. Elle choisit Yuno après avoir été impressionnée par sa maîtrise naturelle du vent. Capricieuse, jalouse et espiègle, elle adore se blottir contre lui et déteste qu'on touche à « son » mage. En Union, elle multiplie la puissance de Yuno et lui permet d'atteindre le stade de l'« Esprit Absolu ».",
    techniques: [
      { name: "Sanctuaire du Vent Spirituel", desc: "Aura de vent qui dévie toute attaque." },
      { name: "Union : Danse du Vent Fuyant", desc: "Téléportation instantanée par rafales." },
      { name: "Souffle de la Sylphide", desc: "Rafale de vent spirituel pur." },
      { name: "Esprit Absolu : Tempête Céleste", desc: "Forme finale de l'union." }
    ],
    facts: ["Elle est l'esprit la plus possessive de la série.", "Elle a refusé des centaines de mages avant Yuno.", "Elle déteste qu'on compare Yuno à Asta."]
  },
  {
    id: "finral",
    name: "Finral Roulacase",
    epithet: "Le Seigneur des Portes",
    squad: "Taureau Noir",
    rank: "Chevalier de 3e classe intermédiaire",
    grimoire: "Trèfle à 3 feuilles (Espace)",
    magic: "Magie Spatiale",
    country: "Royaume de Clover",
    birthday: "6 août",
    age: "21 ans",
    height: "170 cm",
    origin: "Maison noble Vaude, capitale de Clover",
    color: "#8ecae6",
    emoji: "🌀",
    bio: "Héritier déshérité de la maison Vaude, Finral a fui ses responsabilités pour rejoindre le Taureau Noir. Lâche en apparence, dragueur compulsif, il est pourtant l'atout stratégique n°1 du royaume : sans sa magie spatiale, aucune expédition n'est possible. Poussé par Yami et menacé par son demi-frère Langris, il apprend enfin à se battre pour protéger au lieu de fuir.",
    techniques: [
      { name: "Portail Spatiale", desc: "Porte de téléportation vers tout lieu visité." },
      { name: "Bouclier Spatial", desc: "Dévie les attaques dans une autre dimension." },
      { name: "Portail de Fuite Tactique", desc: "Extraction d'équipe en pleine bataille." },
      { name: "Heavenly Sky Link", desc: "Relie plusieurs portails pour attaquer à distance." }
    ],
    facts: ["Il a été fiancé de force puis abandonné par sa promise.", "Son demi-frère Langris le méprisait avant de le respecter.", "Il est le seul mage spatial du Taureau Noir."]
  },
  {
    id: "luck",
    name: "Luck Voltia",
    epithet: "Le Démon Souriant",
    squad: "Taureau Noir",
    rank: "Chevalier de 3e classe supérieure",
    grimoire: "Trèfle à 3 feuilles (Foudre)",
    magic: "Magie de la Foudre",
    country: "Royaume de Clover",
    birthday: "12 février",
    age: "18-19 ans",
    height: "167 cm",
    origin: "Quartier pauvre de la capitale de Clover",
    color: "#ffe066",
    emoji: "⚡",
    bio: "Élevé par une mère qui ne le félicitait que lorsqu'il gagnait, Luck a transformé le combat en quête d'affection. Toujours souriant, y compris en plein massacre, il cherche l'adversaire le plus fort comme d'autres cherchent un ami. Sa magie de foudre, poussée jusqu'à l'électrification de son propre corps, fait de lui l'assassin le plus rapide du Taureau Noir.",
    techniques: [
      { name: "Botte Foudroyante", desc: "Coups électrifiés à la vitesse de l'éclair." },
      { name: "Union : Gadjah — Foudre Sacrée", desc: "Fusion avec la magie de foudre de Gadjah." },
      { name: "Foudre Étincelante : Mode Blitz", desc: "Corps entièrement électrifié." },
      { name: "Couronne de la Foudre", desc: "Aura de foudre qui paralyse la zone." }
    ],
    facts: ["Il appelle « ami » quiconque accepte de le frapper.", "Il a failli tuer Asta lors de leur première rencontre.", "Il devient plus fort quand on le félicite."]
  },
  {
    id: "gordon",
    name: "Gordon Agrippa",
    epithet: "Le Mage du Poison Solitaire",
    squad: "Taureau Noir",
    rank: "Chevalier de 1re classe intermédiaire",
    grimoire: "Trèfle à 3 feuilles (Poison)",
    magic: "Magie du Poison et des Malédictions",
    country: "Royaume de Clover",
    birthday: "3 janvier",
    age: "26 ans",
    height: "179 cm",
    origin: "Maison Agrippa, capitale de Clover",
    color: "#9b7ede",
    emoji: "☠️",
    bio: "Issu d'une famille de mages maudits, Gordon parle si bas qu'on le croit muet. Solitaire parmi les solitaires, il rêve simplement d'avoir des amis. Sa magie de poison, longtemps utilisée pour nuire par sa famille, devient un outil de soin et de soutien entre ses mains. C'est lui qui comprend le mieux les créatures rejetées — et le premier à défendre les démons de Spade.",
    techniques: [
      { name: "Poison de la Rose Noire", desc: "Brume toxique qui ronge la magie adverse." },
      { name: "Malédiction Vengeresse", desc: "Renvoie les dégâts à l'attaquant." },
      { name: "Antidote Fraternel", desc: "Neutralise tout poison allié." },
      { name: "Champ de Miasmes", desc: "Zone où seuls les alliés peuvent respirer." }
    ],
    facts: ["Il écrit un journal intime sur ses « amis » du Taureau Noir.", "Son père a maudit sa propre famille par jalousie.", "Il est le mage le plus silencieux et le plus bavard à la fois."]
  }
];

const REALMS = [
  {
    id: "clover",
    name: "Royaume de Clover",
    emoji: "🍀",
    tagline: "Le royaume des grimoires et des Chevaliers Royaux",
    color: "#3fae6a",
    description: "Nation principale de l'histoire, le Royaume de Clover est gouverné par le Roi et protégé par le Roi-Mage et ses Chevaliers Royaux. Sa société est coupée en trois strates rigides — Royaume Oublié, Royaume Commun, Royaume Noble — et cette fracture sociale est l'un des thèmes centraux de l'œuvre.",
    stats: [
      { label: "Régime", value: "Monarchie + Roi-Mage" },
      { label: "Capitale", value: "Cité royale de Clover" },
      { label: "Compagnies", value: "9 Chevaliers Royaux" },
      { label: "Symbole", value: "Trèfle 🍀" }
    ],
    regions: [
      {
        name: "Royaume Oublié (Forsaken Realm)",
        desc: "Périphérie la plus pauvre, sans magie puissante ni routes pavées. C'est ici que se trouvent Hage, Rayaka et Sosshi. Le pouvoir central l'a littéralement oublié.",
        points: ["Églises de campagne formant les jeunes mages", "Terres agricoles et forêts denses", "Berceau d'Asta, Yuno et Sister Lily"]
      },
      {
        name: "Royaume Commun (Common Realm)",
        desc: "Zone intermédiaire des artisans, marchands et mages de rang moyen. On y trouve Kikka, ville natale de Finral, et Raque, la cité balnéaire du festival de la magie.",
        points: ["Kikka : ville marchande et artisanale", "Raque : station thermale et arène du festival", "Sièges secondaires des compagnies"]
      },
      {
        name: "Royaume Noble (Noble Realm)",
        desc: "Cœur politique du royaume : capitale royale, château du Roi-Mage, et les trois grandes maisons — Kira (royale), Vermillion et Silva.",
        points: ["Château de Clover et tour du Roi-Mage", "Maison Kira : lignée royale", "Maisons Vermillion et Silva : familles du feu et de l'argent"]
      }
    ],
    villages: [
      { name: "Village de Hage", detail: "Village natal d'Asta et Yuno. Son église, dirigée par Sister Lily et le père Orsi, a formé deux des plus grands mages de l'histoire." },
      { name: "Village de Rayaka", detail: "Village minier des montagnes, où Secre (Nero) fut emprisonnée sous forme d'oiseau pendant des siècles." },
      { name: "Village de Sosshi", detail: "Village de Revchi, ancien chevalier déchu qui tenta de voler le grimoire d'Asta." },
      { name: "Kikka", detail: "Grande ville du Royaume Commun, siège de la maison Vaude et théâtre du tournoi des Chevaliers Royaux." },
      { name: "Raque", detail: "Cité balnéaire où se déroule le festival annuel de la magie, avec son banquet et son banquet de feu d'artifice." }
    ],
    squads: [
      { name: "Taureau Noir 🐂", detail: "Compagnie des marginaux, fondée par Yami. La plus faible sur le papier, la plus forte dans les faits." },
      { name: "Aurore Dorée 🌅", detail: "Compagnie n°1, dirigée par Julius puis William. Berceau de Yuno." },
      { name: "Aigle Ailé 🦅", detail: "Compagnie de Fuegoleon, modèle de la chevalerie." },
      { name: "Rose Bleue 🌹", detail: "Compagnie de Charlotte, entièrement composée de chevaliers d'élite." },
      { name: "Cerf d'Argent 🦌", detail: "Compagnie de Rill Boismortier, le plus jeune capitaine, mage de la création." },
      { name: "Corbeau Royal 🐦‍⬛", detail: "Compagnie du Roi-Mage Julius, réservée aux missions secrètes et aux mages d'élite absolus." },
      { name: "Panthère Verte 🐆", detail: "Compagnie de Jack le Ripper, spécialiste du combat frontal." },
      { name: "Mante Violette 🦋", detail: "Compagnie de Gueldre, déchue pour corruption, puis reprise en main." },
      { name: "Hibou Cobalt 🦉", detail: "Compagnie de Kaiser Granvorka, garante de la discipline et de la police interne." }
    ]
  },
  {
    id: "spade",
    name: "Royaume de Spade",
    emoji: "♠️",
    tagline: "Le royaume des démons et de la sélection impitoyable",
    color: "#7b5cff",
    description: "Royaume du nord, jadis prospère, maintenant gouverné par le trio des Dark Triads et leurs démons. Sa société repose sur la loi du plus fort : les mages faibles sont réduits en esclavage, les enfants testés à la naissance et les « échecs » éliminés. C'est la nation antagoniste principale de la seconde moitié de l'œuvre.",
    stats: [
      { label: "Régime", value: "Dark Triad (dictature)" },
      { label: "Capitale", value: "Cité de Spade" },
      { label: "Symbole", value: "Pique ♠️" },
      { label: "Menace", value: "Invasion démoniaque" }
    ],
    regions: [
      {
        name: "Terres Gelées du Nord",
        desc: "Paysages de glace éternelle où vivent les villages asservis. C'est ici qu'est né Yuno, prince Grinberryall.",
        points: ["Villages enneigés sous surveillance Qliphoth", "Familles royales déchues (Grinberryall)", "Forts militaires des Dark Triads"]
      },
      {
        name: "Arbres Qliphoth",
        desc: "Portails démoniaques géants reliant le monde des humains à l'arbre des séphiroth. Ils servent à faire descendre les démons supérieurs.",
        points: ["Canaux d'énergie démoniaque", "Rituels d'invocation de masse", "Zone interdite aux civils"]
      }
    ],
    villages: [
      { name: "Cité de Spade", detail: "Capitale militaire où siège le Dark Triad. Ses tours sont gravées de sceaux démoniaques." },
      { name: "Villages Grinberryall", detail: "Terres natales de la famille royale déchue, dont Yuno est l'héritier légitime." },
      { name: "Camps de Sélection", detail: "Lieux où les enfants sont testés : les mages prometteurs sont formés, les autres réduits en servitude." }
    ],
    squads: [
      { name: "Dark Triads ♠️", detail: "Dante, Vanica et Zenon : trois humains fusionnés avec des démons supérieurs." },
      { name: "Dark Disciples", detail: "Sept disciples d'élite servant chacun un Triad, dont Gaderois, Siora et Foyal." },
      { name: "Résistance de Spade", detail: "Mouvement clandestin mené par les survivants de l'ancienne royauté, allié de Clover." }
    ]
  },
  {
    id: "diamond",
    name: "Royaume de Diamond",
    emoji: "💎",
    tagline: "Le royaume des mages fabriqués en laboratoire",
    color: "#7fe3d4",
    description: "Royaume de l'est, en guerre quasi permanente contre Clover. Sous la direction du scientifique Morris, il transforme ses citoyens en armes vivantes : greffes de grimoires, implants de pierres magiques, expériences sur les enfants. Mars et Fana sont les produits les plus aboutis de ce système.",
    stats: [
      { label: "Régime", value: "Dictature scientifique" },
      { label: "Capitale", value: "Cité de Diamond" },
      { label: "Symbole", value: "Carreau 💎" },
      { label: "Spécialité", value: "Amplification artificielle de la magie" }
    ],
    regions: [
      {
        name: "Laboratoires Frontaliers",
        desc: "Complexe de recherche où les enfants sont modifiés. Mars y a reçu son second grimoire et Fana sa magie de feu spirituelle.",
        points: ["Greffes de pierres magiques", "Entraînement militarisé des enfants", "Salle de stockage des grimoires volés"]
      },
      {
        name: "Frontière de l'Est",
        desc: "Zone de conflit permanent avec Clover, parsemée de forteresses et de champs de bataille cristallisés.",
        points: ["Forteresses militaires", "Champs de bataille figés dans le cristal", "Tunnels d'invasion sous la montagne"]
      }
    ],
    villages: [
      { name: "Cité de Diamond", detail: "Capitale dirigée de facto par Morris et ses conseillers militaires." },
      { name: "Nursery Militaire", detail: "Orphelinat-laboratoire où Mars, Fana et leurs camarades ont été « fabriqués »." }
    ],
    squads: [
      { name: "Huit Généraux Shining 💎", detail: "Élite militaire de Diamond, dont Mars et Lotus Whomalt." },
      { name: "Division de Morris", detail: "Scientifiques et ingénieurs de la magie artificielle." },
      { name: "Nouveau Diamond", detail: "Gouvernement réformé par Mars après la chute de Morris." }
    ]
  },
  {
    id: "heart",
    name: "Royaume de Heart",
    emoji: "♥️",
    tagline: "Le royaume des esprits et de la magie naturelle",
    color: "#f08fb4",
    description: "Royaume du sud, protégé par une barrière naturelle de magie d'eau. Sa reine, Lolopechka, hérite du savoir de toutes les reines précédentes. Heart a développé la « Sainte Magie », capable de combattre les démons, et vit en harmonie avec les esprits élémentaires. C'est l'alliée clé de Clover contre Spade.",
    stats: [
      { label: "Régime", value: "Matriarchat sacré" },
      { label: "Capitale", value: "Cité de Heart" },
      { label: "Symbole", value: "Cœur ♥️" },
      { label: "Trésor", value: "Sainte Magie" }
    ],
    regions: [
      {
        name: "Barrière de l'Eau Sacrée",
        desc: "Enceinte magique naturelle entourant tout le royaume. Seuls les invités acceptés par la reine peuvent la traverser.",
        points: ["Fleuves sacrés", "Faune et flore magiques", "Protection absolue contre les invasions"]
      },
      {
        name: "Sanctuaire des Esprits",
        desc: "Lieu où résident les esprits élémentaires : Undine (eau), Salamander (feu), Sylph (vent), Gnome (terre).",
        points: ["Contrat entre mages et esprits", "Entraînement à la Sainte Magie", "Temple de Lolopechka"]
      }
    ],
    villages: [
      { name: "Cité de Heart", detail: "Capitale flottante au cœur des lacs sacrés, centre du pouvoir de la reine Lolopechka." },
      { name: "Villages des Gardiens", detail: "Villages où vivent les Guardians of the State, protecteurs héréditaires de la reine, dont Gadjah et Smurik." }
    ],
    squads: [
      { name: "Guardians of the State ♥️", detail: "Élite de Heart, mages de la Sainte Magie, protecteurs de Lolopechka." },
      { name: "Conseil de la Reine", detail: "Conseillers transmettant la mémoire des reines précédentes." }
    ]
  },
  {
    id: "witches",
    name: "Forêt des Sorcières",
    emoji: "🌲",
    tagline: "Le territoire interdit de la Reine des Sorcières",
    color: "#c86bd9",
    description: "Territoire neutre et isolé, gouverné d'une main de fer par la Reine des Sorcières. Toute sorcière qui le quitte est traquée et ramenée. La Reine y règne par la magie du temps, des serments et des malédictions. C'est le berceau de Vanessa et le lieu de la cure d'Asta après la bataille contre l'Œil du Soleil de Minuit.",
    stats: [
      { label: "Régime", value: "Monarchie absolue" },
      { label: "Capitale", value: "Cœur de la Forêt" },
      { label: "Symbole", value: "Bâton et lune 🌙" },
      { label: "Spécialité", value: "Magie du temps et malédictions" }
    ],
    regions: [
      {
        name: "Lisière des Brumes",
        desc: "Ceinture de brouillard magique qui égare les intrus. Seules les sorcières connaissent le chemin.",
        points: ["Brouillard désorientant", "Animaux familiers", "Pièges d'invocation"]
      },
      {
        name: "Sanctuaire de la Reine",
        desc: "Palais végétal où trône la Reine des Sorcières. Elle y garde les grimoires interdits et ses filles-sorcières.",
        points: ["Trône de racines anciennes", "Bibliothèque de malédictions", "Chaînes de Vanessa (désormais vides)"]
      }
    ],
    villages: [
      { name: "Villages des Sorcières", detail: "Hameaux dispersés où vivent les sorcières sous la surveillance de la Reine." },
      { name: "Cœur de la Forêt", detail: "Centre du pouvoir où la Reine soigne, maudit et juge — elle a sauvé Asta pour ses propres intérêts." }
    ],
    squads: [
      { name: "Gardes de la Reine 🌲", detail: "Sorcières d'élite obéissant aveuglément à la Reine." },
      { name: "Filles de la Reine", detail: "Sorcières élevées au palais, dont Vanessa était la plus prometteuse." }
    ]
  }
];

const NEWS = [
  {
    tag: "anime",
    date: "2024",
    title: "Saison finale de l'anime annoncée",
    excerpt: "L'adaptation animée de Black Clover confirme son arc final : la bataille contre le Royaume de Spade et les démons supérieurs, avec une production amplifiée.",
    emoji: "📺"
  },
  {
    tag: "manga",
    date: "En cours",
    title: "L'arc du Royaume de Spade touche à son apogée",
    excerpt: "Le manga de Yūki Tabata entre dans sa phase finale : Asta, Yuno et les alliés de Heart affrontent Lucius et ses frères jumeaux démoniaques.",
    emoji: "📖"
  },
  {
    tag: "jeux",
    date: "Sortie",
    title: "Black Clover: Quartet Knights & Mobile Games",
    excerpt: "Les jeux dérivés continuent d'élargir l'univers : combats en équipe 4v4 et événements saisonniers autour des Chevaliers Royaux.",
    emoji: "🎮"
  },
  {
    tag: "manga",
    date: "Record",
    title: "Black Clover dépasse les 19 millions d'exemplaires",
    excerpt: "Le tirage cumulé du manga franchit un nouveau cap, porté par l'engouement de l'arc final et le retour de l'anime.",
    emoji: "🏆"
  },
  {
    tag: "anime",
    date: "Culture",
    title: "Le film « Black Clover: Sword of the Wizard King » acclamé",
    excerpt: "Le long-métrage Netflix mettant en scène le Roi-Mage légendaire Conrad Leto rencontre un succès mondial sur la plateforme.",
    emoji: "🎬"
  },
  {
    tag: "jeux",
    date: "Merch",
    title: "Répliques officielles des grimoires en édition limitée",
    excerpt: "Shueisha annonce des répliques collector des grimoires d'Asta et Yuno, avec pages dorées et trèfles estampés.",
    emoji: "📕"
  }
];
