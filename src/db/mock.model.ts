export class MockModel {
  readonly document: any;

  constructor(document) {
    this.document = document;
  }

  save() {
    return this.document;
  }
}
