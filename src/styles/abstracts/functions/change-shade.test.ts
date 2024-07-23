/**
 * @jest-environment jest-environment-node-single-context
 */

import { compileSassString } from "../../../../scripts/scssTest";
import { outdent } from "outdent";

describe("@function change-shade", () => {
  it("change the lightness of a colour based on hsl value", async () => {
    const sass = `
      @use "abstracts/functions/change-shade" as *;

      .block {
        background-color: change-shade(hsl(16, 75%, 55%), 10%);
      }
    `;

    await expect(compileSassString(sass)).resolves.toMatchObject({
      css: outdent`
        .block {
          background-color: hsl(16, 75%, 10%);
        }
      `,
    });
  });

  it("changes the lightness of a colour based on hsla value", async () => {
    const sass = `
      @use "abstracts/functions/change-shade" as *;
  
      .foo {
        background-color: change-shade(hsla(16, 75%, 55%, 0.75), 10%);
      }
    `;

    await expect(compileSassString(sass)).resolves.toMatchObject({
      css: outdent`
        .foo {
          background-color: hsla(16, 75%, 10%, 0.75);
        }
      `,
    });
  });
});

describe("@function darker-shade", () => {
  it("darkens the colour using a hsl value", async () => {
    const sass = outdent`
    @use "abstracts/functions/change-shade" as *;

    div { color: darker-shade(hsl(4, 77%, 45%), 25%); }
    `;

    const expectedCSS = outdent`
    div {
      color: #330a07;
    }
    `.trim();

    const result = await compileSassString(sass);
    const recievedCss = result.css.trim();

    expect(recievedCss).toBe(expectedCSS);
  });

  it("darkens the colour using a hsla value", async () => {
    const sass = outdent`
    @use "abstracts/functions/change-shade" as *;

    div { color: darker-shade(hsla(213, 80%, 63%, 1), 25%); }
    `;

    const expectedCSS = outdent`
    div {
      color: #15263b;
    }
    `.trim();

    const result = await compileSassString(sass);
    const recievedCss = result.css.trim();

    expect(recievedCss).toBe(expectedCSS);
  });

  it("darkens the colour using a hex value", async () => {
    const sass = outdent`
    @use "abstracts/functions/change-shade" as *;

    div { color: darker-shade(#fb923c, 25%); }
    `;

    const expectedCSS = outdent`
    div {
      color: #3f250f;
    }
    `.trim();

    const result = await compileSassString(sass);
    const recievedCss = result.css.trim();

    expect(recievedCss).toBe(expectedCSS);
  });
});

describe("@function lighter-shade", () => {
  it("lightens the colour using a hex value", async () => {
    const sass = outdent`
    @use "abstracts/functions/change-shade" as *;

    div { color: lighter-shade(#2dd4bf, 25%); }
    `;

    const expectedCSS = outdent`
    div {
      color: #cbf4ef;
    }
    `.trim();

    const result = await compileSassString(sass);
    const recievedCss = result.css.trim();

    expect(recievedCss).toBe(expectedCSS);
  });

  it("lightens the colour using a hsla value", async () => {
    const sass = outdent`
    @use "abstracts/functions/change-shade" as *;

    div { color: lighter-shade(hsla(83, 77%, 45%, 1), 25%); }
    `;

    const expectedCSS = outdent`
    div {
      color: #e1f2c6;
    }
    `.trim();

    const result = await compileSassString(sass);
    const recievedCss = result.css.trim();

    expect(recievedCss).toBe(expectedCSS);
  });

  it("lightens the colour using a hsl value", async () => {
    const sass = outdent`
    @use "abstracts/functions/change-shade" as *;

    div { color: lighter-shade(hsla(50, 86%, 57%, 1), 25%); }
    `;

    const expectedCSS = outdent`
    div {
      color: #fbf3cc;
    }
    `.trim();

    const result = await compileSassString(sass);
    const recievedCss = result.css.trim();

    expect(recievedCss).toBe(expectedCSS);
  });

  it("lightens the colour using a rgb value", async () => {
    const sass = outdent`
    @use "abstracts/functions/change-shade" as *;

    div { color: lighter-shade(rgb(123, 143 , 0), 25%); }
    `;

    const expectedCSS = outdent`
    div {
      color: #dee3bf;
    }
    `.trim();

    const result = await compileSassString(sass);
    const recievedCss = result.css.trim();

    expect(recievedCss).toBe(expectedCSS);
  });

  it("lightens the colour using a rgba value", async () => {
    const sass = outdent`
    @use "abstracts/functions/change-shade" as *;

    div { color: lighter-shade(rgba(223, 143 , 435, 0.75), 25%); }
    `;

    const expectedCSS = outdent`
    div {
      color: rgba(250, 236, 255, 0.9375);
    }
    `.trim();

    const result = await compileSassString(sass);
    const recievedCss = result.css.trim();

    expect(recievedCss).toBe(expectedCSS);
  });
});
