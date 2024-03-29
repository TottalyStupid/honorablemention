import { CardPrint, Ruleset, SideDeck } from '../engine/Card';
import { MoxType } from '../engine/constants';
import { sigilInfos } from './sigils';

const RULESETS = {
    imfComp: {
        name: 'IMF Competitive',
        prints: {
            starvation: {
                name: 'Starvation',
                banned: true,
                power: 1,
                health: 1,
                sigils: ['voidDamage'],
            },
            greaterSmoke: {
                name: 'Greater Smoke',
                rare: true,
                banned: true,
                power: 1,
                health: 3,
                sigils: ['fourBones'],
            },
            adder: {
                name: 'Adder',
                power: 2,
                health: 2,
                cost: { type: 'blood', amount: 2 },
                sigils: ['deathTouch'],
            },
            bat: {
                name: 'Bat',
                power: 2,
                health: 1,
                cost: { type: 'bone', amount: 4 },
                sigils: ['airborne'],
            },
            beaver: {
                name: 'Beaver',
                power: 1,
                health: 3,
                cost: { type: 'blood', amount: 2 },
                sigils: ['damBuilder'],
            },
            dam: {
                name: 'Dam',
                banned: true,
                power: 0,
                health: 2,
                noSac: true,
                sigils: ['mightyLeap'],
            },
            bee: {
                name: 'Bee',
                banned: true,
                power: 1,
                health: 1,
                sigils: ['airborne'],
            },
            beehive: {
                name: 'Beehive',
                power: 0,
                health: 2,
                cost: { type: 'blood', amount: 1 },
                sigils: ['beesWithin'],
            },
            blackGoat: {
                name: 'Black Goat',
                power: 0,
                health: 1,
                cost: { type: 'blood', amount: 1 },
                sigils: ['threeSacs'],
            },
            bloodhound: {
                name: 'Bloodhound',
                power: 2,
                health: 3,
                cost: { type: 'blood', amount: 2 },
                sigils: ['chaseOpposingPlay'],
            },
            bullfrog: {
                name: 'Bullfrog',
                power: 1,
                health: 3,
                cost: { type: 'blood', amount: 1 },
                sigils: ['mightyLeap'],
            },
            cat: {
                name: 'Cat',
                desc: 'Note: This card was changed to rare due to the amount of advantage given by this card.',
                rare: true,
                scrybe: 'nature',
                power: 0,
                health: 1,
                cost: { type: 'blood', amount: 1 },
                sigils: ['manyLives'],
            },
            catUndead: {
                name: 'Undead Cat',
                banned: true,
                power: 3,
                health: 6,
                cost: { type: 'blood', amount: 1 },
            },
            cockroach: {
                name: 'Cockroach',
                power: 1,
                health: 1,
                cost: { type: 'bone', amount: 4 },
                sigils: ['unkillable'],
            },
            corpseMaggots: {
                name: 'Corpse Maggots',
                power: 1,
                health: 2,
                cost: { type: 'bone', amount: 4 },
                sigils: ['corpseEater'],
            },
            theDaus: {
                name: 'The Daus',
                rare: true,
                scrybe: 'nature',
                power: 2,
                health: 2,
                cost: { type: 'blood', amount: 2 },
                sigils: ['bellist'],
            },
            chime: {
                name: 'Chime',
                banned: true,
                tribes: ['bell'],
                power: 0,
                health: 1,
                noSac: true,
                sigils: ['mightyLeap'],
            },
            direWolfPup: {
                name: 'Dire Wolf Pup',
                power: 1,
                health: 1,
                cost: { type: 'blood', amount: 2 },
                sigils: ['boneDigger', 'evolve'],
                evolution: 'direWolf',
            },
            direWolf: {
                name: 'Dire Wolf',
                power: 2,
                health: 5,
                cost: { type: 'blood', amount: 3 },
                sigils: ['doubleAttack'],
            },
            elk: {
                name: 'Elk',
                power: 2,
                health: 4,
                cost: { type: 'blood', amount: 2 },
                sigils: ['strafe'],
            },
            elkCub: {
                name: 'Elk Fawn',
                power: 1,
                health: 1,
                cost: { type: 'blood', amount: 1 },
                sigils: ['strafe', 'evolve'],
                evolution: 'elk',
            },
            fieldMice: {
                name: 'Field Mice',
                banned: true,
                power: 2,
                health: 2,
                cost: { type: 'blood', amount: 2 },
                sigils: ['drawCopy'],
            },
            fieldMiceFused: {
                name: 'Spore Mice',
                banned: true,
                fused: true,
                power: 2,
                health: 2,
                cost: { type: 'blood', amount: 2 },
                sigils: ['drawCopy', 'drawCopy'],
            },
            hawk: {
                name: 'Hawk',
                power: 3,
                health: 1,
                cost: { type: 'blood', amount: 2 },
                sigils: ['airborne'],
            },
            hrokkall: {
                name: 'Hrokkall',
                rare: true,
                scrybe: 'nature',
                power: 1,
                health: 1,
                cost: { type: 'blood', amount: 1 },
                sigils: ['waterborne', 'gainBattery'],
            },
            ratKing: {
                name: 'Rat King',
                power: 2,
                health: 1,
                cost: { type: 'blood', amount: 2 },
                sigils: ['fourBones'],
            },
            ravenEgg: {
                name: 'Raven Egg',
                power: 0,
                health: 2,
                cost: { type: 'blood', amount: 1 },
                sigils: ['evolve'],
                evolution: 'raven',
            },
            kingfisher: {
                name: 'Kingfisher',
                power: 1,
                health: 1,
                cost: { type: 'blood', amount: 1 },
                sigils: ['airborne', 'waterborne'],
            },
            kraken: {
                name: 'Great Kraken',
                desc: 'Note: This card\'s effect was changed due to it sucking.',
                rare: true,
                scrybe: 'nature',
                power: 1,
                health: 1,
                cost: { type: 'blood', amount: 1 },
                sigils: ['waterborneTentacle'],
            },
            alpha: {
                name: 'Alpha',
                power: 1,
                health: 2,
                cost: { type: 'bone', amount: 4 },
                sigils: ['leader'],
            },
            magpie: {
                name: 'Magpie',
                desc: 'This card was unused in act 2, but had art.',
                rare: true,
                scrybe: 'nature',
                power: 1,
                health: 1,
                cost: { type: 'blood', amount: 2 },
                sigils: ['airborne', 'hoarder'],
            },
            mantis: {
                name: 'Mantis',
                power: 1,
                health: 1,
                cost: { type: 'blood', amount: 1 },
                sigils: ['bistrike'],
            },
            mantisGod: {
                name: 'Mantis God',
                rare: true,
                scrybe: 'nature',
                power: 1,
                health: 1,
                cost: { type: 'blood', amount: 1 },
                sigils: ['tristrike'],
            },
            mole: {
                name: 'Mole',
                power: 0,
                health: 4,
                cost: { type: 'blood', amount: 1 },
                sigils: ['chaseAttack'],
            },
            moleMan: {
                name: 'Mole Man',
                rare: true,
                scrybe: 'nature',
                power: 0,
                health: 6,
                cost: { type: 'blood', amount: 1 },
                sigils: ['chaseAttack', 'mightyLeap'],
            },
            mooseBuck: {
                name: 'Moose Buck',
                power: 3,
                health: 7,
                cost: { type: 'blood', amount: 3 },
                sigils: ['strafePush'],
            },
            opossum: {
                name: 'Opossum',
                power: 1,
                health: 1,
                cost: { type: 'bone', amount: 2 },
            },
            ouroboros: {
                name: 'Ouroboros',
                desc: 'This card gains 1 power and 1 health each time it perishes.',
                rare: true,
                scrybe: 'nature',
                power: 1,
                health: 1,
                cost: { type: 'blood', amount: 2 },
                sigils: ['unkillable'],
            },
            rabbit: {
                name: 'Rabbit',
                power: 0,
                health: 1,
            },
            skunk: {
                name: 'Skunk',
                power: 0,
                health: 3,
                cost: { type: 'blood', amount: 1 },
                sigils: ['stinky'],
            },
            coyote: {
                name: 'Coyote',
                power: 2,
                health: 1,
                cost: { type: 'bone', amount: 4 },
            },
            greatWhite: {
                name: 'Great White',
                desc: 'Ported from Act 1. Act 2 sprite by syntaxevasion.',
                power: 4,
                health: 2,
                cost: { type: 'blood', amount: 3 },
                sigils: ['waterborne'],
            },
            grizzly: {
                name: 'Grizzly',
                power: 4,
                health: 5,
                cost: { type: 'blood', amount: 3 },
            },
            porcupine: {
                name: 'Porcupine',
                desc: 'Ported from Act 1. Act 2 sprite by syntaxevasion.',
                power: 1,
                health: 2,
                cost: { type: 'blood', amount: 1 },
                sigils: ['sharp'],
            },
            pronghorn: {
                name: 'Pronghorn',
                desc: 'Ported from Act 1. Act 2 sprite by syntaxevasion.',
                power: 1,
                health: 3,
                cost: { type: 'blood', amount: 2 },
                sigils: ['bistrike', 'strafe'],
            },
            rattler: {
                name: 'Rattler',
                desc: 'Ported from Act 1. Act 2 sprite by syntaxevasion.',
                power: 3,
                health: 1,
                cost: { type: 'bone', amount: 6 },
            },
            raven: {
                name: 'Raven',
                power: 2,
                health: 3,
                cost: { type: 'blood', amount: 2 },
                sigils: ['airborne'],
            },
            salmon: {
                name: 'Salmon',
                power: 2,
                health: 2,
                cost: { type: 'blood', amount: 2 },
                sigils: ['waterborne', 'strafe'],
            },
            riverSnapper: {
                name: 'River Snapper',
                desc: 'Ported from Act 1. Act 2 sprite by syntaxevasion.',
                power: 1,
                health: 6,
                cost: { type: 'blood', amount: 2 },
            },
            sparrow: {
                name: 'Sparrow',
                desc: 'Ported from Act 1. Act 2 sprite by syntaxevasion.',
                power: 1,
                health: 2,
                cost: { type: 'blood', amount: 1 },
                sigils: ['airborne'],
            },
            strangeLarva: {
                name: 'Strange Larva',
                desc: 'Ported from Act 1. Act 2 sprite by syntaxevasion.',
                rare: true,
                scrybe: 'nature',
                power: 0,
                health: 3,
                cost: { type: 'blood', amount: 1 },
                sigils: ['evolve'],
                evolution: 'strangePupa',
            },
            strangePupa: {
                name: 'Strange Pupa',
                rare: true,
                scrybe: 'nature',
                banned: true,
                power: 0,
                health: 3,
                cost: { type: 'blood', amount: 1 },
                sigils: ['evolve'],
                evolution: 'mothman',
            },
            mothman: {
                name: 'Mothman',
                rare: true,
                scrybe: 'nature',
                banned: true,
                power: 7,
                health: 3,
                cost: { type: 'blood', amount: 1 },
                sigils: ['airborne'],
            },
            turkeyVulture: {
                name: 'Turkey Vulture',
                desc: 'Ported from Act 1. Act 2 sprite by syntaxevasion.',
                power: 3,
                health: 3,
                cost: { type: 'bone', amount: 8 },
                sigils: ['airborne'],
            },
            bellTentacle: {
                name: 'Bell Tentacle',
                banned: true,
                tribes: ['tentacle'],
                power: 'bells',
                health: 3,
                cost: { type: 'blood', amount: 2 },
                sigils: ['waterborneTentacle'],
            },
            handTentacle: {
                name: 'Hand Tentacle',
                banned: true,
                tribes: ['tentacle'],
                power: 'hand',
                health: 1,
                cost: { type: 'blood', amount: 1 },
                sigils: ['waterborneTentacle'],
            },
            mirrorTentacle: {
                name: 'Mirror Tentacle',
                banned: true,
                tribes: ['tentacle'],
                power: 'mirror',
                health: 3,
                cost: { type: 'blood', amount: 1 },
                sigils: ['waterborneTentacle'],
            },
            squirrel: {
                name: 'Squirrel',
                power: 0,
                health: 1,
            },
            squirrelBall: {
                name: 'Squirrel Ball',
                power: 0,
                health: 1,
                cost: { type: 'blood', amount: 1 },
                sigils: ['squirrelStrafe'],
            },
            stoat: {
                name: 'Stoat',
                desc: 'Note: Health was increased to 3 to make it better than Bullfrog in at least one way. Bears a unique ability from Act 1.',
                power: 1,
                health: 3,
                cost: { type: 'blood', amount: 1 },
            },
            urayuli: {
                name: 'Urayuli',
                rare: true,
                scrybe: 'nature',
                power: 7,
                health: 7,
                cost: { type: 'blood', amount: 4 },
            },
            warren: {
                name: 'Warren',
                power: 0,
                health: 2,
                cost: { type: 'blood', amount: 1 },
                sigils: ['drawRabbit'],
            },
            wolf: {
                name: 'Wolf',
                power: 3,
                health: 2,
                cost: { type: 'blood', amount: 2 },
            },
            wolfCub: {
                name: 'Wolf Cub',
                power: 1,
                health: 2,
                cost: { type: 'blood', amount: 1 },
                sigils: ['evolve'],
                evolution: 'wolf',
            },
            workerAnt: {
                name: 'Worker Ant',
                tribes: ['ant'],
                power: 'ants',
                health: 2,
                cost: { type: 'blood', amount: 1 },
            },
            queenAnt: {
                name: 'Ant Queen',
                tribes: ['ant'],
                power: 'ants',
                health: 3,
                cost: { type: 'blood', amount: 2 },
                sigils: ['antSpawner'],
            },
            flyingAnt: {
                name: 'Flying Ant',
                tribes: ['ant'],
                power: 'ants',
                health: 1,
                cost: { type: 'blood', amount: 1 },
                sigils: ['airborne'],
            },
            curveHopper: {
                name: 'Curve Hopper',
                rare: true,
                scrybe: 'tech',
                power: 2,
                health: 3,
                cost: { type: 'energy', amount: 4 },
            },
            automaton: {
                name: 'Automaton',
                desc: 'Note: The energy cost of this card was reduced to make it less terrible.',
                power: 1,
                health: 1,
                cost: { type: 'energy', amount: 2 },
            },
            energyBot: {
                name: 'Energy Bot',
                power: 0,
                health: 1,
                cost: { type: 'energy', amount: 2 },
                sigils: ['gainBattery'],
            },
            bolthound: {
                name: 'Bolthound',
                desc: 'Note: Health was increased to 3 to make it equivalent to other "Hound" cards.',
                power: 2,
                health: 3,
                cost: { type: 'energy', amount: 6 },
                sigils: ['chaseOpposingPlay'],
            },
            doubleGunner: {
                name: 'Double Gunner',
                power: 2,
                health: 1,
                cost: { type: 'energy', amount: 6 },
                sigils: ['bistrike'],
            },
            explodeBot: {
                name: 'Explode Bot',
                face: 'common',
                power: 1,
                health: 1,
                cost: { type: 'energy', amount: 2 },
                noSac: true,
                sigils: ['detonator'],
            },
            gamblobot: {
                name: 'Gamblobot',
                desc: 'Note: The cost of this ability was increased to 2 energy due to this card being very strong for its cost.',
                power: 0,
                health: 1,
                cost: { type: 'energy', amount: 3 },
                sigils: ['activatedDiceRollEnergy'],
            },
            insectodrone: {
                name: 'Insectodrone',
                power: 1,
                health: 2,
                cost: { type: 'energy', amount: 3 },
                sigils: ['airborne'],
            },
            leapingBot: {
                name: 'L33pB0t',
                power: 1,
                health: 2,
                cost: { type: 'energy', amount: 3 },
                sigils: ['mightyLeap'],
            },
            minecart: {
                name: '49er',
                power: 1,
                health: 1,
                cost: { type: 'energy', amount: 2 },
                sigils: ['strafe'],
            },
            plasmaJimmy: {
                name: 'Plasma Jimmy',
                rare: true,
                scrybe: 'tech',
                power: 0,
                health: 3,
                cost: { type: 'energy', amount: 2 },
                sigils: ['activatedDealDamage'],
            },
            steelMice: {
                name: 'Steel Mice',
                power: 1,
                health: 1,
                cost: { type: 'energy', amount: 4 },
                sigils: ['drawCopy'],
            },
            sentryBot: {
                name: 'Sentry Drone',
                desc: 'Note: The sentry sigil now triggers when this card is pushed by another card.',
                power: 0,
                health: 1,
                cost: { type: 'energy', amount: 1 },
                sigils: ['sentry'],
            },
            sentryBotFused: {
                name: 'Sentry Spore',
                banned: true,
                fused: true,
                power: 0,
                health: 1,
                cost: { type: 'energy', amount: 1 },
                sigils: ['sentry', 'sentry'],
            },
            bombMaiden: {
                name: 'Mrs. Bomb',
                rare: true,
                scrybe: 'tech',
                power: 1,
                health: 2,
                cost: { type: 'energy', amount: 3 },
                sigils: ['bombSpewer'],
            },
            shutterbug: {
                name: 'Shutterbug',
                desc: 'Note: The sentry sigil now triggers when this card is pushed by another card.',
                rare: true,
                scrybe: 'tech',
                power: 1,
                health: 1,
                cost: { type: 'energy', amount: 5 },
                sigils: ['deathTouch', 'sentry'],
            },
            sniperBot: {
                name: 'Sniper Bot',
                // banned: true,
                power: 1,
                health: 1,
                cost: { type: 'energy', amount: 3 },
                sigils: ['sniper'],
            },
            steambot: {
                name: 'Steambot',
                desc: 'Note: This card\'s attack was increased to make it worth 6 energy.',
                power: 3,
                health: 2,
                cost: { type: 'energy', amount: 6 },
            },
            gemModule: {
                name: 'Mox Module',
                rare: true,
                scrybe: 'tech',
                power: 0,
                health: 3,
                cost: { type: 'energy', amount: 3 },
                sigils: ['gainGemAll'],
                tribes: ['mox'],
            },
            thickBot: {
                name: 'Thick Droid',
                power: 1,
                health: 3,
                cost: { type: 'energy', amount: 5 },
            },
            draugr: {
                name: 'Draugr',
                face: 'terrain',
                power: 0,
                health: 1,
                cost: { type: 'bone', amount: 1 },
                noSac: true,
                sigils: ['frozen'],
                evolution: 'skeleton',
            },
            banshee: {
                name: 'Banshee',
                power: 1,
                health: 3,
                cost: { type: 'bone', amount: 3 },
                sigils: ['airborne'],
            },
            bonehound: {
                name: 'Bonehound',
                power: 2,
                health: 3,
                cost: { type: 'bone', amount: 7 },
                sigils: ['chaseOpposingPlay'],
            },
            bonelordHorn: {
                name: 'Bone Lord\'s Horn',
                desc: 'Note: This card gives only 1 bone per 1 energy due to the previous effect being overpowered in combination with Bone Heap.',
                rare: true,
                scrybe: 'undead',
                power: 1,
                health: 1,
                cost: { type: 'bone', amount: 3 },
                sigils: [
                    'activatedEnergyToBones',
                ],
            },
            boneHeap: {
                name: 'Bone Heap',
                rare: true,
                scrybe: 'undead',
                power: 0,
                health: 1,
                sigils: ['activatedStatsUp'],
            },
            drownedSoul: {
                name: 'Drowned Soul',
                rare: true,
                scrybe: 'undead',
                power: 1,
                health: 1,
                cost: { type: 'bone', amount: 4 },
                sigils: ['waterborne', 'deathTouch'],
            },
            walkers: {
                name: 'The Walkers',
                power: 2,
                health: 2,
                cost: { type: 'bone', amount: 5 },
                sigils: ['fourBones'],
            },
            franknstein: {
                name: 'Frank & Stein',
                power: 2,
                health: 2,
                cost: { type: 'bone', amount: 5 },
                conduit: true,
            },
            pharoahsPets: {
                name: 'Pharoah\'s Pets',
                power: 0,
                health: 1,
                cost: { type: 'bone', amount: 6 },
                sigils: ['threeSacs', 'manyLives'],
            },
            ghostShip: {
                name: 'Ghost Ship',
                power: 0,
                health: 1,
                cost: { type: 'bone', amount: 2 },
                sigils: ['waterborne', 'skeletonStrafe'],
            },
            gravedigger: {
                name: 'Gravedigger',
                power: 0,
                health: 3,
                cost: { type: 'bone', amount: 1 },
                sigils: ['boneDigger'],
            },
            gravediggerFused: {
                name: 'Sporedigger',
                banned: true,
                fused: true,
                power: 0,
                health: 3,
                cost: { type: 'bone', amount: 1 },
                sigils: ['boneDigger', 'boneDigger'],
            },
            headlessHorseman: {
                name: 'Headless Horseman',
                rare: true,
                scrybe: 'undead',
                power: 5,
                health: 5,
                cost: { type: 'bone', amount: 13 },
                sigils: ['airborne', 'strafe'],
            },
            mummy: {
                name: 'Mummy Lord',
                power: 3,
                health: 3,
                cost: { type: 'bone', amount: 8 },
            },
            necromancer: {
                name: 'Necromancer',
                rare: true,
                scrybe: 'undead',
                power: 1,
                health: 2,
                cost: { type: 'bone', amount: 3 },
                sigils: ['doubleDeath'],
            },
            revenant: {
                name: 'Revenant',
                power: 3,
                health: 1,
                cost: { type: 'bone', amount: 3 },
                sigils: ['brittle'],
            },
            sarcophagus: {
                name: 'Sarcophagus',
                power: 0,
                health: 2,
                cost: { type: 'bone', amount: 4 },
                sigils: ['evolve'],
                evolution: 'mummy',
            },
            skeleton: {
                name: 'Skeleton',
                banned: true,
                power: 1,
                health: 1,
                sigils: ['brittle'],
            },
            skeletonMage: {
                name: 'Skelemagus',
                desc: 'Note: Was given energy cost due to being too spammable and easy to draw into with Blue Mage.',
                power: 4,
                health: 1,
                cost: { type: 'energy', amount: 4 },
                sigils: ['brittle', 'gemDependant'],
            },
            tombRobber: {
                name: 'Tomb Robber',
                desc: 'Note: Withered corpses have the Boneless sigil and will not drop bones.This change was made to prevent multiple infinite combos involving Tomb Robber.',
                rare: true,
                scrybe: 'undead',
                power: 0,
                health: 2,
                sigils: ['activatedDrawSkeleton'],
            },
            zombie: {
                name: 'Zombie',
                desc: 'This card was given the stinky sigil to differentiate it from Opossom. Suggested by FishGuy101.',
                power: 1,
                health: 1,
                cost: { type: 'bone', amount: 3 },
                sigils: ['stinky'],
            },
            gourmage: {
                name: 'Gourmage',
                power: 0,
                health: 2,
                cost: { type: 'mox', needs: MoxType.Green },
                sigils: ['activatedStatsUp'],
            },
            blueMage: {
                name: 'Blue Mage',
                rare: true,
                scrybe: 'wizard',
                power: 0,
                health: 1,
                cost: { type: 'mox', needs: MoxType.Blue },
                sigils: ['gemsDraw'],
            },
            blueMageFused: {
                name: 'Blue Sporemage',
                banned: true,
                fused: true,
                power: 0,
                health: 1,
                cost: { type: 'mox', needs: MoxType.Blue },
                sigils: ['gemsDraw', 'gemsDraw'],
            },
            hoverMage: {
                name: 'Hover Mage',
                power: 1,
                health: 2,
                cost: { type: 'mox', needs: MoxType.Blue },
                sigils: ['airborne'],
            },
            forceMage: {
                name: 'Force Mage',
                desc: 'Dies to removal.',
                power: 0,
                health: 1,
                cost: { type: 'mox', needs: MoxType.Blue },
                sigils: ['voidDamage'],
            },
            gemFiend: {
                name: 'Gem Fiend',
                power: 2,
                health: 1,
                cost: { type: 'mox', needs: MoxType.Blue },
                sigils: ['gemDependant'],
            },
            greenMage: {
                name: 'Green Mage',
                desc: 'This card\'s attack is equal to the number of "Mox" cards you possess.',
                power: 'moxes',
                health: 2,
                cost: { type: 'mox', needs: MoxType.Green },
            },
            juniorSage: {
                name: 'Junior Sage',
                power: 1,
                health: 3,
                cost: { type: 'mox', needs: MoxType.Green },
            },
            mageKnight: {
                name: 'Mage Knight',
                power: 1,
                health: 3,
                cost: { type: 'mox', needs: MoxType.Orange },
                sigils: ['gemDependant'],
            },
            masterBG: {
                name: 'Master Bleene',
                rare: true,
                scrybe: 'wizard',
                power: 0,
                health: 4,
                cost: { type: 'mox', needs: MoxType.Green | MoxType.Blue },
                sigils: ['activatedSacrificeDraw'],
            },
            masterGO: {
                name: 'Master Goranj',
                desc: 'He got buffed a while back. Thanks FishGuy101!',
                rare: true,
                scrybe: 'wizard',
                power: 2,
                health: 4,
                cost: { type: 'mox', needs: MoxType.Green | MoxType.Orange },
                sigils: ['gemDependant', 'bistrike'],
            },
            masterOB: {
                name: 'Master Orlu',
                desc: 'Note: Attack was increased to make it an acceptable rare card and to demonstrate its sigil effect more clearly.',
                rare: true,
                scrybe: 'wizard',
                power: 1,
                health: 3,
                cost: { type: 'mox', needs: MoxType.Orange | MoxType.Blue },
                sigils: ['airborne', 'looter'],
            },
            moxBG: {
                name: 'Bleene\'s Mox',
                rare: true,
                scrybe: 'wizard',
                power: 0,
                health: 2,
                noSac: true,
                sigils: ['gainGemBlue', 'gainGemGreen'],
            },
            moxGO: {
                name: 'Goranj\'s Mox',
                rare: true,
                scrybe: 'wizard',
                power: 0,
                health: 2,
                noSac: true,
                sigils: ['gainGemGreen', 'gainGemOrange'],
            },
            moxOB: {
                name: 'Orlu\'s Mox',
                rare: true,
                scrybe: 'wizard',
                power: 0,
                health: 2,
                noSac: true,
                sigils: ['gainGemOrange', 'gainGemBlue'],
            },
            moxG: {
                name: 'Emerald Mox',
                face: 'terrain',
                banned: true,
                power: 0,
                health: 1,
                noSac: true,
                sigils: ['gainGemGreen'],
                tribes: ['mox'],
            },
            moxO: {
                name: 'Ruby Mox',
                face: 'terrain',
                banned: true,
                power: 0,
                health: 1,
                noSac: true,
                sigils: ['gainGemOrange'],
                tribes: ['mox'],
            },
            moxB: {
                name: 'Sapphire Mox',
                face: 'terrain',
                banned: true,
                power: 0,
                health: 1,
                noSac: true,
                sigils: ['gainGemBlue'],
                tribes: ['mox'],
            },
            moxAll: {
                name: 'Magnus Mox',
                rare: true,
                scrybe: 'wizard',
                banned: true,
                power: 0,
                health: 2,
                noSac: true,
                sigils: ['gainGemAll'],
                tribes: ['mox'],
            },
            muscleMage: {
                name: 'Muscle Mage',
                power: 1,
                health: 2,
                cost: { type: 'mox', needs: MoxType.Green },
                sigils: ['strafePush'],
            },
            orangeMage: {
                name: 'Orange Mage',
                power: 0,
                health: 1,
                cost: { type: 'mox', needs: MoxType.Orange },
                sigils: ['buffGems'],
            },
            practiceMage: {
                name: 'Practice Wizard',
                power: 0,
                health: 3,
                cost: { type: 'mox', needs: MoxType.Orange },
                sigils: ['stone'],
            },
            magePupil: {
                name: 'Mage Pupil',
                power: 1,
                health: 1,
                sigils: ['gemDependant'],
            },
            rubyGolem: {
                name: 'Ruby Golem',
                face: 'terrain',
                power: 1,
                health: 1,
                cost: { type: 'mox', needs: MoxType.Orange },
                noSac: true,
                sigils: ['dropRubyOnDeath'],
            },
            stimMage: {
                name: 'Stim Mage',
                power: 0,
                health: 2,
                cost: { type: 'mox', needs: MoxType.Green },
                sigils: ['activatedStatsUpEnergy'],
            },
            witheredCorpse: {
                name: 'Withered Corpse',
                banned: true,
                power: 1,
                health: 1,
                sigils: ['brittle', 'boneless'],
            },
            emptyVessel: {
                name: 'Empty Vessel',
                banned: true,
                power: 0,
                health: 3,
                cost: { type: 'energy', amount: 1 },
                noSac: true,
            },

            nullConduit: {
                name: 'Null Conduit',
                power: 0,
                health: 1,
                cost: { type: 'energy', amount: 1 },
                conduit: true,
            },
            conduitEnergy: {
                name: 'Energy Conduit',
                desc: 'Note: Effect was changed to prevent infinitely buffing stim mage.',
                rare: true,
                power: 1,
                health: 2,
                cost: { type: 'energy', amount: 3 },
                conduit: true,
                sigils: ['conduitGainEnergy'],
            },
            conduitPower: {
                name: 'Buff Conduit',
                power: 0,
                health: 2,
                cost: { type: 'energy', amount: 2 },
                conduit: true,
                sigils: ['conduitGainPower'],
            },
            conduitFactory: {
                name: 'Factory Conduit',
                power: 0,
                health: 2,
                cost: { type: 'energy', amount: 3 },
                conduit: true,
                sigils: ['conduitSpawner'],
            },

        },
        sideDecks: {
            squirrels: {
                name: 'Squirrels',
                repeat: [10, 'squirrel'],
            },
            skeletons: {
                name: 'Skeletons',
                repeat: [10, 'skeleton'],
            },
            vessels: {
                name: 'Vessels',
                repeat: [10, 'emptyVessel'],
            },
            moxG: {
                name: 'Emerald Mox',
                repeat: [10, 'moxG'],
            },
            moxB: {
                name: 'Sapphire Mox',
                repeat: [10, 'moxB'],
            },
            moxO: {
                name: 'Ruby Mox',
                repeat: [10, 'moxO'],
            },
            // TODO: add sigiled vessels
        },
        sigilParams: {
            antSpawner: ['workerAnt'],
            beesWithin: ['bee'],
            bellist: ['chime'],
            bombSpewer: ['explodeBot'],
            boneDigger: [1],
            damBuilder: ['dam'],
            detonator: [5],
            skeletonStrafe: ['skeleton'],
            squirrelStrafe: ['squirrel'],
            activatedDealDamage: [1, 1],
            activatedDiceRollEnergy: [1],
            activatedDrawSkeleton: [2, 'witheredCorpse'],
            activatedEnergyToBones: [1, 1],
            activatedSacrificeDraw: [3],
            activatedStatsUpEnergy: [3, 1],
            activatedStatsUp: [3, 1],
            conduitGainEnergy: [3],
            conduitSpawner: ['leapingBot'],
        },
    },
} satisfies Record<string, Ruleset<true>>;

