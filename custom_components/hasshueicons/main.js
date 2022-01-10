const HHI_DOMAIN = "hasshueicons";

const HHI_ICON_STORE = {};

const HHI_PREFIXES = {
    hue: "svgs"
};

const HHI_PATH_CLASSES = {
    primary: "primary",
    secondary: "secondary",
};

const HHI_ICON_MAP = {

    "adore":{
        keywords: ["bathroom","light","wall"]
    },
    "adore-alt":{
        keywords: ["bathroom","light","wall"]
    },
    "adore-mirror":{
        keywords: ["bathroom","light","wall"]
    },
    "amarant":{
        keywords: ["floor","light"]
    },
    "amaze":{
        keywords: ["ceiling","light","pendant"]
    },
    "amaze-alt":{
        keywords: ["ceiling","light","pendant"]
    },
    "aura":{
        keywords: ["floor","light","table"]
    },
    "aura-group":{
        keywords: ["floor","light","table"]
    },
    "beyond":{
        keywords: ["floor","lamp","light"]
    },
    "beyond-down":{
        keywords: ["floor","lamp","light"]
    },
    "beyond-solid":{
        keywords: ["floor","lamp","light"]
    },
    "beyond-up":{
        keywords: ["floor","lamp","light"]
    },
    "bloom":{
        keywords: ["floor","light","table"]
    },
    "bloom-group":{
        keywords: ["floor","light","table"]
    },
    "bollard":{
        keywords: ["calla","exterior","light","pillar"]
    },
    "bridge-v1":{
        keywords: ["infrastructure"]
    },
    "bridge-v2":{
        keywords: ["infrastructure"]
    },
    "bulb-candle":{
        keywords: ["light","retro"]
    },
    "bulb-classic":{
        keywords: ["light"]
    },
    "bulb-classic-hung":{
        keywords: ["light"]
    },
    "bulb-classic-off":{
        keywords: ["light"]
    },
    "bulb-filament":{
        keywords: ["light","retro"]
    },
    "bulb-filament-alt":{
        keywords: ["light","retro"]
    },
    "bulb-filament-alt-hung":{
        keywords: ["light","retro"]
    },
    "bulb-filament-candle":{
        keywords: ["light","retro"]
    },
    "bulb-filament-hung":{
        keywords: ["light","retro"]
    },
    "bulb-flood":{
        keywords: ["light","par38"]
    },
    "bulb-golfball-e14":{
        keywords: ["light"]
    },
    "bulb-group":{
        keywords: ["light","sultan"]
    },
    "bulb-group-bollard":{
        keywords: ["calla","exterior","light"]
    },
    "bulb-group-bollard-3":{
        keywords: ["calla","exterior","light"]
    },
    "bulb-group-candle":{
        keywords: ["light","retro"]
    },
    "bulb-group-candle-lightstrip":{
        keywords: ["light"]
    },
    "bulb-group-ceiling-round":{
        keywords: ["aurelle","devere","enrave","light"]
    },
    "bulb-group-ceiling-square":{
        keywords: ["aurelle","light","surimu"]
    },
    "bulb-group-centura":{
        keywords: ["ceiling","light"]
    },
    "bulb-group-centura-round":{
        keywords: ["ceiling","light"]
    },
    "bulb-group-classic":{
        keywords: ["light"]
    },
    "bulb-group-classic-hung":{
        keywords: ["light"]
    },
    "bulb-group-filament":{
        keywords: ["light","retro"]
    },
    "bulb-group-filament-alt":{
        keywords: ["light","retro"]
    },
    "bulb-group-filament-alt-filament-hung":{
        keywords: ["light"]
    },
    "bulb-group-filament-alt-hung":{
        keywords: ["light","retro"]
    },
    "bulb-group-filament-candle":{
        keywords: ["light","retro"]
    },
    "bulb-group-filament-filament-alt":{
        keywords: ["light","retro"]
    },
    "bulb-group-filament-filament-alt-hung":{
        keywords: ["light","retro"]
    },
    "bulb-group-filament-go":{
        keywords: ["light"]
    },
    "bulb-group-filament-hung":{
        keywords: ["light","retro"]
    },
    "bulb-group-filament-spot":{
        keywords: ["light"]
    },
    "bulb-group-filament-sultan":{
        keywords: ["light"]
    },
    "bulb-group-go-filament":{
        keywords: ["light"]
    },
    "bulb-group-go-sultan":{
        keywords: ["light"]
    },
    "bulb-group-golfball-e14":{
        keywords: ["light"]
    },
    "bulb-group-lightstrip":{
        keywords: ["led","light"]
    },
    "bulb-group-lightstrip-v":{
        keywords: ["led","light"]
    },
    "bulb-group-pillar-impress":{
        keywords: ["bollard","light"]
    },
    "bulb-group-pillar-impress-3":{
        keywords: ["bollard","light"]
    },
    "bulb-group-pillar-impress-short":{
        keywords: ["bollard","light"]
    },
    "bulb-group-pillar-turaco-short-tall":{
        keywords: ["exterior","light"]
    },
    "bulb-group-spot":{
        keywords: ["light"]
    },
    "bulb-group-sultan-go":{
        keywords: ["light"]
    },
    "bulb-group-sultan-lightstrip":{
        keywords: ["light"]
    },
    "bulb-group-sultan-lightstrip-off":{
        keywords: ["light"]
    },
    "bulb-group-sultan-spot":{
        keywords: ["light"]
    },
    "bulb-group-sultan-spot-off":{
        keywords: ["light"]
    },
    "bulb-par-38":{
        keywords: ["flood","light"]
    },
    "bulb-spot":{
        keywords: ["light"]
    },
    "bulb-spot-off":{
        keywords: ["light"]
    },
    "bulb-sultan":{
        keywords: ["light"]
    },
    "bulb-sultan-off":{
        keywords: ["light"]
    },
    "button":{
        keywords: ["light","switch","wall"]
    },
    "ceiling-aurelle":{
        keywords: ["light","panel"]
    },
    "ceiling-aurelle-circle":{
        keywords: ["light"]
    },
    "ceiling-aurelle-rect":{
        keywords: ["light","panel"]
    },
    "ceiling-being":{
        keywords: ["light"]
    },
    "ceiling-beyond":{
        keywords: ["light"]
    },
    "ceiling-beyond-alt":{
        keywords: ["light"]
    },
    "ceiling-buckram":{
        keywords: ["light","spot"]
    },
    "ceiling-buckram-three":{
        keywords: ["light","spot"]
    },
    "ceiling-buckram-two":{
        keywords: ["light","spot"]
    },
    "ceiling-buratto":{
        keywords: ["light","spot"]
    },
    "ceiling-buratto-four":{
        keywords: ["light","spot"]
    },
    "ceiling-buratto-three":{
        keywords: ["light","spot"]
    },
    "ceiling-buratto-two":{
        keywords: ["light","spot"]
    },
    "ceiling-cher-semiflush":{
        keywords: ["ceiling","light"]
    },
    "ceiling-explore":{
        keywords: ["light","pendant"]
    },
    "ceiling-fair":{
        keywords: ["light"]
    },
    "ceiling-fair-semiflush":{
        keywords: ["light","pendant"]
    },
    "ceiling-flourish":{
        keywords: ["light"]
    },
    "ceiling-flourish-pendant":{
        keywords: ["light"]
    },
    "ceiling-flush-circular":{
        keywords: ["light"]
    },
    "ceiling-fugato-four":{
        keywords: ["light","spot"]
    },
    "ceiling-fugato-four-alt":{
        keywords: ["light","spot"]
    },
    "ceiling-fugato-three":{
        keywords: ["light","spot"]
    },
    "ceiling-fugato-three-alt":{
        keywords: ["light","spot"]
    },
    "ceiling-fugato-two":{
        keywords: ["light","spot"]
    },
    "ceiling-fugato-two-alt":{
        keywords: ["light","spot"]
    },
    "ceiling-infuse":{
        keywords: ["light"]
    },
    "ceiling-muscari":{
        keywords: ["light"]
    },
    "ceiling-rect":{
        keywords: ["aurelle","light","panel","surimu"]
    },
    "ceiling-round":{
        keywords: ["devere","enrave","light"]
    },
    "ceiling-square":{
        keywords: ["aurelle","light","panel","surimu"]
    },
    "ceiling-still":{
        keywords: ["light"]
    },
    "ceiling-surimu":{
        keywords: ["light","panel"]
    },
    "ceiling-xamento":{
        keywords: ["ceiling","light"]
    },
    "centris":{
        keywords: ["ceiling","light","spot"]
    },
    "centris-three":{
        keywords: ["ceiling","light","spot"]
    },
    "centris-two":{
        keywords: ["ceiling","light","spot"]
    },
    "centura":{
        keywords: ["ceiling","light","spot"]
    },
    "centura-round":{
        keywords: ["ceiling","light","spot"]
    },
    "centura-two":{
        keywords: ["ceiling","light","spot"]
    },
    "daylo-wall":{
        keywords: ["light"]
    },
    "desk-lamp":{
        keywords: ["light","table"]
    },
    "dimmer-switch":{
        keywords: ["light","switch"]
    },
    "double-spot":{
        keywords: ["light"]
    },
    "downstairs":{
        keywords: ["area"]
    },
    "ensis":{
        keywords: ["ceiling","light","pendant"]
    },
    "ensis-up":{
        keywords: ["ceiling","light","pendant"]
    },
    "floor-lantern":{
        keywords: ["bollard","exterior","lamp","light"]
    },
    "floor-lantern-group":{
        keywords: ["bollard","exterior","lamp","light"]
    },
    "floor-lantern-off":{
        keywords: ["bollard","exterior","lamp","light"]
    },
    "floor-shade":{
        keywords: ["lamp","light"]
    },
    "floor-spot":{
        keywords: ["light"]
    },
    "flourish":{
        keywords: ["floor","light","table"]
    },
    "flourish-alt":{
        keywords: ["floor","light","table"]
    },
    "friends-of-hue-20042LEDSWACDMG-BLRFR":{
        keywords: ["exterior","light","wall"]
    },
    "friends-of-hue-arke":{
        keywords: ["light","switch"]
    },
    "friends-of-hue-arke-round":{
        keywords: ["light","switch"]
    },
    "friends-of-hue-eikon":{
        keywords: ["light","switch"]
    },
    "friends-of-hue-flat-p":{
        keywords: ["light","wall"]
    },
    "friends-of-hue-flat-p-alt":{
        keywords: ["light","wall"]
    },
    "friends-of-hue-iq-flush":{
        keywords: ["ceiling","light"]
    },
    "friends-of-hue-iq-pendant":{
        keywords: ["ceiling","light"]
    },
    "friends-of-hue-retrotouch-black-chrome":{
        keywords: ["light","switch"]
    },
    "friends-of-hue-retrotouch-black-plain":{
        keywords: ["light","switch"]
    },
    "friends-of-hue-retrotouch-white-chrome":{
        keywords: ["light","switch"]
    },
    "friends-of-hue-retrotouch-white-plain":{
        keywords: ["light","switch"]
    },
    "friends-of-hue-rigel":{
        keywords: ["ceiling","light","pendant"]
    },
    "friends-of-hue-senic":{
        keywords: ["light","switch"]
    },
    "go":{
        keywords: ["floor","light","table"]
    },
    "go-group":{
        keywords: ["floor","light","table"]
    },
    "go-off":{
        keywords: ["floor","light","table"]
    },
    "gradient-lightstrip":{
        keywords: ["led","light"]
    },
    "gradient-lightstrip-wrap":{
        keywords: ["led","light"]
    },
    "gradient-tube-long":{
        keywords: ["light"]
    },
    "gradient-tube-short":{
        keywords: ["light"]
    },
    "iris":{
        keywords: ["floor","light","table"]
    },
    "liane":{
        keywords: ["floor","light","table"]
    },
    "lightstrip":{
        keywords: ["led","light"]
    },
    "lightstrip-off":{
        keywords: ["led","light"]
    },
    "lightstrip-tv":{
        keywords: ["led","light"]
    },
    "lightstrip-tv-alt":{
        keywords: ["led","light"]
    },
    "lightstrip-tv-off":{
        keywords: ["led","light"]
    },
    "lightstrip-wrap":{
        keywords: ["led","light"]
    },
    "lily":{
        keywords: ["exterior","light","spot"]
    },
    "lily-two":{
        keywords: ["exterior","light","spot"]
    },
    "lily-xl":{
        keywords: ["exterior","light","spot"]
    },
    "logo":{
        keywords: ["philips"]
    },
    "logo-alt":{
        keywords: ["philips"]
    },
    "motion-sensor":{
        keywords: ["pir"]
    },
    "motion-sensor-temperature":{
        keywords: ["pir"]
    },
    "outdoor-motion-sensor":{
        keywords: ["exterior","pir"]
    },
    "outdoor-motion-sensor-temperature":{
        keywords: ["exterior","pir"]
    },
    "pedestal-econic":{
        keywords: ["bollard","exterior","lamp","light"]
    },
    "pendant-being":{
        keywords: ["ceiling","light"]
    },
    "pendant-cher":{
        keywords: ["ceiling","light"]
    },
    "pendant-long":{
        keywords: ["ceiling","light"]
    },
    "pendant-long-up":{
        keywords: ["ceiling","light"]
    },
    "pendant-muscari":{
        keywords: ["ceiling","light"]
    },
    "pendant-round":{
        keywords: ["ceiling","light"]
    },
    "phoenix-pendant":{
        keywords: ["ceiling","light"]
    },
    "phoenix-plafond":{
        keywords: ["ceiling","light"]
    },
    "phoenix-semiflush":{
        keywords: ["ceiling","light"]
    },
    "phoenix-table":{
        keywords: ["lamp","light"]
    },
    "pillar-impress":{
        keywords: ["bollard","exterior","light"]
    },
    "pillar-impress-short":{
        keywords: ["bollard","exterior","light"]
    },
    "pillar-nyro":{
        keywords: ["bollard","exterior","light"]
    },
    "pillar-spot":{
        keywords: ["light"]
    },
    "pillar-spot-double":{
        keywords: ["light"]
    },
    "pillar-tuar":{
        keywords: ["bollard","exterior","lamp","light"]
    },
    "pillar-turaco-short":{
        keywords: ["exterior","light"]
    },
    "pillar-turaco-tall":{
        keywords: ["exterior","light"]
    },
    "play-bar":{
        keywords: ["light"]
    },
    "play-bar-three":{
        keywords: ["light"]
    },
    "play-bar-two":{
        keywords: ["light"]
    },
    "play-bar-v":{
        keywords: ["light"]
    },
    "play-bar-v-alt":{
        keywords: ["light"]
    },
    "play-bar-v-two":{
        keywords: ["light"]
    },
    "play-bar-v-two-in":{
        keywords: ["light"]
    },
    "play-bar-v-two-out":{
        keywords: ["light"]
    },
    "plug":{
        keywords: ["infrastructure","light"]
    },
    "plug-eu":{
        keywords: ["infrastructure","light"]
    },
    "plug-uk":{
        keywords: ["infrastructure","light"]
    },
    "recessed-ceiling":{
        keywords: ["light"]
    },
    "recessed-floor":{
        keywords: ["light"]
    },
    "room-attic":{
        keywords: ["area","light"]
    },
    "room-balcony":{
        keywords: ["area","bannister","light"]
    },
    "room-bathroom":{
        keywords: ["area","shower"]
    },
    "room-bbq":{
        keywords: ["area","barbecue"]
    },
    "room-bedroom":{
        keywords: ["area","double"]
    },
    "room-carport":{
        keywords: ["area","garage"]
    },
    "room-closet":{
        keywords: ["area"]
    },
    "room-computer":{
        keywords: ["area"]
    },
    "room-dining":{
        keywords: ["area"]
    },
    "room-driveway":{
        keywords: ["area"]
    },
    "room-front-door":{
        keywords: ["area"]
    },
    "room-games":{
        keywords: ["area","console","xbox"]
    },
    "room-garage":{
        keywords: ["area","config","tools"]
    },
    "room-guestroom":{
        keywords: ["area","bed","single"]
    },
    "room-gym":{
        keywords: ["area","exercise","weights"]
    },
    "room-hallway":{
        keywords: ["area","coat"]
    },
    "room-kids":{
        keywords: ["area","bear","toy"]
    },
    "room-kitchen":{
        keywords: ["area","cook"]
    },
    "room-laundry":{
        keywords: ["area","utility","washing"]
    },
    "room-living":{
        keywords: ["area","lounge","settee","sofa"]
    },
    "room-lounge":{
        keywords: ["area","chaise","settee"]
    },
    "room-nursery":{
        keywords: ["area","rocking","toys"]
    },
    "room-office":{
        keywords: ["area","chair","work"]
    },
    "room-other":{
        keywords: ["area","door"]
    },
    "room-outdoors":{
        keywords: ["area","garden","trees"]
    },
    "room-pool":{
        keywords: ["area","swim"]
    },
    "room-porch":{
        keywords: ["area","rocking"]
    },
    "room-recreation":{
        keywords: ["area","games","ping","toys"]
    },
    "room-stairs":{
        keywords: ["area","basement","upstairs"]
    },
    "room-storage":{
        keywords: ["area","box","filing"]
    },
    "room-studio":{
        keywords: ["area","easel","paint"]
    },
    "room-terrace":{
        keywords: ["area","picnic"]
    },
    "room-toilet":{
        keywords: ["area","wc"]
    },
    "sana":{
        keywords: ["light"]
    },
    "sana-alt":{
        keywords: ["light"]
    },
    "signe":{
        keywords: ["light"]
    },
    "signe-gradient-floor":{
        keywords: ["light"]
    },
    "signe-gradient-table":{
        keywords: ["light"]
    },
    "single-spot":{
        keywords: ["ceiling","light"]
    },
    "socket-eu":{
        keywords: ["infrastructure","light"]
    },
    "socket-uk":{
        keywords: ["infrastructure","light"]
    },
    "socket-us":{
        keywords: ["infrastructure","light"]
    },
    "sync-box":{
        keywords: ["infrastructure","light"]
    },
    "sync-box-alt":{
        keywords: ["infrastructure","light"]
    },
    "table-shade":{
        keywords: ["lamp","light"]
    },
    "table-wash":{
        keywords: ["light"]
    },
    "tap":{
        keywords: ["light","switch"]
    },
    "upstairs":{
        keywords: ["light"]
    },
    "wall-appear":{
        keywords: ["exterior","light"]
    },
    "wall-appear-group":{
        keywords: ["exterior","light"]
    },
    "wall-attract":{
        keywords: ["exterior","light"]
    },
    "wall-econic":{
        keywords: ["exterior","light"]
    },
    "wall-econic-lantern":{
        keywords: ["exterior","light"]
    },
    "wall-econic-lantern-base":{
        keywords: ["exterior","light"]
    },
    "wall-econic-lantern-top":{
        keywords: ["exterior","light"]
    },
    "wall-flood":{
        keywords: ["exterior","light"]
    },
    "wall-fuzo":{
        keywords: ["exterior","light"]
    },
    "wall-fuzo-h":{
        keywords: ["exterior","light"]
    },
    "wall-impress":{
        keywords: ["exterior","light"]
    },
    "wall-impress-narrow":{
        keywords: ["exterior","light"]
    },
    "wall-lantern":{
        keywords: ["exterior","light"]
    },
    "wall-lucca":{
        keywords: ["exterior","light"]
    },
    "wall-lucca-alt":{
        keywords: ["exterior","light"]
    },
    "wall-lucca-alt-below":{
        keywords: ["exterior","light"]
    },
    "wall-nyro":{
        keywords: ["exterior","light"]
    },
    "wall-resonate":{
        keywords: ["exterior","light"]
    },
    "wall-shade":{
        keywords: ["lamp","light"]
    },
    "wall-spot":{
        keywords: ["light"]
    },
    "wall-switch-module":{
        keywords: ["switch"]
    },
    "wall-tuar":{
        keywords: ["exterior","light"]
    },
    "wall-turaco":{
        keywords: ["exterior","light"]
    },
    "wellner":{
        keywords: ["light","table"]
    },
    "wellner-solid":{
        keywords: ["light","table"]
    },
    "wellness":{
        keywords: ["light","table"]
    }
};

const preProcessIcon = async (iconSet, iconName) => {
    const [icon, format] = iconName.split("#");
    const data = await fetch(`/${HHI_DOMAIN}/icons/${iconSet}/${icon}.svg`);
    const text = await data.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, "text/html");

    if (!doc || !doc.querySelector("svg")) return {};

    const viewBox = doc.querySelector("svg").getAttribute("viewBox");
    const _paths = doc.querySelectorAll("path");
    const paths = {};
    let path = "";
    for (const pth of _paths) {
        path = path + pth.getAttribute("d");
        const cls = pth.classList[0];
        if (HHI_PATH_CLASSES[cls]) {
            paths[HHI_PATH_CLASSES[cls]] = pth.getAttribute("d");
        }
    }

    // Don't allow full code to be used if the svg may contain javascript
    let fullCode = null;
    const svgEl = doc.querySelector("svg");
    const hasOn = Array.from(svgEl.attributes).some((a) =>
        a.name.startsWith("on")
    );
    if (!hasOn) {
        if (!svgEl.getElementsByTagName("script").length) {
            fullCode = svgEl;
        }
    }

    return { viewBox, path, paths, format, fullCode };
};

const getIcon = (iconSet, iconName) => {
    return new Promise(async (resolve, reject) => {
        const icon = `${iconSet}:${iconName}`;
        if (HHI_ICON_STORE[icon]) resolve(HHI_ICON_STORE[icon]);

        HHI_ICON_STORE[icon] = preProcessIcon(iconSet, iconName);

        resolve(HHI_ICON_STORE[icon]);
    });
};

const getIconList = async (iconSet) => {
    const data = await fetch(`/${HHI_DOMAIN}/list/${iconSet}`);
    const text = await data.text();
    let listing = JSON.parse(text);
    console.log('listing is', listing);
    for (let i = 0;i < listing.length; i++){
        listing[i].keywords = HHI_ICON_MAP.hasOwnProperty(listing[i].name) ? HHI_ICON_MAP[listing[i].name].keywords : [];
    }
    console.log('listing became', listing);

    debug_get_legacy_listing();
    return listing;
};

function debug_get_legacy_listing(){

    const HUE_ICONS_MAP = {

        "adore":{
            path:"M21.6,8.8H2.4C1.6,8.8,1,9.7,1,10.7v1.9c0,1.1,0.7,1.6,1.4,1.6h6.9c0,0,0,0,0,0.1v0.4c0,0.6,0.5,1.1,1.1,1.1 h3.3c0.6,0,1.1-0.5,1.1-1.1v-0.4c0,0,0,0,0-0.1h6.9c0.7,0,1.4-0.5,1.4-1.6v-1.9C23,9.7,22.4,8.8,21.6,8.8z M21.6,13.2H2.4 c-0.1,0-0.4,0-0.4-0.6c0-0.5,0.3-0.9,0.4-0.9h19.1c0.2,0,0.4,0.3,0.4,0.9C22,13.2,21.7,13.2,21.6,13.2z",
            keywords: ["bathroom","light","wall"]
        },
        "adore-alt":{
            path:"M21.6,9.1H2.4C1.6,9.1,1,9.8,1,10.6v2.1c0,0.8,0.6,1.5,1.4,1.5h6.9c0,0,0,0,0,0.1c0,0.6,0.5,1.1,1.1,1.1h3.3 c0.6,0,1.1-0.5,1.1-1.1c0,0,0,0,0-0.1h6.9c0.8,0,1.4-0.7,1.4-1.5v-2.1C23,9.8,22.4,9.1,21.6,9.1z M21.6,13.2H2.4 C2.2,13.2,2,13,2,12.8c0-0.3,0.2-0.5,0.4-0.5h19.1c0.2,0,0.4,0.2,0.4,0.5C22,13,21.8,13.2,21.6,13.2z",
            keywords: ["bathroom","light","wall"]
        },
        "adore-mirror":{
            path:"M12,0.63c-5.12,0-9.28,5.07-9.28,11.31c0,6.23,4.16,11.31,9.28,11.31s9.28-5.07,9.28-11.31C21.28,5.7,17.12,0.63,12,0.63z M12,22.24c-4.57,0-8.28-4.61-8.28-10.31S7.42,1.63,12,1.63s8.28,4.61,8.28,10.31S16.57,22.24,12,22.24z M19.28,11.86c0,4.71-3.09,8.52-6.91,8.52c-3.82,0-6.91-3.82-6.91-8.52c0-4.71,3.09-8.52,6.91-8.52 C16.18,3.34,19.28,7.16,19.28,11.86z",
            keywords: ["bathroom","light","wall"]
        },
        "amarant":{
            path:"M1.06988,13.69382c0-.79158-.00494-1.5832.0022-2.37471a.93584.93584,0,0,1,.49449-.8362,1.4769,1.4769,0,0,1,.33135-.11084q.60114-.17643,1.20321-.34964Q3.735,9.83888,4.369,9.65582,5.00274,9.472,5.63618,9.287q.5561-.16146,1.11251-.32188.516-.14955,1.03183-.29974.52123-.15118,1.04259-.30194.481-.13962.96188-.27989.481-.13947.96219-.27808c.29563-.08578.59094-.17269.88659-.25841.26889-.078.53816-.1546.80706-.23255s.5374-.15714.80625-.23518.53791-.15508.80676-.233.53745-.15655.80627-.23454.53776-.15542.80658-.23334.5375-.15623.8063-.23418q.36581-.10607.73172-.21176c.24212-.07014.48376-.14193.7264-.21019.22285-.0627.445-.12983.671-.17866a1.09036,1.09036,0,0,1,.32746-.006,1.31737,1.31737,0,0,1,.56567.17029.89008.89008,0,0,1,.15794.12154q1.36914,1.32415,2.73635,2.65031a2.63943,2.63943,0,0,1,.34407.47068,1.36534,1.36534,0,0,1,.19575.76037c.00592.62057.00058,1.24123.00243,1.86185a.94133.94133,0,0,1-.3502.75067,1.06073,1.06073,0,0,1-.38873.1868q-.66746.20721-1.3345.41574-.622.19389-1.244.38784-.62994.19653-1.25983.39323-.69912.21785-1.39841.43521-.6592.20559-1.31814.41206-.62462.19493-1.24945.38912-.62467.19477-1.24918.39-.69909.218-1.39828.43567-.65655.20469-1.313.40967-.62729.19573-1.25454.39147t-1.25451.3916q-.6991.218-1.39831.43552c-.342.10659-.683.21673-1.02631.319a2.36608,2.36608,0,0,1-.776.09234,3.51148,3.51148,0,0,1-.85883-.17916c-.39146-.11626-.78392-.22911-1.17559-.34463q-.5234-.15436-1.04586-.31184a.60355.60355,0,0,1-.24956-.19074,1.06759,1.06759,0,0,1-.32062-.76956C1.074,15.23984,1.06987,14.46681,1.06988,13.69382Zm4.10641.55446a.9872.9872,0,0,0,.17234-.00184,2.55025,2.55025,0,0,0,.27478-.069c.33569-.0999.67058-.20244,1.00607-.303.31065-.09311.62183-.18446.9325-.2775s.6209-.18765.93155-.28079c.28584-.0857.57212-.16992.858-.25559.33383-.1.66728-.20135,1.00111-.30138.3108-.09314.622-.1849.93282-.278q.50358-.15089,1.00678-.3031.47163-.14163.9435-.2824.50121-.14992,1.00246-.29977.50125-.15015,1.00237-.30075.53595-.1608,1.0719-.32156.576-.17248,1.15223-.34452.61878-.18533,1.23741-.37118.60806-.18226,1.21621-.36425c.36275-.10867.72574-.21654,1.088-.3266a.8887.8887,0,0,0,.32605-.13711.3019.3019,0,0,0,.08043-.45419,1.72447,1.72447,0,0,0-.14785-.16589q-.94839-.91053-1.89935-1.81836a1.01353,1.01353,0,0,0-.15839-.12189,1.24006,1.24006,0,0,0-.55863-.17353,1.32822,1.32822,0,0,0-.3713.00709c-.19761.03864-.39065.10125-.58491.15628-.24425.0692-.4878.14091-.73164.21158s-.48769.14139-.73152.21214q-.36309.10534-.72615.21073-.40321.11672-.80655.233-.36582.106-.73144.21277-.36586.106-.73192.21139-.406.11753-.81184.2355-.40071.116-.80151.23176-.44348.12861-.88679.25773-.47836.13848-.957.27614-.48379.14014-.9673.28125-.48117.13953-.96255.27834-.52142.151-1.04272.30236-.47867.13862-.95745.27683-.56161.16269-1.12311.32578-.55363.16031-1.10743.32c-.37986.10969-.75933.22075-1.13979.32832a.346.346,0,0,0-.25523.414.5317.5317,0,0,0,.164.27183c.65039.65056,1.30332,1.29861,1.95039,1.95245A1.07585,1.07585,0,0,0,5.17629,14.24828Z",
            keywords: ["floor","light"]
        },
        "amaze":{
            path:"M 11.608098,16.78767 C 8.56442,16.69608 5.786819,16.230429 3.862692,15.489496 3.464022,15.336192 2.946836,15.092163 2.648049,14.916846 1.677514,14.34734 1.179039,13.712541 1.176602,13.042917 c -5.5e-4,-0.151339 0.01179,-0.234675 0.05464,-0.404881 0.09238,-0.35889 0.220129,-0.701938 0.38955,-1.046165 C 2.313649,10.182689 3.625542,9.0516694 5.478088,8.2664366 7.02312,7.6115125 8.94045,7.2095405 11.11552,7.0845385 c 0.537626,-0.031447 0.736213,-0.035378 1.531472,-0.035378 0.793369,7.86e-5 0.960982,0.00393 1.522705,0.035378 2.821508,0.1580215 5.162583,0.7679369 6.880653,1.7924425 0.209516,0.125002 0.515299,0.3294079 0.697495,0.4662811 1.138659,0.8554649 1.877507,1.8918419 2.229832,3.1276719 0.07351,0.257473 0.0798,0.299533 0.08019,0.523514 3.93e-4,0.221702 -0.0079,0.281845 -0.06171,0.447531 -0.222488,0.683737 -0.982288,1.304345 -2.283448,1.864732 -1.569758,0.676033 -4.010993,1.180404 -6.742051,1.392907 -0.403073,0.03145 -0.83885,0.05621 -1.408238,0.0798 -0.292458,0.01179 -1.631434,0.01965 -1.953963,0.0079 z m 1.755925,-0.201654 c 0.845179,-0.03145 1.231349,-0.05464 1.808717,-0.102204 2.731805,-0.223667 5.077834,-0.77403 6.561583,-1.539176 0.982209,-0.506455 1.558869,-1.090347 1.691576,-1.712646 0.01179,-0.05857 0.01572,-0.113995 0.01572,-0.255114 -7.9e-5,-0.20126 -0.0079,-0.258259 -0.06329,-0.422491 -0.290885,-0.875604 -1.492359,-1.661584 -3.417742,-2.235531 -0.230742,-0.06879 -0.680238,-0.19222 -0.884565,-0.242928 C 18.760377,9.997308 17.969247,9.8463626 17.445143,9.7649934 14.695963,9.3365403 11.610574,9.2910601 8.804558,9.6376328 7.354022,9.816881 6.092602,10.084967 4.909879,10.465712 c -2.226059,0.7166 -3.364717,1.720508 -3.1598,2.785816 0.117926,0.613611 0.683462,1.190781 1.659107,1.69362 0.835548,0.430629 2.026251,0.823205 3.318214,1.094082 1.481353,0.31054 3.077482,0.48684 4.950903,0.546747 0.161953,0.0039 0.324691,0.01179 0.360856,0.01179 0.126181,0.0079 1.097149,-0.0031 1.324629,-0.01179 z M 11.586085,16.16266 C 9.490802,16.09426 7.613421,15.855265 6.005848,15.453411 4.746354,15.138547 3.74732,14.741765 3.057333,14.282638 2.495688,13.90881 2.181493,13.512971 2.127993,13.111392 c -0.06289,-0.47202 0.30032,-0.98048 1.029734,-1.441415 1.389449,-0.878119 3.976952,-1.51842 7.042093,-1.7426382 0.875369,-0.064074 1.680924,-0.088838 2.640492,-0.080976 0.770256,0.00786 1.248762,0.023586 1.914339,0.067611 3.365423,0.2252392 6.168339,0.9504872 7.499688,1.9404012 0.538374,0.400321 0.805359,0.835902 0.760272,1.24035 -0.03145,0.263763 -0.157235,0.501502 -0.408891,0.760979 -0.275947,0.284596 -0.623399,0.522494 -1.137479,0.779062 -1.312048,0.654767 -3.326349,1.145066 -5.679414,1.382334 -0.624067,0.0629 -1.174941,0.101019 -1.993547,0.13758 -0.26612,0.01179 -1.903451,0.01573 -2.209195,0.0079 z m 1.227811,-1.087125 c 0.114782,-0.02751 0.242929,-0.09946 0.329015,-0.179641 0.349849,-0.325477 0.29914,-0.889205 -0.102989,-1.151865 -0.127753,-0.08334 -0.251183,-0.119106 -0.410737,-0.119106 -0.376579,4.32e-4 -0.685784,0.266906 -0.740068,0.638375 -0.01965,0.139153 0.0031,0.275555 0.07114,0.416556 0.104955,0.216983 0.303465,0.364391 0.551465,0.40944 0.06171,0.01179 0.23546,0.0031 0.302285,-0.01573 z m 0.325871,-2.929528 c 0.487154,-0.03538 0.899386,-0.08766 1.307018,-0.159986 0.881697,-0.15645 1.759776,-0.401894 2.517256,-0.703196 0.318009,-0.126574 0.349062,-0.144264 0.384048,-0.22013 0.01965,-0.0452 0.01965,-0.113602 -1.18e-4,-0.158807 -0.01965,-0.04599 -0.0794,-0.09591 -0.126576,-0.108493 -0.07823,-0.01965 -1.289604,-0.127753 -2.092211,-0.185537 -1.642598,-0.118319 -2.64049,-0.134436 -3.753912,-0.06171 -0.894906,0.05857 -1.964737,0.157236 -3.155356,0.290885 -0.503074,0.0566 -0.667896,0.07783 -0.698714,0.09081 -0.04599,0.01965 -0.09237,0.07312 -0.107313,0.125395 -0.01572,0.05189 -0.01179,0.09473 0.01572,0.14505 0.03538,0.07429 0.08451,0.09591 0.492225,0.223666 1.328237,0.416989 2.676889,0.667976 3.947507,0.734682 0.224453,0.0118 1.062163,0.0031 1.271876,-0.01179 z",
            keywords: ["ceiling","light","pendant"]
        },
        "amaze-alt":{
            path:"M12,19.68c-2.76,0-5.19-0.45-6.71-1.14c-1.45,0.33-2.39,0.71-2.7,1.02c0.66,0.65,4.06,1.67,9.4,1.67 c5.34,0,8.74-1.02,9.4-1.67c-0.31-0.31-1.24-0.7-2.7-1.02C17.19,19.23,14.76,19.68,12,19.68z M23.55,18.65c-0.19-0.78-0.61-2.15-1.34-2.92c-0.38-0.4-1.19-0.87-2.29-1.31l-4.1-10.86 c0.93-0.21,1.5-0.5,1.5-0.82v-1c0-0.65-2.37-1.17-5.29-1.17c-2.92,0-5.29,0.53-5.29,1.17v1c0,0.32,0.57,0.6,1.49,0.81l-4,10.79 c-1.47,0.6-2.56,1.32-3,2.02c-1.07,1.7-0.91,2.89-0.91,2.89c0,2.32,5.23,4.19,11.68,4.19c6.45,0,11.68-1.88,11.68-4.19 C23.68,19.04,23.63,18.85,23.55,18.65z M12.53,3.91c0.09,0,0.17,0,0.26-0.01c1.2,0.14,2.33,0.6,2.64,1.42l0.17,0.44 c0.34,0.9-1.29,1.97-3.07,2.14L12.53,3.91z M12.52,8.85c1.62-0.1,2.95-0.73,3.63-1.62l2.55,6.75c-1.72-0.55-3.89-0.98-6.2-1.06 L12.52,8.85z M9.23,3.73c0.68,0.09,1.46,0.15,2.3,0.17l-0.01,4.05C9.86,8.01,8.41,8.31,7.35,8.81L9.23,3.73z M6.65,10.71 l0.05-0.13c0.48-1.01,2.39-1.62,4.82-1.7l-0.01,4.03c-0.11,0-0.21,0-0.32,0C8.4,12.73,6.29,11.68,6.65,10.71z M6.11,12.16 c0.42,0.44,1.08,0.82,1.9,1.1c-0.9,0.17-1.75,0.38-2.54,0.63L6.11,12.16z M1.24,18.06L1.24,18.06L1.24,18.06 C1.24,18.05,1.24,18.06,1.24,18.06z M21.21,20.83c-0.32,0.15-0.7,0.29-1.13,0.43c-0.21,0.07-0.44,0.13-0.68,0.19 c-1.89,0.48-4.51,0.78-7.4,0.78c-2.89,0-5.51-0.3-7.4-0.78c-0.24-0.06-0.46-0.12-0.68-0.19c-0.43-0.13-0.8-0.27-1.13-0.43 c-0.81-0.38-1.26-0.81-1.26-1.27c0-1.47,4.69-2.67,10.47-2.67c5.78,0,10.47,1.19,10.47,2.67C22.47,20.02,22.01,20.45,21.21,20.83z ",
            keywords: ["ceiling","light","pendant"]
        },
        "aura":{
            path:"M14.4,7.9c-2.8-2.3-5.8-4.2-8.2-5.2c-2.6-1.1-4.4-1.1-5.1,0C1,2.9,0.9,3.1,0.9,3.3c0,0,0,0,0,0.1c0,0,0,0.1,0,0.1 c0,0.1,0,0.2,0,0.3c-0.1,1.6,0.7,4.6,1.5,6.9C3.9,15.9,2.6,18,2.6,18C2.2,18.4,2,19,2,19.6c0,1.2,0.9,2.1,2,2.2 c0.5,0,1-0.2,1.3-0.5c0,0,0,0,0,0c2-2,7.3-1,7.5-0.9c1,0.3,5,1.4,7.6,1.5c0.8,0,1.5-0.1,1.9-0.4c0.3-0.2,0.5-0.7,0.5-0.7 C24.5,18.2,19.7,12.3,14.4,7.9z M13,19.2c-5.3-1.2-8.8-6-9.8-8.8C2.9,9.5,2.6,8.6,2.4,7.8c0.1,0.1,0.2,0.3,0.3,0.4 c1.6,2.3,4.1,4.9,6.9,7.2c2.4,2,4.9,3.6,7.1,4.7C15.4,19.8,14.1,19.5,13,19.2z M22.1,20c-0.3,0.5-1.6,0.7-4-0.4 c-2.3-1-5.2-2.8-7.9-5.1c-2.8-2.3-5.2-4.8-6.7-7c-1.2-1.8-1.7-3-1.7-3.7c0,0,0-0.1,0-0.1c0-0.2,0-0.4,0.1-0.5C2,3.1,2.4,2.9,3,2.9 c0.7,0,1.6,0.2,2.9,0.8c2.3,1,5.2,2.8,7.9,5.1C20.1,13.9,22.9,18.8,22.1,20z M13.1,10.5c-2.8-2.4-5.6-3.8-6.2-3.1c-0.6,0.7,1.1,3.3,3.9,5.7c2.8,2.4,5.6,3.8,6.2,3.1C17.7,15.5,15.9,12.9,13.1,10.5z",
            keywords: ["floor","light","table"]
        },
        "aura-group":{
            path:"M17.51,5.13c-1.88-1.55-3.89-2.82-5.52-3.5c-1.8-0.76-3.06-0.74-3.57,0.06C8.35,1.83,8.27,1.99,8.27,2.15v0.33 c-0.02,0.27,0,0.61,0.06,1.02l0.01,0.06L8.4,3.59c0.37,0.2,0.75,0.42,1.17,0.67l0.41,0.25L9.75,4.1C9.23,3.21,9.13,2.73,9.13,2.49 V2.42c0-0.09,0-0.22,0.03-0.25C9.18,2.15,9.4,2.01,9.8,2.01c0.51,0,1.12,0.17,1.89,0.53c1.65,0.72,3.57,1.95,5.26,3.4 c4.38,3.54,5.95,6.7,5.53,7.33c-0.13,0.22-0.8,0.37-2.1-0.14l-0.46-0.18l0.32,0.38c0.36,0.42,0.71,0.87,1.07,1.35l0.05,0.05 l0.09,0.01c0.64,0,1.08-0.1,1.34-0.29c0.23-0.15,0.37-0.49,0.37-0.5C24.36,12.1,21.07,8.09,17.51,5.13z M21.45,14.6L21.45,14.6 C21.45,14.6,21.45,14.6,21.45,14.6L21.45,14.6z M14.71,7.9L14.71,7.9c1.08,0.89,2.13,1.85,3.12,2.83l0.04,0.03c0.41,0.18,0.73,0.27,0.97,0.27 c0.19,0,0.32-0.05,0.41-0.15c0.1-0.1,0.14-0.23,0.14-0.4c-0.03-0.75-1.16-2.23-2.75-3.6c-1.7-1.46-3.8-2.68-4.33-2.06 c-0.28,0.33,0.05,1.01,0.37,1.52l0.03,0.03C13.42,6.88,14.09,7.39,14.71,7.9z M14.15,8.58c-2.8-2.3-5.8-4.2-8.2-5.2c-2.6-1.1-4.4-1.1-5.1,0c-0.1,0.2-0.2,0.4-0.2,0.6c0,0,0,0,0,0.1v0.1 c0,0.1,0,0.2,0,0.3c-0.1,1.6,0.7,4.6,1.5,6.9c1.5,5.2,0.2,7.3,0.2,7.3c-0.4,0.4-0.6,1-0.6,1.6c0,1.2,0.9,2.1,2,2.2 c0.5,0,1-0.2,1.3-0.5c2-2,7.3-1,7.5-0.9c1,0.3,5,1.4,7.6,1.5c0.8,0,1.5-0.1,1.9-0.4c0.3-0.2,0.5-0.7,0.5-0.7 C24.25,18.88,19.45,12.98,14.15,8.58z M12.75,19.88c-5.3-1.2-8.8-6-9.8-8.8c-0.3-0.9-0.6-1.8-0.8-2.6c0.1,0.1,0.2,0.3,0.3,0.4 c1.6,2.3,4.1,4.9,6.9,7.2c2.4,2,4.9,3.6,7.1,4.7C15.15,20.48,13.85,20.18,12.75,19.88z M21.85,20.68c-0.3,0.5-1.6,0.7-4-0.4 c-2.3-1-5.2-2.8-7.9-5.1c-2.8-2.3-5.2-4.8-6.7-7c-1.2-1.8-1.7-3-1.7-3.7v-0.1c0-0.2,0-0.4,0.1-0.5c0.1-0.1,0.5-0.3,1.1-0.3 c0.7,0,1.6,0.2,2.9,0.8c2.3,1,5.2,2.8,7.9,5.1C19.85,14.58,22.65,19.48,21.85,20.68z M12.85,11.18c-2.8-2.4-5.6-3.8-6.2-3.1c-0.6,0.7,1.1,3.3,3.9,5.7c2.8,2.4,5.6,3.8,6.2,3.1 C17.45,16.18,15.65,13.58,12.85,11.18z",
            keywords: ["floor","light","table"]
        },
        "beyond":{
            path:"M19.42943,7.081a10.31229,10.31229,0,0,0-2.59311-3.04243h.30339a.50282.50282,0,0,0,.44983-.27645.49506.49506,0,0,0-.04919-.52268,7.13855,7.13855,0,0,0-5.50418-2.442L11.97381.79714A6.94692,6.94692,0,0,0,6.521,3.24382a.49508.49508,0,0,0-.04466.52072.50287.50287,0,0,0,.44861.274h.182A10.26976,10.26976,0,0,0,4.56843,7.08516a.49488.49488,0,0,0,.022.48493.50333.50333,0,0,0,.42739.2364h6.35349V18.627c-.00026.0191-.00017.05725.00308.11a.87583.87583,0,0,1-.10367.37125,1.03683,1.03683,0,0,1-.88361.44987,16.75876,16.75876,0,0,0-2.56212.46557A7.42449,7.42449,0,0,0,6.7178,20.394c-.19573.08824-.71563.32258-.71563.7988,0,.84941,1.47228,1.56625,1.93988,1.67782a18.50016,18.50016,0,0,0,3.83512.32348,19.57056,19.57056,0,0,0,3.9602-.32424,3.69473,3.69473,0,0,0,1.07735-.63067,1.8416,1.8416,0,0,0,.85982-1.30843c-.00013-.61632-.76249-.88448-1.90716-1.09747a23.31738,23.31738,0,0,0-2.523-.30512.817.817,0,0,1-.752-.42306,1.10625,1.10625,0,0,1-.11237-.3947c.00029-.05137-.00209-.08538-.003-.09681l-.00085.00007V7.80649h6.60613a.50326.50326,0,0,0,.42862-.23839A.49492.49492,0,0,0,19.42943,7.081ZM8.5123,2.79951a6.22123,6.22123,0,0,1,3.51621-1.00539,6.47333,6.47333,0,0,1,3.52568,1.02621c.11481.07423.22133.14855.31961.22143H8.169C8.27376,2.96212,8.38823,2.88065,8.5123,2.79951Zm-2.6,4.0102A8.90309,8.90309,0,0,1,8.90043,4.03854h6.11308a9.03192,9.03192,0,0,1,3.06284,2.77117Z",
            keywords: ["floor","lamp","light"]
        },
        "beyond-down":{
            path:"M19.45087,7.081a10.31259,10.31259,0,0,0-2.59314-3.04248h.30334a.50276.50276,0,0,0,.44983-.27643.495.495,0,0,0-.04919-.5227,7.13843,7.13843,0,0,0-5.50415-2.442,6.95283,6.95283,0,0,0-5.5152,2.44648.495.495,0,0,0-.04462.52069.5028.5028,0,0,0,.44861.274h.182A10.27117,10.27117,0,0,0,4.58978,7.08514a.4949.4949,0,0,0,.022.48493.50331.50331,0,0,0,.42736.23639h6.35352V18.627c-.00024.01917-.00018.05732.003.11017a.87527.87527,0,0,1-.10358.37116,1.03689,1.03689,0,0,1-.88366.44983,16.76662,16.76662,0,0,0-2.56214.46557A7.41831,7.41831,0,0,0,6.7392,20.394c-.19574.0882-.71564.32257-.71564.79877,0,.84936,1.47229,1.56622,1.93988,1.67786a18.49975,18.49975,0,0,0,3.83508.32348,19.575,19.575,0,0,0,3.96027-.32422,3.69661,3.69661,0,0,0,1.07733-.63073,1.8417,1.8417,0,0,0,.8598-1.30835c-.00012-.6164-.76245-.88453-1.9071-1.09754a23.32241,23.32241,0,0,0-2.523-.30511.81716.81716,0,0,1-.75208-.423,1.10647,1.10647,0,0,1-.11236-.39459c.0003-.05145-.00208-.08545-.003-.09692l-.00092.00006V7.80646h6.6062a.50324.50324,0,0,0,.42859-.23834A.495.495,0,0,0,19.45087,7.081ZM15.15735,3.04175h-6.967c.1048-.07965.21924-.16113.34326-.24225a6.21879,6.21879,0,0,1,3.51624-1.00537,6.47368,6.47368,0,0,1,3.52569,1.02618c.11481.07422.22132.14856.31964.22144Z",
            keywords: ["floor","lamp","light"]
        },
        "beyond-solid":{
            path:"M19.42943,7.081a10.31247,10.31247,0,0,0-2.59311-3.04243h.30339a.50282.50282,0,0,0,.44983-.27645.49508.49508,0,0,0-.04919-.52268,7.13855,7.13855,0,0,0-5.50418-2.442L11.97381.79714A6.94708,6.94708,0,0,0,6.521,3.24382a.49508.49508,0,0,0-.04463.52072.50283.50283,0,0,0,.4486.274H7.1069A10.27,10.27,0,0,0,4.56842,7.08517a.495.495,0,0,0,.022.48492.50336.50336,0,0,0,.4274.2364h6.35349V18.627c-.00028.0191-.00019.05718.00307.10994a.87585.87585,0,0,1-.10366.37134,1.03683,1.03683,0,0,1-.88359.44987,16.75921,16.75921,0,0,0-2.56214.46557,7.42333,7.42333,0,0,0-1.10713.37021c-.19572.08824-.71564.32258-.71564.7988,0,.84941,1.47226,1.56625,1.93986,1.67782a18.50046,18.50046,0,0,0,3.83513.32348,19.57056,19.57056,0,0,0,3.9602-.32424,3.69473,3.69473,0,0,0,1.07735-.63067,1.84155,1.84155,0,0,0,.85981-1.30843c-.00012-.61632-.76248-.88448-1.90715-1.09747a23.31738,23.31738,0,0,0-2.523-.30512.81707.81707,0,0,1-.752-.42306,1.10624,1.10624,0,0,1-.1124-.39486c.00028-.0513-.00206-.08522-.003-.09665l-.00085.00007V7.80649h6.60612a.50327.50327,0,0,0,.42863-.23839A.49492.49492,0,0,0,19.42943,7.081Z",
            keywords: ["floor","lamp","light"]
        },
        "beyond-up":{
            path:"M19.42948,7.081A10.18576,10.18576,0,0,0,17.5932,4.703a9.75655,9.75655,0,0,0-.75865-.66442h.30515a.50281.50281,0,0,0,.44983-.27644.49508.49508,0,0,0-.04919-.52268,7.13856,7.13856,0,0,0-5.50419-2.442A6.95345,6.95345,0,0,0,6.521,3.24381a.49508.49508,0,0,0-.04463.52072.50282.50282,0,0,0,.4486.274h.18492q-.36146.29088-.70512.62731A10.19424,10.19424,0,0,0,4.56841,7.08517a.495.495,0,0,0,.022.48492.50336.50336,0,0,0,.4274.2364h6.35349V18.627c-.00028.01912-.00019.05731.00307.11015a.87581.87581,0,0,1-.10363.37113,1.03689,1.03689,0,0,1-.88362.44987,16.75921,16.75921,0,0,0-2.56214.46557,7.42333,7.42333,0,0,0-1.10713.37021c-.19572.08824-.71564.32258-.71564.7988,0,.84935,1.47226,1.56622,1.93989,1.67785a18.49982,18.49982,0,0,0,3.83507.32345,19.57379,19.57379,0,0,0,3.96026-.32421,3.69566,3.69566,0,0,0,1.07731-.63071,1.84153,1.84153,0,0,0,.85982-1.30839c-.00009-.61636-.76245-.88451-1.90712-1.0975a23.31323,23.31323,0,0,0-2.523-.30512.81715.81715,0,0,1-.75207-.42306A1.10653,1.10653,0,0,1,12.38,18.7105c.00028-.05146-.00206-.08547-.003-.09693l-.00088.0001V7.80649h6.60615a.50327.50327,0,0,0,.4286-.23836A.49492.49492,0,0,0,19.42948,7.081ZM5.91,6.80971A9.79694,9.79694,0,0,1,7.11158,5.37432,7.92871,7.92871,0,0,1,8.90064,4.03853h6.12073a8.1161,8.1161,0,0,1,1.84651,1.355,9.86715,9.86715,0,0,1,1.21,1.41614Z",
            keywords: ["floor","lamp","light"]
        },
        "bloom":{
            path:"M 18.6875 17.652344 C 17.195312 16.984375 13.996094 15.117188 11.03125 12.183594 C 7.96875 9.160156 6.023438 5.980469 5.421875 4.546875 C 5.304688 4.269531 5.554688 3.984375 5.851562 4.058594 C 6.265625 4.15625 6.816406 4.355469 7.511719 4.726562 C 11.378906 6.796875 16.425781 11.773438 18.53125 15.59375 C 18.898438 16.261719 19.09375 16.820312 19.1875 17.253906 C 19.25 17.535156 18.953125 17.769531 18.6875 17.652344 M 19.488281 15.074219 C 17.273438 11.054688 12.105469 5.960938 8.03125 3.777344 C 6.792969 3.117188 5.816406 2.875 5.109375 2.875 C 5.109375 2.875 4.660156 2.867188 4.316406 3.003906 C 3.414062 3.390625 2.917969 4.449219 2.917969 6.765625 C 2.917969 9.597656 4.109375 12.355469 5.964844 14.621094 L 3.035156 18.984375 C 2.707031 19.464844 3.054688 20.113281 3.636719 20.109375 L 8.4375 20.09375 C 8.921875 20.09375 9.375 19.851562 9.644531 19.453125 L 10.375 18.371094 C 12.300781 19.476562 14.410156 20.125 16.464844 20.125 C 18.210938 20.125 19.332031 19.707031 20.054688 18.984375 C 20.480469 18.589844 20.613281 17.117188 19.488281 15.074219 ",
            keywords: ["floor","light","table"]
        },
        "bloom-group":{
            path:"M22.81,10.88c-1.59-2.88-5.29-6.53-8.2-8.09c-0.89-0.47-1.59-0.65-2.09-0.65c0,0-0.32-0.01-0.57,0.09 c-0.65,0.28-1,1.03-1,2.69c0,0.47,0.05,0.93,0.14,1.38c2.76,2.24,5.46,5.14,7.19,7.79c0.79,0.25,1.58,0.39,2.37,0.39 c1.25,0,2.05-0.3,2.57-0.82C23.52,13.4,23.62,12.34,22.81,10.88z M22.24,12.73c-1.07-0.48-3.36-1.82-5.48-3.92 c-2.19-2.16-3.59-4.44-4.02-5.47c-0.08-0.2,0.1-0.4,0.31-0.35c0.3,0.07,0.69,0.21,1.19,0.48c2.77,1.48,6.38,5.05,7.89,7.78 c0.26,0.48,0.4,0.88,0.47,1.19C22.64,12.64,22.43,12.81,22.24,12.73z M17.34,18.38c-1.49-0.67-4.69-2.54-7.66-5.47c-3.06-3.02-5.01-6.2-5.61-7.64C3.95,5,4.2,4.71,4.5,4.79 c0.41,0.1,0.96,0.3,1.66,0.67c3.87,2.07,8.91,7.05,11.02,10.87c0.37,0.67,0.56,1.23,0.66,1.66C17.9,18.26,17.6,18.5,17.34,18.38 M18.14,15.8c-2.21-4.02-7.38-9.11-11.46-11.3C5.44,3.85,4.47,3.6,3.76,3.6c0,0-0.45-0.01-0.79,0.13c-0.9,0.39-1.4,1.45-1.4,3.76 c0,2.83,1.19,5.59,3.05,7.86l-2.93,4.36c-0.33,0.48,0.02,1.13,0.6,1.12l4.8-0.02c0.48,0,0.94-0.24,1.21-0.64l0.73-1.08 c1.93,1.11,4.04,1.75,6.09,1.75c1.75,0,2.87-0.42,3.59-1.14C19.13,19.32,19.26,17.85,18.14,15.8",
            keywords: ["floor","light","table"]
        },
        "bollard":{
            path:"M 15.75 9.375 C 15.75 9.996094 14.070312 10.5 12 10.5 C 9.929688 10.5 8.25 9.996094 8.25 9.375 L 8.25 6.222656 C 8.25 6.039062 8.449219 5.941406 8.601562 6.039062 C 9.199219 6.421875 10.496094 6.75 12 6.75 C 13.503906 6.75 14.800781 6.421875 15.398438 6.039062 C 15.550781 5.941406 15.75 6.039062 15.75 6.222656 Z M 10.007812 3.957031 C 11.207031 3.679688 13.046875 3.679688 14.164062 3.957031 C 15.300781 4.242188 15.285156 4.71875 14.078125 5.019531 C 12.851562 5.328125 10.890625 5.328125 9.757812 5.019531 C 8.648438 4.71875 8.78125 4.242188 10.007812 3.957031 Z M 15.246094 3.359375 C 14.414062 3.121094 13.304688 3 12.171875 3 C 11.046875 3 9.90625 3.121094 9.007812 3.359375 C 8.015625 3.621094 7.5 3.984375 7.5 4.34375 L 7.5 19.761719 C 7.5 20.0625 7.875 20.363281 8.640625 20.601562 C 9.496094 20.863281 10.648438 21 11.828125 21 C 13.003906 21 14.199219 20.863281 15.121094 20.601562 C 16.042969 20.339844 16.5 19.996094 16.5 19.65625 L 16.5 4.238281 C 16.5 3.914062 16.078125 3.601562 15.246094 3.359375 Z M 15.246094 3.359375 ",
            keywords: ["calla","exterior","light","pillar"]
        },
        "bridge-v1":{
            path:"M12,16.72c-2.6,0-4.72-2.12-4.72-4.72S9.4,7.28,12,7.28S16.72,9.4,16.72,12S14.6,16.72,12,16.72 M5.02,8.1 c-0.52,0-0.94-0.42-0.94-0.94c0-0.52,0.42-0.94,0.94-0.94c0.52,0,0.94,0.42,0.94,0.94C5.97,7.68,5.55,8.1,5.02,8.1 M3.5,12.94 c-0.52,0-0.94-0.42-0.94-0.94c0-0.52,0.42-0.94,0.94-0.94S4.45,11.48,4.45,12C4.45,12.52,4.03,12.94,3.5,12.94 M9.08,3.06 c0.52,0,0.94,0.42,0.94,0.94c0,0.52-0.42,0.94-0.94,0.94S8.14,4.53,8.14,4.01C8.14,3.48,8.56,3.06,9.08,3.06z M12,9.17 c1.56,0,2.83,1.27,2.83,2.83s-1.27,2.83-2.83,2.83S9.17,13.56,9.17,12S10.44,9.17,12,9.17z M12,0.67C5.77,0.67,0.67,5.77,0.67,12 S5.77,23.33,12,23.33S23.33,18.23,23.33,12S18.23,0.67,12,0.67",
            keywords: ["infrastructure"]
        },
        "bridge-v2":{
            path:"M17.7,4.4c-0.53,0-0.95-0.42-0.95-0.95S17.18,2.5,17.7,2.5s0.95,0.42,0.95,0.95S18.23,4.4,17.7,4.4z M12,8.2 c2.1,0,3.8,1.7,3.8,3.8s-1.7,3.8-3.8,3.8S8.2,14.1,8.2,12S9.9,8.2,12,8.2z M12,17.7c-3.15,0-5.7-2.56-5.7-5.7S8.85,6.3,12,6.3 s5.7,2.56,5.7,5.7S15.15,17.7,12,17.7 M5.35,3.45c0-0.53,0.42-0.95,0.95-0.95s0.95,0.42,0.95,0.95S6.82,4.4,6.3,4.4 S5.35,3.97,5.35,3.45 M12,2.5c0.53,0,0.95,0.42,0.95,0.95S12.53,4.4,12,4.4c-0.53,0-0.95-0.42-0.95-0.95S11.47,2.5,12,2.5  M19.6,0.59H4.4c-2.09,0-3.8,1.71-3.8,3.8V19.6c0,2.09,1.71,3.8,3.8,3.8H19.6c2.09,0,3.8-1.71,3.8-3.8V4.4 C23.41,2.31,21.69,0.59,19.6,0.59",
            keywords: ["infrastructure"]
        },
        "bulb-candle":{
            path:"M 15.726562 12.335938 C 14.941406 12.554688 13.6875 12.75 12 12.75 C 10.3125 12.75 9.058594 12.554688 8.273438 12.335938 C 8.511719 8.40625 10.585938 3 12 3 C 13.410156 3 15.488281 8.40625 15.726562 12.335938 Z M 15.75 13.101562 C 15.75 13.132812 15.75 13.167969 15.75 13.199219 C 15.75 15.054688 15.179688 16.371094 14.453125 17.089844 C 13.78125 17.1875 12.960938 17.25 12 17.25 C 11.039062 17.25 10.21875 17.1875 9.546875 17.089844 C 8.820312 16.371094 8.25 15.054688 8.25 13.199219 C 8.25 13.167969 8.25 13.132812 8.25 13.101562 C 9.410156 13.398438 10.964844 13.5 12 13.5 C 13.035156 13.5 14.589844 13.398438 15.75 13.101562 Z M 10.125 17.917969 C 10.773438 17.976562 11.492188 18 12 18 C 12.507812 18 13.226562 17.976562 13.875 17.917969 L 13.5625 19.78125 C 13.546875 19.914062 13.480469 20.035156 13.375 20.125 L 13.082031 20.378906 C 13.0625 20.398438 13.042969 20.414062 13.027344 20.433594 L 12.71875 20.785156 C 12.601562 20.921875 12.421875 21 12.230469 21 L 11.769531 21 C 11.578125 21 11.398438 20.921875 11.28125 20.785156 L 10.972656 20.433594 C 10.957031 20.414062 10.9375 20.398438 10.917969 20.378906 L 10.625 20.125 C 10.519531 20.035156 10.453125 19.914062 10.4375 19.78125 Z M 10.125 17.917969 ",
            keywords: ["light","retro"]
        },
        "bulb-classic":{
            path:"M 7.179688 9.90625 C 8.59375 10.355469 10.660156 10.5 12 10.5 C 13.339844 10.5 15.40625 10.355469 16.820312 9.90625 C 16.246094 11.417969 15.246094 12.089844 15.007812 13.5 C 14.902344 14.113281 14.816406 14.972656 14.875 15.601562 C 14.910156 16 14.605469 16.351562 14.207031 16.390625 C 13.558594 16.457031 12.824219 16.5 12 16.5 C 11.175781 16.5 10.441406 16.457031 9.792969 16.390625 C 9.390625 16.351562 9.089844 16 9.125 15.601562 C 9.183594 14.972656 9.097656 14.113281 8.992188 13.5 C 8.753906 12.089844 7.757812 11.417969 7.179688 9.90625 Z M 9.75 17.148438 C 10.53125 17.222656 11.390625 17.25 12 17.25 C 12.609375 17.25 13.46875 17.222656 14.25 17.148438 L 13.875 19.476562 C 13.855469 19.640625 13.773438 19.792969 13.648438 19.90625 L 13.300781 20.226562 C 13.277344 20.246094 13.253906 20.269531 13.234375 20.292969 L 12.863281 20.730469 C 12.722656 20.902344 12.503906 21 12.273438 21 L 11.726562 21 C 11.496094 21 11.277344 20.902344 11.136719 20.730469 L 10.765625 20.292969 C 10.746094 20.269531 10.722656 20.246094 10.699219 20.226562 L 10.351562 19.90625 C 10.226562 19.792969 10.144531 19.640625 10.125 19.476562 Z M 12 3 C 14.890625 3 17.25 5.5 17.25 7.875 C 17.25 8.089844 17.207031 8.28125 17.1875 8.480469 C 17.164062 8.671875 17.128906 8.832031 17.089844 9.007812 C 16.273438 9.355469 14.539062 9.75 12 9.75 C 9.460938 9.75 7.726562 9.355469 6.910156 9.007812 C 6.871094 8.832031 6.835938 8.671875 6.8125 8.480469 C 6.792969 8.28125 6.75 8.089844 6.75 7.875 C 6.75 5.5 9.109375 3 12 3 Z M 12 3 ",
            keywords: ["light"]
        },
        "bulb-classic-hung":{
            path:"M16.82,14.09c-1.41-0.45-3.48-0.59-4.82-0.59s-3.41,0.14-4.82,0.59c0.57-1.51,1.57-2.18,1.81-3.59 C9.1,9.89,9.18,9.03,9.12,8.4C9.09,8,9.39,7.65,9.79,7.61C10.44,7.54,11.18,7.5,12,7.5s1.56,0.04,2.21,0.11 c0.4,0.04,0.7,0.39,0.67,0.79c-0.06,0.63,0.03,1.49,0.13,2.1C15.25,11.91,16.24,12.58,16.82,14.09z M14.25,6.85 c-0.78-0.07-1.64-0.1-2.25-0.1s-1.47,0.03-2.25,0.1l0.38-2.33c0.02-0.16,0.1-0.32,0.23-0.43l0.35-0.32 c0.02-0.02,0.05-0.04,0.07-0.07l0.37-0.44C11.28,3.1,11.5,3,11.73,3h0.55c0.23,0,0.45,0.1,0.59,0.27l0.37,0.44 c0.02,0.02,0.04,0.05,0.07,0.07l0.35,0.32c0.12,0.11,0.21,0.27,0.23,0.43L14.25,6.85z M12,21c-2.89,0-5.25-2.5-5.25-4.88 c0-0.21,0.04-0.41,0.06-0.61c0.02-0.19,0.06-0.35,0.1-0.53c0.82-0.35,2.55-0.74,5.09-0.74s4.27,0.39,5.09,0.74 c0.04,0.18,0.07,0.34,0.1,0.53c0.02,0.2,0.06,0.39,0.06,0.61C17.25,18.5,14.89,21,12,21z",
            keywords: ["light"]
        },
        "bulb-classic-off":{
            path:"M16.82,9.91c-1.1,0.35-2.59,0.51-3.83,0.57l2.25,2.25C15.64,11.79,16.36,11.11,16.82,9.91z M17.09,9.01c0.04-0.18,0.07-0.34,0.1-0.53c0.02-0.2,0.06-0.39,0.06-0.61C17.25,5.5,14.89,3,12,3 c-1.77,0-3.34,0.94-4.29,2.21l4.55,4.54C14.65,9.72,16.3,9.34,17.09,9.01z M9.75,17.15l0.38,2.33c0.02,0.16,0.1,0.32,0.23,0.43l0.35,0.32c0.02,0.02,0.05,0.04,0.07,0.07l0.37,0.44 C11.28,20.9,11.5,21,11.73,21h0.55c0.23,0,0.45-0.1,0.59-0.27l0.37-0.44c0.02-0.02,0.04-0.05,0.07-0.07l0.35-0.32 c0.12-0.11,0.21-0.27,0.23-0.43l0.38-2.33c-0.78,0.07-1.64,0.1-2.25,0.1S10.53,17.22,9.75,17.15z M21.98,20.94L2.86,1.87L1.45,3.28l5.4,5.39c0.02,0.11,0.04,0.23,0.06,0.34c0.12,0.05,0.27,0.11,0.44,0.16 l1.02,1.02c-0.42-0.08-0.83-0.17-1.19-0.28c0.58,1.51,1.57,2.18,1.81,3.59c0.11,0.61,0.19,1.47,0.13,2.1 c-0.04,0.4,0.27,0.75,0.67,0.79c0.65,0.07,1.38,0.11,2.21,0.11s1.56-0.04,2.21-0.11c0.1-0.01,0.2-0.04,0.29-0.09l6.08,6.06 L21.98,20.94z",
            keywords: ["light"]
        },
        "bulb-filament":{
            path:"m15.272 17.051c0.01282 0.24621 0.06409 0.48895 0.1519 0.7198 0.14412 0.40822 0.01092 0.86159-0.33229 1.131l-0.40824 2.4865c-0.02582 0.20584-0.12713 0.3953-0.28482 0.53278l-0.44622 0.40195-0.08545 0.08419-0.46521 0.54214c-0.18286 0.21615-0.45486 0.33977-0.74054 0.33649h-0.70256c-0.28568 0.0033-0.55768-0.12034-0.74054-0.33649l-0.46521-0.54214-0.08545-0.08419-0.44622-0.40195c-0.15769-0.13748-0.25899-0.32694-0.28482-0.53278l-0.40824-2.5145c-0.34321-0.26953-0.47641-0.7228-0.33229-1.1311 0.089529-0.23029 0.1408-0.47331 0.1519-0.71971 1.0593 0.11688 2.1242 0.17616 3.19 0.17756 0.83548 0 1.7849-0.0561 2.7343-0.14956zm4.6332-8.7494c0.0033 1.3117-0.34378 2.6012-1.0065 3.7391l-0.10444 0.15883c-0.09494 0.14956-0.18988 0.29921-0.29432 0.43941-1.2912 1.8508-2.345 2.2528-2.9906 3.4493-0.98055 0.10639-1.9662 0.15939-2.9526 0.15892-1.1551 7.49e-4 -2.3092-0.0679-3.4558-0.20566-0.6456-1.1591-1.6899-1.5797-2.9621-3.4025-0.10443-0.1402-0.19938-0.28985-0.29432-0.43941l-0.10443-0.15883c-1.6039-2.7224-1.305-6.1423 0.74785-8.5548 2.0528-2.4125 5.4201-3.3014 8.4233-2.2235 3.0033 1.0779 4.9997 3.8918 4.9941 7.0392zm-5.6965 0.53278c0.47214-0.13336 0.7975-0.55853 0.7975-1.0422 0-0.48371-0.32536-0.90888-0.7975-1.0422l-2.9432-0.79463c-0.26583-0.065368-0.40824-0.20556-0.40824-0.29912 0-0.093464 0.14241-0.22429 0.38926-0.29912l3.0571-0.7478c0.12295-0.026222 0.22938-0.10142 0.29413-0.20762 0.06475-0.1062 0.08193-0.23403 0.04766-0.35325-0.065414-0.24668-0.31634-0.39914-0.56964-0.34585l-3.0666 0.7478c-0.60278 0.10882-1.0553 0.60423-1.1013 1.2058 0.042818 0.60311 0.49682 1.1002 1.1013 1.2058l2.9242 0.8039c0.06883 0.017513 0.11621 0.079603 0.11393 0.14956 0.0014 0.067709-0.04652 0.12671-0.11393 0.14029l-3.5223 0.93473c-0.48011 0.1209-0.81364 0.54973-0.80699 1.0377-0.0042723 0.48904 0.32745 0.91928 0.80699 1.0469l2.9432 0.73844c0.26583 0.06546 0.40824 0.20566 0.40824 0.29912 0 0.09346-0.14241 0.22439-0.38926 0.29912l-2.9621 0.68243c-0.26213 0.02838-0.45135 0.26063-0.42249 0.51873 0.028862 0.2582 0.26479 0.44437 0.52692 0.416h0.11393l2.9811-0.68234c0.60278-0.10882 1.0553-0.60424 1.1013-1.2058-0.04908-0.59524-0.49597-1.0849-1.0918-1.1966l-2.9337-0.79453c-0.06969-0.0096-0.11962-0.071174-0.11393-0.14019-0.0014-0.06771 0.04652-0.12671 0.11393-0.1402z",
            keywords: ["light","retro"]
        },
        "bulb-filament-alt":{
            path:"m12.211 1.1035c-0.30153 0.0043-0.8125 0.24805-0.8125 0.24805 0-1e-7 -1.6904-0.11814-3.3906 1.3242-1.7002 1.4424-0.95312 4.1387-0.95312 4.1387l2.4336 9.3086c0.12001 0.01046 0.2412 0.018064 0.36133 0.027344 0.37383 0.01991 1.6062 0.089636 2.4102 0.097656 0.89619 0.0089 2.5866-0.049244 2.6875-0.052735 0.02658-0.001699 0.053498-0.004059 0.080078-0.005859l2.4062-9.1836s0.8756-2.6835-0.65625-4.1777c-1.5319-1.4943-3.6582-1.4766-3.6582-1.4766s-0.60668-0.25235-0.9082-0.24805zm2.4395 2.623c0.20456 0.031963 0.378 0.1646 0.43359 0.34961 0.03884 0.11922 0.020646 0.24536-0.052734 0.35156s-0.19465 0.18276-0.33398 0.20898l-3.4648 0.74805c-0.27974 0.074827-0.43945 0.20536-0.43945 0.29883 0 0.093557 0.16163 0.23346 0.46289 0.29883l3.334 0.79492c0.53506 0.13336 0.9043 0.55731 0.9043 1.041 0 0.48371-0.36924 0.90961-0.9043 1.043l-3.9922 0.93555c-0.07639 0.013486-0.13049 0.070962-0.12891 0.13867-0.0065 0.069021 0.049929 0.13103 0.12891 0.14063l3.3242 0.79492c0.67525 0.11163 1.1827 0.60202 1.2383 1.1973-0.05219 0.60161-0.56494 1.0963-1.248 1.2051l-3.3789 0.68164h-0.12891c-0.29706 0.02838-0.56495-0.15782-0.59766-0.41602-0.0327-0.2581 0.18145-0.4892 0.47852-0.51758l3.3574-0.68359c0.27974-0.07473 0.44141-0.20537 0.44141-0.29883s-0.16163-0.23337-0.46289-0.29883l-3.3359-0.73828c-0.54345-0.12765-0.91891-0.55783-0.91406-1.0469-0.0075001-0.48792 0.36997-0.91621 0.91406-1.0371l3.9941-0.93555c0.07639-0.013579 0.12854-0.072916 0.12695-0.14062 0.0026-0.069957-0.048946-0.13092-0.12695-0.14844l-3.3145-0.80469c-0.68504-0.10564-1.1995-0.60197-1.248-1.2051 0.052187-0.60161 0.56494-1.0982 1.248-1.207l3.4746-0.74609c0.07177-0.013322 0.14275-0.014556 0.21094-0.0039063zm-5.3027 13.297c-0.011108 0.24639-0.062815 0.48846-0.15234 0.71875-0.14412 0.40832-0.011179 0.86133 0.33203 1.1309l0.4082 2.5156c0.025824 0.20584 0.12747 0.39377 0.28516 0.53125l0.44727 0.40234 0.083984 0.083984 0.46484 0.54297c0.18286 0.21615 0.45651 0.33924 0.74219 0.33594h0.70117c0.28568 0.003278 0.55738-0.11979 0.74024-0.33594l0.4668-0.54297 0.083984-0.083984 0.44727-0.40234c0.1577-0.13748 0.25934-0.3254 0.28516-0.53125l0.4082-2.4863c0.34321-0.26943 0.47615-0.72264 0.33203-1.1309-0.087815-0.23085-0.13952-0.4745-0.15234-0.7207-0.9494 0.093461-1.8989 0.15039-2.7344 0.15039-1.0658-0.001405-2.1302-0.060858-3.1895-0.17773z",
            keywords: ["light","retro"]
        },
        "bulb-filament-alt-hung":{
            path:"M12.36,23.29c0.3,0,0.81-0.25,0.81-0.25s1.69,0.12,3.39-1.32c1.7-1.44,0.95-4.14,0.95-4.14l-2.43-9.31 c-0.12-0.01-0.24-0.02-0.36-0.03c-0.37-0.02-1.61-0.09-2.41-0.1c-0.9-0.01-2.59,0.05-2.69,0.05c-0.03,0-0.05,0-0.08,0.01l-2.41,9.18 c0,0-0.88,2.68,0.66,4.18c1.53,1.49,3.66,1.48,3.66,1.48S12.06,23.29,12.36,23.29L12.36,23.29z M9.92,20.66 c-0.2-0.03-0.38-0.16-0.43-0.35c-0.04-0.12-0.02-0.25,0.05-0.35c0.07-0.11,0.19-0.18,0.33-0.21L13.34,19 c0.28-0.07,0.44-0.21,0.44-0.3c0-0.09-0.16-0.23-0.46-0.3l-3.33-0.79c-0.54-0.13-0.9-0.56-0.9-1.04c0-0.48,0.37-0.91,0.9-1.04 l3.99-0.94c0.08-0.01,0.13-0.07,0.13-0.14c0.01-0.07-0.05-0.13-0.13-0.14l-3.32-0.79c-0.68-0.11-1.18-0.6-1.24-1.2 c0.05-0.6,0.56-1.1,1.25-1.21l3.38-0.68h0.13c0.3-0.03,0.56,0.16,0.6,0.42c0.03,0.26-0.18,0.49-0.48,0.52l-3.36,0.68 c-0.28,0.07-0.44,0.21-0.44,0.3s0.16,0.23,0.46,0.3l3.34,0.74c0.54,0.13,0.92,0.56,0.91,1.05c0.01,0.49-0.37,0.92-0.91,1.04 l-3.99,0.94c-0.08,0.01-0.13,0.07-0.13,0.14c0,0.07,0.05,0.13,0.13,0.15l3.31,0.8c0.69,0.11,1.2,0.6,1.25,1.21 c-0.05,0.6-0.56,1.1-1.25,1.21l-3.47,0.75C10.06,20.67,9.99,20.67,9.92,20.66L9.92,20.66z M15.23,7.37 c0.01-0.25,0.06-0.49,0.15-0.72c0.14-0.41,0.01-0.86-0.33-1.13L14.64,3c-0.03-0.21-0.13-0.39-0.29-0.53l-0.45-0.4l-0.08-0.08 l-0.46-0.54C13.17,1.22,12.9,1.1,12.62,1.1h-0.7c-0.29,0-0.56,0.12-0.74,0.34l-0.47,0.54l-0.08,0.08l-0.45,0.4 C10.02,2.61,9.92,2.79,9.89,3L9.48,5.49C9.14,5.76,9.01,6.21,9.15,6.62C9.24,6.85,9.29,7.09,9.3,7.34c0.95-0.09,1.9-0.15,2.73-0.15 C13.1,7.19,14.17,7.25,15.23,7.37L15.23,7.37z",
            keywords: ["light","retro"]
        },
        "bulb-filament-candle":{
            path:"M11.9,13.9c-1.3,0-3.2-0.1-4.6-0.5c0,0,0,0.1,0,0.1c0,2.3,0.7,3.9,1.6,4.8c0.8,0.1,1.8,0.2,3,0.2c1.2,0,2.2-0.1,3-0.2c0.9-0.9,1.6-2.5,1.6-4.8c0,0,0-0.1,0-0.1C15.1,13.8,13.2,13.9,11.9,13.9z M9.6,19.4l0.4,2.3c0,0.2,0.1,0.3,0.2,0.4l0.4,0.3c0,0,0,0,0.1,0.1l0.4,0.4c0.1,0.2,0.4,0.3,0.6,0.3h0.6c0.2,0,0.5-0.1,0.6-0.3l0.4-0.4c0,0,0,0,0.1-0.1l0.4-0.3c0.1-0.1,0.2-0.3,0.2-0.4l0.4-2.3c-0.8,0.1-1.7,0.1-2.3,0.1S10.4,19.5,9.6,19.4z M13,12.4c0.2-0.1,0.4-0.2,0.4-0.3c0-0.1-0.2-0.2-0.4-0.3l-3-0.6c-0.5-0.1-0.8-0.5-0.9-1c0-0.5,0.3-0.9,0.8-1.1L13.3,8c0.1,0,0.1-0.1,0.1-0.1c0-0.1-0.1-0.1-0.1-0.1l-2-0.4l-1-0.2C9.8,7,9.3,6.5,9.2,5.9c0-0.6,0.4-1.1,1-1.3l3-0.9c0.3-0.1,0.5,0.1,0.6,0.3c0,0.1,0,0.2,0,0.4s-0.2,0.2-0.3,0.2l-3,0.9c-0.2,0.1-0.4,0.2-0.4,0.3c0,0.1,0.2,0.2,0.4,0.3l3,0.7c0.5,0.1,0.8,0.5,0.8,1c0,0.5-0.3,0.9-0.7,1.1L10.2,10c-0.1,0-0.1,0.1-0.1,0.1c0,0.1,0.1,0.1,0.1,0.1l3,0.7c0.6,0.1,1.1,0.6,1.1,1.1c0,0.3-0.1,0.6-0.3,0.8c1.1-0.1,1.9-0.2,2.5-0.4C16.2,7.6,13.7,1,11.9,1c-1.7,0-4.3,6.7-4.6,11.5c0.8,0.2,2.1,0.4,3.7,0.5L13,12.4z",
            keywords: ["light","retro"]
        },
        "bulb-filament-hung":{
            path:"M15.27,7.04c0.01-0.25,0.06-0.49,0.15-0.72c0.14-0.41,0.01-0.86-0.33-1.13l-0.41-2.49 c-0.03-0.21-0.13-0.4-0.28-0.53l-0.45-0.4l-0.09-0.08L13.4,1.15c-0.18-0.22-0.45-0.34-0.74-0.34h-0.7c-0.29,0-0.56,0.12-0.74,0.34 l-0.47,0.54l-0.09,0.08l-0.45,0.4C10.06,2.31,9.96,2.5,9.94,2.71L9.53,5.22C9.18,5.49,9.05,5.94,9.2,6.35 c0.09,0.23,0.14,0.47,0.15,0.72c1.06-0.12,2.12-0.18,3.19-0.18C13.37,6.9,14.32,6.95,15.27,7.04z M19.91,15.79 c0-1.31-0.34-2.6-1.01-3.74l-0.1-0.16c-0.09-0.15-0.19-0.3-0.29-0.44c-1.29-1.85-2.34-2.25-2.99-3.45 c-0.98-0.11-1.97-0.16-2.95-0.16c-1.16,0-2.31,0.07-3.46,0.21c-0.65,1.16-1.69,1.58-2.96,3.4c-0.1,0.14-0.2,0.29-0.29,0.44 l-0.1,0.16c-1.6,2.72-1.3,6.14,0.75,8.55c2.05,2.41,5.42,3.3,8.42,2.22C17.91,21.76,19.91,18.94,19.91,15.79L19.91,15.79z M14.21,15.26c0.47,0.13,0.8,0.56,0.8,1.04c0,0.48-0.33,0.91-0.8,1.04l-2.94,0.79c-0.27,0.07-0.41,0.21-0.41,0.3 c0,0.09,0.14,0.22,0.39,0.3l3.06,0.75c0.12,0.03,0.23,0.1,0.29,0.21c0.06,0.11,0.08,0.23,0.05,0.35c-0.07,0.25-0.32,0.4-0.57,0.35 l-3.07-0.75c-0.6-0.11-1.06-0.6-1.1-1.21c0.04-0.6,0.5-1.1,1.1-1.21l2.92-0.8c0.07-0.02,0.12-0.08,0.11-0.15 c0-0.07-0.05-0.13-0.11-0.14l-3.52-0.93c-0.48-0.12-0.81-0.55-0.81-1.04c0-0.49,0.33-0.92,0.81-1.05l2.94-0.74 c0.27-0.07,0.41-0.21,0.41-0.3s-0.14-0.22-0.39-0.3l-2.96-0.68c-0.26-0.03-0.45-0.26-0.42-0.52c0.03-0.26,0.26-0.44,0.53-0.42h0.11 l2.98,0.68c0.6,0.11,1.06,0.6,1.1,1.21c-0.05,0.6-0.5,1.08-1.09,1.2l-2.93,0.79c-0.07,0.01-0.12,0.07-0.11,0.14 c0,0.07,0.05,0.13,0.11,0.14L14.21,15.26z",
            keywords: ["light","retro"]
        },
        "bulb-flood":{
            path:"M 6.128906 7.5625 C 7.664062 8.027344 9.878906 8.25 12 8.25 C 14.121094 8.25 16.335938 8.027344 17.871094 7.5625 L 15.15625 10.773438 C 14.894531 11.082031 14.746094 11.46875 14.734375 11.875 L 14.625 15.710938 C 14.613281 16.097656 14.308594 16.410156 13.921875 16.4375 C 13.332031 16.476562 12.691406 16.5 12 16.5 C 11.308594 16.5 10.671875 16.476562 10.078125 16.4375 C 9.691406 16.410156 9.386719 16.097656 9.375 15.710938 L 9.265625 11.875 C 9.253906 11.46875 9.105469 11.082031 8.839844 10.773438 Z M 18.75 4.988281 L 18.75 5.703125 C 18.75 5.96875 18.703125 6.226562 18.613281 6.472656 C 17.664062 6.957031 15.40625 7.5 12 7.5 C 8.59375 7.5 6.335938 6.957031 5.386719 6.472656 C 5.296875 6.226562 5.25 5.96875 5.25 5.703125 L 5.25 4.988281 C 5.25 4.855469 5.296875 4.71875 5.386719 4.589844 C 6.007812 3.683594 8.738281 3 12 3 C 15.726562 3 18.75 3.890625 18.75 4.988281 Z M 9.75 17.148438 C 10.53125 17.222656 11.390625 17.25 12 17.25 C 12.609375 17.25 13.46875 17.222656 14.25 17.148438 L 13.875 19.476562 C 13.855469 19.640625 13.773438 19.792969 13.648438 19.90625 L 13.300781 20.226562 C 13.277344 20.246094 13.253906 20.269531 13.234375 20.292969 L 12.863281 20.730469 C 12.722656 20.902344 12.503906 21 12.273438 21 L 11.726562 21 C 11.496094 21 11.277344 20.902344 11.136719 20.730469 L 10.765625 20.292969 C 10.746094 20.269531 10.722656 20.246094 10.699219 20.226562 L 10.351562 19.90625 C 10.226562 19.792969 10.144531 19.640625 10.125 19.476562 Z M 9.75 17.148438 ",
            keywords: ["light","par38"]
        },
        "bulb-golfball-e14":{
            path:"M12.3,6.2c2.9,0,4.9,0.1,6.4,0.2c-0.1-2.8-1.1-5.6-6.7-5.6C6.4,0.7,5.4,3.7,5.3,6.4C7,6.3,9.3,6.2,12.3,6.2z M12.3,7.2c-3,0-5.3,0.1-7,0.3c0.2,2.2,1.3,5.4,3.1,7.5c0.3,0.4,0.6,0.7,0.9,1c0,0,0.6,0.2,2.7,0.2s2.7-0.2,2.7-0.2 c0.3-0.3,0.6-0.6,0.9-1c1.8-2.1,2.9-5.4,3.1-7.6C17.2,7.3,15.2,7.2,12.3,7.2z M15,17c-0.9,0.1-1.9,0.2-2.7,0.2c-1.1,0-2.1-0.1-3.2-0.2c0,0.2-0.1,0.5-0.2,0.7c-0.1,0.4,0,0.9,0.3,1.1l0.4,2.5 c0,0.2,0.1,0.4,0.3,0.5l0.4,0.4l0.1,0.1l0.5,0.5c0.2,0.2,0.5,0.3,0.7,0.3h0.7c0.3,0,0.6-0.1,0.7-0.3l0.5-0.5l0.1-0.1l0.4-0.4 c0.2-0.1,0.3-0.3,0.3-0.5l0.4-2.5c0.3-0.3,0.5-0.7,0.3-1.1C15,17.5,15,17.3,15,17z",
            keywords: ["light"]
        },
        "bulb-group":{
            path:"M4.78,16.82111l.348,1.89941a.64223.64223,0,0,0,.20819.40033l.32636.29578a.77377.77377,0,0,1,.06189.06433l.34405.40674a.71544.71544,0,0,0,.54736.24914h.51044a.716.716,0,0,0,.54822-.24914l.3432-.40674a.67124.67124,0,0,1,.06189-.06433l.32635-.29578a.65108.65108,0,0,0,.209-.40033l.35046-1.89941c-.72583.06994-1.52484.0957-2.09228.0957C6.30481,16.91681,5.50659,16.89105,4.78,16.82111Z M20.82245,2.15631C19.29437.75043,15.17322.84692,14.91443.84692c-.25726,0-4.37836-.09649-5.90723,1.30939-1.43078,1.31586-.12781,3.73773.30945,4.6026A20.74236,20.74236,0,0,0,14.91443,7.41a20.75084,20.75084,0,0,0,5.5993-.65112C20.95105,5.894,22.25238,3.47217,20.82245,2.15631Z M9.16486,8.747c-.06513-.22266-.13428-.447-.20661-.67121-.2074-.56506-.4035-1.04095-.4035-1.04095a9.07527,9.07527,0,0,1-.9903-2.96362c-.37622-.01447-.64306-.00965-.69372-.00965-.18488,0-3.12842-.07074-4.22.96216-1.02167.96619-.09247,2.74579.22021,3.3808a14.37025,14.37025,0,0,0,3.99976.47906A18.15305,18.15305,0,0,0,9.16486,8.747Z M9.376,9.50281a19.56279,19.56279,0,0,1-2.5055.17041,17.49736,17.49736,0,0,1-3.56811-.35529,20.032,20.032,0,0,1,.99512,5.91284.63426.63426,0,0,0,.15673.44373l.28376.32471a18.22668,18.22668,0,0,0,2.1325.11816,18.22119,18.22119,0,0,0,2.13172-.11816l.28454-.32471a.633.633,0,0,0,.156-.44373,17.82957,17.82957,0,0,1,.40918-3.64929C9.72241,10.91675,9.56567,10.219,9.376,9.50281Z M12.10535,18.53467l.46942,2.91382a.86417.86417,0,0,0,.2821.53778l.43732.39789a.83428.83428,0,0,1,.08276.086l.46222.54737a.96436.96436,0,0,0,.73706.33441h.68567a.967.967,0,0,0,.73712-.33441l.46216-.54737a.82675.82675,0,0,1,.082-.086l.43811-.39789a.86312.86312,0,0,0,.28131-.53778l.46942-2.91382c-.97662.09326-2.05053.12866-2.81329.12866C14.15668,18.66333,13.082,18.62793,12.10535,18.53467Z M14.91473,8.34735a25.36414,25.36414,0,0,1-5.191-.51849,29.20812,29.20812,0,0,1,1.4477,8.60644.91865.91865,0,0,0,.22747.64466l.41395.47345a26.50885,26.50885,0,0,0,3.10192.172,26.49865,26.49865,0,0,0,3.10193-.172L18.4306,17.08a.9193.9193,0,0,0,.22827-.64466,29.18028,29.18028,0,0,1,1.4477-8.60644A25.3662,25.3662,0,0,1,14.91473,8.34735Z",
            keywords: ["light","sultan"]
        },
        "bulb-group-bollard":{
            path:"M19.65,9.31c0,0.62-1.68,1.12-3.75,1.12s-3.75-0.5-3.75-1.12V6.16c0-0.18,0.2-0.28,0.35-0.18c0.6,0.38,1.89,0.71,3.4,0.71s2.8-0.33,3.4-0.71c0.15-0.1,0.35,0,0.35,0.18V9.31z M13.91,3.89c1.2-0.28,3.04-0.28,4.16,0c1.14,0.29,1.12,0.76-0.09,1.06c-1.23,0.31-3.19,0.31-4.32,0C12.55,4.65,12.68,4.18,13.91,3.89z M19.15,3.29c-0.83-0.24-1.94-0.36-3.07-0.36c-1.12,0-2.27,0.12-3.16,0.36c-0.99,0.26-1.51,0.62-1.51,0.98V19.7c0,0.3,0.38,0.6,1.14,0.84c0.86,0.26,2.01,0.4,3.19,0.4c1.18,0,2.37-0.14,3.29-0.4s1.38-0.61,1.38-0.95V4.17C20.4,3.85,19.98,3.54,19.15,3.29z M9.51,3.08L9.51,3.08C8.9,2.91,8.07,2.81,7.19,2.81c-0.88,0-1.72,0.1-2.38,0.27C4.03,3.29,3.6,3.59,3.6,3.93v11.44 c0,0.21,0.16,0.5,0.93,0.74c0.64,0.19,1.49,0.3,2.4,0.3c0.9,0,1.8-0.11,2.48-0.3c0.73-0.21,1.11-0.49,1.11-0.82V3.85 C10.53,3.54,10.18,3.28,9.51,3.08z M9.72,5.33v2.34c0,0.3-1.01,0.71-2.66,0.71S4.41,7.96,4.41,7.67V5.33c0-0.02,0.01-0.03,0.02-0.03 c0,0,0.01-0.01,0.02-0.01c0.01,0,0.02,0,0.03,0.01c0.51,0.33,1.55,0.55,2.59,0.55S9.14,5.62,9.65,5.3c0.02-0.02,0.04-0.01,0.05,0 C9.72,5.3,9.72,5.32,9.72,5.33z M8.64,3.77C9.08,3.88,9.16,4,9.16,4.03c0,0.04-0.11,0.17-0.59,0.29c-0.89,0.22-2.33,0.22-3.14,0 C5.05,4.21,4.96,4.1,4.96,4.07c0-0.03,0.11-0.18,0.65-0.3C6.48,3.57,7.83,3.57,8.64,3.77z",
            keywords: ["calla","exterior","light"]
        },
        "bulb-group-bollard-3":{
            path:"M22.46,9.44c0,0.62-1.68,1.12-3.75,1.12s-3.75-0.5-3.75-1.12V6.29c0-0.18,0.2-0.28,0.35-0.18c0.6,0.38,1.89,0.71,3.4,0.71 s2.8-0.33,3.4-0.71c0.15-0.1,0.35,0,0.35,0.18V9.44z M16.71,4.02c1.2-0.28,3.04-0.28,4.16,0c1.14,0.29,1.12,0.76-0.09,1.06 c-1.23,0.31-3.19,0.31-4.32,0C15.35,4.78,15.49,4.3,16.71,4.02z M21.95,3.42c-0.83-0.24-1.94-0.36-3.07-0.36 c-1.12,0-2.27,0.12-3.16,0.36c-0.99,0.26-1.51,0.62-1.51,0.98v15.42c0,0.3,0.38,0.6,1.14,0.84c0.86,0.26,2.01,0.4,3.19,0.4 c1.18,0,2.37-0.14,3.29-0.4s1.38-0.61,1.38-0.95V4.3C23.21,3.98,22.78,3.66,21.95,3.42 M12.44,3.21L12.44,3.21c-0.61-0.18-1.43-0.27-2.32-0.27c-0.88,0-1.72,0.1-2.38,0.27C6.96,3.41,6.53,3.72,6.53,4.06V15.5 c0,0.21,0.16,0.5,0.93,0.74c0.64,0.19,1.49,0.3,2.4,0.3c0.9,0,1.8-0.11,2.48-0.3c0.73-0.21,1.11-0.49,1.11-0.82V3.98 C13.46,3.67,13.12,3.41,12.44,3.21z M12.65,5.45v2.34c0,0.3-1.01,0.71-2.66,0.71S7.34,8.09,7.34,7.79V5.45 c0-0.02,0.01-0.03,0.02-0.03c0,0,0.01-0.01,0.02-0.01c0.01,0,0.02,0,0.03,0.01C7.92,5.75,8.96,5.97,10,5.97s2.08-0.22,2.59-0.55 c0.02-0.02,0.04-0.01,0.05,0C12.65,5.43,12.65,5.45,12.65,5.45z M11.57,3.89C12.01,4,12.1,4.13,12.1,4.15 c0,0.04-0.11,0.17-0.59,0.29c-0.89,0.22-2.33,0.22-3.14,0C7.98,4.34,7.9,4.23,7.9,4.2c0-0.03,0.11-0.18,0.65-0.3 C9.41,3.69,10.77,3.69,11.57,3.89z M5.07,3.19l-0.01,0c-0.45-0.13-1.04-0.2-1.68-0.2c-0.64,0-1.25,0.07-1.73,0.2c-0.61,0.16-0.93,0.4-0.93,0.69v8.25 c0,0.25,0.24,0.46,0.73,0.61c0.47,0.14,1.09,0.22,1.75,0.22c0.65,0,1.31-0.08,1.81-0.22c0.57-0.16,0.86-0.39,0.86-0.67V3.81 C5.86,3.55,5.6,3.34,5.07,3.19z M5.13,4.96v1.61C5.13,6.69,4.5,7,3.29,7S1.45,6.69,1.45,6.56v-1.6c0.4,0.22,1.12,0.37,1.84,0.37 C4.01,5.32,4.73,5.18,5.13,4.96z M5.13,4.88C5.13,4.88,5.13,4.88,5.13,4.88h0.08H5.13z M1.88,3.97c0.04-0.03,0.15-0.09,0.39-0.15 c0.61-0.14,1.57-0.14,2.15,0c0.18,0.04,0.26,0.09,0.3,0.12C4.67,3.97,4.57,4.02,4.36,4.07c-0.63,0.16-1.65,0.16-2.23,0 C1.99,4.03,1.91,3.99,1.88,3.97z",
            keywords: ["calla","exterior","light"]
        },
        "bulb-group-candle":{
            path:"M19.83356,12.5108C19.53583,7.60065,16.93921.84552,15.17719.84552c-1.76685,0-4.35865,6.75513-4.65638,11.66528a17.98484,17.98484,0,0,0,4.65638.5174A17.98481,17.98481,0,0,0,19.83356,12.5108 M12.83435,19.4856l.3905,2.32812a.66559.66559,0,0,0,.23426.42957l.36609.31726a.87771.87771,0,0,1,.06829.0683l.38562.43927a.80056.80056,0,0,0,.61011.26843h.57593a.80056.80056,0,0,0,.61011-.26843l.38562-.43927a.88835.88835,0,0,1,.06829-.0683l.36609-.31726a.66559.66559,0,0,0,.23426-.42957L17.52,19.4856c-.81024.07318-1.70831.10247-2.34283.10247S13.64459,19.55878,12.83435,19.4856Z M15.17719,13.96527a21.05106,21.05106,0,0,1-4.68561-.4978v.122A6.776,6.776,0,0,0,12.112,18.45081a21.51759,21.51759,0,0,0,3.06519.20013,21.51691,21.51691,0,0,0,3.06518-.20013,6.776,6.776,0,0,0,1.62048-4.86133v-.122A21.05191,21.05191,0,0,1,15.17719,13.96527Z M4.94635,17.3363l.3056,1.82245a.521.521,0,0,0,.18341.33618l.28656.24836a.70007.70007,0,0,1,.05347.05346l.30182.34387a.62676.62676,0,0,0,.4776.21015h.45081a.6267.6267,0,0,0,.4776-.21015l.30181-.34387a.7019.7019,0,0,1,.05347-.05346l.28656-.24836a.521.521,0,0,0,.18341-.33618l.3056-1.82245c-.63421.05732-1.33715.0802-1.83386.0802C6.28357,17.4165,5.58057,17.39362,4.94635,17.3363Z M6.78021,2.74542c-1.383,0-3.4118,5.28772-3.64483,9.13123a14.07521,14.07521,0,0,0,3.64483.405,16.20513,16.20513,0,0,0,2.773-.21869,24.64931,24.64931,0,0,1,.45746-2.96088C9.29572,5.89679,7.84491,2.74542,6.78021,2.74542Z M9.49121,12.81476a18.86744,18.86744,0,0,1-2.711.20044,16.47507,16.47507,0,0,1-3.66778-.38971V12.721a5.30388,5.30388,0,0,0,1.26843,3.8053,16.83978,16.83978,0,0,0,2.39935.15667,16.84,16.84,0,0,0,2.39936-.15667,3.4927,3.4927,0,0,0,.53918-.7229,10.66076,10.66076,0,0,1-.22754-2.21357Z",
            keywords: ["light","retro"]
        },
        "bulb-group-candle-lightstrip":{
            path:"M16.18,12.68c1.88,0,3.28-0.22,4.16-0.46c-0.27-4.38-2.58-10.42-4.16-10.42c-1.58,0-3.89,6.03-4.16,10.42 C12.9,12.47,14.3,12.68,16.18,12.68z M14.09,18.45l0.35,2.08c0.02,0.15,0.09,0.28,0.21,0.38l0.33,0.28c0.02,0.02,0.04,0.04,0.06,0.06l0.34,0.39 c0.13,0.15,0.33,0.24,0.54,0.24h0.51c0.21,0,0.41-0.09,0.54-0.24l0.34-0.39c0.02-0.02,0.04-0.04,0.06-0.06l0.33-0.28 c0.12-0.1,0.19-0.24,0.21-0.38l0.35-2.08c-0.72,0.07-1.53,0.09-2.09,0.09C15.62,18.54,14.81,18.52,14.09,18.45z M16.18,13.52c-1.15,0-2.89-0.11-4.18-0.44c0,0.03,0,0.07,0,0.11c0,2.07,0.64,3.54,1.45,4.34 c0.75,0.11,1.66,0.18,2.74,0.18c1.07,0,1.99-0.07,2.74-0.18c0.81-0.8,1.45-2.27,1.45-4.34c0-0.03,0-0.07,0-0.11 C19.07,13.41,17.34,13.52,16.18,13.52z M4.19,7.57h7.66c0.32-1.18,0.72-2.36,1.18-3.39H4.19c-0.31,0-0.57,0.25-0.57,0.57V7 C3.62,7.32,3.87,7.57,4.19,7.57z M10.97,5.31c0.31,0,0.57,0.25,0.57,0.57s-0.25,0.57-0.57,0.57c-0.31,0-0.57-0.25-0.57-0.57 S10.65,5.31,10.97,5.31z M8.14,5.31c0.31,0,0.57,0.25,0.57,0.57S8.45,6.44,8.14,6.44c-0.31,0-0.57-0.25-0.57-0.57 S7.83,5.31,8.14,5.31z M5.32,5.31c0.31,0,0.57,0.25,0.57,0.57S5.63,6.44,5.32,6.44C5,6.44,4.75,6.19,4.75,5.87S5,5.31,5.32,5.31z M6.45,14.35c-2.26,0-2.83-1.7-2.83-2.26v2.83c0,1.56,1.27,2.83,2.83,2.83h5.87c-0.66-0.87-1.09-2.04-1.24-3.39 H6.45z M7.01,16.61c-0.31,0-0.57-0.25-0.57-0.57c0-0.31,0.25-0.57,0.57-0.57c0.31,0,0.57,0.25,0.57,0.57 C7.58,16.36,7.32,16.61,7.01,16.61z M9.84,16.61c-0.31,0-0.57-0.25-0.57-0.57c0-0.31,0.25-0.57,0.57-0.57 c0.31,0,0.57,0.25,0.57,0.57C10.4,16.36,10.15,16.61,9.84,16.61z M4.18,11.51c0.31,1.46,1.75,2.39,3.21,2.08l3.62-0.78l0.01-0.48l0.01-0.16c0.06-0.97,0.24-2.16,0.52-3.4 l-6.51,1.4C4.43,10.3,4.04,10.9,4.18,11.51z M8.89,10.74c0.3-0.06,0.61,0.13,0.67,0.43c0.06,0.31-0.13,0.61-0.43,0.67 c-0.31,0.06-0.61-0.13-0.67-0.43C8.39,11.11,8.59,10.81,8.89,10.74z M6.13,11.34c0.31-0.06,0.61,0.13,0.67,0.44 c0.06,0.3-0.13,0.6-0.43,0.67c-0.31,0.06-0.61-0.13-0.67-0.43C5.63,11.7,5.82,11.4,6.13,11.34z",
            keywords: ["light"]
        },
        "bulb-group-ceiling-round":{
            path:"M18.1,11.9c1.6-0.4,2.6-1,2.8-1.7c0.1-0.1,0.1-0.3,0.1-0.4V4.3c0-0.1,0-0.3-0.1-0.4c-0.3-0.7-1.3-1.3-3-1.7 c-3.8-1-9.8-1-13.6,0c-1.7,0.5-2.7,1-3,1.7C1.3,4,1.3,4.1,1.3,4.3v3.3c0,0,0,2.5,0.1,2.7c0.3,0.7,1.2,1.2,2.8,1.7 c1.9,0.5,4.4,0.8,7,0.8C13.7,12.6,16.2,12.4,18.1,11.9z M3.4,8.9c0-0.3,0.6-0.7,2.2-1.1c1.5-0.4,3.5-0.5,5.6-0.5c2,0,4,0.2,5.6,0.5 c1.6,0.4,2.2,0.8,2.2,1.1c0,0.3-0.5,0.7-2.1,1.1c-3.1,0.8-8.2,0.8-11.4,0C3.9,9.7,3.4,9.2,3.4,8.9z M23.3,15.2c-0.2-0.5-1-1-2.3-1.3c-2.9-0.8-7.5-0.8-10.4,0c-1.3,0.3-2.1,0.8-2.3,1.3c0,0.1-0.1,0.2-0.1,0.3V18 c0,0,0,1.9,0.1,2.1c0.2,0.5,0.9,0.9,2.2,1.3c1.5,0.4,3.4,0.6,5.4,0.6c1.9,0,3.9-0.2,5.4-0.6c1.2-0.3,2-0.8,2.2-1.3 c0-0.1,0.1-0.2,0.1-0.3v-4.3C23.3,15.4,23.3,15.3,23.3,15.2z M20.1,19.9c-2.4,0.6-6.3,0.6-8.7,0c-1.2-0.3-1.6-0.6-1.6-0.8 c0-0.2,0.5-0.6,1.7-0.9c1.2-0.3,2.7-0.4,4.3-0.4c1.5,0,3.1,0.1,4.3,0.4c1.3,0.3,1.7,0.6,1.7,0.9C21.7,19.3,21.3,19.7,20.1,19.9z",
            keywords: ["aurelle","devere","enrave","light"]
        },
        "bulb-group-ceiling-square":{
            path:"M11.7,7.9L7.6,9.4c-0.2,0.1-0.5,0.1-0.7,0L2.8,7.9c-0.2-0.1-0.1-0.3,0-0.3l4.1-1.4c0.2-0.1,0.5-0.1,0.7,0l4.1,1.4 C11.9,7.6,11.9,7.9,11.7,7.9 M13.8,5.1L7.6,2.7c-0.2-0.1-0.5-0.1-0.7,0L0.7,5.1C0.5,5.2,0.4,5.4,0.4,5.6v2.1c0,0.2,0.1,0.4,0.3,0.5 l6.2,2.4c0.2,0.1,0.5,0.1,0.7,0l6.2-2.4c0.2-0.1,0.3-0.3,0.3-0.5V5.6C14.1,5.4,14,5.2,13.8,5.1 M20.4,16.6l-5.4,2c-0.3,0.1-0.6,0.1-0.9,0l-5.4-2c-0.2-0.1-0.2-0.4,0-0.5l5.4-1.9c0.3-0.1,0.6-0.1,0.9,0l5.4,1.9 C20.6,16.2,20.6,16.5,20.4,16.6 M23.2,12.8l-8.1-3.1c-0.3-0.1-0.6-0.1-0.9,0L6,12.8c-0.2,0.1-0.4,0.4-0.4,0.7v2.8 c0,0.3,0.2,0.6,0.4,0.7l8.1,3.1c0.3,0.1,0.6,0.1,0.9,0l8.1-3.1c0.2-0.1,0.4-0.4,0.4-0.7v-2.8C23.6,13.2,23.4,12.9,23.2,12.8",
            keywords: ["aurelle","light","surimu"]
        },
        "bulb-group-centura":{
            path:"M17,21.5c2.2,0,3.9-1,3.9-2.4s-1.7-2.4-3.9-2.4c-2.2,0-3.9,1-3.9,2.4S14.8,21.5,17,21.5z M14.9,17.8c0.1-0.3,0.5-0.4,1-0.5 H16c0.6,0,1.2,0.2,1.9,0.5s1.2,0.8,1.6,1.3c0.3,0.4,0.4,0.8,0.3,1.1c-0.1,0.3-0.5,0.4-1,0.5c-0.6,0-1.3-0.2-2-0.5s-1.2-0.8-1.6-1.3 C14.8,18.5,14.7,18.1,14.9,17.8z M22.9,14.3h-0.8l-0.2,1c0,0.2-0.1,0.3-0.1,0.5h0.7l-1,6.3h-9.2l-1-5.5h-0.6l1,5.9c0,0.2,0.2,0.2,0.3,0.2h9.7 c0.2,0,0.3-0.1,0.3-0.2l1.1-6.9v-0.1v-0.9C23.2,14.5,23.1,14.3,22.9,14.3z M22.4,1.3H1.6c-0.3,0-0.5,0.3-0.5,0.6v1.5l0,0v0.1l2.1,11.9c0,0.3,0.3,0.4,0.5,0.4h16.8c0.3,0,0.5-0.2,0.5-0.4l1.9-11.9V3.4 l0,0V1.9C22.9,1.6,22.7,1.3,22.4,1.3z M20,14.8H4.1L2.2,3.9h19.6L20,14.8z M12.2,13.8c3.8,0,6.7-1.8,6.7-4.1s-3-4.1-6.7-4.1 c-3.8,0-6.7,1.8-6.7,4.1S8.4,13.8,12.2,13.8z M8.5,7.4c0.2-0.5,0.9-0.7,1.8-0.8h0.1c1,0,2.1,0.3,3.3,0.9s2.1,1.4,2.7,2.2 c0.5,0.7,0.7,1.4,0.5,1.9s-0.9,0.7-1.8,0.8c-1,0-2.2-0.3-3.4-0.9S9.6,10.1,9,9.3C8.4,8.6,8.2,7.9,8.5,7.4z",
            keywords: ["ceiling","light"]
        },
        "bulb-group-centura-round":{
            path:"M5.2,10.1C2.8,9.8,1,8.4,1,6.8c0-1.9,2.5-3.4,5.6-3.4s5.6,1.5,5.6,3.4c0,0.2,0,0.3-0.1,0.5 c0.2,0,0.5,0,0.7-0.1c0-0.1,0-0.3,0-0.4V5.9c0-1-0.7-2-1.9-2.7C9.7,2.4,8.2,2,6.6,2C4.9,2,3.4,2.4,2.2,3.1C1,3.9,0.3,4.9,0.3,5.9 v0.9c0,1.1,0.7,2.2,1.9,3c0.7,0.5,1.6,0.8,2.5,1C4.8,10.5,5,10.3,5.2,10.1z M5.3,5.1C5.3,5.1,5.3,5.1,5.3,5.1c0.7,0,1.3,0.2,2,0.5C8.1,6,8.8,6.5,9.2,7c0.2,0.3,0.3,0.5,0.3,0.8 c0.4-0.1,0.8-0.2,1.2-0.3c0-0.1,0.1-0.3,0.1-0.5c0-1.5-1.9-2.6-4.3-2.6S2.2,5.6,2.2,7c0,1.3,1.6,2.4,3.7,2.6 c0.2-0.2,0.5-0.3,0.7-0.5c0.3-0.2,0.5-0.3,0.8-0.5C7.1,8.5,6.6,8.4,6.2,8.2C5.5,7.8,4.8,7.3,4.5,6.8C4.1,6.3,4,5.9,4.2,5.6 C4.3,5.3,4.7,5.1,5.3,5.1z M14,11.9c-3.8,0-6.7,1.8-6.7,4c0,2.3,2.9,4,6.7,4c3.8,0,6.7-1.8,6.7-4C20.6,13.7,17.7,11.9,14,11.9z M18.6,17.8c-0.2,0.5-0.9,0.7-1.8,0.8c-1,0-2.2-0.3-3.4-0.9c-1.2-0.6-2.1-1.3-2.7-2.2c-0.5-0.7-0.7-1.4-0.4-1.9 c0.2-0.5,0.9-0.7,1.8-0.8c0,0,0.1,0,0.1,0c1,0,1.9,0.3,3,0.9c1.2,0.6,2.3,1.3,2.9,2.2C18.6,16.7,18.8,17.4,18.6,17.8z M20.8,9.9c-1.9-1.1-4.3-1.8-6.8-1.8S9.1,8.8,7.2,9.9c-1.9,1.2-2.9,2.7-2.9,4.2v1.4c0,1.8,1,3.4,2.9,4.6 C9,21.4,11.4,22,14,22c2.6,0,5-0.6,6.8-1.8c1.9-1.2,2.9-2.8,2.9-4.6v-1.4C23.7,12.6,22.6,11.1,20.8,9.9z M14,21 c-4.8,0-8.7-2.4-8.7-5.4c0-3,3.9-5.4,8.7-5.4c4.8,0,8.7,2.4,8.7,5.4C22.7,18.6,18.8,21,14,21z",
            keywords: ["ceiling","light"]
        },
        "bulb-group-classic":{
            path:"M14.38,16.05l0.29,1.83c0.02,0.13,0.08,0.25,0.18,0.34l0.27,0.25c0.02,0.02,0.04,0.03,0.05,0.05l0.29,0.34 c0.11,0.14,0.28,0.21,0.46,0.21h0.43c0.18,0,0.35-0.08,0.46-0.21l0.29-0.34c0.02-0.02,0.03-0.04,0.05-0.05l0.27-0.25 c0.1-0.09,0.16-0.21,0.18-0.34l0.29-1.83c-0.61,0.06-1.29,0.08-1.77,0.08S14.99,16.11,14.38,16.05z M16.15,4.93c-0.43,0-0.83,0.09-1.22,0.21c0.5,0.83,0.8,1.77,0.8,2.74c0,0.21-0.03,0.39-0.05,0.54 c-0.01,0.05-0.02,0.11-0.02,0.19c-0.03,0.23-0.07,0.42-0.11,0.62c-0.01,0.02-0.01,0.05-0.02,0.07l-0.27,0.9c0,0,0,0.01,0,0.01 c0.29,0.01,0.58,0.02,0.9,0.02c2,0,3.36-0.31,4-0.58c0.03-0.14,0.06-0.26,0.08-0.41c0.02-0.16,0.05-0.31,0.05-0.48 C20.28,6.89,18.42,4.93,16.15,4.93z M15.01,10.78c-0.25,0.52-0.53,0.94-0.78,1.33c-0.2,0.29-0.37,0.55-0.5,0.82c0.02,0.08,0.05,0.16,0.06,0.25 c0.08,0.48,0.15,1.16,0.1,1.65c-0.03,0.31,0.21,0.59,0.53,0.62c0.51,0.05,1.09,0.09,1.73,0.09c0.65,0,1.23-0.03,1.73-0.09 c0.31-0.03,0.55-0.31,0.53-0.62c-0.05-0.49,0.02-1.17,0.1-1.65c0.19-1.11,0.97-1.64,1.42-2.82c-1.11,0.35-2.74,0.47-3.79,0.47 C15.82,10.82,15.42,10.8,15.01,10.78z M4.65,9.91c1.41,0.45,3.48,0.59,4.82,0.59s3.41-0.14,4.82-0.59c-0.57,1.51-1.57,2.18-1.81,3.59 c-0.11,0.61-0.19,1.47-0.13,2.1c0.04,0.4-0.27,0.75-0.67,0.79c-0.65,0.07-1.38,0.11-2.21,0.11s-1.56-0.04-2.21-0.11 C6.86,16.35,6.56,16,6.6,15.6c0.06-0.63-0.03-1.49-0.13-2.1C6.23,12.09,5.23,11.42,4.65,9.91z M7.22,17.15 c0.78,0.07,1.64,0.1,2.25,0.1s1.47-0.03,2.25-0.1l-0.38,2.33c-0.02,0.16-0.1,0.32-0.23,0.43l-0.35,0.32 c-0.02,0.02-0.05,0.04-0.07,0.07l-0.37,0.44C10.2,20.9,9.98,21,9.75,21H9.2c-0.23,0-0.45-0.1-0.59-0.27l-0.37-0.44 c-0.02-0.02-0.04-0.05-0.07-0.07l-0.35-0.32c-0.12-0.11-0.21-0.27-0.23-0.43L7.22,17.15z M9.47,3c2.89,0,5.25,2.5,5.25,4.88 c0,0.21-0.04,0.41-0.06,0.61c-0.02,0.19-0.06,0.35-0.1,0.53c-0.82,0.35-2.55,0.74-5.09,0.74S5.2,9.36,4.38,9.01 c-0.04-0.18-0.07-0.34-0.1-0.53c-0.02-0.2-0.06-0.39-0.06-0.61C4.22,5.5,6.58,3,9.47,3z",
            keywords: ["light"]
        },
        "bulb-group-classic-hung":{
            path:"M10.12,7.95L9.82,6.12C9.81,5.99,9.74,5.87,9.65,5.79L9.37,5.53C9.35,5.52,9.34,5.5,9.32,5.48L9.03,5.14 C8.92,5,8.75,4.93,8.57,4.93H8.14C7.95,4.93,7.78,5,7.67,5.14L7.38,5.48C7.37,5.5,7.35,5.52,7.33,5.53L7.06,5.79 c-0.1,0.09-0.16,0.21-0.18,0.34L6.58,7.95C7.2,7.89,7.87,7.87,8.35,7.87S9.51,7.89,10.12,7.95z M8.35,19.07c0.43,0,0.83-0.09,1.22-0.21c-0.5-0.83-0.8-1.77-0.8-2.74c0-0.21,0.03-0.39,0.05-0.54 c0.01-0.05,0.02-0.11,0.02-0.19c0.03-0.23,0.07-0.42,0.11-0.62c0.01-0.02,0.01-0.05,0.02-0.07l0.27-0.9c0,0,0-0.01,0-0.01 c-0.29-0.01-0.58-0.02-0.9-0.02c-2,0-3.36,0.31-4,0.58c-0.03,0.14-0.06,0.26-0.08,0.41c-0.02,0.16-0.05,0.31-0.05,0.48 C4.22,17.11,6.08,19.07,8.35,19.07z M9.49,13.22c0.25-0.52,0.53-0.94,0.78-1.33c0.2-0.29,0.37-0.55,0.5-0.82c-0.02-0.08-0.05-0.16-0.06-0.25 c-0.08-0.48-0.15-1.16-0.1-1.65c0.03-0.31-0.21-0.59-0.53-0.62C9.58,8.5,9,8.46,8.35,8.46c-0.65,0-1.23,0.03-1.73,0.09 C6.3,8.58,6.06,8.86,6.09,9.17c0.05,0.49-0.02,1.17-0.1,1.65c-0.19,1.11-0.97,1.64-1.42,2.82c1.11-0.35,2.74-0.47,3.79-0.47 C8.68,13.18,9.08,13.2,9.49,13.22z M19.85,14.09c-1.41-0.45-3.48-0.59-4.82-0.59s-3.41,0.14-4.82,0.59c0.57-1.51,1.57-2.18,1.81-3.59 c0.11-0.61,0.19-1.47,0.13-2.1c-0.04-0.4,0.27-0.75,0.67-0.79c0.65-0.07,1.38-0.11,2.21-0.11s1.56,0.04,2.21,0.11 c0.4,0.04,0.7,0.39,0.67,0.79c-0.06,0.63,0.03,1.49,0.13,2.1C18.27,11.91,19.27,12.58,19.85,14.09z M17.28,6.85 c-0.78-0.07-1.64-0.1-2.25-0.1s-1.47,0.03-2.25,0.1l0.38-2.33c0.02-0.16,0.1-0.32,0.23-0.43l0.35-0.32 c0.02-0.02,0.05-0.04,0.07-0.07l0.37-0.44C14.3,3.1,14.52,3,14.75,3h0.55c0.23,0,0.45,0.1,0.59,0.27l0.37,0.44 c0.02,0.02,0.04,0.05,0.07,0.07l0.35,0.32c0.12,0.11,0.21,0.27,0.23,0.43L17.28,6.85z M15.03,21c-2.89,0-5.25-2.5-5.25-4.88 c0-0.21,0.04-0.41,0.06-0.61c0.02-0.19,0.06-0.35,0.1-0.53c0.82-0.35,2.55-0.74,5.09-0.74s4.27,0.39,5.09,0.74 c0.04,0.18,0.07,0.34,0.1,0.53c0.02,0.2,0.06,0.39,0.06,0.61C20.28,18.5,17.92,21,15.03,21z",
            keywords: ["light"]
        },
        "bulb-group-filament":{
            path:"M18.13919,17.00312a2.37106,2.37106,0,0,0,.1519.7198,1.00914,1.00914,0,0,1-.33229,1.131l-.40824,2.4865a.847.847,0,0,1-.28482.53278l-.44622.40195-.08545.08419-.46521.54215a.9556.9556,0,0,1-.74054.33649h-.70256a.95553.95553,0,0,1-.74054-.33649L13.62,22.35934l-.08545-.08419-.44622-.40195a.847.847,0,0,1-.28482-.53278l-.40824-2.5145a1.0093,1.0093,0,0,1-.33229-1.1311,2.26749,2.26749,0,0,0,.1519-.7197,29.43947,29.43947,0,0,0,3.19.17756C16.24037,17.15268,17.18979,17.09658,18.13919,17.00312Zm4.6332-8.7494a7.39034,7.39034,0,0,1-1.0065,3.7391l-.10444.15883c-.09494.14956-.18988.29921-.29432.43941-1.2912,1.8508-2.345,2.2528-2.9906,3.4493a27.25206,27.25206,0,0,1-2.9526.15892,28.81423,28.81423,0,0,1-3.4558-.20566c-.6456-1.1591-1.6899-1.5797-2.9621-3.4025-.10443-.1402-.19938-.28985-.29432-.43941l-.10443-.15883a7.38627,7.38627,0,0,1,.74785-8.5548,7.67188,7.67188,0,0,1,8.4233-2.2235,7.4846,7.4846,0,0,1,4.9941,7.0392Zm-5.6965.53278a1.07974,1.07974,0,0,0,0-2.0844l-2.9432-.79463c-.26583-.06537-.40824-.20556-.40824-.29912,0-.09346.14241-.22429.38926-.29912l3.0571-.7478a.45539.45539,0,0,0,.29413-.20762.44279.44279,0,0,0,.04766-.35325.48462.48462,0,0,0-.56964-.34585l-3.0666.7478a1.33511,1.33511,0,0,0-1.1013,1.2058,1.32553,1.32553,0,0,0,1.1013,1.2058l2.9242.8039a.14993.14993,0,0,1,.11393.14956.14078.14078,0,0,1-.11393.14029l-3.5223.93473a1.05921,1.05921,0,0,0-.807,1.0377,1.07772,1.07772,0,0,0,.807,1.0469l2.9432.73844c.26583.06546.40824.20566.40824.29912s-.14241.22439-.38926.29912l-2.9621.68243a.47033.47033,0,1,0,.10443.93473h.11393l2.9811-.68234a1.33512,1.33512,0,0,0,1.1013-1.2058,1.33525,1.33525,0,0,0-1.0918-1.1966l-2.9337-.79453a.13133.13133,0,0,1-.11393-.14019.14061.14061,0,0,1,.11393-.1402 M5.24011,9.77106a.10172.10172,0,0,0,.0882.10858l1.53308.41522A8.3892,8.3892,0,0,1,6.68292,9.303l-1.35461.3595A.10891.10891,0,0,0,5.24011,9.77106Z M5.46063,6.47766c0,.07245.11023.181.3161.23163l.93543.25256A8.35765,8.35765,0,0,1,6.922,5.96228L5.762,6.246C5.57086,6.304,5.46063,6.40527,5.46063,6.47766Z M8.18555,13.16406c-.09864-.13281-.20606-.30029-.3125-.46826l-.10157-.1543c-.04077-.06909-.06555-.14318-.10418-.213-.026.00678-.04785.02179-.07465.02661l-2.30841.52838H5.196a.3642.3642,0,1,1-.08087-.72381l2.21936-.51135c-.081-.183-.15881-.36548-.22613-.552l-1.99329-.50012a.83447.83447,0,0,1-.62488-.81061.82015.82015,0,0,1,.62488-.80352L6.6123,8.58472a8.41553,8.41553,0,0,1,.00763-.887L5.57825,7.41132a1.02642,1.02642,0,0,1-.85279-.93372,1.03393,1.03393,0,0,1,.85279-.93372l1.60754-.392a8.37393,8.37393,0,0,1,1.2367-2.12513A5.93183,5.93183,0,0,0,2.07727,4.79712a5.71935,5.71935,0,0,0-.579,6.62427l.08081.123c.07355.11585.1471.23169.22791.34027.9851,1.4115,1.79376,1.73719,2.2937,2.63471a22.32626,22.32626,0,0,0,2.676.15924,21.11059,21.11059,0,0,0,2.28626-.123c.032-.05945.069-.11041.10363-.16522A11.98606,11.98606,0,0,1,8.18555,13.16406Z M8.87909,15.301c-.73511.07238-1.47028.11578-2.11725.11578a22.79844,22.79844,0,0,1-2.47015-.13745,1.75375,1.75375,0,0,1-.11762.55725.7816.7816,0,0,0,.25733.87585l.3161,1.94709a.65572.65572,0,0,0,.22058.41253l.34552.31128.06616.06519.36023.4198a.73987.73987,0,0,0,.57343.26056h.544a.74017.74017,0,0,0,.57343-.26056l.36023-.4198.06616-.06519.34552-.31128a.65572.65572,0,0,0,.22058-.41253l.3161-1.92536a.78137.78137,0,0,0,.25726-.87579A1.83678,1.83678,0,0,1,8.87909,15.301Z",
            keywords: ["light","retro"]
        },
        "bulb-group-filament-alt":{
            path:"M15.10006.84556a2.73425,2.73425,0,0,0-.82383.25151,5.21092,5.21092,0,0,0-3.43787,1.34266C9.11446,3.90224,9.872,6.63612,9.872,6.63612l2.46752,9.43837c.12169.0106.24457.01831.36637.02772.379.02019,1.62859.09089,2.4438.099.90868.009,2.62266-.04993,2.725-.05347.02695-.00172.05425-.00412.0812-.00594L20.39555,6.8302s.88781-2.72091-.6654-4.23594A5.76179,5.76179,0,0,0,16.021,1.09708a3.41055,3.41055,0,0,0-.92087-.25151Zm2.4735,2.65957a.53321.53321,0,0,1,.43964.35448.39974.39974,0,0,1-.05347.35646.52968.52968,0,0,1-.33864.2119l-3.5131.75847c-.28364.07587-.44557.20823-.44557.303,0,.09486.16388.23671.46934.303l3.38047.806A1.13284,1.13284,0,0,1,18.42914,7.654a1.135,1.135,0,0,1-.91691,1.05754l-4.04785.94859a.14644.14644,0,0,0-.1307.1406.13858.13858,0,0,0,.1307.14259l3.37054.806a1.43385,1.43385,0,0,1,1.25556,1.214,1.43155,1.43155,0,0,1-1.26539,1.2219l-3.426.69114h-.1307a.53643.53643,0,0,1-.606-.42182.49651.49651,0,0,1,.48519-.52479l3.4042-.69312c.28364-.07577.44756-.20823.44756-.303s-.16388-.23662-.46934-.303L13.1476,10.882a1.12513,1.12513,0,0,1-.9268-1.0615A1.10689,1.10689,0,0,1,13.1476,8.769l4.04978-.94859a.14651.14651,0,0,0,.12872-.14258.15315.15315,0,0,0-.12872-.15051l-3.36071-.8159a1.42125,1.42125,0,0,1-1.2654-1.2219,1.43343,1.43343,0,0,1,1.2654-1.22383l3.523-.75649a.63372.63372,0,0,1,.21388-.004ZM12.19694,16.98749a2.29435,2.29435,0,0,1-.15446.72877,1.023,1.023,0,0,0,.33666,1.14666l.41389,2.55067a.85558.85558,0,0,0,.28913.53866l.45351.40794.08515.08516.47132.55054a.97177.97177,0,0,0,.75254.34062h.71094a.96777.96777,0,0,0,.75056-.34062l.47331-.55054.08516-.08516.4535-.40794a.85547.85547,0,0,0,.28914-.53866l.41389-2.521a1.023,1.023,0,0,0,.33666-1.14666,2.41041,2.41041,0,0,1-.15447-.73075c-.96263.09476-1.92537.15249-2.77252.15249a29.84586,29.84586,0,0,1-3.234-.18021Z M5.93567,6.10211c-.2193.05866-.34454.161-.34454.23432s.12677.183.363.23425L8.56805,7.194a.98037.98037,0,0,1,.52454.326l-.16486-.6308a6.65954,6.65954,0,0,1-.19128-1.40625.422.422,0,0,1-.08423.03271Z M4.8515,14.54285c.29309.01556,1.25928.07025,1.88965.07653.70264.007,2.028-.03857,2.10712-.04132l.0628-.00463,1.0138-3.86933L9.25336,8.135a.88943.88943,0,0,1-.68531.69287L5.438,9.5614a.11312.11312,0,0,0-.101.1087.10716.10716,0,0,0,.101.1103l2.60632.62323a1.10873,1.10873,0,0,1,.97089.93872,1.107,1.107,0,0,1-.97852.94482l-2.64917.53442H5.28644a.41474.41474,0,0,1-.46857-.32617.38391.38391,0,0,1,.37518-.40576l2.63233-.53595c.2193-.05859.34607-.16107.34607-.23431,0-.07331-.12671-.183-.36292-.23432l-2.61548-.57879a.8701.8701,0,0,1-.71667-.82087.856.856,0,0,1,.71667-.81311l3.13153-.73352a.11328.11328,0,0,0,.09955-.11023.11843.11843,0,0,0-.09955-.11639L5.72589,7.28125a1.09888,1.09888,0,0,1-.97845-.94482,1.1084,1.1084,0,0,1,.97845-.94635l2.72424-.585a.49.49,0,0,1,.16535-.003V4.802a.44908.44908,0,0,1,.12909.0556,5.21715,5.21715,0,0,1,.32306-1.54681A4.77725,4.77725,0,0,0,7.41492,2.94a2.6375,2.6375,0,0,0-.7121-.19452,2.11377,2.11377,0,0,0-.637.19452A4.02938,4.02938,0,0,0,3.40741,3.97821c-1.333,1.13086-.74725,3.24487-.74725,3.24487l1.908,7.29828C4.66229,14.5296,4.75726,14.53552,4.8515,14.54285Z M9.10248,15.24884c-.74439.07324-1.48883.11792-2.14386.11792a23.08161,23.08161,0,0,1-2.50067-.1394,1.77305,1.77305,0,0,1-.11945.56353.7911.7911,0,0,0,.26032.88666l.32006,1.97235a.66183.66183,0,0,0,.22358.41651l.3507.31543.0658.06585.3645.42572a.75119.75119,0,0,0,.58191.26337h.54974a.748.748,0,0,0,.58033-.26337l.366-.42572.06586-.06585.35065-.31543a.66121.66121,0,0,0,.22357-.41651l.32007-1.94934a.791.791,0,0,0,.26031-.88666A1.86519,1.86519,0,0,1,9.10248,15.24884Z",
            keywords: ["light","retro"]
        },
        "bulb-group-filament-alt-filament-hung":{
            path:"M8.66,23.29c0.3,0,0.81-0.25,0.81-0.25s1.69,0.12,3.39-1.32c1.7-1.44,0.95-4.14,0.95-4.14l-2.43-9.31 c-0.12-0.01-0.24-0.02-0.36-0.03c-0.37-0.02-1.61-0.09-2.41-0.1c-0.9-0.01-2.59,0.05-2.69,0.05c-0.03,0-0.05,0-0.08,0.01 l-2.41,9.18c0,0-0.88,2.68,0.66,4.18c1.53,1.49,3.66,1.48,3.66,1.48S8.36,23.29,8.66,23.29L8.66,23.29z M6.22,20.66 c-0.2-0.03-0.38-0.16-0.43-0.35c-0.04-0.12-0.02-0.25,0.05-0.35c0.07-0.11,0.19-0.18,0.33-0.21L9.64,19 c0.28-0.07,0.44-0.21,0.44-0.3c0-0.09-0.16-0.23-0.46-0.3l-3.33-0.79c-0.54-0.13-0.9-0.56-0.9-1.04c0-0.48,0.37-0.91,0.9-1.04 l3.99-0.94c0.08-0.01,0.13-0.07,0.13-0.14c0.01-0.07-0.05-0.13-0.13-0.14l-3.32-0.79c-0.68-0.11-1.18-0.6-1.24-1.2 c0.05-0.6,0.56-1.1,1.25-1.21l3.38-0.68h0.13c0.3-0.03,0.56,0.16,0.6,0.42c0.03,0.26-0.18,0.49-0.48,0.52l-3.36,0.68 c-0.28,0.07-0.44,0.21-0.44,0.3s0.16,0.23,0.46,0.3l3.34,0.74c0.54,0.13,0.92,0.56,0.91,1.05c0.01,0.49-0.37,0.92-0.91,1.04 l-3.99,0.94c-0.08,0.01-0.13,0.07-0.13,0.14c0,0.07,0.05,0.13,0.13,0.15l3.31,0.8c0.69,0.11,1.2,0.6,1.25,1.21 c-0.05,0.6-0.56,1.1-1.25,1.21l-3.47,0.75C6.36,20.67,6.29,20.67,6.22,20.66L6.22,20.66z M11.52,7.37 c0.01-0.25,0.06-0.49,0.15-0.72c0.14-0.41,0.01-0.86-0.33-1.13L10.93,3c-0.03-0.21-0.13-0.39-0.29-0.53l-0.45-0.4l-0.08-0.08 L9.65,1.44C9.47,1.22,9.2,1.1,8.91,1.1h-0.7c-0.29,0-0.56,0.12-0.74,0.34L7,1.98L6.92,2.07l-0.45,0.4C6.31,2.61,6.21,2.79,6.19,3 L5.78,5.49C5.43,5.76,5.3,6.21,5.45,6.62C5.53,6.85,5.58,7.09,5.6,7.34c0.95-0.09,1.9-0.15,2.73-0.15 C9.4,7.19,10.46,7.25,11.52,7.37L11.52,7.37z M13.26,7.22c0.88-0.1,1.76-0.15,2.65-0.15c0.69,0.01,1.48,0.05,2.27,0.12c0.01-0.21,0.05-0.41,0.12-0.6 c0.12-0.34,0.01-0.71-0.27-0.94l-0.34-2.07c-0.02-0.17-0.11-0.33-0.23-0.44l-0.37-0.33L17,2.76l-0.38-0.45 C16.47,2.13,16.25,2.03,16,2.03h-0.58c-0.24,0-0.46,0.1-0.61,0.28l-0.39,0.45l-0.07,0.07l-0.37,0.33 c-0.12,0.12-0.21,0.27-0.22,0.45l-0.34,2.08c-0.29,0.22-0.4,0.6-0.27,0.94C13.21,6.81,13.25,7.01,13.26,7.22 M11,10.68c-0.01-0.02-0.03-0.03-0.04-0.05C10.97,10.65,10.99,10.66,11,10.68z M17.06,14.98c0.06-0.02,0.1-0.07,0.09-0.12c0-0.06-0.04-0.11-0.09-0.12l-2.92-0.77 c-0.1-0.02-0.18-0.06-0.26-0.11l0.49,1.89c0.09-0.04,0.17-0.08,0.27-0.1L17.06,14.98z M10.87,10.54c-0.01-0.01-0.02-0.01-0.02-0.02c0,0,0,0,0,0C10.85,10.54,10.86,10.54,10.87,10.54z M21.18,11.35l-0.08-0.13c-0.07-0.12-0.16-0.25-0.24-0.37c-1.07-1.54-1.94-1.87-2.48-2.86 c-0.81-0.09-1.63-0.13-2.45-0.13c-0.96,0-1.92,0.06-2.87,0.17c-0.15,0.27-0.33,0.49-0.52,0.7l1.04,3.97 c0.11-0.22,0.31-0.4,0.56-0.47l2.44-0.61c0.22-0.06,0.34-0.17,0.34-0.25c0-0.07-0.12-0.18-0.32-0.25l-2.46-0.56 c-0.22-0.02-0.37-0.22-0.35-0.43c0.02-0.22,0.22-0.37,0.44-0.35h0.09l2.47,0.56c0.5,0.09,0.88,0.5,0.91,1c-0.04,0.5-0.41,0.9-0.9,1 L14.37,13c-0.06,0.01-0.1,0.06-0.09,0.12c0,0.06,0.04,0.11,0.09,0.12l2.92,0.79c0.39,0.11,0.66,0.46,0.66,0.86 c0,0.4-0.27,0.76-0.66,0.86l-2.44,0.66c-0.14,0.04-0.22,0.09-0.27,0.15l0.07,0.26c0.05,0.03,0.11,0.07,0.19,0.1l2.54,0.62 c0.1,0.02,0.19,0.08,0.24,0.17c0.05,0.09,0.07,0.19,0.04,0.29c-0.06,0.21-0.27,0.33-0.47,0.29l-2.32-0.57 c0.11,0.59,0.23,1.73-0.13,2.87c1.04,0.16,2.12,0.09,3.15-0.28c2.47-0.88,4.13-3.22,4.13-5.83C22.02,13.37,21.74,12.3,21.18,11.35z ",
            keywords: ["light"]
        },
        "bulb-group-filament-alt-hung":{
            path:"M8.85,23.32c0.29-0.04,0.56-0.12,0.82-0.25c1.27-0.01,2.49-0.49,3.44-1.34c1.72-1.46,0.97-4.2,0.97-4.2 l-2.47-9.44c-0.12-0.01-0.24-0.02-0.37-0.03c-0.38-0.02-1.63-0.09-2.44-0.1C7.89,7.95,6.18,8.01,6.08,8.02c-0.03,0-0.05,0-0.08,0.01 l-2.44,9.31c0,0-0.89,2.72,0.67,4.24c1.02,0.93,2.33,1.46,3.71,1.5C8.22,23.19,8.53,23.28,8.85,23.32L8.85,23.32z M6.38,20.66 C6.18,20.63,6,20.5,5.94,20.3c-0.04-0.12-0.02-0.25,0.05-0.36c0.08-0.11,0.2-0.19,0.34-0.21l3.51-0.76c0.28-0.08,0.45-0.21,0.45-0.3 c0-0.09-0.16-0.24-0.47-0.3l-3.38-0.81c-0.51-0.1-0.89-0.53-0.92-1.06c0.03-0.52,0.4-0.96,0.92-1.06l4.05-0.95 c0.07-0.01,0.13-0.07,0.13-0.14c0-0.08-0.06-0.14-0.13-0.14l-3.37-0.81c-0.65-0.07-1.16-0.57-1.26-1.21 c0.09-0.65,0.61-1.15,1.27-1.22l3.43-0.69h0.13c0.28-0.04,0.55,0.14,0.61,0.42c0.02,0.27-0.19,0.51-0.47,0.52c-0.01,0-0.01,0-0.02,0 l-3.4,0.69c-0.28,0.08-0.45,0.21-0.45,0.3s0.16,0.24,0.47,0.3l3.38,0.75c0.52,0.09,0.91,0.53,0.93,1.06 c-0.02,0.53-0.41,0.97-0.93,1.05l-4.05,0.95c-0.07,0.01-0.13,0.07-0.13,0.14c0,0.07,0.05,0.14,0.13,0.15l3.36,0.82 c0.65,0.07,1.18,0.57,1.27,1.22c-0.09,0.65-0.61,1.15-1.27,1.22l-3.52,0.76C6.52,20.67,6.45,20.67,6.38,20.66L6.38,20.66z  M11.75,7.18c0.01-0.25,0.06-0.5,0.15-0.73c0.15-0.41,0.01-0.88-0.34-1.15l-0.41-2.55c-0.03-0.21-0.13-0.4-0.29-0.54L10.42,1.8 l-0.09-0.09L9.86,1.17C9.67,0.95,9.4,0.82,9.11,0.83H8.4c-0.29,0-0.56,0.12-0.75,0.34L7.17,1.72L7.09,1.8L6.63,2.21 C6.47,2.35,6.37,2.54,6.34,2.75L5.93,5.27C5.58,5.54,5.45,6,5.59,6.42C5.68,6.65,5.73,6.9,5.75,7.15C6.71,7.05,7.67,7,8.52,7 C9.6,7,10.68,7.06,11.75,7.18L11.75,7.18z M18.02,18.06c0.22-0.06,0.34-0.16,0.34-0.23s-0.13-0.18-0.36-0.23l-2.61-0.62 c-0.21-0.05-0.39-0.16-0.52-0.33l0.16,0.63c0.11,0.46,0.18,0.93,0.19,1.41c0.03-0.01,0.06-0.02,0.08-0.03L18.02,18.06z M19.1,9.62 c-0.29-0.02-1.26-0.07-1.89-0.08c-0.7-0.01-2.03,0.04-2.11,0.04l-0.06,0l-1.01,3.87l0.67,2.57c0.07-0.35,0.34-0.62,0.69-0.69 l3.13-0.73c0.06-0.01,0.1-0.05,0.1-0.11c0-0.06-0.04-0.11-0.1-0.11l-2.61-0.62c-0.5-0.06-0.9-0.44-0.97-0.94 c0.07-0.5,0.47-0.89,0.98-0.94l2.65-0.53h0.1c0.22-0.03,0.42,0.11,0.47,0.33c0.01,0.21-0.15,0.39-0.36,0.41c0,0-0.01,0-0.01,0 l-2.63,0.54c-0.22,0.06-0.35,0.16-0.35,0.23c0,0.07,0.13,0.18,0.36,0.23l2.62,0.58c0.4,0.07,0.7,0.41,0.72,0.82 c-0.02,0.41-0.31,0.75-0.72,0.81l-3.13,0.73c-0.06,0.01-0.1,0.05-0.1,0.11c0,0.06,0.04,0.11,0.1,0.12l2.6,0.63 c0.51,0.05,0.91,0.44,0.98,0.94c-0.07,0.5-0.47,0.89-0.98,0.95l-2.72,0.58c-0.05,0.01-0.11,0.01-0.17,0v0 c-0.05-0.01-0.09-0.03-0.13-0.06c-0.03,0.53-0.14,1.05-0.32,1.55c0.52,0.22,1.08,0.35,1.65,0.37c0.23,0.1,0.47,0.16,0.71,0.19 c0.22-0.03,0.44-0.1,0.64-0.19c0.98-0.01,1.93-0.38,2.66-1.04c1.33-1.13,0.75-3.24,0.75-3.24l-1.91-7.3 C19.29,9.63,19.19,9.63,19.1,9.62z M14.85,8.91c0.74-0.07,1.49-0.12,2.14-0.12c0.84,0,1.67,0.05,2.5,0.14 c0.01-0.19,0.05-0.38,0.12-0.56c0.11-0.32,0.01-0.68-0.26-0.89l-0.32-1.97c-0.02-0.16-0.1-0.31-0.22-0.42l-0.35-0.32l-0.07-0.07 l-0.36-0.43c-0.15-0.17-0.36-0.27-0.58-0.26H16.9c-0.22,0-0.44,0.09-0.58,0.26l-0.37,0.43l-0.07,0.07L15.53,5.1 c-0.12,0.11-0.2,0.25-0.22,0.42l-0.32,1.95c-0.27,0.21-0.37,0.57-0.26,0.89C14.8,8.53,14.84,8.72,14.85,8.91z",
            keywords: ["light","retro"]
        },
        "bulb-group-filament-candle":{
            path:"M18.13919,17.00312a2.37106,2.37106,0,0,0,.1519.7198,1.00914,1.00914,0,0,1-.33229,1.131l-.40824,2.4865a.847.847,0,0,1-.28482.53278l-.44622.40195-.08545.08419-.46521.54215a.9556.9556,0,0,1-.74054.33649h-.70256a.95553.95553,0,0,1-.74054-.33649L13.62,22.35934l-.08545-.08419-.44622-.40195a.847.847,0,0,1-.28482-.53278l-.40824-2.5145a1.0093,1.0093,0,0,1-.33229-1.1311,2.26749,2.26749,0,0,0,.1519-.7197,29.43947,29.43947,0,0,0,3.19.17756C16.24037,17.15268,17.18979,17.09658,18.13919,17.00312Zm4.6332-8.7494a7.39034,7.39034,0,0,1-1.0065,3.7391l-.10444.15883c-.09494.14956-.18988.29921-.29432.43941-1.2912,1.8508-2.345,2.2528-2.9906,3.4493a27.25206,27.25206,0,0,1-2.9526.15892,28.81423,28.81423,0,0,1-3.4558-.20566c-.6456-1.1591-1.6899-1.5797-2.9621-3.4025-.10443-.1402-.19938-.28985-.29432-.43941l-.10443-.15883a7.38627,7.38627,0,0,1,.74785-8.5548,7.67188,7.67188,0,0,1,8.4233-2.2235,7.4846,7.4846,0,0,1,4.9941,7.0392Zm-5.6965.53278a1.07974,1.07974,0,0,0,0-2.0844l-2.9432-.79463c-.26583-.06537-.40824-.20556-.40824-.29912,0-.09346.14241-.22429.38926-.29912l3.0571-.7478a.45539.45539,0,0,0,.29413-.20762.44279.44279,0,0,0,.04766-.35325.48462.48462,0,0,0-.56964-.34585l-3.0666.7478a1.33511,1.33511,0,0,0-1.1013,1.2058,1.32553,1.32553,0,0,0,1.1013,1.2058l2.9242.8039a.14993.14993,0,0,1,.11393.14956.14078.14078,0,0,1-.11393.14029l-3.5223.93473a1.05921,1.05921,0,0,0-.807,1.0377,1.07772,1.07772,0,0,0,.807,1.0469l2.9432.73844c.26583.06546.40824.20566.40824.29912s-.14241.22439-.38926.29912l-2.9621.68243a.47033.47033,0,1,0,.10443.93473h.11393l2.9811-.68234a1.33512,1.33512,0,0,0,1.1013-1.2058,1.33525,1.33525,0,0,0-1.0918-1.1966l-2.9337-.79453a.13133.13133,0,0,1-.11393-.14019.14061.14061,0,0,1,.11393-.1402Z M7.42474,11.83264a8.38211,8.38211,0,0,1,.634-8.30328c-.50305-.87268-1.01911-1.42279-1.46772-1.42279-1.41406,0-3.48828,5.40625-3.72656,9.33593a14.39306,14.39306,0,0,0,3.72656.41407C6.88818,11.85657,7.15472,11.84381,7.42474,11.83264Z M4.71606,17.02454l.3125,1.86328a.53258.53258,0,0,0,.1875.34375l.293.2539a.72121.72121,0,0,1,.05469.05469l.30859.35156a.64077.64077,0,0,0,.48829.21485h.46093a.64074.64074,0,0,0,.48828-.21485l.3086-.35156a.71937.71937,0,0,1,.05469-.05469l.293-.2539a.53249.53249,0,0,0,.1875-.34375l.3125-1.86328c-.64843.05859-1.36718.082-1.875.082S5.3645,17.08313,4.71606,17.02454Z M8.18555,13.16406c-.09864-.13281-.20606-.30029-.3125-.46826l-.08759-.13306c-.43109.02655-.84613.04383-1.1944.04383a16.84684,16.84684,0,0,1-3.75-.39844v.09766a5.423,5.423,0,0,0,1.29688,3.89062,17.21755,17.21755,0,0,0,2.45312.16016,17.2177,17.2177,0,0,0,2.45313-.16016,3.91627,3.91627,0,0,0,.751-1.16052A12.37867,12.37867,0,0,1,8.18555,13.16406Z",
            keywords: ["light","retro"]
        },
        "bulb-group-filament-filament-alt":{
            path:"M18.13919,17.00312a2.37106,2.37106,0,0,0,.1519.7198,1.00914,1.00914,0,0,1-.33229,1.131l-.40824,2.4865a.847.847,0,0,1-.28482.53278l-.44622.40195-.08545.08419-.46521.54215a.9556.9556,0,0,1-.74054.33649h-.70256a.95553.95553,0,0,1-.74054-.33649L13.62,22.35934l-.08545-.08419-.44622-.40195a.847.847,0,0,1-.28482-.53278l-.40824-2.5145a1.0093,1.0093,0,0,1-.33229-1.1311,2.26749,2.26749,0,0,0,.1519-.7197,29.43947,29.43947,0,0,0,3.19.17756C16.24037,17.15268,17.18979,17.09658,18.13919,17.00312Zm4.6332-8.7494a7.39034,7.39034,0,0,1-1.0065,3.7391l-.10444.15883c-.09494.14956-.18988.29921-.29432.43941-1.2912,1.8508-2.345,2.2528-2.9906,3.4493a27.25206,27.25206,0,0,1-2.9526.15892,28.81423,28.81423,0,0,1-3.4558-.20566c-.6456-1.1591-1.6899-1.5797-2.9621-3.4025-.10443-.1402-.19938-.28985-.29432-.43941l-.10443-.15883a7.38627,7.38627,0,0,1,.74785-8.5548,7.67188,7.67188,0,0,1,8.4233-2.2235,7.4846,7.4846,0,0,1,4.9941,7.0392Zm-5.6965.53278a1.07974,1.07974,0,0,0,0-2.0844l-2.9432-.79463c-.26583-.06537-.40824-.20556-.40824-.29912,0-.09346.14241-.22429.38926-.29912l3.0571-.7478a.45539.45539,0,0,0,.29413-.20762.44279.44279,0,0,0,.04766-.35325.48462.48462,0,0,0-.56964-.34585l-3.0666.7478a1.33511,1.33511,0,0,0-1.1013,1.2058,1.32553,1.32553,0,0,0,1.1013,1.2058l2.9242.8039a.14993.14993,0,0,1,.11393.14956.14078.14078,0,0,1-.11393.14029l-3.5223.93473a1.05921,1.05921,0,0,0-.807,1.0377,1.07772,1.07772,0,0,0,.807,1.0469l2.9432.73844c.26583.06546.40824.20566.40824.29912s-.14241.22439-.38926.29912l-2.9621.68243a.47033.47033,0,1,0,.10443.93473h.11393l2.9811-.68234a1.33512,1.33512,0,0,0,1.1013-1.2058,1.33525,1.33525,0,0,0-1.0918-1.1966l-2.9337-.79453a.13133.13133,0,0,1-.11393-.14019.14061.14061,0,0,1,.11393-.1402Z M5.1438,9.62378a.10881.10881,0,0,0,.1026.11194l1.55743.37243a8.38482,8.38482,0,0,1-.13867-.92724L5.2464,9.51337A.11494.11494,0,0,0,5.1438,9.62378Z M5.40186,6.23914c0,.07446.12866.18585.36846.23785l.98261.23431a8.35478,8.35478,0,0,1,.2439-.97888l-1.24518.26886C5.529,6.06085,5.40186,6.16473,5.40186,6.23914Z M8.9668,15.28766c-.75574.07434-1.51154.11969-2.17658.11969a23.42655,23.42655,0,0,1-2.53882-.14148,1.803,1.803,0,0,1-.12127.57214.80308.80308,0,0,0,.26428.90021l.325,2.00244a.67159.67159,0,0,0,.227.42285l.356.32025.06683.0669.37006.43219a.7627.7627,0,0,0,.59076.26739h.55816a.75977.75977,0,0,0,.58924-.26739l.37158-.43219.06683-.0669.356-.32025a.67159.67159,0,0,0,.227-.42285l.325-1.97912a.80305.80305,0,0,0,.26428-.90021A1.8947,1.8947,0,0,1,8.9668,15.28766Z M4.65088,14.57086c.29761.01587,1.27856.07135,1.91858.07776.71338.00708,2.059-.03924,2.13928-.042l.06372-.0047.13434-.51264c-.23236-.27191-.47125-.5675-.72125-.92523-.09864-.13281-.20606-.30029-.3125-.46826l-.10157-.1543c-.04144-.07019-.06671-.1455-.10589-.21649l-2.47046.49835h-.1026a.42118.42118,0,0,1-.47577-.33111.38988.38988,0,0,1,.38092-.41205L7.315,11.6084c-.0979-.22431-.181-.45075-.25842-.68006l-2.0589-.45568a.88336.88336,0,0,1-.7276-.83332.869.869,0,0,1,.7276-.82556L6.61359,8.4353a8.41578,8.41578,0,0,1,.0169-.9718L5.5387,7.19843a1.11582,1.11582,0,0,1-.99347-.95929,1.12533,1.12533,0,0,1,.99347-.96076l1.75079-.37591a8.38412,8.38412,0,0,1,1.15808-1.9104,4.77628,4.77628,0,0,0-1.19409-.20124,2.67781,2.67781,0,0,0-.723-.19745,2.14652,2.14652,0,0,0-.64679.19745A4.09083,4.09083,0,0,0,3.18481,3.84491C1.83142,4.9931,2.42609,7.13934,2.42609,7.13934l1.93719,7.40973C4.4588,14.55743,4.5553,14.56348,4.65088,14.57086Z",
            keywords: ["light","retro"]
        },
        "bulb-group-filament-filament-alt-hung":{
            path:"M6.4,7C6.38,6.75,6.33,6.51,6.24,6.28C6.1,5.87,6.23,5.41,6.58,5.15l0.41-2.49c0.03-0.21,0.13-0.4,0.28-0.53 l0.45-0.4L7.8,1.64L8.27,1.1c0.18-0.22,0.46-0.34,0.74-0.34h0.7c0.28,0,0.56,0.12,0.74,0.34l0.47,0.54L11,1.72l0.45,0.4 c0.16,0.14,0.26,0.33,0.28,0.53l0.41,2.51c0.34,0.27,0.48,0.72,0.33,1.13c-0.09,0.23-0.14,0.47-0.15,0.72 c-1.06-0.12-2.12-0.18-3.19-0.18C8.29,6.85,7.34,6.9,6.4,7z M1.76,15.75c0-1.31,0.34-2.6,1.01-3.74l0.1-0.16 c0.09-0.15,0.19-0.3,0.29-0.44c1.29-1.85,2.34-2.25,2.99-3.45C7.14,7.85,8.12,7.8,9.11,7.8c1.16,0,2.31,0.07,3.46,0.21 c0.65,1.16,1.69,1.58,2.96,3.4c0.1,0.14,0.2,0.29,0.29,0.44l0.1,0.16c1.6,2.72,1.3,6.16-0.75,8.55c-2.07,2.42-5.43,3.3-8.42,2.22 C3.77,21.73,1.77,18.91,1.76,15.75L1.76,15.75z M7.46,15.21c-0.58,0.16-0.92,0.75-0.76,1.32c0.1,0.37,0.39,0.66,0.76,0.76l2.94,0.79 c0.27,0.07,0.41,0.21,0.41,0.3c0,0.09-0.14,0.22-0.39,0.3l-3.06,0.75c-0.12,0.03-0.23,0.1-0.29,0.21C7,19.75,6.99,19.88,7.02,20 c0.07,0.25,0.32,0.4,0.57,0.35l3.07-0.75c0.6-0.1,1.05-0.6,1.1-1.21c-0.05-0.61-0.5-1.1-1.1-1.21l-2.92-0.8 c-0.07-0.02-0.12-0.08-0.11-0.15c0-0.07,0.05-0.13,0.11-0.14l3.52-0.93c0.48-0.12,0.81-0.55,0.81-1.04c0-0.49-0.33-0.92-0.81-1.05 l-2.94-0.74c-0.27-0.07-0.41-0.21-0.41-0.3s0.14-0.22,0.39-0.3l2.96-0.68c0.26-0.02,0.45-0.25,0.42-0.51 c-0.02-0.26-0.25-0.45-0.51-0.42c0,0-0.01,0-0.01,0h-0.11L8.06,10.8c-0.6,0.1-1.05,0.6-1.1,1.21c0.05,0.6,0.5,1.09,1.09,1.2 L10.98,14c0.07,0.01,0.12,0.07,0.11,0.14c0,0.07-0.05,0.13-0.11,0.14L7.46,15.21z M19.39,14.38c0-0.06-0.04-0.11-0.1-0.11 l-1.56-0.37c0.06,0.31,0.11,0.62,0.14,0.93l1.42-0.33C19.34,14.48,19.39,14.43,19.39,14.38z M19.13,17.76 c0-0.07-0.13-0.19-0.37-0.24l-0.98-0.23c-0.06,0.33-0.14,0.66-0.24,0.98L18.78,18C19.01,17.94,19.13,17.83,19.13,17.76z M15.57,8.71 c0.76-0.07,1.51-0.12,2.18-0.12c0.85,0,1.7,0.05,2.54,0.14c0.01-0.2,0.05-0.39,0.12-0.57c0.11-0.33,0.01-0.69-0.26-0.9l-0.33-2 c-0.02-0.16-0.1-0.31-0.23-0.42l-0.36-0.32l-0.07-0.07l-0.37-0.43c-0.15-0.17-0.36-0.27-0.59-0.27h-0.56 c-0.23,0-0.44,0.09-0.59,0.27l-0.37,0.43l-0.07,0.07l-0.36,0.32c-0.13,0.11-0.21,0.26-0.23,0.42l-0.33,1.98 c-0.27,0.21-0.38,0.57-0.26,0.9C15.52,8.32,15.56,8.52,15.57,8.71z M19.88,9.43c-0.3-0.02-1.28-0.07-1.92-0.08 c-0.71-0.01-2.06,0.04-2.14,0.04l-0.06,0l-0.13,0.51c0.23,0.27,0.47,0.57,0.72,0.93c0.1,0.13,0.21,0.3,0.31,0.47l0.1,0.15 c0.04,0.07,0.07,0.15,0.11,0.22l2.47-0.5h0.1c0.22-0.03,0.43,0.11,0.48,0.33c0.01,0.21-0.15,0.4-0.37,0.41c0,0-0.01,0-0.01,0 l-2.32,0.47c0.1,0.22,0.18,0.45,0.26,0.68l2.06,0.46c0.41,0.07,0.71,0.42,0.73,0.83c-0.02,0.41-0.32,0.76-0.73,0.83l-1.62,0.38 c0.01,0.32,0.01,0.65-0.02,0.97L19,16.8c0.51,0.05,0.92,0.45,0.99,0.96c-0.07,0.51-0.48,0.91-0.99,0.96l-1.75,0.38 c-0.3,0.69-0.69,1.33-1.16,1.91c0.39,0.12,0.79,0.19,1.19,0.2c0.23,0.1,0.47,0.17,0.72,0.2c0.22-0.03,0.44-0.1,0.65-0.2 c1-0.01,1.96-0.39,2.7-1.05c1.35-1.15,0.76-3.29,0.76-3.29l-1.94-7.41C20.08,9.44,19.98,9.44,19.88,9.43z",
            keywords: ["light","retro"]
        },
        "bulb-group-filament-go":{
            path:"M10.59,15.98c0.01,0.2,0.05,0.39,0.12,0.57c0.11,0.32,0.01,0.69-0.26,0.9l-0.32,1.98 c-0.02,0.16-0.1,0.31-0.23,0.42l-0.35,0.32l-0.07,0.07L9.1,20.67c-0.15,0.17-0.36,0.27-0.59,0.27H7.95c-0.23,0-0.44-0.1-0.59-0.27 l-0.37-0.43l-0.07-0.07l-0.35-0.32c-0.13-0.11-0.21-0.26-0.23-0.42l-0.32-2c-0.27-0.21-0.38-0.57-0.26-0.9 c0.07-0.18,0.11-0.38,0.12-0.57c0.84,0.09,1.69,0.14,2.54,0.14C9.08,16.1,9.83,16.05,10.59,15.98z M14.27,9.02 c0,1.04-0.27,2.07-0.8,2.97l-0.08,0.13c-0.08,0.12-0.15,0.24-0.23,0.35c-1.03,1.47-1.86,1.79-2.38,2.74 C10,15.3,9.21,15.34,8.43,15.34c-0.92,0-1.84-0.05-2.75-0.16c-0.51-0.92-1.34-1.26-2.36-2.71c-0.08-0.11-0.16-0.23-0.23-0.35 l-0.08-0.13C1.73,9.83,1.97,7.11,3.6,5.19c1.63-1.92,4.31-2.63,6.7-1.77C12.69,4.28,14.28,6.52,14.27,9.02L14.27,9.02z M9.74,9.44 c0.38-0.11,0.63-0.44,0.63-0.83c0-0.38-0.26-0.72-0.63-0.83L7.4,7.15C7.19,7.1,7.08,6.99,7.08,6.92c0-0.07,0.11-0.18,0.31-0.24 l2.43-0.59C9.91,6.06,10,6,10.05,5.92c0.05-0.08,0.07-0.19,0.04-0.28c-0.05-0.2-0.25-0.32-0.45-0.28L7.2,5.96 C6.72,6.04,6.36,6.44,6.32,6.92C6.35,7.4,6.72,7.79,7.2,7.88l2.33,0.64c0.05,0.01,0.09,0.06,0.09,0.12c0,0.05-0.04,0.1-0.09,0.11 l-2.8,0.74c-0.38,0.1-0.65,0.44-0.64,0.83c0,0.39,0.26,0.73,0.64,0.83l2.34,0.59c0.21,0.05,0.32,0.16,0.32,0.24 c0,0.07-0.11,0.18-0.31,0.24l-2.36,0.54c-0.21,0.02-0.36,0.21-0.34,0.41c0.02,0.21,0.21,0.35,0.42,0.33h0.09l2.37-0.54 c0.48-0.09,0.84-0.48,0.88-0.96c-0.04-0.47-0.39-0.86-0.87-0.95l-2.33-0.63c-0.06-0.01-0.1-0.06-0.09-0.11 c0-0.05,0.04-0.1,0.09-0.11L9.74,9.44z M20.95,13.1c-1.32-2.16-3.87-4.84-6.18-6.59c0.18,0.45,0.32,0.91,0.4,1.39c1.87,1.63,3.85,3.75,5,5.4 c1.54,2.22,0.94,2.71-1.29,1.13c-1.19-0.84-2.6-2.1-3.91-3.43c-0.16,0.52-0.36,1.03-0.64,1.51l-0.01,0.02l-0.01,0.02l-0.08,0.11 c-0.09,0.14-0.18,0.28-0.26,0.38c-0.58,0.83-1.11,1.33-1.53,1.74c-0.35,0.34-0.61,0.58-0.79,0.91l-0.08,0.14l0.01,0.1 c0,0.09,0.02,0.18,0.07,0.29c0.21,0.58,0.1,1.22-0.27,1.7l-0.08,0.5h3.87c0.06,0,0.11-0.01,0.16-0.02 c0.11,0.01,0.21,0.02,0.32,0.02c2.33,0,4.69-1.16,6.07-2.83C21.96,15.18,21.71,14.33,20.95,13.1z",
            keywords: ["light"]
        },
        "bulb-group-filament-hung":{
            path:"M13.84,7.13C14.63,7.05,15.43,7,16.12,7c0.89,0,1.78,0.05,2.66,0.15c0.01-0.21,0.05-0.41,0.13-0.6 c0.12-0.34,0.01-0.72-0.28-0.94l-0.34-2.1c-0.02-0.17-0.11-0.33-0.24-0.44l-0.37-0.34l-0.07-0.07l-0.39-0.45 c-0.15-0.18-0.38-0.28-0.62-0.28h-0.59c-0.24,0-0.46,0.1-0.62,0.28l-0.39,0.45l-0.07,0.07l-0.37,0.34 c-0.13,0.11-0.22,0.27-0.24,0.44l-0.34,2.08c-0.29,0.22-0.4,0.6-0.28,0.94C13.79,6.72,13.83,6.92,13.84,7.13z M17.53,16.64c0-0.08-0.12-0.2-0.34-0.25l-0.32-0.09c-0.02,0.23-0.05,0.46-0.09,0.69l0.42-0.1 C17.41,16.83,17.53,16.72,17.53,16.64z M17.76,13.09c0-0.06-0.04-0.11-0.1-0.12l-1.4-0.38c0.12,0.3,0.21,0.6,0.3,0.91l1.11-0.29 C17.72,13.2,17.76,13.15,17.76,13.09z M21.8,11.31l-0.09-0.13c-0.08-0.12-0.16-0.25-0.25-0.37c-1.06-1.52-1.93-1.87-2.47-2.84 c-0.96-0.11-1.92-0.17-2.88-0.17c-0.82,0-1.65,0.04-2.46,0.13c-0.12,0.22-0.26,0.41-0.41,0.59c0.06,0.06,0.11,0.11,0.17,0.17 c0.44,0.42,0.98,0.95,1.56,1.71c0.08-0.04,0.17-0.08,0.26-0.09l2.49-0.57h0.1c0,0,0.01,0,0.01,0c0.22-0.02,0.41,0.14,0.43,0.35 c0.02,0.22-0.14,0.41-0.35,0.43l-2.44,0.56c0.05,0.07,0.1,0.15,0.15,0.22l0.13,0.2c0.03,0.06,0.06,0.12,0.09,0.18l2.08,0.52 c0.4,0.1,0.68,0.46,0.67,0.87c0,0.41-0.28,0.77-0.67,0.87l-1.16,0.31c0.08,0.41,0.12,0.83,0.13,1.24l0.53,0.14 c0.5,0.08,0.88,0.5,0.92,1.01c-0.04,0.51-0.42,0.92-0.92,1.01l-0.77,0.19c-0.25,0.98-0.7,1.91-1.3,2.76 c2.16,0.34,4.38-0.44,5.85-2.15C22.89,16.45,23.14,13.58,21.8,11.31z M5.34,7C5.32,6.75,5.27,6.51,5.19,6.28C5.04,5.87,5.18,5.41,5.52,5.14l0.41-2.49c0.03-0.21,0.13-0.4,0.28-0.53 l0.45-0.4l0.09-0.08L7.21,1.1c0.18-0.22,0.46-0.34,0.74-0.34h0.7c0.28,0,0.56,0.12,0.74,0.34l0.47,0.54l0.09,0.08l0.45,0.4 c0.16,0.14,0.26,0.33,0.28,0.53l0.41,2.51c0.34,0.27,0.48,0.72,0.33,1.13c-0.09,0.23-0.14,0.47-0.15,0.72 C10.2,6.91,9.14,6.85,8.07,6.85C7.24,6.85,6.29,6.9,5.34,7z M0.7,15.74c0-1.31,0.34-2.6,1.01-3.74l0.1-0.16 c0.09-0.15,0.19-0.3,0.29-0.44C3.4,9.56,4.45,9.15,5.1,7.96C6.08,7.85,7.07,7.8,8.05,7.8c1.16,0,2.31,0.07,3.46,0.21 c0.65,1.16,1.69,1.58,2.96,3.4c0.1,0.14,0.2,0.29,0.29,0.44l0.1,0.16c1.6,2.72,1.3,6.16-0.75,8.55c-2.07,2.42-5.43,3.3-8.42,2.22 C2.71,21.73,0.71,18.91,0.7,15.74L0.7,15.74z M6.4,15.21c-0.58,0.16-0.92,0.75-0.76,1.32c0.1,0.37,0.39,0.66,0.76,0.76l2.94,0.79 c0.27,0.07,0.41,0.21,0.41,0.3c0,0.09-0.14,0.22-0.39,0.3l-3.06,0.75c-0.12,0.03-0.23,0.1-0.29,0.21C5.95,19.75,5.93,19.88,5.96,20 c0.07,0.25,0.32,0.4,0.57,0.35L9.6,19.6c0.6-0.1,1.05-0.6,1.1-1.21c-0.05-0.61-0.5-1.1-1.1-1.21l-2.92-0.8 c-0.07-0.02-0.12-0.08-0.11-0.15c0-0.07,0.05-0.13,0.11-0.14l3.52-0.93c0.48-0.12,0.81-0.55,0.81-1.04c0-0.49-0.33-0.92-0.81-1.05 l-2.94-0.74c-0.27-0.07-0.41-0.21-0.41-0.3s0.14-0.22,0.39-0.3l2.96-0.68c0.26-0.02,0.45-0.25,0.42-0.51 c-0.02-0.26-0.25-0.45-0.51-0.42c0,0-0.01,0-0.01,0H9.98L7,10.8c-0.6,0.1-1.05,0.6-1.1,1.21c0.05,0.6,0.5,1.09,1.09,1.2L9.92,14 c0.07,0.01,0.12,0.07,0.11,0.14c0,0.07-0.05,0.13-0.11,0.14L6.4,15.21z",
            keywords: ["light","retro"]
        },
        "bulb-group-filament-spot":{
            path:"M18.13919,17.00312a2.37106,2.37106,0,0,0,.1519.7198,1.00914,1.00914,0,0,1-.33229,1.131l-.40824,2.4865a.847.847,0,0,1-.28482.53278l-.44622.40195-.08545.08419-.46521.54215a.9556.9556,0,0,1-.74054.33649h-.70256a.95553.95553,0,0,1-.74054-.33649L13.62,22.35934l-.08545-.08419-.44622-.40195a.847.847,0,0,1-.28482-.53278l-.40824-2.5145a1.0093,1.0093,0,0,1-.33229-1.1311,2.26749,2.26749,0,0,0,.1519-.7197,29.43947,29.43947,0,0,0,3.19.17756C16.24037,17.15268,17.18979,17.09658,18.13919,17.00312Zm4.6332-8.7494a7.39034,7.39034,0,0,1-1.0065,3.7391l-.10444.15883c-.09494.14956-.18988.29921-.29432.43941-1.2912,1.8508-2.345,2.2528-2.9906,3.4493a27.25206,27.25206,0,0,1-2.9526.15892,28.81423,28.81423,0,0,1-3.4558-.20566c-.6456-1.1591-1.6899-1.5797-2.9621-3.4025-.10443-.1402-.19938-.28985-.29432-.43941l-.10443-.15883a7.38627,7.38627,0,0,1,.74785-8.5548,7.67188,7.67188,0,0,1,8.4233-2.2235,7.4846,7.4846,0,0,1,4.9941,7.0392Zm-5.6965.53278a1.07974,1.07974,0,0,0,0-2.0844l-2.9432-.79463c-.26583-.06537-.40824-.20556-.40824-.29912,0-.09346.14241-.22429.38926-.29912l3.0571-.7478a.45539.45539,0,0,0,.29413-.20762.44279.44279,0,0,0,.04766-.35325.48462.48462,0,0,0-.56964-.34585l-3.0666.7478a1.33511,1.33511,0,0,0-1.1013,1.2058,1.32553,1.32553,0,0,0,1.1013,1.2058l2.9242.8039a.14993.14993,0,0,1,.11393.14956.14078.14078,0,0,1-.11393.14029l-3.5223.93473a1.05921,1.05921,0,0,0-.807,1.0377,1.07772,1.07772,0,0,0,.807,1.0469l2.9432.73844c.26583.06546.40824.20566.40824.29912s-.14241.22439-.38926.29912l-2.9621.68243a.47033.47033,0,1,0,.10443.93473h.11393l2.9811-.68234a1.33512,1.33512,0,0,0,1.1013-1.2058,1.33525,1.33525,0,0,0-1.0918-1.1966l-2.9337-.79453a.13133.13133,0,0,1-.11393-.14019.14061.14061,0,0,1,.11393-.1402Z M4.50793,17.15363a.60447.60447,0,0,0,1.20893,0v-.93189a3.05823,3.05823,0,0,1-1.20893-.32111Z M6.62024,7.66339a8.36748,8.36748,0,0,1,.87439-3.16516c-.3783-.02454-.77-.03845-1.17328-.03845-2.62885,0-4.82947.551-5.33008,1.28137a.56467.56467,0,0,0-.11017.32111c0,.88464,2.43677,1.60559,5.44025,1.60559C6.42224,7.66785,6.52069,7.665,6.62024,7.66339Z M8.18555,13.16406c-.09864-.13281-.20606-.30029-.3125-.46826l-.10157-.1543A8.43489,8.43489,0,0,1,6.61505,8.26758c-.09833.00171-.20038.00476-.2937.00476a13.5894,13.5894,0,0,1-4.70673-.7367,5.70466,5.70466,0,0,0,2.15345,3.80311c.1228.11334.13537.30224.13537.68005v2.22894a1.18011,1.18011,0,0,0,.28021.78394,2.81945,2.81945,0,0,0,2.1377.60449,2.8104,2.8104,0,0,0,2.13452-.60449,1.16711,1.16711,0,0,0,.28333-.78394v-.35266C8.55945,13.67487,8.37506,13.43518,8.18555,13.16406Z M6.92578,17.15363a.60446.60446,0,0,0,1.20892,0v-1.253a3.05812,3.05812,0,0,1-1.20892.32111Z",
            keywords: ["light"]
        },
        "bulb-group-filament-sultan":{
            path:"M18.34072,17.00121a2.37106,2.37106,0,0,0,.1519.7198,1.00915,1.00915,0,0,1-.33228,1.131l-.40825,2.4865a.847.847,0,0,1-.28481.53278l-.44623.402-.08545.08419-.46521.54214a.95559.95559,0,0,1-.74053.33649h-.70257a.9555.9555,0,0,1-.74053-.33649l-.46521-.54214-.08546-.08419-.44622-.402a.847.847,0,0,1-.28482-.53278l-.40824-2.5145a1.00931,1.00931,0,0,1-.33229-1.1311,2.26756,2.26756,0,0,0,.15191-.71971,29.43943,29.43943,0,0,0,3.19.17756C16.4419,17.15076,17.39132,17.09466,18.34072,17.00121Zm4.63321-8.7494a7.39045,7.39045,0,0,1-1.00651,3.7391l-.10444.15883c-.09494.14956-.18988.29921-.29432.43941-1.2912,1.8508-2.345,2.2528-2.9906,3.4493a27.25206,27.25206,0,0,1-2.9526.15892,28.81423,28.81423,0,0,1-3.4558-.20566c-.6456-1.1591-1.6899-1.5797-2.9621-3.4025-.10443-.1402-.19938-.28985-.29432-.43941L8.80881,11.991a7.38627,7.38627,0,0,1,.74785-8.5548A7.67188,7.67188,0,0,1,17.98,1.21267a7.4846,7.4846,0,0,1,4.9941,7.0392Zm-5.6965.53278a1.07974,1.07974,0,0,0,0-2.0844l-2.9432-.79463C14.0684,5.84019,13.926,5.7,13.926,5.60644c0-.09346.14242-.22429.38927-.29912l3.0571-.7478a.45539.45539,0,0,0,.29413-.20762.44279.44279,0,0,0,.04766-.35325.48462.48462,0,0,0-.56964-.34585l-3.0666.7478a1.33511,1.33511,0,0,0-1.1013,1.2058,1.32552,1.32552,0,0,0,1.1013,1.2058l2.9242.8039a.14993.14993,0,0,1,.11393.14956.14078.14078,0,0,1-.11393.14029l-3.5223.93473a1.05921,1.05921,0,0,0-.807,1.0377,1.07771,1.07771,0,0,0,.807,1.0469l2.9432.73844c.26583.06546.40824.20566.40824.29912s-.14241.22439-.38926.29912l-2.9621.68243a.47033.47033,0,1,0,.10443.93473h.11393l2.9811-.68234a1.33512,1.33512,0,0,0,1.1013-1.2058,1.33525,1.33525,0,0,0-1.0918-1.1966l-2.9337-.79453a.13133.13133,0,0,1-.11393-.14019.14061.14061,0,0,1,.11393-.1402Z M6.81207,8.79077A8.39023,8.39023,0,0,1,7.92,4.05518C7.31824,4.015,6.8623,4.024,6.7926,4.024c-.188,0-3.18182-.06739-4.29211.95068-1.03931.9577-.09577,2.71356.22351,3.34143a14.93071,14.93071,0,0,0,4.0686.47528Z M4.74945,16.86835,5.09351,18.986a.62578.62578,0,0,0,.20221.39014l.31921.29089a.48454.48454,0,0,1,.0603.06031l.337.39727a.69022.69022,0,0,0,.53564.24475h.49658a.69557.69557,0,0,0,.53565-.24475l.337-.39727a.48394.48394,0,0,1,.06031-.06031l.31567-.29089a.61324.61324,0,0,0,.20575-.39014l.34051-2.11767c-.70941.07092-1.4898.09576-2.04315.09576C6.23926,16.96411,5.45886,16.93927,4.74945,16.86835Z M9.52966,14.55988a11.88857,11.88857,0,0,1-1.14258-1.39771c-.09863-.13281-.206-.30029-.3125-.46826l-.10156-.1543a8.4481,8.4481,0,0,1-1.064-3.06982c-.03638.00024-.08118.00268-.11646.00268a18.698,18.698,0,0,1-3.77423-.376A21.16254,21.16254,0,0,1,4.0719,15.343a.67652.67652,0,0,0,.16675.4718l.298.34051a18.93286,18.93286,0,0,0,2.256.12769,18.93274,18.93274,0,0,0,2.256-.12769l.298-.34051a.67656.67656,0,0,0,.16675-.4718C9.5061,15.17517,9.51086,14.90015,9.52966,14.55988Z",
            keywords: ["light"]
        },
        "bulb-group-go-filament":{
            path:"M17.84,9.54c0-0.06-0.09-0.16-0.27-0.2l-1.89-0.47c0.35,0.35,0.69,0.71,1.02,1.07l0.88-0.2 C17.75,9.69,17.84,9.6,17.84,9.54z M18.61,2.39c-2-0.72-4.24-0.13-5.6,1.48c-0.45,0.53-0.76,1.13-0.95,1.77c1.02,0.79,2.05,1.69,3.05,2.66 c-0.01-0.05-0.02-0.09-0.02-0.14c0-0.32,0.22-0.61,0.54-0.69l2.34-0.62C18,6.83,18.03,6.8,18.03,6.75c0-0.05-0.03-0.09-0.08-0.1 l-1.94-0.53c-0.4-0.07-0.7-0.4-0.73-0.8c0.03-0.4,0.33-0.73,0.73-0.8l2.04-0.5c0.17-0.04,0.34,0.07,0.38,0.23 c0.02,0.08,0.01,0.16-0.03,0.23c-0.04,0.07-0.11,0.12-0.2,0.14l-2.03,0.5c-0.16,0.05-0.26,0.14-0.26,0.2c0,0.06,0.09,0.16,0.27,0.2 l1.96,0.53c0.31,0.09,0.53,0.37,0.53,0.69c0,0.32-0.22,0.6-0.53,0.69L15.8,8.05c-0.04,0.01-0.08,0.05-0.08,0.09 c0,0.05,0.03,0.09,0.08,0.09l1.95,0.53c0.4,0.07,0.69,0.4,0.73,0.8c-0.03,0.4-0.33,0.73-0.73,0.8l-0.54,0.12 c0.53,0.6,1.02,1.19,1.48,1.78c0.11-0.01,0.22-0.01,0.33-0.02c0.43-0.8,1.13-1.06,1.99-2.29c0.07-0.09,0.13-0.19,0.2-0.29 l0.07-0.11c0.44-0.76,0.67-1.61,0.67-2.49l0,0C21.93,4.98,20.6,3.11,18.61,2.39z M16.58,16.64c-2.89-2.04-6.85-6-8.9-8.9C5.61,4.8,6.24,4,9.16,6.03c2.96,2.05,7.07,6.17,9.12,9.13 C20.31,18.07,19.52,18.71,16.58,16.64 M19.31,14.89C17.22,11.48,12.82,7.09,9.42,5C7.8,4.01,6.68,3.68,6.16,3.99 c-2.24,1.82-3.73,4.86-3.73,7.96c0,3.09,1.41,5.85,3.63,7.67H5.81c-0.62,0-1.12,0.5-1.12,1.12c0,0.62,0.51,1.12,1.12,1.12h5.9 c0.07,0,0.14-0.01,0.21-0.02c0.14,0.01,0.28,0.02,0.43,0.02c3.07,0,6.16-1.53,7.97-3.72C20.63,17.63,20.29,16.51,19.31,14.89",
            keywords: ["light"]
        },
        "bulb-group-go-sultan":{
            path:"M16.94,7.1c-0.89,0-2.15-0.09-3.23-0.3c2.08,1.8,4.13,3.97,5.63,6.01c0.06-0.1,0.1-0.21,0.09-0.33 c-0.03-0.68,0.12-3.09,0.96-5.73C19.28,7.01,17.89,7.1,16.94,7.1z M16.94,6.48c1.69,0,2.95-0.2,3.73-0.44c0.29-0.58,1.16-2.19,0.2-3.06c-1.02-0.93-3.76-0.87-3.93-0.87 c-0.17,0-2.92-0.06-3.93,0.87c-0.95,0.88-0.09,2.49,0.2,3.06C13.99,6.27,15.25,6.48,16.94,6.48z M16.84,16.65c-2.89-2.04-6.85-6-8.9-8.9C5.87,4.81,6.5,4.02,9.42,6.04c2.96,2.05,7.07,6.17,9.12,9.13 C20.57,18.09,19.78,18.73,16.84,16.65 M19.57,14.91c-2.09-3.41-6.48-7.81-9.89-9.89C8.06,4.03,6.95,3.69,6.42,4.01 c-2.24,1.82-3.73,4.86-3.73,7.96c0,3.09,1.41,5.85,3.63,7.67H6.07c-0.62,0-1.12,0.5-1.12,1.12c0,0.62,0.51,1.12,1.12,1.12h5.9 c0.07,0,0.14-0.01,0.21-0.02c0.14,0.01,0.28,0.02,0.43,0.02c3.07,0,6.16-1.53,7.97-3.72C20.89,17.65,20.55,16.53,19.57,14.91",
            keywords: ["light"]
        },
        "bulb-group-golfball-e14":{
            path:"M15.3,6.3c2.9,0,4.9,0.1,6.4,0.2c-0.1-2.8-1.1-5.6-6.7-5.6C9.4,0.8,8.4,3.7,8.3,6.5C10,6.4,12.3,6.3,15.3,6.3 M15.3,7.3c-3,0-5.3,0.1-7,0.3c0.2,2.2,1.3,5.4,3.1,7.5c0.3,0.4,0.6,0.7,0.9,1c0,0,0.6,0.2,2.7,0.2s2.7-0.2,2.7-0.2 c0.3-0.3,0.6-0.6,0.9-1c1.8-2.1,2.9-5.4,3.1-7.6C20.2,7.4,18.2,7.3,15.3,7.3z M18,17.1c-0.9,0.1-1.9,0.2-2.7,0.2c-1.1,0-2.1-0.1-3.2-0.2c0,0.2-0.1,0.5-0.2,0.7c-0.1,0.4,0,0.9,0.3,1.1l0.4,2.5 c0,0.2,0.1,0.4,0.3,0.5l0.4,0.4l0.1,0.1l0.5,0.5c0.2,0.2,0.5,0.3,0.7,0.3h0.7c0.3,0,0.6-0.1,0.7-0.3l0.5-0.5l0.1-0.1l0.4-0.4 c0.2-0.1,0.3-0.3,0.3-0.5l0.4-2.5c0.3-0.3,0.5-0.7,0.3-1.1C18,17.6,18,17.4,18,17.1z M7.7,15.4c1.7,0,2.2-0.2,2.2-0.2c0.1-0.1,0.2-0.2,0.2-0.3c-1.5-2.2-2.4-4.9-2.7-6.8c-2.1,0-3.9,0.1-5.1,0.2 c0.1,1.8,1.1,4.4,2.5,6.1C5,14.8,5.3,15,5.5,15.3C5.5,15.3,6,15.4,7.7,15.4z M7.3,7l0-0.4l0,0l0-0.1C7.3,5.1,7.6,4,8.1,3C8,3,7.9,3,7.7,3C3.2,2.9,2.4,5.3,2.3,7.6c1.2-0.1,2.9-0.2,5-0.2L7.3,7z M10.1,16.1c-0.7,0.1-1.5,0.2-2.2,0.2c-0.9,0-1.7-0.1-2.6-0.2c0,0.2-0.1,0.4-0.2,0.6c-0.1,0.3,0,0.7,0.2,0.9l0.3,2 c0,0.2,0.1,0.3,0.2,0.4l0.3,0.3l0.1,0.1l0.4,0.4C7,20.9,7.2,21,7.4,21h0.6c0.2,0,0.5-0.1,0.6-0.2l0.4-0.4L9,20.3l0.3-0.3 c0.2-0.1,0.2-0.2,0.2-0.4l0.3-2c0.2-0.2,0.4-0.6,0.2-0.9C10.1,16.5,10.1,16.3,10.1,16.1z",
            keywords: ["light"]
        },
        "bulb-group-lightstrip":{
            path:"M17.7,2.2H4.2C3.8,2.2,3.5,2.6,3.5,3v3c0,0.4,0.3,0.8,0.8,0.8h13.5c3,0,3.8,2.2,3.8,3V6C21.5,3.9,19.8,2.2,17.7,2.2z M5.7,5.2C5.3,5.2,5,4.9,5,4.5s0.3-0.8,0.8-0.8s0.8,0.3,0.8,0.8S6.1,5.2,5.7,5.2z M9.5,5.2c-0.4,0-0.8-0.3-0.8-0.8s0.3-0.8,0.8-0.8 s0.8,0.3,0.8,0.8S9.9,5.2,9.5,5.2z M13.2,5.2c-0.4,0-0.8-0.3-0.8-0.8s0.3-0.8,0.8-0.8S14,4.1,14,4.5S13.6,5.2,13.2,5.2z M17,5.2 c-0.4,0-0.8-0.3-0.8-0.8s0.3-0.8,0.8-0.8s0.8,0.3,0.8,0.8S17.4,5.2,17,5.2z M17.7,8.2H4.2C3.8,8.2,3.5,8.6,3.5,9v3 c0,0.4,0.3,0.8,0.8,0.8h13.5c3,0,3.8,2.2,3.8,3V12C21.5,9.9,19.8,8.2,17.7,8.2z M5.7,11.2c-0.4,0-0.8-0.3-0.8-0.8s0.3-0.8,0.8-0.8 s0.8,0.3,0.8,0.8S6.1,11.2,5.7,11.2z M9.5,11.2c-0.4,0-0.8-0.3-0.8-0.8s0.3-0.8,0.8-0.8s0.8,0.3,0.8,0.8S9.9,11.2,9.5,11.2z M13.2,11.2c-0.4,0-0.8-0.3-0.8-0.8s0.3-0.8,0.8-0.8s0.8,0.3,0.8,0.8S13.6,11.2,13.2,11.2z M17,11.2c-0.4,0-0.8-0.3-0.8-0.8 s0.3-0.8,0.8-0.8s0.8,0.3,0.8,0.8S17.4,11.2,17,11.2z M17.7,14.2H4.2c-0.4,0-0.8,0.3-0.8,0.8v3c0,0.4,0.3,0.8,0.8,0.8h13.5 c3,0,3.8,2.2,3.8,3V18C21.5,15.9,19.8,14.2,17.7,14.2z M5.7,17.2c-0.4,0-0.8-0.3-0.8-0.8s0.3-0.8,0.8-0.8s0.8,0.3,0.8,0.8 S6.1,17.2,5.7,17.2z M9.5,17.2c-0.4,0-0.8-0.3-0.8-0.8s0.3-0.8,0.8-0.8s0.8,0.3,0.8,0.8S9.9,17.2,9.5,17.2z M13.2,17.2 c-0.4,0-0.8-0.3-0.8-0.8s0.3-0.8,0.8-0.8s0.8,0.3,0.8,0.8S13.6,17.2,13.2,17.2z M17,17.2c-0.4,0-0.8-0.3-0.8-0.8s0.3-0.8,0.8-0.8 s0.8,0.3,0.8,0.8S17.4,17.2,17,17.2z",
            keywords: ["led","light"]
        },
        "bulb-group-lightstrip-v":{
            path:"M2.7,6.8v13.5c0,0.4,0.3,0.8,0.8,0.8h3c0.4,0,0.8-0.3,0.8-0.8V6.8c0-3,2.2-3.8,3-3.8H6.5C4.4,3,2.7,4.7,2.7,6.8z M5.7,18.8 c0,0.4-0.3,0.8-0.8,0.8s-0.8-0.3-0.8-0.8S4.6,18,5,18S5.7,18.3,5.7,18.8z M5.7,15c0,0.4-0.3,0.8-0.8,0.8S4.2,15.4,4.2,15 s0.3-0.8,0.8-0.8S5.7,14.6,5.7,15z M5.7,11.2C5.7,11.7,5.4,12,5,12s-0.8-0.3-0.8-0.8s0.3-0.8,0.8-0.8S5.7,10.8,5.7,11.2z M5.7,7.5 c0,0.4-0.3,0.8-0.8,0.8S4.2,7.9,4.2,7.5S4.6,6.8,5,6.8S5.7,7.1,5.7,7.5z M8.7,6.8v13.5c0,0.4,0.3,0.8,0.8,0.8h3 c0.4,0,0.8-0.3,0.8-0.8V6.8c0-3,2.2-3.8,3-3.8h-3.8C10.4,3,8.7,4.7,8.7,6.8z M11.7,18.8c0,0.4-0.3,0.8-0.8,0.8s-0.8-0.3-0.8-0.8 S10.6,18,11,18S11.7,18.3,11.7,18.8z M11.7,15c0,0.4-0.3,0.8-0.8,0.8s-0.8-0.3-0.8-0.8s0.3-0.8,0.8-0.8S11.7,14.6,11.7,15z M11.7,11.2c0,0.4-0.3,0.8-0.8,0.8s-0.8-0.3-0.8-0.8s0.3-0.8,0.8-0.8S11.7,10.8,11.7,11.2z M11.7,7.5c0,0.4-0.3,0.8-0.8,0.8 s-0.8-0.3-0.8-0.8s0.3-0.8,0.8-0.8S11.7,7.1,11.7,7.5z M14.7,6.8v13.5c0,0.4,0.3,0.8,0.8,0.8h3c0.4,0,0.8-0.3,0.8-0.8V6.8 c0-3,2.2-3.8,3-3.8h-3.8C16.4,3,14.7,4.7,14.7,6.8z M17.7,18.8c0,0.4-0.3,0.8-0.8,0.8s-0.8-0.3-0.8-0.8S16.6,18,17,18 S17.7,18.3,17.7,18.8z M17.7,15c0,0.4-0.3,0.8-0.8,0.8s-0.8-0.3-0.8-0.8s0.3-0.8,0.8-0.8S17.7,14.6,17.7,15z M17.7,11.2 c0,0.4-0.3,0.8-0.8,0.8s-0.8-0.3-0.8-0.8s0.3-0.8,0.8-0.8S17.7,10.8,17.7,11.2z M17.7,7.5c0,0.4-0.3,0.8-0.8,0.8s-0.8-0.3-0.8-0.8 s0.3-0.8,0.8-0.8S17.7,7.1,17.7,7.5z",
            keywords: ["led","light"]
        },
        "bulb-group-pillar-impress":{
            path:"M10.29,8.62V3.33c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0-0.01c0-0.06-0.02-0.12-0.06-0.17c-0.01-0.01-0.01-0.02-0.02-0.03 c-0.04-0.05-0.09-0.09-0.14-0.11c0,0,0,0-0.01-0.01L8.09,2.32c-0.07-0.03-0.15-0.03-0.23,0L5.88,3.01c0,0,0,0-0.01,0 C5.82,3.04,5.77,3.07,5.73,3.12C5.72,3.13,5.72,3.14,5.71,3.16C5.68,3.21,5.66,3.26,5.65,3.33c0,0,0,0,0,0.01c0,0,0,0,0,0 c0,0,0,0,0,0v5.28c0,0,0,0,0,0c0,0,0,0,0,0l0.01,8.2c0,0.14,0.09,0.27,0.22,0.32l1.98,0.74c0.04,0.01,0.08,0.02,0.12,0.02 c0.04,0,0.08-0.01,0.12-0.02l1.97-0.74c0.13-0.05,0.22-0.18,0.22-0.32L10.29,8.62z M9.6,8.38L8.49,8.79V4.25L9.6,3.83V8.38z M7.46,4.25V8.8L6.34,8.38V3.83L7.46,4.25z M18.34,9.85V2.18c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0-0.01,0-0.01c0-0.09-0.03-0.17-0.08-0.25c-0.01-0.02-0.02-0.03-0.03-0.05 c-0.06-0.07-0.12-0.12-0.21-0.16c0,0-0.01-0.01-0.01-0.01l-2.86-1c-0.11-0.04-0.22-0.04-0.33,0l-2.87,1c0,0-0.01,0.01-0.01,0.01 c-0.09,0.03-0.15,0.09-0.21,0.16c-0.01,0.02-0.02,0.03-0.03,0.05c-0.05,0.07-0.08,0.15-0.08,0.25c0,0,0,0.01,0,0.01c0,0,0,0,0,0 c0,0,0,0,0,0v7.67c0,0,0,0,0,0c0,0,0,0,0,0l0.01,11.9c0,0.21,0.13,0.4,0.33,0.47l2.87,1.07c0.06,0.02,0.12,0.03,0.17,0.03 c0.06,0,0.12-0.01,0.18-0.03l2.86-1.07c0.2-0.07,0.32-0.26,0.32-0.47L18.34,9.85z M17.34,9.5l-1.61,0.6V3.5l1.61-0.6V9.5z M14.23,3.5v6.6l-1.62-0.6V2.9L14.23,3.5z",
            keywords: ["bollard","light"]
        },
        "bulb-group-pillar-impress-3":{
            path:"M15.36,9.85V2.18c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0-0.01,0-0.01c0-0.09-0.03-0.17-0.08-0.25c-0.01-0.02-0.02-0.03-0.03-0.05 c-0.06-0.07-0.12-0.12-0.21-0.16c0,0-0.01-0.01-0.01-0.01l-2.86-1c-0.11-0.04-0.22-0.04-0.33,0l-2.87,1c0,0-0.01,0.01-0.01,0.01 C8.87,1.74,8.8,1.8,8.75,1.87C8.73,1.88,8.73,1.9,8.71,1.92C8.67,1.99,8.64,2.07,8.63,2.16c0,0,0,0.01,0,0.01c0,0,0,0,0,0 c0,0,0,0,0,0v7.67c0,0,0,0,0,0c0,0,0,0,0,0l0.01,11.9c0,0.21,0.13,0.4,0.33,0.47l2.87,1.07c0.06,0.02,0.12,0.03,0.17,0.03 c0.06,0,0.12-0.01,0.18-0.03l2.86-1.07c0.2-0.07,0.32-0.26,0.32-0.47L15.36,9.85z M14.36,9.5l-1.61,0.6V3.5l1.61-0.6V9.5z M11.25,3.5v6.6L9.63,9.5V2.9L11.25,3.5z M19.14,8.62V3.34c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0-0.01c0-0.06-0.02-0.12-0.06-0.17c-0.01-0.01-0.01-0.02-0.02-0.03 c-0.04-0.05-0.09-0.09-0.14-0.11c0,0,0,0-0.01-0.01l-1.97-0.69c-0.07-0.03-0.15-0.03-0.23,0l-0.36,0.12v7.4l0.01,7.9l0.35,0.13 c0.04,0.01,0.08,0.02,0.12,0.02c0.04,0,0.08-0.01,0.12-0.02l1.97-0.74c0.13-0.05,0.22-0.18,0.22-0.32L19.14,8.62z M18.46,8.38 l-1.11,0.41V4.25l1.11-0.41V8.38z M7.63,9.85V2.41l0-0.01l0,0l-0.2-0.07C7.35,2.3,7.27,2.3,7.2,2.32L5.22,3.01c0,0,0,0-0.01,0C5.15,3.04,5.11,3.07,5.07,3.12 C5.06,3.13,5.05,3.14,5.05,3.16C5.01,3.21,4.99,3.26,4.99,3.33c0,0,0,0,0,0.01c0,0,0,0,0,0c0,0,0,0,0,0v5.28c0,0,0,0,0,0s0,0,0,0 l0.01,8.2c0,0.14,0.09,0.27,0.22,0.32l1.98,0.74c0.04,0.01,0.08,0.02,0.12,0.02c0.04,0,0.08-0.01,0.12-0.02l0.2-0.07L7.63,9.85z M6.8,8.8L5.68,8.38V3.83L6.8,4.25V8.8z",
            keywords: ["bollard","light"]
        },
        "bulb-group-pillar-impress-short":{
            path:"M10.2,2.59c-0.01-0.07-0.03-0.14-0.08-0.22l-0.03-0.04C10.05,2.27,9.99,2.23,9.92,2.2L6.96,1.16c-0.1-0.04-0.21-0.04-0.32,0 L3.7,2.18L3.67,2.19C3.6,2.22,3.54,2.27,3.49,2.33C3.48,2.35,3.47,2.36,3.46,2.38C3.42,2.45,3.39,2.52,3.38,2.59l0,13.37 c0,0.2,0.13,0.38,0.31,0.45l2.94,1.09c0.05,0.02,0.11,0.03,0.17,0.03c0.06,0,0.11-0.01,0.17-0.03l2.92-1.09 c0.19-0.07,0.31-0.25,0.31-0.45V2.66L10.2,2.59z M9.24,3.32v6.82l-1.7,0.64V3.96L9.24,3.32z M6.05,3.96v6.83l-1.71-0.64V3.32 L6.05,3.96z M20.5,2.55C20.5,2.54,20.49,2.54,20.5,2.55c-0.01-0.1-0.04-0.18-0.08-0.26c-0.01-0.02-0.02-0.03-0.03-0.05 c-0.06-0.07-0.12-0.12-0.21-0.16c0,0-0.01-0.01-0.01-0.01l-4.12-1.44c-0.11-0.04-0.22-0.04-0.33,0l-4.15,1.44 c0,0-0.01,0.01-0.01,0.01c-0.09,0.03-0.15,0.09-0.21,0.16c-0.01,0.02-0.02,0.03-0.03,0.05c-0.05,0.07-0.08,0.15-0.08,0.25 c0,0,0,0.01,0,0.01c0,0,0,0,0,0c0,0,0,0,0,0v11.07v7.73c0,0.21,0.13,0.4,0.33,0.47l4.15,1.54c0.06,0.02,0.12,0.03,0.17,0.03 c0.06,0,0.12-0.01,0.18-0.03l4.12-1.54c0.2-0.07,0.33-0.26,0.33-0.47v-7.06v-0.67V2.55C20.5,2.55,20.49,2.55,20.5,2.55 C20.49,2.55,20.5,2.55,20.5,2.55z M15,4.3v10l-2.77-1.03v-10L15,4.3z M19.5,13.27l-2.75,1.03v-10l2.75-1.03V13.27z",
            keywords: ["bollard","light"]
        },
        "bulb-group-pillar-turaco-short-tall":{
            path:"M21.69,14.16V1.56c0-0.27-0.21-0.49-0.47-0.5l-0.54-0.02l-0.8,0.08l-3.39-0.14c-0.08-0.08-0.18-0.13-0.3-0.14 L15.7,0.79c-0.02,0-0.04,0-0.06,0c-0.03,0-0.06,0-0.08,0.01l-3.09,0.46c-0.24,0.04-0.42,0.25-0.42,0.49v20.2 c0,0.23,0.16,0.43,0.38,0.49l3.08,0.75c0.04,0.01,0.08,0.01,0.12,0.01c0.03,0,0.05,0,0.08-0.01l5.56-0.87 c0.24-0.04,0.42-0.25,0.42-0.49v-7.61C21.69,14.2,21.69,14.19,21.69,14.16z M20.25,10.01l-3.68,0.15h-0.24V1.92h0.23l3.69,0.15 C20.25,2.07,20.25,10.01,20.25,10.01z M11.1,12.9V4.29c0-0.18-0.14-0.34-0.33-0.34l-0.46-0.01L9.56,3.99l-3.71-0.1C5.78,3.84,5.71,3.8,5.63,3.79 L5.18,3.75c-0.01,0-0.02,0-0.03,0s-0.03,0-0.04,0L2.04,4.08C1.86,4.1,1.73,4.25,1.73,4.42v8.49c0,0.01,0,0.02,0,0.03V18 c0,0.17,0.12,0.31,0.29,0.34l3.08,0.49c0.02,0,0.03,0.01,0.05,0.01c0.01,0,0.02,0,0.03,0l5.61-0.57c0.18-0.02,0.31-0.16,0.31-0.34 v-4.97C11.1,12.93,11.1,12.91,11.1,12.9z M9.91,11.84L6,11.95H5.78V4.53h0.21L9.9,4.65L9.91,11.84L9.91,11.84z",
            keywords: ["exterior","light"]
        },
        "bulb-group-spot":{
            path:"M15.92725,19.5a.75.75,0,0,0,1.5,0V17.94531a3.79343,3.79343,0,0,1-1.5.39844Z M12.92725,19.5a.75.75,0,0,0,1.5,0V18.34375a3.79333,3.79333,0,0,1-1.5-.39844Z M15.17725,3.75c-3.26172,0-5.99225.68359-6.61329,1.58984a.70066.70066,0,0,0-.13671.39844c0,1.09766,3.02343,1.99219,6.75,1.99219,3.7265,0,6.75-.89453,6.75-1.99219S18.90375,3.75,15.17725,3.75Z M9.33734,7.56641a7.07823,7.07823,0,0,0,2.67194,4.71875c.15234.14062.168.375.168.84375v2.76562a1.4643,1.4643,0,0,0,.34765.97266,3.49813,3.49813,0,0,0,2.65235.75,3.48688,3.48688,0,0,0,2.64843-.75,1.448,1.448,0,0,0,.35157-.97266V13.12891c0-.46875.01562-.70313.168-.84375a7.07784,7.07784,0,0,0,2.67188-4.71875,16.87487,16.87487,0,0,1-5.83984.91406A16.8608,16.8608,0,0,1,9.33734,7.56641Z M4.94739,18.05188a.546.546,0,0,0,1.092,0v-.8418a2.76132,2.76132,0,0,1-1.092-.29Z M6.58539,10.02954a12.27374,12.27374,0,0,1-4.25147-.66547,5.15282,5.15282,0,0,0,1.94519,3.43531c.1109.10241.12226.273.12226.61426v2.01342a1.06577,1.06577,0,0,0,.25311.70807,2.54655,2.54655,0,0,0,1.93091.546,2.53841,2.53841,0,0,0,1.9281-.546,1.05407,1.05407,0,0,0,.25592-.70807V13.41364c0-.34125.01141-.51185.12231-.61426a4.35055,4.35055,0,0,0,1.089-1.14643A7.80564,7.80564,0,0,1,8.97131,9.8476,16.12364,16.12364,0,0,1,6.58539,10.02954Z M8.74713,9.32922a10.77261,10.77261,0,0,1-.39557-1.59338L8.265,7.23309a2.41654,2.41654,0,0,1-.56433-.6065c-.35968-.02472-.7301-.04084-1.11523-.04084-2.37451,0-4.36237.49762-4.81452,1.15741a.50978.50978,0,0,0-.09954.29c0,.79914,2.20111,1.45032,4.91406,1.45032A15.01858,15.01858,0,0,0,8.74713,9.32922Z M7.13141,18.05188a.546.546,0,0,0,1.092,0V16.92a2.76142,2.76142,0,0,1-1.092.29Z",
            keywords: ["light"]
        },
        "bulb-group-sultan-go":{
            path:"M13.45,4.28c1.14,1.05,0.11,2.99-0.25,3.68c-0.94,0.28-2.45,0.52-4.48,0.52c-2.03,0-3.54-0.25-4.48-0.52 C3.89,7.27,2.85,5.34,3.99,4.28c1.22-1.12,4.52-1.05,4.73-1.05S12.22,3.16,13.45,4.28z M8.72,9.24c1.14,0,2.81-0.11,4.15-0.41 c-1.02,3.16-1.19,6.06-1.16,6.88c0.01,0.19-0.06,0.38-0.18,0.52L11.2,16.6c-0.71,0.09-1.54,0.14-2.48,0.14s-1.77-0.05-2.48-0.14 l-0.33-0.38c-0.12-0.14-0.19-0.33-0.18-0.52c0.04-0.82-0.14-3.71-1.16-6.88C5.91,9.13,7.58,9.24,8.72,9.24z M6.47,17.38 c0.78,0.08,1.64,0.11,2.25,0.11c0.61,0,1.47-0.03,2.25-0.11l-0.38,2.33c-0.02,0.16-0.1,0.32-0.23,0.43l-0.35,0.32 c-0.02,0.02-0.05,0.04-0.07,0.07l-0.37,0.44C9.44,21.14,9.23,21.24,9,21.24H8.45c-0.23,0-0.45-0.1-0.59-0.27l-0.37-0.44 c-0.02-0.02-0.04-0.05-0.07-0.07l-0.35-0.32c-0.12-0.11-0.2-0.27-0.22-0.43L6.47,17.38z M21.45,13.25c-1.4-2.29-4.16-5.15-6.57-6.89c-0.06,0.29-0.14,0.57-0.23,0.83c2.12,1.68,4.66,4.3,6.02,6.26 c1.54,2.22,0.94,2.71-1.29,1.13c-1.74-1.23-3.96-3.35-5.6-5.28c-0.97,3.1-1.08,5.8-1.06,6.37c0.02,0.44-0.13,0.88-0.43,1.22 l-0.27,0.3l-0.06,0.36l-0.17,1.03h3.87c0.06,0,0.11-0.01,0.16-0.02c0.11,0.01,0.21,0.02,0.32,0.02c2.33,0,4.69-1.16,6.07-2.83 C22.45,15.33,22.2,14.48,21.45,13.25z",
            keywords: ["light"]
        },
        "bulb-group-sultan-lightstrip":{
            path:"M21.6,2.1c-1.5-1.4-5.6-1.3-5.9-1.3c-0.3,0-4.4-0.1-5.9,1.3c-1.4,1.3-0.1,3.7,0.3,4.6c1.8,0.5,3.7,0.7,5.6,0.7 c1.9,0,3.8-0.2,5.6-0.7C21.7,5.8,23,3.4,21.6,2.1z M12.9,18.4l0.5,2.9c0,0.2,0.1,0.4,0.3,0.5l0.4,0.4c0,0,0.1,0.1,0.1,0.1l0.5,0.5c0.2,0.2,0.5,0.3,0.7,0.3H16 c0.3,0,0.6-0.1,0.7-0.3l0.5-0.5c0,0,0.1-0.1,0.1-0.1l0.4-0.4c0.2-0.1,0.3-0.3,0.3-0.5l0.5-2.9c-1,0.1-2.1,0.1-2.8,0.1 C14.9,18.6,13.8,18.5,12.9,18.4z M10.5,7.7c0.9,2.8,1.4,5.7,1.4,8.6c0,0.2,0.1,0.5,0.2,0.6l0.4,0.5c1,0.1,2.1,0.2,3.1,0.2c1,0,2.1-0.1,3.1-0.2l0.4-0.5 c0.2-0.2,0.2-0.4,0.2-0.6c0-2.9,0.5-5.8,1.4-8.6c-1.7,0.4-3.4,0.5-5.2,0.5C13.9,8.3,12.2,8.1,10.5,7.7 M10.9,16.3c0-0.6,0-1.1-0.1-1.7H5.2c-2.2,0-2.8-1.7-2.8-2.2v2.8c0,1.6,1.3,2.8,2.8,2.8h6.5l-0.3-0.4 C11.1,17.3,10.9,16.8,10.9,16.3z M5.7,16.9c-0.3,0-0.6-0.3-0.6-0.6s0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6S6,16.9,5.7,16.9z M8.5,16.9 c-0.3,0-0.6-0.3-0.6-0.6s0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6S8.9,16.9,8.5,16.9z M2.9,11.8c0.3,1.5,1.7,2.4,3.2,2.1l4.5-1c-0.2-1.3-0.4-2.5-0.8-3.7l-6.1,1.3C3.2,10.6,2.8,11.2,2.9,11.8z M7.6,11 c0.3-0.1,0.6,0.1,0.7,0.4c0.1,0.3-0.1,0.6-0.4,0.7c-0.3,0.1-0.6-0.1-0.7-0.4C7.1,11.4,7.3,11.1,7.6,11z M4.8,11.6 c0.3-0.1,0.6,0.1,0.7,0.4c0.1,0.3-0.1,0.6-0.4,0.7c-0.3,0.1-0.6-0.1-0.7-0.4C4.4,12,4.5,11.7,4.8,11.6z M2.9,8.4h6.7c0-0.1-0.1-0.3-0.1-0.4L9.3,7.4L9.2,7.1c-0.2-0.5-0.6-1.2-0.8-2H2.9c-0.3,0-0.6,0.3-0.6,0.6v2.2 C2.4,8.2,2.6,8.4,2.9,8.4z M6.9,6.2c0.3,0,0.6,0.3,0.6,0.6S7.2,7.3,6.9,7.3S6.3,7.1,6.3,6.8S6.6,6.2,6.9,6.2z M4.1,6.2 c0.3,0,0.6,0.3,0.6,0.6S4.4,7.3,4.1,7.3S3.5,7.1,3.5,6.8S3.8,6.2,4.1,6.2z",
            keywords: ["light"]
        },
        "bulb-group-sultan-lightstrip-off":{
            path:"M0.9,3.5l1.7,1.7C2.4,5.3,2.3,5.5,2.3,5.7v2.2c0.1,0.3,0.3,0.5,0.6,0.5h2.9l1.4,1.4l-3.4,0.7c-0.5,0.1-0.9,0.7-0.8,1.3 c0.3,1.5,1.7,2.4,3.2,2.1l4.2-0.9l1.5,1.5c0,0.6,0.1,1.2,0.1,1.8c0,0.2,0.1,0.5,0.2,0.6l0.4,0.5c0.8,0.1,1.6,0.1,2.4,0.2l0.9,0.9 c-0.1,0-0.1,0-0.2,0c-0.8,0.1-1.9,0-2.8-0.1l0.5,2.9c0,0.2,0.1,0.4,0.3,0.5l0.4,0.4l0.1,0.1l0.5,0.5c0.2,0.2,0.5,0.3,0.7,0.3H16 c0.3,0,0.6-0.1,0.7-0.3l0.5-0.5l0.1-0.1l0.4-0.4c0.2-0.1,0.3-0.3,0.3-0.5l0.1-0.6l2.4,2.4l1.4-1.4L2.3,2.1L0.9,3.5z M5.1,12.7 c-0.3,0.1-0.6-0.1-0.7-0.4c0-0.3,0.1-0.6,0.4-0.7c0.3-0.1,0.6,0.1,0.7,0.4S5.4,12.6,5.1,12.7z M7.9,12.1c-0.3,0.1-0.6-0.1-0.7-0.4 c-0.1-0.3,0.1-0.6,0.4-0.7c0.3-0.1,0.6,0.1,0.7,0.4C8.4,11.7,8.2,12,7.9,12.1z M4.1,7.3c-0.3,0-0.6-0.2-0.6-0.5 c0-0.2,0.1-0.3,0.2-0.4l0.8,0.8C4.4,7.2,4.3,7.3,4.1,7.3z M15.7,7.4c1.9,0,3.8-0.2,5.6-0.7c0.4-0.9,1.7-3.3,0.3-4.6c-1.5-1.4-5.6-1.3-5.9-1.3s-4.4-0.1-5.9,1.3 c-1.4,1.3-0.1,3.7,0.3,4.6C11.9,7.2,13.8,7.4,15.7,7.4z M10.5,7.7c0.2,0.6,0.3,1.1,0.5,1.7l7.9,7.9l0.3-0.3c0.2-0.2,0.2-0.4,0.2-0.6c0-2.9,0.5-5.8,1.4-8.6 c-1.7,0.4-3.4,0.5-5.2,0.5C13.9,8.3,12.2,8.1,10.5,7.7z M9.3,7.4L9.2,7.1C9,6.6,8.6,5.9,8.4,5.1H6.7l2.7,2.7L9.3,7.4z M10.9,16.3c0-0.6,0-1.1-0.1-1.7H5.2c-2.2,0-2.8-1.7-2.8-2.2v2.8c0,1.6,1.3,2.8,2.8,2.8h6.5l-0.3-0.4 C11.1,17.3,10.9,16.8,10.9,16.3z M5.7,16.9c-0.3,0-0.6-0.3-0.6-0.6s0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6S6,16.9,5.7,16.9z M8.5,16.9 c-0.3,0-0.6-0.3-0.6-0.6s0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6S8.9,16.9,8.5,16.9z",
            keywords: ["light"]
        },
        "bulb-group-sultan-spot":{
            path:"M12.37,18.4l0.47,2.9c0.02,0.2,0.12,0.39,0.28,0.53l0.44,0.4c0.03,0.02,0.06,0.05,0.08,0.08l0.46,0.54 c0.17,0.21,0.45,0.34,0.73,0.34h0.68c0.29,0,0.55-0.12,0.73-0.34l0.46-0.54c0.02-0.03,0.05-0.06,0.08-0.08l0.43-0.4 c0.16-0.14,0.26-0.33,0.28-0.53l0.47-2.9c-0.97,0.1-2.04,0.13-2.8,0.13C14.41,18.53,13.35,18.49,12.37,18.4 M21.05,2.11c-1.52-1.39-5.62-1.3-5.88-1.3s-4.36-0.09-5.88,1.3C7.87,3.42,9.16,5.83,9.6,6.69 c1.17,0.34,3.05,0.65,5.57,0.65c2.52,0,4.4-0.31,5.57-0.65C21.18,5.83,22.47,3.42,21.05,2.11z M15.17,8.27c-1.42,0-3.49-0.14-5.17-0.51c1.27,3.93,1.49,7.53,1.44,8.55c-0.01,0.24,0.07,0.47,0.23,0.65l0.41,0.47 c0.89,0.11,1.92,0.17,3.09,0.17s2.2-0.07,3.09-0.17l0.41-0.47c0.16-0.18,0.24-0.41,0.23-0.65c-0.04-1.02,0.17-4.62,1.44-8.55 C18.66,8.13,16.59,8.27,15.17,8.27z M4.67,18.34c0,0.35,0.28,0.63,0.63,0.63s0.63-0.28,0.63-0.63v-0.98c-0.57-0.05-0.98-0.17-1.27-0.34V18.34z M9.1,8.21c-0.02-0.05-0.03-0.1-0.05-0.15C8.99,7.88,8.99,7.69,9.03,7.51C8.9,7.42,8.79,7.29,8.71,7.14L8.67,7.06 C8.62,6.96,8.55,6.83,8.49,6.7c0-0.01-0.01-0.01-0.01-0.02C8.27,6.25,8.02,5.69,7.85,5.07c0,0,0,0,0,0 C7.44,5.04,7.01,5.03,6.57,5.03c-2.76,0-5.07,0.58-5.59,1.34C0.91,6.48,0.87,6.59,0.87,6.71c0,0.93,2.56,1.68,5.71,1.68 C7.48,8.39,8.34,8.33,9.1,8.21z M9.67,10.26C9.67,10.26,9.67,10.26,9.67,10.26C9.55,9.79,9.42,9.31,9.28,8.82c-0.94,0.14-1.92,0.2-2.71,0.2 c-1.47,0-3.56-0.19-4.94-0.77c0.21,1.22,0.72,2.88,2.26,3.99c0.13,0.12,0.14,0.32,0.14,0.71v2.34c0,0.3,0.1,0.6,0.29,0.82 c0.32,0.36,1,0.63,2.24,0.63c1.24,0,1.92-0.27,2.24-0.63c0.2-0.22,0.3-0.52,0.3-0.82v-2.34c0-0.4,0.01-0.59,0.14-0.71 c0.27-0.19,0.49-0.41,0.7-0.63c0,0,0,0,0,0C9.87,11.18,9.78,10.73,9.67,10.26z M7.21,18.34c0,0.35,0.28,0.63,0.63,0.63c0.35,0,0.63-0.28,0.63-0.63v-1.31c-0.29,0.16-0.7,0.28-1.27,0.34V18.34z",
            keywords: ["light"]
        },
        "bulb-group-sultan-spot-off":{
            path:"M4.67,18.34c0,0.35,0.28,0.63,0.63,0.63s0.63-0.28,0.63-0.63v-0.98c-0.57-0.05-0.98-0.17-1.27-0.34V18.34z M7.21,18.34c0,0.35,0.28,0.63,0.63,0.63c0.35,0,0.63-0.28,0.63-0.63v-1.31c-0.29,0.16-0.7,0.28-1.27,0.34V18.34z M18.82,16.7c0,0,0.01-0.01,0.01-0.01l-5.39-5.37L2.92,0.81L1.51,2.22l2.93,2.93C2.69,5.36,1.36,5.81,0.98,6.37 C0.91,6.48,0.87,6.59,0.87,6.71c0,0.93,2.56,1.68,5.71,1.68c0.37,0,0.72-0.02,1.07-0.04l0.59,0.59C7.64,9,7.07,9.02,6.57,9.02 c-1.47,0-3.56-0.19-4.94-0.77c0.21,1.22,0.72,2.88,2.26,3.99c0.13,0.12,0.14,0.32,0.14,0.71v2.34c0,0.3,0.1,0.6,0.29,0.82 c0.32,0.36,1,0.63,2.24,0.63c1.24,0,1.92-0.27,2.24-0.63c0.2-0.22,0.3-0.52,0.3-0.82v-2.34c0-0.4,0.01-0.59,0.14-0.71 c0.27-0.19,0.49-0.41,0.7-0.63c0,0,0,0,0,0c-0.07-0.39-0.16-0.79-0.26-1.2l1.29,1.29c0.4,2.21,0.49,3.95,0.46,4.61 c-0.01,0.24,0.07,0.47,0.23,0.65l0.41,0.47c0.89,0.11,1.92,0.17,3.09,0.17c0.59,0,1.15-0.02,1.67-0.05l0.87,0.87 c-0.9,0.08-1.84,0.11-2.53,0.11c-0.76,0-1.83-0.03-2.8-0.13l0.47,2.9c0.02,0.2,0.12,0.39,0.28,0.53l0.44,0.4 c0.03,0.02,0.06,0.05,0.08,0.08l0.46,0.54c0.17,0.21,0.45,0.34,0.73,0.34h0.68c0.29,0,0.55-0.12,0.73-0.34l0.46-0.54 c0.02-0.03,0.05-0.06,0.08-0.08l0.43-0.4c0.16-0.14,0.26-0.33,0.28-0.53l0.43-2.65l2.68,2.68l1.41-1.41L18.82,16.7z M20.34,7.76c-1.67,0.38-3.75,0.51-5.16,0.51c-1,0-2.34-0.07-3.62-0.24l7.36,7.34C18.99,13.78,19.33,10.88,20.34,7.76z M10.41,6.89c1.16,0.25,2.75,0.45,4.77,0.45c2.52,0,4.4-0.31,5.57-0.65c0.44-0.86,1.73-3.26,0.31-4.58 c-1.52-1.39-5.62-1.3-5.88-1.3s-4.36-0.09-5.88,1.3C8.3,3.03,8.63,4.47,9.07,5.56L10.41,6.89z",
            keywords: ["light"]
        },
        "bulb-par-38":{
            path:"M12.46,18.8c-0.75,0-1.35-0.09-1.74-0.17c-0.04,0-0.07-0.01-0.11-0.01l0.31,1.93c0.02,0.14,0.08,0.26,0.18,0.36l0.29,0.26 c0.02,0.02,0.04,0.04,0.05,0.05l0.31,0.36c0.12,0.14,0.3,0.22,0.49,0.22h0.45c0.19,0,0.37-0.08,0.49-0.22l0.31-0.36 c0.02-0.02,0.04-0.04,0.05-0.05l0.29-0.26c0.11-0.09,0.17-0.22,0.19-0.36l0.31-1.93c-0.11,0.01-0.23,0.02-0.34,0.03 C13.45,18.75,12.92,18.8,12.46,18.8 M22.43,2.84c-1.48-1.16-6.02-1.58-9.78-1.58c-4.1,0-8.79,0.53-10,1.73C2.55,3.09,2.5,3.22,2.5,3.35V4.4 c0,0.07,0.01,0.13,0.04,0.19c0.03,0.07,0.29,0.64,1.08,0.84C3.58,5.3,3.55,5.18,3.52,5.05L3.43,4.49C3.4,4.33,3.48,4.17,3.63,4.1 c0.09-0.05,2.36-1.18,8.78-1.18c0.02,0,0.04,0,0.06,0c6.48,0,8.75,1.14,8.85,1.18c0.14,0.07,0.22,0.23,0.2,0.39l-0.09,0.54 c-0.03,0.16-0.08,0.32-0.11,0.48c0.38-0.13,1.31-0.52,1.31-1.28V3.24C22.62,3.08,22.55,2.94,22.43,2.84z M8.18,12.05c1.39-0.24,2.91-0.42,4.29-0.42c1.3,0,2.85,0.17,4.32,0.39c1.21-1.26,3.24-3.9,3.89-7.11l0.04-0.24 c-0.73-0.27-3.14-1-8.19-1c-0.02,0-0.04,0-0.06,0c-5.11,0-7.53,0.73-8.26,1l0.04,0.25C4.92,8.14,6.98,10.8,8.18,12.05z M12.47,12.38c-1.16,0-2.45,0.14-3.67,0.33c0.02,0.04,0.05,0.07,0.06,0.11c0.13,1.1,0.7,1.39,0.73,1.4 c0.12,0.06,0.21,0.18,0.22,0.32c0,0.03,0.03,0.67,0,1.96c-0.02,1,0.65,1.3,0.68,1.31c0.01,0,1.83,0.53,3.98-0.01 c0.11-0.06,0.69-0.38,0.66-1.3c-0.03-1.29,0-1.93,0-1.96c0.01-0.14,0.09-0.27,0.22-0.32c0.02-0.01,0.59-0.3,0.72-1.4 c0.01-0.05,0.05-0.09,0.07-0.14C14.87,12.5,13.57,12.38,12.47,12.38z",
            keywords: ["flood","light"]
        },
        "bulb-spot":{
            path:"M 12 3.75 C 15.726562 3.75 18.75 4.640625 18.75 5.738281 C 18.75 6.835938 15.726562 7.730469 12 7.730469 C 8.273438 7.730469 5.25 6.835938 5.25 5.738281 C 5.25 5.605469 5.296875 5.46875 5.386719 5.339844 C 6.007812 4.433594 8.738281 3.75 12 3.75 Z M 6.160156 7.566406 C 7.785156 8.253906 10.265625 8.480469 12 8.480469 C 13.734375 8.480469 16.210938 8.253906 17.839844 7.566406 C 17.59375 9.003906 16.984375 10.972656 15.167969 12.285156 C 15.015625 12.425781 15 12.660156 15 13.128906 L 15 15.894531 C 15 16.25 14.886719 16.601562 14.648438 16.867188 C 14.273438 17.292969 13.46875 17.617188 12 17.617188 C 10.53125 17.617188 9.722656 17.292969 9.347656 16.867188 C 9.113281 16.601562 9 16.25 9 15.894531 L 9 13.128906 C 9 12.660156 8.984375 12.425781 8.832031 12.285156 C 7.015625 10.972656 6.40625 9.003906 6.160156 7.566406 Z M 12.75 19.5 L 12.75 18.34375 C 13.421875 18.28125 13.910156 18.136719 14.25 17.945312 L 14.25 19.5 C 14.25 19.914062 13.914062 20.25 13.5 20.25 C 13.085938 20.25 12.75 19.914062 12.75 19.5 Z M 9.75 19.5 L 9.75 17.945312 C 10.089844 18.136719 10.578125 18.28125 11.25 18.34375 L 11.25 19.5 C 11.25 19.914062 10.914062 20.25 10.5 20.25 C 10.085938 20.25 9.75 19.914062 9.75 19.5 Z M 9.75 19.5 ",
            keywords: ["light"]
        },
        "bulb-spot-off":{
            path:"M10.96,8.45l4.08,4.07c0.02-0.1,0.06-0.18,0.12-0.24c1.82-1.31,2.43-3.28,2.67-4.72 C16.21,8.25,13.73,8.48,12,8.48C11.68,8.48,11.32,8.47,10.96,8.45 M12,7.73c3.73,0,6.75-0.89,6.75-1.99S15.73,3.75,12,3.75c-2.02,0-3.83,0.26-5.07,0.68l3.23,3.23 C10.75,7.7,11.36,7.73,12,7.73z M12.75,19.5c0,0.41,0.34,0.75,0.75,0.75s0.75-0.34,0.75-0.75v-1.55c-0.34,0.19-0.83,0.34-1.5,0.4V19.5z M9.75,19.5c0,0.41,0.34,0.75,0.75,0.75s0.75-0.34,0.75-0.75v-1.16c-0.67-0.06-1.16-0.21-1.5-0.4V19.5z M21.98,20.94L2.86,1.87L1.45,3.28l4.81,4.8c0.3,1.37,0.96,3.04,2.57,4.2C8.98,12.43,9,12.66,9,13.13v2.77 c0,0.36,0.11,0.71,0.35,0.97c0.38,0.43,1.18,0.75,2.65,0.75s2.27-0.32,2.65-0.75c0.07-0.08,0.11-0.17,0.15-0.26l5.77,5.76 L21.98,20.94z",
            keywords: ["light"]
        },
        "bulb-sultan":{
            path:"M 16.726562 4.046875 C 17.871094 5.101562 16.832031 7.035156 16.480469 7.726562 C 15.539062 8.003906 14.027344 8.25 12 8.25 C 9.96875 8.25 8.460938 8.003906 7.519531 7.726562 C 7.167969 7.035156 6.128906 5.101562 7.273438 4.046875 C 8.496094 2.925781 11.792969 3 12 3 C 12.207031 3 15.503906 2.925781 16.726562 4.046875 Z M 12 9 C 13.140625 9 14.808594 8.890625 16.152344 8.585938 C 15.136719 11.75 14.960938 14.644531 14.996094 15.464844 C 15.003906 15.65625 14.9375 15.839844 14.8125 15.984375 L 14.484375 16.359375 C 13.769531 16.445312 12.941406 16.5 12 16.5 C 11.058594 16.5 10.230469 16.445312 9.515625 16.359375 L 9.1875 15.984375 C 9.0625 15.839844 8.996094 15.65625 9.003906 15.464844 C 9.039062 14.644531 8.863281 11.75 7.84375 8.585938 C 9.191406 8.890625 10.859375 9 12 9 Z M 9.75 17.144531 C 10.53125 17.222656 11.390625 17.25 12.003906 17.25 C 12.613281 17.25 13.472656 17.222656 14.253906 17.144531 L 13.878906 19.476562 C 13.859375 19.640625 13.78125 19.792969 13.652344 19.90625 L 13.304688 20.226562 C 13.28125 20.246094 13.257812 20.269531 13.238281 20.292969 L 12.867188 20.730469 C 12.722656 20.902344 12.507812 21 12.277344 21 L 11.730469 21 C 11.5 21 11.28125 20.902344 11.140625 20.730469 L 10.769531 20.292969 C 10.75 20.269531 10.726562 20.246094 10.703125 20.226562 L 10.351562 19.90625 C 10.226562 19.792969 10.148438 19.640625 10.128906 19.476562 Z M 9.75 17.144531 ",
            keywords: ["light"]
        },
        "bulb-sultan-off":{
            path:"M11.5,8.99l3.71,3.71c0.17-1.18,0.46-2.61,0.94-4.11C14.81,8.89,13.14,9,12,9C11.85,9,11.67,8.99,11.5,8.99z M12,8.25c2.03,0,3.54-0.25,4.48-0.52c0.35-0.69,1.39-2.62,0.25-3.68C15.5,2.93,12.21,3,12,3 S8.5,2.93,7.27,4.05C7.14,4.17,7.04,4.31,6.96,4.46l3.76,3.75C11.12,8.23,11.54,8.25,12,8.25z M9.75,17.14l0.38,2.33c0.02,0.16,0.1,0.32,0.22,0.43l0.35,0.32c0.02,0.02,0.05,0.04,0.07,0.07l0.37,0.44 C11.28,20.9,11.5,21,11.73,21h0.55c0.23,0,0.45-0.1,0.59-0.27l0.37-0.44c0.02-0.02,0.04-0.05,0.07-0.07l0.35-0.32 c0.13-0.11,0.21-0.27,0.23-0.43l0.38-2.33c-0.78,0.08-1.64,0.11-2.25,0.11C11.39,17.25,10.53,17.22,9.75,17.14z M21.98,20.94L2.86,1.87L1.45,3.28l6.82,6.8c0.64,2.54,0.77,4.69,0.74,5.38C9,15.66,9.06,15.84,9.19,15.98 l0.33,0.38c0.71,0.09,1.54,0.14,2.48,0.14s1.77-0.05,2.48-0.14l0.03-0.04l6.05,6.04L21.98,20.94z",
            keywords: ["light"]
        },
        "button":{
            path:"M22.25861.80566H1.82745a1,1,0,0,0-1,1V22.23688a1,1,0,0,0,1,1H22.25861a1,1,0,0,0,1-1V1.80566A1,1,0,0,0,22.25861.80566Zm0,21.43122H1.82745V1.80566H22.25861Z M12.043,18.0838A6.0838,6.0838,0,1,0,5.95923,12,6.0907,6.0907,0,0,0,12.043,18.0838Zm0-11.1676A5.0838,5.0838,0,1,1,6.95923,12,5.08383,5.08383,0,0,1,12.043,6.9162Z",
            keywords: ["light","switch","wall"]
        },
        "ceiling-aurelle":{
            path:"M22.74,7.36c0-0.35-0.28-0.62-0.62-0.62H1.89c-0.35,0-0.62,0.28-0.62,0.62v1c0,0.05,0.02,0.09,0.03,0.14 C1.27,8.6,1.26,8.71,1.29,8.82l2.15,7.98c0.07,0.27,0.32,0.46,0.6,0.46H20c0.28,0,0.53-0.19,0.6-0.47l2.11-7.98 c0.03-0.11,0.02-0.21-0.01-0.32c0.01-0.05,0.03-0.09,0.03-0.14V7.36z M19.52,16.01h-15L2.71,9.28H21.3L19.52,16.01z",
            keywords: ["light","panel"]
        },
        "ceiling-aurelle-circle":{
            path:"M12,6.4c-6.4,0-11.5,2.2-11.5,5v1c0,2.8,5,5,11.5,5s11.5-2.2,11.5-5v-1C23.5,8.6,18.5,6.4,12,6.4z M12,16.3 c-6.3,0-10.5-2-10.5-4s4.2-4,10.5-4c6.3,0,10.5,2,10.5,4S18.3,16.3,12,16.3z M3.9,12.5c0,1.8,4.1,2.7,8.1,2.7c4,0,8.1-0.9,8.1-2.7C20.2,9,3.9,9,3.9,12.5z",
            keywords: ["light"]
        },
        "ceiling-aurelle-rect":{
            path:"M17.74,3.86c0-0.35-0.28-0.62-0.62-0.62H6.89c-0.35,0-0.62,0.28-0.62,0.62v1C6.27,4.91,6.28,4.95,6.3,5 C6.27,5.1,6.26,5.21,6.28,5.32L8.44,20.3c0.07,0.27,0.32,0.46,0.6,0.46h5.96c0.28,0,0.53-0.19,0.6-0.47l2.11-14.98 c0.03-0.11,0.02-0.21-0.01-0.32c0.01-0.05,0.03-0.09,0.03-0.14L17.74,3.86L17.74,3.86z M14.52,19.51h-5L7.7,5.78h8.59L14.52,19.51z",
            keywords: ["light","panel"]
        },
        "ceiling-being":{
            path:"M6.9,13.4c0,1.5,2.6,2.3,5.1,2.3s5.1-0.8,5.1-2.3C17.1,10.3,6.9,10.3,6.9,13.4z M8.4,5.9c-4.7,0.6-8,2.6-8,4.9 v2.3c0,0,0,0,0,0c0,0,0,0,0,0h0C0.5,16,5.6,18.1,12,18.1s11.5-2.1,11.6-4.8h0c0,0,0,0,0,0c0,0,0,0,0,0v-2.3c0-2.4-3.2-4.3-8-4.9 C12.3,5.4,8.4,5.9,8.4,5.9z M12,7.2c5.7,0,9.8,1.8,10.1,3.5c-2-1.5-5.7-2.5-10.1-2.5s-8.1,1-10.1,2.5C2.2,9,6.3,7.2,12,7.2z M12,17.1c-6.3,0-10.6-2.1-10.6-3.9l0.1-0.4c0.6-1.6,5-3.2,10.5-3.2s9.9,1.6,10.5,3.2l0.1,0.4C22.6,15,18.3,17.1,12,17.1z",
            keywords: ["light"]
        },
        "ceiling-beyond":{
            path:"M23.45,16.66c-0.69-2.4-2.19-4.07-3.84-5.24c0.34-0.13,0.54-0.32,0.54-0.64c0-0.17-0.03-0.31-0.19-0.45 c-0.8-1.51-3.05-2.78-3.8-3.16l-0.14-0.79C15.99,6.21,15.87,6.06,15.7,6c-0.05-0.02-1.32-0.48-3.7-0.48c-0.01,0-0.02,0-0.02,0 c-2.37,0-3.6,0.46-3.65,0.48C8.16,6.07,8.05,6.21,8.02,6.38L7.88,7.17c-0.74,0.39-3.01,1.66-3.8,3.18 c-0.14,0.13-0.17,0.27-0.17,0.43c0,0,0,0,0,0c0,0.01,0,0.02,0.01,0.03c0.02,0.29,0.21,0.47,0.53,0.6c-1.65,1.17-3.15,2.84-3.85,5.24 c-0.04,0.15-0.01,0.31,0.08,0.43c0.09,0.12,0.24,0.2,0.39,0.2c1.59,0.03,2.94,0.07,4.12,0.1c2.7,0.07,4.65,0.11,6.81,0.11 c3.06,0,10.9-0.21,10.98-0.21c0.15,0,0.3-0.08,0.39-0.21C23.46,16.97,23.49,16.81,23.45,16.66z M12,9.58 M5.69,9.88 C6.6,9.01,7.94,8.25,8.54,7.96c0.15-0.07,0.25-0.21,0.28-0.37l0.13-0.74c0.45-0.12,1.46-0.34,3.03-0.34c0.01,0,0.01,0,0.02,0 c1.58,0,2.63,0.22,3.09,0.34l0.13,0.73c0.03,0.16,0.13,0.3,0.28,0.37c0.6,0.29,1.94,1.05,2.85,1.92c0,0-3.94-0.48-6.35-0.48 S5.69,9.88,5.69,9.88z M12,16.51c-2.15,0-4-0.04-6.79-0.11c-1.02-0.03-2.15-0.05-3.45-0.08c0.85-2.27,2.55-3.75,4.27-4.72 c0.29-0.16,0.58-0.31,0.88-0.45c0.03-0.01,0.06-0.03,0.09-0.05c0.31-0.15,0.64-0.28,0.96-0.4c1.25-0.07,2.72-0.21,4.06-0.22 c1.62-0.02,3.1,0.13,4.04,0.22c0.33,0.12,0.65,0.26,0.97,0.41c0.03,0.02,0.07,0.03,0.1,0.05c0.29,0.14,0.58,0.29,0.86,0.45 c1.73,0.97,3.43,2.46,4.28,4.73C20.31,16.37,14.52,16.51,12,16.51z",
            keywords: ["light"]
        },
        "ceiling-beyond-alt":{
            path:"M23.45,16.66c-0.69-2.4-2.19-4.07-3.84-5.24c0.34-0.13,0.54-0.32,0.54-0.64c0-0.17-0.03-0.31-0.19-0.45 c-0.8-1.51-3.05-2.78-3.8-3.16l-0.14-0.79C15.99,6.21,15.87,6.06,15.7,6c-0.05-0.02-1.32-0.48-3.7-0.48c-0.01,0-0.02,0-0.02,0 c-2.37,0-3.6,0.46-3.65,0.48C8.16,6.07,8.05,6.21,8.02,6.38L7.88,7.17c-0.74,0.39-3.01,1.66-3.8,3.18 c-0.14,0.13-0.17,0.27-0.17,0.43c0,0,0,0,0,0c0,0.01,0,0.02,0.01,0.03c0.02,0.29,0.21,0.47,0.53,0.6c-1.65,1.17-3.15,2.84-3.85,5.24 c-0.04,0.15-0.01,0.31,0.08,0.43c0.09,0.12,0.24,0.2,0.39,0.2c1.59,0.03,2.94,0.07,4.12,0.1c2.7,0.07,4.65,0.11,6.81,0.11 c3.06,0,10.9-0.21,10.98-0.21c0.15,0,0.3-0.08,0.39-0.21C23.46,16.97,23.49,16.81,23.45,16.66z M5.69,9.88 C6.6,9.01,7.94,8.25,8.54,7.96c0.15-0.07,0.25-0.21,0.28-0.37l0.13-0.74c0.45-0.12,1.46-0.34,3.03-0.34c0.01,0,0.01,0,0.02,0 c1.58,0,2.63,0.22,3.09,0.34l0.13,0.73c0.03,0.16,0.13,0.3,0.28,0.37c0.6,0.29,1.94,1.05,2.85,1.92c0,0-3.42-0.5-6.35-0.5 S5.69,9.88,5.69,9.88z",
            keywords: ["light"]
        },
        "ceiling-buckram":{
            path:"M22.67,0.83H1.33c-0.28,0-0.5,0.22-0.5,0.5v3.49c0,0.12,0.04,0.24,0.12,0.33l1.86,2.16c0.09,0.11,0.23,0.17,0.38,0.17H7 c-2.45,1.79-3.86,4.84-3.86,7.74c0,4.68,3.15,7.95,7.66,7.95c4.35,0,9.4-3.77,9.4-8.64c0-2.54-0.87-4.8-2.45-6.37 c-0.25-0.25-0.52-0.47-0.8-0.68h3.83c0.14,0,0.28-0.06,0.38-0.17l1.89-2.16c0.08-0.09,0.12-0.21,0.12-0.33V1.33 C23.17,1.05,22.95,0.83,22.67,0.83z M12.17,21.38c-0.39,0.55-1.12,0.83-2.06,0.78c-1.02-0.05-2.13-0.47-3.13-1.18 c-1.97-1.4-2.92-3.59-2.07-4.77c0.84-1.18,3.22-1,5.19,0.4S13.01,20.2,12.17,21.38z",
            keywords: ["light","spot"]
        },
        "ceiling-buckram-three":{
            path:"M21.76,9.22c-0.41-0.41-0.9-0.72-1.43-0.97h0.6c0.14,0,0.28-0.06,0.38-0.17l1.22-1.4c0.08-0.09,0.12-0.21,0.12-0.33V4.11 c0-0.28-0.22-0.5-0.5-0.5h-2.97h-1h-4.8h-2.35h-4.8H6.07H1.44c-0.28,0-0.5,0.22-0.5,0.5v2.25c0,0.12,0.04,0.24,0.12,0.33l1.2,1.4 C2.36,8.19,2.5,8.25,2.64,8.25H4C1.86,9.3,0.6,11.67,0.6,13.9c0,3.12,2.11,5.31,5.12,5.31c0.97,0,1.98-0.29,2.91-0.78 c0.79,0.49,1.74,0.78,2.81,0.78c0.97,0,1.98-0.29,2.91-0.78c0.79,0.49,1.74,0.78,2.81,0.78c2.89,0,6.24-2.51,6.24-5.75 C23.4,11.77,22.82,10.27,21.76,9.22z M15.43,8.25c-0.13,0.06-0.26,0.14-0.38,0.21c-0.13-0.08-0.28-0.15-0.42-0.21H15.43z M9.71,8.25 C9.58,8.32,9.46,8.39,9.33,8.47C9.2,8.39,9.05,8.32,8.91,8.25H9.71z M6.46,17.78c-0.29,0.41-0.85,0.44-1.17,0.43 c-0.62-0.03-1.31-0.29-1.93-0.73c-0.62-0.44-1.09-1-1.32-1.58c-0.12-0.29-0.27-0.84,0.02-1.25c0.26-0.36,0.74-0.43,1.06-0.43 c0.04,0,0.08,0,0.11,0c0.62,0.03,1.31,0.29,1.93,0.73C6.35,15.79,6.95,17.09,6.46,17.78z M12.17,17.78c-0.49,0.69-1.91,0.55-3.1-0.3 c-1.19-0.85-1.79-2.15-1.3-2.83c0.26-0.36,0.74-0.43,1.06-0.43c0.04,0,0.08,0,0.11,0c0.62,0.03,1.31,0.29,1.93,0.73 c0.62,0.44,1.09,1,1.32,1.58C12.31,16.82,12.47,17.37,12.17,17.78z M17.89,17.78c-0.49,0.69-1.91,0.55-3.1-0.3 c-0.62-0.44-1.09-1-1.32-1.58c-0.12-0.29-0.27-0.84,0.02-1.25c0.26-0.36,0.74-0.43,1.06-0.43c0.04,0,0.08,0,0.11,0 c0.62,0.03,1.31,0.29,1.93,0.73C17.78,15.79,18.38,17.09,17.89,17.78z",
            keywords: ["light","spot"]
        },
        "ceiling-buckram-two":{
            path:"M22.7,2.69h-5.79H8.09H1.3c-0.28,0-0.5,0.22-0.5,0.5v2.71c0,0.12,0.04,0.24,0.12,0.33l1.45,1.68 C2.46,8.03,2.6,8.09,2.75,8.09H6.1c-2.83,1.11-4.5,4.1-4.5,6.92c0,3.71,2.5,6.3,6.08,6.3c1.34,0,2.76-0.46,4-1.24 c1.01,0.79,2.31,1.24,3.79,1.24c3.44,0,7.43-2.99,7.43-6.84c0-2-0.69-3.79-1.94-5.04c-0.59-0.59-1.29-1.04-2.08-1.34h2.36 c0.14,0,0.28-0.06,0.38-0.17l1.47-1.68c0.08-0.09,0.12-0.21,0.12-0.33V3.19C23.2,2.92,22.98,2.69,22.7,2.69z M13.89,8.09 c-0.51,0.2-0.99,0.47-1.42,0.78c-0.43-0.31-0.9-0.59-1.41-0.78H13.89z M8.65,19.74c-0.62,0.87-2.4,0.72-3.89-0.34 c-1.48-1.06-2.21-2.69-1.59-3.56c0.62-0.87,2.4-0.72,3.88,0.34C8.54,17.24,9.27,18.87,8.65,19.74z M16.43,19.74 c-0.62,0.87-2.4,0.72-3.89-0.34c-1.48-1.06-2.21-2.69-1.59-3.56c0.28-0.4,0.81-0.59,1.51-0.56c0.77,0.04,1.62,0.36,2.38,0.9 C16.33,17.24,17.05,18.87,16.43,19.74z",
            keywords: ["light","spot"]
        },
        "ceiling-buratto":{
            path:"M20.6,2.6h-13c-0.3,0-0.5,0.2-0.5,0.5v2.3c0,0.1,0,0.1,0,0.2c0,0,0,0,0,0.1c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0 l1.8,1.3c0.1,0.1,0.2,0.1,0.3,0.1h3.4v0.6c-0.7,0.1-1.3,0.4-1.7,0.9l-6.7,6.7c-0.7,0.7-1,1.7-0.9,2.7c0.1,1,0.6,2,1.4,2.8 c0.9,0.9,2.1,1.4,3.2,1.4c0.9,0,1.8-0.3,2.4-0.9l6.7-6.7c1.4-1.4,1.2-3.9-0.4-5.6c-0.3-0.3-0.6-0.5-1-0.8V7.2H19 c0.1,0,0.2,0,0.3-0.1l1.6-1.3c0,0,0,0,0,0c0,0,0.1-0.1,0.1-0.1c0,0,0,0,0,0c0-0.1,0-0.1,0-0.2V3.1C21.1,2.8,20.9,2.6,20.6,2.6z M5.5,20.3c-0.6-0.6-1-1.4-1.1-2.2c-0.1-0.8,0.2-1.5,0.6-1.9c0.4-0.4,1-0.7,1.7-0.7c0.1,0,0.2,0,0.3,0c0.8,0.1,1.6,0.5,2.2,1.1 c1.3,1.3,1.4,3.1,0.4,4.1C8.6,21.7,6.7,21.5,5.5,20.3z M13.8,8.7v-2c0-0.2,0.2-0.4,0.4-0.4s0.4,0.2,0.4,0.4l0,2.3 C14.4,8.9,14.1,8.7,13.8,8.7z M20.1,4.8h-12V3.6h12V4.8z",
            keywords: ["light","spot"]
        },
        "ceiling-buratto-four":{
            path:"M23.4,7.3V5.4c0-0.3-0.2-0.5-0.5-0.5H3.2c-0.3,0-0.5,0.2-0.5,0.5v1.9c0,0.1,0,0.1,0,0.2c0,0,0,0,0,0.1 c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0l1,0.8C4,8.5,4.1,8.6,4.2,8.6h1.7C5.6,8.7,5.3,8.8,5,9.1l-3.8,3.8c-0.9,0.9-0.8,2.4,0.2,3.5 c0.6,0.6,1.3,0.8,2,0.8c0.6,0,1.1-0.2,1.5-0.6l0.7-0.7c0.1,0.2,0.2,0.3,0.4,0.5c0.6,0.6,1.3,0.8,2,0.8c0.6,0,1.1-0.2,1.5-0.6 l0.8-0.8c0.1,0.2,0.2,0.4,0.4,0.5c0.5,0.5,1.1,0.8,1.7,0.8c0.1,0,0.1,0,0.2,0c0.6,0,1.1-0.2,1.5-0.6l0.7-0.7 c0.1,0.1,0.2,0.3,0.4,0.4c0.6,0.6,1.3,0.8,2,0.8c0.6,0,1.1-0.2,1.5-0.6l3.8-3.8c0.9-0.9,0.8-2.4-0.2-3.5c-0.2-0.2-0.3-0.3-0.5-0.4 V8.6H22c0.1,0,0.2,0,0.3-0.1l0.9-0.8c0,0,0,0,0,0c0.1-0.1,0.1-0.1,0.1-0.2c0,0,0,0,0-0.1C23.4,7.4,23.4,7.4,23.4,7.3z M4.2,15.9 c-0.5,0.5-1.4,0.4-2.1-0.2s-0.7-1.6-0.2-2.1c0.2-0.2,0.5-0.3,0.8-0.3c0.4,0,0.9,0.2,1.3,0.6C4.6,14.5,4.7,15.4,4.2,15.9z M3.7,5.9 h18.7v0.9H3.7V5.9z M8.8,15.9c-0.5,0.5-1.4,0.4-2.1-0.2S6,14.1,6.5,13.6c0.2-0.2,0.5-0.3,0.8-0.3c0.4,0,0.9,0.2,1.3,0.6 C9.2,14.5,9.3,15.4,8.8,15.9z M9.6,9.1L8.9,9.8C8.8,9.6,8.7,9.5,8.5,9.3C8.4,9.2,8.2,9,8,8.9V8.6h2.5C10.2,8.7,9.9,8.8,9.6,9.1z M13.4,15.9c-0.2,0.2-0.6,0.3-0.9,0.3c-0.4,0-0.8-0.2-1.1-0.5c-0.6-0.6-0.7-1.6-0.2-2.1c0.2-0.2,0.5-0.3,0.8-0.3 c0.4,0,0.9,0.2,1.3,0.6c0.3,0.3,0.5,0.7,0.5,1.1C13.8,15.4,13.6,15.7,13.4,15.9z M14.3,9.1l-0.8,0.8c-0.1-0.2-0.2-0.4-0.4-0.5 c-0.2-0.2-0.3-0.3-0.5-0.4V8.6h2.6C14.8,8.7,14.5,8.8,14.3,9.1z M17.9,15.9c-0.5,0.5-1.4,0.4-2.1-0.2c-0.6-0.6-0.7-1.6-0.2-2.1 c0.2-0.2,0.5-0.3,0.8-0.3c0.4,0,0.9,0.2,1.3,0.6C18.3,14.5,18.4,15.4,17.9,15.9z M18.7,9.1l-0.7,0.7c-0.1-0.1-0.2-0.3-0.4-0.4 c-0.2-0.2-0.3-0.3-0.5-0.4V8.6h2.4C19.3,8.7,19,8.8,18.7,9.1z",
            keywords: ["light","spot"]
        },
        "ceiling-buratto-three":{
            path:"M22.8,4.4H4c-0.3,0-0.5,0.2-0.5,0.5v1.9c0,0.1,0,0.1,0,0.2c0,0,0,0,0,0.1c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0 l1.3,1c0.1,0.1,0.2,0.1,0.3,0.1h2.3v0.2C7.1,8.5,6.7,8.7,6.4,9.1l-4.8,4.8c-1.1,1.1-0.9,2.9,0.3,4.2c0.7,0.7,1.5,1,2.4,1 c0.7,0,1.3-0.2,1.8-0.7l1-1c0.2,0.3,0.3,0.5,0.5,0.7c0.7,0.7,1.5,1,2.4,1c0.7,0,1.3-0.2,1.8-0.7l1.1-1.1c0.2,0.3,0.3,0.5,0.6,0.8 c0.7,0.7,1.5,1,2.4,1c0.7,0,1.3-0.2,1.8-0.7l4.8-4.8c0.5-0.5,0.8-1.3,0.7-2.1c-0.1-0.8-0.4-1.5-1-2.1c-0.2-0.2-0.4-0.4-0.7-0.5V8.2 h0.3c0.1,0,0.2,0,0.3-0.1l1.2-1c0,0,0,0,0,0C23.2,7.1,23.3,7,23.3,7c0,0,0,0,0-0.1c0,0,0-0.1,0-0.1V4.9C23.3,4.6,23.1,4.4,22.8,4.4z M5.3,17.7c-0.7,0.7-1.9,0.5-2.8-0.3c-0.8-0.8-1-2.1-0.3-2.8c0.3-0.3,0.7-0.4,1.1-0.4c0.6,0,1.2,0.3,1.7,0.7C5.8,15.7,6,17,5.3,17.7 z M11,17.7c-0.7,0.7-1.9,0.5-2.8-0.3c-0.4-0.4-0.7-0.9-0.7-1.5c0-0.5,0.1-1,0.4-1.3c0.3-0.3,0.7-0.4,1.1-0.4c0.6,0,1.2,0.2,1.7,0.7 c0.4,0.4,0.7,0.9,0.7,1.5C11.5,16.9,11.3,17.3,11,17.7z M8.6,9.1V7.7c0-0.2,0.3-0.2,0.3,0v1.5L8.6,9.1z M13.3,8.4 c-0.5,0.1-0.9,0.3-1.2,0.6l-1,1c-0.1-0.2-0.3-0.5-0.5-0.7C10.3,9.2,10.1,9,9.8,8.9V8.2h3.4V8.4z M16.8,17.7 c-0.7,0.7-1.9,0.5-2.8-0.3c-0.8-0.8-1-2.1-0.3-2.8c0.3-0.3,0.7-0.4,1.1-0.4c0.6,0,1.2,0.3,1.7,0.7C17.4,15.7,17.5,17,16.8,17.7z M14.3,9.1V7.7c0-0.2,0.3-0.2,0.3,0v1.5L14.3,9.1z M19.1,8.4c-0.5,0.1-0.9,0.3-1.2,0.6l-1.1,1.1c-0.2-0.3-0.3-0.5-0.6-0.8 C16,9.2,15.8,9,15.6,8.9V8.2h3.5V8.4z M20.4,9.2l-0.3-0.1V7.7c0-0.2,0.3-0.2,0.3,0V9.2z M22.3,6.3H4.5V5.4h17.8V6.3z",
            keywords: ["light","spot"]
        },
        "ceiling-buratto-two":{
            path:"M22.6,2.6H4.7c-0.3,0-0.5,0.2-0.5,0.5v2.2c0,0,0,0.1,0,0.1c0,0,0,0,0,0c0,0.1,0.1,0.2,0.2,0.2c0,0,0,0,0,0 l1.7,1.3C6.2,7,6.3,7,6.4,7h3.2v0.6C9,7.7,8.4,8,8,8.4l-6.4,6.4c-1.3,1.3-1.2,3.7,0.4,5.3c0.9,0.9,2,1.3,3,1.3 c0.9,0,1.7-0.3,2.3-0.9L8.8,19c0.2,0.4,0.5,0.8,0.8,1.1c0.9,0.9,2,1.3,3,1.3c0.9,0,1.7-0.3,2.3-0.9l6.4-6.4c1.3-1.3,1.2-3.7-0.4-5.3 c-0.3-0.3-0.6-0.5-0.9-0.7V7h1.3c0.1,0,0.2,0,0.3-0.1L23,5.7c0,0,0,0,0,0c0,0,0,0,0-0.1c0,0,0-0.1,0.1-0.1c0,0,0,0,0-0.1 c0,0,0-0.1,0-0.1c0,0,0,0,0,0V3.1C23.1,2.8,22.9,2.6,22.6,2.6z M6.6,19.8c-1,1-2.7,0.8-3.9-0.4c-1.2-1.2-1.4-2.9-0.4-3.9 c0.4-0.4,1-0.6,1.6-0.6c0.8,0,1.6,0.3,2.3,1C7.3,17.1,7.5,18.8,6.6,19.8z M14.1,19.8c-1,1-2.7,0.8-3.9-0.4s-1.4-2.9-0.4-3.9 c0.4-0.4,1-0.6,1.6-0.6c0.8,0,1.6,0.3,2.3,1c0.6,0.6,0.9,1.3,1,2.1C14.8,18.7,14.6,19.3,14.1,19.8z M10.6,8.5v-2 c0-0.2,0.2-0.4,0.4-0.4s0.4,0.2,0.4,0.4v2.2L10.6,8.5z M17.1,7.6C16.5,7.7,16,8,15.5,8.4L14,9.9c-0.2-0.4-0.5-0.8-0.8-1.1 c-0.3-0.3-0.6-0.5-0.9-0.7V7h4.8V7.6z M18.9,8.7l-0.7-0.2v-2c0-0.2,0.2-0.4,0.4-0.4c0.2,0,0.4,0.2,0.4,0.4V8.7z M22.1,4.8H6.6H5.2 V3.6h16.9V4.8z",
            keywords: ["light","spot"]
        },
        "ceiling-cher-semiflush":{
            path:"M23.54,13.57c0-2.29-4.14-3.68-11.09-3.74V8.22c1.24-0.07,2.5-0.44,2.5-1.29V6.51c0-0.96-1.61-1.3-2.99-1.3 c-1.38,0-2.99,0.34-2.99,1.3v0.42c0,0.85,1.25,1.21,2.49,1.29v1.61c-6.89,0.07-11,1.45-11,3.74c0,0.14,0.01,0.28,0.03,0.41 c0,0.01,0,0.01,0.01,0.01c0.39,2.29,3.98,3.32,11.51,3.32c7.55,0,11.14-1.04,11.51-3.34c0-0.01,0.01-0.02,0.01-0.03 C23.53,13.82,23.54,13.69,23.54,13.57z M12,16.31c-6.5,0-10.02-0.8-10.49-2.37c0.37-0.46,2.86-1.55,10.49-1.55 c8.39,0,10.22,1.31,10.49,1.54C22.03,15.51,18.51,16.31,12,16.31z",
            keywords: ["ceiling","light"]
        },
        "ceiling-explore":{
            path:"M17.4,19.1c0-0.1,0-0.2,0-0.3l0,0c-0.1-0.2-0.2-0.5-0.3-0.7L14.9,13c0,0,0,0,0,0c0,0,0,0,0,0c-1-2.3-1-3.3-1-3.3l-0.1-6.9 c0-0.1,0-0.2-0.1-0.2c0-0.1-0.5-0.8-1.7-0.8c-1,0-1.5,0.6-1.6,0.9c0,0.1,0,0.1,0,0.2c0,0-0.1,5-0.1,6.7c0,0.7-0.2,1.5-0.5,2.2 c0,0,0,0,0,0L9.1,13c0,0.1-0.1,0.1-0.1,0.2c0,0,0,0,0,0l-2.1,5c-0.1,0.2-0.2,0.4-0.3,0.7l0,0.1c0,0.1,0,0.2,0,0.3c0,0.1,0,0.1,0,0.2 c0,1.9,2.4,3.4,5.4,3.4s5.4-1.5,5.4-3.4C17.4,19.3,17.4,19.2,17.4,19.1z M13.3,12C13.3,12,13.3,12,13.3,12C13.3,12,13.3,12,13.3,12 C13.3,12,13.3,12,13.3,12z M9.7,14.2C9.7,14.2,9.7,14.2,9.7,14.2l0.3-0.7c0.1-0.2,0.7-0.7,2.1-0.7c1.3,0,1.7,0.3,1.8,0.4 c0,0,0,0,0,0c0,0,0,0,0,0l0,0.1l0,0l0,0l1.4,3.3C14.4,16.2,13.3,16,12,16c-1.3,0-2.5,0.3-3.4,0.7L9.7,14.2z M12,21.8 c-2.4,0-4.4-1.1-4.4-2.4S9.6,17,12,17s4.4,1.1,4.4,2.4S14.4,21.8,12,21.8z",
            keywords: ["light","pendant"]
        },
        "ceiling-fair":{
            path:"M23.42,9.35c0-2.34-7.47-2.96-11.41-2.96S0.59,7.01,0.59,9.35l0.04,4.24C0.59,15.57,8.17,16.35,12,16.35 c3.86,0,11.06-0.6,11.38-2.81L23.42,9.35z M12,15.35c-6.74,0-10.41-1.3-10.41-1.96c0-0.52,2.22-1.41,6.35-1.78 c1.74-0.09,3.63-0.13,5.51-0.15c5.82,0.17,8.97,1.32,8.97,1.94C22.42,14.06,18.74,15.35,12,15.35z M12.02,12.83 c-0.22,0-2.15,0.02-2.15,0.79s1.93,0.79,2.15,0.79s2.16-0.02,2.16-0.79S12.25,12.83,12.02,12.83z",
            keywords: ["light"]
        },
        "ceiling-fair-semiflush":{
            path:"M11.96,8.78c-3.95,0-11.41,0.62-11.41,2.96l0.04,4.24c-0.04,1.99,7.54,2.77,11.38,2.77 c3.86,0,11.06-0.6,11.38-2.81l0.03-4.19C23.38,9.4,15.91,8.78,11.96,8.78z M11.96,17.75c-6.74,0-10.41-1.3-10.41-1.96 c0-0.52,2.22-1.41,6.35-1.78c1.74-0.09,3.63-0.13,5.51-0.15c5.82,0.17,8.97,1.32,8.97,1.94C22.38,16.45,18.7,17.75,11.96,17.75 M11.99,15.22c-0.22,0-2.15,0.02-2.15,0.79c0,0.77,1.93,0.79,2.15,0.79s2.16-0.02,2.16-0.79 S12.21,15.22,11.99,15.22z M11.42,7.17v1.61l1,0V7.17c1.24-0.07,2.5-0.44,2.5-1.29V5.46c0-0.96-1.61-1.3-2.99-1.3 c-1.38,0-2.99,0.34-2.99,1.3v0.42C8.93,6.73,10.18,7.09,11.42,7.17z",
            keywords: ["light","pendant"]
        },
        "ceiling-flourish":{
            path:"M12,6.3C6.5,6.3,0.9,7.5,0.9,9.6v2c0,0.3,0.2,0.5,0.5,0.5c0,0,0.1,0,0.1,0c0.1,1,0.6,2.3,2.4,3.5c2.7,1.9,6.8,2,8,2h0.3 c0,0,0.1,0,0.1,0c1.3,0,5.3-0.2,7.9-2c1.7-1.2,2.3-2.5,2.4-3.5c0,0,0.1,0,0.1,0c0.3,0,0.5-0.2,0.5-0.5v-2C23.1,7.5,17.5,6.3,12,6.3z M19.6,14.8c-2.4,1.7-6.3,1.9-7.4,1.8h-0.3c-1.1,0-5-0.1-7.4-1.8c-2.6-1.9-1.9-3.7-1.9-3.8l0-0.1c0,0,0,0,0,0 c1.3-0.7,4.5-1.6,9.4-1.6c4.9,0,8.1,0.8,9.4,1.6l0,0.1C21.5,11.1,22.1,12.9,19.6,14.8z",
            keywords: ["light"]
        },
        "ceiling-flourish-pendant":{
            path:"M15.39,12.45V3.43c0.66-0.19,1.08-0.43,1.08-0.7V1.85c0-0.57-1.81-1.04-4.04-1.04c-2.23,0-4.04,0.47-4.04,1.04v0.87 c0,0.27,0.42,0.52,1.08,0.7v8.91C6.29,13.14,4,15.29,4,17.82c0,2.42,2.08,4.49,5.05,5.37h6.33c0.05-0.02,0.11-0.03,0.16-0.04 c2.89-0.9,4.9-2.95,4.9-5.33C20.43,15.4,18.35,13.33,15.39,12.45z M10.48,7.5c0-1.33,0.65-2.24,1.46-2.86v5.91 C11.13,9.82,10.48,8.82,10.48,7.5z M11.94,11.84v0.17c-0.5,0.01-0.98,0.05-1.46,0.12v-1.68C10.9,11.01,11.41,11.47,11.94,11.84z M12.94,4.03c0.29-0.14,0.57-0.25,0.83-0.33c0.22-0.02,0.42-0.04,0.62-0.07v8.39c-0.39-0.15-0.92-0.39-1.46-0.72V4.03z M11.53,3.73 c-0.38,0.27-0.75,0.58-1.05,0.95V3.63C10.81,3.67,11.16,3.71,11.53,3.73z M15.24,22.2H9.2C6.64,21.4,5,19.69,5,17.82 C5,15.16,8.24,13,12.22,13s7.22,2.16,7.22,4.82C19.43,19.68,17.8,21.39,15.24,22.2z",
            keywords: ["light"]
        },
        "ceiling-flush-circular":{
            path:"M12,4.6c-6.6,0-11.8,2.8-11.8,6.5V12c0,3.6,5.2,6.5,11.8,6.5s11.8-2.8,11.8-6.5v-0.9C23.8,7.5,18.6,4.6,12,4.6z M12,17.4 c-5.9,0-10.8-2.5-10.8-5.5s5-5.5,10.8-5.5S22.8,9,22.8,12S17.9,17.4,12,17.4z M4.4,12.3c0,2.3,3.4,4.1,7.6,4.1s7.8-1.8,7.6-4.1c0-0.2,0-0.4-0.1-0.7c-0.4-1.9-3.6-3.3-7.6-3.3s-7.2,1.4-7.6,3.3 C4.4,11.9,4.4,12.3,4.4,12.3z M12,9.3c3.8,0,6.5,1.4,6.6,2.7c-0.2,1.4-2.8,2.9-6.6,2.9c-3.8,0-6.5-1.5-6.6-2.9 C5.5,10.7,8.2,9.3,12,9.3z",
            keywords: ["light"]
        },
        "ceiling-fugato-four":{
            path:"M23.4,8.3V7.9c0-0.9-1.1-1.5-2.7-1.5H4.2c-1.3,0-2.4,0.5-2.6,1.2c0,0.1-0.1,0.1-0.1,0.2v0.4c0,0,0,0,0,0.1 c0,1.1,1.2,1.9,2.7,1.9h2.5v0.5c-0.5-0.1-0.9,0-1.3,0.3C4.9,11.3,1,14.1,1,14.1c-0.5,0.3-0.8,0.9-0.8,1.6s0.2,1.4,0.6,2 c0.6,1,1.6,1.5,2.4,1.5c0.4,0,0.7-0.1,1-0.3l0.5-0.3l0.1-0.1L5.5,18c0.6,0.8,1.5,1.3,2.2,1.3c0.4,0,0.7-0.1,1-0.3l0.5-0.3l0.1-0.1 l0.7-0.5c0.4,0.5,0.9,0.9,1.4,1.1c0.3,0.1,0.6,0.2,0.8,0.2c0.4,0,0.7-0.1,1-0.3l0.5-0.4c0,0,0,0,0.1-0.1l0.8-0.5 c0.6,0.8,1.5,1.3,2.2,1.3c0.4,0,0.7-0.1,1-0.3l0.5-0.4l0.1-0.1c1.1-0.8,3.4-2.4,3.8-2.6c1-0.7,1.1-2.3,0.2-3.6c-0.3-0.4-0.6-0.7-1-1 v-1.1C22.7,9.9,23.4,9.2,23.4,8.3z M4.1,17.7l-0.5,0.4c-0.4,0.3-1.4-0.1-2-1c-0.3-0.4-0.5-1-0.5-1.4c0-0.2,0.1-0.6,0.4-0.8L2,14.5 c0.1-0.1,0.3-0.1,0.4-0.1c0.5,0,1.2,0.4,1.6,1.1c0.3,0.4,0.5,1,0.5,1.4C4.5,17.1,4.4,17.5,4.1,17.7z M8.8,17.7l-0.5,0.4 c-0.5,0.4-1.5-0.1-2-0.9c-0.3-0.4-0.5-1-0.5-1.4c0-0.2,0.1-0.6,0.4-0.8l0.5-0.4c0.1-0.1,0.3-0.1,0.4-0.1h0.1c0.5,0,1.1,0.4,1.6,1.1 c0.3,0.4,0.5,1,0.5,1.4C9.2,17.1,9.1,17.5,8.8,17.7z M10,11c-0.2,0.1-0.7,0.5-1.4,0.9c-0.2-0.3-0.5-0.5-0.8-0.7v-1h3.4v0.5 C10.8,10.6,10.3,10.7,10,11z M13.4,17.7l-0.5,0.4c-0.3,0.2-0.7,0.1-0.9,0c-0.4-0.2-0.8-0.5-1.1-1c-0.3-0.5-0.5-1-0.5-1.4 c0-0.2,0.1-0.6,0.4-0.8l0.5-0.4c0.1-0.1,0.3-0.1,0.4-0.1c0.5,0,1.2,0.4,1.6,1.1c0.3,0.4,0.5,1,0.5,1.4 C13.7,17.1,13.7,17.5,13.4,17.7z M14.5,11c-0.2,0.1-0.7,0.5-1.4,0.9c-0.2-0.3-0.5-0.5-0.8-0.7v-1h3.4v0.5 C15.4,10.6,14.9,10.7,14.5,11z M18,17.7l-0.5,0.4c-0.5,0.4-1.5-0.1-2-0.9c-0.6-0.9-0.6-1.9-0.1-2.2l0.5-0.4c0.1-0.1,0.3-0.1,0.4-0.1 c0.2,0,0.4,0.1,0.5,0.1c0.4,0.2,0.8,0.5,1.1,1c0.3,0.5,0.5,1,0.5,1.4C18.3,17.1,18.3,17.5,18,17.7z M20.3,10.7 c-0.3-0.1-0.8,0-1.2,0.3c-0.2,0.1-0.7,0.5-1.4,0.9c-0.2-0.3-0.5-0.5-0.8-0.7v-1h3.4V10.7z",
            keywords: ["light","spot"]
        },
        "ceiling-fugato-four-alt":{
            path:"M20.8,5.8H4.2c-1.5,0-2.7,0.6-2.7,1.5v1.8h0.1c0.2,0.9,1.3,1.5,2.6,1.5h2.5l0,0.1c-0.5-0.1-0.9,0-1.3,0.3 C4.9,11.3,1,14.1,1,14.1c0,0,0,0,0,0c-0.5,0.3-0.8,0.9-0.8,1.6c0,0.7,0.2,1.4,0.6,2c0.6,1,1.6,1.5,2.4,1.5c0.4,0,0.7-0.1,1-0.3 c0,0,0,0,0,0c0,0,0,0,0,0l0.4-0.3c0,0,0.1,0,0.1-0.1c0,0,0.1-0.1,0.1-0.1l0.7-0.5c0.6,0.8,1.5,1.3,2.2,1.3c0.4,0,0.7-0.1,1-0.3 c0,0,0,0,0,0c0,0,0,0,0,0l0.4-0.3c0,0,0.1,0,0.1-0.1c0,0,0.1-0.1,0.1-0.1l0.7-0.5c0.4,0.5,0.9,0.9,1.4,1.1c0.3,0.1,0.6,0.2,0.8,0.2 c0.4,0,0.7-0.1,1-0.3c0,0,0,0,0,0c0,0,0,0,0,0l0.4-0.3c0,0,0.1,0,0.1-0.1c0,0,0.1-0.1,0.1-0.1l0.7-0.5c0.6,0.8,1.5,1.3,2.2,1.3 c0.4,0,0.7-0.1,1-0.3c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0.2-0.1,0.4-0.3c0,0,0.1,0,0.1-0.1c0,0,0.1-0.1,0.1-0.1c1.1-0.8,3.4-2.4,3.8-2.6 c1-0.7,1.1-2.3,0.2-3.6c-0.3-0.4-0.6-0.7-1-1l0-0.7c0.9-0.2,1.6-0.7,1.8-1.4h0.1V7.3C23.4,6.4,22.3,5.8,20.8,5.8z M5.6,14.1 C5.5,14.1,5.5,14.1,5.6,14.1c-0.3,0.2-0.5,0.5-0.6,0.8c-0.4-0.6-1-1.1-1.6-1.3c1.1-0.8,2.3-1.6,2.6-1.8c0.3-0.2,0.7-0.1,0.9,0 c0.3,0.1,0.7,0.4,0.9,0.7C6.7,13.3,5.6,14.1,5.6,14.1z M7.8,10.6h3.4l0,0.1c-0.5-0.1-0.9,0-1.3,0.3c-0.2,0.1-0.7,0.5-1.4,0.9 c-0.2-0.3-0.5-0.5-0.8-0.7L7.8,10.6z M12.3,12.5c-1.1,0.8-2.2,1.5-2.2,1.5c0,0,0,0,0,0c-0.3,0.2-0.5,0.5-0.6,0.8 c-0.4-0.6-1-1.1-1.6-1.3L8.8,13c0,0,0,0,0,0c0.8-0.6,1.6-1.1,1.8-1.2c0.3-0.2,0.7-0.1,0.9,0C11.8,11.9,12.1,12.2,12.3,12.5 L12.3,12.5z M12.4,10.6h3.4l0,0.1c-0.5-0.1-0.9,0-1.3,0.3c-0.2,0.1-0.7,0.5-1.4,0.9c-0.2-0.3-0.5-0.5-0.8-0.7L12.4,10.6z M16.7,12.7 c-1,0.7-1.9,1.4-2,1.4c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c-0.3,0.2-0.5,0.5-0.6,0.8c-0.4-0.6-1-1.1-1.6-1.3l0.7-0.5 c0.9-0.6,1.7-1.2,1.9-1.3c0.3-0.2,0.7-0.1,0.9,0c0.3,0.1,0.7,0.4,0.9,0.7L16.7,12.7z M17,10.6h3.4l0,0.1c-0.5-0.1-0.9,0-1.3,0.3 c-0.2,0.1-0.7,0.5-1.4,0.9c-0.2-0.3-0.5-0.5-0.8-0.7L17,10.6z M21.7,12.8C21.7,12.8,21.7,12.8,21.7,12.8c0.6,0.9,0.6,1.9,0.1,2.2 c-0.2,0.2-1.4,1-2.5,1.8c0-0.6-0.2-1.3-0.6-1.8c-0.4-0.6-1-1.1-1.6-1.3l0.8-0.6c0,0,0,0,0,0c0.8-0.6,1.6-1.1,1.8-1.2 c0.3-0.2,0.7-0.1,0.9,0C21,12,21.4,12.3,21.7,12.8z M21.5,9.5l0-0.8c0,0-0.4-0.4-1.2-0.1l0.1,1H17l0-0.9c0,0-0.4-0.4-1.2-0.1l0.1,1 h-3.4l0-0.9c0,0-0.4-0.4-1.2-0.1l0.1,1H7.8l0-0.9c0,0-0.4-0.4-1.2-0.1l0.1,1H4.2c-1,0-1.7-0.5-1.7-0.9s0.7-0.9,1.7-0.9h16.6 c1,0,1.7,0.5,1.7,0.9C22.4,9,22.1,9.3,21.5,9.5z",
            keywords: ["light","spot"]
        },
        "ceiling-fugato-three":{
            path:"M22.5,11.6C22.5,11.6,22.5,11.6,22.5,11.6c0,0-4.3-3-4.8-3.4c0,0-0.1,0-0.1-0.1c1.7-0.3,3.2-0.8,3.2-1.6v-1 c0-1.9-7.1-2-8.5-2c-1.4,0-8.5,0.1-8.5,2v1c0,0.8,1.2,1.2,2.7,1.5c-0.1,0-0.2,0.1-0.3,0.2c-0.5,0.3-4.8,3.4-4.8,3.4c0,0,0,0,0,0 c-0.5,0.4-0.8,1-0.8,1.8c0,0.7,0.2,1.5,0.7,2.1c0.5,0.7,1.1,1.2,1.7,1.4c0.3,0.1,0.6,0.2,0.9,0.2c0.4,0,0.7-0.1,1-0.3l0,0 c0,0,0,0,0,0c0,0,0,0,0,0l0.6-0.4c0,0,0.1-0.1,0.1-0.1C6.5,15.7,8.1,14.6,9,14c0,0.7,0.1,1.2,0.1,1.2l0,0c0,0,0,0,0,0c0,0,0,0,0,0 c0,0,0,0,0,0c0,1.3,1.4,2.2,3.1,2.2c0,0,0.1,0,0.1,0c1.8,0,3.1-1.1,3.1-2.4l0-0.7c0,0,0-0.1,0-0.1c0.9,0.7,2.2,1.6,3,2.1 c0,0,0.1,0.1,0.1,0.1l0.6,0.4c0.3,0.2,0.7,0.3,1,0.3c0.3,0,0.6-0.1,0.9-0.2c0.7-0.3,1.3-0.8,1.7-1.4c0.5-0.7,0.7-1.4,0.7-2.1 C23.4,12.6,23.1,12,22.5,11.6z M5,15.6L4.4,16c-0.4,0.2-0.8,0.1-1,0c-0.5-0.2-0.9-0.6-1.3-1.1c-0.3-0.5-0.5-1.1-0.5-1.6 c0-0.3,0.1-0.7,0.4-0.9l0.6-0.4c0.4-0.2,0.8-0.1,1,0c0.5,0.2,0.9,0.6,1.3,1.1C5.5,14,5.6,15.2,5,15.6z M12.2,16.4 c-1.2,0-2.2-0.5-2.2-1.3l0-0.7c0-0.4,0.3-0.7,0.5-0.9c0.4-0.3,1-0.5,1.6-0.5c0,0,0.1,0,0.1,0c0.6,0,1.1,0.1,1.5,0.4 c0.2,0.1,0.6,0.4,0.6,0.9l0,0.7C14.4,15.8,13.4,16.4,12.2,16.4z M16.6,6.2c-1.1-0.4-1.7,0.1-1.8,0.1l-0.2,0.1l-0.1,1 c-0.2,0-0.4,0-0.6,0c0,0,0,0-0.1,0c-0.1-0.1-0.2-0.1-0.4-0.2c-0.1,0-0.1,0-0.2-0.1c-0.1,0-0.2-0.1-0.2-0.1l0-0.9l0-0.1 c-0.1-0.3-0.6-0.6-1.8-0.3L11,6v1.1c0,0-0.1,0-0.1,0c-0.1,0-0.3,0.1-0.4,0.1c0,0,0,0,0,0c-0.1,0.1-0.3,0.1-0.4,0.2 c-0.2,0-0.5,0-0.7,0l-0.1-1L9.1,6.3C9.1,6.2,8.5,5.8,7.3,6.2L7,6.3L7,7.2C5.9,7,5.2,6.7,4.9,6.6c0.6-0.4,3.1-1,7.4-1 c4.3,0,6.8,0.6,7.4,1c-0.3,0.2-1.2,0.5-2.8,0.7l0.1-1L16.6,6.2z M21.9,14.9c-0.3,0.5-0.8,0.9-1.3,1.1c-0.2,0.1-0.7,0.2-1,0L19,15.6 c-0.6-0.4-0.5-1.5,0.1-2.5c0.3-0.5,0.8-0.9,1.3-1.1c0.1-0.1,0.3-0.1,0.5-0.1c0.2,0,0.3,0,0.5,0.1l0.6,0.4c0.4,0.2,0.4,0.7,0.4,0.9 C22.4,13.9,22.2,14.5,21.9,14.9z",
            keywords: ["light","spot"]
        },
        "ceiling-fugato-three-alt":{
            path:"M22.5,11.6C22.5,11.6,22.5,11.6,22.5,11.6C22.5,11.6,22.5,11.6,22.5,11.6C22.5,11.6,22.5,11.6,22.5,11.6 C22.5,11.6,22.5,11.6,22.5,11.6c-0.1-0.1-4.3-3-4.8-3.4c0,0-0.1,0-0.1-0.1c1.7-0.3,3.2-0.8,3.2-1.6v-1c0-1.9-7.1-2-8.5-2 c-1.4,0-8.5,0.1-8.5,2v1c0,0.8,1.2,1.2,2.7,1.5c-0.1,0-0.2,0.1-0.3,0.2c-0.5,0.3-4.8,3.4-4.8,3.4c0,0,0,0,0,0 c-0.5,0.4-0.8,1-0.8,1.8c0,0.7,0.2,1.5,0.7,2.1c0.5,0.7,1.1,1.2,1.7,1.4c0.3,0.1,0.6,0.2,0.9,0.2c0.4,0,0.7-0.1,1-0.3c0,0,0,0,0,0 c0,0,0,0,0,0c0,0,0.2-0.1,0.4-0.3c0,0,0.1,0,0.1-0.1c0,0,0.1-0.1,0.1-0.1C6.5,15.7,8.1,14.6,9,14c0,0.7,0.1,1.2,0.1,1.2c0,0,0,0,0,0 c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,1.3,1.4,2.2,3.1,2.2c0,0,0.1,0,0.1,0c1.8,0,3.1-1.1,3.1-2.4c0,0,0,0,0,0c0,0,0,0,0,0 c0,0,0-0.2,0-0.5c0,0,0-0.1,0-0.1c0,0,0-0.1,0-0.1c0.9,0.7,2.2,1.6,3,2.1c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0,0.1,0.1 c0.3,0.2,0.4,0.3,0.4,0.3c0,0,0,0,0,0c0,0,0,0,0,0c0.3,0.2,0.7,0.3,1,0.3c0.3,0,0.6-0.1,0.9-0.2c0.7-0.3,1.3-0.8,1.7-1.4 c0.5-0.7,0.7-1.4,0.7-2.1C23.4,12.6,23.1,12,22.5,11.6z M20,11.1C20,11.1,20,11.1,20,11.1c-0.7,0.3-1.3,0.8-1.8,1.4v0 c-0.5,0.7-0.7,1.4-0.7,2.1c-0.9-0.6-1.8-1.3-2.3-1.6c0-1.1-0.1-2.4-0.1-3.1c0.6-0.8,1.5-1.1,2.1-0.7C17.4,9.3,18.8,10.2,20,11.1z M8.9,8.5l0-0.1c0.1,0,0.1,0,0.2,0C9,8.5,9,8.5,8.9,8.5C8.9,8.6,8.9,8.5,8.9,8.5z M10.4,8.4C10.8,8.1,11.4,8,11.9,8 c0.1,0,0.3,0,0.4,0c0,0,0,0,0,0c0.5,0.1,0.9,0.2,1.2,0.4l0.1,0.1l0,0c0.2,0.2,0.4,0.4,0.4,0.7c0,0.1,0,0.2,0,0.5c0,0,0,0,0,0 c0,0.4,0,0.9,0.1,1.4c0,0.5,0,1,0.1,1.6c-0.6-0.4-1.3-0.5-2.1-0.5c-0.8,0-1.6,0.3-2.1,0.7c0,0,0,0,0,0c0-0.3,0-0.6,0-1 c0-0.9-0.1-1.8-0.1-2.3c0,0,0,0,0,0c0-0.1,0-0.2,0-0.3c0-0.3,0.2-0.6,0.5-0.9L10.4,8.4z M15.1,8.5c0,0-0.1,0.1-0.1,0.1 c0-0.1,0-0.1-0.1-0.2C15,8.4,15,8.4,15.1,8.5L15.1,8.5z M12.3,4.6C12.3,4.6,12.3,4.6,12.3,4.6C12.3,4.6,12.3,4.6,12.3,4.6 C12.3,4.6,12.3,4.6,12.3,4.6z M15.5,4.7c0,0-0.1,0-0.1,0C15.4,4.7,15.4,4.7,15.5,4.7z M14.2,4.6c-0.1,0-0.2,0-0.4,0 C13.9,4.6,14,4.6,14.2,4.6z M10.8,4.6c-0.1,0-0.2,0-0.3,0C10.6,4.6,10.7,4.6,10.8,4.6z M12.3,5.6c4.3,0,6.8,0.6,7.4,1 c-0.3,0.2-1.4,0.5-3.3,0.8l0.1-0.7c-0.9-0.3-1.3,0-1.3,0l0,0.8c-0.4,0-0.7,0-1.1,0.1c0,0,0,0-0.1,0c-0.1-0.1-0.2-0.1-0.4-0.2 c-0.1,0-0.1,0-0.2-0.1c-0.1,0-0.2-0.1-0.3-0.1c-0.1,0-0.3-0.1-0.4-0.1l0-0.7c0,0-0.1-0.3-1.2,0V7c0,0-0.1,0-0.1,0 c-0.1,0-0.2,0-0.3,0.1c-0.1,0-0.1,0-0.2,0c-0.1,0-0.3,0.1-0.4,0.1c0,0,0,0,0,0c-0.1,0.1-0.3,0.1-0.4,0.2c-0.4,0-0.8-0.1-1.2-0.1 l0-0.7c0,0-0.4-0.3-1.3,0l0.1,0.6C6.1,7,5.2,6.7,4.9,6.6C5.5,6.2,8,5.6,12.3,5.6z M6.4,14.6c0-0.7-0.2-1.4-0.7-2.1v0 c-0.5-0.7-1.1-1.2-1.7-1.4c0,0,0,0,0,0c1.2-0.9,2.6-1.8,2.9-2c0.5-0.3,1.4,0,2,0.7c0,0.7,0.1,1.9,0.1,3C8.5,13.1,7.4,13.9,6.4,14.6z ",
            keywords: ["light","spot"]
        },
        "ceiling-fugato-two":{
            path:"M22.3,13.6c-0.1-0.1-0.3-0.2-0.7-0.5c-1.2-0.9-3.7-2.7-4.1-2.9c-0.2-0.1-0.3-0.2-0.5-0.3c-0.1,0-0.2,0-0.3-0.1 c-0.2,0-0.3,0-0.5,0V9.7c1.7,0,3.3-0.7,3.3-1.6v-2c0-0.5-0.5-0.9-1.2-1.2l0,0h0c-0.6-0.2-1.3-0.4-2.1-0.4h-0.8H8.8H7.9 c-0.4,0-0.8,0-1.2,0.1l0,0l0,0C5.7,4.9,5,5.4,5,6.1v2C5,9,6.2,9.7,7.9,9.7h0.4v0.1c-0.2,0-0.4,0-0.6,0c-0.1,0-0.2,0-0.3,0.1 C7.2,10,7,10,6.9,10.2c-0.4,0.2-2.9,2-4.1,2.9c-0.4,0.3-0.6,0.4-0.6,0.4c-0.5,0.4-0.8,1-0.8,1.7s0.2,1.5,0.7,2.1 c0.5,0.7,1.1,1.2,1.7,1.4C4,19,4.3,19.1,4.6,19.1c0.4,0,0.7-0.1,1-0.3h0.1c0,0,4.3-3,4.8-3.4c1.1-0.7,1.2-2.5,0.2-3.9 c-0.3-0.5-0.7-0.9-1.2-1.2V9.8h5.3v0.5c-0.4,0.3-0.8,0.6-1.2,1.1c-1,1.5-0.9,3.2,0.2,3.9c0.5,0.3,4.8,3.4,4.8,3.4h0.1 c0.3,0.2,0.6,0.3,1,0.3c0.3,0,0.6-0.1,0.9-0.3c0.6-0.2,1.2-0.7,1.7-1.4c0.5-0.6,0.7-1.4,0.7-2.1S22.8,14,22.3,13.6z M5.7,17.6 L5.1,18c-0.6,0.4-1.7-0.1-2.3-1c-0.3-0.5-0.5-1.1-0.5-1.6c0-0.3,0.1-0.7,0.4-1L3.3,14c0.2-0.1,0.3-0.1,0.5-0.1S4.2,14,4.3,14 c0.5,0.2,0.9,0.6,1.3,1.1C6.3,16,6.3,17.2,5.7,17.6z M14.8,8.6v0.1H9.5c0-0.1-0.4-0.4-1.3-0.1v0.1H7.9C6.7,8.7,6,8.2,6,8.1 C6,8,6.6,7.5,7.9,7.5h0.9h6.7h0.9c1.2,0,1.9,0.5,1.9,0.6c0,0.1-0.6,0.6-1.9,0.6h-0.3V8.6C15.2,8.3,14.8,8.6,14.8,8.6z M21.5,16.9 c-0.7,1-1.7,1.4-2.3,1l-0.6-0.4c-0.6-0.4-0.5-1.6,0.1-2.5c0.3-0.5,0.8-0.9,1.3-1.1c0.1-0.1,0.3-0.1,0.5-0.1s0.3,0,0.5,0.1l0.6,0.4 c0.4,0.2,0.4,0.7,0.4,1C22.1,15.8,21.9,16.4,21.5,16.9z",
            keywords: ["light","spot"]
        },
        "ceiling-fugato-two-alt":{
            path:"M21.9,13.6C21.9,13.6,21.9,13.6,21.9,13.6C21.9,13.6,21.9,13.6,21.9,13.6C21.9,13.6,21.9,13.6,21.9,13.6 C21.9,13.6,21.9,13.6,21.9,13.6c-0.1-0.1-4.3-3-4.8-3.4c-0.4-0.3-0.9-0.4-1.4-0.3l0-0.2h0.4c1.7,0,2.9-0.7,2.9-1.6v-2 c0-0.9-1.2-1.6-2.9-1.6h-0.8H8.8H7.9c-1.7,0-2.9,0.7-2.9,1.6v2c0,0.9,1.2,1.6,2.9,1.6h0.4l0,0.2c-0.5-0.1-1,0-1.4,0.3 c-0.5,0.3-4.8,3.4-4.8,3.4c0,0,0,0,0,0c-0.5,0.4-0.8,1-0.8,1.7c0,0.7,0.2,1.5,0.7,2.1c0.5,0.7,1.1,1.2,1.7,1.4 C4,19,4.3,19.1,4.6,19.1c0.4,0,0.7-0.1,1-0.3c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0.2-0.1,0.4-0.3c0,0,0.1,0,0.1-0.1c0,0,0.1-0.1,0.1-0.1 c1.2-0.9,3.7-2.6,4.1-2.9c1.1-0.7,1.1-2.4,0.2-3.9c-0.3-0.4-0.6-0.8-1-1l0-0.7h4.9l0,0.7c-0.4,0.3-0.7,0.6-1,1c0,0,0,0,0,0 c-1,1.5-0.9,3.2,0.2,3.9c0.4,0.3,2.9,2,4.1,2.9c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0,0.1,0.1c0.3,0.2,0.4,0.3,0.4,0.3c0,0,0,0,0,0 c0,0,0,0,0,0c0.3,0.2,0.7,0.3,1,0.3c0.3,0,0.6-0.1,0.9-0.2c0.7-0.3,1.3-0.8,1.7-1.4s0.7-1.4,0.7-2.1C22.7,14.6,22.4,13.9,21.9,13.6z M9.9,14.6c-0.3,0.2-1.6,1.1-2.8,2c0-0.7-0.2-1.4-0.7-2.1c-0.5-0.7-1.1-1.2-1.7-1.4c0,0,0,0,0,0c1.2-0.9,2.6-1.8,2.9-2 c0.6-0.4,1.6,0.1,2.3,1c0,0,0,0,0,0C10.4,13,10.5,14.2,9.9,14.6z M7.9,5.5h0.8h6.4h0.8c1.2,0,1.9,0.5,1.9,0.6v0.7 c-0.5-0.2-1.1-0.4-1.9-0.4h-0.9H8.8H7.9c-0.7,0-1.4,0.1-1.9,0.4V6.2C6.1,6,6.7,5.5,7.9,5.5z M9.5,8.7L9.5,8.7c0-0.1-0.4-0.4-1.3-0.1 l0,0.1H7.9c-1.2,0-1.9-0.5-1.9-0.6s0.6-0.6,1.9-0.6h0.9h6.3h0.9c1.2,0,1.9,0.5,1.9,0.6s-0.6,0.6-1.9,0.6h-0.3l0-0.1 c-0.9-0.3-1.3,0-1.3,0l0,0.1H9.5z M14.2,12.1c0.7-1,1.7-1.4,2.3-1c0.3,0.2,1.7,1.2,2.9,2c0,0,0,0,0,0c-0.7,0.3-1.3,0.8-1.7,1.4 c-0.4,0.6-0.7,1.4-0.7,2.1c-1.2-0.8-2.6-1.8-2.8-2C13.5,14.2,13.6,13,14.2,12.1z",
            keywords: ["light","spot"]
        },
        "ceiling-infuse":{
            path:"M12,5.89c-6.25,0-11.14,2.03-11.14,4.61v3c0,2.59,4.89,4.61,11.14,4.61s11.14-2.03,11.14-4.61v-3 C23.14,7.91,18.25,5.89,12,5.89z M12,17.11c-5.98,0-10.14-1.9-10.14-3.61c0-1.71,4.17-3.61,10.14-3.61c5.98,0,10.14,1.9,10.14,3.61 C22.14,15.21,17.98,17.11,12,17.11z M17.44,13.68c0,0.93-2.44,1.69-5.44,1.69s-5.44-0.75-5.44-1.69c0-0.93,2.44-1.69,5.44-1.69S17.44,12.75,17.44,13.68z",
            keywords: ["light"]
        },
        "ceiling-muscari":{
            path:"M23.63,12.11c0-1.61-1.89-3.04-4.79-3.92C18.32,6.58,15.56,5.42,12,5.42S5.68,6.58,5.16,8.19 c-2.9,0.88-4.79,2.31-4.79,3.92h0.01c0,0.03-0.01,0.06-0.01,0.1c0,2.48,5.21,4.48,11.63,4.48c6.42,0,11.63-2.01,11.63-4.48 c0-0.03-0.01-0.06-0.01-0.1H23.63z M12,6.42c2.51,0,4.46,0.63,5.37,1.39C15.76,7.46,13.94,7.26,12,7.26c-1.94,0-3.76,0.2-5.37,0.55 C7.54,7.05,9.49,6.42,12,6.42z M12.27,15.86c-4.98,0-9.01-1.64-9.01-3.65c0-2.02,4.04-3.65,9.01-3.65s9.01,1.64,9.01,3.65 C21.28,14.22,17.25,15.86,12.27,15.86z",
            keywords: ["light"]
        },
        "ceiling-rect":{
            path:"M19.125,12.50432,9.82848,16.04967a1.35723,1.35723,0,0,1-.94531,0L4.94665,14.5294a.24649.24649,0,0,1,.00391-.45313l9.42181-3.494a1.38575,1.38575,0,0,1,.90625,0l3.84252,1.469a.24555.24555,0,0,1,.0039.45312m2.75-3.72656-7.05016-2.4876a1.27525,1.27525,0,0,0-.94531,0L2.125,10.88725a.68453.68453,0,0,0-.39844.65625v2.78516a.68454.68454,0,0,0,.39844.65625l6.75821,2.56085a1.27525,1.27525,0,0,0,.94531,0L21.875,12.87542a.68454.68454,0,0,0,.39844-.65625V9.434a.68453.68453,0,0,0-.39844-.65625",
            keywords: ["aurelle","light","panel","surimu"]
        },
        "ceiling-round":{
            path:"m18.848 14.362c-3.6844 0.9-9.7359 0.9-13.423 0-3.6366-0.8875-3.525-2.3 0.15844-3.1562 3.6328-0.84375 9.4556-0.84375 13.092 0 3.6872 0.85625 3.8053 2.2687 0.1725 3.1562m4.4644-7.3589c-0.27375-0.66964-1.3922-1.3125-3.3253-1.8214-4.3669-1.1446-11.356-1.1446-15.715 0-1.9331 0.50893-3.045 1.1518-3.3188 1.8214-0.049688 0.11339-0.070312 0.22054-0.070312 0.33482v3.7946c0 0.11339 0.020625 2.9062 0.070312 3.0134 0.26719 0.64286 1.3013 1.2652 3.1284 1.767 4.4231 1.2134 11.687 1.2134 16.109 0 1.8206-0.50178 2.8547-1.1241 3.1219-1.767 0.04875-0.10714 0.07031-0.22143 0.07031-0.33482v-6.4732c0-0.11429-0.02156-0.22143-0.07031-0.33482",
            keywords: ["devere","enrave","light"]
        },
        "ceiling-square":{
            path:"M 17.851562 13.671875 L 12.472656 15.664062 C 12.167969 15.777344 11.832031 15.777344 11.527344 15.664062 L 6.148438 13.671875 C 5.949219 13.597656 5.953125 13.289062 6.152344 13.21875 L 11.546875 11.332031 C 11.839844 11.230469 12.160156 11.230469 12.453125 11.332031 L 17.847656 13.21875 C 18.050781 13.289062 18.050781 13.597656 17.851562 13.671875 M 20.601562 9.945312 L 12.472656 6.839844 C 12.167969 6.71875 11.835938 6.71875 11.527344 6.839844 L 3.398438 9.945312 C 3.160156 10.035156 3 10.300781 3 10.601562 L 3 13.386719 C 3 13.6875 3.160156 13.953125 3.398438 14.042969 L 11.527344 17.160156 C 11.835938 17.28125 12.167969 17.28125 12.472656 17.160156 L 20.601562 14.042969 C 20.839844 13.953125 21 13.6875 21 13.386719 L 21 10.601562 C 21 10.300781 20.839844 10.035156 20.601562 9.945312 ",
            keywords: ["aurelle","light","panel","surimu"]
        },
        "ceiling-still":{
            path:"M22.45312,9.7068c-1.73339-1.89062-5.209-2.84912-10.32958-2.84912-5.12159,0-8.59717.9585-10.33008,2.84912A3.55977,3.55977,0,0,0,.74225,12.16506l-.00006.00024.00006.0003.00189.04316a.47973.47973,0,0,0,.02539.09c.29028,2.19428,7.497,2.78351,11.354,2.78351,3.85723,0,11.06286-.58929,11.35394-2.78314a.47758.47758,0,0,0,.02545-.09039A3.51923,3.51923,0,0,0,22.45312,9.7068ZM12.12354,14.08229c-6.84913,0-10.38135-1.34375-10.38135-1.917s3.53222-1.917,10.38135-1.917,10.38134,1.34375,10.38134,1.917S18.97266,14.08229,12.12354,14.08229Z M12.12341,10.77791s-5.51306.03845-5.49383,1.1145c.01922,1.076,4.51227,1.46033,5.49383,1.46033s5.38172-.38434,5.38172-1.49878S12.12341,10.77791,12.12341,10.77791Z",
            keywords: ["light"]
        },
        "ceiling-surimu":{
            path:"M22.61,8.38c-0.12-0.15-0.3-0.24-0.5-0.24h-2.77c0-0.02,0-0.04,0-0.06l-0.32-1c-0.08-0.26-0.32-0.44-0.6-0.44H5.58 c-0.27,0-0.51,0.17-0.59,0.43l-0.32,1c-0.01,0.02,0,0.04-0.01,0.07H1.89c-0.19,0-0.38,0.09-0.5,0.24S1.24,8.73,1.29,8.92l2.15,7.98 c0.07,0.27,0.32,0.46,0.6,0.46H20c0.28,0,0.53-0.19,0.6-0.47l2.11-7.98C22.76,8.73,22.72,8.53,22.61,8.38z M19.52,16.12h-15 L2.71,9.38H21.3L19.52,16.12z",
            keywords: ["light","panel"]
        },
        "ceiling-xamento":{
            path:"M6.9,13.67c0,1.5,2.6,2.3,5.1,2.3s5.1-0.8,5.1-2.3C17.1,10.57,6.9,10.57,6.9,13.67z M8.4,5.9 c-4.7,0.6-8,2.6-8,4.9v2.3l0,0l0,0l0,0c0.1,2.9,5.2,5,11.6,5s11.5-2.1,11.6-4.8l0,0l0,0l0,0V11c0-2.4-3.2-4.3-8-4.9 C12.3,5.4,8.4,5.9,8.4,5.9z M12,17.1c-6.3,0-10.6-2.1-10.6-3.9l0.1-0.4c0.6-1.6,5-3.2,10.5-3.2s9.9,1.6,10.5,3.2l0.1,0.4 C22.6,15,18.3,17.1,12,17.1z",
            keywords: ["ceiling","light"]
        },
        "centris":{
            path:"M23.20692,10.19943a.34967.34967,0,0,0-.27819-.38589q-1.62192-.54462-3.24385-1.08921Q16.73006,7.732,13.77529,6.73949q-3.518-1.18163-7.03577-2.364a.41113.41113,0,0,0-.28259-.00069Q3.756,5.35211,1.05442,6.32762a.34082.34082,0,0,0-.26226.36726q-.00045,2.34314,0,4.68626a.33871.33871,0,0,0,.26623.36375q.38742.128.77516.25514,3.545,1.1703,7.08992,2.34074c.57548.19,1.151.37992,1.73466.57258l.03562-.08715a1.819,1.819,0,0,1,1.10446-1.08353q1.87306-.6759,3.74408-1.35744c.74676-.27107,1.49075-.55,2.24071-.81188a2.32131,2.32131,0,0,1,1.46936.00147,3.17731,3.17731,0,0,1,1.56038,1.07933,5.01449,5.01449,0,0,1,1.092,2.66275c.01265.11448.01634.23.02471.3526.03156-.01543.05588-.02657.07952-.039.32435-.17057.64707-.34435.97357-.51071a.382.382,0,0,0,.22549-.37543Q23.20522,12.47189,23.20692,10.19943ZM13.59454,11.9355c-.29752.12686-.59611.25118-.89392.37737-.64108.27165-1.28254.5424-1.92234.817a.494.494,0,0,1-.37083.02051c-1.18061-.38181-2.36332-.75715-3.54542-1.13434q-1.39612-.44548-2.79231-.89078c-.39483-.12586-.79024-.24986-1.18474-.3767a.29185.29185,0,0,1-.22452-.36736.30569.30569,0,0,1,.20019-.20345q.43944-.17709.87753-.35756,1.117-.45714,2.23341-.91551a.44048.44048,0,0,1,.32979-.00845q2.17742.74732,4.3571,1.488,1.4469.49362,2.89361.98778a.46.46,0,0,1,.10152.04816.27424.27424,0,0,1,.13417.24A.29548.29548,0,0,1,13.59454,11.9355Z M20.1528,13.70853a2.37553,2.37553,0,0,0-1.00877-.93881,1.33672,1.33672,0,0,0-1.05892-.07764c-.74558.27369-1.49306.54221-2.23952.81351-1.20612.43836-2.41035.882-3.61943,1.31207a.74454.74454,0,0,0-.48464.50842,2.78174,2.78174,0,0,0-.1072.67626c.03.24786.048.49787.09234.74315a4.60735,4.60735,0,0,0,.68452,1.78143,2.78831,2.78831,0,0,0,1.044.9921.8796.8796,0,0,0,.75959.07387q1.63575-.68516,3.268-1.37862c.79356-.33523,1.5819-.68357,2.38246-1.00114a1.32082,1.32082,0,0,0,.84268-.97761,2.34811,2.34811,0,0,0,.04458-.842A4.0227,4.0227,0,0,0,20.1528,13.70853ZM14.52125,18.066a.485.485,0,0,1-.66.24707,1.22588,1.22588,0,0,1-.53914-.46328,2.4103,2.4103,0,0,1-.46276-1.44528,1.04294,1.04294,0,0,1,.12919-.52031.47485.47485,0,0,1,.5892-.23,1.09519,1.09519,0,0,1,.526.396,2.45144,2.45144,0,0,1,.52926,1.46745A1.21006,1.21006,0,0,1,14.52125,18.066Z",
            keywords: ["ceiling","light","spot"]
        },
        "centris-three":{
            path:"M23.5,13.1L22,11.6h0.3c0.1,0,0.3-0.1,0.3-0.2l0.4-1.3c0-0.1,0-0.1,0-0.2l-0.1-4.7c0-0.2-0.2-0.3-0.4-0.3h-22 C0.5,4.9,0.3,5,0.3,5.2l0,4.4l0.6,1.8c0.1,0.1,0.2,0.2,0.3,0.2l12.7,0l0,3.6c0,0.8,1,1.4,2.4,1.4c1.3,0,2.3-0.6,2.4-1.3l0-3.8 l-2.1,0c-0.1,0.3-0.1,0.7,0,1l0.1,0.1c0,0,2.3,2.6,2.9,3.4c0,0,0.1,0.1,0.1,0.1c0.3,0.3,0.7,0.5,1.2,0.5c0.7,0,1.2-0.2,1.8-0.8 C23.3,15.2,23.9,14.1,23.5,13.1z M10.3,10.7H1.8L1.6,9.9h8.8L10.3,10.7z M16.3,15.7c-0.8,0-1.4-0.3-1.4-0.6c0-0.3,0.6-0.6,1.4-0.6 s1.4,0.3,1.4,0.6C17.7,15.5,17.1,15.7,16.3,15.7z M22.5,14.1L22.5,14.1c-0.1,0.4-0.3,0.7-0.6,0.9c-0.3,0.3-0.7,0.4-1.1,0.5 c-0.1,0-0.2,0-0.3-0.1c-0.1-0.1-0.1-0.3,0-0.4c0.1-0.3,0.3-0.6,0.6-0.9c0.3-0.3,0.7-0.4,1.1-0.5c0.1,0,0.2,0,0.3,0.1 C22.5,13.9,22.5,14,22.5,14.1z M9.8,11.3c0.1,0.2,0.2,0.2,0.3,0.2h0.3L9,13.1c-0.4,1,0.1,2.1,0.8,2.8c0.6,0.6,1.2,0.7,1.8,0.8 c0.4,0,0.9-0.2,1.2-0.5c0,0,0.1-0.1,0.1-0.1c0.6-0.7,2.9-3.4,2.9-3.4l0.1-0.1c0.1-0.3,0.1-0.7,0-1l0.9,0 M10,13.7 c0.1-0.1,0.2-0.1,0.3-0.1c0.4,0,0.8,0.2,1.1,0.5c0.3,0.2,0.5,0.5,0.6,0.9c0.1,0.1,0,0.3,0,0.4c-0.1,0.1-0.2,0.1-0.3,0.1 c-0.4,0-0.8-0.2-1.1-0.5c-0.3-0.2-0.5-0.5-0.6-0.9l0,0C9.9,14,10,13.9,10,13.7z",
            keywords: ["ceiling","light","spot"]
        },
        "centris-two":{
            path:"M23.5,13.1L22,11.6h0.3c0.1,0,0.3-0.1,0.3-0.2l0.4-1.3c0-0.1,0-0.1,0-0.2l-0.1-4.7c0-0.2-0.2-0.3-0.4-0.3h-22 C0.5,4.9,0.3,5,0.3,5.2l0,4.4l0.6,1.8c0.1,0.1,0.2,0.2,0.3,0.2l9.7,0l0,3.6c0,0.8,1,1.4,2.4,1.4c1.3,0,2.3-0.6,2.4-1.3l0-3.8l0.9,0 c-0.1,0.3-0.1,0.7,0,1l0.1,0.1c0,0,2.3,2.6,2.9,3.4c0,0,0.1,0.1,0.1,0.1c0.3,0.3,0.7,0.5,1.2,0.5c0.7,0,1.2-0.2,1.8-0.8 C23.3,15.2,23.9,14.1,23.5,13.1z M10.3,10.7H1.8L1.6,9.9h8.8L10.3,10.7z M13.3,15.7c-0.8,0-1.4-0.3-1.4-0.6c0-0.3,0.6-0.6,1.4-0.6 s1.4,0.3,1.4,0.6C14.7,15.5,14.1,15.7,13.3,15.7z M22.5,14.1L22.5,14.1c-0.1,0.4-0.3,0.7-0.6,0.9c-0.3,0.3-0.7,0.4-1.1,0.5 c-0.1,0-0.2,0-0.3-0.1c-0.1-0.1-0.1-0.3,0-0.4c0.1-0.3,0.3-0.6,0.6-0.9c0.3-0.3,0.7-0.4,1.1-0.5c0.1,0,0.2,0,0.3,0.1 C22.5,13.9,22.5,14,22.5,14.1z",
            keywords: ["ceiling","light","spot"]
        },
        "centura":{
            path:"M22.4,5.4H1.6C1.3,5.4,1.1,5.7,1.1,6v1.5c0,0,0,0,0,0c0,0,0,0.1,0,0.1l2.1,11.9c0,0.3,0.3,0.4,0.5,0.4h16.8 c0.3,0,0.5-0.2,0.5-0.4l1.9-11.9c0,0,0-0.1,0-0.1c0,0,0,0,0,0V6C22.9,5.7,22.7,5.4,22.4,5.4z M20,18.9H4.1L2.2,8h19.6L20,18.9z M12.2,17.9c3.8,0,6.7-1.8,6.7-4.1s-3-4.1-6.7-4.1c-3.8,0-6.7,1.8-6.7,4.1S8.4,17.9,12.2,17.9z M8.5,11.5 c0.2-0.5,0.9-0.7,1.8-0.8c0,0,0.1,0,0.1,0c1,0,2.1,0.3,3.3,0.9c1.2,0.6,2.1,1.4,2.7,2.2c0.5,0.7,0.7,1.4,0.5,1.9 c-0.2,0.5-0.9,0.7-1.8,0.8c-1,0-2.2-0.3-3.4-0.9c-1.2-0.6-2.1-1.4-2.7-2.2C8.4,12.7,8.2,12,8.5,11.5z",
            keywords: ["ceiling","light","spot"]
        },
        "centura-round":{
            path:"M12.1,8.9c-3.8,0-6.7,1.8-6.7,4s2.9,4,6.7,4c3.8,0,6.7-1.8,6.7-4S15.9,8.9,12.1,8.9z M16.7,14.7 c-0.2,0.5-0.9,0.7-1.8,0.8c-1,0-2.2-0.3-3.4-0.9c-1.2-0.6-2.1-1.3-2.7-2.2c-0.5-0.7-0.7-1.4-0.4-1.9c0.2-0.5,0.9-0.7,1.8-0.8 c0,0,0.1,0,0.1,0c1,0,1.9,0.3,3,0.9c1.2,0.6,2.3,1.3,2.9,2.2C16.8,13.6,17,14.3,16.7,14.7z M18.9,6.8c-1.9-1.1-4.3-1.8-6.8-1.8S7.3,5.7,5.4,6.8C3.5,8,2.5,9.5,2.5,11.1v1.4c0,1.8,1,3.4,2.9,4.6 c1.8,1.2,4.2,1.8,6.8,1.8s5-0.6,6.8-1.8c1.9-1.2,2.9-2.8,2.9-4.6v-1.4C21.9,9.5,20.8,8,18.9,6.8z M12.2,17.9 c-4.8,0-8.7-2.4-8.7-5.4c0-3,3.9-5.4,8.7-5.4c4.8,0,8.7,2.4,8.7,5.4C20.8,15.5,17,17.9,12.2,17.9z",
            keywords: ["ceiling","light","spot"]
        },
        "centura-two":{
            path:"M6.8,10c-2.4,0-4.2,1.2-4.2,2.7c0,1.5,1.8,2.7,4.2,2.7s4.2-1.2,4.2-2.7C11.1,11.2,9.2,10,6.8,10z M9.4,13.9 c-0.1,0.2-0.4,0.3-0.9,0.4c-0.6,0-1.3-0.2-2-0.5c-0.8-0.4-1.3-0.9-1.6-1.3c-0.3-0.4-0.4-0.7-0.3-1c0.1-0.2,0.4-0.3,0.9-0.4h0.1 c0.6,0,1.2,0.2,1.9,0.5c0.8,0.4,1.3,0.9,1.6,1.3C9.3,13.3,9.5,13.7,9.4,13.9z M17.2,15.4c2.4,0,4.2-1.2,4.2-2.7c0-1.5-1.8-2.7-4.2-2.7c-2.4,0-4.2,1.2-4.2,2.7C12.9,14.2,14.7,15.4,17.2,15.4z M14.9,12.9c0.3-0.4,0.8-0.9,1.6-1.3c0.7-0.4,1.3-0.5,1.9-0.5l0,0c0.6,0.1,0.9,0.2,0.9,0.4c0.1,0.2,0,0.6-0.3,0.9 c-0.3,0.4-0.8,0.9-1.6,1.3c-0.7,0.3-1.4,0.5-2,0.5c-0.6-0.1-0.9-0.2-0.9-0.4C14.5,13.7,14.7,13.3,14.9,12.9z M23.5,7.4H0.5c-0.3,0-0.5,0.2-0.5,0.6v0.9l1.3,7.3c0,0.3,0.2,0.4,0.5,0.4h20.4c0.2,0,0.5-0.1,0.5-0.4l1.3-7.3v-1 C23.9,7.6,23.7,7.4,23.5,7.4z M21.8,15.6h-9.3h-1H2.2L1.1,9.4h9.9h0.4h1.1h0.4h9.9L21.8,15.6z",
            keywords: ["ceiling","light","spot"]
        },
        "daylo-wall":{
            path:"M13,1c-0.5,0-0.9,0-1.4,0.1C9.1,1.4,6.2,2.9,4.8,4c-2.7,2-4.3,5.1-4.3,8.5C0.5,18.2,5.2,23,11,23c3.6,0,8-2,9.8-4.4 c0,0,0-0.1,0.1-0.1c1.6-1.9,2.6-4.3,2.6-6.9C23.5,5.8,18.8,1,13,1z M13,21.1c-5.2,0-9.5-4.3-9.5-9.5C3.5,6.3,7.7,2,13,2 s9.5,4.3,9.5,9.5C22.5,16.8,18.2,21.1,13,21.1z",
            keywords: ["light"]
        },
        "desk-lamp":{
            path:"M 17.144531 7.300781 C 18.570312 6.824219 18.847656 7.214844 17.730469 8.191406 C 16.597656 9.179688 14.492188 10.375 13.058594 10.839844 C 11.648438 11.300781 11.453125 10.863281 12.59375 9.886719 C 13.714844 8.921875 15.742188 7.773438 17.144531 7.300781 M 12.785156 12.535156 C 14.835938 11.96875 17.785156 10.292969 19.324219 8.820312 C 20.105469 8.078125 20.359375 7.539062 20.152344 7.269531 C 18.691406 4.867188 15.800781 3.878906 13.410156 4.902344 C 13.445312 4.773438 13.472656 4.640625 13.472656 4.5 C 13.472656 3.671875 12.800781 3 11.972656 3 C 11.144531 3 10.472656 3.671875 10.472656 4.5 C 10.472656 5.238281 11.003906 5.847656 11.707031 5.972656 L 4.722656 12.664062 C 4.582031 12.796875 4.503906 12.984375 4.5 13.175781 C 4.496094 13.371094 4.574219 13.558594 4.710938 13.695312 L 9.164062 18.144531 C 8.746094 18.207031 8.347656 18.28125 8 18.382812 C 7.269531 18.59375 6.855469 18.851562 6.75 19.125 C 6.730469 19.167969 6.722656 19.21875 6.722656 19.265625 L 6.722656 19.734375 C 6.722656 19.78125 6.730469 19.828125 6.75 19.875 C 6.859375 20.15625 7.304688 20.425781 8.078125 20.640625 C 9.820312 21.121094 12.617188 21.121094 14.363281 20.640625 C 15.136719 20.425781 15.582031 20.15625 15.691406 19.875 C 15.710938 19.828125 15.722656 19.78125 15.722656 19.734375 L 15.722656 19.265625 C 15.722656 19.21875 15.710938 19.167969 15.691406 19.125 C 15.585938 18.851562 15.171875 18.59375 14.445312 18.382812 C 13.519531 18.117188 12.285156 17.992188 11.0625 18.003906 L 6.253906 13.195312 L 10.363281 9.257812 C 10.277344 10.3125 10.484375 11.417969 11.023438 12.441406 C 11.140625 12.765625 11.734375 12.824219 12.785156 12.535156 ",
            keywords: ["light","table"]
        },
        "dimmer-switch":{
            path:"M 15 20.25 C 15 20.664062 14.664062 21 14.25 21 L 9.75 21 C 9.335938 21 9 20.664062 9 20.25 L 9 15.75 L 15 15.75 Z M 9 14.25 L 9 12.75 L 15 12.75 L 15 14.25 Z M 9 11.25 L 9 9.75 L 15 9.75 L 15 11.25 Z M 15 8.25 L 9 8.25 L 9 3.75 C 9 3.335938 9.335938 3 9.75 3 L 14.25 3 C 14.664062 3 15 3.335938 15 3.75 Z M 16.496094 21.371094 C 16.496094 21.988281 15.988281 22.496094 15.371094 22.496094 L 8.628906 22.496094 C 8.011719 22.496094 7.503906 21.988281 7.503906 21.371094 L 7.503906 2.628906 C 7.503906 2.007812 8.007812 1.503906 8.628906 1.503906 L 15.371094 1.503906 C 15.992188 1.503906 16.496094 2.007812 16.496094 2.628906 Z M 16.125 0 L 7.875 0 C 6.84375 0 6 0.84375 6 1.875 L 6 22.125 C 6 23.160156 6.839844 24 7.875 24 L 16.125 24 C 17.160156 24 18 23.160156 18 22.125 L 18 1.875 C 18 0.84375 17.15625 0 16.125 0 Z M 16.125 0 ",
            keywords: ["light","switch"]
        },
        "double-spot":{
            path:"m 21.68536,17.422387 c -0.497944,1.379861 -1.521367,2.284726 -2.283962,2.022369 -0.76336,-0.263887 -0.978294,-1.594796 -0.479586,-2.975422 0.498708,-1.379862 1.521366,-2.283962 2.284726,-2.021604 0.762596,0.263122 0.97753,1.594795 0.478822,2.974657 M 3.9605636,15.545347 c -0.48647,0.16904 -1.1389212,-0.413041 -1.4578804,-1.299548 -0.3189591,-0.886508 -0.1828087,-1.743185 0.3036614,-1.91146 0.48647,-0.169041 1.1396861,0.413805 1.4586452,1.300313 0.3189591,0.886507 0.1828087,1.741654 -0.3044262,1.910695 M 22.091516,13.435015 14.79829,11.047029 V 6.8890866 c 0.998181,-0.1009655 1.934407,-0.2409403 2.74978,-0.4245139 1.485416,-0.3373165 2.32909,-0.7549465 2.547083,-1.1855795 0.04054,-0.0719 0.05737,-0.1476238 0.05737,-0.2241128 v -0.549191 c 0,-0.075724 -0.01683,-0.1476238 -0.05737,-0.2241128 C 19.871805,3.8325862 18.960056,3.4019531 17.382088,3.0608122 13.819231,2.2928626 8.1169758,2.2928626 4.5602373,3.0608122 2.9830342,3.4019531 2.0758746,3.8325862 1.8525267,4.2815766 1.8127525,4.3580656 1.79516,4.4299653 1.79516,4.5056894 v 0.549191 c 0,0.076489 0.017592,0.1522131 0.057367,0.2241128 0.2179937,0.430633 1.0616674,0.848263 2.552438,1.1855795 0.8138429,0.1828087 1.7485385,0.3227835 2.7444253,0.423749 V 9.5470794 L 1.8708841,11.320094 c -0.8574417,0.296778 -1.09838203,1.802081 -0.5384825,3.360927 0.5598994,1.559611 1.7095291,2.582269 2.5669708,2.284726 L 9.6544048,14.315404 C 10.305326,14.06146 10.396348,12.774915 9.8571006,11.440947 9.5733264,10.737248 9.1296902,10.146753 8.67917,9.7765464 V 7.0076446 c 1.505304,0.084903 3.084036,0.085668 4.58934,7.649e-4 v 4.2336665 c -0.684577,0.449755 -1.392865,1.305667 -1.825792,2.350507 -0.718232,1.734005 -0.59738,3.40682 0.270771,3.737252 l 7.673376,3.44583 c 1.143511,0.386269 2.675585,-0.943875 3.422883,-2.970833 0.746532,-2.026194 0.424514,-3.982782 -0.718232,-4.369817",
            keywords: ["light"]
        },
        "downstairs":{
            path:"M 22.971906,10.544476 12.746062,1.2898497 a 0.93386705,0.93386705 0 0 0 -1.326091,0 L 1.1941288,10.544476 a 0.93386705,0.93386705 0 0 0 0.6630463,1.690299 H 3.6782157 V 22.507312 A 0.93386705,0.93386705 0 0 0 4.6120822,23.44118 H 19.553953 a 0.93386705,0.93386705 0 0 0 0.933866,-0.933868 V 12.234775 h 1.867735 a 0.93386705,0.93386705 0 0 0 0.616352,-1.690299 z m -4.351821,11.02897 H 5.5459497 V 16.90411 H 18.620085 Z",
            keywords: ["area"]
        },
        "ensis":{
            path:"M22.5,9.5c-0.6-0.3-1.4-0.4-2.2-0.4s-1.6,0.1-2.2,0.4L15,10.8l-0.1-5.2l1.9-0.8c0.7-0.3,0.8-0.7,0.8-0.9V1.3 c0-0.2-0.1-0.6-0.7-0.8c-0.4-0.2-0.8-0.2-1.3-0.2c-0.5,0-1,0.1-1.3,0.2L4.1,4.7C3.6,4.9,3.5,5.3,3.5,5.5v2.6 c0.1,0.2,0.2,0.6,0.8,0.8C4.6,9.1,5,9.1,5.3,9.1c0.4,0,0.8,0,1.1-0.1v5.4l-5.1,2.1c-0.9,0.4-1.1,1-1.1,1.3v4.3 c0.1,0.4,0.3,1,1.3,1.4c0.6,0.3,1.3,0.3,1.8,0.3c0.9,0,2-0.1,2.6-0.4l16.4-6.7c1.1-0.5,1.3-1.1,1.3-1.5v-4.3 C23.7,10.6,23.5,9.9,22.5,9.5z M7.5,8.6L13.9,6l0.1,5.2L7.5,14V8.6z M21.7,15.9c0,0-13.9,5.8-15,6.2c-1.6,0.7-3.1,1.3-4.9,0.6 c-1.5-0.5-0.1-1.1-0.1-1.1s15.4-6.5,16.3-6.8c1-0.4,2.6-1,4.2-0.2C23.8,15.3,21.7,15.9,21.7,15.9z",
            keywords: ["ceiling","light","pendant"]
        },
        "ensis-up":{
            path:"M22.4,16.2l-6.1-2.5V9.1c0.2,0,0.4,0,0.7,0c0.5,0,1-0.1,1.3-0.2C18.9,8.6,19,8.2,19,8V5.4c0-0.2-0.1-0.6-0.8-0.9l-10-4.1 c-0.4-0.2-1-0.2-1.6-0.2c-0.3,0-0.7,0-1.1,0.2C5,0.6,4.9,1,4.8,1.2v2.6C4.8,4,5,4.4,5.5,4.6l2,0.9v4.7L6,9.5 C5.4,9.2,4.3,9.1,3.4,9.1c-0.5,0-1.2,0-1.8,0.3c-1,0.4-1.2,1-1.3,1.4v4.3c0,0.3,0.2,0.9,1.1,1.3l16.7,7c0.6,0.3,1.4,0.4,2.2,0.4 s1.6-0.1,2.2-0.4c1-0.4,1.2-1.1,1.2-1.4v-4.3C23.7,17.3,23.5,16.7,22.4,16.2z M8.6,5.9l6.8,2.8v4.6l-6.8-2.8V5.9z M22.2,18.3 c-1.6,0.8-3.2,0.2-4.2-0.2c-0.9-0.3-16.3-6.8-16.3-6.8s-1.4-0.6,0.1-1.1c1.8-0.7,3.3-0.1,4.9,0.6c0.1,0,0.4,0.2,0.9,0.3v1.1 c0,0.3,0.2,0.5,0.5,0.5s0.5-0.2,0.5-0.5v-0.6c1.7,0.7,4.3,1.8,6.8,2.8v1.2c0,0.3,0.2,0.5,0.5,0.5s0.5-0.2,0.5-0.5v-0.8 c2.9,1.2,5.4,2.2,5.4,2.2S23.8,17.6,22.2,18.3z",
            keywords: ["ceiling","light","pendant"]
        },
        "floor-lantern":{
            path:"M 13.890625 9.734375 C 12.816406 9.367188 11.183594 9.367188 10.109375 9.734375 L 9.199219 3.464844 C 10.976562 3.683594 13.023438 3.683594 14.800781 3.46875 Z M 16.832031 0.550781 C 14.175781 -0.183594 9.816406 -0.183594 7.164062 0.550781 C 4.550781 1.273438 4.632812 2.421875 7.289062 3.121094 C 7.402344 3.148438 7.527344 3.171875 7.644531 3.199219 L 8.824219 11.324219 C 8.914062 11.644531 9.40625 12.023438 10.5 12.226562 L 10.5 21.199219 C 9.769531 21.316406 9.230469 21.511719 9.058594 21.746094 C 9.019531 21.796875 9 21.855469 9 21.910156 L 9 22.453125 C 9 22.90625 10.34375 23.273438 12 23.273438 C 13.65625 23.273438 15 22.90625 15 22.453125 L 15 21.910156 C 15 21.605469 14.394531 21.347656 13.5 21.203125 L 13.5 12.226562 C 14.589844 12.023438 15.0625 11.640625 15.175781 11.328125 L 16.355469 3.199219 C 16.472656 3.171875 16.601562 3.148438 16.714844 3.121094 C 19.367188 2.421875 19.449219 1.273438 16.832031 0.550781 Z M 16.832031 0.550781 ",
            keywords: ["bollard","exterior","lamp","light"]
        },
        "floor-lantern-group":{
            path:"M20.97,3.59c-1.24-0.34-2.97-0.48-4.59-0.4c-0.39,0.49-1.11,0.89-2.14,1.19l-0.29,1.98l0.81,5.58 c0.07,0.25,0.45,0.54,1.3,0.7v6.95c-0.57,0.09-0.98,0.24-1.12,0.42c-0.03,0.04-0.05,0.08-0.05,0.13v0.42 c0,0.35,1.04,0.64,2.32,0.64c1.28,0,2.32-0.28,2.32-0.64v-0.42c0-0.24-0.47-0.44-1.16-0.55v-6.95c0.84-0.16,1.21-0.45,1.3-0.7 l0.91-6.3c0.09-0.02,0.19-0.04,0.28-0.06C22.94,5.04,23,4.15,20.97,3.59z M18.69,10.7c-0.83-0.28-2.1-0.28-2.93,0l-0.71-4.86 c1.38,0.17,2.96,0.17,4.34,0L18.69,10.7z M13.83,0.91c-2.66-0.73-7.02-0.73-9.67,0C1.55,1.64,1.63,2.79,4.29,3.48C4.4,3.51,4.52,3.54,4.64,3.56 l1.18,8.12c0.09,0.32,0.58,0.7,1.68,0.9v8.97c-0.73,0.12-1.27,0.31-1.44,0.55C6.02,22.16,6,22.22,6,22.27v0.54 c0,0.45,1.34,0.82,3,0.82s3-0.37,3-0.82v-0.54c0-0.3-0.61-0.56-1.5-0.71v-8.98c1.09-0.2,1.56-0.59,1.68-0.9l1.18-8.13 c0.12-0.03,0.25-0.05,0.36-0.08C16.36,2.79,16.45,1.64,13.83,0.91z M10.89,10.1c-1.07-0.37-2.71-0.37-3.78,0L6.2,3.83 c1.78,0.22,3.82,0.22,5.6,0L10.89,10.1z",
            keywords: ["bollard","exterior","lamp","light"]
        },
        "floor-lantern-off":{
            path:"M7.29,3.12C7.4,3.15,7.53,3.17,7.64,3.2l0.33,2.27l1.77,1.77L9.2,3.46c1.78,0.22,3.82,0.22,5.6,0l-0.91,6.27 c-0.54-0.19-1.23-0.28-1.92-0.27l2.49,2.48c0.43-0.19,0.64-0.42,0.72-0.61l1.18-8.13c0.12-0.03,0.25-0.05,0.36-0.08 c2.65-0.7,2.73-1.85,0.12-2.57c-2.66-0.73-7.02-0.73-9.67,0C4.55,1.27,4.63,2.42,7.29,3.12z M20.57,22.36l1.41-1.42L2.86,1.87L1.45,3.28l7.26,7.24l0.12,0.8c0.09,0.31,0.56,0.66,1.56,0.87l0.12,0.11v8.89 c-0.73,0.12-1.27,0.31-1.44,0.55C9.02,21.8,9,21.86,9,21.91v0.54c0,0.45,1.34,0.82,3,0.82s3-0.37,3-0.82v-0.54 c0-0.3-0.61-0.56-1.5-0.71v-5.9L20.57,22.36z",
            keywords: ["bollard","exterior","lamp","light"]
        },
        "floor-shade":{
            path:"M 9.3125 1.726562 C 10.789062 1.425781 13.207031 1.425781 14.683594 1.726562 C 16.136719 2.023438 16.09375 2.5 14.621094 2.789062 C 13.167969 3.070312 10.835938 3.070312 9.382812 2.789062 C 7.90625 2.5 7.863281 2.023438 9.3125 1.726562 M 15.667969 9.324219 C 16.570312 9.070312 17.089844 8.75 17.21875 8.417969 C 17.242188 8.363281 17.25 8.308594 17.25 8.253906 L 17.25 1.496094 C 17.25 1.4375 17.242188 1.382812 17.21875 1.328125 C 17.09375 1.007812 16.609375 0.699219 15.757812 0.449219 C 13.695312 -0.148438 10.304688 -0.148438 8.238281 0.449219 C 7.390625 0.699219 6.90625 1.007812 6.78125 1.328125 C 6.757812 1.382812 6.75 1.4375 6.75 1.496094 L 6.75 8.253906 C 6.75 8.308594 6.757812 8.363281 6.78125 8.417969 C 6.910156 8.75 7.433594 9.070312 8.335938 9.324219 C 9.160156 9.554688 10.1875 9.683594 11.25 9.730469 L 11.25 20.269531 C 9.054688 20.351562 7.289062 20.796875 6.855469 21.375 C 6.785156 21.464844 6.75 21.558594 6.75 21.65625 L 6.75 22.59375 C 6.75 23.371094 9.101562 24 12 24 C 14.898438 24 17.25 23.371094 17.25 22.59375 L 17.25 21.65625 C 17.25 20.949219 15.292969 20.363281 12.75 20.265625 L 12.75 9.730469 C 13.816406 9.6875 14.84375 9.554688 15.667969 9.324219 ",
            keywords: ["lamp","light"]
        },
        "floor-spot":{
            path:"M 16.3125 10.714844 C 15.417969 11.03125 14.214844 9.941406 13.632812 8.285156 C 13.046875 6.625 13.296875 5.027344 14.195312 4.710938 C 15.089844 4.394531 16.289062 5.480469 16.875 7.140625 C 17.460938 8.796875 17.207031 10.398438 16.3125 10.714844 M 18.277344 6.640625 C 17.402344 4.210938 15.609375 2.617188 14.273438 3.078125 L 5.367188 7.222656 C 4.351562 7.617188 4.207031 9.621094 5.046875 11.699219 C 5.890625 13.78125 7.621094 15.261719 8.636719 14.867188 L 9.753906 14.457031 L 9.753906 17.269531 C 7.558594 17.351562 5.792969 17.796875 5.359375 18.375 C 5.289062 18.464844 5.253906 18.5625 5.253906 18.65625 L 5.253906 19.59375 C 5.253906 20.371094 7.605469 21 10.503906 21 C 13.402344 21 15.75 20.371094 15.75 19.59375 L 15.75 18.65625 C 15.75 17.949219 13.792969 17.363281 11.253906 17.265625 L 11.253906 13.953125 L 17.4375 11.882812 C 18.777344 11.417969 19.152344 9.070312 18.277344 6.640625 ",
            keywords: ["light"]
        },
        "flourish":{
            path:"M18.8,19.8H5.1c-0.1,0-0.2,0-0.2-0.1c-0.2-0.1-4.3-2.4-4.3-6.7c0-2.4,1.3-4.6,3.6-6.3c2.2-1.6,5-2.5,7.8-2.5 c5.2,0,11.1,3.1,11.3,8.2c0.3,5.3-4.3,7.3-4.4,7.3C18.9,19.8,18.9,19.8,18.8,19.8z M5.3,18.8h13.4c0.6-0.3,3.9-2,3.7-6 C22.2,8,16.8,5.2,12.1,5.2C9.5,5.2,6.9,6,4.9,7.5C2.8,9,1.6,10.9,1.6,13C1.6,16.4,4.7,18.4,5.3,18.8z",
            keywords: ["floor","light","table"]
        },
        "flourish-alt":{
            path:"M18.6,19.8H4.9c-0.1,0-0.2,0-0.2-0.1c-0.2-0.1-4.3-2.4-4.3-6.7c0-2.4,1.3-4.6,3.6-6.3c2.2-1.6,5-2.5,7.8-2.5 h0.3c2.8,0,5.6,0.9,7.8,2.5c2.3,1.7,3.6,3.9,3.6,6.3c0,4.4-4.1,6.6-4.3,6.7c-0.1,0-0.2,0.1-0.2,0.1H5.4",
            keywords: ["floor","light","table"]
        },
        "friends-of-hue-20042LEDSWACDMG-BLRFR":{
            path:"M18,1.2l-0.9,0.1c-0.2,0-4.6-0.5-6.8-0.4C9.7,1,4.9,1.2,4.9,2.9v20.2l14.2-0.1V1.8L18,1.2z M6.5,4.6 c0.1-0.1,0.4-0.2,0.9-0.3l0,15l-0.9,0.1L6.5,4.6z M10.3,4c4.4-0.1,5.6,0.2,5.9,0.4v15c-1.2-0.1-3.1-0.2-4.6-0.2c-0.5,0-1,0-1.3,0 L10.3,4z",
            keywords: ["exterior","light","wall"]
        },
        "friends-of-hue-arke":{
            path:"M0.7,0.7v22.5h22.5V0.7H0.7z M22.3,22.3H1.7V1.7h20.5V22.3z M7.2,7.4v9.3h9.7V7.4H7.2z M11.5,15.6H8.2V8.4h3.3V15.6z M15.8,15.6h-3.3V8.4h3.3V15.6z",
            keywords: ["light","switch"]
        },
        "friends-of-hue-arke-round":{
            path:"M7.2,7.4v9.3h9.7V7.4H7.2z M11.5,15.6H8.2V8.4h3.3V15.6z M15.8,15.6h-3.3V8.4h3.3V15.6z M17.2,0.7H6.7c-3.3,0-6,2.7-6,6v10.5c0,3.3,2.7,6,6,6h10.5c3.3,0,6-2.7,6-6V6.7C23.2,3.4,20.5,0.7,17.2,0.7z M22.2,17.2 c0,2.8-2.2,5-5,5H6.7c-2.8,0-5-2.2-5-5V6.7c0-2.8,2.2-5,5-5h10.5c2.8,0,5,2.2,5,5V17.2z",
            keywords: ["light","switch"]
        },
        "friends-of-hue-eikon":{
            path:"M0.7,0.7v22.5h22.5V0.7H0.7z M22.3,22.3H1.7V1.7h20.5V22.3z M16.8,7.4H7.2v9.3h9.7V7.4z M11.5,15.6H8.2V8.4h3.3V15.6z M15.8,15.6h-3.3V8.4h3.3V15.6z M18.8,5.4H5.2v13.2h13.7V5.4z M17.8,17.6H6.2V6.4h11.7V17.6z",
            keywords: ["light","switch"]
        },
        "friends-of-hue-flat-p":{
            path:"M19.9,6.2c-0.2-0.1-0.5-0.2-0.7-0.3c-1.5-0.7-5.4-1.6-8-1.7C8.6,4,5.3,4.7,3.7,5.1C1.9,5.5,1.5,6.9,1.5,6.9 c0,0.1,0,0.3-0.1,0.4c-0.1,0.5-0.2,1.2-0.1,3.8c0.1,2.6,1,5.1,1.5,6.4C2.9,17.8,3,18.1,3,18.3c0.3,0.9,1.6,1.6,2.6,1.7 c0.3,0,0.6,0.1,1,0.1c0.8,0,1.8-0.1,3.9-0.3c3-0.3,7-1.6,8-2.2c1-0.6,1.7-1.7,2.7-4.2c0.2-0.5,0.4-0.9,0.5-1.2 c0.6-1.4,0.8-1.9,0.8-2.8C22.5,7.4,21.2,6.8,19.9,6.2z M3.7,13c0.1-0.3,0.2-0.6,0.3-0.7C4.1,12,4,11.7,3.9,11.5 c-0.1-0.2-0.3-0.3-0.6-0.4C2.8,11,2.8,11,2.8,10.6c0,0-0.3-1.9,0.6-3.2c0.5-0.6,1.2-1,2.1-1.2c1.7-0.3,3.4-0.4,4.9-0.4 c3.6,0,6.7,0.7,9.2,2.1c0.8,0.6,1.1,1.4,0.9,2.6c-0.4,2.6-2.8,5.7-4.1,6.2c0,0,0,0,0,0c-1.5,0.7-7,1.8-9.1,1.7 c-2.2-0.1-2.8-0.7-3.3-1.8c-0.5-1.1-0.7-2.2-0.7-2.4C3.2,14.1,3.5,13.5,3.7,13z",
            keywords: ["light","wall"]
        },
        "friends-of-hue-flat-p-alt":{
            path:"M18.5,7.4l-0.2-0.5c-0.5-1.4-0.7-1.8-2.1-2.6c-1.6-0.9-2.5-0.5-2.6-0.4L13,4.2C12.2,3.6,10,1.9,8.5,1.6 c-2.2-0.4-2.9,0.5-3,0.8C5.3,2.8,5,3.8,4.9,4.5l0,0.2c-0.1,1.1-0.5,4.6,0.3,6.6c0.8,2.1,1.8,3.9,4.1,6.8c2.6,3.3,3.4,4,3.9,4.2 c0.2,0.1,0.5,0.2,0.8,0.2c0.4,0,0.9-0.2,1.4-0.7c0.9-0.8,1-2.1,1-2.7l0-0.2c0-0.5,0-1.8,0-2.8c0-0.5-0.1-1.1-0.1-1.6 c0.1,0,0.3,0,0.5,0c0.5-0.1,1.5-0.4,1.6-0.5c0,0,0.1,0,0.1-0.1c0.1-0.1,0.5-0.4,0.5-1.3l0-0.2C19.1,11.7,19.1,9.2,18.5,7.4z M7.3,4.3c0,0,0.1,0,0.2,0c0.5,0,1.4,0.5,2.1,1.1c1.2,0.8,2.5,1.8,3.2,3.6c0.3,0.8,0.7,3.9,0.7,4.2c0,0-0.1,0.1-0.1,0.2 c-0.1,0.3-0.4,0.8-0.4,1.5c0,0.8,0.5,1.4,0.7,1.8c0,0.8,0,2.2-0.1,2.6c0,0.2-0.1,0.4-0.2,0.4c0,0-0.1,0-0.1,0 c-0.4-0.2-1.4-1.1-2.5-2.4c-1.1-1.3-3.6-5.3-4.1-6.6C6.3,9.2,6.1,7.4,6.2,6.6l0-0.2C6.4,5.7,6.7,4.5,7.3,4.3z",
            keywords: ["light","wall"]
        },
        "friends-of-hue-iq-flush":{
            path:"M20.2,6.7C19,5.4,15.8,4.6,12,4.6c-3.8,0-7,0.7-8.2,2.1c-1.9,0.7-3.2,1.7-3.2,3v4.7c0,2.8,5.9,4.3,11.4,4.3 c5.5,0,11.4-1.5,11.4-4.3V9.8C23.4,8.5,22.1,7.5,20.2,6.7z M17.9,12.5c-1.6,0.4-3.6,0.6-5.9,0.6c-2.2,0-4.2-0.2-5.9-0.6 c1.6-0.3,3.5-0.6,5.9-0.6C14.3,11.9,16.3,12.2,17.9,12.5z M12,17c-6,0-9.7-1.5-9.7-2.5c0-0.5,0.7-1,2-1.4c2.2,0.7,5,1.1,7.7,1.1 c2.7,0,5.6-0.4,7.7-1.1c1.3,0.5,2,1,2,1.4C21.7,15.5,18,17,12,17z",
            keywords: ["ceiling","light"]
        },
        "friends-of-hue-iq-pendant":{
            path:"M17.3,10.6l-2-6.3C16,4,16.4,3.6,16.4,3.1l0-0.7c0-1-2-1.8-4.4-1.8S7.6,1.4,7.6,2.4l0,0.7C7.6,3.6,8,4,8.7,4.3l-2,6.3 c-3.4,0.6-6.1,1.9-6.1,3.8v4.7c0,2.8,5.9,4.3,11.4,4.3c5.5,0,11.4-1.5,11.4-4.3v-4.7C23.4,12.5,20.7,11.2,17.3,10.6z M12,16.5 c2.3,0,4.3,0.2,5.9,0.6c-1.6,0.4-3.6,0.6-5.9,0.6c-2.2,0-4.2-0.2-5.9-0.6C7.7,16.8,9.7,16.5,12,16.5z M14.3,4.6l1.9,5.8 c-1.2-0.2-2.4-0.3-3.7-0.3V4.9C13.2,4.9,13.8,4.8,14.3,4.6z M9.7,4.6c0.5,0.1,1.2,0.2,1.8,0.2v5.2c-1.2,0-2.5,0.1-3.7,0.3L9.7,4.6z M12,21.6c-6,0-9.7-1.5-9.7-2.5c0-0.5,0.7-1,2-1.4c2.2,0.7,5,1.1,7.7,1.1c2.7,0,5.6-0.4,7.7-1.1c1.3,0.5,2,1,2,1.4 C21.7,20.1,18,21.6,12,21.6z",
            keywords: ["ceiling","light"]
        },
        "friends-of-hue-retrotouch-black-chrome":{
            path:"M12.5,6.5v11h5.4v-11H12.5z M16.4,16.6h-2.2c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h2.2c0.3,0,0.5,0.2,0.5,0.5 S16.7,16.6,16.4,16.6z M16.4,8.5h-2.2c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h2.2c0.3,0,0.5,0.2,0.5,0.5S16.7,8.5,16.4,8.5 M6,6.5v11h5.5v-11H6z M9.8,16.6H7.6c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h2.2c0.3,0,0.5,0.2,0.5,0.5S10,16.6,9.8,16.6z M9.8,8.5H7.6C7.3,8.5,7.1,8.3,7.1,8s0.2-0.5,0.5-0.5h2.2c0.3,0,0.5,0.2,0.5,0.5S10,8.5,9.8,8.5z M22.8,0.7H1.2C1,0.7,0.7,1,0.7,1.2v21.5c0,0.3,0.2,0.5,0.5,0.5h21.5c0.3,0,0.5-0.2,0.5-0.5V1.2C23.3,1,23,0.7,22.8,0.7z M19.4,18.1c0,0.6-0.4,1-1,1H5.4c-0.6,0-1-0.4-1-1v-12c0-0.6,0.4-1,1-1h12.9c0.6,0,1,0.4,1,1V18.1z",
            keywords: ["light","switch"]
        },
        "friends-of-hue-retrotouch-black-plain":{
            path:"M12.5,6.5v11h5.4v-11H12.5z M16.4,16.6h-2.2c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h2.2c0.3,0,0.5,0.2,0.5,0.5 S16.7,16.6,16.4,16.6z M16.4,8.5h-2.2c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h2.2c0.3,0,0.5,0.2,0.5,0.5S16.7,8.5,16.4,8.5z M6,6.5v11h5.5v-11H6z M9.8,16.6H7.6c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h2.2c0.3,0,0.5,0.2,0.5,0.5S10,16.6,9.8,16.6z M9.8,8.5H7.6C7.3,8.5,7.1,8.3,7.1,8s0.2-0.5,0.5-0.5h2.2c0.3,0,0.5,0.2,0.5,0.5S10,8.5,9.8,8.5z M22.8,0.7H1.2C1,0.7,0.7,1,0.7,1.2v21.5c0,0.3,0.2,0.5,0.5,0.5h21.5c0.3,0,0.5-0.2,0.5-0.5V1.2C23.3,1,23,0.7,22.8,0.7z M18.9,18c0,0.3-0.2,0.5-0.5,0.5H5.5C5.2,18.5,5,18.3,5,18V6c0-0.3,0.2-0.5,0.5-0.5h12.9c0.3,0,0.5,0.2,0.5,0.5V18z",
            keywords: ["light","switch"]
        },
        "friends-of-hue-retrotouch-white-chrome":{
            path:"M22.8,0.7H1.2C1,0.7,0.7,1,0.7,1.2v21.5c0,0.3,0.2,0.5,0.5,0.5h21.5c0.3,0,0.5-0.2,0.5-0.5V1.2C23.3,1,23,0.7,22.8,0.7z M22.3,22.3H1.7V1.7h20.5L22.3,22.3L22.3,22.3z M7.6,8.5h2.2c0.3,0,0.5-0.2,0.5-0.5S10,7.5,9.8,7.5H7.6C7.3,7.5,7.1,7.7,7.1,8S7.3,8.5,7.6,8.5z M9.8,15.6H7.6c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5h2.2c0.3,0,0.5-0.2,0.5-0.5S10,15.6,9.8,15.6z M14.2,8.5h2.2c0.3,0,0.5-0.2,0.5-0.5s-0.2-0.5-0.5-0.5h-2.2c-0.3,0-0.5,0.2-0.5,0.5S13.9,8.5,14.2,8.5z M16.4,15.6h-2.2c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5h2.2c0.3,0,0.5-0.2,0.5-0.5S16.7,15.6,16.4,15.6z M18.4,5.1H5.4c-0.6,0-1,0.4-1,1v12c0,0.6,0.4,1,1,1h12.9c0.6,0,1-0.4,1-1v-12C19.4,5.5,18.9,5.1,18.4,5.1z M17.9,6.5v11h-5.4v-11H17.9z M11.5,6.5v11H6v-11H11.5z",
            keywords: ["light","switch"]
        },
        "friends-of-hue-retrotouch-white-plain":{
            path:"M22.8,0.7H1.2C1,0.7,0.7,1,0.7,1.2v21.5c0,0.3,0.2,0.5,0.5,0.5h21.5c0.3,0,0.5-0.2,0.5-0.5V1.2C23.3,1,23,0.7,22.8,0.7z M22.3,22.3H1.7V1.7h20.5V22.3z M5.5,18.5h12.9c0.3,0,0.5-0.2,0.5-0.5V6c0-0.3-0.2-0.5-0.5-0.5H5.5C5.2,5.5,5,5.7,5,6v12C5,18.3,5.2,18.5,5.5,18.5z M17.9,17.5h-5.4v-11h5.4V17.5z M6,6.5h5.5v11H6V6.5 M7.6,8.5h2.2c0.3,0,0.5-0.2,0.5-0.5S10,7.5,9.8,7.5H7.6C7.3,7.5,7.1,7.7,7.1,8S7.3,8.5,7.6,8.5z M9.8,15.6H7.6c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5h2.2c0.3,0,0.5-0.2,0.5-0.5S10,15.6,9.8,15.6z M14.2,8.5h2.2c0.3,0,0.5-0.2,0.5-0.5s-0.2-0.5-0.5-0.5h-2.2c-0.3,0-0.5,0.2-0.5,0.5S13.9,8.5,14.2,8.5z M16.4,15.6h-2.2c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5h2.2c0.3,0,0.5-0.2,0.5-0.5S16.7,15.6,16.4,15.6z",
            keywords: ["light","switch"]
        },
        "friends-of-hue-rigel":{
            path:"M12.43,6.48C12.43,6.48,12.42,6.48,12.43,6.48l0-2.03c0.98-0.05,2.8-0.28,2.8-1.28v-1c0-1.23-2.75-1.29-3.31-1.29 S8.62,0.95,8.62,2.17v1c0,1,1.84,1.23,2.82,1.28l-0.01,2.04c-0.07,0.01-0.14,0.01-0.21,0.02c-3.56,0.46-6.35,4.01-6.35,8.31 c0,4.3,2.78,7.85,6.35,8.31c0.23,0.03,0.47,0.05,0.7,0.05c0.01,0,0.02,0,0.03,0c0.01,0,0.03,0,0.04,0c3.93,0,7.12-3.75,7.12-8.36 C19.12,10.38,16.15,6.75,12.43,6.48z M11.35,7.5c0.2-0.03,0.4-0.04,0.61-0.04c0.36,0,0.72,0.05,1.06,0.15 c0.96,0.27,1.78,0.89,2.44,1.75c-0.28-0.05-0.58-0.09-0.9-0.09c-0.01,0-0.01,0-0.02,0c-1.67,0-3.51,0.59-5.17,1.66 c-0.9,0.58-1.69,1.27-2.34,2.01C7.5,10.02,9.1,7.82,11.35,7.5z M11.95,22.18c-0.18,0-0.35-0.01-0.52-0.03 c-0.9-0.11-1.7-0.53-2.37-1.19c0.16,0.02,0.32,0.03,0.5,0.03c0.01,0,0.01,0,0.02,0c1.67,0,3.51-0.59,5.17-1.66 c0.7-0.45,1.32-0.95,1.86-1.49C15.83,20.37,14.13,22.16,11.95,22.18z M14.21,18.49c-1.5,0.96-3.15,1.5-4.64,1.5 c-1.38,0.02-2.48-0.47-3.03-1.33c-0.55-0.86-0.53-2.04,0.06-3.31c0.62-1.35,1.8-2.62,3.3-3.58c1.51-0.96,3.15-1.5,4.64-1.5 c0,0,0.01,0,0.01,0c0.62,0,1.15,0.11,1.63,0.28c0.56,1.18,0.88,2.61,0.88,4.18c0,0.37-0.02,0.73-0.06,1.09 C16.35,16.79,15.4,17.73,14.21,18.49z",
            keywords: ["ceiling","light","pendant"]
        },
        "friends-of-hue-senic":{
            path:"M0.7,0.7v22.5h22.5V0.7H0.7z M22.3,22.3H1.7V1.7h20.5V22.3z M4.4,4.2v15.7h15.3V4.2H4.4z M5.4,5.2h6.1v13.7H5.4V5.2z M18.6,18.8h-6.1V5.2h6.1V18.8z",
            keywords: ["light","switch"]
        },
        "go":{
            path:"M 17.152344 15.757812 C 14.257812 13.714844 10.300781 9.753906 8.253906 6.855469 C 6.179688 3.917969 6.8125 3.125 9.726562 5.148438 C 12.683594 7.199219 16.796875 11.316406 18.847656 14.277344 C 20.875 17.195312 20.085938 17.832031 17.152344 15.757812 M 19.875 14.015625 C 17.789062 10.605469 13.390625 6.207031 9.984375 4.121094 C 8.371094 3.132812 7.253906 2.800781 6.726562 3.113281 C 4.488281 4.929688 3 7.96875 3 11.078125 C 3 14.167969 4.414062 16.929688 6.628906 18.75 L 6.375 18.75 C 5.757812 18.75 5.25 19.253906 5.25 19.875 C 5.25 20.492188 5.757812 21 6.375 21 L 12.277344 21 C 12.351562 21 12.421875 20.992188 12.488281 20.976562 C 12.632812 20.984375 12.769531 21 12.914062 21 C 15.980469 21 19.070312 19.472656 20.886719 17.28125 C 21.199219 16.753906 20.863281 15.632812 19.875 14.015625 ",
            keywords: ["floor","light","table"]
        },
        "go-group":{
            path:"M22.3,9.35c-1.62-2.65-5.03-6.06-7.68-7.68c-1.25-0.77-2.12-1.02-2.53-0.78c-1.43,1.16-2.46,2.98-2.78,4.93 c3.12,2.12,6.71,5.71,8.84,8.84c1.94-0.33,3.77-1.37,4.93-2.77C23.33,11.47,23.07,10.6,22.3,9.35z M20.19,10.7 c-2.25-1.59-5.32-4.66-6.91-6.91c-1.61-2.28-1.12-2.9,1.14-1.33c2.3,1.59,5.49,4.79,7.08,7.09C23.08,11.82,22.47,12.31,20.19,10.7z M15.15,17.76c-2.89-2.04-6.85-6-8.9-8.9C4.18,5.92,4.81,5.12,7.73,7.15c2.96,2.05,7.07,6.17,9.12,9.13 C18.88,19.2,18.09,19.83,15.15,17.76 M17.88,16.02c-2.09-3.41-6.48-7.81-9.89-9.89C6.37,5.13,5.25,4.8,4.73,5.11 C2.49,6.93,1,9.97,1,13.08c0,3.09,1.41,5.85,3.63,7.67H4.38c-0.62,0-1.12,0.5-1.12,1.12c0,0.62,0.51,1.12,1.12,1.12h5.9 c0.07,0,0.14-0.01,0.21-0.02c0.14,0.01,0.28,0.02,0.43,0.02c3.07,0,6.16-1.53,7.97-3.72C19.2,18.75,18.86,17.63,17.88,16.02",
            keywords: ["floor","light","table"]
        },
        "go-off":{
            path:"M9.73,5.15c2.96,2.05,7.07,6.17,9.12,9.13c1.28,1.84,1.43,2.77,0.65,2.69l0.87,0.87 c0.18-0.18,0.36-0.36,0.52-0.56c0.31-0.53-0.02-1.65-1.01-3.27c-2.09-3.41-6.48-7.81-9.89-9.89C8.37,3.13,7.25,2.8,6.73,3.11 c-0.2,0.16-0.39,0.35-0.58,0.53l0.91,0.9C6.94,3.72,7.86,3.85,9.73,5.15z M21.98,20.94L2.86,1.87L1.45,3.28l2.85,2.84C3.48,7.62,3,9.33,3,11.08c0,3.09,1.41,5.85,3.63,7.67H6.38 c-0.62,0-1.12,0.5-1.12,1.12c0,0.62,0.51,1.12,1.12,1.12h5.9c0.07,0,0.14-0.01,0.21-0.02c0.14,0.01,0.28,0.02,0.43,0.02 c1.73,0,3.46-0.5,4.97-1.32l2.69,2.68L21.98,20.94z",
            keywords: ["floor","light","table"]
        },
        "gradient-lightstrip":{
            path:"M6.3,12.5c0.4-0.1,0.8,0.2,0.9,0.6c0.1,0.4-0.2,0.8-0.6,0.9c-0.4,0.1-0.8-0.2-0.9-0.6C5.7,13,5.9,12.6,6.3,12.5 M10,11.7 c0.4-0.1,0.8,0.2,0.9,0.6c0.1,0.4-0.2,0.8-0.6,0.9c-0.4,0.1-0.8-0.2-0.9-0.6C9.3,12.2,9.6,11.8,10,11.7 M13.7,10.9 c0.4-0.1,0.8,0.2,0.9,0.6c0.1,0.4-0.2,0.8-0.6,0.9c-0.4,0.1-0.8-0.2-0.9-0.6C13,11.4,13.3,11,13.7,10.9 M17.3,10.1 c0.4-0.1,0.8,0.2,0.9,0.6c0.1,0.4-0.2,0.8-0.6,0.9c-0.4,0.1-0.8-0.2-0.9-0.6C16.7,10.6,16.9,10.2,17.3,10.1 M18.8,19.5 c-0.4,0-0.8-0.3-0.8-0.8s0.3-0.8,0.8-0.8s0.8,0.3,0.8,0.8S19.2,19.5,18.8,19.5 M15,19.5c-0.4,0-0.8-0.3-0.8-0.8S14.6,18,15,18 s0.8,0.3,0.8,0.8S15.4,19.5,15,19.5 M11.2,19.5c-0.4,0-0.8-0.3-0.8-0.8s0.3-0.8,0.8-0.8s0.8,0.3,0.8,0.8S11.7,19.5,11.2,19.5 M7.5,19.5c-0.4,0-0.8-0.3-0.8-0.8S7.1,18,7.5,18s0.8,0.3,0.8,0.8S7.9,19.5,7.5,19.5 M20.2,16.5H6.8c-3,0-3.8-2.2-3.8-3v3.8 C3,19.3,4.7,21,6.8,21h13.5c0.4,0,0.8-0.3,0.8-0.8v-3C21,16.8,20.7,16.5,20.2,16.5 M16.5,6c-0.4,0-0.8-0.3-0.8-0.8s0.3-0.8,0.8-0.8 s0.8,0.3,0.8,0.8S16.9,6,16.5,6 M12.8,6C12.3,6,12,5.7,12,5.2s0.3-0.8,0.8-0.8s0.8,0.3,0.8,0.8S13.2,6,12.8,6 M9,6 C8.6,6,8.2,5.7,8.2,5.2S8.6,4.5,9,4.5s0.8,0.3,0.8,0.8S9.4,6,9,6 M5.2,6C4.8,6,4.5,5.7,4.5,5.2s0.3-0.8,0.8-0.8S6,4.8,6,5.2 S5.7,6,5.2,6 M17.2,3H3.8C3.3,3,3,3.3,3,3.8v3c0,0.4,0.3,0.8,0.8,0.8h13.5c3,0,3.8,2.2,3.8,3V6.8C21,4.7,19.3,3,17.2,3 M16.8,9.5c0.6,0,1.1,0.2,1.6,0.6c0.5,0.4,0.8,0.9,0.9,1.5c0,0.2,0,0.3-0.1,0.4c0,0.1-0.1,0.2-0.3,0.2L7.8,14.5 c-0.2,0-0.4,0.1-0.5,0.1c-1.2,0-2.3-0.9-2.5-2c0-0.2,0-0.3,0.1-0.4C4.9,12,5,12,5.1,11.9l11.1-2.4C16.4,9.5,16.6,9.5,16.8,9.5 M16.8,8.5c-0.3,0-0.5,0-0.8,0.1L4.9,10.9c-0.8,0.2-1.3,1-1.1,1.8c0.4,1.7,1.9,2.8,3.5,2.8c0.3,0,0.5,0,0.8-0.1l11.1-2.4 c0.8-0.2,1.3-1,1.1-1.8c-0.2-0.9-0.7-1.6-1.3-2.1C18.3,8.8,17.6,8.5,16.8,8.5L16.8,8.5z",
            keywords: ["led","light"]
        },
        "gradient-lightstrip-wrap":{
            path:"M5.2,3C3.1,3.1,1.5,4.8,1.5,6.9v13.4c0,0.5,0.3,0.8,0.8,0.8h3c0.4,0,0.8-0.3,0.8-0.8V6.8C6,3.8,8.2,3,9,3H5.2z M5,6.8v13.3 l-2.6,0V6.9C2.5,5.3,3.7,4,5.2,4h0.5C5.3,4.7,5,5.6,5,6.8z M4.5,18.9c0,0.4-0.3,0.7-0.8,0.7s-0.8-0.3-0.8-0.8s0.4-0.7,0.8-0.7 C4,18.1,4.5,18.4,4.5,18.9z M4.5,15.1c0,0.4-0.3,0.8-0.8,0.8S3,15.5,3,15.1c0-0.4,0.3-0.8,0.8-0.8S4.5,14.7,4.5,15.1z M4.5,11.3 c0,0.5-0.3,0.8-0.8,0.8s-0.8-0.3-0.8-0.8s0.3-0.8,0.8-0.8S4.5,10.9,4.5,11.3z M4.5,7.6c0,0.4-0.3,0.8-0.8,0.8S2.8,8.1,2.8,7.6 s0.3-0.8,0.8-0.8S4.5,7.2,4.5,7.6z M18.8,2.9H15c0.8,0,3,0.8,3,3.8v13.5c0,0.5,0.4,0.8,0.8,0.8h3c0.5,0,0.8-0.3,0.8-0.8V6.8 C22.5,4.7,20.8,3,18.8,2.9z M21.5,20H19V6.7c0-1.2-0.3-2.1-0.7-2.8h0.5c1.6,0.1,2.8,1.4,2.8,2.9L21.5,20z M21.2,18.7 c0,0.5-0.3,0.8-0.8,0.8s-0.8-0.3-0.8-0.7c0-0.5,0.4-0.8,0.8-0.8C20.8,18,21.2,18.2,21.2,18.7z M20.3,15.8c-0.5,0-0.8-0.4-0.8-0.8 c0-0.4,0.2-0.8,0.7-0.8S21,14.6,21,15C21,15.4,20.8,15.8,20.3,15.8z M21.2,11.2c0,0.5-0.3,0.8-0.8,0.8s-0.8-0.3-0.8-0.8 c0-0.4,0.3-0.8,0.8-0.8S21.2,10.7,21.2,11.2z M20.3,6.7c0.5,0,0.8,0.3,0.8,0.8s-0.3,0.8-0.8,0.8s-0.8-0.4-0.8-0.8 C19.5,7.1,19.8,6.7,20.3,6.7z M12,3C7.5,2.9,7.5,6.5,7.5,7h9.1C16.6,7,17.1,3,12,3z M10.3,5.9C9.9,6,9.5,5.7,9.4,5.3 C9.3,4.9,9.6,4.5,10,4.4c0.4-0.1,0.8,0.2,0.9,0.6C11,5.4,10.7,5.8,10.3,5.9z M14,5.9c-0.4,0.1-0.8-0.2-0.9-0.6s0.2-0.8,0.6-0.9 c0.4-0.1,0.8,0.2,0.9,0.6C14.7,5.4,14.4,5.8,14,5.9z",
            keywords: ["led","light"]
        },
        "gradient-tube-long":{
            path:"M23.1,13.9c0-0.9-0.4-1.6-0.9-1.8l0,0l0,0c0,0,0,0,0,0l-2.8-1.3l0,0c-0.3-0.2-0.8-0.1-1.2,0.1c0,0-0.1,0.1-0.1,0.1L8.5,7.3 c0,0,0,0,0,0c0-0.1,0-0.1,0-0.1c0-0.1-0.1-0.3-0.1-0.4c0,0,0-0.1-0.1-0.1C8.2,6.5,8.1,6.4,8.1,6.3c0,0,0,0-0.1-0.1 C7.9,6.2,7.8,6.1,7.7,6.1c0,0,0,0,0,0l0,0l0,0c0,0,0,0,0,0L4.3,4.8l0,0h0c-0.1,0-0.1,0-0.2-0.1c0,0-0.1,0-0.1,0c-0.1,0-0.1,0-0.2,0 c-0.1,0-0.1,0-0.2,0c0,0-0.1,0-0.1,0c-0.1,0-0.3,0.1-0.4,0.1C1.9,5.5,0.9,7.2,0.9,8.7v5.1l17.9,7.3l4.2-2.2L23.1,13.9L23.1,13.9z M15.9,14.2c0,0.5,0,0.9,0,1.1l-9.9-3.8V9.7c0-0.3,0.3-1.4,0.8-1.7c0.1-0.1,0.2-0.1,0.4,0l9.6,3.7C16.4,12.1,15.9,13,15.9,14.2z",
            keywords: ["light"]
        },
        "gradient-tube-short":{
            path:"M23.1,13.9c0-0.9-0.4-1.6-0.9-1.8l0,0l0,0c0,0,0,0,0,0l-4.8-2l0,0c-0.3-0.2-0.8-0.1-1.2,0.1c0,0-0.1,0.1-0.1,0.1L10,8.1 c0,0,0,0,0,0c0-0.1,0-0.1,0-0.1c0-0.1-0.1-0.3-0.1-0.4c0,0,0-0.1-0.1-0.1C9.7,7.3,9.7,7.2,9.6,7.1c0,0,0,0-0.1-0.1 C9.4,6.9,9.3,6.9,9.2,6.8c0,0,0,0,0,0l0,0l0,0c0,0,0,0,0,0l-4.8-2l0,0h0c-0.1,0-0.1,0-0.2-0.1c0,0-0.1,0-0.1,0c-0.1,0-0.1,0-0.2,0 c-0.1,0-0.1,0-0.2,0c0,0-0.1,0-0.1,0c-0.1,0-0.3,0.1-0.4,0.1C1.9,5.5,0.9,7.2,0.9,8.7v5.1l17.9,7.3l4.2-2.2L23.1,13.9L23.1,13.9z M14,13.5c0,0.5,0,0.9,0,1.1l-6.4-2.3v-1.9c0-0.3,0.3-1.4,0.8-1.7c0.1-0.1,0.2-0.1,0.4,0l6.1,2.3C14.4,11.5,13.9,12.4,14,13.5z",
            keywords: ["light"]
        },
        "iris":{
            path:"M 19.199219 13.746094 C 18.046875 13.371094 16.351562 12.265625 14.058594 9.96875 C 12.214844 8.125 10.769531 6.09375 10.300781 4.84375 C 10.199219 4.574219 10.441406 4.300781 10.726562 4.355469 C 11.015625 4.410156 11.414062 4.53125 11.925781 4.773438 C 13.3125 5.417969 14.585938 6.253906 16.179688 7.847656 C 17.769531 9.4375 18.605469 10.710938 19.25 12.097656 C 19.496094 12.621094 19.617188 13.023438 19.671875 13.316406 C 19.722656 13.59375 19.464844 13.832031 19.199219 13.746094 M 16.527344 16.882812 C 16.476562 17.039062 16.332031 17.140625 16.171875 17.140625 C 16.132812 17.140625 16.09375 17.136719 16.058594 17.125 C 15.027344 16.789062 13.742188 15.957031 12.289062 14.683594 C 10.566406 15.628906 7.75 16.746094 7.820312 17.226562 C 7.960938 18.148438 7.410156 18.65625 6.371094 17.617188 C 5.332031 16.578125 5.839844 16.027344 6.761719 16.164062 C 7.242188 16.238281 8.367188 13.386719 9.316406 11.667969 C 8.183594 10.320312 7.289062 8.964844 6.925781 8 C 6.851562 7.804688 6.953125 7.589844 7.144531 7.515625 C 7.335938 7.441406 7.554688 7.539062 7.628906 7.734375 C 8.101562 8.996094 9.574219 11.003906 11.296875 12.726562 C 13.824219 15.253906 15.40625 16.125 16.289062 16.410156 C 16.484375 16.472656 16.59375 16.683594 16.527344 16.882812 M 20.433594 11.796875 C 18.996094 8.707031 15.308594 4.992188 12.25 3.554688 C 11.003906 2.96875 10.078125 2.867188 9.511719 3.15625 C 9.441406 3.199219 9.375 3.246094 9.304688 3.292969 C 8.550781 3.792969 7.820312 4.371094 7.140625 5.046875 C 2.910156 9.269531 1.238281 14.449219 5.414062 18.613281 C 9.53125 22.726562 14.773438 21.113281 19.003906 16.890625 C 19.671875 16.222656 20.242188 15.503906 20.738281 14.765625 C 20.769531 14.71875 20.800781 14.671875 20.828125 14.625 C 21.140625 14.058594 21.039062 13.09375 20.433594 11.796875 ",
            keywords: ["floor","light","table"]
        },
        "liane":{
            path:"M14.2,11.2l0.1,11L9.9,23l-1.8-0.2V11.9l3.7-0.8l0,0l1.7-10L14.1,1l1.8,0.2L14.2,11.2z",
            keywords: ["floor","light","table"]
        },
        "lightstrip":{
            path:"M 6.328125 12.5 C 6.734375 12.414062 7.132812 12.671875 7.222656 13.078125 C 7.308594 13.480469 7.050781 13.878906 6.648438 13.96875 C 6.242188 14.054688 5.84375 13.796875 5.753906 13.394531 C 5.667969 12.988281 5.925781 12.589844 6.328125 12.5 M 9.996094 11.707031 C 10.398438 11.621094 10.800781 11.878906 10.886719 12.28125 C 10.972656 12.6875 10.71875 13.085938 10.3125 13.175781 C 9.90625 13.261719 9.507812 13.003906 9.421875 12.601562 C 9.332031 12.195312 9.589844 11.796875 9.996094 11.707031 M 13.660156 10.917969 C 14.066406 10.828125 14.464844 11.085938 14.550781 11.488281 C 14.640625 11.894531 14.382812 12.292969 13.976562 12.382812 C 13.574219 12.46875 13.171875 12.210938 13.085938 11.808594 C 13 11.402344 13.253906 11.003906 13.660156 10.917969 M 17.324219 10.125 C 17.730469 10.035156 18.128906 10.292969 18.21875 10.699219 C 18.304688 11.101562 18.046875 11.503906 17.644531 11.589844 C 17.238281 11.675781 16.839844 11.421875 16.75 11.015625 C 16.664062 10.609375 16.921875 10.210938 17.324219 10.125 M 8.003906 15.480469 L 19.105469 13.082031 C 19.914062 12.910156 20.429688 12.109375 20.253906 11.300781 C 19.835938 9.363281 17.925781 8.132812 15.992188 8.550781 L 4.886719 10.945312 C 4.078125 11.121094 3.5625 11.917969 3.738281 12.726562 C 4.15625 14.664062 6.066406 15.898438 8.003906 15.480469 M 18.75 19.5 C 18.335938 19.5 18 19.164062 18 18.75 C 18 18.335938 18.335938 18 18.75 18 C 19.164062 18 19.5 18.335938 19.5 18.75 C 19.5 19.164062 19.164062 19.5 18.75 19.5 M 15 19.5 C 14.585938 19.5 14.25 19.164062 14.25 18.75 C 14.25 18.335938 14.585938 18 15 18 C 15.414062 18 15.75 18.335938 15.75 18.75 C 15.75 19.164062 15.414062 19.5 15 19.5 M 11.25 19.5 C 10.835938 19.5 10.5 19.164062 10.5 18.75 C 10.5 18.335938 10.835938 18 11.25 18 C 11.664062 18 12 18.335938 12 18.75 C 12 19.164062 11.664062 19.5 11.25 19.5 M 7.5 19.5 C 7.085938 19.5 6.75 19.164062 6.75 18.75 C 6.75 18.335938 7.085938 18 7.5 18 C 7.914062 18 8.25 18.335938 8.25 18.75 C 8.25 19.164062 7.914062 19.5 7.5 19.5 M 20.25 16.5 L 6.75 16.5 C 3.75 16.5 3 14.25 3 13.5 L 3 17.25 C 3 19.320312 4.679688 21 6.75 21 L 20.25 21 C 20.664062 21 21 20.664062 21 20.25 L 21 17.25 C 21 16.835938 20.664062 16.5 20.25 16.5 M 16.5 6 C 16.085938 6 15.75 5.664062 15.75 5.25 C 15.75 4.835938 16.085938 4.5 16.5 4.5 C 16.914062 4.5 17.25 4.835938 17.25 5.25 C 17.25 5.664062 16.914062 6 16.5 6 M 12.75 6 C 12.335938 6 12 5.664062 12 5.25 C 12 4.835938 12.335938 4.5 12.75 4.5 C 13.164062 4.5 13.5 4.835938 13.5 5.25 C 13.5 5.664062 13.164062 6 12.75 6 M 9 6 C 8.585938 6 8.25 5.664062 8.25 5.25 C 8.25 4.835938 8.585938 4.5 9 4.5 C 9.414062 4.5 9.75 4.835938 9.75 5.25 C 9.75 5.664062 9.414062 6 9 6 M 5.25 6 C 4.835938 6 4.5 5.664062 4.5 5.25 C 4.5 4.835938 4.835938 4.5 5.25 4.5 C 5.664062 4.5 6 4.835938 6 5.25 C 6 5.664062 5.664062 6 5.25 6 M 17.25 3 L 3.75 3 C 3.335938 3 3 3.335938 3 3.75 L 3 6.75 C 3 7.164062 3.335938 7.5 3.75 7.5 L 17.25 7.5 C 20.25 7.5 21 9.75 21 10.5 L 21 6.75 C 21 4.679688 19.320312 3 17.25 3 ",
            keywords: ["led","light"]
        },
        "lightstrip-off":{
            path:"M21,17.25c0-0.41-0.34-0.75-0.75-0.75h-1.22L21,18.47V17.25z M17.25,7.5c3,0,3.75,2.25,3.75,3V6.75C21,4.68,19.32,3,17.25,3H5.5l4.51,4.5H17.25z M16.5,4.5 c0.41,0,0.75,0.34,0.75,0.75S16.91,6,16.5,6s-0.75-0.34-0.75-0.75S16.09,4.5,16.5,4.5z M12.75,4.5c0.41,0,0.75,0.34,0.75,0.75 S13.16,6,12.75,6S12,5.66,12,5.25S12.34,4.5,12.75,4.5z M9,6C8.59,6,8.25,5.66,8.25,5.25S8.59,4.5,9,4.5s0.75,0.34,0.75,0.75 S9.41,6,9,6z M16.23,13.7l2.88-0.62c0.81-0.17,1.32-0.97,1.15-1.78c-0.42-1.94-2.33-3.17-4.26-2.75l-4.06,0.87l1.57,1.56 c0.05-0.02,0.1-0.06,0.16-0.07c0.41-0.09,0.8,0.17,0.89,0.57c0.04,0.17,0,0.33-0.07,0.48L16.23,13.7z M17.32,10.12 c0.41-0.09,0.8,0.17,0.89,0.57c0.09,0.4-0.17,0.8-0.57,0.89c-0.41,0.09-0.8-0.17-0.89-0.57C16.66,10.61,16.92,10.21,17.32,10.12z  M21.98,20.94L2.86,1.87L1.45,3.28L3,4.83v1.92C3,7.16,3.34,7.5,3.75,7.5h1.93l2.7,2.69l-3.49,0.75 c-0.81,0.18-1.32,0.97-1.15,1.78C4.16,14.66,6.07,15.9,8,15.48l4.66-1.01l2.03,2.03H6.75c-3,0-3.75-2.25-3.75-3v3.75 C3,19.32,4.68,21,6.75,21h12.46l1.36,1.36L21.98,20.94z M6.65,13.97c-0.41,0.09-0.8-0.17-0.89-0.57c-0.09-0.41,0.17-0.8,0.57-0.89 c0.41-0.09,0.8,0.17,0.89,0.58C7.31,13.48,7.05,13.88,6.65,13.97z M7.5,19.5c-0.41,0-0.75-0.34-0.75-0.75S7.09,18,7.5,18 s0.75,0.34,0.75,0.75S7.91,19.5,7.5,19.5z M11.25,19.5c-0.41,0-0.75-0.34-0.75-0.75S10.84,18,11.25,18S12,18.34,12,18.75 S11.66,19.5,11.25,19.5z M15,19.5c-0.41,0-0.75-0.34-0.75-0.75S14.59,18,15,18s0.75,0.34,0.75,0.75S15.41,19.5,15,19.5z M10.31,13.18C9.91,13.26,9.51,13,9.42,12.6c-0.08-0.38,0.14-0.74,0.5-0.86l0.93,0.93C10.78,12.91,10.58,13.12,10.31,13.18z",
            keywords: ["led","light"]
        },
        "lightstrip-tv":{
            path:"M4.3,12.6c-0.5,0-0.8,0.3-0.8,0.8s0.3,0.8,0.8,0.8s0.9-0.4,0.8-0.8C5.1,13,4.8,12.6,4.3,12.6 M4.4,5C3.9,5,3.6,5.3,3.6,5.8s0.3,0.8,0.8,0.8s0.9-0.4,0.8-0.8C5.2,5.4,4.9,5,4.4,5z M12.3,5c-0.5,0-0.8,0.3-0.8,0.8s0.3,0.8,0.8,0.8s0.9-0.4,0.8-0.8C13.1,5.4,12.8,5,12.3,5z M16.2,5c-0.5,0-0.8,0.3-0.8,0.8s0.3,0.8,0.8,0.8c0.5,0,0.9-0.4,0.8-0.8C17,5.4,16.7,5,16.2,5z M8.3,5C7.8,5,7.5,5.3,7.5,5.8s0.3,0.8,0.8,0.8s0.9-0.4,0.8-0.8C9.1,5.4,8.8,5,8.3,5z M4.4,8.8c-0.5,0-0.8,0.3-0.8,0.8s0.3,0.8,0.8,0.8S5.3,10,5.2,9.6C5.2,9.2,4.9,8.8,4.4,8.8z M20.2,12.5c-0.5,0-0.8,0.3-0.8,0.8s0.3,0.8,0.8,0.8s0.9-0.4,0.8-0.8C21,12.9,20.7,12.5,20.2,12.5z M20.2,5c-0.5,0-0.8,0.3-0.8,0.8s0.3,0.8,0.8,0.8s0.9-0.4,0.8-0.8C21,5.4,20.7,5,20.2,5z M20.2,8.8c-0.5,0-0.8,0.3-0.8,0.8s0.3,0.8,0.8,0.8S21.1,10,21,9.6C21,9.2,20.7,8.8,20.2,8.8z M21.8,3.4H3C2.4,3.4,1.8,4,1.8,4.7v10.2c0,0.7,0.5,1.2,1.2,1.2l0.4,0l0,0h8.2v2.8h-1.4c-0.4,0-0.8,0.3-0.8,0.8 s0.3,0.8,0.8,0.8h4.4c0.4,0,0.8-0.3,0.8-0.8s-0.3-0.8-0.8-0.8h-1.5v-2.8h6.2h1.2h1c0.7,0,1.2-0.6,1.2-1.2V4.7 C22.7,4.4,22.7,3.4,21.8,3.4z M21.7,14.9c0,0.1-0.1,0.2-0.2,0.2H19c-0.2,0-0.3,0-0.4-0.1c-0.1-0.1-0.1-0.2-0.1-0.2l0-5.8 c0-0.6-0.2-0.9-0.4-1.1c-0.4-0.4-0.9-0.4-1-0.4c0,0,0,0,0,0H7.2c-0.9,0-1.3,0.8-1.3,1.3l0,6c0,0.2-0.2,0.3-0.2,0.3l-2.6,0 c-0.1,0-0.2-0.1-0.2-0.2V4.7c0-0.1,0.1-0.2,0.2-0.2l18.7,0c0,0.1,0,0.2,0,0.2V14.9z",
            keywords: ["led","light"]
        },
        "lightstrip-tv-alt":{
            path:"M9,3H5.2C3.1,3.1,1.5,4.8,1.5,6.9v9.4c0,0.5,0.3,0.8,0.8,0.8h3c0.4,0,0.8-0.3,0.8-0.8V6.8C6,3.8,8.2,3,9,3z M3.6,15.6 c-0.5,0-0.8-0.3-0.8-0.8s0.4-0.7,0.8-0.7c0.4,0,0.8,0.3,0.8,0.8C4.5,15.3,4.1,15.6,3.6,15.6z M3.6,12.1c-0.5,0-0.8-0.3-0.8-0.8 s0.3-0.8,0.8-0.8s0.8,0.4,0.8,0.8C4.5,11.8,4.1,12.1,3.6,12.1z M3.6,8.4c-0.5,0-0.8-0.3-0.8-0.8s0.3-0.8,0.8-0.8s0.8,0.4,0.8,0.8 C4.5,8,4.1,8.4,3.6,8.4z M18.8,2.9H15c0.8,0,3,0.8,3,3.8v9.5c0,0.5,0.4,0.8,0.8,0.8h3c0.5,0,0.8-0.3,0.8-0.8V6.8C22.5,4.7,20.8,3,18.8,2.9z  M20.3,15.5c-0.5,0-0.8-0.3-0.8-0.7c0-0.5,0.4-0.8,0.8-0.8c0.4,0,0.8,0.2,0.8,0.7S20.8,15.5,20.3,15.5z M20.3,12 c-0.5,0-0.8-0.3-0.8-0.8c0-0.4,0.3-0.8,0.8-0.8s0.8,0.3,0.8,0.8S20.8,12,20.3,12z M20.3,8.3c-0.5,0-0.8-0.4-0.8-0.8 s0.3-0.8,0.8-0.8s0.8,0.3,0.8,0.8S20.8,8.3,20.3,8.3z M7.5,7h9.1c0,0,0.5-4-4.6-4C7.5,2.9,7.5,6.5,7.5,7z M13.7,4.4c0.4-0.1,0.8,0.2,0.9,0.6c0.1,0.4-0.2,0.8-0.6,0.9 c-0.4,0.1-0.8-0.2-0.9-0.6C13,4.9,13.3,4.5,13.7,4.4z M10,4.4c0.4-0.1,0.8,0.2,0.9,0.6c0.1,0.4-0.2,0.8-0.6,0.9 C9.9,6,9.5,5.7,9.4,5.3C9.3,4.9,9.6,4.5,10,4.4z M17.3,17.1c-0.7,0-0.7-0.9-0.7-0.9V8.3H7.5c0,0-0.1,7.4-0.1,8.1S7,17.1,7,17.1s1.9,0,4.1,0v1.3H8.7c-0.5,0-1,0.5-1,1v0.2 c0,0.5,0.5,1,1,1h6.7c0.5,0,1-0.5,1-1v-0.2c0-0.5-0.5-1-1-1h-2.1v-1.3C15.3,17.1,17.1,17.1,17.3,17.1z",
            keywords: ["led","light"]
        },
        "lightstrip-tv-off":{
            path:"M17,5.8C17,5.4,16.7,5,16.2,5s-0.8,0.3-0.8,0.8s0.3,0.8,0.8,0.8S17.1,6.2,17,5.8z M13.1,5.8c0-0.4-0.3-0.8-0.8-0.8s-0.8,0.3-0.8,0.8s0.3,0.8,0.8,0.8S13.2,6.2,13.1,5.8z M21.8,3.4H5.9L7,4.5h14.8c0,0.1,0,0.2,0,0.2v10.2h-0.1c0,0.1-0.1,0.2-0.2,0.2H19c-0.2,0-0.3,0-0.4-0.1 c-0.1-0.1-0.1-0.2-0.1-0.2V9c0-0.6-0.2-0.9-0.4-1.1c-0.4-0.4-0.9-0.4-1-0.4h-7.09l8.62,8.6h0.67h1.2h1c0.7,0,1.2-0.6,1.2-1.2V4.7 C22.7,4.4,22.7,3.4,21.8,3.4z M20.2,10.4c0.5,0,0.9-0.4,0.8-0.8c0-0.4-0.3-0.8-0.8-0.8s-0.8,0.3-0.8,0.8S19.7,10.4,20.2,10.4z M9.1,5.8C9.1,5.4,8.8,5,8.3,5C8.05,5,7.85,5.07,7.71,5.21l1.17,1.17C9.06,6.23,9.15,6.02,9.1,5.8z M4.3,12.6c-0.5,0-0.8,0.3-0.8,0.8s0.3,0.8,0.8,0.8s0.9-0.4,0.8-0.8C5.1,13,4.8,12.6,4.3,12.6z M4.4,8.8c-0.5,0-0.8,0.3-0.8,0.8s0.3,0.8,0.8,0.8S5.3,10,5.2,9.6C5.2,9.2,4.9,8.8,4.4,8.8z M20.2,6.6c0.5,0,0.9-0.4,0.8-0.8C21,5.4,20.7,5,20.2,5s-0.8,0.3-0.8,0.8S19.7,6.6,20.2,6.6z M20.2,14.1c0.5,0,0.9-0.4,0.8-0.8c0-0.4-0.3-0.8-0.8-0.8s-0.8,0.3-0.8,0.8S19.7,14.1,20.2,14.1z M1.45,3.28l0.64,0.64C1.92,4.14,1.8,4.41,1.8,4.7v10.2c0,0.7,0.5,1.2,1.2,1.2h0.4h8.2v2.8h-1.4 c-0.4,0-0.8,0.3-0.8,0.8s0.3,0.8,0.8,0.8h4.4c0.4,0,0.8-0.3,0.8-0.8s-0.3-0.8-0.8-0.8h-1.5v-2.8h1.2l6.28,6.26l1.41-1.42L2.86,1.87 L1.45,3.28z M5.9,8.8v6c0,0.2-0.2,0.3-0.2,0.3H3.1c-0.1,0-0.2-0.1-0.2-0.2V4.73l0.75,0.75C3.62,5.58,3.6,5.68,3.6,5.8 c0,0.5,0.3,0.8,0.8,0.8c0.11,0,0.22-0.03,0.31-0.06l1.47,1.47C5.99,8.26,5.9,8.56,5.9,8.8z",
            keywords: ["led","light"]
        },
        "lightstrip-wrap":{
            path:"M5.2,3C3.1,3.1,1.5,4.8,1.5,6.9v13.4c0,0.5,0.3,0.8,0.8,0.8h3c0.4,0,0.8-0.3,0.8-0.8V6.8C6,3.8,8.2,3,9,3H5.2z M3.6,19.6 c-0.5,0-0.8-0.3-0.8-0.8s0.4-0.7,0.8-0.7c0.4,0,0.8,0.3,0.8,0.8C4.5,19.3,4.1,19.6,3.6,19.6z M3.6,15.9c-0.5,0-0.7-0.4-0.7-0.8 c0-0.4,0.3-0.8,0.8-0.8s0.7,0.4,0.7,0.8C4.5,15.5,4.1,15.9,3.6,15.9z M3.6,12.1c-0.5,0-0.8-0.3-0.8-0.8s0.3-0.8,0.8-0.8 s0.8,0.4,0.8,0.8C4.5,11.8,4.1,12.1,3.6,12.1z M3.6,8.4c-0.5,0-0.8-0.3-0.8-0.8s0.3-0.8,0.8-0.8s0.8,0.4,0.8,0.8 C4.5,8,4.1,8.4,3.6,8.4z M18.8,2.9H15c0.8,0,3,0.8,3,3.8v13.5c0,0.5,0.4,0.8,0.8,0.8h3c0.5,0,0.8-0.3,0.8-0.8V6.8C22.5,4.7,20.8,3,18.8,2.9z M20.3,19.5c-0.5,0-0.8-0.3-0.8-0.7c0-0.5,0.4-0.8,0.8-0.8c0.4,0,0.8,0.2,0.8,0.7S20.8,19.5,20.3,19.5z M19.5,15 c0-0.4,0.2-0.8,0.7-0.8S21,14.6,21,15c0,0.4-0.2,0.8-0.7,0.8S19.5,15.4,19.5,15z M20.3,12c-0.5,0-0.8-0.3-0.8-0.8 c0-0.4,0.3-0.8,0.8-0.8s0.8,0.3,0.8,0.8S20.8,12,20.3,12z M20.3,8.3c-0.5,0-0.8-0.4-0.8-0.8c0-0.4,0.3-0.8,0.8-0.8s0.8,0.3,0.8,0.8 S20.8,8.3,20.3,8.3z M12,3C7.5,2.9,7.5,6.5,7.5,7h9.1C16.6,7,17.1,3,12,3z M10.3,5.9C9.9,6,9.5,5.7,9.4,5.3C9.3,4.9,9.6,4.5,10,4.4 c0.4-0.1,0.8,0.2,0.9,0.6C11,5.4,10.7,5.8,10.3,5.9z M14,5.9c-0.4,0.1-0.8-0.2-0.9-0.6s0.2-0.8,0.6-0.9c0.4-0.1,0.8,0.2,0.9,0.6 C14.7,5.4,14.4,5.8,14,5.9z",
            keywords: ["led","light"]
        },
        "lily":{
            path:"M20.5,6.6c0-1-0.4-2.1-1-3.2c-0.6-1.1-1.4-2-2.3-2.5c-0.9-0.6-1.8-0.7-2.5-0.3c0,0,0,0,0,0c0,0,0,0,0,0L4.5,6.7c0,0,0,0,0,0 c-0.7,0.4-1,1.2-1,2.3c0,1,0.4,2.1,1,3.2c0.6,1.1,1.4,2,2.3,2.5C7,14.8,7.2,14.9,7.4,15c0.1,1.5,0.4,2.8,0.6,3.2 c0.3,0.4,1,0.9,1.9,1.2c-1.8,0.2-3.7,0.6-3.7,1.8v0.7c0,1.4,3.2,1.8,5.1,1.8c1.9,0,5.1-0.4,5.1-1.8v-0.7c0-1-1.6-1.5-3.2-1.7 c0.7-0.2,1-0.6,1.2-0.7c0.2-0.1,0.3-0.4,0.3-0.7c-0.1-0.6-0.7-0.9-1.2-1c-0.9-0.3-1.4-0.3-1.8-0.2c-0.2-0.7-0.2-1.9-0.2-3.1l8-4.7 c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0.1,0c0,0,0,0,0,0C20.2,8.4,20.6,7.7,20.5,6.6z M16.7,1.7c0.7,0.5,1.4,1.2,1.9,2.2 c0.5,0.9,0.9,1.9,0.9,2.8c0,0.7-0.1,1.2-0.5,1.4c-0.3,0.2-0.9,0.1-1.5-0.3c-0.7-0.5-1.4-1.2-1.9-2.2c-0.5-0.9-0.9-1.9-0.9-2.8 c0-0.5,0.1-1,0.3-1.2c0,0,0,0,0,0c0.1-0.1,0.1-0.1,0.2-0.2c0,0,0,0,0,0c0.1-0.1,0.2-0.1,0.4-0.1C15.9,1.3,16.3,1.5,16.7,1.7z",
            keywords: ["exterior","light","spot"]
        },
        "lily-two":{
            path:"M10.6,18.9c0.6-0.2,1-0.5,1.1-0.7c0.2-0.1,0.3-0.3,0.3-0.6c0-0.5-0.6-0.8-1.1-1c-0.9-0.3-1.3-0.3-1.7-0.2 C9,15.8,9,14.8,9,13.6l3.2-1.9l0,0l4.3-2.5c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0.1,0c0,0,0,0,0,0 c0.1-0.1,0.2-0.2,0.3-0.3c0-0.1,0.1-0.1,0.1-0.2c0-0.1,0.1-0.1,0.1-0.2c0-0.1,0.1-0.2,0.1-0.3c0-0.1,0-0.1,0-0.2 c0-0.1,0.1-0.3,0.1-0.4c0,0,0,0,0,0l0,0c0-0.2,0-0.4,0-0.6c0-0.9-0.4-2-1-3c-0.6-1-1.3-1.8-2.1-2.3c-0.9-0.6-1.7-0.7-2.4-0.3 c0,0,0,0,0,0c0,0,0,0,0,0L2.4,7c0,0,0,0,0,0C1.7,7.4,1.4,8.2,1.4,9.2c0,0.9,0.4,2,1,3c0.6,1,1.3,1.8,2.1,2.3 c0.2,0.1,0.4,0.2,0.5,0.3c0.1,1.4,0.3,2.6,0.6,3c0.3,0.4,1,0.8,1.8,1.1C5.8,19,4,19.5,4,20.5v0.7c0,1.3,3,1.7,4.8,1.7 c1.8,0,4.8-0.4,4.8-1.7v-0.7C13.6,19.5,12.1,19.1,10.6,18.9z M12.1,2.3C12.1,2.3,12.1,2.3,12.1,2.3c0.1-0.1,0.1-0.1,0.2-0.2 c0,0,0,0,0,0c0.1-0.1,0.2-0.1,0.4-0.1c0.3,0,0.6,0.1,1,0.4c0.7,0.4,1.3,1.1,1.8,2c0.5,0.9,0.8,1.8,0.8,2.6c0,0.6-0.1,1.1-0.4,1.3 h0c0,0,0,0-0.1,0.1c0,0,0,0-0.1,0l0,0c-0.3,0.1-0.8,0-1.3-0.3c-0.7-0.4-1.3-1.1-1.8-2c-0.5-0.9-0.8-1.8-0.8-2.6 C11.9,3,12,2.6,12.1,2.3z M22.1,8.2c-0.4-0.7-0.9-1.2-1.4-1.6c-0.6-0.4-1.1-0.4-1.6-0.2c0,0,0,0,0,0c0,0,0,0,0,0l-0.8,0.5c0,0,0,0,0,0 c0.1,1.3-0.4,2.3-1.2,2.9c0,0,0,0-0.1,0.1c0,0-0.1,0.1-0.1,0.1c0,0,0,0,0,0c0,0,0,0,0,0l-4.6,2.7c0.1,0.3,0.2,0.6,0.4,1 c0.4,0.7,0.9,1.2,1.4,1.6c0.1,0.1,0.2,0.1,0.4,0.2c0.1,1,0.2,1.7,0.4,2c0.2,0.3,0.6,0.5,1.2,0.7c-1,0.1-2,0.3-2.2,0.9 c0.5,0.5,0.7,1,0.7,1.4c0.7,0.3,1.7,0.4,2.5,0.4c1.2,0,3.2-0.2,3.2-1.1v-0.5c0-0.6-1-0.9-2-1.1c0.4-0.1,0.6-0.3,0.7-0.4 c0.1-0.1,0.2-0.2,0.2-0.4c0-0.3-0.4-0.5-0.7-0.6c-0.6-0.2-0.9-0.2-1.1-0.1c-0.1-0.5-0.1-1.2-0.1-2l5-3c0,0,0,0,0,0c0,0,0,0,0,0 c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0.4-0.3,0.6-0.8,0.6-1.4C22.7,9.6,22.5,8.9,22.1,8.2z M21.8,11.1c-0.2,0.1-0.6,0.1-0.9-0.2 c-0.4-0.3-0.9-0.8-1.2-1.3c-0.3-0.6-0.5-1.2-0.6-1.7c0-0.3,0-0.6,0.2-0.8c0,0,0,0,0,0C19.3,7,19.4,7,19.4,7c0,0,0,0,0,0 c0.1,0,0.2-0.1,0.2-0.1c0.2,0,0.4,0.1,0.7,0.2c0.4,0.3,0.9,0.8,1.2,1.3c0.3,0.6,0.5,1.2,0.6,1.7C22.1,10.7,22,11,21.8,11.1z",
            keywords: ["exterior","light","spot"]
        },
        "lily-xl":{
            path:"M20.55,6.31c-0.26-2.72-0.98-4.4-2.16-5c-0.7-0.36-1.4-0.22-1.78,0.01L7.53,6.73C7.3,6.88,6.97,7.2,6.92,7.63 L6.49,7.88C6.42,7.91,5.77,8.27,5.51,9.25c-0.37,1.37,0.15,3.22,1.56,5.5c0.01,1.11,0.17,3,0.18,3.04c0,0.04,0,1.1,0.87,1.92 c0.65,0.62,1.6,0.93,2.82,0.93c0.12,0,0.26-0.01,0.39-0.01v0.87c-3.27,0.01-3.37,0.14-3.37,0.75c0,0.65,0.11,0.75,3.97,0.75 s3.97-0.11,3.97-0.75c0-0.61-0.1-0.74-3.37-0.75v-0.96c1.32-0.14,1.7-0.36,1.67-0.84c-0.04-0.74-1.36-0.71-1.62-0.7l-0.22,0.01 c-0.49,0.04-0.83,0.04-1.09-0.2c-0.24-0.22-0.52-0.78-0.54-2.12c0.29-0.12,0.59-0.22,0.8-0.3c0.33,0.14,0.8,0.02,1.39-0.2 c1.22-0.45,4.91-2.19,5.14-2.3C18.17,13.81,21.07,11.76,20.55,6.31z M16.96,12.57c-3.61,1.39-2.46-7.12-2.46-7.12 C15.71,4.92,20.57,11.17,16.96,12.57z",
            keywords: ["exterior","light","spot"]
        },
        "logo":{
            path:"M1.96,12.95H0.54V7.17c0.13-0.79,1.29-0.79,1.42,0l0,3.13c0,0,0.85-1.14,2.39-1.02 c1.55,0.13,2.82,0.98,2.74,3.64l-1.47,0.01c0.11-1.17-0.21-2.5-1.67-2.46C2.11,10.54,1.96,12.17,1.96,12.95z M1.96,16.81c-0.27,0.63-1.24,0.63-1.42,0v-3.13h1.42V16.81z M7.05,16.81c-0.27,0.63-1.24,0.63-1.42,0v-3.13h1.42V16.81z M8.23,9.87c0.27-0.63,1.24-0.63,1.42,0V13H8.23V9.87z M13.31,9.87c0.27-0.63,1.24-0.63,1.42,0V13h-1.42V9.87z M14.73,16.9c-0.27,0.63-1.42,0.69-1.45-0.35c0,0-1.03,1.41-3.42,0.64c-1.55-0.5-1.68-2.26-1.64-3.46h1.42 c0.11,0.22-0.38,2.49,1.68,2.47s1.97-2.44,1.97-2.44h1.42V16.9z M19.92,9.39c-3.26,0-3.58,3.4-3.58,3.4s-1.07-0.17-1.03,0.6c0,0.78,0.68,0.55,1.03,0.6 c-0.02,0.44,0.57,3.41,3.58,3.39c1.61,0.01,2.54-0.23,2.88-0.63c0.56-0.75-0.25-1.06-0.49-0.99s-3.87,1.58-4.54-1.75h5.66 C23.43,14.02,24.02,9.39,19.92,9.39z M17.74,12.79c0,0,0.32-2.18,2.21-2.19c1.89-0.01,2.08,1.48,2.13,2.19H17.74z",
            keywords: ["philips"]
        },
        "logo-alt":{
            path:"M1.05,4.74v9.37l1.27,0.01v-2.36c0,0,0.14-1.88,1.97-1.85s1.94,1.73,1.94,1.73l0.05,2.45l1.24,0.02L7.5,11.37 c-0.08-1.85-1.84-2.71-3.2-2.73C3.16,8.66,2.32,9.27,2.32,9.27V4.74H1.05z M6.29,14.67h1.24l0.01,4.58H6.29V14.67z M1.05,14.68v4.57h1.27v-4.57L1.05,14.68z M8.43,8.66v5.46h1.28V8.66H8.43z  M14.95,8.64h-1.27v5.47h1.27V8.64z M15.66,19.26v-1.18c-0.81,0.01-0.71-1.12-0.71-1.12l0-2.29l-1.27,0c0,0,0.64,3.27-2.04,3.31 c-2.48,0.03-1.93-3.31-1.93-3.31l-1.28,0c0,0-0.44,4.59,3.25,4.59c1.56,0,2.31-0.89,2.31-0.89C14.32,19.26,15.66,19.26,15.66,19.26 z M19.57,18.01c-1.22-0.03-1.83-0.49-1.84-2.98l2.13-0.01c0,0,3.14,0.1,3.08-2.98s-2.69-3.46-3.24-3.41s-3.32,0.23-3.26,3.52 v1.61l-1.2-0.01v1.3l1.19-0.02c0,0-0.41,4.18,3.09,4.21c2.33,0.01,2.85-1.48,2.85-1.48l-0.91-0.72 C21.47,17.06,20.8,18.05,19.57,18.01z M19.54,9.91c0,0,2.02-0.17,2.16,1.82c0.13,1.98-1.87,2.02-1.87,2.02l-2.1,0.02v-1.23 C17.59,9.81,19.54,9.91,19.54,9.91z",
            keywords: ["philips"]
        },
        "motion-sensor":{
            path:"M 12 15 C 10.34375 15 9 13.65625 9 12 C 9 10.34375 10.34375 9 12 9 C 13.65625 9 15 10.34375 15 12 C 15 13.65625 13.65625 15 12 15 M 12 4.5 C 12.414062 4.5 12.75 4.835938 12.75 5.25 C 12.75 5.664062 12.414062 6 12 6 C 11.585938 6 11.25 5.664062 11.25 5.25 C 11.25 4.835938 11.585938 4.5 12 4.5 M 18 3 L 6 3 C 4.351562 3 3 4.351562 3 6 L 3 18 C 3 19.648438 4.351562 21 6 21 L 18 21 C 19.648438 21 21 19.648438 21 18 L 21 6 C 21 4.351562 19.648438 3 18 3 ",
            keywords: ["pir"]
        },
        "motion-sensor-temperature":{
            path:"M7.2,9.46c-1,0-1.82-0.83-1.82-1.84S6.2,5.77,7.2,5.77S9.02,6.6,9.02,7.62S8.2,9.46,7.2,9.46 M7.2,2.85 c0.33,0,0.61,0.28,0.61,0.62S7.54,4.08,7.2,4.08S6.6,3.81,6.6,3.47S6.87,2.85,7.2,2.85 M10.83,2.09H3.57c-1,0-1.82,0.83-1.82,1.84 v7.37c0,1.01,0.82,1.84,1.82,1.84h7.26c1,0,1.82-0.83,1.82-1.84V3.93C12.65,2.92,11.83,2.09,10.83,2.09 M16.83,14.67V8.32c0-0.28-0.22-0.5-0.5-0.5s-0.5,0.22-0.5,0.5v6.35c-1.16,0.24-2.03,1.27-2.03,2.5 c0,1.41,1.14,2.55,2.55,2.55s2.55-1.14,2.55-2.55C18.9,15.93,18.01,14.89,16.83,14.67z M16.35,18.72c-0.86,0-1.55-0.7-1.55-1.55 s0.7-1.55,1.55-1.55s1.55,0.7,1.55,1.55S17.21,18.72,16.35,18.72z M21.51,7.38c0.28,0,0.5-0.22,0.5-0.5s-0.22-0.5-0.5-0.5h-2.44V5.91h0.89c0.28,0,0.5-0.22,0.5-0.5 s-0.22-0.5-0.5-0.5h-0.89V4.45h2.47c0.28,0,0.5-0.22,0.5-0.5s-0.22-0.5-0.5-0.5h-2.66c-0.39-1.02-1.38-1.75-2.53-1.75 c-1.5,0-2.72,1.22-2.72,2.72v9.14c-1.16,0.85-1.83,2.15-1.83,3.61c0,2.51,2.04,4.55,4.55,4.55s4.55-2.04,4.55-4.55 c0-1.47-0.67-2.77-1.83-3.62v-0.29h2.44c0.28,0,0.5-0.22,0.5-0.5s-0.22-0.5-0.5-0.5h-2.44v-0.47h0.88c0.28,0,0.5-0.22,0.5-0.5 s-0.22-0.5-0.5-0.5h-0.88v-0.47h2.44c0.28,0,0.5-0.22,0.5-0.5s-0.22-0.5-0.5-0.5h-2.44V8.85h0.89c0.28,0,0.5-0.22,0.5-0.5 s-0.22-0.5-0.5-0.5h-0.89V7.38H21.51z M19.9,17.17c0,1.96-1.59,3.55-3.55,3.55s-3.55-1.59-3.55-3.55c0-1.21,0.58-2.28,1.6-2.94 c0.01-0.01,0.02-0.02,0.03-0.03c0.03-0.02,0.05-0.05,0.08-0.07c0.02-0.02,0.04-0.05,0.05-0.07c0.02-0.03,0.03-0.06,0.04-0.09 c0.01-0.03,0.02-0.07,0.02-0.1c0-0.02,0.01-0.03,0.01-0.05V4.42c0-0.95,0.77-1.72,1.72-1.72c0.95,0,1.72,0.77,1.72,1.72v9.38 c0,0.02,0.01,0.03,0.01,0.05c0,0.04,0.01,0.07,0.02,0.1c0.01,0.03,0.02,0.06,0.04,0.08c0.02,0.03,0.03,0.05,0.05,0.08 c0.02,0.03,0.04,0.05,0.07,0.07c0.01,0.01,0.02,0.03,0.04,0.04C19.31,14.87,19.9,15.94,19.9,17.17z",
            keywords: ["pir"]
        },
        "outdoor-motion-sensor":{
            path:"M 6.0441177,3 C 4.363511,3 3,4.3898591 3,6.1029412 V 18.514706 c 0,1.713082 1.363511,3.102941 3.0441177,3.102941 H 18.220588 c 1.680607,0 3.044118,-1.389859 3.044118,-3.102941 V 6.1029412 C 21.264706,4.3898591 19.901195,3 18.220588,3 Z m 6.0882353,2.3272059 c 3.781364,0 6.849265,3.1271836 6.849265,6.9816171 0,3.854435 -3.067901,6.981618 -6.849265,6.981618 -3.7813641,0 -6.8492648,-3.127183 -6.8492648,-6.981618 0,-3.8544335 3.0679007,-6.9816171 6.8492648,-6.9816171 z m 0,0.7757353 C 9.0882353,6.0908201 6.4959783,8.3574227 6.0441177,11.424 c -0.015855,0.141411 0.039636,0.283326 0.1545841,0.368172 0.1109834,0.08484 0.2581356,0.100504 0.3849738,0.04394 1.7717721,-0.739373 3.6743454,-1.10704 5.5888094,-1.078757 1.886719,-0.02827 3.760556,0.335849 5.508546,1.071181 0.126837,0.0606 0.274486,0.04848 0.389432,-0.03636 0.110984,-0.08484 0.169943,-0.226761 0.150125,-0.368172 C 17.760799,8.3614627 15.172507,6.0989012 12.132353,6.1029412 Z",
            keywords: ["exterior","pir"]
        },
        "outdoor-motion-sensor-temperature":{
            path:"M3.55,2.01c-1.01,0-1.82,0.83-1.82,1.86v7.43c0,1.02,0.82,1.86,1.82,1.86h7.28c1.01,0,1.82-0.83,1.82-1.86 V3.86c0-1.02-0.82-1.86-1.82-1.86H3.55z M7.19,3.4c2.26,0,4.1,1.87,4.1,4.18s-1.84,4.18-4.1,4.18s-4.1-1.87-4.1-4.18 S4.93,3.4,7.19,3.4z M7.19,4.21C5.61,4.21,4.27,5.29,4.04,6.75C4.03,6.82,4.06,6.89,4.12,6.93c0.06,0.04,0.13,0.05,0.2,0.02 c0.92-0.35,1.9-0.53,2.9-0.52c0.98-0.01,1.95,0.16,2.85,0.51c0.07,0.03,0.14,0.02,0.2-0.02c0.06-0.04,0.09-0.11,0.08-0.18 C10.11,5.29,8.77,4.21,7.19,4.21z M16.83,14.67V8.32c0-0.28-0.22-0.5-0.5-0.5s-0.5,0.22-0.5,0.5v6.35c-1.16,0.24-2.03,1.27-2.03,2.5 c0,1.41,1.14,2.55,2.55,2.55s2.55-1.14,2.55-2.55C18.9,15.93,18.01,14.89,16.83,14.67z M16.35,18.72c-0.86,0-1.55-0.7-1.55-1.55 s0.7-1.55,1.55-1.55s1.55,0.7,1.55,1.55S17.21,18.72,16.35,18.72z M21.51,7.38c0.28,0,0.5-0.22,0.5-0.5s-0.22-0.5-0.5-0.5h-2.44V5.91h0.89c0.28,0,0.5-0.22,0.5-0.5 s-0.22-0.5-0.5-0.5h-0.89V4.45h2.47c0.28,0,0.5-0.22,0.5-0.5s-0.22-0.5-0.5-0.5h-2.66c-0.39-1.02-1.38-1.75-2.53-1.75 c-1.5,0-2.72,1.22-2.72,2.72v9.14c-1.16,0.85-1.83,2.15-1.83,3.61c0,2.51,2.04,4.55,4.55,4.55s4.55-2.04,4.55-4.55 c0-1.47-0.67-2.77-1.83-3.62v-0.29h2.44c0.28,0,0.5-0.22,0.5-0.5s-0.22-0.5-0.5-0.5h-2.44v-0.47h0.88c0.28,0,0.5-0.22,0.5-0.5 s-0.22-0.5-0.5-0.5h-0.88v-0.47h2.44c0.28,0,0.5-0.22,0.5-0.5s-0.22-0.5-0.5-0.5h-2.44V8.85h0.89c0.28,0,0.5-0.22,0.5-0.5 s-0.22-0.5-0.5-0.5h-0.89V7.38H21.51z M19.9,17.17c0,1.96-1.59,3.55-3.55,3.55s-3.55-1.59-3.55-3.55c0-1.21,0.58-2.28,1.6-2.94 c0.01-0.01,0.02-0.02,0.03-0.03c0.03-0.02,0.05-0.05,0.08-0.07c0.02-0.02,0.04-0.05,0.05-0.07c0.02-0.03,0.03-0.06,0.04-0.09 c0.01-0.03,0.02-0.07,0.02-0.1c0-0.02,0.01-0.03,0.01-0.05V4.42c0-0.95,0.77-1.72,1.72-1.72c0.95,0,1.72,0.77,1.72,1.72v9.38 c0,0.02,0.01,0.03,0.01,0.05c0,0.04,0.01,0.07,0.02,0.1c0.01,0.03,0.02,0.06,0.04,0.08c0.02,0.03,0.03,0.05,0.05,0.08 c0.02,0.03,0.04,0.05,0.07,0.07c0.01,0.01,0.02,0.03,0.04,0.04C19.31,14.87,19.9,15.94,19.9,17.17z",
            keywords: ["exterior","pir"]
        },
        "pedestal-econic":{
            path:"M19.41406,2.26984l-.13867-.10743c-.07519-.05859-1.90918-1.438-6.5498-1.5332a29.73562,29.73562,0,0,0-7.89112.81592L4.51953,1.532,4.37305,2.54572,6.91553,12.87286l.08691.09473A6.29334,6.29334,0,0,0,9.667,14.71075a15.60723,15.60723,0,0,1-.485,5.2699c-1.00788.29865-1.74353.796-1.74353,1.528,0,1.28418,2.23,1.86914,4.30224,1.86914,2.07178,0,4.30225-.585,4.30225-1.86914,0-.71985-.7124-1.21253-1.69446-1.51294a16.69238,16.69238,0,0,1-.4823-5.3855c2.71777-.40918,2.80762-.625,2.91113-.873.0918-.2207,1.8086-6.63428,2.82422-10.4375l.03223-.12305ZM8.55829,4.02209l.64483,5.21406L7.36639,8.27441,6.15027,3.20087ZM8.1908,11.71362l-.515-2.14831,1.67664.87829.27765,2.24488Zm2.54174,1.25049-.267-2.51514,5.33361-.49517L15.173,12.40356Zm5.32959-4.03937-5.70227.52936L9.80261,4.20581l7.5752-.42871Z",
            keywords: ["bollard","exterior","lamp","light"]
        },
        "pendant-being":{
            path:"M6.92,18.67C6.92,20.2,9.47,21,12,21s5.08-0.8,5.08-2.34C17.08,15.6,6.92,15.6,6.92,18.67z M23.63,16.15c0-2.38-3.25-4.28-7.98-4.93L14.31,5.3c0.91-0.36,1.48-0.94,1.48-1.62V2.85c0-1.15-1.59-2.01-3.7-2.01 c-2.11,0-3.7,0.86-3.7,2.01v0.82c0,0.64,0.51,1.19,1.32,1.55l-1.35,6c-4.73,0.65-7.99,2.55-7.99,4.93v2.33 c0,0.02,0.01,0.03,0.01,0.05c0,0.02-0.01,0.03-0.01,0.05l0.01,0C0.5,21.29,5.55,23.4,12,23.4c6.45,0,11.5-2.11,11.62-4.83l0.01,0 c0-0.02-0.01-0.03-0.01-0.05c0-0.02,0.01-0.03,0.01-0.05V16.15z M12.5,5.66c0.3-0.02,0.58-0.05,0.85-0.1l1.25,5.54 c-0.67-0.06-1.37-0.1-2.09-0.11V5.66z M10.66,5.54c0.26,0.06,0.55,0.09,0.84,0.12v5.34c-0.72,0.01-1.42,0.05-2.09,0.11L10.66,5.54z M12,12.48c5.73,0,9.79,1.78,10.1,3.46c-1.97-1.54-5.66-2.54-10.1-2.54s-8.13,1-10.1,2.54C2.21,14.27,6.27,12.48,12,12.48z M12,22.4c-6.26,0-10.62-2.07-10.62-3.92l0.08-0.38c0.61-1.61,5.01-3.19,10.54-3.19s9.93,1.58,10.54,3.19l0.08,0.38 C22.62,20.34,18.26,22.4,12,22.4z",
            keywords: ["ceiling","light"]
        },
        "pendant-cher":{
            path:"M22.91,20.12c-0.18-1.56-2.21-2.02-4.56-2.56c-0.98-0.22-2-0.46-3.01-0.78c-2.71-0.88-2.83-3.27-2.83-3.7l0-0.07l0-6.44 c0-0.4,0.24-1.34,1.63-2.3c0.65-0.45,1.48-1.13,1.23-1.91c-0.23-0.72-1.27-1.06-3.3-1.06h-0.13c-2.03,0-3.07,0.34-3.3,1.06 C8.39,3.13,9.22,3.82,9.87,4.27c1.4,0.97,1.63,1.86,1.63,2.29l0-0.01l0,6.47c0,0.02,0.12,2.82-2.83,3.77 c-1,0.32-2.02,0.56-3.01,0.78c-2.28,0.52-4.23,0.98-4.52,2.42c0,0-0.01,0.01-0.01,0.01c-0.03,0.07-0.16,0.47,0.16,0.93 c0.82,1.18,3.93,1.78,9.25,1.78c0.4,0,0.81,0,1.23-0.01h0.42c6.08,0.09,9.61-0.5,10.49-1.77c0.22-0.31,0.23-0.59,0.2-0.76 C22.9,20.15,22.91,20.14,22.91,20.12z M12.21,21.69h-0.43c-0.42,0.01-0.82,0.01-1.21,0.01c-7.56,0-8.38-1.19-8.48-1.33l0.06-0.07 l19.72,0.07C21.62,20.69,20.21,21.82,12.21,21.69z",
            keywords: ["ceiling","light"]
        },
        "pendant-long":{
            path:"M 20.643308,13.023904 6.6196999,17.732088 c -0.1538807,0.05153 -0.3197612,0.048 -0.4715243,-0.0092 L 3.3783237,16.676805 C 3.1912669,16.606215 3.196208,16.337986 3.3860837,16.274457 L 17.409697,11.566979 c 0.15388,-0.05223 0.319761,-0.0487 0.470818,0.0085 l 2.770558,1.046106 c 0.186351,0.07059 0.182116,0.338114 -0.0078,0.402348 M 22.83572,9.1818594 17.88048,7.3098799 c -0.151057,-0.057176 -0.316938,-0.060705 -0.470818,-0.00847 l -4.703914,1.579012 V 4.9698766 4.7722317 c 0,-0.1828215 -0.315526,-0.3310552 -0.705874,-0.3310552 -0.390349,0 -0.705875,0.1482337 -0.705875,0.3310552 V 4.9698766 9.3547697 L 1.1879947,12.746496 c -0.28799688,0.09741 -0.48211238,0.369172 -0.48211238,0.674816 v 3.26114 c 0,0.296468 0.1828215,0.561171 0.45740678,0.664934 l 4.9559457,1.871274 c 0.1510572,0.05718 0.3169377,0.06071 0.4708184,0.0092 L 22.811049,13.782014 c 0.287997,-0.09671 0.482819,-0.368467 0.482819,-0.674816 V 9.8467643 c 0,-0.2964674 -0.182822,-0.5611703 -0.458113,-0.6649339",
            keywords: ["ceiling","light"]
        },
        "pendant-long-up":{
            path:"m 12.386719,2.8261719 c 0.710717,-0.00209 0.75,0.2929687 0.75,0.2929687 v 1.4257813 2.1308593 l 9.671875,3.2480469 c 0.287997,0.09671 0.484375,0.3674789 0.484375,0.6738279 v 3.261719 c 0,0.296467 -0.183693,0.560299 -0.458984,0.664063 l -4.955078,1.871093 c -0.151057,0.05718 -0.316824,0.06198 -0.470704,0.0098 C 13.937242,15.231937 17.739835,16.51485 1.1855471,10.958984 0.89755112,10.861574 0.70507812,10.588847 0.70507812,10.283203 V 7.0234375 c 0,-0.296468 0.182446,-0.5622526 0.45703098,-0.6660156 l 4.955079,-1.8710938 c 0.151058,-0.05718 0.316822,-0.061276 0.470703,-0.00977 l 5.1347649,1.7246094 v -1.65625 -1.4257813 c 0,0 0.02034,-0.2910687 0.664063,-0.2929687 z M 6.3808591,5.9375 c -0.079675,0.00159 -0.158493,0.016322 -0.234374,0.044922 l -2.769532,1.046875 c -0.187056,0.07059 -0.182102,0.3388147 0.00781,0.4023437 L 17.408203,12.138672 c 0.15388,0.05223 0.319647,0.04743 0.470704,-0.0098 l 2.769531,-1.044922 c 0.185809,-0.07038 0.182428,-0.337121 -0.0059,-0.402343 h -0.002 L 13.136719,8.1621094 v 0.8828125 c 0,0 -0.02229,0.2910787 -0.666016,0.2929687 -0.710717,0.00209 -0.748047,-0.2929687 -0.748047,-0.2929687 V 7.6875 L 6.6171881,5.9726562 C 6.5402471,5.9468913 6.4605351,5.9359088 6.3808591,5.9375 Z",
            keywords: ["ceiling","light"]
        },
        "pendant-muscari":{
            path:"M18.61,19.31v-0.1c0-0.09-0.02-0.18-0.07-0.25c-0.03-0.06-0.67-1.1-2.03-1.75L14.95,4.15c0.37-0.25,0.6-0.57,0.6-0.97v-1 c0-1.11-1.71-1.61-3.3-1.61s-3.3,0.5-3.3,1.61v1c0,0.43,0.27,0.77,0.68,1.03L8.15,17.1c-1.51,0.61-2.17,1.83-2.21,1.89 c-0.04,0.07-0.06,0.15-0.06,0.23v0.1c-1.65,0.46-2.67,1.1-2.67,1.81c0,1.41,4.04,2.54,9.03,2.54s9.03-1.14,9.03-2.54 C21.27,20.41,20.25,19.77,18.61,19.31z M12.82,4.77c0.41-0.03,0.81-0.1,1.18-0.2l1.46,12.28c-0.04-0.01-0.06-0.02-0.1-0.03 c-0.8-0.16-1.65-0.24-2.53-0.26V4.77z M10.59,4.59c0.38,0.1,0.8,0.16,1.23,0.18v11.79c-0.86,0.02-1.74,0.1-2.63,0.25L10.59,4.59z M9.26,17.81c2.1-0.36,4.14-0.36,5.9,0c1.07,0.22,1.78,0.79,2.16,1.21c-1.45-0.28-3.19-0.44-5.07-0.44c-1.9,0-3.66,0.17-5.12,0.45 C7.49,18.6,8.17,17.99,9.26,17.81z M12.23,21.87c-3.59,0-6.51-0.46-6.51-1.02s2.91-1.02,6.51-1.02s6.51,0.46,6.51,1.02 S15.82,21.87,12.23,21.87z",
            keywords: ["ceiling","light"]
        },
        "pendant-round":{
            path:"m 18.573049,18.079037 c -3.622024,0.908332 -9.5711758,0.908332 -13.1959647,0 -3.5750206,-0.895718 -3.4653461,-2.321296 0.1557562,-3.185474 3.5713341,-0.851562 9.2956075,-0.851562 12.8697055,0 3.62571,0.864178 3.741837,2.289756 0.170503,3.185474 m 4.388824,-7.427065 C 22.692755,9.9761285 21.593245,9.3273193 19.692835,8.8136785 17.785051,8.2991366 15.366681,8.0152825 12.893015,7.9594129 V 4.1161184 3.8638037 c 0,-0.2333912 -0.411971,-0.4226273 -0.921635,-0.4226273 -0.509664,0 -0.921634,0.1892361 -0.921634,0.4226273 v 0.2523147 3.8432945 c -2.4773546,0.05587 -4.8984887,0.3388226 -6.8062723,0.8542656 -1.9004105,0.5136408 -2.9934691,1.16245 -3.26258644,1.8382935 -0.0488466,0.114442 -0.0691226,0.222578 -0.0691226,0.337921 v 6.53315 c 0,0.114443 0.0202759,0.229787 0.0691226,0.337922 0.26266584,0.648809 1.27922874,1.276892 3.07549464,1.783324 4.3482721,1.224628 11.4890971,1.224628 15.8364471,0 1.789815,-0.506432 2.806377,-1.134515 3.069044,-1.783324 0.04793,-0.108135 0.06912,-0.223479 0.06912,-0.337922 v -6.53315 c 0,-0.115343 -0.0212,-0.223479 -0.06912,-0.337921",
            keywords: ["ceiling","light"]
        },
        "phoenix-pendant":{
            path:"M22.8,16.8h-0.3c-1.7-1.1-5.2-2-10-2v-4.6c1.8-0.2,3.3-1.6,3.3-3.3c0-1-0.5-1.9-1.3-2.5c1.5-0.2,2.8-0.8,2.8-1.7 c0-1.5-3.3-1.9-5.2-1.9c-1.9,0-5.2,0.4-5.2,1.9c0,1.4,2.8,1.9,4.7,1.9v4.7c-1.8,0.2-3.2,1.6-3.2,3.3c0,0.9,0.5,1.8,1.2,2.4 c-3.7,0.2-6.7,0.9-8.1,2H1.2c-0.5,0-0.9,0.4-0.9,0.9c0,0.4,0.3,0.7,0.7,0.8c1.6,1.4,6,4.3,11,4.3c4.5,0,9.3-3.1,10.9-4.3 c0.4-0.1,0.7-0.4,0.7-0.8C23.6,17.1,23.2,16.8,22.8,16.8z M12.5,9.1V4.6c1.3,0.2,2.3,1.1,2.3,2.3S13.8,8.9,12.5,9.1z M9.2,12.4 c0-1.1,1-2,2.2-2.3v4.5C10.2,14.5,9.2,13.5,9.2,12.4z M11.9,15.7C11.9,15.7,12,15.7,11.9,15.7c0.1,0,0.1,0,0.1,0 c3.4,0,6.1,0.5,7.9,1.1H3.6C5.4,16.2,8.2,15.7,11.9,15.7z M12,21.8c-3.9,0-7.4-1.9-9.3-3.3h18.5C19.1,19.9,15.4,21.8,12,21.8z",
            keywords: ["ceiling","light"]
        },
        "phoenix-plafond":{
            path:"M16.2,8.2C16.2,8.2,16.2,8.2,16.2,8.2c-1.4-2.2-7-2.2-8.4,0c-5.2,0.6-9.9,3.8-4.3,6.7c4.1,3.2,12.6,3.5,17.1,0 C26.1,12,21.4,8.9,16.2,8.2z M19.5,14.5c-0.8,0.5-1.6,0.9-2.6,1.2c0,0,0,0,0,0C13.3,17.2,6.5,16.3,4,14.1l-0.1,0 c-3.3-2.6,2.2-4.3,8-4.4C18.2,9.8,23.8,11.7,19.5,14.5z",
            keywords: ["ceiling","light"]
        },
        "phoenix-semiflush":{
            path:"M22,14c0,0-0.3-0.1-0.8-0.1c-0.9-0.9-3-1.8-5.5-2.3l0.8-3.9c0-1.4-2.3-2-4.6-2s-4.6,0.7-4.6,2l0.8,3.9 c-2.5,0.5-4.6,1.4-5.5,2.4C2.1,13.9,1.8,14,1.8,14c-0.5,0.1-0.8,0.6-0.7,1c0.1,0.4,0.4,0.7,0.9,0.7c0.1,0,0.1,0,0.2,0 c0,0,0.1,0,0.4-0.1c1.6,1.6,7.3,3,9.4,3c2.2,0,7.8-1.4,9.4-3c0.2,0,0.3,0.1,0.3,0.1c0.5,0.1,0.9-0.2,1-0.7 C22.8,14.6,22.5,14.1,22,14z M11.9,12.1c2.9,0,5.4,0.7,7,1.5c-1.6-0.1-3.8-0.3-6.8-0.3c-3.2,0-5.7,0.1-7.4,0.3 C6.3,12.8,8.9,12.1,11.9,12.1z M11.9,17.6c-2.4,0-6.3-1.3-8-2.1c1.6-0.2,4.3-0.4,8.2-0.4c3.8,0,6.3,0.2,7.8,0.4 C18.2,16.3,14.3,17.6,11.9,17.6z",
            keywords: ["ceiling","light"]
        },
        "phoenix-table":{
            path:"M22.8,4c-0.1-0.5-0.6-0.8-1-0.7c0,0-0.1,0-0.3,0.1c-1.6-1.6-7.3-3-9.4-3c-2.2,0-7.8,1.4-9.4,3c-0.2,0-0.3-0.1-0.4-0.1 c-0.5-0.1-0.9,0.2-1,0.7C1.1,4.5,1.4,5,1.9,5.1c0,0,0.3,0.1,0.8,0.1c0.9,0.9,3,1.9,5.6,2.4L7.4,21.5c0,1.3,2.3,2,4.6,2 s4.6-0.7,4.6-2L15.8,7.6c2.5-0.5,4.6-1.4,5.5-2.4c0.5-0.1,0.8-0.1,0.8-0.1C22.6,5,22.9,4.5,22.8,4z M12,7C9,7,6.4,6.2,4.8,5.5 c1.7,0.2,4.2,0.3,7.4,0.3c3,0,5.2-0.1,6.8-0.3C17.4,6.3,14.9,7,12,7z M12.2,4C8.3,4,5.6,3.8,4,3.6c1.7-0.9,5.6-2.1,8-2.1 c2.4,0,6.3,1.2,8.1,2.2C18.5,3.8,16,4,12.2,4z",
            keywords: ["lamp","light"]
        },
        "pillar-impress":{
            path:"M15.36,9.85V2.18c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0-0.01,0-0.01c0-0.09-0.03-0.17-0.08-0.25c-0.01-0.02-0.02-0.03-0.03-0.05 c-0.06-0.07-0.12-0.12-0.21-0.16c0,0-0.01-0.01-0.01-0.01l-2.86-1c-0.11-0.04-0.22-0.04-0.33,0l-2.87,1c0,0-0.01,0.01-0.01,0.01 C8.87,1.74,8.8,1.8,8.75,1.87C8.73,1.88,8.73,1.9,8.71,1.92C8.67,1.99,8.64,2.07,8.63,2.16c0,0,0,0.01,0,0.01c0,0,0,0,0,0 c0,0,0,0,0,0v7.67c0,0,0,0,0,0c0,0,0,0,0,0l0.01,11.9c0,0.21,0.13,0.4,0.33,0.47l2.87,1.07c0.06,0.02,0.12,0.03,0.17,0.03 c0.06,0,0.12-0.01,0.18-0.03l2.86-1.07c0.2-0.07,0.32-0.26,0.32-0.47L15.36,9.85z M14.36,9.5l-1.61,0.6V3.5l1.61-0.6V9.5z M11.25,3.5v6.6L9.63,9.5V2.9L11.25,3.5z",
            keywords: ["bollard","exterior","light"]
        },
        "pillar-impress-short":{
            path:"M16.63,2.55C16.63,2.54,16.63,2.54,16.63,2.55c-0.01-0.1-0.04-0.18-0.08-0.26c-0.01-0.02-0.02-0.03-0.03-0.05 c-0.06-0.07-0.12-0.12-0.21-0.16c0,0-0.01-0.01-0.01-0.01l-4.12-1.44c-0.11-0.04-0.22-0.04-0.33,0L7.7,2.08c0,0-0.01,0.01-0.01,0.01 C7.61,2.12,7.54,2.17,7.48,2.24C7.47,2.26,7.46,2.27,7.45,2.29C7.4,2.36,7.37,2.45,7.37,2.54c0,0,0,0.01,0,0.01c0,0,0,0,0,0 c0,0,0,0,0,0v11.07v7.73c0,0.21,0.13,0.4,0.33,0.47l4.15,1.54c0.06,0.02,0.12,0.03,0.17,0.03c0.06,0,0.12-0.01,0.18-0.03l4.12-1.54 c0.2-0.07,0.33-0.26,0.33-0.47v-7.06v-0.67V2.55C16.63,2.55,16.63,2.55,16.63,2.55C16.63,2.55,16.63,2.55,16.63,2.55z M11.14,4.3v10 l-2.77-1.03v-10L11.14,4.3z M15.63,13.27l-2.75,1.03v-10l2.75-1.03V13.27z",
            keywords: ["bollard","exterior","light"]
        },
        "pillar-nyro":{
            path:"M 7.43925,2.40777 7.43925,21.97468 8.54028,22.72968 16.93958,20.0872 16.90338,4.15766 10.01406,5.16432 8.70065,4.81891 8.66611,3.76047 9.89298,4.04359 18.41811,2.9111 18.41811,2.03028 15.77563,1.46403 z",
            keywords: ["bollard","exterior","light"]
        },
        "pillar-spot":{
            path:"M12,3C9.3,3,7.2,4.5,7.2,6.4v11.1c0,1.9,2.2,3.4,4.8,3.4s4.8-1.5,4.8-3.4V6.4C16.8,4.5,14.7,3,12,3z M12,18.4 c-1.9,0-3.4-0.8-4-1.7c0.6-0.9,2.1-1.7,4-1.7c1.9,0,3.4,0.8,4,1.7C15.4,17.6,13.9,18.4,12,18.4z",
            keywords: ["light"]
        },
        "pillar-spot-double":{
            path:"M17.1,3c-0.9,0-1.8,0.2-2.5,0.5c0,0,0,0,0,0C13.8,3.9,13,4,12,4c-0.9,0-1.7-0.2-2.5-0.5c0,0,0,0-0.1,0 C8.8,3.2,7.9,3,7,3C4.3,3,2.2,4.5,2.2,6.4v11.1C2.2,19.5,4.3,21,7,21c0.8,0,1.5-0.1,2.1-0.4c0.1,0,0.1,0,0.2-0.1 c0.8-0.4,1.7-0.6,2.7-0.6c1,0,1.9,0.2,2.6,0.5c0.1,0,0.2,0.1,0.2,0.1c0.7,0.3,1.4,0.4,2.2,0.4c2.7,0,4.8-1.5,4.8-3.4V6.4 C21.9,4.5,19.8,3,17.1,3z M17.1,18.4c-0.7,0-1.5-0.1-2.1-0.4c0,0,0,0-0.1,0c0,0-0.1,0-0.1,0C14,17.6,13,17.4,12,17.4 c-1,0-2,0.2-2.8,0.6c-0.1,0-0.1,0-0.1,0c0,0,0,0-0.1,0c-0.6,0.2-1.3,0.3-2,0.3c-1.9,0-3.4-0.8-4-1.7C3.6,15.8,5.1,15,7,15 c0.8,0,1.6,0.2,2.3,0.4c0,0,0,0,0.1,0c0,0,0.1,0,0.1,0c0.8,0.3,1.7,0.5,2.6,0.5c0.9,0,1.8-0.2,2.6-0.5c0,0,0.1,0,0.1,0 c0,0,0.1,0,0.1,0c0.7-0.3,1.4-0.4,2.2-0.4c1.9,0,3.4,0.8,4,1.7C20.5,17.6,19,18.4,17.1,18.4z",
            keywords: ["light"]
        },
        "pillar-tuar":{
            path:"M17.53874,2.29441a.4093.4093,0,0,0-.103-.27119c-.24916-.49384-1.1023-.7315-1.76979-.87207A18.746,18.746,0,0,0,11.98418.82831a18.74618,18.74618,0,0,0-3.68181.32284c-.79035.16644-1.84111.469-1.84111,1.17183V9.076c0,.70284,1.05076,1.00538,1.84111,1.17183q.18652.03927.38773.07406V22.58l.264.11558a8.81436,8.81436,0,0,0,3.16211.66078,7.97749,7.97749,0,0,0,3.0745-.66615l.25223-.11872V10.29205c.07592-.01426.15042-.029.223-.04426.693-.14594,1.586-.39656,1.79558-.92982a.40426.40426,0,0,0,.06078-.21151Zm-.923,2.13656a.40141.40141,0,0,0-.02189.082,3.40807,3.40807,0,0,1-1.39777.44956,18.84338,18.84338,0,0,1-3.21194.24954,18.84342,18.84342,0,0,1-3.21195-.24954A3.479,3.479,0,0,1,7.37907,4.517V3.23864a6.34663,6.34663,0,0,0,.9233.25617,18.74534,18.74534,0,0,0,3.68181.32285A18.74512,18.74512,0,0,0,15.666,3.49481a6.217,6.217,0,0,0,.95271-.26761ZM7.37907,5.48963a6.34537,6.34537,0,0,0,.9233.25617,18.74457,18.74457,0,0,0,3.68181.32285A18.74436,18.74436,0,0,0,15.666,5.7458a6.24158,6.24158,0,0,0,.94728-.26546l-.00293,1.2171a.4006.4006,0,0,0-.01643.06654,3.408,3.408,0,0,1-1.39777.44957,18.8433,18.8433,0,0,1-3.21194.24955,18.84359,18.84359,0,0,1-3.21195-.24955A3.47892,3.47892,0,0,1,7.37907,6.768ZM8.77225,1.93439a18.84538,18.84538,0,0,1,3.21193-.24953,18.8455,18.8455,0,0,1,3.21194.24953,4.39171,4.39171,0,0,1,1.30916.38859,4.39151,4.39151,0,0,1-1.30916.38858,18.8433,18.8433,0,0,1-3.21194.24955,18.84334,18.84334,0,0,1-3.21195-.24955A4.39129,4.39129,0,0,1,7.46307,2.323,4.39148,4.39148,0,0,1,8.77225,1.93439Zm6.42387,7.53016a18.84558,18.84558,0,0,1-3.21194.24952,18.84546,18.84546,0,0,1-3.21193-.24952A3.47886,3.47886,0,0,1,7.37907,9.019V7.74062a6.34537,6.34537,0,0,0,.9233.25617,18.74472,18.74472,0,0,0,3.68181.32285A18.74436,18.74436,0,0,0,15.666,7.99679a6.26442,6.26442,0,0,0,.94185-.26332l-.003,1.2328a.3985.3985,0,0,0-.011.0487A3.40773,3.40773,0,0,1,15.19612,9.46455Z",
            keywords: ["bollard","exterior","lamp","light"]
        },
        "pillar-turaco-short":{
            path:"M19.37,14.25V1.66c0-0.27-0.21-0.49-0.48-0.5l-0.67-0.02l-1.1,0.08l-5.43-0.14C11.6,1,11.5,0.95,11.38,0.94l-0.66-0.06 c-0.02,0-0.03,0-0.05,0c-0.02,0-0.04,0-0.06,0L6.13,1.36C5.87,1.38,5.68,1.6,5.68,1.86v12.42c0,0.02,0,0.03,0,0.05v7.38 c0,0.25,0.18,0.46,0.42,0.49l4.5,0.71c0.03,0,0.05,0.01,0.08,0.01c0.02,0,0.03,0,0.05,0l8.2-0.83c0.26-0.03,0.45-0.24,0.45-0.5 v-7.26C19.38,14.3,19.37,14.27,19.37,14.25z M17.63,12.7l-5.71,0.17H11.6V2.02h0.3l5.72,0.17V12.7z",
            keywords: ["exterior","light"]
        },
        "pillar-turaco-tall":{
            path:"M17.07,14.25V1.65c0-0.27-0.21-0.49-0.47-0.5l-0.54-0.02l-0.8,0.08l-3.39-0.14c-0.08-0.08-0.18-0.13-0.3-0.14l-0.49-0.05 c-0.02,0-0.04,0-0.06,0c-0.03,0-0.06,0-0.08,0.01L7.85,1.35C7.61,1.39,7.43,1.6,7.43,1.84l0,20.2c0,0.23,0.16,0.43,0.38,0.49 l3.08,0.75c0.04,0.01,0.08,0.01,0.12,0.01c0.03,0,0.05,0,0.08-0.01l5.56-0.87c0.24-0.04,0.42-0.25,0.42-0.49v-7.61 C17.07,14.29,17.07,14.27,17.07,14.25z M15.63,10.09l-3.68,0.15h-0.24V2.01h0.23l3.69,0.15V10.09z",
            keywords: ["exterior","light"]
        },
        "play-bar":{
            path:"M 21.732571,14.498882 C 20.13567,15.288527 18.56624,14.701752 17.516667,14.288263 16.648831,13.946623 2.1583795,7.9718015 2.1583795,7.9718015 c 0,0 -1.33697368,-0.5966368 0.1225676,-1.1270589 1.8004765,-0.6551029 3.2536783,-0.111297 4.9344043,0.5635294 1.058731,0.4254647 14.1319066,5.674038 14.1319066,5.674038 0,0 1.982215,0.626926 0.385313,1.416572 z m 1.512372,-0.667078 C 23.232263,13.468327 23.044186,12.822382 21.972071,12.38142 L 6.5081224,6.1727338 C 5.8537234,5.9036485 4.8259864,5.7352941 3.830653,5.7352941 c -0.5135162,0 -1.2489221,0.047196 -1.8385147,0.2740162 C 0.95242642,6.4094162 0.74251172,7.0046441 0.71715292,7.3617809 l -0.005635,-0.00141 -0.005635,4.2680321 0.00423,7.04e-4 c 0.021132,0.343049 0.207097,0.888263 1.09536038,1.267941 l 15.8767337,6.529897 c 0.595932,0.253589 1.382055,0.396584 2.206922,0.396584 0.826979,0 1.606763,-0.144404 2.195651,-0.404332 1.016467,-0.449415 1.160871,-1.098882 1.157349,-1.446157 l 0.0049,-4.140533 z",
            keywords: ["light"]
        },
        "play-bar-three":{
            path:"M19.3,0.6c-2.5,0-3.4,1.5-3.7,2.4c-0.3-1-1.1-2.4-3.7-2.4S8.6,2.1,8.3,3.1c-0.3-1-1.1-2.4-3.7-2.4c-3.8,0-3.8,3.3-3.8,3.3 v16.3c0,0,0,3.2,3.8,3.2c2.5,0,3.4-1.4,3.7-2.3c0.3,0.9,1.1,2.3,3.7,2.3s3.4-1.4,3.7-2.3c0.3,0.9,1.1,2.3,3.7,2.3 c3.8,0,3.8-3.2,3.8-3.2V3.9C23.1,3.9,23.1,0.6,19.3,0.6z M4.7,22.4c-2.6,0-2.8-1.8-2.8-2.2l0-16.3c0-0.4,0.2-2.3,2.8-2.3 c2.6,0,2.8,1.9,2.8,2.3l0,16.3C7.5,20.6,7.3,22.4,4.7,22.4z M12,22.4c-2.6,0-2.8-1.8-2.8-2.2l0-16.3c0-0.4,0.2-2.3,2.8-2.3 s2.8,1.9,2.8,2.3l0,16.3C14.8,20.6,14.6,22.4,12,22.4z M19.3,22.4c-2.6,0-2.8-1.8-2.8-2.2l0-16.3c0-0.4,0.2-2.3,2.8-2.3 c2.6,0,2.8,1.9,2.8,2.3l0,16.3C22.1,20.6,21.9,22.4,19.3,22.4z",
            keywords: ["light"]
        },
        "play-bar-two":{
            path:"M21.8,18.5c-1.6,0.8-3.2,0.2-4.2-0.2C16.7,17.9,2.2,12,2.2,12s-1.3-0.6,0.1-1.1c1.8-0.7,3.3-0.1,4.9,0.6 c1.1,0.4,14.1,5.7,14.1,5.7S23.4,17.7,21.8,18.5z M23.3,17.8c0-0.4-0.2-1-1.3-1.5L6.5,10.2C5.9,9.9,4.8,9.7,3.9,9.7 c-0.5,0-1.2,0-1.8,0.3c-1,0.4-1.2,1-1.3,1.4l0,0l0,4.3l0,0c0,0.3,0.2,0.9,1.1,1.3l15.9,6.5c0.6,0.3,1.4,0.4,2.2,0.4 c0.8,0,1.6-0.1,2.2-0.4c1-0.4,1.2-1.1,1.2-1.4L23.3,17.8L23.3,17.8z M21.8,8.9c-1.6,0.8-3.2,0.2-4.2-0.2C16.7,8.4,2.2,2.4,2.2,2.4S0.8,1.8,2.3,1.3c1.8-0.7,3.3-0.1,4.9,0.6 c1.1,0.4,14.1,5.7,14.1,5.7S23.4,8.2,21.8,8.9z M23.3,8.3c0-0.4-0.2-1-1.3-1.5L6.5,0.6C5.9,0.3,4.8,0.2,3.9,0.2 c-0.5,0-1.2,0-1.8,0.3c-1,0.4-1.2,1-1.3,1.4l0,0l0,4.3l0,0c0,0.3,0.2,0.9,1.1,1.3l15.9,6.5c0.6,0.3,1.4,0.4,2.2,0.4 c0.8,0,1.6-0.1,2.2-0.4c1-0.4,1.2-1.1,1.2-1.4L23.3,8.3L23.3,8.3z",
            keywords: ["light"]
        },
        "play-bar-v":{
            path:"M15.1,19.14c0.1-0.2,0.2-0.4,0.3-0.6c0.4-0.9,0.6-1.9,0.6-2.6L15.99,3.19c0-1.2-0.39-1.45-0.79-1.55l0,0l-3.8-1.2 c-0.3-0.1-1-0.2-1.8,0.5c-0.5,0.4-0.9,1-1.2,1.8c-0.3,0.8-0.5,1.5-0.5,2.2v12.8c0,1,0.5,1.3,0.8,1.5c-1,0.4-1.7,1-1.7,1.6v0.6 c0,1.2,2.3,2.2,5,2.2c2.8,0,5-1,5-2.2v-0.6C17,20.14,16.3,19.54,15.1,19.14z M12.6,6.64c0-1.1-0.16-2.7,1.24-3.9 c1.27-1.12,1.2,0.71,1.2,0.71S15,13.64,15,14.74c0,1.8,0,3.4-1.3,4.8c-1,1.2-1.1-0.3-1.1-0.3S12.6,7.64,12.6,6.64z",
            keywords: ["light"]
        },
        "play-bar-v-alt":{
            path:"M13,0.5c-0.4,0-0.9,0.1-1.2,0.3c0,0,0,0-0.1,0l-0.1,0.1c0,0,0,0-0.1,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0 c-0.4,0.2-1.1,0.6-1.3,0.7c-0.3,0.2-1,0.8-1,2.3v4c-1.8,0.4-3.1,2-3.1,4c0,2,1.3,3.6,3.1,4l0,4.5c0,0-0.1,1.2,1.1,1.9 c0.4,0.2,0.8,0.4,1.2,0.6c0.3,0.2,0.7,0.3,1,0.4c0,0,0,0,0.1,0c0,0,0,0,0,0c0.1,0,0.3,0,0.4,0c1.5,0,2.8-1.2,2.8-2.6V3.1 C15.8,1.7,14.5,0.5,13,0.5z M14.8,20.9c0,0.9-0.8,1.6-1.8,1.6c-0.1,0-0.2,0-0.3,0l0,0c0,0,0,0,0,0c-0.2,0-0.5-0.1-0.7-0.3 c-0.1-0.1-0.2-0.1-0.3-0.2c0,0,0,0-0.1-0.1c-0.1-0.1-0.1-0.1-0.2-0.2c0,0,0-0.1-0.1-0.1c0-0.1-0.1-0.2-0.1-0.3c0,0,0-0.1,0-0.1 c0-0.1,0-0.2,0-0.4V3.1c0-0.1,0-0.2,0-0.4c0,0,0-0.1,0-0.1c0-0.1,0.1-0.2,0.1-0.2c0,0,0-0.1,0.1-0.1c0-0.1,0.1-0.1,0.2-0.2 c0,0,0-0.1,0.1-0.1c0.1-0.1,0.2-0.2,0.3-0.2c0,0,0,0,0,0c0,0,0,0,0,0l0,0c0,0,0.1,0,0.1-0.1c0,0,0,0,0,0c0.2-0.1,0.5-0.2,0.8-0.2 c1,0,1.8,0.7,1.8,1.6V20.9z",
            keywords: ["light"]
        },
        "play-bar-v-two":{
            path:"M9.1,19.2c0.1-0.2,0.2-0.4,0.3-0.6C9.8,17.7,10,16.7,10,16L9.99,3.25c0-1.2-0.39-1.45-0.79-1.55l0,0L5.4,0.5 C5.1,0.4,4.4,0.3,3.6,1C3.1,1.4,2.7,2,2.4,2.8C2.1,3.6,1.9,4.3,1.9,5v12.8c0,1,0.5,1.3,0.8,1.5c-1,0.4-1.7,1-1.7,1.6v0.6 c0,1.2,2.3,2.2,5,2.2c2.8,0,5-1,5-2.2v-0.6C11,20.2,10.3,19.6,9.1,19.2z M6.6,6.7c0-1.1-0.16-2.7,1.24-3.9 c1.27-1.12,1.2,0.71,1.2,0.71S9,13.7,9,14.8c0,1.8,0,3.4-1.3,4.8c-1,1.2-1.1-0.3-1.1-0.3S6.6,7.7,6.6,6.7z M21.1,19.2c0.1-0.2,0.2-0.4,0.3-0.6c0.4-0.9,0.6-1.9,0.6-2.6L21.99,3.25c0-1.2-0.39-1.45-0.79-1.55l0,0l-3.8-1.2 c-0.3-0.1-1-0.2-1.8,0.5c-0.5,0.4-0.9,1-1.2,1.8c-0.3,0.8-0.5,1.5-0.5,2.2v12.8c0,1,0.5,1.3,0.8,1.5c-1,0.4-1.7,1-1.7,1.6v0.6 c0,1.2,2.3,2.2,5,2.2c2.8,0,5-1,5-2.2v-0.6C23,20.2,22.3,19.6,21.1,19.2z M18.6,6.7c0-1.1-0.16-2.7,1.24-3.9 c1.27-1.12,1.2,0.71,1.2,0.71S21,13.7,21,14.8c0,1.8,0,3.4-1.3,4.8c-1,1.2-1.1-0.3-1.1-0.3S18.6,7.7,18.6,6.7z",
            keywords: ["light"]
        },
        "play-bar-v-two-in":{
            path:"M8.79,19.14c0.1-0.2,0.2-0.4,0.3-0.6c0.4-0.9,0.6-1.9,0.6-2.6L9.68,3.19c0-1.2-0.39-1.45-0.79-1.55l0,0 l-3.8-1.2c-0.3-0.1-1-0.2-1.8,0.5c-0.5,0.4-0.9,1-1.2,1.8c-0.3,0.8-0.5,1.5-0.5,2.2v12.8c0,1,0.5,1.3,0.8,1.5c-1,0.4-1.7,1-1.7,1.6 v0.6c0,1.2,2.3,2.2,5,2.2c2.8,0,5-1,5-2.2v-0.6C10.69,20.14,9.99,19.54,8.79,19.14z M6.29,6.64c0-1.1-0.16-2.7,1.24-3.9 c1.27-1.12,1.2,0.71,1.2,0.71S8.69,13.64,8.69,14.74c0,1.8,0,3.4-1.3,4.8c-1,1.2-1.1-0.3-1.1-0.3S6.29,7.64,6.29,6.64z M13.38,20.84v0.6c0,1.2,2.2,2.2,5,2.2c2.7,0,5-1,5-2.2v-0.6c0-0.6-0.7-1.2-1.7-1.6c0.3-0.2,0.8-0.5,0.8-1.5 V4.94c0-0.7-0.2-1.4-0.5-2.2s-0.7-1.4-1.2-1.8c-0.8-0.7-1.5-0.6-1.8-0.5l-3.8,1.2l0,0c-0.4,0.1-0.79,0.35-0.79,1.55l-0.01,12.75 c0,0.7,0.2,1.7,0.6,2.6c0.1,0.2,0.2,0.4,0.3,0.6C14.08,19.54,13.38,20.14,13.38,20.84z M17.78,19.24c0,0-0.1,1.5-1.1,0.3 c-1.3-1.4-1.3-3-1.3-4.8c0-1.1-0.04-11.29-0.04-11.29s-0.07-1.84,1.2-0.71c1.4,1.2,1.24,2.8,1.24,3.9 C17.78,7.64,17.78,19.24,17.78,19.24z",
            keywords: ["light"]
        },
        "play-bar-v-two-out":{
            path:"M21.37,19.2c0.1-0.2,0.2-0.4,0.3-0.6c0.4-0.9,0.6-1.9,0.6-2.6L22.26,3.25c0-1.2-0.39-1.45-0.79-1.55l0,0 l-3.8-1.2c-0.3-0.1-1-0.2-1.8,0.5c-0.5,0.4-0.9,1-1.2,1.8c-0.3,0.8-0.5,1.5-0.5,2.2v12.8c0,1,0.5,1.3,0.8,1.5c-1,0.4-1.7,1-1.7,1.6 v0.6c0,1.2,2.3,2.2,5,2.2c2.8,0,5-1,5-2.2v-0.6C23.27,20.2,22.57,19.6,21.37,19.2z M18.87,6.7c0-1.1-0.16-2.7,1.24-3.9 c1.27-1.12,1.2,0.71,1.2,0.71S21.27,13.7,21.27,14.8c0,1.8,0,3.4-1.3,4.8c-1,1.2-1.1-0.3-1.1-0.3S18.87,7.7,18.87,6.7z M0.76,20.9v0.6c0,1.2,2.2,2.2,5,2.2c2.7,0,5-1,5-2.2v-0.6c0-0.6-0.7-1.2-1.7-1.6c0.3-0.2,0.8-0.5,0.8-1.5V5 c0-0.7-0.2-1.4-0.5-2.2C9.06,2,8.66,1.4,8.16,1c-0.8-0.7-1.5-0.6-1.8-0.5l-3.8,1.2l0,0c-0.4,0.1-0.79,0.35-0.79,1.55L1.76,16 c0,0.7,0.2,1.7,0.6,2.6c0.1,0.2,0.2,0.4,0.3,0.6C1.46,19.6,0.76,20.2,0.76,20.9z M5.16,19.3c0,0-0.1,1.5-1.1,0.3 c-1.3-1.4-1.3-3-1.3-4.8c0-1.1-0.04-11.29-0.04-11.29S2.65,1.67,3.92,2.8C5.32,4,5.16,5.6,5.16,6.7C5.16,7.7,5.16,19.3,5.16,19.3z",
            keywords: ["light"]
        },
        "plug":{
            path:"M19.68115,6.22273H16.37986V2.92144a.82533.82533,0,1,0-1.65065,0V6.22273H9.77727V2.92144a.82533.82533,0,1,0-1.65065,0V6.22273H4.82532a.82533.82533,0,0,0,0,1.65065h.82533v3.3013A6.59918,6.59918,0,0,0,10.60259,17.561v2.69221a1.65065,1.65065,0,1,0,3.3013,0V17.561a6.59919,6.59919,0,0,0,4.95194-6.38635V7.87338h.82532a.82533.82533,0,1,0,0-1.65065",
            keywords: ["infrastructure","light"]
        },
        "plug-eu":{
            path:"M21.90234,6.65558a1.59616,1.59616,0,0,0-.45117-1.25488,1.1351,1.1351,0,0,0-.40045-.215l.004-.01007L13.84277,2.3382a2.50585,2.50585,0,0,0-1.59033-.03858c-1.002.19483-7.45849,1.5586-7.45752,1.5586A1.89275,1.89275,0,0,0,3.23,5.62335v.38819l-.63965,1.0288V8.43927l-.38916.25v1.51709l.36768.19775.0249,1.148.5835.77784.05273,3.165a1.7959,1.7959,0,0,0,1.07666,1.69239c.73.2705,7.55274,3.20117,7.62158,3.23047l.01557-.03626a1.91064,1.91064,0,0,0,.53082.07825,2.94067,2.94067,0,0,0,.60937-.06836c1.65235-.34766,7.18848-2.02246,7.50977-2.12891a2.7286,2.7286,0,0,0,1.31055-2.33984C21.94727,14.54083,21.90625,6.93634,21.90234,6.65558Zm-1.10449-.498a.68391.68391,0,0,1,.10645.46143c0,.03125.00659,1.29309.012,2.88122a3.85549,3.85549,0,0,0-1.1604-1.72741,4.03056,4.03056,0,0,0-3.001-.7677l3.71973-.8573A.43343.43343,0,0,1,20.79785,6.15753Zm-.81573,3.68768-.46064.13117-2.05859-.83691V7.98413a2.77307,2.77307,0,0,1,1.65918.56207A2.89555,2.89555,0,0,1,19.98212,9.84521Zm-9.15107-.71112V18.86c-2.07641-.88953-5.6358-2.40973-6.17675-2.61017-.41016-.15235-.42432-.75293-.42432-.76367l-.05859-3.49708-.58448-.77978L3.55615,9.79962l-.355-.19092V9.23517l.38916-.25V7.3255L4.23,6.29669V5.62335c0-.59619.69434-.76953.771-.78662l7.44238-1.55566a3.7894,3.7894,0,0,1,.71973-.08008c.13086-.00049.1914.01123.18457.00391l5.68866,2.248L12.41748,6.97882A2.21036,2.21036,0,0,0,10.83105,9.13409Zm1,3.37275V9.13409A1.20092,1.20092,0,0,1,12.65918,7.949l3.00018-.69147A7.32321,7.32321,0,0,0,11.83105,12.50684Zm3.61335-1.37653c-.24341.50378-.622.49677-.77979.42462-.15771-.07208-.329-.26141-.30194-.71216.027-.45068.60394-.74817.60394-.74817C15.51648,9.95941,15.68774,10.62646,15.4444,11.13031ZM12.87793,19.4129a1.10109,1.10109,0,0,1-.84326-.07422.64645.64645,0,0,1-.20362-.43554V14.62891a4.71234,4.71234,0,0,0,.58985,1.535,4.9047,4.9047,0,0,0,3.60834,2.40961C14.74414,18.94073,13.50391,19.28094,12.87793,19.4129Zm4.39551-2.30664-.9336-.41894.13868-.47754a.48305.48305,0,0,0-.28644-.59265,3.54786,3.54786,0,0,0,1.27081-2.40149v-1.022l1.94141.82862.81518-.23291c-.17535,1.28839-.76636,3.52984-2.75268,4.48254A.49134.49134,0,0,0,17.27344,17.10626Zm3.63086-1.21484a1.84889,1.84889,0,0,1-.69043,1.45019h.001c-.0484.01453-.78717.23767-1.785.53278A6.28489,6.28489,0,0,0,20.92059,14.317C20.918,15.03381,20.913,15.60742,20.9043,15.89142Z",
            keywords: ["infrastructure","light"]
        },
        "plug-uk":{
            path:"M21.20312,3.93a1.24909,1.24909,0,0,0-.61718-.23175L14.13965,2.27863a3.77626,3.77626,0,0,0-2.29-.00928c-1.06885.33691-6.24707,1.93652-6.28076,1.94824a3.17064,3.17064,0,0,0-1.4,1.23138l-.00579-.00238a.50129.50129,0,0,0-.189-.03711H3.67676a.49826.49826,0,0,0-.332.12647l-.20606.18311a.49845.49845,0,0,0-.168.37353V7.5799a.502.502,0,0,0,.04688.21142l.16015.34326a.49769.49769,0,0,0,.29493.2627l.31823.10608c.00415,1.00775.00434,2.334.00251,3.69281L3.666,12.16925a.49454.49454,0,0,0-.26514.01611l-1.2583.43018a.49982.49982,0,0,0-.33838.47314v.50782a.49939.49939,0,0,0,.06885.25293l.22851.38964a.49864.49864,0,0,0,.313.23145l1.37335.33411c-.005,1.82635-.01123,3.31848-.01251,3.60144A2.16324,2.16324,0,0,0,4.03711,19.744a2.22972,2.22972,0,0,0,1.5332.92969c1.72705.33691,6.69922,1.27636,6.69922,1.27636l.65625.00879a4.0432,4.0432,0,0,0,1.28027-.24316c2.58887-.877,6.08692-2.18262,6.09668-2.18653.06934-.02148,1.69825-.55957,1.69825-3.08789V6.16827A3.04869,3.04869,0,0,0,21.20312,3.93ZM21.001,6.16437V16.44122c0,1.75977-.96387,2.1211-1.02246,2.1416-.03516.01368-3.51954,1.31348-6.09278,2.18555-.69531.23535-1.21484.252-1.46582.05274-.2832-.22657-.23877-.74024-.23535-.7959.00342-.39844.08643-9.76319.00293-11.52637a1.64375,1.64375,0,0,1,1.07324-1.728l7.03321-2.064A.40169.40169,0,0,1,20.45,4.69226l.01837.004.13123.03155C21.05054,4.836,21.00293,5.70636,21.001,6.16437Z M16.83417,7.73468l-.71582.16846A.49974.49974,0,0,0,15.7326,8.39V10.5799a.50009.50009,0,0,0,.666.47167l.71582-.25244a.50051.50051,0,0,0,.334-.47168V8.2215a.49979.49979,0,0,0-.61426-.48682Z M15.03564,14.77087l-1.17871.37891a.50044.50044,0,0,0-.34668.47559v1.22168a.49942.49942,0,0,0,.668.4707l1.17871-.4209a.50023.50023,0,0,0,.332-.4707V15.24646a.499.499,0,0,0-.65332-.47559Z M19.26074,13.40356l-1.17969.37891a.50043.50043,0,0,0-.34667.47559v1.22168a.50052.50052,0,0,0,.21191.40918.506.506,0,0,0,.28809.09082.49862.49862,0,0,0,.168-.0293l1.17969-.42188a.50021.50021,0,0,0,.332-.4707V13.87915a.499.499,0,0,0-.65332-.47559Z",
            keywords: ["infrastructure","light"]
        },
        "recessed-ceiling":{
            path:"M 11.996094 8.25 C 9.421875 8.25 6.96875 8.710938 5.09375 9.550781 C 4.191406 9.953125 3.515625 10.398438 3.003906 10.851562 C 2.949219 9.777344 3.851562 8.695312 5.703125 7.890625 C 9.199219 6.371094 14.792969 6.371094 18.289062 7.890625 C 20.144531 8.695312 21.050781 9.777344 20.996094 10.855469 C 20.484375 10.402344 19.804688 9.953125 18.898438 9.550781 C 17.019531 8.710938 14.570312 8.25 11.996094 8.25 Z M 18.289062 10.171875 C 21.828125 11.75 21.945312 14.363281 18.457031 16.003906 C 14.921875 17.667969 9.109375 17.667969 5.570312 16.003906 C 2.078125 14.363281 2.183594 11.75 5.722656 10.171875 C 9.210938 8.609375 14.800781 8.609375 18.289062 10.171875 Z M 16.84375 15.183594 C 19.460938 14.4375 19.375 13.25 16.71875 12.53125 C 14.101562 11.824219 9.910156 11.824219 7.292969 12.53125 C 4.640625 13.25 4.5625 14.4375 7.179688 15.183594 C 9.835938 15.9375 14.191406 15.9375 16.84375 15.183594 Z M 16.84375 15.183594 ",
            keywords: ["light"]
        },
        "recessed-floor":{
            path:"M 12.015625 15.75 C 14.589844 15.75 17.039062 15.289062 18.917969 14.449219 C 19.820312 14.046875 20.496094 13.601562 21.007812 13.148438 C 21.0625 14.222656 20.15625 15.304688 18.304688 16.109375 C 14.8125 17.628906 9.21875 17.628906 5.722656 16.109375 C 3.863281 15.304688 2.957031 14.222656 3.011719 13.144531 C 3.527344 13.597656 4.203125 14.046875 5.109375 14.449219 C 6.988281 15.289062 9.441406 15.75 12.015625 15.75 Z M 5.71875 13.832031 C 2.179688 12.25 2.066406 9.636719 5.554688 7.996094 C 9.089844 6.335938 14.898438 6.335938 18.441406 7.996094 C 21.929688 9.636719 21.824219 12.25 18.289062 13.832031 C 14.800781 15.390625 9.210938 15.390625 5.71875 13.832031 Z M 7.164062 8.816406 C 4.550781 9.5625 4.632812 10.75 7.289062 11.46875 C 9.90625 12.175781 14.097656 12.175781 16.714844 11.46875 C 19.367188 10.75 19.449219 9.5625 16.832031 8.816406 C 14.175781 8.0625 9.816406 8.0625 7.164062 8.816406 Z M 7.164062 8.816406 ",
            keywords: ["light"]
        },
        "room-attic":{
            path:"M 12.421875 7.777344 L 18.984375 16.824219 C 19.359375 17.335938 19.003906 18.066406 18.386719 18.066406 L 5.609375 18.066406 C 4.988281 18.066406 4.636719 17.335938 5.007812 16.824219 L 11.578125 7.777344 C 11.789062 7.484375 12.210938 7.484375 12.421875 7.777344 Z M 12 16.558594 C 13.242188 16.558594 14.25 15.550781 14.25 14.308594 C 14.25 13.066406 13.242188 12.058594 12 12.058594 C 10.757812 12.058594 9.75 13.066406 9.75 14.308594 C 9.75 15.550781 10.757812 16.558594 12 16.558594 Z M 23.84375 18.335938 C 24.222656 18.839844 23.867188 19.558594 23.246094 19.558594 L 23.214844 19.558594 C 22.980469 19.558594 22.757812 19.445312 22.617188 19.257812 L 21.699219 18.023438 L 21.710938 18.023438 L 20 15.746094 L 13.09375 6.550781 L 12.347656 5.550781 C 12.171875 5.324219 11.828125 5.324219 11.652344 5.550781 L 10.90625 6.550781 L 4 15.746094 L 2.289062 18.023438 L 2.300781 18.023438 L 1.382812 19.257812 C 1.242188 19.445312 1.019531 19.558594 0.785156 19.558594 L 0.753906 19.558594 C 0.132812 19.558594 -0.222656 18.839844 0.15625 18.335938 L 1.089844 17.089844 L 2.800781 14.8125 L 9.707031 5.617188 L 10.800781 4.160156 L 11.476562 3.261719 C 11.738281 2.914062 12.261719 2.914062 12.523438 3.261719 L 13.199219 4.160156 L 14.292969 5.617188 L 16.496094 8.550781 L 16.496094 6.832031 C 16.496094 6.40625 16.832031 6.058594 17.246094 6.058594 L 18.75 6.058594 C 19.164062 6.058594 19.5 6.40625 19.5 6.832031 L 19.5 12.550781 L 21.199219 14.8125 L 22.910156 17.089844 Z M 23.84375 18.335938 ",
            keywords: ["area","light"]
        },
        "room-balcony":{
            path:"M 18 9.207031 C 17.554688 9.46875 17.25 9.945312 17.25 10.5 C 17.25 11.054688 17.554688 11.53125 18 11.789062 L 18 15.019531 C 17.9375 15.015625 17.878906 15 17.816406 15 L 15 15 L 15 11.789062 C 15.445312 11.53125 15.75 11.054688 15.75 10.5 C 15.75 9.945312 15.445312 9.46875 15 9.207031 L 15 6 L 18 6 Z M 6 15.019531 L 6 11.789062 C 6.445312 11.53125 6.75 11.054688 6.75 10.5 C 6.75 9.945312 6.445312 9.46875 6 9.207031 L 6 6 L 9 6 L 9 9.207031 C 8.554688 9.46875 8.25 9.945312 8.25 10.5 C 8.25 11.054688 8.554688 11.53125 9 11.789062 L 9 15 L 6.183594 15 C 6.121094 15 6.0625 15.015625 6 15.019531 Z M 13.5 9.207031 C 13.054688 9.46875 12.75 9.945312 12.75 10.5 C 12.75 11.054688 13.054688 11.53125 13.5 11.789062 L 13.5 15 L 10.5 15 L 10.5 11.789062 C 10.945312 11.53125 11.25 11.054688 11.25 10.5 C 11.25 9.945312 10.945312 9.46875 10.5 9.207031 L 10.5 6 L 13.5 6 Z M 21.75 4.5 L 2.25 4.5 C 1.835938 4.5 1.5 4.835938 1.5 5.25 C 1.5 5.660156 1.835938 6 2.25 6 L 4.5 6 L 4.5 9.207031 C 4.054688 9.46875 3.75 9.945312 3.75 10.5 C 3.75 11.054688 4.054688 11.53125 4.5 11.789062 L 4.5 15.492188 C 3.601562 16.054688 3 17.046875 3 18.183594 C 3 18.910156 3.589844 19.5 4.316406 19.5 L 19.683594 19.5 C 20.410156 19.5 21 18.910156 21 18.183594 C 21 17.046875 20.398438 16.054688 19.5 15.492188 L 19.5 11.789062 C 19.945312 11.53125 20.25 11.054688 20.25 10.5 C 20.25 9.945312 19.945312 9.46875 19.5 9.207031 L 19.5 6 L 21.75 6 C 22.164062 6 22.5 5.660156 22.5 5.25 C 22.5 4.835938 22.164062 4.5 21.75 4.5 Z M 21.75 4.5 ",
            keywords: ["area","bannister","light"]
        },
        "room-bathroom":{
            path:"M 20.015625 12.75 L 19.5 12.75 L 19.5 3.855469 C 19.5 1.730469 17.769531 0 15.644531 0 C 13.8125 0 12.285156 1.285156 11.894531 3 L 10.503906 3 C 9.675781 3 9 3.671875 9 4.503906 C 9 4.917969 9.335938 5.25 9.746094 5.25 L 15.003906 5.25 C 15.417969 5.25 15.75 4.917969 15.75 4.503906 C 15.75 3.671875 15.078125 3 14.246094 3 L 13.457031 3 C 13.800781 2.125 14.648438 1.5 15.644531 1.5 C 16.941406 1.5 18 2.558594 18 3.855469 L 18 12.75 L 3.984375 12.75 C 3.441406 12.75 3 13.191406 3 13.734375 C 3 14.28125 3.441406 14.722656 3.984375 14.722656 L 4.5 14.722656 L 4.5 16.394531 C 4.5 18.503906 5.726562 20.324219 7.5 21.199219 L 7.5 22.5 C 7.5 23.328125 8.171875 24 9 24 C 9.828125 24 10.5 23.328125 10.5 22.5 L 10.5 21.75 L 14.144531 21.75 C 14.179688 21.75 14.214844 21.746094 14.25 21.746094 L 14.25 22.5 C 14.25 23.328125 14.921875 24 15.75 24 C 16.578125 24 17.25 23.328125 17.25 22.5 L 17.25 20.75 C 18.609375 19.78125 19.5 18.191406 19.5 16.394531 L 19.5 14.722656 L 20.015625 14.722656 C 20.558594 14.722656 21 14.28125 21 13.734375 C 21 13.191406 20.558594 12.75 20.015625 12.75 ",
            keywords: ["area","shower"]
        },
        "room-bbq":{
            path:"M 9.21875 16.5 L 9.613281 15.324219 C 10.359375 15.59375 11.152344 15.75 11.980469 15.75 C 12.957031 15.75 13.894531 15.542969 14.753906 15.171875 L 15.199219 16.5 Z M 20.25 9 C 20.664062 9 21 9.335938 21 9.75 C 21 10.164062 20.664062 10.5 20.25 10.5 L 18.984375 10.5 C 18.410156 12.113281 17.386719 13.476562 16.078125 14.410156 L 17.285156 18.003906 C 18.097656 18.023438 18.75 18.683594 18.75 19.5 C 18.75 20.328125 18.078125 21 17.25 21 C 16.421875 21 15.75 20.328125 15.75 19.5 C 15.75 19.226562 15.828125 18.972656 15.957031 18.753906 L 15.703125 18 L 8.714844 18 L 7.878906 20.488281 C 7.773438 20.800781 7.480469 21 7.167969 21 C 7.085938 21 7.007812 20.988281 6.925781 20.960938 C 6.535156 20.828125 6.324219 20.402344 6.457031 20.011719 L 8.253906 14.65625 C 6.769531 13.726562 5.605469 12.265625 4.976562 10.5 L 3.75 10.5 C 3.335938 10.5 3 10.164062 3 9.75 C 3 9.335938 3.335938 9 3.75 9 L 4.585938 9 C 4.550781 8.78125 4.519531 8.558594 4.496094 8.332031 C 4.457031 7.890625 4.800781 7.5 5.246094 7.5 L 18.710938 7.5 C 19.160156 7.5 19.503906 7.890625 19.460938 8.332031 C 19.441406 8.558594 19.410156 8.78125 19.371094 9 Z M 9.542969 5.9375 C 9.488281 5.898438 9 5.558594 9 5.042969 C 9 4.816406 9.09375 4.488281 9.542969 4.1875 C 9.695312 4.085938 9.75 4 9.75 3.957031 C 9.75 3.878906 9.625 3.746094 9.542969 3.6875 C 9.371094 3.570312 9.320312 3.339844 9.4375 3.167969 C 9.507812 3.058594 9.628906 3 9.75 3 C 9.820312 3 9.894531 3.019531 9.957031 3.0625 C 10.015625 3.101562 10.5 3.441406 10.5 3.957031 C 10.5 4.183594 10.40625 4.511719 9.957031 4.8125 C 9.804688 4.914062 9.75 5 9.75 5.039062 C 9.75 5.121094 9.871094 5.253906 9.960938 5.316406 C 10.128906 5.429688 10.175781 5.660156 10.0625 5.832031 C 9.945312 6.007812 9.710938 6.050781 9.542969 5.9375 Z M 11.792969 5.9375 C 11.738281 5.898438 11.25 5.558594 11.25 5.042969 C 11.25 4.816406 11.34375 4.488281 11.792969 4.1875 C 11.945312 4.085938 12 4 12 3.957031 C 12 3.878906 11.875 3.746094 11.792969 3.6875 C 11.621094 3.570312 11.570312 3.339844 11.6875 3.167969 C 11.757812 3.058594 11.878906 3 12 3 C 12.070312 3 12.144531 3.019531 12.207031 3.0625 C 12.265625 3.101562 12.75 3.441406 12.75 3.957031 C 12.75 4.183594 12.65625 4.511719 12.207031 4.8125 C 12.054688 4.914062 12 5 12 5.042969 C 12 5.121094 12.121094 5.253906 12.210938 5.316406 C 12.378906 5.429688 12.425781 5.660156 12.3125 5.832031 C 12.195312 6.007812 11.960938 6.050781 11.792969 5.9375 Z M 14.042969 5.9375 C 13.988281 5.898438 13.5 5.558594 13.5 5.042969 C 13.5 4.816406 13.59375 4.488281 14.042969 4.1875 C 14.195312 4.085938 14.25 4 14.25 3.957031 C 14.25 3.878906 14.125 3.746094 14.042969 3.6875 C 13.871094 3.570312 13.820312 3.339844 13.9375 3.167969 C 14.007812 3.058594 14.128906 3 14.25 3 C 14.320312 3 14.394531 3.019531 14.457031 3.0625 C 14.515625 3.101562 15 3.441406 15 3.957031 C 15 4.183594 14.90625 4.511719 14.457031 4.8125 C 14.304688 4.914062 14.25 5 14.25 5.039062 C 14.25 5.121094 14.371094 5.253906 14.460938 5.316406 C 14.628906 5.429688 14.675781 5.660156 14.5625 5.832031 C 14.445312 6.007812 14.210938 6.050781 14.042969 5.9375 Z M 14.042969 5.9375 ",
            keywords: ["area","barbecue"]
        },
        "room-bedroom":{
            path:"M 19.5 12 L 4.5 12 C 2.84375 12 1.5 13.34375 1.5 15 L 1.5 16.5 C 1.5 16.914062 1.835938 17.25 2.25 17.25 L 3 17.25 L 3 18 C 3 18.828125 3.671875 19.5 4.5 19.5 C 5.328125 19.5 6 18.828125 6 18 L 6 17.25 L 18 17.25 L 18 18 C 18 18.828125 18.671875 19.5 19.5 19.5 C 20.328125 19.5 21 18.828125 21 18 L 21 17.25 L 21.75 17.25 C 22.164062 17.25 22.5 16.914062 22.5 16.5 L 22.5 15 C 22.5 13.34375 21.15625 12 19.5 12 M 6.75 7.5 L 10.5 7.5 C 10.914062 7.5 11.25 7.835938 11.25 8.25 C 11.25 8.664062 10.914062 9 10.5 9 L 6.75 9 C 6.335938 9 6 8.664062 6 8.25 C 6 7.835938 6.335938 7.5 6.75 7.5 M 13.5 7.5 L 17.25 7.5 C 17.664062 7.5 18 7.835938 18 8.25 C 18 8.664062 17.664062 9 17.25 9 L 13.5 9 C 13.085938 9 12.75 8.664062 12.75 8.25 C 12.75 7.835938 13.085938 7.5 13.5 7.5 M 5.257812 10.5 L 18.742188 10.5 C 19.160156 10.5 19.5 10.160156 19.5 9.742188 L 19.5 6 C 19.5 5.171875 18.828125 4.5 18 4.5 L 6 4.5 C 5.171875 4.5 4.5 5.171875 4.5 6 L 4.5 9.742188 C 4.5 10.160156 4.839844 10.5 5.257812 10.5 ",
            keywords: ["area","double"]
        },
        "room-carport":{
            path:"M 19.070312 13.234375 C 19.332031 13.359375 19.5 13.625 19.5 13.914062 L 19.5 17.972656 C 19.5 18.386719 19.164062 18.722656 18.75 18.722656 L 18 18.722656 L 18 19.867188 C 18 20.484375 17.492188 20.988281 16.875 20.988281 L 16.125 20.988281 C 15.507812 20.988281 15 20.484375 15 19.867188 L 15 18.722656 L 9 18.722656 L 9 19.847656 C 9 20.464844 8.492188 20.96875 7.875 20.96875 L 7.125 20.96875 C 6.507812 20.96875 6 20.464844 6 19.847656 L 6 18.722656 L 5.25 18.722656 C 4.835938 18.722656 4.5 18.386719 4.5 17.972656 L 4.5 13.914062 C 4.5 13.625 4.667969 13.359375 4.929688 13.234375 L 5.683594 12.882812 C 5.882812 12.785156 6.03125 12.609375 6.085938 12.390625 L 7.210938 8.050781 C 7.296875 7.71875 7.597656 7.488281 7.9375 7.488281 L 16.0625 7.488281 C 16.402344 7.488281 16.703125 7.71875 16.789062 8.050781 L 17.914062 12.390625 C 17.96875 12.609375 18.117188 12.785156 18.316406 12.882812 Z M 16.875 16.5 C 17.496094 16.5 18 15.996094 18 15.375 C 18 14.757812 17.496094 14.253906 16.875 14.253906 C 16.253906 14.253906 15.75 14.757812 15.75 15.375 C 15.75 15.996094 16.253906 16.5 16.875 16.5 Z M 13.5 16.5 C 13.914062 16.5 14.25 16.164062 14.25 15.75 C 14.25 15.339844 13.914062 15.003906 13.5 15.003906 L 10.5 15.003906 C 10.085938 15.003906 9.75 15.339844 9.75 15.75 C 9.75 16.164062 10.085938 16.5 10.5 16.5 Z M 7.125 14.25 C 6.503906 14.25 6 14.753906 6 15.375 C 6 15.992188 6.503906 16.496094 7.125 16.496094 C 7.746094 16.496094 8.25 15.992188 8.25 15.375 C 8.25 14.753906 7.746094 14.25 7.125 14.25 Z M 7.527344 11.800781 C 7.390625 12.273438 7.769531 12.742188 8.292969 12.742188 L 15.707031 12.742188 C 16.230469 12.742188 16.609375 12.273438 16.472656 11.800781 L 15.828125 9.550781 C 15.734375 9.226562 15.421875 9 15.066406 9 L 8.933594 9 C 8.578125 9 8.265625 9.226562 8.171875 9.550781 Z M 23.25 3 C 23.664062 3 24 3.335938 24 3.75 L 24 20.25 C 24 20.664062 23.664062 21 23.25 21 C 22.835938 21 22.5 20.664062 22.5 20.25 L 22.5 6.75 C 22.5 6.335938 22.164062 6 21.75 6 L 2.25 6 C 1.835938 6 1.5 6.335938 1.5 6.75 L 1.5 20.25 C 1.5 20.664062 1.164062 21 0.75 21 C 0.335938 21 0 20.664062 0 20.25 L 0 3.75 C 0 3.335938 0.335938 3 0.75 3 Z M 23.25 3 ",
            keywords: ["area","garage"]
        },
        "room-closet":{
            path:"M 18 6.75 L 15 6.75 C 14.585938 6.75 14.25 6.414062 14.25 6 C 14.25 5.585938 14.585938 5.25 15 5.25 L 18 5.25 C 18.414062 5.25 18.75 5.585938 18.75 6 C 18.75 6.414062 18.414062 6.75 18 6.75 Z M 18 11.25 L 15 11.25 C 14.585938 11.25 14.25 10.914062 14.25 10.5 C 14.25 10.085938 14.585938 9.75 15 9.75 L 18 9.75 C 18.414062 9.75 18.75 10.085938 18.75 10.5 C 18.75 10.914062 18.414062 11.25 18 11.25 Z M 18 15.75 L 15 15.75 C 14.585938 15.75 14.25 15.414062 14.25 15 C 14.25 14.585938 14.585938 14.25 15 14.25 L 18 14.25 C 18.414062 14.25 18.75 14.585938 18.75 15 C 18.75 15.414062 18.414062 15.75 18 15.75 Z M 12.75 17.25 C 12.75 17.664062 12.414062 18 12 18 C 11.585938 18 11.25 17.664062 11.25 17.25 L 11.25 3.75 C 11.25 3.335938 11.585938 3 12 3 C 12.414062 3 12.75 3.335938 12.75 3.75 Z M 9 11.25 L 7.5 11.25 C 7.085938 11.25 6.75 10.914062 6.75 10.5 C 6.75 10.085938 7.085938 9.75 7.5 9.75 L 9 9.75 C 9.414062 9.75 9.75 10.085938 9.75 10.5 C 9.75 10.914062 9.414062 11.25 9 11.25 Z M 19.5 0.75 L 4.5 0.75 C 4.085938 0.75 3.75 1.085938 3.75 1.5 L 3.75 19.5 C 3.75 19.914062 4.085938 20.25 4.5 20.25 L 5.25 20.25 L 5.25 21 C 5.25 21.414062 5.585938 21.75 6 21.75 C 6.414062 21.75 6.75 21.414062 6.75 21 L 6.75 20.25 L 17.25 20.25 L 17.25 21 C 17.25 21.414062 17.585938 21.75 18 21.75 C 18.414062 21.75 18.75 21.414062 18.75 21 L 18.75 20.25 L 19.5 20.25 C 19.914062 20.25 20.25 19.914062 20.25 19.5 L 20.25 1.5 C 20.25 1.085938 19.914062 0.75 19.5 0.75 Z M 19.5 0.75 ",
            keywords: ["area"]
        },
        "room-computer":{
            path:"M 21.75 3.75 C 22.164062 3.75 22.5 4.085938 22.5 4.5 L 22.5 12.75 L 1.5 12.75 L 1.5 4.5 C 1.5 4.085938 1.835938 3.75 2.25 3.75 Z M 1.5 15 L 1.5 14.25 L 22.5 14.25 L 22.5 15 C 22.5 15.414062 22.164062 15.75 21.75 15.75 L 12.75 15.75 L 12.75 18.75 L 14.25 18.75 C 14.664062 18.75 15 19.085938 15 19.5 C 15 19.914062 14.664062 20.25 14.25 20.25 L 9.75 20.25 C 9.335938 20.25 9 19.914062 9 19.5 C 9 19.085938 9.335938 18.75 9.75 18.75 L 11.25 18.75 L 11.25 15.75 L 2.25 15.75 C 1.835938 15.75 1.5 15.414062 1.5 15 Z M 1.5 15 ",
            keywords: ["area"]
        },
        "room-dining":{
            path:"M 18 2.25 C 18.824219 2.25 19.5 2.925781 19.5 3.75 L 19.5 20.25 C 19.5 21.074219 18.824219 21.75 18 21.75 C 17.175781 21.75 16.5 21.074219 16.5 20.25 L 16.5 12.1875 C 15.300781 11.324219 14.25 9.554688 14.25 7.5 C 14.25 4.679688 16.234375 2.382812 17.867188 2.261719 C 17.914062 2.257812 17.953125 2.25 18 2.25 Z M 10.5 13.34375 L 10.5 20.25 C 10.5 21.078125 9.828125 21.75 9 21.75 C 8.171875 21.75 7.5 21.078125 7.5 20.25 L 7.5 13.34375 C 7.5 12.960938 7.355469 12.59375 7.09375 12.316406 L 6.871094 12.082031 C 5.828125 10.96875 5.25 9.5 5.25 7.976562 L 5.25 3 C 5.25 2.585938 5.585938 2.25 6 2.25 C 6.414062 2.25 6.75 2.585938 6.75 3 L 6.75 6.75 C 6.75 7.164062 7.085938 7.5 7.5 7.5 C 7.914062 7.5 8.25 7.164062 8.25 6.75 L 8.25 3 C 8.25 2.585938 8.585938 2.25 9 2.25 C 9.414062 2.25 9.75 2.585938 9.75 3 L 9.75 6.75 C 9.75 7.164062 10.085938 7.5 10.5 7.5 C 10.914062 7.5 11.25 7.164062 11.25 6.75 L 11.25 3 C 11.25 2.585938 11.585938 2.25 12 2.25 C 12.414062 2.25 12.75 2.585938 12.75 3 L 12.75 7.976562 C 12.75 9.5 12.171875 10.96875 11.128906 12.082031 L 10.90625 12.316406 C 10.644531 12.59375 10.5 12.960938 10.5 13.34375 Z M 10.5 13.34375 ",
            keywords: ["area"]
        },
        "room-driveway":{
            path:"M 18 15 C 17.171875 15 16.5 14.328125 16.5 13.5 C 16.5 12.671875 17.171875 12 18 12 C 18.828125 12 19.5 12.671875 19.5 13.5 C 19.5 14.328125 18.828125 15 18 15 Z M 16.328125 9.75 L 7.671875 9.75 C 7.066406 9.75 6.625 9.1875 6.78125 8.613281 L 7.535156 5.914062 C 7.644531 5.523438 8.007812 5.25 8.425781 5.25 L 15.574219 5.25 C 15.992188 5.25 16.355469 5.523438 16.464844 5.914062 L 17.21875 8.613281 C 17.375 9.1875 16.933594 9.75 16.328125 9.75 Z M 15 13.945312 C 15 14.523438 14.519531 15 13.933594 15 L 10.066406 15 C 9.480469 15 9 14.523438 9 13.945312 L 9 13.804688 C 9 13.226562 9.480469 12.75 10.066406 12.75 L 13.933594 12.75 C 14.519531 12.75 15 13.226562 15 13.804688 Z M 6 15 C 5.171875 15 4.5 14.328125 4.5 13.5 C 4.5 12.671875 5.171875 12 6 12 C 6.828125 12 7.5 12.671875 7.5 13.5 C 7.5 14.328125 6.828125 15 6 15 Z M 20.484375 10.738281 L 19.582031 10.308594 C 19.339844 10.191406 19.160156 9.972656 19.09375 9.710938 L 17.746094 4.433594 C 17.644531 4.03125 17.285156 3.75 16.875 3.75 L 7.125 3.75 C 6.714844 3.75 6.355469 4.03125 6.253906 4.433594 L 4.90625 9.710938 C 4.839844 9.972656 4.660156 10.191406 4.417969 10.308594 L 3.515625 10.738281 C 3.199219 10.890625 3 11.210938 3 11.5625 L 3 16.339844 C 3 16.84375 3.402344 17.25 3.898438 17.25 L 5.25 17.25 L 5.25 18.878906 C 5.25 19.632812 5.867188 20.25 6.621094 20.25 L 7.628906 20.25 C 8.382812 20.25 9 19.632812 9 18.878906 L 9 17.25 L 15 17.25 L 15 18.878906 C 15 19.632812 15.617188 20.25 16.371094 20.25 L 17.378906 20.25 C 18.132812 20.25 18.75 19.632812 18.75 18.878906 L 18.75 17.25 L 20.101562 17.25 C 20.597656 17.25 21 16.84375 21 16.339844 L 21 11.5625 C 21 11.210938 20.800781 10.890625 20.484375 10.738281 Z M 20.484375 10.738281 ",
            keywords: ["area"]
        },
        "room-front-door":{
            path:"M 15.75 15 C 15.75 15.414062 15.414062 15.75 15 15.75 L 9 15.75 C 8.585938 15.75 8.25 15.414062 8.25 15 C 8.25 14.585938 8.585938 14.25 9 14.25 L 15 14.25 C 15.414062 14.25 15.75 14.585938 15.75 15 Z M 8.25 4.5 C 8.25 4.085938 8.585938 3.75 9 3.75 L 10.5 3.75 C 10.914062 3.75 11.25 4.085938 11.25 4.5 L 11.25 9 C 11.25 9.414062 10.914062 9.75 10.5 9.75 L 9 9.75 C 8.585938 9.75 8.25 9.414062 8.25 9 Z M 7.5 12.75 C 7.085938 12.75 6.75 12.414062 6.75 12 C 6.75 11.585938 7.085938 11.25 7.5 11.25 C 7.914062 11.25 8.25 11.585938 8.25 12 C 8.25 12.414062 7.914062 12.75 7.5 12.75 Z M 12.75 4.5 C 12.75 4.085938 13.085938 3.75 13.5 3.75 L 15 3.75 C 15.414062 3.75 15.75 4.085938 15.75 4.5 L 15.75 9 C 15.75 9.414062 15.414062 9.75 15 9.75 L 13.5 9.75 C 13.085938 9.75 12.75 9.414062 12.75 9 Z M 18 0.75 L 6 0.75 C 5.585938 0.75 5.25 1.085938 5.25 1.5 L 5.25 22.5 C 5.25 22.914062 5.585938 23.25 6 23.25 L 18 23.25 C 18.414062 23.25 18.75 22.914062 18.75 22.5 L 18.75 1.5 C 18.75 1.085938 18.414062 0.75 18 0.75 Z M 18 0.75 ",
            keywords: ["area"]
        },
        "room-games":{
            path:"M 20.25 10.449219 C 19.835938 10.449219 19.5 10.113281 19.5 9.699219 C 19.5 9.285156 19.835938 8.949219 20.25 8.949219 C 20.664062 8.949219 21 9.285156 21 9.699219 C 21 10.113281 20.664062 10.449219 20.25 10.449219 M 18 8.199219 C 17.585938 8.199219 17.25 7.863281 17.25 7.449219 C 17.25 7.035156 17.585938 6.699219 18 6.699219 C 18.414062 6.699219 18.75 7.035156 18.75 7.449219 C 18.75 7.863281 18.414062 8.199219 18 8.199219 M 18 12.75 C 17.585938 12.75 17.25 12.414062 17.25 12 C 17.25 11.585938 17.585938 11.25 18 11.25 C 18.414062 11.25 18.75 11.585938 18.75 12 C 18.75 12.414062 18.414062 12.75 18 12.75 M 15.75 10.449219 C 15.335938 10.449219 15 10.113281 15 9.699219 C 15 9.285156 15.335938 8.949219 15.75 8.949219 C 16.164062 8.949219 16.5 9.285156 16.5 9.699219 C 16.5 10.113281 16.164062 10.449219 15.75 10.449219 M 7.472656 10.449219 L 6.722656 10.449219 L 6.722656 11.199219 C 6.722656 11.613281 6.382812 11.949219 5.972656 11.949219 C 5.558594 11.949219 5.222656 11.613281 5.222656 11.199219 L 5.222656 10.449219 L 4.472656 10.449219 C 4.058594 10.449219 3.722656 10.113281 3.722656 9.699219 C 3.722656 9.289062 4.058594 8.949219 4.472656 8.949219 L 5.222656 8.949219 L 5.222656 8.199219 C 5.222656 7.789062 5.558594 7.449219 5.972656 7.449219 C 6.382812 7.449219 6.722656 7.789062 6.722656 8.199219 L 6.722656 8.949219 L 7.472656 8.949219 C 7.882812 8.949219 8.222656 9.289062 8.222656 9.699219 C 8.222656 10.113281 7.882812 10.449219 7.472656 10.449219 M 18.269531 5.25 L 6.433594 5.25 C 3.894531 5.25 1.5 7.273438 1.5 9.699219 L 1.5 16.046875 C 1.5 17.617188 3.046875 18.75 4.457031 18.75 C 5.585938 18.75 6.652344 18.03125 7.066406 17.039062 L 8.492188 13.496094 L 15.507812 13.496094 L 17.414062 17.039062 C 17.980469 18.03125 18.695312 18.675781 19.8125 18.675781 C 21.371094 18.675781 22.5 17.617188 22.5 16.046875 L 22.5 9.699219 C 22.5 7.273438 20.65625 5.25 18.269531 5.25 ",
            keywords: ["area","console","xbox"]
        },
        "room-garage":{
            path:"M 20.835938 4.304688 C 21.054688 4.523438 21.054688 4.902344 20.832031 5.222656 L 17.457031 10.058594 C 17.15625 10.488281 16.585938 10.613281 16.285156 10.3125 L 15.578125 9.609375 L 14.769531 10.417969 L 13.597656 9.246094 L 14.40625 8.4375 L 13.703125 7.730469 C 13.402344 7.429688 13.527344 6.859375 13.957031 6.558594 L 18.792969 3.179688 C 19.109375 2.960938 19.492188 2.960938 19.710938 3.179688 Z M 8.65625 13.011719 L 11.003906 15.359375 L 5.605469 20.757812 C 5.28125 21.082031 4.753906 21.082031 4.429688 20.757812 L 3.257812 19.585938 C 2.933594 19.261719 2.933594 18.734375 3.257812 18.410156 Z M 20.742188 18.507812 C 21.066406 18.832031 21.066406 19.359375 20.742188 19.683594 L 19.683594 20.742188 C 19.519531 20.902344 19.308594 20.984375 19.097656 20.984375 C 18.882812 20.984375 18.667969 20.902344 18.507812 20.742188 L 8.386719 10.621094 C 7.179688 11.09375 5.765625 10.949219 4.691406 10.1875 C 3.320312 9.21875 2.785156 7.625 3.078125 6.164062 C 3.140625 5.863281 3.523438 5.753906 3.742188 5.972656 L 5.269531 7.503906 C 5.578125 7.8125 6.078125 7.8125 6.386719 7.503906 L 7.503906 6.386719 C 7.8125 6.078125 7.8125 5.578125 7.503906 5.269531 L 5.976562 3.742188 C 5.757812 3.523438 5.867188 3.136719 6.171875 3.078125 C 7.421875 2.828125 8.769531 3.183594 9.738281 4.152344 C 10.882812 5.296875 11.171875 6.96875 10.617188 8.382812 Z M 20.742188 18.507812 ",
            keywords: ["area","config","tools"]
        },
        "room-guestroom":{
            path:"M 18 12 L 6 12 C 4.34375 12 3 13.34375 3 15 L 3 16.5 C 3 16.914062 3.335938 17.25 3.75 17.25 L 4.5 17.25 L 4.5 18 C 4.5 18.828125 5.171875 19.5 6 19.5 C 6.828125 19.5 7.5 18.828125 7.5 18 L 7.5 17.25 L 16.5 17.25 L 16.5 18 C 16.5 18.828125 17.171875 19.5 18 19.5 C 18.828125 19.5 19.5 18.828125 19.5 18 L 19.5 17.25 L 20.25 17.25 C 20.664062 17.25 21 16.914062 21 16.5 L 21 15 C 21 13.34375 19.65625 12 18 12 M 9.082031 7.5 L 14.914062 7.5 C 15.378906 7.5 15.75 7.835938 15.75 8.25 C 15.75 8.664062 15.378906 9 14.914062 9 L 9.082031 9 C 8.621094 9 8.25 8.664062 8.25 8.25 C 8.25 7.835938 8.621094 7.5 9.082031 7.5 M 6.75 10.5 L 17.25 10.5 C 17.664062 10.5 18 10.164062 18 9.75 L 18 5.25 C 18 4.835938 17.664062 4.5 17.25 4.5 L 6.75 4.5 C 6.335938 4.5 6 4.835938 6 5.25 L 6 9.75 C 6 10.164062 6.335938 10.5 6.75 10.5 ",
            keywords: ["area","bed","single"]
        },
        "room-gym":{
            path:"M 17.25 6.75 C 17.664062 6.75 18 7.085938 18 7.5 L 18 16.5 C 18 16.914062 17.664062 17.25 17.25 17.25 L 14.25 17.25 C 13.835938 17.25 13.5 16.914062 13.5 16.5 L 13.5 14.25 L 10.5 14.25 L 10.5 16.5 C 10.5 16.914062 10.164062 17.25 9.75 17.25 L 6.75 17.25 C 6.335938 17.25 6 16.914062 6 16.5 L 6 7.5 C 6 7.085938 6.335938 6.75 6.75 6.75 L 9.75 6.75 C 10.164062 6.75 10.5 7.085938 10.5 7.5 L 10.5 9.75 L 13.5 9.75 L 13.5 7.5 C 13.5 7.085938 13.835938 6.75 14.25 6.75 Z M 3 9 C 3 8.585938 3.335938 8.25 3.75 8.25 L 4.5 8.25 L 4.5 15.75 L 3.75 15.75 C 3.335938 15.75 3 15.414062 3 15 L 3 13.5 C 2.171875 13.5 1.5 12.828125 1.5 12 C 1.5 11.171875 2.171875 10.5 3 10.5 Z M 21 10.5 C 21.828125 10.5 22.5 11.171875 22.5 12 C 22.5 12.828125 21.828125 13.5 21 13.5 L 21 15 C 21 15.414062 20.664062 15.75 20.25 15.75 L 19.5 15.75 L 19.5 8.25 L 20.25 8.25 C 20.664062 8.25 21 8.585938 21 9 Z M 21 10.5 ",
            keywords: ["area","exercise","weights"]
        },
        "room-hallway":{
            path:"M 20.980469 16.367188 L 18.824219 6.785156 C 18.484375 5.277344 17.039062 4.320312 15.535156 4.546875 L 14.949219 3.667969 C 14.671875 3.25 14.203125 3 13.703125 3 L 12.75 3 C 12.335938 3 12 3.335938 12 3.75 L 12 5.25 L 10.5 5.25 L 10.5 0.75 C 10.5 0.335938 10.164062 0 9.75 0 C 9.335938 0 9 0.335938 9 0.75 L 9 9 L 6 9 L 6 7.5 C 6 7.085938 5.664062 6.75 5.25 6.75 C 4.835938 6.75 4.5 7.085938 4.5 7.5 L 4.5 9.75 C 4.5 10.164062 4.835938 10.5 5.25 10.5 L 9 10.5 L 9 21.75 L 6 21.75 C 5.171875 21.75 4.5 22.421875 4.5 23.25 C 4.5 23.664062 4.835938 24 5.25 24 L 14.25 24 C 14.664062 24 15 23.664062 15 23.25 C 15 22.421875 14.328125 21.75 13.5 21.75 L 10.5 21.75 L 10.5 6.75 L 12 6.75 L 12 18.75 C 12 19.164062 12.335938 19.5 12.75 19.5 L 13.753906 19.5 C 15.308594 19.5 16.46875 18.078125 16.167969 16.558594 L 15.253906 12 L 16.082031 8.269531 L 18.054688 17.027344 C 18.144531 17.429688 18.546875 17.683594 18.953125 17.59375 L 20.414062 17.261719 C 20.820312 17.171875 21.074219 16.773438 20.980469 16.367188 ",
            keywords: ["area","coat"]
        },
        "room-kids":{
            path:"M 15.75 19.125 C 14.921875 19.125 14.25 18.285156 14.25 17.25 C 14.25 16.214844 14.921875 15.375 15.75 15.375 C 16.578125 15.375 17.25 16.214844 17.25 17.25 C 17.25 18.285156 16.578125 19.125 15.75 19.125 M 12 11.25 C 10.757812 11.25 9.75 10.410156 9.75 9.375 C 9.75 8.339844 10.757812 7.5 12 7.5 C 13.242188 7.5 14.25 8.339844 14.25 9.375 C 14.25 10.410156 13.242188 11.25 12 11.25 M 8.25 19.125 C 7.421875 19.125 6.75 18.285156 6.75 17.25 C 6.75 16.214844 7.421875 15.375 8.25 15.375 C 9.078125 15.375 9.75 16.214844 9.75 17.25 C 9.75 18.285156 9.078125 19.125 8.25 19.125 Z M 12 8.25 C 12.414062 8.25 12.75 8.585938 12.75 9 C 12.75 9.414062 12.414062 9.75 12 9.75 C 11.585938 9.75 11.25 9.414062 11.25 9 C 11.25 8.585938 11.585938 8.25 12 8.25 Z M 18.75 12 C 18.425781 12 18.121094 12.070312 17.84375 12.195312 C 17.363281 11.589844 16.707031 11.070312 15.929688 10.667969 C 16.5 9.871094 16.839844 8.898438 16.839844 7.847656 C 16.839844 7.828125 16.835938 7.808594 16.835938 7.789062 C 17.929688 7.554688 18.75 6.585938 18.75 5.421875 C 18.75 4.085938 17.664062 3 16.328125 3 C 15.640625 3 15.019531 3.289062 14.578125 3.75 C 13.828125 3.277344 12.945312 3 11.996094 3 C 11.046875 3 10.164062 3.277344 9.417969 3.746094 C 8.976562 3.289062 8.359375 3 7.671875 3 C 6.335938 3 5.25 4.085938 5.25 5.421875 C 5.25 6.582031 6.066406 7.546875 7.152344 7.785156 C 7.152344 7.804688 7.148438 7.828125 7.148438 7.847656 C 7.148438 8.902344 7.492188 9.875 8.0625 10.671875 C 7.289062 11.074219 6.636719 11.59375 6.15625 12.195312 C 5.878906 12.070312 5.574219 12 5.25 12 C 4.007812 12 3 13.007812 3 14.25 C 3 15.492188 4.007812 16.5 5.25 16.5 C 5.269531 16.5 5.289062 16.492188 5.3125 16.492188 C 5.269531 16.738281 5.25 16.992188 5.25 17.25 C 5.25 19.320312 6.59375 21 8.25 21 C 9.261719 21 10.152344 20.367188 10.699219 19.40625 C 11.121094 19.46875 11.554688 19.5 12 19.5 C 12.445312 19.5 12.878906 19.46875 13.300781 19.40625 C 13.847656 20.367188 14.738281 21 15.75 21 C 17.40625 21 18.75 19.320312 18.75 17.25 C 18.75 16.992188 18.730469 16.738281 18.6875 16.492188 C 18.710938 16.492188 18.730469 16.5 18.75 16.5 C 19.992188 16.5 21 15.492188 21 14.25 C 21 13.007812 19.992188 12 18.75 12 ",
            keywords: ["area","bear","toy"]
        },
        "room-kitchen":{
            path:"M 17.625 5.25 C 18.246094 5.25 18.75 5.753906 18.75 6.375 C 18.75 6.996094 18.246094 7.5 17.625 7.5 L 6.375 7.5 C 5.753906 7.5 5.25 6.996094 5.25 6.375 C 5.25 5.753906 5.753906 5.25 6.375 5.25 L 10.707031 5.25 C 10.578125 5.027344 10.5 4.773438 10.5 4.5 C 10.5 3.671875 11.171875 3 12 3 C 12.828125 3 13.5 3.671875 13.5 4.5 C 13.5 4.773438 13.421875 5.027344 13.292969 5.25 Z M 19.5 9 C 20.328125 9 21 9.671875 21 10.5 C 21 11.328125 20.328125 12 19.5 12 L 18.75 12 L 18.75 19.410156 C 18.75 20.289062 18.039062 21 17.160156 21 L 6.839844 21 C 5.960938 21 5.25 20.289062 5.25 19.410156 L 5.25 12 L 4.5 12 C 3.671875 12 3 11.328125 3 10.5 C 3 9.671875 3.671875 9 4.5 9 Z M 19.5 9 ",
            keywords: ["area","cook"]
        },
        "room-laundry":{
            path:"M 18.75 4.5 C 18.335938 4.5 18 4.164062 18 3.75 C 18 3.335938 18.335938 3 18.75 3 C 19.164062 3 19.5 3.335938 19.5 3.75 C 19.5 4.164062 19.164062 4.5 18.75 4.5 M 12 19.5 C 8.6875 19.5 6 16.8125 6 13.5 C 6 10.1875 8.6875 7.5 12 7.5 C 15.3125 7.5 18 10.1875 18 13.5 C 18 16.8125 15.3125 19.5 12 19.5 M 4.5 3.75 C 4.5 3.335938 4.835938 3 5.25 3 L 8.25 3 C 8.664062 3 9 3.335938 9 3.75 C 9 4.164062 8.664062 4.5 8.25 4.5 L 5.25 4.5 C 4.835938 4.5 4.5 4.164062 4.5 3.75 M 15.75 3 C 16.164062 3 16.5 3.335938 16.5 3.75 C 16.5 4.164062 16.164062 4.5 15.75 4.5 C 15.335938 4.5 15 4.164062 15 3.75 C 15 3.335938 15.335938 3 15.75 3 Z M 16.5 12.019531 C 15.761719 12.136719 15.210938 12.753906 15.210938 13.5 C 15.210938 14.246094 15.761719 14.863281 16.5 14.976562 C 15.867188 16.734375 14.152344 18 12.132812 18 C 9.578125 18 7.5 15.980469 7.5 13.5 C 7.5 11.019531 9.578125 9 12.132812 9 C 14.152344 9 15.867188 10.265625 16.5 12.019531 Z M 20.25 1.5 L 3.75 1.5 C 3.335938 1.5 3 1.835938 3 2.25 L 3 21.75 C 3 22.164062 3.335938 22.5 3.75 22.5 L 20.25 22.5 C 20.664062 22.5 21 22.164062 21 21.75 L 21 2.25 C 21 1.835938 20.664062 1.5 20.25 1.5 ",
            keywords: ["area","utility","washing"]
        },
        "room-living":{
            path:"M 21 9.75 C 21.828125 9.75 22.5 10.421875 22.5 11.25 L 22.5 15.796875 C 22.5 16.1875 22.1875 16.5 21.796875 16.5 L 21 16.5 L 21 17.25 C 21 18.078125 20.328125 18.75 19.5 18.75 C 18.671875 18.75 18 18.078125 18 17.25 L 18 16.5 L 6 16.5 L 6 17.25 C 6 18.078125 5.328125 18.75 4.5 18.75 C 3.671875 18.75 3 18.078125 3 17.25 L 3 16.5 L 2.203125 16.5 C 1.8125 16.5 1.5 16.1875 1.5 15.796875 L 1.5 11.25 C 1.5 10.421875 2.171875 9.75 3 9.75 C 3.828125 9.75 4.5 10.421875 4.5 11.25 L 4.5 12.75 L 19.5 12.75 L 19.5 11.25 C 19.5 10.421875 20.171875 9.75 21 9.75 Z M 6 11.25 C 6 9.59375 4.65625 8.25 3 8.25 L 3 6.75 C 3 5.921875 3.671875 5.25 4.5 5.25 L 19.5 5.25 C 20.328125 5.25 21 5.921875 21 6.75 L 21 8.25 C 19.34375 8.25 18 9.59375 18 11.25 Z M 6 11.25 ",
            keywords: ["area","lounge","settee","sofa"]
        },
        "room-lounge":{
            path:"M 18 12.75 C 20.484375 12.75 22.5 13.265625 22.5 15.75 C 22.5 16.164062 22.164062 16.5 21.75 16.5 L 21 16.5 L 21 17.25 C 21 18.078125 20.328125 18.75 19.5 18.75 C 18.671875 18.75 18 18.078125 18 17.25 L 18 16.5 L 6 16.5 L 6 17.25 C 6 18.078125 5.328125 18.75 4.5 18.75 C 3.671875 18.75 3 18.078125 3 17.25 L 3 16.5 L 2.25 16.5 C 1.835938 16.5 1.5 16.164062 1.5 15.75 C 1.5 15.710938 1.511719 15.671875 1.511719 15.632812 C 1.511719 15.613281 1.5 15.597656 1.5 15.574219 L 1.5 10.429688 C 1.5 9.644531 2.144531 9 2.929688 9 L 3.070312 9 C 3.855469 9 4.5 9.644531 4.5 10.429688 L 4.5 12.75 Z M 3.070312 7.5 L 2.929688 7.5 C 2.480469 7.5 1.882812 7.644531 1.5 7.828125 C 2.097656 5.519531 4.351562 3.75 7.859375 3.75 C 11.222656 3.75 13.328125 5.335938 14.25 7.5 L 18.261719 7.5 C 19.773438 7.5 21 8.726562 21 10.238281 L 21 10.566406 C 21 10.945312 20.695312 11.25 20.316406 11.25 L 6 11.25 L 6 10.429688 C 6 8.816406 4.683594 7.5 3.070312 7.5 Z M 3.070312 7.5 ",
            keywords: ["area","chaise","settee"]
        },
        "room-nursery":{
            path:"M 12.578125 11.246094 C 11.84375 11.246094 11.246094 10.648438 11.246094 9.914062 L 11.246094 9.746094 L 13.914062 9.746094 L 13.914062 9.914062 C 13.914062 10.648438 13.316406 11.246094 12.578125 11.246094 Z M 19.699219 16.128906 C 19.980469 15.820312 20.457031 15.804688 20.761719 16.085938 C 21.0625 16.367188 21.082031 16.84375 20.800781 17.148438 C 18.535156 19.597656 15.328125 21 12.003906 21 C 8.675781 21 5.46875 19.597656 3.207031 17.148438 C 2.925781 16.84375 2.941406 16.367188 3.246094 16.085938 C 3.550781 15.804688 4.023438 15.820312 4.304688 16.128906 C 4.375 16.203125 4.449219 16.265625 4.523438 16.335938 L 6.695312 10.363281 C 4.117188 11.125 1.898438 8.222656 3.59375 6.484375 C 4.566406 5.484375 3.574219 4.492188 3.085938 4.015625 C 2.941406 3.875 3 3.628906 3.191406 3.5625 C 8.726562 1.734375 10.671875 4.773438 10.945312 6.734375 C 11.058594 7.527344 10.699219 8.570312 10.503906 9.035156 L 9.867188 10.652344 C 10.195312 11.851562 11.285156 12.742188 12.585938 12.742188 C 14.09375 12.742188 15.320312 11.550781 15.402344 10.0625 C 15.710938 10.207031 15.988281 10.40625 16.234375 10.640625 C 17.15625 10.679688 18.085938 10.355469 18.789062 9.652344 C 19.277344 9.160156 19.589844 8.554688 19.71875 7.925781 C 19.832031 7.367188 20.640625 7.332031 20.824219 7.871094 C 21.328125 9.34375 20.617188 10.488281 20.308594 10.890625 C 20.238281 10.980469 20.160156 11.066406 20.074219 11.144531 C 19.285156 11.875 18.238281 12.152344 17.242188 12.003906 C 17.273438 12.054688 17.308594 12.101562 17.332031 12.15625 L 19.34375 16.472656 L 19.34375 16.476562 C 19.460938 16.359375 19.585938 16.25 19.699219 16.128906 Z M 12.003906 19.496094 C 13.753906 19.496094 15.464844 19.046875 16.984375 18.226562 C 16.835938 18.09375 16.714844 17.933594 16.625 17.742188 L 14.996094 14.242188 L 8.472656 14.242188 L 7.164062 17.84375 C 7.117188 17.976562 7.050781 18.089844 6.972656 18.199219 C 8.503906 19.039062 10.230469 19.496094 12.003906 19.496094 Z M 6.003906 7.484375 C 6.421875 7.484375 6.753906 7.148438 6.753906 6.734375 C 6.753906 6.320312 6.421875 5.984375 6.003906 5.984375 C 5.589844 5.984375 5.253906 6.320312 5.253906 6.734375 C 5.253906 7.148438 5.589844 7.484375 6.003906 7.484375 Z M 6.003906 7.484375 ",
            keywords: ["area","rocking","toys"]
        },
        "room-office":{
            path:"M 19.875 10.5 L 19.125 10.5 C 18.507812 10.5 18 11.007812 18 11.625 L 18 13.953125 C 18 14.285156 17.730469 14.550781 17.402344 14.550781 L 17.394531 14.550781 C 16.714844 13.472656 15.515625 12.75 14.144531 12.75 L 12.75 12.75 L 12.75 10.5 L 15.066406 10.5 C 16.273438 10.5 17.25 9.523438 17.25 8.316406 L 16.296875 0.933594 C 16.21875 0.398438 15.757812 0 15.214844 0 L 8.785156 0 C 8.242188 0 7.78125 0.398438 7.703125 0.933594 L 6.75 8.316406 C 6.75 9.523438 7.726562 10.5 8.933594 10.5 L 11.25 10.5 L 11.25 12.75 L 9.855469 12.75 C 8.617188 12.75 7.53125 13.34375 6.824219 14.25 L 6.597656 14.25 C 6.269531 14.25 6 13.980469 6 13.652344 L 6 11.472656 C 6 10.773438 5.425781 10.199219 4.722656 10.199219 L 4.277344 10.199219 C 3.574219 10.199219 3 10.773438 3 11.472656 C 3 12.175781 3.574219 12.75 4.277344 12.75 L 4.5 12.75 L 4.5 13.652344 C 4.5 14.644531 5.195312 15.472656 6.121094 15.691406 C 6.046875 15.984375 6 16.289062 6 16.605469 C 6 16.960938 6.289062 17.25 6.644531 17.25 L 11.15625 17.25 L 7.890625 21.058594 C 7.765625 21.023438 7.636719 21 7.5 21 C 6.671875 21 6 21.671875 6 22.5 C 6 23.328125 6.671875 24 7.5 24 C 8.328125 24 9 23.328125 9 22.5 C 9 22.28125 8.953125 22.078125 8.867188 21.890625 L 11.25 19.113281 L 11.25 21.207031 C 10.804688 21.46875 10.5 21.945312 10.5 22.5 C 10.5 23.328125 11.171875 24 12 24 C 12.828125 24 13.5 23.328125 13.5 22.5 C 13.5 21.945312 13.195312 21.46875 12.75 21.207031 L 12.75 19.113281 L 15.132812 21.890625 C 15.046875 22.078125 15 22.28125 15 22.5 C 15 23.328125 15.671875 24 16.5 24 C 17.328125 24 18 23.328125 18 22.5 C 18 21.671875 17.328125 21 16.5 21 C 16.363281 21 16.234375 21.023438 16.109375 21.058594 L 12.84375 17.25 L 17.355469 17.25 C 17.710938 17.25 18 16.960938 18 16.605469 C 18 16.390625 17.972656 16.179688 17.9375 15.976562 C 18.832031 15.738281 19.5 14.925781 19.5 13.953125 L 19.5 12.75 L 19.875 12.75 C 20.492188 12.75 21 12.242188 21 11.625 C 21 11.007812 20.492188 10.5 19.875 10.5 ",
            keywords: ["area","chair","work"]
        },
        "room-other":{
            path:"M 18.855469 2.054688 C 19.226562 2.109375 19.5 2.429688 19.5 2.804688 L 19.5 21.195312 C 19.5 21.570312 19.226562 21.890625 18.855469 21.945312 L 9.855469 23.242188 C 9.402344 23.308594 9 22.953125 9 22.492188 L 9 21 L 5.289062 21 C 4.855469 21 4.5 20.644531 4.5 20.210938 L 4.5 3.789062 C 4.5 3.355469 4.855469 3 5.289062 3 L 9 3 L 9 1.507812 C 9 1.046875 9.402344 0.691406 9.855469 0.757812 Z M 11.25 12.75 C 11.664062 12.75 12 12.414062 12 12 C 12 11.585938 11.664062 11.25 11.25 11.25 C 10.835938 11.25 10.5 11.585938 10.5 12 C 10.5 12.414062 10.835938 12.75 11.25 12.75 Z M 6 19.5 L 9 19.5 L 9 4.5 L 6 4.5 Z M 6 19.5 ",
            keywords: ["area","door"]
        },
        "room-outdoors":{
            path:"M 8.25 7.5 C 11.148438 7.5 13.5 9.851562 13.5 12.75 C 13.5 15.410156 11.519531 17.601562 8.953125 17.949219 L 8.953125 20.25 C 8.953125 20.664062 8.617188 21 8.203125 21 C 7.789062 21 7.453125 20.664062 7.453125 20.25 L 7.453125 17.933594 C 4.933594 17.546875 3 15.378906 3 12.75 C 3 9.851562 5.351562 7.5 8.25 7.5 Z M 21 14.507812 C 21 16.945312 19.222656 17.214844 17.25 17.246094 L 17.25 20.25 C 17.25 20.664062 16.914062 21 16.5 21 C 16.085938 21 15.75 20.664062 15.75 20.25 L 15.75 17.242188 C 15.363281 17.238281 14.984375 17.222656 14.625 17.183594 C 14.085938 17.125 13.820312 16.519531 14.085938 16.046875 C 14.636719 15.074219 14.953125 13.949219 14.953125 12.75 C 14.953125 11.128906 14.375 9.644531 13.417969 8.480469 C 13.335938 8.378906 13.308594 8.246094 13.351562 8.121094 C 14.304688 5.378906 15.574219 3 16.5 3 C 18.1875 3 21 10.878906 21 14.507812 Z M 21 14.507812 ",
            keywords: ["area","garden","trees"]
        },
        "room-pool":{
            path:"M 20.996094 14.222656 L 21 14.222656 L 21 16.910156 C 20.910156 16.84375 20.832031 16.777344 20.78125 16.730469 C 20.289062 16.230469 19.476562 15.78125 18.574219 15.773438 C 18.566406 15.773438 18.558594 15.773438 18.550781 15.773438 C 18.460938 15.773438 18.367188 15.777344 18.273438 15.785156 C 17.660156 15.847656 17.019531 16.125 16.417969 16.730469 C 15.394531 17.761719 14.445312 16.984375 14.179688 16.730469 C 13.304688 15.84375 11.421875 15.117188 9.820312 16.730469 C 8.796875 17.761719 7.84375 16.984375 7.582031 16.730469 C 7.085938 16.230469 6.273438 15.78125 5.371094 15.773438 C 4.671875 15.765625 3.917969 16.023438 3.21875 16.730469 C 3.144531 16.804688 3.074219 16.847656 3 16.902344 L 3 14.222656 L 3.003906 14.222656 C 3.007812 14.035156 3.078125 13.847656 3.21875 13.703125 C 4.132812 12.78125 5.140625 12.628906 6 12.828125 L 6 5.25 C 6 4.835938 5.664062 4.5 5.25 4.5 C 4.835938 4.5 4.5 4.835938 4.5 5.25 C 4.5 5.664062 4.164062 6 3.75 6 C 3.335938 6 3 5.664062 3 5.25 C 3 4.007812 4.007812 3 5.25 3 C 6.492188 3 7.5 4.007812 7.5 5.25 L 7.5 6.75 L 12.75 6.75 L 12.75 5.25 C 12.75 4.835938 12.414062 4.5 12 4.5 C 11.585938 4.5 11.25 4.835938 11.25 5.25 C 11.25 5.664062 10.914062 6 10.5 6 C 10.085938 6 9.75 5.664062 9.75 5.25 C 9.75 4.007812 10.757812 3 12 3 C 13.242188 3 14.25 4.007812 14.25 5.25 L 14.25 13.765625 C 14.441406 13.9375 14.820312 14.210938 15.300781 14.222656 L 15.355469 14.222656 C 15.679688 14.214844 16.042969 14.082031 16.417969 13.703125 C 18.019531 12.09375 19.902344 12.820312 20.78125 13.703125 C 20.921875 13.847656 20.992188 14.035156 20.996094 14.222656 Z M 9.820312 13.703125 C 10.789062 12.730469 11.859375 12.613281 12.75 12.867188 L 12.75 12 L 7.5 12 L 7.5 13.628906 C 7.527344 13.65625 7.554688 13.679688 7.582031 13.703125 C 7.742188 13.863281 8.164062 14.210938 8.703125 14.222656 L 8.753906 14.222656 C 9.082031 14.214844 9.445312 14.082031 9.820312 13.703125 Z M 7.5 10.5 L 12.75 10.5 L 12.75 8.25 L 7.5 8.25 Z M 19.722656 17.78125 C 19.726562 17.78125 19.726562 17.78125 19.730469 17.785156 C 19.796875 17.851562 20.277344 18.3125 21 18.570312 L 21 21 L 3 21 L 3 18.589844 C 3.449219 18.4375 3.878906 18.175781 4.269531 17.785156 C 4.273438 17.78125 4.277344 17.78125 4.28125 17.777344 C 4.535156 17.515625 4.785156 17.371094 5.023438 17.300781 C 5.734375 17.09375 6.320312 17.582031 6.519531 17.78125 C 6.523438 17.78125 6.527344 17.785156 6.53125 17.785156 C 6.605469 17.859375 7.097656 18.335938 7.84375 18.589844 C 8.925781 18.960938 10.003906 18.667969 10.878906 17.777344 C 11.90625 16.734375 12.855469 17.515625 13.121094 17.777344 C 13.175781 17.832031 13.679688 18.332031 14.445312 18.589844 C 14.75 18.695312 15.054688 18.746094 15.355469 18.746094 C 16.117188 18.746094 16.847656 18.417969 17.476562 17.78125 C 17.476562 17.777344 17.480469 17.777344 17.480469 17.777344 C 17.609375 17.644531 17.734375 17.542969 17.859375 17.464844 C 18.730469 16.921875 19.488281 17.546875 19.722656 17.78125 Z M 19.722656 17.78125 ",
            keywords: ["area","swim"]
        },
        "room-porch":{
            path:"M 10.339844 19.277344 L 11.429688 15.863281 L 13.773438 15.519531 L 15.238281 19.320312 C 13.640625 19.566406 11.925781 19.554688 10.339844 19.277344 Z M 8.125 11.296875 C 8.640625 11.21875 9.445312 11.101562 10.363281 10.964844 L 11.007812 13.660156 L 8.792969 13.992188 Z M 14.824219 13.089844 L 12.496094 13.4375 L 11.855469 10.746094 C 12.664062 10.628906 13.472656 10.511719 14.183594 10.414062 Z M 20.152344 18.332031 C 19.945312 17.972656 19.488281 17.847656 19.128906 18.050781 C 18.429688 18.449219 17.617188 18.765625 16.726562 19.007812 L 15.292969 15.296875 L 19.5 14.679688 C 19.324219 13.453125 18.1875 12.597656 16.960938 12.773438 L 16.316406 12.867188 L 15.679688 10.21875 C 15.828125 10.199219 15.953125 10.183594 16.058594 10.171875 C 16.484375 10.179688 16.828125 10.527344 16.828125 10.953125 C 16.828125 11.367188 17.164062 11.703125 17.578125 11.703125 C 17.992188 11.703125 18.328125 11.367188 18.328125 10.953125 C 18.328125 9.695312 17.300781 8.667969 16.042969 8.667969 C 16.03125 8.667969 16.019531 8.675781 16.003906 8.675781 C 15.992188 8.675781 15.980469 8.671875 15.96875 8.671875 C 14.664062 8.804688 9.359375 9.597656 7.761719 9.835938 L 6.359375 4.183594 C 6.1875 3.488281 5.5625 3 4.847656 3 L 3.75 3 L 7.082031 16.5 L 9.777344 16.105469 L 8.875 18.9375 C 8.085938 18.703125 7.367188 18.410156 6.742188 18.050781 C 6.382812 17.847656 5.921875 17.972656 5.71875 18.332031 C 5.511719 18.691406 5.636719 19.148438 5.996094 19.355469 C 6.910156 19.875 7.96875 20.28125 9.144531 20.5625 C 10.347656 20.855469 11.621094 21 12.933594 21 C 14.246094 21 15.523438 20.855469 16.726562 20.5625 C 17.898438 20.28125 18.957031 19.875 19.871094 19.355469 C 20.230469 19.148438 20.355469 18.691406 20.152344 18.332031 Z M 20.152344 18.332031 ",
            keywords: ["area","rocking"]
        },
        "room-recreation":{
            path:"M 18.75 16.5 C 19.992188 16.5 21 17.507812 21 18.75 C 21 19.992188 19.992188 21 18.75 21 C 17.507812 21 16.5 19.992188 16.5 18.75 C 16.5 17.507812 17.507812 16.5 18.75 16.5 Z M 19.761719 15.15625 C 19.4375 15.0625 19.101562 15 18.75 15 C 16.683594 15 15 16.683594 15 18.75 C 13.226562 19.140625 11.15625 18.804688 9.503906 17.964844 C 9.074219 17.746094 8.550781 17.828125 8.207031 18.171875 L 5.589844 20.78125 C 5.296875 21.074219 4.820312 21.074219 4.527344 20.78125 L 3.21875 19.476562 C 2.925781 19.183594 2.925781 18.710938 3.21875 18.417969 L 5.839844 15.808594 C 6.175781 15.472656 6.273438 14.957031 6.054688 14.535156 C 4.335938 11.199219 5.15625 6.898438 8.523438 4.484375 C 11.320312 2.480469 14.980469 2.507812 17.753906 4.546875 C 21.261719 7.125 21.917969 11.777344 19.761719 15.15625 Z M 19.761719 15.15625 ",
            keywords: ["area","games","ping","toys"]
        },
        "room-stairs":{
            path:"M 20.25 21 L 8.558594 21 L 21 8.558594 L 21 20.25 C 21 20.664062 20.664062 21 20.25 21 Z M 17.25 3 L 21 3 L 21 6.441406 L 6.441406 21 L 3 21 L 3 17.25 C 3 16.835938 3.335938 16.5 3.75 16.5 L 7.5 16.5 L 7.5 12.75 C 7.5 12.335938 7.835938 12 8.25 12 L 12 12 L 12 8.25 C 12 7.835938 12.335938 7.5 12.75 7.5 L 16.5 7.5 L 16.5 3.75 C 16.5 3.335938 16.835938 3 17.25 3 Z M 17.25 3 ",
            keywords: ["area","basement","upstairs"]
        },
        "room-storage":{
            path:"M 3.75 19.5 L 3.75 8.25 L 20.25 8.25 L 20.25 19.5 C 20.25 19.914062 19.914062 20.25 19.5 20.25 L 4.5 20.25 C 4.085938 20.25 3.75 19.914062 3.75 19.5 Z M 9 11.25 C 8.585938 11.25 8.25 11.585938 8.25 12 C 8.25 12.414062 8.585938 12.75 9 12.75 L 15 12.75 C 15.414062 12.75 15.75 12.414062 15.75 12 C 15.75 11.585938 15.414062 11.25 15 11.25 Z M 19.5 3.75 C 19.914062 3.75 20.25 4.085938 20.25 4.5 L 20.25 6.75 L 3.75 6.75 L 3.75 4.5 C 3.75 4.085938 4.085938 3.75 4.5 3.75 Z M 19.5 3.75 ",
            keywords: ["area","box","filing"]
        },
        "room-studio":{
            path:"M 18.75 4.5 C 19.164062 4.5 19.5 4.835938 19.5 5.25 L 19.5 12 C 19.5 12.414062 19.164062 12.75 18.75 12.75 L 5.25 12.75 C 4.835938 12.75 4.5 12.414062 4.5 12 L 4.5 5.25 C 4.5 4.835938 4.835938 4.5 5.25 4.5 L 11.25 4.5 L 11.25 3 C 11.25 2.585938 11.585938 2.25 12 2.25 C 12.414062 2.25 12.75 2.585938 12.75 3 L 12.75 4.5 Z M 15.820312 15.75 L 18.648438 20.625 C 18.855469 20.980469 18.734375 21.441406 18.375 21.648438 C 18.257812 21.71875 18.128906 21.75 18 21.75 C 17.742188 21.75 17.492188 21.617188 17.351562 21.375 L 14.085938 15.75 L 12.75 15.75 L 12.75 20.960938 C 12.75 21.378906 12.414062 21.710938 12 21.710938 C 11.585938 21.710938 11.25 21.378906 11.25 20.960938 L 11.25 15.75 L 9.914062 15.75 L 6.648438 21.375 C 6.511719 21.617188 6.257812 21.75 6 21.75 C 5.871094 21.75 5.742188 21.71875 5.625 21.648438 C 5.265625 21.441406 5.144531 20.980469 5.351562 20.625 L 8.179688 15.75 L 6.75 15.75 C 6.335938 15.75 6 15.414062 6 15 C 6 14.585938 6.335938 14.25 6.75 14.25 L 17.25 14.25 C 17.664062 14.25 18 14.585938 18 15 C 18 15.414062 17.664062 15.75 17.25 15.75 Z M 15.820312 15.75 ",
            keywords: ["area","easel","paint"]
        },
        "room-terrace":{
            path:"M 20.679688 6.421875 C 20.964844 6.628906 21.085938 7.011719 20.933594 7.332031 C 20.691406 7.835938 20.167969 8.226562 19.566406 8.226562 C 19.175781 8.226562 18.820312 8.0625 18.550781 7.808594 C 18.273438 7.542969 17.835938 7.542969 17.558594 7.808594 C 17.289062 8.0625 16.933594 8.226562 16.539062 8.226562 C 16.148438 8.226562 15.792969 8.0625 15.523438 7.808594 C 15.246094 7.542969 14.808594 7.542969 14.53125 7.808594 C 14.261719 8.0625 13.90625 8.226562 13.511719 8.226562 C 13.234375 8.226562 12.976562 8.140625 12.75 8 L 12.75 13.476562 C 12.75 13.894531 12.414062 14.226562 12 14.226562 C 11.585938 14.226562 11.25 13.894531 11.25 13.476562 L 11.25 8 C 11.027344 8.140625 10.765625 8.226562 10.484375 8.226562 C 10.097656 8.226562 9.738281 8.0625 9.472656 7.808594 C 9.191406 7.542969 8.753906 7.542969 8.476562 7.808594 C 8.207031 8.0625 7.851562 8.226562 7.460938 8.226562 C 7.070312 8.226562 6.710938 8.0625 6.445312 7.808594 C 6.164062 7.542969 5.726562 7.542969 5.449219 7.808594 C 5.179688 8.0625 4.824219 8.226562 4.433594 8.226562 C 3.832031 8.226562 3.3125 7.835938 3.066406 7.332031 C 2.914062 7.011719 3.035156 6.628906 3.320312 6.421875 L 11.546875 0.152344 C 11.816406 -0.0507812 12.1875 -0.0507812 12.453125 0.152344 Z M 17.25 14.976562 C 18.078125 14.976562 18.75 15.648438 18.75 16.476562 C 18.75 17.304688 18.078125 17.976562 17.25 17.976562 L 13.9375 17.976562 L 17.832031 22.753906 C 18.09375 23.074219 18.046875 23.546875 17.722656 23.808594 C 17.585938 23.921875 17.417969 23.976562 17.25 23.976562 C 17.035156 23.976562 16.816406 23.882812 16.667969 23.703125 L 12 17.976562 L 7.332031 23.703125 C 7.070312 24.023438 6.597656 24.070312 6.277344 23.808594 C 5.957031 23.546875 5.90625 23.074219 6.167969 22.753906 L 10.066406 17.976562 L 6.75 17.976562 C 5.921875 17.976562 5.25 17.304688 5.25 16.476562 C 5.25 15.648438 5.921875 14.976562 6.75 14.976562 Z M 17.25 14.976562 ",
            keywords: ["area","picnic"]
        },
        "room-toilet":{
            path:"M 6.75 14.25 C 6.335938 14.25 6 13.914062 6 13.5 C 6 13.085938 6.335938 12.75 6.75 12.75 L 9.601562 12.75 C 7.910156 11.628906 6.75 9.367188 6.75 6.75 C 6.75 3.023438 9.101562 0 12 0 C 14.898438 0 17.25 3.023438 17.25 6.75 C 17.25 9.367188 16.089844 11.628906 14.398438 12.75 L 17.25 12.75 C 17.664062 12.75 18 13.085938 18 13.5 C 18 13.914062 17.664062 14.25 17.25 14.25 Z M 17.398438 15.75 C 17.730469 15.75 18 16.011719 18 16.332031 L 18 16.496094 C 18 18.960938 16.425781 20.859375 14.203125 21.710938 C 13.882812 21.835938 13.675781 22.132812 13.675781 22.464844 L 13.675781 23.1875 C 13.675781 23.636719 13.300781 24 12.835938 24 L 11.164062 24 C 10.699219 24 10.324219 23.636719 10.324219 23.1875 L 10.324219 22.453125 C 10.324219 22.121094 10.117188 21.824219 9.800781 21.699219 C 7.550781 20.808594 5.996094 18.8125 6 16.328125 C 6 16.007812 6.273438 15.75 6.601562 15.75 Z M 17.398438 15.75 ",
            keywords: ["area","wc"]
        },
        "sana":{
            path:"M13.34,1.03h-2C7.08,1.03,3.61,5.95,3.61,12c0,2.41,0.56,4.63,1.49,6.45H4.11c-0.28,0-0.5,0.22-0.5,0.5v3.53 c0,0.28,0.22,0.5,0.5,0.5h9.23c4.26,0,7.73-4.92,7.73-10.97C21.07,5.95,17.61,1.03,13.34,1.03z M13.34,21.97 c-3.71,0-6.73-4.47-6.73-9.97s3.02-9.97,6.73-9.97c3.71,0,6.73,4.47,6.73,9.97S17.05,21.97,13.34,21.97z M13.34,3.54c-3.07,0-5.58,3.79-5.58,8.46c0,4.66,2.5,8.46,5.58,8.46s5.58-3.79,5.58-8.46 C18.92,7.34,16.42,3.54,13.34,3.54z M12.38,19.29c-2.06-0.72-3.62-3.71-3.62-7.29c0-3.58,1.55-6.57,3.62-7.29 c2.08,0.79,3.58,3.8,3.58,7.29C15.97,15.49,14.47,18.49,12.38,19.29z",
            keywords: ["light"]
        },
        "sana-alt":{
            path:"M21.25306,14.99759a11.78876,11.78876,0,0,0,.35045-2.86275l-.00031-.02706.00031-.02815c0-5.8925-4.14873-10.6864-9.24832-10.6864a8.05983,8.05983,0,0,0-1.31456.10844c-4.84665.53739-8.64414,5.101-8.64414,10.63317A10.9944,10.9944,0,0,0,6.97655,21.239l.469,1.52189,4.68388.06214.00681-.00367a8.67123,8.67123,0,0,0,1.58156-.16957,9.82553,9.82553,0,0,0,7.50051-7.51706q.01683-.064.03308-.12821Zm-1.81215-2.86275A9.08287,9.08287,0,0,1,15.78082,19.642H13.17518l-.12778.07971a6.65126,6.65126,0,0,1-3.20373.70754C6.8562,19.31637,4.6842,16.01928,4.6842,12.13484c0-4.79543,3.3099-8.69683,7.37835-8.69683S19.44091,7.33941,19.44091,12.13484Z",
            keywords: ["light"]
        },
        "signe":{
            path:"M15.65,14.99c0-0.27-0.23-0.42-0.23-0.42c-0.06-0.04-1.15-0.71-2.99-1.04l0-12.37c0-0.28-0.22-0.5-0.5-0.5H9.83 c-0.28,0-0.5,0.22-0.5,0.5l0,12.39c-0.84,0.36-0.97,1.1-0.98,1.37c0,0.01,0,0.03,0,0.04c0,0.01-0.01,0.02-0.01,0.03v6.09 c0.06,1.02,0.92,2.13,1.9,2.26c0,0,0.01,0,0.01,0c0.66,0,4.76-0.99,5.33-2.1c0,0,0.04-0.06,0.05-0.11s0.01-0.07,0.01-0.11 L15.65,14.99C15.66,14.99,15.65,14.99,15.65,14.99z M10.33,16.34C10.33,16.34,10.32,16.34,10.33,16.34 c-0.49-0.06-1.02-0.79-0.98-1.35c0.03-0.42,0.4-0.63,1.1-0.63c0.05,0,0.09,0.01,0.13,0.01l0-12.7h0.86l0,12.75 c1.26,0.12,2.24,0.44,2.83,0.69C13.25,15.64,10.9,16.34,10.33,16.34z",
            keywords: ["light"]
        },
        "signe-gradient-floor":{
            path:"M10.2,13V1.4c0-0.3-0.2-0.5-0.5-0.5H7.8H7.2c-0.3,0-0.5,0.2-0.5,0.5v12.5c-0.3,0.3-0.6,0.6-0.6,1v0.3v6.3c0,0.1,0,0.1,0,0.2 c0.2,1.1,2.2,1.7,4.1,1.7s3.9-0.6,4.1-1.7c0-0.1,0-0.1,0-0.2v-6.3v-0.3C14.5,13.5,12.3,12.9,10.2,13z M9.2,14c0,0.1-0.2,0.3-0.5,0.3 c-0.3,0-0.5-0.2-0.5-0.3V1.9h1V14z",
            keywords: ["light"]
        },
        "signe-gradient-table":{
            path:"M11.6,15.5V1.4c0-0.3-0.2-0.5-0.5-0.5H8.4H7.5C7.2,0.9,7,1.1,7,1.4v15.3C6.5,17,6.2,17.4,6.2,18v2.6 c0,1.7,2.9,2.5,5.8,2.5s5.8-0.9,5.8-2.5V18C17.8,16.2,14.6,15.4,11.6,15.5z M10.6,16.8c0,0.1-0.1,0.5-0.8,0.5 c-0.7,0-0.8-0.4-0.8-0.5V1.9h1.7V16.8z",
            keywords: ["light"]
        },
        "single-spot":{
            path:"M 19.132812 16.832031 C 18.554688 18.503906 17.359375 19.597656 16.46875 19.28125 C 15.578125 18.960938 15.328125 17.347656 15.910156 15.679688 C 16.492188 14.011719 17.683594 12.917969 18.574219 13.234375 C 19.464844 13.554688 19.714844 15.164062 19.132812 16.832031 M 19.695312 12.0625 L 11.25 9.195312 L 11.25 7.78125 C 12.941406 7.734375 14.585938 7.523438 15.871094 7.15625 C 17.085938 6.804688 17.773438 6.367188 17.953125 5.917969 C 17.988281 5.84375 18 5.761719 18 5.683594 L 18 5.109375 C 18 5.03125 17.988281 4.957031 17.953125 4.878906 C 17.769531 4.410156 17.023438 3.957031 15.738281 3.601562 C 12.824219 2.800781 8.164062 2.800781 5.257812 3.601562 C 3.96875 3.957031 3.230469 4.410156 3.046875 4.878906 C 3.015625 4.957031 3 5.03125 3 5.109375 L 3 5.683594 C 3 5.761719 3.015625 5.84375 3.046875 5.917969 C 3.226562 6.367188 3.914062 6.804688 5.132812 7.15625 C 6.417969 7.523438 8.058594 7.734375 9.75 7.78125 L 9.75 9.210938 C 8.859375 9.664062 7.867188 10.816406 7.296875 12.25 C 6.460938 14.34375 6.601562 16.363281 7.609375 16.761719 L 16.546875 20.917969 C 17.878906 21.386719 19.660156 19.78125 20.53125 17.335938 C 21.402344 14.890625 21.027344 12.527344 19.695312 12.0625 ",
            keywords: ["ceiling","light"]
        },
        "socket-eu":{
            path:"M22.36368,10.16593l.00092-2.08674q.00138-1.56506.00092-3.13057a3.21885,3.21885,0,0,0-.83507-2.21521A3.09341,3.09341,0,0,0,19.2611,1.64736c-.64052-.02064-1.28839-.01743-1.91606-.01468l-.69283.00184-4.307-.00092-1.72289.00046L9.277,1.6336q-2.02137-.00069-4.03767.00275a5.25179,5.25179,0,0,0-.88737.05323A3.18761,3.18761,0,0,0,2.04,3.33539a3.2287,3.2287,0,0,0-.407,1.649q.00345,1.1583.00092,2.31661l-.00046,3.6518.00092,8.07076a3.45437,3.45437,0,0,0,.01514.39642,3.23706,3.23706,0,0,0,.81166,1.839,3.12711,3.12711,0,0,0,2.23449,1.09017c.33723.01652.6786.02019,1.01492.02019.13627,0,.27163-.00092.4056-.00092l.40744-.00184q2.053.00276,4.106.00092l1.53294-.00092,2.32487.00092q2.29045,0,4.57909-.00275a3.2001,3.2001,0,0,0,2.25834-.88921,3.25037,3.25037,0,0,0,1.04062-2.46206q.00274-2.59191.00092-5.18474ZM21.34233,19.0667A2.24665,2.24665,0,0,1,19.53915,21.292a2.60037,2.60037,0,0,1-.52857.04956q-2.6098.00412-5.21777.00183h-8.831a2.25817,2.25817,0,0,1-2.21751-1.64719,2.19217,2.19217,0,0,1-.08672-.602q-.00619-4.57816-.00367-9.15633l.00046-3.12232q.00069-.93738-.00092-1.8743A2.24485,2.24485,0,0,1,4.40063,2.71872a3.942,3.942,0,0,1,.83277-.0624q2.34278-.00343,4.686-.00275h5.17648q2.00553-.00207,4.012.00183a2.25374,2.25374,0,0,1,2.19686,1.87615,3.01564,3.01564,0,0,1,.03671.46525q.00275,3.50451.00183,7.00949Z M12.00338,5.81442h-.00413A6.21328,6.21328,0,0,0,5.817,11.95536a6.167,6.167,0,0,0,6.18177,6.224h.0156a6.18247,6.18247,0,0,0-.011-12.36491Zm1.27921,11.03432V15.53558H10.71546v1.31316a5.01639,5.01639,0,0,1-.00459-9.69913V8.46093h2.56989V7.15007a5.0142,5.0142,0,0,1,.00183,9.69867Z M9.534,10.46692H9.52159a1.53055,1.53055,0,0,0-1.54074,1.52881,1.53515,1.53515,0,0,0,1.5357,1.53569H9.517a1.52862,1.52862,0,0,0,1.09522-.45515,1.50533,1.50533,0,0,0,.43818-1.08237A1.52477,1.52477,0,0,0,9.534,10.46692Zm-.01663,2.13962a.60629.60629,0,1,1,.60771-.58712A.61335.61335,0,0,1,9.51735,12.60654Z M14.46636,10.466a1.50577,1.50577,0,0,0-1.0709.44643,1.53459,1.53459,0,0,0,1.081,2.619h.00183a1.5358,1.5358,0,0,0,1.08834-.44965,1.51518,1.51518,0,0,0,.45057-1.0842A1.54381,1.54381,0,0,0,14.46728,10.466Zm.61907,1.52915a.61018.61018,0,0,1-.6041.61133.60615.60615,0,0,1-.008-1.21228A.6056.6056,0,0,1,15.08543,11.99516Z",
            keywords: ["infrastructure","light"]
        },
        "socket-uk":{
            path:"M22.36371,10.166l.00091-2.08679q.00138-1.565.00092-3.13055a3.21911,3.21911,0,0,0-.83508-2.21521,3.09333,3.09333,0,0,0-2.26935-1.08606c-.6405-.02063-1.28839-.0174-1.91608-.01465l-.69281.00183-4.307-.00091-1.7229.00042L9.277,1.63361q-2.02131-.00074-4.03766.00274a5.24982,5.24982,0,0,0-.88733.05323A3.18781,3.18781,0,0,0,2.04,3.33539a3.22885,3.22885,0,0,0-.407,1.649Q1.63647,6.1427,1.63391,7.301l-.00043,3.65179.00092,8.07074a3.45187,3.45187,0,0,0,.01514.39642,3.237,3.237,0,0,0,.81164,1.839,3.12684,3.12684,0,0,0,2.2345,1.09015c.33722.01654.67859.0202,1.01489.0202.13629,0,.27167-.00091.40564-.00091l.40741-.00183q2.053.00275,4.106.00091l1.533-.00091,2.32483.00091q2.29045,0,4.5791-.00274a3.2,3.2,0,0,0,2.25836-.88923,3.25026,3.25026,0,0,0,1.04059-2.462q.00274-2.592.00091-5.18475Zm-1.02136,8.90076A2.24665,2.24665,0,0,1,19.53912,21.292a2.59469,2.59469,0,0,1-.52856.04956q-2.60981.00412-5.21777.00183h-8.831a2.25813,2.25813,0,0,1-2.21747-1.64715,2.192,2.192,0,0,1-.08673-.602q-.00623-4.57811-.00366-9.15631l.00043-3.12232q.00074-.93741-.00092-1.87433A2.24477,2.24477,0,0,1,4.40063,2.71875a3.943,3.943,0,0,1,.83277-.06244q2.34275-.00339,4.686-.00275h5.17652q2.00554-.0021,4.012.00184a2.25375,2.25375,0,0,1,2.19684,1.87616,3.01347,3.01347,0,0,1,.03668.46527q.00275,3.50445.00183,7.00946ZM11.49835,9.09772h1V11.126h-1Z M9.05078,13.61621h1.605v1h-1.605Zm4.39942,1h1.60449v-1H13.4502Z M16,6.49854H8a1.50164,1.50164,0,0,0-1.5,1.5v7.99951a1.50164,1.50164,0,0,0,1.5,1.5h8a1.50164,1.50164,0,0,0,1.5-1.5V7.99854A1.50164,1.50164,0,0,0,16,6.49854Zm.5,9.49951a.501.501,0,0,1-.5.5H8a.50065.50065,0,0,1-.5-.5V7.99854a.50034.50034,0,0,1,.5-.5h8a.50065.50065,0,0,1,.5.5Z",
            keywords: ["infrastructure","light"]
        },
        "socket-us":{
            path:"M22.36371,10.166l.00091-2.08679q.00138-1.565.00092-3.13055a3.21911,3.21911,0,0,0-.83508-2.21521,3.09333,3.09333,0,0,0-2.26935-1.08606c-.6405-.02063-1.28839-.0174-1.91608-.01465l-.69281.00183-4.307-.00091-1.7229.00042L9.277,1.63361q-2.02131-.00074-4.03766.00274a5.24982,5.24982,0,0,0-.88733.05323A3.18781,3.18781,0,0,0,2.04,3.33539a3.22885,3.22885,0,0,0-.407,1.649Q1.63647,6.1427,1.63391,7.301l-.00043,3.65179.00092,8.07074a3.45187,3.45187,0,0,0,.01514.39642,3.237,3.237,0,0,0,.81164,1.839,3.12684,3.12684,0,0,0,2.2345,1.09015c.33722.01654.67859.0202,1.01489.0202.13629,0,.27167-.00091.40564-.00091l.40741-.00183q2.053.00275,4.106.00091l1.533-.00091,2.32483.00091q2.29045,0,4.5791-.00274a3.2,3.2,0,0,0,2.25836-.88923,3.25026,3.25026,0,0,0,1.04059-2.462q.00274-2.592.00091-5.18475Zm-1.02136,8.90076A2.24665,2.24665,0,0,1,19.53912,21.292a2.59469,2.59469,0,0,1-.52856.04956q-2.60981.00412-5.21777.00183h-8.831a2.25813,2.25813,0,0,1-2.21747-1.64715,2.192,2.192,0,0,1-.08673-.602q-.00623-4.57811-.00366-9.15631l.00043-3.12232q.00074-.93741-.00092-1.87433A2.24477,2.24477,0,0,1,4.40063,2.71875a3.943,3.943,0,0,1,.83277-.06244q2.34275-.00339,4.686-.00275h5.17652q2.00554-.0021,4.012.00184a2.25375,2.25375,0,0,1,2.19684,1.87616,3.01347,3.01347,0,0,1,.03668.46527q.00275,3.50445.00183,7.00946Z M16.25586,7.772H8.01172a.49993.49993,0,0,0-.39258.19043A7.70587,7.70587,0,0,0,6.00977,12a7.70614,7.70614,0,0,0,1.60937,4.03809.49993.49993,0,0,0,.39258.19043h8.29883a.50233.50233,0,0,0,.40332-.20411,7.867,7.867,0,0,0,1.48925-3.99951,8.41656,8.41656,0,0,0-1.542-4.04541A.4984.4984,0,0,0,16.25586,7.772Zm-.21,7.45655H8.26465A6.39772,6.39772,0,0,1,7.00977,12,6.42684,6.42684,0,0,1,8.26514,8.772h7.72412a7.07294,7.07294,0,0,1,1.21386,3.26367A6.546,6.546,0,0,1,16.0459,15.22852Z M13.29688,11.93066A1.46614,1.46614,0,0,0,12.16113,11.5a1.37687,1.37687,0,0,0-1.5166,1.32178v1.62939h2.96l-.002-1.62695A1.23361,1.23361,0,0,0,13.29688,11.93066Zm-.69239,1.52051h-.96V12.8335c.00781-.15186.10449-.3335.5166-.3335a.58578.58578,0,0,1,.39209.1001.24581.24581,0,0,1,.05127.17724Z M10.69189,11.55127h-1V9.75586h1Zm2.811,0h1V9.75586h-1Z",
            keywords: ["infrastructure","light"]
        },
        "sync-box":{
            path:"M17,6.9c0.5,0,0.6-0.3,0.6-0.5c0-0.7-0.2-1.3-0.6-1.6c-0.5-0.4-1.2-0.5-1.8-0.3c-0.6,0.2-1.1,0.7-1.2,1.4 c-0.1,0-0.1,0-0.2,0.1c0-0.1,0-0.1,0-0.2l0-0.7c0-0.2-0.1-0.4-0.2-0.5c-0.1-0.1-0.2-0.1-0.4-0.2c-0.3,0-0.6,0.2-0.6,0.6l0,0.1 c0,0.2,0,0.5,0,0.7l0,0.1c0,0.1,0,0.2,0.1,0.4c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.2-0.1,0.4-0.3,0.5c-0.2,0.1-0.3,0.1-0.5,0.1 c-0.2-0.1-0.3-0.2-0.3-0.5c0-0.1,0-0.1,0-0.2c0-0.1,0-0.1-0.1-0.2c0.1-0.1,0.1-0.2,0.1-0.3l0-0.4l0-0.3l0-0.3 c0-0.5-0.3-0.6-0.6-0.6c-0.2,0-0.4,0.1-0.4,0.2c-0.1,0.1-0.2,0.3-0.2,0.5l0,0.2c0,0.2,0,0.5,0,0.7l0,0.1c0,0.1,0,0.2,0.1,0.3 c0,0.1-0.1,0.1-0.1,0.2c0,0.4,0,0.8,0.3,1.2c0.2,0.3,0.6,0.5,1.1,0.6c0.1,0,0.1,0,0.2,0c0.3,0,0.6-0.1,0.9-0.2c0,0,0.1,0.1,0.1,0.1 c0.2,0.1,0.4,0.1,0.6,0c0.2-0.1,0.3-0.3,0.3-0.5c0-0.3,0-0.6,0-0.9c0.1,0,0.2,0.1,0.2,0.1C14,7.6,14.4,8,15,8.2 c0.3,0.1,0.6,0.2,0.9,0.2c0.3,0,0.7-0.1,1-0.2c0,0,0.1,0,0.1-0.1c0.2-0.1,0.3-0.4,0.3-0.7c-0.1-0.2-0.3-0.4-0.6-0.3 c-0.1,0-0.2,0-0.2,0.1c-0.2,0.1-0.4,0.1-0.7,0.1c-0.3,0-0.5-0.1-0.6-0.4l1.3,0L17,6.9z M15.7,5.8l-0.3,0c-0.1,0-0.2,0-0.3,0 c0,0,0,0-0.1,0c0.1-0.1,0.1-0.2,0.2-0.3c0.2-0.1,0.4-0.2,0.6-0.1c0.1,0,0.3,0.1,0.4,0.4L15.7,5.8z M14,6.5L14,6.5 C14,6.6,14,6.6,14,6.5L14,6.5z M14,6.9l0-0.3c0,0,0,0,0,0c0,0,0,0,0,0L14,6.9C14,6.9,14,6.9,14,6.9z M10,6.7c0-0.1,0-0.3-0.1-0.4C9.9,6.3,10,6.2,10,6.1c0-0.2,0-0.3,0-0.5C9.8,4.8,9.3,4.5,9,4.4C8.5,4.3,8.1,4.3,7.7,4.5 l0-0.7c0-0.1,0-0.2,0-0.3C7.6,3.3,7.3,3.1,7,3.1c-0.3,0-0.5,0.2-0.5,0.5c0,0.1,0,0.2,0,0.3l0,2c0,0.2,0,0.3,0.1,0.5 C6.5,6.4,6.5,6.5,6.5,6.7l0,1.1c0,0.4,0.3,0.6,0.6,0.6c0.4,0,0.6-0.3,0.6-0.6l0-0.9c0-0.2,0-0.4-0.1-0.5c0.1-0.1,0.1-0.2,0.1-0.3 c0-0.2,0.1-0.3,0.1-0.4C8,5.5,8.2,5.4,8.5,5.5c0.2,0.1,0.3,0.3,0.3,0.4c0,0.2,0.1,0.3,0.1,0.4C8.8,6.4,8.8,6.5,8.8,6.7 c0,0.1,0,0.2,0,0.3l0,0.3l0,0.4C8.8,8,8.9,8.1,9,8.2C9,8.3,9.2,8.4,9.4,8.4c0,0,0,0,0,0c0.3,0,0.6-0.2,0.6-0.6l0-0.1 c0-0.2,0-0.5,0-0.7L10,6.7z M6,15.7c0,0,0.4,0,1,0.5C7.7,16.7,7.9,17,7.9,17s3.2,0.1,5.7,0.1c1.3,0,2.3,0,2.8-0.1c0.7-1,1.7-1.3,1.7-1.3v-2.7H6V15.7z M7.6,14.1h8.9v1.1H7.6V14.1z M20.5,1.7H3.6c-1.5,0-2.7,1.2-2.7,2.7v13.8c0,1.5,1.2,2.7,2.7,2.7h16.9c1.5,0,2.7-1.2,2.7-2.7V4.4 C23.2,2.9,22,1.7,20.5,1.7z M19.2,15.8c0,0.5-0.3,0.9-0.8,1.1c-0.1,0-0.7,0.2-1.1,0.9c-0.2,0.3-0.5,0.4-0.8,0.5 c-0.4,0-1.4,0.1-2.9,0.1c-2.5,0-5.7-0.1-5.7-0.1c-0.4,0-0.8-0.2-0.9-0.6c0,0-0.1-0.2-0.5-0.4c-0.3-0.2-0.5-0.3-0.6-0.3 C5.3,16.7,5,16.2,5,15.7v-2.6C5,12.5,5.4,12,6,12h12c0.6,0,1.1,0.5,1.1,1.1V15.8z M22.3,9.4H1.9v-5c0-0.9,0.8-1.7,1.7-1.7h16.9 c0.9,0,1.7,0.8,1.7,1.7V9.4z",
            keywords: ["infrastructure","light"]
        },
        "sync-box-alt":{
            path:"M16.1,11c-0.5-0.3-1.2-0.3-1.8-0.1c0.2,0.1,0.3,0.1,0.5,0.2l0.2,0.1c0,0,0,0,0,0l0.9,0.4c0.1,0,0.1,0,0.1,0 c0.2-0.1,0.3-0.2,0.3-0.3C16.3,11.2,16.2,11.1,16.1,11z M23,10.8L8.6,5.6c0,0-0.5-0.2-1-0.2c-0.5,0-1,0.2-1,0.2L1,8c0,0-0.5,0.2-0.5,0.6v2.8C0.6,11.8,1,12,1,12l14.4,6 c0,0,0.6,0.2,1.3,0.2s1.2-0.3,1.2-0.3l5.1-3c0,0,0.4-0.2,0.4-0.6v-2.8C23.4,11,23,10.8,23,10.8z M8.8,9.5C8.6,9.6,8.3,9.7,8.1,9.8 C7.9,9.9,7.8,9.9,7.7,9.9c-0.1,0-0.1,0-0.2,0c-0.1,0-0.2-0.1-0.2-0.2c0-0.1,0.2-0.2,0.2-0.2L8,9.2c0,0,0,0,0,0l0.1-0.1 c0.1,0,0.2-0.1,0.3-0.1C8.6,9,8.7,9,8.8,9l0.1,0.1c0,0,0,0,0,0c0,0-0.1-0.1-0.1-0.1c0-0.1,0.1-0.2,0.3-0.2c0.2-0.1,0.2-0.2,0.2-0.2 c0,0,0,0-0.1-0.1C9.1,8.3,8.7,8.3,8.3,8.3C8,8.3,7.8,8.4,7.6,8.5c-0.1,0-0.2,0-0.3,0c-0.1,0-0.1,0-0.2-0.1c0,0,0.1,0.1,0.1,0.1 c0,0.1-0.1,0.2-0.3,0.2L6.6,8.9c0,0,0,0,0,0L6.5,8.9C6.3,9,6.2,9,6.1,9.1C6,9.1,5.9,9.1,5.8,9.1c-0.1,0-0.2,0-0.2,0 C5.5,9,5.4,8.9,5.4,8.9c0-0.1,0.1-0.2,0.2-0.2l0.5-0.2c0.2-0.1,0.3-0.1,0.5-0.2c0.1,0,0.2,0,0.3,0c0.1,0,0.1,0,0.2,0.1 C7,8.3,7,8.3,7,8.2C7,8.1,7.1,8.1,7.3,8L9,7.3c0.1,0,0.1,0,0.2-0.1c0.1,0,0.3,0,0.4,0c0,0,0.2,0.1,0.2,0.2c0,0,0,0.1-0.1,0.2 c0,0-0.1,0.1-0.2,0.1L8.9,7.9c0.5,0,0.8,0.1,1.1,0.3c0.1,0.1,0.2,0.2,0.2,0.3c0,0.2-0.1,0.3-0.4,0.5C9.7,9.1,9.6,9.2,9.5,9.2 c0,0-0.1,0-0.1,0c0,0,0,0,0,0l0,0c0,0-0.1,0-0.1,0c-0.1,0-0.1,0-0.1,0c0,0,0.1,0.1,0.1,0.1c0,0.1-0.1,0.1-0.2,0.2 C8.9,9.5,8.9,9.5,8.8,9.5z M11.3,15.2c-0.2,0-0.4-0.2-0.4-0.4c0-0.2,0.2-0.4,0.4-0.4s0.4,0.2,0.4,0.4C11.7,15,11.5,15.2,11.3,15.2z M12.1,10.8c-0.3,0.1-0.5,0.3-0.8,0.4c-0.1,0-0.2,0.1-0.3,0.1c-0.1,0-0.3,0-0.3-0.1c0,0,0-0.1,0-0.2c0,0-0.1,0-0.1,0 c-0.6,0-1.3-0.2-1.5-0.5C8.9,10.2,8.9,10.1,9,10c0.1-0.2,0.4-0.4,0.7-0.6c0.1,0,0.1,0,0.1,0l0.1,0c0.1,0,0.1,0,0.2,0.1 c0,0-0.1-0.1-0.1-0.1c0-0.1,0.1-0.1,0.2-0.2c0,0,0.1,0,0.1-0.1C10.6,9.1,10.8,9,11,8.9l0.1-0.1c0.2-0.1,0.4-0.1,0.5,0 c0.1,0,0.2,0.1,0.2,0.2c0,0.1-0.1,0.2-0.2,0.2l-0.4,0.2c0,0,0,0,0,0l-0.1,0c-0.1,0.1-0.2,0.1-0.4,0.2c-0.1,0-0.1,0-0.2,0 c0,0-0.1,0-0.1,0l-0.1-0.1c0,0,0,0,0,0c0,0,0.1,0,0.1,0.1c0,0.1,0,0.1-0.1,0.2c0,0-0.1,0-0.1,0.1c0,0-0.1,0-0.1,0.1 c-0.1,0.1-0.2,0.1-0.2,0.2c0,0.1,0.3,0.3,0.8,0.3c0.4,0,0.7,0,1-0.2c0.1-0.1,0.3-0.1,0.4,0l0,0c0,0,0,0,0-0.1 c0-0.1,0.1-0.1,0.2-0.2c0,0,0.1,0,0.1-0.1c0.2-0.1,0.5-0.2,0.7-0.3l0,0c0.2-0.1,0.4-0.1,0.5,0c0.1,0,0.2,0.1,0.2,0.2 c0,0.1-0.1,0.2-0.2,0.2l-0.6,0.3c-0.1,0-0.2,0.1-0.3,0.1c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2,0l-0.1,0c0,0,0,0,0,0.1 c0,0.1-0.1,0.1-0.2,0.2L12.1,10.8z M13.8,16.3c-0.1,0-0.1,0.1-0.2,0.1c-0.1,0-0.1,0-0.2,0L12.7,16c0,0-0.4-0.1-0.4-0.8 c0-0.2,0.1-0.3,0.1-0.3c0.2-0.1,0.4-0.1,0.4-0.1l0,0l0.8,0.4c0,0,0.3,0.2,0.3,0.7C14,16.1,13.9,16.2,13.8,16.3z M16.2,12 c-0.2,0.1-0.4,0-0.5,0c-0.2-0.1-0.4-0.1-0.5-0.2l-1.5-0.6c-0.1,0-0.1,0-0.2,0c-0.1,0.1-0.2,0.2-0.2,0.3c0,0.1,0.1,0.2,0.4,0.3 c0.3,0.1,0.6,0.2,1,0.3c0.1,0,0.1,0,0.2,0c0.1,0,0.2,0.1,0.2,0.2c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.2,0.1-0.3,0.1c0,0-0.1,0-0.1,0 c0,0-0.1,0-0.1,0c-0.8-0.1-1.4-0.4-1.7-0.7c-0.2-0.2-0.3-0.3-0.2-0.5c0-0.2,0.1-0.4,0.3-0.5c-0.1,0-0.1-0.1-0.2-0.1 c0-0.1,0-0.2,0.1-0.2c0.1,0,0.2,0,0.2,0c0,0,0,0,0,0c0.1,0,0.1,0,0.2,0c0.2,0.1,0.2,0.1,0.4,0c1.4-0.4,3.1,0,3.3,0.6 C17.2,11.6,16.5,11.9,16.2,12z",
            keywords: ["infrastructure","light"]
        },
        "table-shade":{
            path:"M 14.15625 5.765625 C 12.976562 6.070312 11.039062 6.070312 9.859375 5.765625 C 8.695312 5.46875 8.730469 4.992188 9.910156 4.707031 C 11.074219 4.421875 12.9375 4.421875 14.101562 4.707031 C 15.28125 4.992188 15.316406 5.46875 14.15625 5.765625 M 18.714844 11.199219 L 16.6875 4.269531 L 16.664062 4.195312 C 16.476562 3.761719 15.558594 3.347656 13.914062 3.125 C 12.667969 2.957031 11.398438 2.957031 10.148438 3.125 C 8.507812 3.347656 7.59375 3.761719 7.40625 4.195312 L 7.371094 4.308594 L 5.289062 11.199219 C 5.257812 11.296875 5.242188 11.398438 5.253906 11.5 C 5.425781 12.640625 7.484375 13.5625 11.253906 13.667969 L 11.253906 17.269531 C 9.421875 17.367188 7.957031 17.808594 7.59375 18.375 C 7.53125 18.464844 7.503906 18.5625 7.503906 18.65625 L 7.503906 19.59375 C 7.503906 20.371094 9.519531 21 12.007812 21 C 14.492188 21 16.511719 20.371094 16.511719 19.59375 L 16.511719 18.65625 C 16.511719 17.960938 14.886719 17.382812 12.757812 17.269531 L 12.757812 13.667969 C 16.523438 13.558594 18.578125 12.636719 18.746094 11.496094 C 18.757812 11.398438 18.742188 11.296875 18.714844 11.199219 ",
            keywords: ["lamp","light"]
        },
        "table-wash":{
            path:"M 16.074219 12.121094 C 14.871094 11.144531 13.773438 10.023438 12.8125 8.789062 C 9.851562 4.984375 10.90625 3.710938 14.707031 6.765625 C 15.945312 7.761719 17.070312 8.910156 18.046875 10.175781 C 21.035156 14.066406 19.796875 15.148438 16.074219 12.121094 M 21 12.949219 C 21 12.890625 21 12.828125 20.996094 12.773438 C 20.996094 12.355469 20.816406 11.777344 20.425781 11.050781 C 19.15625 8.660156 16.191406 5.628906 13.851562 4.332031 C 13.191406 3.964844 12.660156 3.777344 12.265625 3.757812 C 12.21875 3.75 12.175781 3.75 12.128906 3.757812 C 12.085938 3.75 12.046875 3.75 12 3.75 C 8.625 3.75 3 9.5 3 12.949219 C 3 16.148438 4.59375 18.960938 7.011719 20.609375 C 7.386719 20.863281 7.828125 21 8.277344 21 L 14.464844 21 C 14.9375 21 15.398438 20.847656 15.785156 20.566406 C 18.472656 18.609375 21 15.261719 21 12.949219 ",
            keywords: ["light"]
        },
        "tap":{
            path:"M11.99976,23.17358A11.17358,11.17358,0,1,1,23.17358,11.99976,11.18623,11.18623,0,0,1,11.99976,23.17358Zm0-21.34716A10.17358,10.17358,0,1,0,22.17358,11.99976,10.18514,10.18514,0,0,0,11.99976,1.82642Z M6.335,15.58765a3.33228,3.33228,0,1,1,3.33252-3.33252A3.3365,3.3365,0,0,1,6.335,15.58765Zm0-5.66455a2.33228,2.33228,0,1,0,2.33252,2.332A2.33508,2.33508,0,0,0,6.335,9.9231Z M17.66553,15.58765a3.33228,3.33228,0,1,1,3.332-3.33252A3.3366,3.3366,0,0,1,17.66553,15.58765Zm0-5.66455a2.33228,2.33228,0,1,0,2.332,2.332A2.3355,2.3355,0,0,0,17.66553,9.9231Z M12,21.14331a3.33252,3.33252,0,1,1,3.33252-3.332A3.33639,3.33639,0,0,1,12,21.14331Zm0-5.665a2.33252,2.33252,0,1,0,2.33252,2.333A2.33561,2.33561,0,0,0,12,15.47827Z",
            keywords: ["light","switch"]
        },
        "upstairs":{
            path:"M 23.293606,10.168994 12.73442,0.61268937 a 0.96430921,0.96430921 0 0 0 -1.369319,0 L 0.80591519,10.168994 a 0.96430921,0.96430921 0 0 0 0.68465951,1.7454 h 1.880403 v 10.607401 a 0.96430921,0.96430921 0 0 0 0.9643092,0.964309 H 19.764234 a 0.96430921,0.96430921 0 0 0 0.964309,-0.964309 V 11.914394 h 1.928619 a 0.96430921,0.96430921 0 0 0 0.636444,-1.7454 z M 18.799925,16.73594 H 5.2995961 V 11.914394 H 18.799925 Z",
            keywords: ["light"]
        },
        "wall-appear":{
            path:"M12.18,0.97c-2.7,0-4.74,1.09-4.74,2.53v2.6L5.85,6.82C5.67,6.9,5.55,7.08,5.55,7.28v10.81c0,0.28,0.22,0.5,0.5,0.5h1.38 v1.92c0,1.44,2.04,2.53,4.74,2.53s4.74-1.09,4.74-2.53v-17C16.92,2.06,14.88,0.97,12.18,0.97z M12.18,22.03 c-2.14,0-3.74-0.81-3.74-1.53s1.6-1.53,3.74-1.53c2.14,0,3.74,0.81,3.74,1.53S14.32,22.03,12.18,22.03z",
            keywords: ["exterior","light"]
        },
        "wall-appear-group":{
            path:"M19.11,0.97c-2.29,0-4.02,0.92-4.02,2.14v2.21l-1.35,0.61c-0.15,0.07-0.25,0.22-0.25,0.39v9.17c0,0.23,0.19,0.42,0.42,0.42 h1.18v1.62c0,1.22,1.73,2.14,4.02,2.14s4.02-0.92,4.02-2.14V3.12C23.13,1.9,21.4,0.97,19.11,0.97z M19.11,18.84 c-1.82,0-3.17-0.68-3.17-1.3c0-0.61,1.36-1.3,3.17-1.3c1.82,0,3.17,0.68,3.17,1.3C22.28,18.15,20.92,18.84,19.11,18.84z M7.72,0.97c-2.7,0-4.74,1.09-4.74,2.53v2.6L1.39,6.82C1.21,6.9,1.09,7.08,1.09,7.28v10.81c0,0.28,0.22,0.5,0.5,0.5h1.38 v1.92c0,1.44,2.04,2.53,4.74,2.53s4.74-1.09,4.74-2.53v-17C12.46,2.06,10.42,0.97,7.72,0.97z M7.72,22.03 c-2.14,0-3.74-0.81-3.74-1.53s1.6-1.53,3.74-1.53c2.14,0,3.74,0.81,3.74,1.53S9.86,22.03,7.72,22.03z",
            keywords: ["exterior","light"]
        },
        "wall-attract":{
            path:"M6.43864,10.54036H7.424L7.12391,13.3179H20.10816s-.33-2.77754-.555-3.9595c-.54649-.18769-4.822-.45525-4.822-.45525V4.51509a.42173.42173,0,0,0-.48221-.434L11.17759,4.483A3.9555,3.9555,0,0,0,7.81434,1.43424H6.54447C4.614,1.63465,3.09857,3.606,3.09857,5.9873c0,2.3379,1.46005,4.29389,3.34007,4.55306Zm4.89818-3.79844,1.04759-.12121-.03215,2.38863c-.52571.00339-1.25907.04669-1.99192.10171A4.94726,4.94726,0,0,0,11.33682,6.74192Z M21.27207,21.48423l-.794-6.90573a.44944.44944,0,0,0-.44652-.39811h-.00013L7.27,14.18464a.44945.44945,0,0,0-.44595.39467L5.99254,21.3502a.44945.44945,0,0,0,.35139.49414,36.79974,36.79974,0,0,0,7.052.67461c.1805,0,.36317-.0014.54708-.00434a50.7892,50.7892,0,0,0,6.957-.53583A.44942.44942,0,0,0,21.27207,21.48423Zm-7.34336.1316a37.553,37.553,0,0,1-6.99285-.57241l.73188-5.96,11.96311-.004.69854,6.07553A54.30735,54.30735,0,0,1,13.92871,21.61583Z M14.96976,15.72824H12.15124a.44945.44945,0,1,0,0,.8989h2.81852a.44945.44945,0,0,0,0-.8989ZM14.96976,17.27322H12.15124a.44945.44945,0,0,0,0,.8989h2.81852a.44945.44945,0,0,0,0-.8989ZM14.96976,18.8182H12.15124a.44945.44945,0,1,0,0,.8989h2.81852a.44945.44945,0,0,0,0-.8989Z",
            keywords: ["exterior","light"]
        },
        "wall-econic":{
            path:"M 10.228516 1.3710938 L 3.9121094 2.3828125 L 3.8886719 21.894531 L 10.183594 22.882812 L 21.265625 20.074219 L 21.265625 4.1816406 L 10.228516 1.3710938 z M 19.791016 5.65625 L 19.880859 18.626953 L 17.003906 18.357422 L 16.980469 16.849609 L 11.541016 17.525391 L 11.113281 17.501953 L 11.091797 6.7792969 L 11.517578 6.7578125 L 17.003906 7.4316406 L 17.003906 5.9492188 L 19.791016 5.65625 z M 10.035156 6.8242188 L 10.035156 17.480469 L 8.3945312 17.367188 L 8.3496094 6.9140625 L 10.035156 6.8242188 z ",
            keywords: ["exterior","light"]
        },
        "wall-econic-lantern":{
            path:"M20.68082,4.61589S15.244,1.83943,11.955,1.36817c-3.02637.89111-7.30016,4.01492-7.30016,4.01492l-.15251.512s1.73213,8.37745,2.01372,9.95084a3.35723,3.35723,0,0,0-1.8782,3.639c.44011,2.673,2.26949,2.8173,3.05207,2.77817a2.80668,2.80668,0,0,0,2.69948-2.50427c.61528-.06642,1.74061-.12812,1.74061-.12812a1.92817,1.92817,0,0,0,.25541.47625,3.49527,3.49527,0,0,0,.63526.004,4.10224,4.10224,0,0,0,.69513-1.65263,27.34945,27.34945,0,0,0,4.89278-.69368c.47027-2.16166,2.307-12.601,2.307-12.601ZM5.96435,7.21284l1.34976.31392-.14072-.62451L5.87024,6.58083,11.67229,3.7664l.19485,7.36069-4.817,1.11925Zm4.42508,11.36177v-.20567l1.18544.10825.07577.22732ZM9.29085,16.62617l-.08659-.40052a1.64346,1.64346,0,0,0-.60463-.40871,2.09812,2.09812,0,0,0-.78094-.15417l-.50876-2.284,1.30647.15155-.11907-.59536L7.76457,12.87l4.1284-.9201.08241,4.42731Zm8.10772.04329-4.3322-.36618.09935-4.35339,4.31945.73608-.70361.0866-.0866.58453,1.36392-.1732Zm1.916-9.99121L18.3012,12.04731l-5.061-.98428L13.3644,3.7664l6.03674,2.284-1.33144.48711-.14072.58453Z",
            keywords: ["exterior","light"]
        },
        "wall-econic-lantern-base":{
            path:"M20.4141,3.2698l-0.1387-0.1074c-0.0752-0.0586-1.9092-1.438-6.5498-1.5332 c-2.655-0.0817-5.309,0.1927-7.8911,0.8159L5.5195,2.532L5.373,3.5457l2.5425,10.3271l0.0869,0.0947 c0.7241,0.7999,1.6417,1.4001,2.6646,1.7432c0,0,0,0,0.5516,0.1803c0.0983,0.0321,0.2166,0.0389,0.3401,0.0366 c0.0486,0.1738,0.1598,0.5635,0.2984,0.9933c-1.3612-0.043-2.937-0.2532-4.2775-1.248C7.3839,13.8092,6.7747,12.44,6.0447,12.44 H4.4378c-0.8875,0-1.6069,2.0115-1.6069,4.4929c0,2.4813,0.7194,4.4929,1.6069,4.4929h1.6069c0.627,0,1.1642-1.0137,1.429-2.4778 c1.1658-0.5608,1.2267-1.0876,4.7858-0.9318c0.1224,0.2766,0.2438,0.4892,0.3496,0.5598c0.417,0.278,0.6603,0.0347,0.7645,0 c0.1042-0.0349,1.112-1.4595,1.1467-2.7452c0.0045-0.1678-0.0439-0.3139-0.1281-0.4418c1.9343-0.2733,3.3022-0.4531,3.3851-0.6518 c0.0918-0.2207,1.8086-6.6343,2.8242-10.4375l0.0322-0.123L20.4141,3.2698z M7.1503,4.2009l2.408,0.8212l0.6448,5.2141 L8.3664,9.2744L7.1503,4.2009z M9.1908,12.7136l-0.515-2.1483l1.6766,0.8783l0.2776,2.2449L9.1908,12.7136z M16.173,13.4036 l-4.4404,0.5605l-0.267-2.5151l5.3336-0.4952L16.173,13.4036z M17.0621,9.9247l-5.7023,0.5294l-0.5573-5.2483l7.5752-0.4287 L17.0621,9.9247z",
            keywords: ["exterior","light"]
        },
        "wall-econic-lantern-top":{
            path:"M20.4031,9.4608l-0.1387-0.1074c-0.0752-0.0586-1.9092-1.438-6.5498-1.5332 c-0.1898-0.0059-0.3793,0.0037-0.5691,0.0015c-0.0087-0.1848-0.0176-0.3087-0.0176-0.3087 c-0.029-1.2857-0.8696-2.7104-0.9566-2.7452c-0.0869-0.0347-0.2898-0.278-0.6376,0c-0.0883,0.0706-0.1896,0.2833-0.2916,0.5598 C8.2732,5.4834,7.5494,4.9013,7.25,4.3958C7.0291,2.9318,6.581,1.918,6.058,1.918H4.7176c-0.7404,0-1.3405,1.0115-1.3405,3.4929 c0,2.4814,0.6001,5.4929,1.3405,5.4929h0.9318l2.2552,9.1601l0.0869,0.0947c0.7241,0.7999,1.6417,1.4001,2.6646,1.7432 l0.5516,0.1803c0,0,1.3414-0.221,1.6476-0.2808c2.7178-0.4092,4.8076-0.625,4.9111-0.873 c0.0918-0.2207,1.8086-6.6343,2.8242-10.4375l0.0322-0.123L20.4031,9.4608z M10.9063,6.4229 c-0.0965,0.3588-0.1978,0.8646-0.2645,1.4782C9.5078,7.9837,8.38,8.1274,7.2621,8.3394c0.0304-0.2142,0.056-0.4375,0.0763-0.6686 C8.4565,6.6761,9.7709,6.4659,10.9063,6.4229z M7.1393,10.3918l2.408,0.8212l0.6448,5.2141l-1.8367-0.9617L7.1393,10.3918z M9.1798,18.9046l-0.515-2.1483l1.6766,0.8783l0.2776,2.2449L9.1798,18.9046z M16.162,19.5945l-4.4404,0.5605l-0.267-2.5151 l5.3336-0.4952L16.162,19.5945z M17.0512,16.1157l-5.7023,0.5294l-0.5573-5.2483l7.5752-0.4287L17.0512,16.1157z",
            keywords: ["exterior","light"]
        },
        "wall-flood":{
            path:"m 6.7594968,4.0769594 c -0.8647624,-0.00299 -1.2923207,0.771954 -1.3378906,0.972656 -0.052079,0.229374 -0.7910157,3.369141 -0.7910157,3.369141 L 4.3688718,8.3406314 c -0.489466,-0.146841 -0.7636719,-0.027344 -0.7636719,-0.027344 0,0 -1.4215279,0.448484 -1.7636719,0.580078 -0.342141,0.131593 -0.3945312,0.578125 -0.3945312,0.578125 V 18.42071 c 0,0.57901 0.6054687,0.630859 0.6054687,0.630859 l 7.6582029,0.527344 c 0,0 0.9211806,-0.159519 1.6054686,-0.34375 0.684289,-0.184231 0.630859,-0.761719 0.630859,-0.761719 0,0 5.869376,0.500094 6.527344,0.552734 0.657969,0.05264 1.052734,-0.84375 1.052734,-0.84375 0,0 2.631441,-7.631868 2.947266,-8.7109376 0.315825,-1.079068 -0.5,-1.447265 -0.5,-1.447265 0,0 -13.6846997,-3.605026 -14.8164057,-3.894531 -0.1414633,-0.036189 -0.2749,-0.052308 -0.3984375,-0.052735 z m 2.1816406,1.996094 12.1757806,2.951172 c 0,0 0.21079,0.188087 0.25586,0.314453 0.05823,0.163241 0,0.519531 0,0.519531 l -2.613282,7.4765626 c -0.214559,0.330481 -0.40539,0.620222 -0.826172,0.654297 -0.232969,-0.0014 -11.6328116,-1.484375 -11.6328116,-1.484375 0,0 -0.4136858,-0.03294 -0.5800781,-0.330078 -0.2040607,-0.364405 -0.070312,-0.683594 -0.070312,-0.683594 L 7.9176999,6.7253974 c 0,0 0.1613906,-0.380889 0.3261719,-0.494141 0.1946648,-0.133788 0.6972656,-0.158203 0.6972656,-0.158203 z",
            keywords: ["exterior","light"]
        },
        "wall-fuzo":{
            path:"m 10.92038,1.7460531 -4.9393159,0.9306006 0.015527,9.6397043 0.015527,9.639704 4.9594269,0.864508 0.819002,-0.182028 v -0.818905 l 4.68646,-0.864522 2.659726,0.255402 0.500522,-0.119005 c 0.006,-1.906282 -0.0096,-12.5681499 -0.02087,-16.2887343 L 19.115955,4.620722 16.340468,4.8936999 11.745031,3.392216 V 2.0584872 Z m 0.824668,2.7832796 6.916385,1.923556 0.0038,10.9532613 -6.874744,0.454991 z",
            keywords: ["exterior","light"]
        },
        "wall-fuzo-h":{
            path:"M 12.90625,1.3671875 2.3847656,5.8808594 2.3515625,20.21875 12.271484,22.03125 22.285156,19.615234 V 6.3261719 L 21.521484,5.9453125 19.074219,6.7402344 19.105469,8.9648438 14.009773,6.6056662 V 4.2541037 1.9005881 Z m 1.093031,12.7091815 5.106188,1.595506 0.03125,3.08252 c 0,0 -0.0042,0.116765 -0.07617,0.216797 -0.072,0.100033 -0.240235,0.132812 -0.240235,0.132812 L 13.06661,20.593589 7.1523458,19.455078 14.009775,17.636916 Z",
            keywords: ["exterior","light"]
        },
        "wall-impress":{
            path:"M10.354,1.019,4.707,2.176v19.4l5.647,1.158,9.435-2.315V3.264ZM9.347,21.046l-3.521-.6v-.354L8.8,19.542V4.066L5.826,3.547V3.3l3.521-.6Zm9.6-15.994V18.458l-2.841-.581v.854l2.841.632L11.3,21.046V2.7l7.646,1.579L16.071,4.7v.736Z",
            keywords: ["exterior","light"]
        },
        "wall-impress-narrow":{
            path:"M 13.367188,0.59960938 5.0488281,2.5800781 5.0253906,3.9140625 c 0,0 -0.299426,0.076966 -0.375,0.1308594 -0.075577,0.053893 -0.068359,0.1816406 -0.068359,0.1816406 L 4.515625,20.550781 c 0,0 0.017649,0.103667 0.087891,0.154297 0.070242,0.05063 0.3339844,0.06641 0.3339844,0.06641 l 0.021484,1.113282 8.4082036,1.578125 5.404296,-1.355469 V 3.4023438 Z m 0.888671,1.92187502 3.572266,1.7675781 v 0.1777344 l -2.382813,0.4960937 v 0.5957032 l 2.044922,-0.3574219 0.02148,15.0527341 -2.017578,-0.330078 0.01172,0.585938 2.283204,0.355468 -10e-7,0.199219 -3.533203,0.65625 z m -2.177734,0.00977 -0.03125,19.1249996 -5.96875,-0.921875 0.015625,-0.1875 2.28125,-0.375 V 4.8125 L 6.140625,3.984375 c 0,0 0,-0.265625 0.28125,-0.328125 0.28125,-0.0625 5.65625,-1.125 5.65625,-1.125 z",
            keywords: ["exterior","light"]
        },
        "wall-lantern":{
            path:"M 16.332031 18.414062 C 15.34375 18.089844 13.90625 18.089844 12.917969 18.410156 L 12.101562 12.59375 C 13.710938 12.796875 15.539062 12.796875 17.148438 12.59375 Z M 19.1875 9.566406 C 18.015625 9.214844 16.488281 9.03125 14.941406 9.007812 C 14.578125 6.464844 12.390625 4.5 9.75 4.5 C 8.59375 4.5 7.527344 4.882812 6.65625 5.515625 C 6.597656 5.027344 6.515625 4.566406 6.398438 4.171875 C 6.207031 3.503906 5.96875 3.125 5.71875 3.027344 C 5.679688 3.007812 5.632812 3 5.589844 3 L 4.160156 3 C 4.117188 3 4.074219 3.007812 4.03125 3.027344 C 3.773438 3.125 3.527344 3.535156 3.332031 4.246094 C 2.890625 5.847656 2.890625 8.410156 3.332031 10.007812 C 3.527344 10.714844 3.773438 11.125 4.03125 11.222656 C 4.074219 11.242188 4.117188 11.25 4.160156 11.25 L 5.589844 11.25 C 5.632812 11.25 5.679688 11.242188 5.71875 11.222656 C 5.96875 11.125 6.207031 10.746094 6.398438 10.078125 C 6.613281 9.328125 6.726562 8.359375 6.742188 7.375 C 7.449219 6.484375 8.527344 5.898438 9.75 5.898438 C 11.625 5.898438 13.1875 7.25 13.527344 9.03125 C 12.253906 9.097656 11.035156 9.273438 10.058594 9.566406 C 7.589844 10.3125 7.667969 11.5 10.175781 12.21875 C 10.289062 12.25 10.421875 12.273438 10.542969 12.304688 L 11.625 19.988281 C 11.714844 20.324219 12.25 20.734375 13.484375 20.917969 C 13.863281 20.972656 14.246094 21 14.625 21 C 15.007812 21 15.390625 20.972656 15.769531 20.917969 C 17 20.734375 17.507812 20.324219 17.625 19.992188 L 18.707031 12.304688 C 18.828125 12.273438 18.960938 12.25 19.078125 12.21875 C 21.582031 11.5 21.660156 10.3125 19.1875 9.566406 Z M 19.1875 9.566406 ",
            keywords: ["exterior","light"]
        },
        "wall-lucca":{
            path:"M22.402,16.68988a.24924.24924,0,0,0-.02735-.08569c-.84838-1.59064-5.91864-1.82819-8.86547-1.82825l-.51911.00232a34.943,34.943,0,0,0-7.60583.86218c.02539-.46411.06921-1.27307.08343-1.58008.08338-.24932,1.68421-1.33465,7.489-1.4552.17431-.0025.34765-.00372.5169-.00372,5.19623,0,7.093,1.1618,7.16663,1.49048.04053.52948.08154.96.08154.96a.25.25,0,0,0,.33185.21216c.12988-.04572,1.26892-.46918,1.26892-1.256a5.16452,5.16452,0,0,0-.06683-1.17469.24964.24964,0,0,0-.0492-.10376A3.38994,3.38994,0,0,0,20.85,11.78088l.01275-.00366a2.852,2.852,0,0,0,1.34729-1.24029.24979.24979,0,0,0,.03076-.12018,10.56965,10.56965,0,0,0-.06347-1.15607.25078.25078,0,0,0-.02466-.07916,2.58207,2.58207,0,0,0-1.12952-1.04633c.44727-.25683,1.13605-.75842,1.13605-1.41174a3.816,3.816,0,0,0-.048-.86432c-.00995-.05322-.022-.11743-.03644-.21344a.24891.24891,0,0,0-.017-.0603c-.64825-1.53217-3.17639-2.31214-7.95624-2.45459-.46423-.01386-.89508-.02039-1.29657-.02039a19.59663,19.59663,0,0,0-5.98516.81641c-1.79657.50586-2.957,1.684-2.97614,2.0487L3.84,6.04688c-.01142.21185-.03.55981-.03.81781a1.28574,1.28574,0,0,0,.06842.40521L1.68726,8.51044a.25.25,0,0,0-.12684.21753V19.63971a.25.25,0,0,0,.22468.24872l9.81475.99988.02533.00128a.25082.25082,0,0,0,.08643-.01538c.01532-.00568,1.54175-.56733,3.118-1.087,4.62836-.06329,7.52362-1.17914,7.554-2.18036a1.6465,1.6465,0,0,1,.03588-.37982A1.27976,1.27976,0,0,0,22.402,16.68988Zm-1.666,1.1059c.00159.0177-.02221.04577-.03247.057-.62335.68079-5.16327.987-8.18786.987-5.9065,0-7.14631-.50915-7.14631-.93628,0-.65271,3.01435-1.354,8.05872-1.39788l.3385-.00147C18.0578,16.50409,20.68,17.16083,20.736,17.79578Zm-.44677-9.98792a23.35911,23.35911,0,0,0-7.27655-.8855A28.32291,28.32291,0,0,0,5.64929,7.95978a7.42807,7.42807,0,0,1,.05762-1.10053C5.80725,6.49384,7.40649,5.013,12.917,5.013l.31769.00159c6.39508.06268,6.97363,1.522,6.97662,1.53674C20.21069,6.76208,20.25885,7.41626,20.28925,7.80786Zm.28643,3.86475c-1.88043-.69141-4.73675-.77234-7.34015-.84613l-.23608-.00672q-.23629-.00676-.47577-.00665a32.53219,32.53219,0,0,0-7.00281.95258l.049-1.33979c.07421-.31714,1.64257-1.63641,7.48364-1.63641,5.95965,0,7.39129,1.21881,7.42291,1.64575.02069.27918.02539.40387.03058.54151.005.1333.0105.27838.03052.57885A.24992.24992,0,0,0,20.57568,11.67261Z",
            keywords: ["exterior","light"]
        },
        "wall-lucca-alt":{
            path:"M22.98,10.56c0-0.45-0.34-0.81-1.03-1.1V8.54c0.08-0.03,0.16-0.07,0.24-0.11c0.53-0.27,0.79-0.61,0.79-1 c0-0.4-0.27-0.73-0.79-1c-0.62-0.32-1.66-0.57-3.06-0.73c-0.63-0.07-1.33-0.13-2.07-0.17c-0.82-0.04-1.52-0.06-1.93-0.06 c0,0,0,0,0,0L7.26,4.03c-0.03,0-0.05-0.01-0.08,0L1.4,4.9c-0.02,0-0.04,0.03-0.06,0.04c-0.01,0.01-0.03,0-0.05,0.01 C1.27,4.96,1.26,4.98,1.25,4.99C1.25,5,1.24,5,1.23,5c0,0,0,0.01,0,0.01C1.2,5.05,1.19,5.1,1.19,5.15l0.02,9.72 c0,0.11,0.07,0.21,0.17,0.24l5.39,1.87c0.34,1.62,5.73,1.81,8.1,1.81c2.44,0,8.13-0.19,8.13-1.97c0-0.45-0.34-0.81-1.03-1.1V14.8 c0.68-0.29,1.03-0.66,1.03-1.1c0-0.45-0.34-0.81-1.03-1.1v-0.92C22.65,11.37,22.98,11.01,22.98,10.56z M20.45,15.57 c0,0.01,0,0.02,0,0.03v0.86c0,0.01,0,0.02,0,0.03v0.49c-0.79,0.17-2.61,0.48-5.6,0.48c-2.97,0-4.79-0.3-5.57-0.47v-1.77 c2.15,0.41,5,0.43,5.57,0.43c0.35,0,3.39-0.01,5.6-0.44V15.57z M20.45,12.44c0,0.01,0,0.02,0,0.03v0.86c0,0.01,0,0.02,0,0.03v0.49 c-0.78,0.17-2.6,0.48-5.6,0.48c-2.97,0-4.79-0.3-5.57-0.47v-1.77c2.21,0.42,5.22,0.44,5.57,0.44c0.35,0,3.39-0.01,5.6-0.44V12.44z M20.45,10.72c-0.79,0.17-2.61,0.48-5.6,0.48c-2.97,0-4.79-0.3-5.57-0.47V8.96c2.21,0.42,5.22,0.44,5.57,0.44l0.22,0 c0.45,0,1.16-0.02,1.98-0.06c0.74-0.04,1.44-0.1,2.07-0.17c0.47-0.06,0.92-0.12,1.33-0.21V10.72z M14.85,8.07 c-0.5,0-0.97-0.01-1.41-0.02c-0.84-0.03-1.63-0.08-2.37-0.17c-0.34-0.04-0.66-0.08-0.94-0.12c-0.61-0.1-1.15-0.21-1.52-0.33 c0.17-0.06,0.41-0.12,0.74-0.19c0.23-0.05,0.49-0.1,0.77-0.14c0.61-0.1,1.3-0.17,2.05-0.22c0.84-0.06,1.74-0.09,2.68-0.09 c3.19,0,5.36,0.36,6.26,0.64C20.21,7.71,18.05,8.07,14.85,8.07z",
            keywords: ["exterior","light"]
        },
        "wall-lucca-alt-below":{
            path:"M21.95,11.15v-0.92c0.69-0.29,1.03-0.65,1.03-1.1c0-0.44-0.35-0.82-1.03-1.1V7.09c0.69-0.29,1.03-0.65,1.03-1.1 c0-1.78-5.69-1.97-8.13-1.97c-2.37,0-7.76,0.18-8.1,1.81L1.37,7.7C1.27,7.74,1.2,7.84,1.2,7.95l-0.02,9.72 c0,0.05,0.02,0.09,0.05,0.13c0,0,0,0.01,0,0.01c0,0.01,0.01,0.01,0.02,0.01c0.01,0.02,0.02,0.03,0.04,0.05 c0.01,0.01,0.03,0,0.05,0.01c0.02,0.01,0.04,0.03,0.06,0.04l5.78,0.88c0.03,0,0.06,0,0.08,0l7.86-1.44c0,0,0,0,0,0 c0.41,0,1.11-0.01,1.93-0.06c0.74-0.04,1.44-0.1,2.07-0.17c1.41-0.17,2.44-0.41,3.06-0.73c0.53-0.27,0.79-0.61,0.79-1 c0-0.4-0.27-0.73-0.79-1c-0.07-0.04-0.15-0.07-0.24-0.11v-0.92c0.69-0.29,1.03-0.65,1.03-1.1C22.98,11.8,22.65,11.44,21.95,11.15z M20.45,7.6c-2.21-0.43-5.25-0.44-5.6-0.44c-0.57,0-3.42,0.02-5.57,0.43V5.82c0.79-0.17,2.61-0.47,5.57-0.47 c2.99,0,4.81,0.31,5.6,0.48v0.49c0,0.01,0,0.02,0,0.03v0.86c0,0.01,0,0.02,0,0.03V7.6z M20.45,10.73c-2.21-0.43-5.25-0.44-5.6-0.44 c-0.35,0-3.37,0.01-5.57,0.44V8.95c0.79-0.17,2.6-0.47,5.57-0.47c3,0,4.82,0.31,5.6,0.48v0.49c0,0.01,0,0.02,0,0.03v0.86 c0,0.01,0,0.02,0,0.03V10.73z M20.45,13.86c-0.41-0.08-0.86-0.15-1.33-0.21c-0.63-0.07-1.33-0.13-2.07-0.17 c-0.82-0.04-1.53-0.06-1.98-0.06l-0.22,0c-0.35,0-3.37,0.01-5.57,0.44v-1.77c0.79-0.17,2.61-0.47,5.57-0.47 c2.99,0,4.81,0.31,5.6,0.48V13.86z M21.11,15.38c-0.9,0.29-3.06,0.64-6.26,0.64c-0.94,0-1.84-0.03-2.68-0.09 c-0.75-0.05-1.44-0.13-2.05-0.22c-0.29-0.04-0.55-0.09-0.77-0.14c-0.33-0.07-0.57-0.13-0.74-0.19c0.37-0.12,0.9-0.23,1.52-0.33 c0.29-0.04,0.6-0.09,0.94-0.12c0.74-0.08,1.53-0.14,2.37-0.17c0.45-0.02,0.92-0.02,1.41-0.02C18.05,14.74,20.21,15.1,21.11,15.38z",
            keywords: ["exterior","light"]
        },
        "wall-nyro":{
            path:"M 2.2579136,18.177743 4.4000009,18.301324 18.653119,17.189089 18.570734,12.081035 4.7501474,9.6505893 4.7453954,8.45986 9.0345683,7.3231269 22.154856,11.030587 22.444578,10.96878 22.443235,9.6093832 9.0757641,4.7690859 2.2375647,6.7669926 Z",
            keywords: ["exterior","light"]
        },
        "wall-resonate":{
            path:"M8.54261.5316,5.08721,3.75092l-.03343,19.032,11.51933.6855,3.76322-1.22974V2.34394Zm7.89248,21.866-9.2006-.59342,2.08-.99549,9.751.72935Z",
            keywords: ["exterior","light"]
        },
        "wall-shade":{
            path:"M 16.398438 5.769531 C 15.21875 6.074219 13.285156 6.074219 12.101562 5.769531 C 10.941406 5.46875 10.976562 4.992188 12.152344 4.699219 C 13.316406 4.414062 15.179688 4.414062 16.34375 4.699219 C 17.523438 4.992188 17.5625 5.46875 16.398438 5.769531 M 20.964844 11.0625 L 18.9375 4.246094 L 18.914062 4.175781 C 18.726562 3.75 17.808594 3.34375 16.164062 3.125 C 14.917969 2.957031 13.648438 2.957031 12.398438 3.125 C 10.757812 3.34375 9.84375 3.75 9.65625 4.175781 L 9.621094 4.289062 L 7.539062 11.0625 C 7.507812 11.15625 7.492188 11.257812 7.503906 11.359375 C 7.671875 12.464844 9.675781 13.355469 13.339844 13.484375 C 12.847656 15.222656 11.246094 16.5 9.351562 16.5 C 8.363281 16.5 7.453125 16.148438 6.738281 15.566406 C 6.707031 14.492188 6.597656 13.449219 6.398438 12.632812 C 6.207031 11.84375 5.96875 11.394531 5.71875 11.28125 C 5.679688 11.257812 5.632812 11.25 5.589844 11.25 L 4.160156 11.25 C 4.117188 11.25 4.074219 11.257812 4.03125 11.28125 C 3.773438 11.398438 3.527344 11.882812 3.332031 12.722656 C 2.890625 14.613281 2.890625 17.640625 3.332031 19.53125 C 3.527344 20.371094 3.773438 20.851562 4.03125 20.96875 C 4.074219 20.992188 4.117188 21 4.160156 21 L 5.589844 21 C 5.632812 21 5.679688 20.992188 5.71875 20.96875 C 5.96875 20.851562 6.207031 20.40625 6.398438 19.613281 C 6.558594 18.964844 6.65625 18.171875 6.707031 17.339844 C 7.5 17.757812 8.398438 18 9.351562 18 C 12.078125 18 14.355469 16.0625 14.882812 13.492188 C 18.726562 13.402344 20.828125 12.488281 20.996094 11.355469 C 21.007812 11.257812 20.992188 11.160156 20.964844 11.0625 ",
            keywords: ["lamp","light"]
        },
        "wall-spot":{
            path:"M 17.542969 16.136719 C 16.113281 17.179688 14.496094 17.398438 13.9375 16.621094 C 13.375 15.84375 14.078125 14.371094 15.511719 13.328125 C 16.941406 12.285156 18.554688 12.070312 19.117188 12.84375 C 19.679688 13.621094 18.972656 15.09375 17.542969 16.136719 M 20.710938 12.449219 L 14.152344 4.945312 C 13.480469 4.078125 11.503906 4.515625 9.742188 5.929688 C 7.980469 7.339844 7.046875 9.441406 7.71875 10.3125 L 8.375 11.25 L 6.730469 11.25 C 6.691406 10.34375 6.582031 9.472656 6.398438 8.777344 C 6.207031 8.046875 5.964844 7.632812 5.71875 7.527344 C 5.679688 7.507812 5.632812 7.5 5.589844 7.5 L 4.160156 7.5 C 4.117188 7.5 4.074219 7.507812 4.03125 7.527344 C 3.773438 7.636719 3.527344 8.085938 3.332031 8.859375 C 2.890625 10.605469 2.890625 13.402344 3.332031 15.144531 C 3.527344 15.917969 3.773438 16.363281 4.03125 16.472656 C 4.074219 16.492188 4.117188 16.5 4.160156 16.5 L 5.589844 16.5 C 5.632812 16.5 5.679688 16.492188 5.71875 16.472656 C 5.964844 16.367188 6.207031 15.953125 6.398438 15.21875 C 6.582031 14.527344 6.691406 13.65625 6.730469 12.75 L 9.425781 12.75 L 13.136719 18.046875 C 13.964844 19.210938 16.335938 18.898438 18.425781 17.351562 C 20.519531 15.808594 21.542969 13.613281 20.710938 12.449219 ",
            keywords: ["light"]
        },
        "wall-switch-module":{
            path:"M9.68,10.28h4.7v1h-4.7V10.28z M9.64,14.23h4.74v-2.12H9.64V14.23z M22.2,6.12c0-0.02-0.01-0.04-0.01-0.06v-0.9V4.59c0-0.1-0.03-0.2-0.09-0.28l-0.64-0.94c-0.09-0.14-0.25-0.22-0.41-0.22 h-1.33c-0.15,0-0.3,0.07-0.39,0.19l-0.49,0.63h-2.66l-0.6-0.65c-0.09-0.1-0.23-0.16-0.37-0.16H3.03c-0.15,0-0.29,0.06-0.38,0.18 L2.03,4.05C1.95,4.14,1.91,4.26,1.91,4.38v0.71v10.23c0,0.08,0.02,0.15,0.05,0.22c0.03,0.06,3.1,6.23,9.86,6.23 c0.02,0,0.05,0,0.07,0c6.78-0.04,10.1-5.75,10.24-5.99c0.04-0.08,0.07-0.16,0.07-0.25V6.15C22.2,6.14,22.2,6.13,22.2,6.12z  M13.12,5.63l-0.33,1.3h-1.72l-0.26-1.31L13.12,5.63z M11.88,20.75c-0.02,0-0.04,0-0.06,0c-5.67,0-8.51-4.82-8.91-5.57V6.09 c0,0,0-0.01,0-0.01c0-0.06,0.02-0.25,0.13-0.36c0.08-0.08,0.22-0.13,0.41-0.13c0.01,0,0.01,0,0.02,0l6.32,0.03l0.38,1.91 c0.05,0.23,0.25,0.4,0.49,0.4h2.51c0.23,0,0.43-0.15,0.48-0.38l0.49-1.92l6.55,0.03c0,0,0,0,0,0c0.04,0.01,0.27,0.02,0.39,0.13 c0.02,0.02,0.08,0.09,0.1,0.27v9.32C20.72,16.14,17.6,20.72,11.88,20.75z",
            keywords: ["switch"]
        },
        "wall-tuar":{
            path:"M21.28112,2.62424l-.00063-.007c-.02055-.60157-.80063-.96151-2.678-1.23812a40.484,40.484,0,0,0-5.60186-.3427,40.48425,40.48425,0,0,0-5.6019.3427c-1.87464.27621-2.65518.63552-2.67787,1.23554l-.00059.00616c-.00273.05906-.02388.5185-.05211,1.17555l-1.84763.28322a.33874.33874,0,0,0-.28738.33887l.17693,14.90593a.33864.33864,0,0,0,.18036.29545l5.39622,2.853a.338.338,0,0,0,.09784.03383,33.54607,33.54607,0,0,0,4.22289.442q.42345.01488.81784.01491c2.56122,0,4.21866-.47088,4.9313-1.40284a.33877.33877,0,0,0,.06965-.20577V16.48928c.07576-.01733.15163-.0346.226-.05267a9.50571,9.50571,0,0,0,1.76555-.58415c.37154-.1771.86452-.46563.8725-.93.01032-.2569.17534-4.38889.17657-5.81912C21.46819,7.49691,21.2888,2.82245,21.28112,2.62424ZM18.15,11.47135a32.84807,32.84807,0,0,1-5.14046.3808,30.42959,30.42959,0,0,1-5.165-.42129,6.42479,6.42479,0,0,1-2.36215-.70954.44811.44811,0,0,0-.04219-.10576c-.02259-.62674-.03791-1.18643-.03817-1.55719-.00026-.34821.01028-.85277.02688-1.42785.06226.02656.11791.0478.161.06418a9.85287,9.85287,0,0,0,1.7622.4363,34.76912,34.76912,0,0,0,5.61232.4121,34.84509,34.84509,0,0,0,5.68165-.435,10.36235,10.36235,0,0,0,1.80662-.45132c.02529-.00958.05489-.02083.08744-.03371.01445.59614.02367,1.12021.02337,1.47947-.00033.3771-.01267.95623-.03066,1.605a.4485.4485,0,0,0-.04049.10112A6.47712,6.47712,0,0,1,18.15,11.47135Zm2.36206-4.88728a.44375.44375,0,0,0-.01861.053,6.67971,6.67971,0,0,1-2.36854.64163,34.78534,34.78534,0,0,1-5.16054.36106,35.4088,35.4088,0,0,1-5.09415-.3402A5.98322,5.98322,0,0,1,5.571,6.68323a.45112.45112,0,0,0-.10526-.18864c.03882-1.09675.087-2.24569.11972-2.99622a9.43556,9.43556,0,0,0,1.81329.40581,40.48425,40.48425,0,0,0,5.6019.3427,40.484,40.484,0,0,0,5.60186-.3427,9.47806,9.47806,0,0,0,1.80716-.40351C20.43767,4.27147,20.4792,5.45963,20.51206,6.58407ZM7.91146,2.22037a41.78849,41.78849,0,0,1,5.08921-.28059,41.78827,41.78827,0,0,1,5.08917.28059,9.66719,9.66719,0,0,1,2.03476.42127,9.66719,9.66719,0,0,1-2.03476.42127,41.78827,41.78827,0,0,1-5.08917.28059,41.78849,41.78849,0,0,1-5.08921-.28059A9.667,9.667,0,0,1,5.8767,2.64164,9.667,9.667,0,0,1,7.91146,2.22037Zm12.47872,12.6008a6.01346,6.01346,0,0,1-2.272.812,24.423,24.423,0,0,1-5.10862.52173,22.87875,22.87875,0,0,1-5.11167-.56254,5.87984,5.87984,0,0,1-2.26978-.8586c-.01587-.30249-.08544-1.643-.14327-2.99465a9.66634,9.66634,0,0,0,1.833.51182,30.35241,30.35241,0,0,0,5.69172.50462,32.53423,32.53423,0,0,0,5.663-.45826,10.10176,10.10176,0,0,0,1.79241-.46819l.03413-.01359C20.45525,13.16372,20.40287,14.50111,20.39018,14.82117Z",
            keywords: ["exterior","light"]
        },
        "wall-turaco":{
            path:"M 9.1060342,23.182561 C 8.977289,23.124937 8.0253213,22.703991 6.9905502,22.247125 5.8044175,21.723431 5.0909078,21.398985 5.0597891,21.369172 5.0326416,21.343162 5.0008224,21.292832 4.9890798,21.257329 4.968307,21.194521 4.9777468,1.7267865 4.9985601,1.7059732 5.0029802,1.7015531 5.2037658,1.6658299 5.4447502,1.6265882 5.6857347,1.5873466 6.6729309,1.4254002 7.6385195,1.2667074 L 9.3941352,0.97817504 9.7219283,1.0052047 c 0.5048587,0.04163 0.5507957,0.077398 0.5604597,0.4363907 l 0.0059,0.2207722 0.111099,0.00986 c 0.0611,0.00542 0.382543,0.022416 0.714309,0.037758 0.331767,0.015342 0.842246,0.039845 1.134398,0.054451 1.148396,0.057412 1.993006,0.098619 2.452451,0.1196522 l 0.480759,0.022009 1.779033,-0.2085598 1.779034,-0.2085598 0.270094,0.025988 c 0.318149,0.030611 0.408025,0.064484 0.47237,0.1780239 0.04022,0.070968 0.04022,0.070968 0.04051,10.1057049 2.94e-4,9.94669 -1.5e-5,10.035345 -0.03516,10.10423 -0.0195,0.03822 -0.06327,0.08669 -0.09728,0.107703 -0.06613,0.04087 -0.509907,0.145482 -0.617155,0.145482 -0.06532,0 -2.512324,-0.738318 -2.603868,-0.785648 -0.170482,-0.08814 -0.19787,-0.348607 -0.05199,-0.494484 0.08096,-0.08096 0.06979,-0.07862 0.893866,-0.187008 0.346622,-0.04559 0.651184,-0.08696 0.676805,-0.09194 l 0.04658,-0.009 -0.0061,-6.242904 c -0.0074,-7.6325213 -0.01564,-11.2192367 -0.02564,-11.2292356 -0.0042,-0.00416 -1.547076,-0.0821 -3.428695,-0.1731934 L 10.852583,2.777072 10.58699,2.827729 10.321396,2.878387 10.321288,12.899904 c -7.2e-5,6.837988 -0.006,10.042789 -0.0187,10.08848 -0.04788,0.172397 -0.137967,0.221421 -0.4902863,0.266805 -0.409427,0.05274 -0.4313636,0.05049 -0.7063411,-0.07259 z",
            keywords: ["exterior","light"]
        },
        "wellner":{
            path:"M20.20215,8.19141a16.88894,16.88894,0,0,0-4.63281-3.749,7.79484,7.79484,0,0,0-3.43457-.93213A.49078.49078,0,0,0,12,3.52881a.49078.49078,0,0,0-.13477-.01856,7.79149,7.79149,0,0,0-3.43457.93213,16.89625,16.89625,0,0,0-4.63281,3.749,7.41717,7.41717,0,0,0-1.89062,5.28222c.13818,1.58985,1.0791,3.57813,2.55224,4.13086a6.92727,6.92727,0,0,0,1.40418.27051l.652,1.58594a.50147.50147,0,0,0,.41651.30761c.02637.002,2.68555.24415,5.59473.24415a32.89387,32.89387,0,0,0,4.55908-.248.4999.4999,0,0,0,.38183-.29395l.69965-1.59942a6.80067,6.80067,0,0,0,1.3736-.26679c1.47363-.55273,2.41406-2.541,2.55175-4.13086A7.41647,7.41647,0,0,0,20.20215,8.19141ZM16.665,18.81152a36.6298,36.6298,0,0,1-4.13818.20118c-2.29639,0-4.43409-.15332-5.20264-.21485l-.33466-.81433c1.71326.13605,3.78363.19281,4.9079.21472l.00049-.0166a.76332.76332,0,0,0,.16748.02051h.01367c.02735-.001.05615-.002.084-.00488,1.141-.023,3.17846-.08069,4.8648-.21534Zm4.43164-5.42382c-.11035,1.27441-.87109,2.8916-1.90723,3.28125a41.11332,41.11332,0,0,1-7.10644.52929.61743.61743,0,0,0-.07373.00684l-.00049-.00488h-.001c-.00537,0-.02588,0-.04785.001a.31284.31284,0,0,0-.043-.00293A41.118,41.118,0,0,1,4.81055,16.669C3.7749,16.2793,3.01416,14.66309,2.90332,13.3877A6.43869,6.43869,0,0,1,4.5293,8.873,15.99092,15.99092,0,0,1,8.87793,5.33691a6.823,6.823,0,0,1,2.9873-.82666A.49077.49077,0,0,0,12,4.4917a.49077.49077,0,0,0,.13477.01855,6.823,6.823,0,0,1,2.9873.82666A15.97328,15.97328,0,0,1,19.46973,8.873,6.44,6.44,0,0,1,21.09668,13.3877Z",
            keywords: ["light","table"]
        },
        "wellner-solid":{
            path:"M20.20215,8.47339a16.88873,16.88873,0,0,0-4.63281-3.749,7.7947,7.7947,0,0,0-3.43457-.93213A.49077.49077,0,0,0,12,3.81079a.49077.49077,0,0,0-.13477-.01855,7.79136,7.79136,0,0,0-3.43457.93213,16.896,16.896,0,0,0-4.63281,3.749,7.41718,7.41718,0,0,0-1.89062,5.28223c.13818,1.58984,1.0791,3.57812,2.55224,4.13085,1.14112.42774,5.582.55762,7.438.59375l.00049-.0166a.76332.76332,0,0,0,.16748.02051h.01367c.02735-.001.05615-.002.084-.00488,1.89062-.03809,6.249-.16992,7.37793-.59278,1.47363-.55273,2.41406-2.541,2.55175-4.13085A7.41648,7.41648,0,0,0,20.20215,8.47339Z M16.93953,19.20629a32.71168,32.71168,0,0,1-4.40625.23633c-2.86133,0-5.477-.23731-5.50293-.24024a.50955.50955,0,0,0-.544.45215.50009.50009,0,0,0,.45215.54395c.02637.002,2.68555.24414,5.59473.24414a32.85621,32.85621,0,0,0,4.55859-.24805.5.5,0,1,0-.15234-.98828Z",
            keywords: ["light","table"]
        },
        "wellness":{
            path:"M22.01367,14.89337,19.68945,3.157c-.01953-.438-.47754-2.62451-7.63916-2.67187C4.69775.42755,4.37549,3.03986,4.3667,3.26886L1.98926,15.29767a2.69246,2.69246,0,0,0,.52,2.2207,5.38574,5.38574,0,0,0,2.55865,1.70856,3.07247,3.07247,0,0,0,1.4289.74188s-.4964,3.57776,5.35809,3.56061c5.85443-.01709,5.61481-2.61908,5.82019-3.64618a3.597,3.597,0,0,0,1.5141-.83954l-.04163.01618a5.41426,5.41426,0,0,0,2.2323-1.62745A3.09533,3.09533,0,0,0,22.01367,14.89337Zm-1.45019,1.96C19.74805,17.90509,17.59961,19.158,12,19.158c-5.77441,0-7.8999-1.19922-8.66553-2.20605a1.69481,1.69481,0,0,1-.37842-1.39942L5.355,3.41534c.00293-.01953.35449-1.93066,6.48828-1.93066.06592,0,.1333,0,.2002.00049,5.20263.03418,6.564,1.27246,6.65576,1.791L21.041,15.11993A2.12322,2.12322,0,0,1,20.56348,16.85333Z",
            keywords: ["light","table"]
        }
    };
    console.log('legacy listing is',Object.entries(HUE_ICONS_MAP).map(([icon, content]) => ({
        name: icon,
        keywords: content.keywords
    })));
}

// window.getIconList = getIconList;
// window.getIcon = getIcon;

if (!("customIconsets" in window)) {
    window.customIconsets = {};
}
if (!("customIcons" in window)) {
    window.customIcons = {};
}

window.customIcons["hue"] = {
    getIcon: (iconName) => getIcon("svgs", iconName),
    getIconList: () => getIconList("svgs")
};
window.customIcons["my"] = {
    getIcon: (iconName) => getIcon("my", iconName),
    getIconList: () => getIconList("my")

};

// Duotone patches
customElements.whenDefined("ha-icon").then(() => {
    const HaIcon = customElements.get("ha-icon");
    HaIcon.prototype._setCustomPath = async function (promise, requestedIcon) {
        const icon = await promise;
        if (requestedIcon !== this.icon) return;
        this._path = icon.path;
        this._viewBox = icon.viewBox;

        await this.UpdateComplete;

        const el = this.shadowRoot.querySelector("ha-svg-icon");
        if (!el || !el.setPaths) {
            return;
        }
        el.clearPaths();

        if (icon.fullCode && icon.format === "fullcolor") {
            await el.updateComplete;
            const root = el.shadowRoot.querySelector("svg");
            const styleEl = document.createElement("style");
            styleEl.innerHTML = `
        svg:first-child>g:first-of-type>path {
          display: none;
        }
      `;
            root.appendChild(styleEl);
            root.appendChild(icon.fullCode.cloneNode(true));
        } else {
            el.setPaths(icon.paths);
            if (icon.format) {
                el.classList.add(...icon.format.split("-"));
            }
        }
    };
});

customElements.whenDefined("ha-svg-icon").then(() => {
    const HaSvgIcon = customElements.get("ha-svg-icon");

    HaSvgIcon.prototype.clearPaths = async function () {
        await this.updateComplete;

        const svgRoot = this.shadowRoot.querySelector("svg");
        while (svgRoot && svgRoot.children.length > 1)
            svgRoot.removeChild(svgRoot.lastChild);

        const svgGroup = this.shadowRoot.querySelector("g");
        while (svgGroup && svgGroup.children.length > 1)
            svgGroup.removeChild(svgGroup.lastChild);

        while (this.shadowRoot.querySelector("style.hasshueicons")) {
            const el = this.shadowRoot.querySelector("style.hasshueicons");
            el.parentNode.removeChild(el);
        }
    };

    HaSvgIcon.prototype.setPaths = async function (paths) {
        await this.updateComplete;
        if (paths == undefined || Object.keys(paths).length === 0) return;
        const styleEl =
            this.shadowRoot.querySelector("style.hasshueicons") ||
            document.createElement("style");
        styleEl.classList.add("hasshueicons");
        styleEl.innerHTML = `
      .secondary {
        opacity: 0.4;
      }
      :host(.invert) .secondary {
        opacity: 1;
      }
      :host(.invert) .primary {
        opacity: 0.4;
      }
      :host(.color) .primary {
        opacity: 1;
      }
      :host(.color) .secondary {
        opacity: 1;
      }
      :host(.color:not(.invert)) .secondary {
        fill: var(--icon-secondary-color, var(--disabled-text-color));
      }
      :host(.color.invert) .primary {
        fill: var(--icon-secondary-color, var(--disabled-text-color));
      }
      path:not(.primary):not(.secondary) {
        opacity: 0;
      }
      `;
        this.shadowRoot.appendChild(styleEl);
        const root = this.shadowRoot.querySelector("g");
        for (const k in paths) {
            const el = document.createElementNS("http://www.w3.org/2000/svg", "path");
            el.setAttribute("d", paths[k]);
            el.classList.add(k);
            root.appendChild(el);
        }
    };
});