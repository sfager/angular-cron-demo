declare var prettyCron: IPrettyCron
interface IPrettyCron {
  toString(expression:string);
  toString(expression:string, sixth: boolean);
  getNext(expression:string);
  getNext(expression:string, sixth: boolean);
}