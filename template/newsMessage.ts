import fs from "fs";

export default function template () {
    const htmlString = fs.readFileSync("./index.html", "utf-8");
    return htmlString;
}