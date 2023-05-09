#!/usr/bin/env node

import { rps } from '../lib/rpsls.js'
import minimist from 'minimist'

const args = minimist(process.argv.slice(2));

const help_message = `
Usage: node-rpsls [SHOT]
Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!

-h, --help        display this help message and exit
-r, --rules       display the rules and exit

Examples:
node-rpsls        Return JSON with single player RPSLS result.
                    e.g. {"player":"rock"}
node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                    e.g {"player":"rock","opponent":"Spock","result":"lose"}
`;

const rules = `
Rules for the Lizard-Spock Expansion of Rock Paper Scissors:

- Scissors CUTS Paper
- Paper COVERS Rock
- Rock SMOOSHES Lizard
- Lizard POISONS Spock
- Spock SMASHES Scissors
- Scissors DECAPITATES Lizard
- Lizard EATS Paper
- Paper DISPROVES Spock
- Spock VAPORIZES Rock
- Rock CRUSHES Scissors
`;

if(args.r || args.rules) {
    console.log(rules);
    process.exit(0.0);
}

if (args.h || args.help_message) {
    console.log(help_message);
    process.exit(0.0);
}
let shoot = args._[0];

try {
    console.log(JSON.stringify(rps(shoot)));
} catch (error){
    console.log(help);
    console.log(rules);
    process.exit(1);
}