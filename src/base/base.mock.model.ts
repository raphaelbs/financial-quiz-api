import { DocumentQuery, Document } from 'mongoose';

export abstract class MockModel<T extends Document> {
  readonly document: T;

  constructor(document: T) {
    this.document = document;
  }

  public save() {
    return this.document;
  }
}
