import jsdom from 'jsdom';

const { JSDOM } = jsdom;

export class HTMLParser {
  textHtml: string;
  jsDOM: any;

  constructor(textHtml: string) {
    this.textHtml = textHtml;
    this.jsDOM = new JSDOM(textHtml);
  }

  getDOM() {
    return new JSDOM(this.textHtml);
  }

  getTextHtml() {
    return this.textHtml;
  }
}
