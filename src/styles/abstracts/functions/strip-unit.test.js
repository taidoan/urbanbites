/**
 * @jest-environment jest-environment-node-single-context
 */

import { compileSassString } from "../../../../scripts/scssTest";
import { outdent } from "outdent";

describe("@function strip-unit", () => {
  it("strip a unit from a value", async () => {
    const sass = `
      @use "abstracts/functions/strip-unit" as *;
  
      .box {
        margin-top: strip-unit(12px);
      }
    `;

    await expect(compileSassString(sass)).resolves.toMatchObject({
      css: outdent`
        .box {
          margin-top: 12;
        }
      `,
    });
  });
});
