/**
 * @jest-environment jest-environment-node-single-context
 */

import { compileSassString } from "../../../../scripts/scssTest";
import { outdent } from "outdent";

describe("@function em", () => {
  it("convert a pixel value into a em", async () => {
    const sass = `
      @use "abstracts/functions/px-to-em" as *;

      .header {
        font-size: em(32);
      }
    `;

    await expect(compileSassString(sass)).resolves.toMatchObject({
      css: outdent`
        .header {
          font-size: 2em;
        }
      `,
    });
  });

  it("convert a pixel value with a unit into em", async () => {
    const sass = `
      @use "abstracts/functions/px-to-em" as *;

      .header {
        font-size: em(24px);
      }
    `;

    await expect(compileSassString(sass)).resolves.toMatchObject({
      css: outdent`
        .header {
          font-size: 1.5em;
        }
      `,
    });
  });

  it("convert a pixel value with a unit into em, with a context size", async () => {
    const sass = `
      @use "abstracts/functions/px-to-em" as *;

      .header {
        font-size: em(24, 18);
      }
    `;

    await expect(compileSassString(sass)).resolves.toMatchObject({
      css: outdent`
        .header {
          font-size: 1.33em;
        }
      `,
    });
  });
});
