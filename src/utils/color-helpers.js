import chroma from "chroma-js";

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

export function generatePalette(starterPalette) {
    const newPalette = {
        paletteName: starterPalette.paletteName,
        id: starterPalette.id,
        emoji: starterPalette.emoji,
        colors: {}
    };

    levels.forEach(level => newPalette.colors[level] = []);

    starterPalette.colors.forEach((color) => {
        const scale = getScale(color.color, 10);

        for (let indx in scale) {
            newPalette.colors[levels[indx]].push({
                name: `${color.name} ${levels[indx]}`,
                id: color.name.toLowerCase().replace(/ /g, "-"),
                hex: scale[indx],
                rgb: chroma(scale[indx]).css(),
                rgba: chroma(scale[indx]).css("rgba")
            });
        }
    });
    return newPalette;
};

function getRange(hexColor) {
    return [
        chroma(hexColor).brighten(1.8).hex(),
        hexColor,
        chroma(hexColor).darken(1.4).hex()
    ];
}

function getScale(hexColor, numberOfColors) {
    return chroma
        .scale(getRange(hexColor))
        .mode("lab")
        .colors(numberOfColors);
}