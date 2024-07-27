/**
 * @jest-environment jest-environment-node-single-context
 */

import { compileSassString } from "../../../../scripts/scssTest";
import { outdent } from "outdent";

describe("@function font-clamp", () => {
  it("joins the image path and filename", async () => {
    const sass = `
      @use "abstracts/functions/font-clamp" as *;

      .foo {
        font-size: font-clamp(20rem, 64rem, 1rem, 2rem);
      }
    `;

    await expect(compileSassString(sass)).resolves.toMatchObject({
      css: outdent`
        .foo {
          font-size: clamp(1rem, 0.5454545455rem + 2.2727272727vw, 2rem);
        }
      `,
    });
  });
});
