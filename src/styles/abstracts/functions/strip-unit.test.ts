/**
 * @jest-environment jest-environment-node-single-context
 */

import { compileSassString } from "../../../../scripts/scssTest";
import { outdent } from "outdent";

describe("@function strip-unit", () => {
  it("strip px unit from a value", async () => {
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

  it("strip rem unit from a value", async () => {
    const sass = `
      @use "abstracts/functions/strip-unit" as *;

      .foo {
        width: strip-unit(5rem);
      }
    `;

    const expectedCSS = outdent`
      .foo {
        width: 5;
      }
    `.trim();

    const result = await compileSassString(sass);
    const recievedCss = result.css.trim();

    expect(recievedCss).toBe(expectedCSS);
  });

  it("return value if unitless", async () => {
    const sass = `
      @use "abstracts/functions/strip-unit" as *;

      .foo {
        margin-bottom: strip-unit(10);
      }
    `;

    const expectedCSS = outdent`
      .foo {
        margin-bottom: 10;
      }
    `.trim();

    const result = await compileSassString(sass);
    const recievedCss = result.css.trim();

    expect(recievedCss).toBe(expectedCSS);
  });
});
