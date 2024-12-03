const spells = [
    {
      "spell": "Accio",
      "use": "Summoning charm",
      "index": 0
    },
    {
      "spell": "Glisseo",
      "use": "Turns a staircase into a slide",
      "index": 1
    },
    {
      "spell": "Impervius",
      "use": "Protects caster from a variety of substances, including water and fire",
      "index": 2
    },
    {
      "spell": "Wingardium Leviosa/Locomotor",
      "use": "Levitates objects",
      "index": 3
    },
    {
      "spell": "Scourgify",
      "use": "Cleans things",
      "index": 4
    },
    {
      "spell": "Portus",
      "use": "Creates a portkey",
      "index": 5
    },
    {
      "spell": "Orchideous",
      "use": "Grows flowers from end of wand",
      "index": 6
    },
    {
      "spell": "Lumos",
      "use": "Makes wand emit light",
      "index": 7
    },
    {
      "spell": "Reparo",
      "use": "Repairs broken objects",
      "index": 8
    },
    {
      "spell": "Reducio",
      "use": "Shrinks objects",
      "index": 9
    },
    {
      "spell": "Pack",
      "use": "Packs trunks and luggage",
      "index": 10
    },
    {
      "spell": "Riddikulus",
      "use": "Transforms Boggarts into a humorous shape",
      "index": 11
    },
    {
      "spell": "Protego",
      "use": "Shields caster from curses",
      "index": 12
    },
    {
      "spell": "Muffliato",
      "use": "Keeps others nearby from overhearing conversations",
      "index": 13
    },
    {
      "spell": "Silencio/Langlock",
      "use": "Stops someone from talking (by sticking one's tongue to the roof of his/her mouth)",
      "index": 14
    },
    {
      "spell": "Expelliarmus",
      "use": "Disarming Charm",
      "index": 15
    },
    {
      "spell": "Oblivate",
      "use": "Erases memories",
      "index": 16
    },
    {
      "spell": "Episkey",
      "use": "Heals minor injuries",
      "index": 17
    },
    {
      "spell": "Tergeo",
      "use": "Cleans off surfaces",
      "index": 18
    },
    {
      "spell": "Relashio",
      "use": "Forces target to let go of whatever they're holding",
      "index": 19
    },
    {
      "spell": "Confundo",
      "use": "Causes confusions and makes others easily susceptible to influence",
      "index": 20
    },
    {
      "spell": "Expecto Patronum",
      "use": "Patronus Charm",
      "index": 21
    },
    {
      "spell": "Ferula",
      "use": "Conjures bandages",
      "index": 22
    },
    {
      "spell": "Evanesco",
      "use": "Vanishing spell",
      "index": 23
    },
    {
      "spell": "Alohomora",
      "use": "Opens locks",
      "index": 24
    },
    {
      "spell": "Nox",
      "use": "Turns off lumos",
      "index": 25
    },
    {
      "spell": "Quietus",
      "use": "Quiets magically amplified voice",
      "index": 26
    },
    {
      "spell": "Incendio",
      "use": "Creates fire",
      "index": 27
    },
    {
      "spell": "Homenum Revelio",
      "use": "Reveal people nearby",
      "index": 28
    },
    {
      "spell": "Prior Incantato",
      "use": "Reveals last spell cast",
      "index": 29
    },
    {
      "spell": "Finite Incantatem",
      "use": "Negates the effects of many spells",
      "index": 30
    },
    {
      "spell": "Erecto",
      "use": "Erects tents or other structures",
      "index": 31
    },
    {
      "spell": "Diffindo",
      "use": "Cuts or rips material",
      "index": 32
    },
    {
      "spell": "Stupefy",
      "use": "Stuns target",
      "index": 33
    },
    {
      "spell": "Repelo Muggletum",
      "use": "Repels Muggles",
      "index": 34
    },
    {
      "spell": "Avada Kedavra",
      "use": "The Killing Curse",
      "index": 35
    },
    {
      "spell": "Aguamenti",
      "use": "Shoot water from wand",
      "index": 36
    },
    {
      "spell": "Geminio",
      "use": "Creates temporary, worthless duplicate of any object",
      "index": 37
    },
    {
      "spell": "Locomotor Mortis",
      "use": "Leg-lock curse",
      "index": 38
    },
    {
      "spell": "Anapneo",
      "use": "Clears someone's airway",
      "index": 39
    },
    {
      "spell": "Reducto",
      "use": "Explodes object",
      "index": 40
    },
    {
      "spell": "Obscuro",
      "use": "Blindfolds target",
      "index": 41
    },
    {
      "spell": "Impedimenta",
      "use": "Freezes someone advancing toward you",
      "index": 42
    },
    {
      "spell": "Cave Inimicum/Protego Totalum",
      "use": "Strengthens an area's defenses",
      "index": 43
    },
    {
      "spell": "Meteolojinx Recanto",
      "use": "Ends effects of weather spells",
      "index": 44
    },
    {
      "spell": "Specialis Revelio",
      "use": "Reveals hidden magical properties in an object",
      "index": 45
    },
    {
      "spell": "Descendo",
      "use": "Moves objects downward",
      "index": 46
    },
    {
      "spell": "Defodio",
      "use": "Carves through stone and steel",
      "index": 47
    },
    {
      "spell": "Aparecium",
      "use": "Make invisible ink appear",
      "index": 48
    },
    {
      "spell": "Piertotum Locomotor",
      "use": "Animates statues",
      "index": 49
    },
    {
      "spell": "Imperio",
      "use": "Makes target obey every command",
      "index": 50
    },
    {
      "spell": "Fidelius Charm",
      "use": "binds a secret to the soul of a Secret-Keeper",
      "index": 51
    },
    {
      "spell": "Avis/Oppugno",
      "use": "Shoots flock of birds from wand",
      "index": 52
    },
    {
      "spell": "Expulso",
      "use": "Explodes objects",
      "index": 53
    },
    {
      "spell": "Legilimens",
      "use": "Reveals memories and thoughts of target",
      "index": 54
    },
    {
      "spell": "Duro",
      "use": "Hardens objects",
      "index": 55
    },
    {
      "spell": "Sonorus",
      "use": "Amplifies one's voice",
      "index": 56
    },
    {
      "spell": "Deprimo",
      "use": "Creates great downward pressure",
      "index": 57
    },
    {
      "spell": "Levicorpus",
      "use": "Levitates target by ankle",
      "index": 58
    },
    {
      "spell": "Liberacorpus",
      "use": "Lowers target of levicorpus",
      "index": 59
    },
    {
      "spell": "Mobilicorpus",
      "use": "Moves bodies",
      "index": 60
    },
    {
      "spell": "Confringo",
      "use": "Explodes objects into flames",
      "index": 61
    },
    {
      "spell": "Densaugeo",
      "use": "Makes teeth grow quickly",
      "index": 62
    },
    {
      "spell": "Incarcarous",
      "use": "Ties someone up with ropes",
      "index": 63
    },
    {
      "spell": "Deletrius",
      "use": "Dismisses the effects of Prior Incantato",
      "index": 64
    },
    {
      "spell": "Rictusempra",
      "use": "Tickling Charm",
      "index": 65
    },
    {
      "spell": "Petrificus Totalus",
      "use": "Renders target completely immobile",
      "index": 66
    },
    {
      "spell": "Fiendfyre Curse",
      "use": "Makes cursed fire",
      "index": 67
    },
    {
      "spell": "Tarantallegra",
      "use": "Forces target to dance",
      "index": 68
    },
    {
      "spell": "Morsmordre",
      "use": "Conjures the Dark Mark",
      "index": 69
    },
    {
      "spell": "Sectumsempra",
      "use": "Causes severe lacerations",
      "index": 70
    },
    {
      "spell": "Crucio",
      "use": "Causes immense pain",
      "index": 71
    }
  ]

  export default spells;