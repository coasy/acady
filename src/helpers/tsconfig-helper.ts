const { filesystem } = require('gluegun/filesystem');
const fs = require('fs');
import logSymbols = require("log-symbols");

export class TsconfigHelper {

    public static getTsConfig(folder: string) {
        try {
            let json: string = fs.readFileSync(folder + filesystem.separator + 'tsconfig.json').toString('utf-8');
            json = json.replace(/\,(?!\s*?[\{\[\"\'\w])/g, ''); // Remove trailing commas
            const tsConfig = JSON.parse(json);
            return tsConfig;
        } catch (e) {
            console.log(logSymbols.error, e.message);
            console.log(logSymbols.error, 'No tsconfig.json found in folder ' + folder);
            return;
        }
    }
}
