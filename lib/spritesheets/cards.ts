import { Spritesheet } from '.';

export const CardSprites: Spritesheet = {
    path: '/assets/gbc/cards.png',
    size: [220, 290],
    tiled: {
        tileSize: [44, 58],
        borderWidth: { in: 0, out: 0 },
    },
    sprites: {
        common: [1, 0],
        terrain: [2, 1],
        zombie: [3, 1],
        rare: [3, 0],
        rare_terrain: [0, 1],
        rare_zombie: [1, 1],
        deathcard: [2, 0],

        stitches: [0, 3],
        noSac: [1, 3],
        nature_frame: [4, 0],
        tech_frame: [4, 1],
        undead_frame: [4, 2],
        wizard_frame: [4, 3],

        common_back: [2, 2],
        submerged_back: [1, 2],

        circuit: [0, 0],
        conduit: [0, 4],
        conduitLeft: [1, 4],
        conduitRight: [2, 4],

        sac: [0, 2],
        target: [1, 3],
        targetHover: [2, 3],
        slot: [3, 2],
    },
};
