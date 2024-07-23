import { join } from "path";
import { config } from "@config";
import { compileAsync, compileStringAsync } from "sass-embedded";

// Array of paths for SASS files
const sassPaths = [config.stylesPath, join(config.rootPath, "node_modules")];

/**
 * Compiles a Sass string asynchronously
 * @param source - The Sass source code to compile
 * @param options - Additional options for the compilation process
 * @returns A Promise that resolves with the compiled CSS code
 */
export const compileSassString = (source: string, options = {}) => {
  try {
    return compileStringAsync(source, {
      loadPaths: sassPaths,
      silenceDeprecations: ["slash-div"],
      quietDeps: true,
      ...options,
    });
  } catch (error) {
    console.error("Error compiling Sass string:", error);
    throw error;
  }
};

/**
 * Compiles a Sass file asynchronously.
 *
 * @param path - The path to the Sass file.
 * @param options - Additional options for the compilation.
 * @returns A promise that resolves with the compiled Sass content.
 */
export const compileSassFile = (path: string, options = {}) => {
  try {
    return compileAsync(path, {
      loadPaths: sassPaths,
      silenceDeprecations: ["slash-div"],
      quietDeps: true,
      ...options,
    });
  } catch (error) {
    console.error("Error compiling Sass string:", error);
    throw error;
  }
};
