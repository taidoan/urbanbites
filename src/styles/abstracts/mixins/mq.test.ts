/**
 * @jest-environment jest-environment-node-single-context
 */

import { compileSassString } from "../../../../scripts/scssTest";
import { outdent } from "outdent";

describe("@mixin mq", () => {
  it("allows you to generate a media query from the breakpoints map", async () => {
    const sass = `
      @use "abstracts/mixins/mq" as *;

      .box {
        @include mq('md'){
          color: grey;
        }
      }
    `;

    const expectedCSS = outdent`
      @media screen and (min-width: 64em) {
        .box {
          color: grey;
        }
      }
    `.trim();

    const result = await compileSassString(sass);
    const recievedCss = result.css.trim();

    expect(recievedCss).toBe(expectedCSS);
  });

  it("allows you to generate a media query from a px value", async () => {
    const sass = `
      @use "abstracts/mixins/mq" as *;

      .foo {
        @include mq(800){
          color: blue;
        }
      }
    `;

    const expectedCSS = outdent`
      @media screen and (min-width: 50em) {
        .foo {
          color: blue;
        }
      }
    `.trim();

    const result = await compileSassString(sass);
    const recievedCss = result.css.trim();

    expect(recievedCss).toBe(expectedCSS);
  });

  it("allows you to generate a media query from an em value", async () => {
    const sass = `
      @use "abstracts/mixins/mq" as *;

      .foo {
        @include mq(15em){
          color: blue;
        }
      }
    `;

    const expectedCSS = outdent`
      @media screen and (min-width: 15em) {
        .foo {
          color: blue;
        }
      }
    `.trim();

    const result = await compileSassString(sass);
    const recievedCss = result.css.trim();

    expect(recievedCss).toBe(expectedCSS);
  });

  it("allows you to set a max width", async () => {
    const sass = `
      @use "abstracts/mixins/mq" as *;

      .foo {
        @include mq(800, 'max'){
          color: green;
        }
      }
    `;

    const expectedCSS = outdent`
      @media screen and (max-width: 50em) {
        .foo {
          color: green;
        }
      }
    `.trim();

    const result = await compileSassString(sass);
    const recievedCss = result.css.trim();

    expect(recievedCss).toBe(expectedCSS);
  });

  it("allows you to set a max width with units", async () => {
    const sass = `
      @use "abstracts/mixins/mq" as *;

      .foo {
        @include mq(25rem, 'max'){
          color: yellow;
        }
      }
    `;

    const expectedCSS = outdent`
      @media screen and (max-width: 25rem) {
        .foo {
          color: yellow;
        }
      }
    `.trim();

    const result = await compileSassString(sass);
    const recievedCss = result.css.trim();

    expect(recievedCss).toBe(expectedCSS);
  });

  it("allows you to set an orientation if needed", async () => {
    const sass = `
      @use "abstracts/mixins/mq" as *;

      .foo {
        @include mq(750px, $orientation: "landscape"){
          color: yellow;
        }
      }
    `;

    const expectedCSS = outdent`
      @media screen and (min-width: 750px) and (orientation: landscape) {
        .foo {
          color: yellow;
        }
      }
    `.trim();

    const result = await compileSassString(sass);
    const recievedCss = result.css.trim();

    expect(recievedCss).toBe(expectedCSS);
  });

  it("allows you to set a max height and an orientation if needed", async () => {
    const sass = `
      @use "abstracts/mixins/mq" as *;

      .foo {
        @include mq(750px, "max", "height", $orientation: "landscape"){
          color: yellow;
        }
      }
    `;

    const expectedCSS = outdent`
      @media screen and (max-height: 750px) and (orientation: landscape) {
        .foo {
          color: yellow;
        }
      }
    `.trim();

    const result = await compileSassString(sass);
    const recievedCss = result.css.trim();

    expect(recievedCss).toBe(expectedCSS);
  });
});
