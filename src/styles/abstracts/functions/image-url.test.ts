/**
 * @jest-environment jest-environment-node-single-context
 */

import { compileSassString } from "../../../../scripts/scssTest";
import { outdent } from "outdent";

describe("@function image-url", () => {
  it("joins the image path and filename", async () => {
    const sass = `
      @use "abstracts/functions/image-url" as *;

      .foo {
        background-image: image-url('hero.webp');
      }
    `;

    await expect(compileSassString(sass)).resolves.toMatchObject({
      css: outdent`
        .foo {
          background-image: url("/assets/images/hero.webp");
        }
      `,
    });
  });
});
