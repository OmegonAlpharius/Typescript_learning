import AbstractDocumentState from "./AbstractDocumentState";
import { ModeratedState } from "./ModeratedState";


export class DraftedState extends AbstractDocumentState{
    public draft(): void {
        console.log("Документ уже находиться в работе!!!");
        
    }
    public  moderate(): void {
        console.log('Документ оправлен на модерацию');
        this._document.changeState(new ModeratedState())
    }
    public publish(): void {
        console.log('Документ находиться в работе и не может быть опубликован');
        
    }
}



 export default DraftedState