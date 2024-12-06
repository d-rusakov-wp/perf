const fs = require("node:fs");
const path = require("node:path");
const log = require("./log");

const INDEX_HTML_PATH = "./index.html";
const IMAGES_FOLDER_PATH = "./themes/tw";

const EXCLUDED_FORMATS = ["ttf", "woff", "css", "js", "mp4"];

function getExtension(fileName) {
  return fileName.split(".").pop();
}

function findMissingImages(folderPath) {
  const missingImages = [];

  const files = fs.readdirSync(folderPath).filter(file => !EXCLUDED_FORMATS.includes(getExtension(file)));
  const indexHtmlContent = fs.readFileSync(INDEX_HTML_PATH, "utf8");

  files.forEach(file => {
    const filePath = path.join(folderPath, file);

    if (fs.lstatSync(filePath).isDirectory()) {
      missingImages.push(...findMissingImages(filePath));

      return;
    }

    if (fs.lstatSync(filePath).isFile() && !indexHtmlContent.includes(filePath)) {
      missingImages.push(filePath);
    }
  });

  return missingImages;
}

const missingImages = findMissingImages(IMAGES_FOLDER_PATH);

if (missingImages.length > 0) {
  log.red(`👀 Неиспользованные изображения:\n ${missingImages.join("\n")}`);

  return;
}

log.green("👍 Нет неиспользованных изображений");
