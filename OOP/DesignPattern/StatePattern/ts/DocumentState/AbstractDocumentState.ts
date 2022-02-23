import USerDocument from "../Documents/UserDocument";

abstract class  AbstractDocumentState {
protected _document!:USerDocument


public setDocument (document:USerDocument):void {
    this._document=document
}

public abstract draft ():void;
public abstract moderate ():void;
public abstract publish ():void;

 }

 export default AbstractDocumentState