export const rulesets: Record<string, Ruleset> = RULESETS;

// Check validity of references & fill in defaults
for (const [ruleset, { prints, sideDecks, sigilParams }] of Object.entries(rulesets)) {
    for (const [id, card] of Object.entries(prints) as [string, CardPrint][]) {
        if (card.evolution && !Object.hasOwn(prints, card.evolution))
            throw new Error(`Card ${card.name} references invalid evolution ${card.evolution}`);
        if (!card.portrait) card.portrait = id;
        if (card.rare) {
            if (card.noSac) card.face ??= 'rare_terrain';
            else card.face ??= 'rare';
            if (card.scrybe) card.frame ??= `${card.scrybe}_frame`;
        }
        if (card.noSac) card.face ??= 'terrain';
    }
    for (const [, sideDeck] of Object.entries(sideDecks) as [string, SideDeck][]) {
        if (sideDeck.repeat && !Object.hasOwn(prints, sideDeck.repeat[1]))
            throw new Error(`Side deck ${sideDeck.name} references invalid print ${sideDeck.repeat[1]}`);
    }
    for (const [sigil, params] of Object.entries(sigilParams)) {
        for (let i = 0; i < params.length; i++) {
            if (sigilInfos[sigil].params?.[i] === 'print' && !prints[params[i]])
                throw new Error(`Params for ${sigil} in ${ruleset} references invalid print ${params[i]}`);
        }
    }
}
