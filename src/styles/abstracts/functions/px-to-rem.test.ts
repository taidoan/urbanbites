/**
 * @jest-environment jest-environment-node-single-context
 */

import { compileSassString } from "../../../../scripts/scssTest";
import { outdent } from "outdent";

describe("@function rem", () => {
  it("convert a pixel value into a rem", async () => {
    const sass = `
      @use "abstracts/functions/px-to-rem" as *;

      .header {
        font-size: rem(32);
      }
    `;

    await expect(compileSassString(sass)).resolves.toMatchObject({
      css: outdent`
        .header {
          font-size: 2rem;
        }
      `,
    });
  });

  it("convert a pixel value with a unit into rem", async () => {
    const sass = `
      @use "abstracts/functions/px-to-rem" as *;

      .header {
        font-size: rem(24px);
      }
    `;

    await expect(compileSassString(sass)).resolves.toMatchObject({
      css: outdent`
        .header {
          font-size: 1.5rem;
        }
      `,
    });
  });
});
