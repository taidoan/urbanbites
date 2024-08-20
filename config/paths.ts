import { join, resolve } from "path";

// Resolving the root path of the project by moving one directory up from the current directory (__dirname)
export const root: string = resolve(__dirname, "..");

// Joining the root path with the 'src' directory to get the source path
export const source: string = join(root, "src");

// Joining the source path with the 'styles' directory to get the styles path
export const styles: string = join(source, "styles");

export const assets: string = join(root, "public/assets");

export const images: string = join(assets, "images");
