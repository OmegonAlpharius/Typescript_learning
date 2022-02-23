import AbstractDocumentState from "./AbstractDocumentState";
import { PublishedState } from "./PublishedState";
import { DraftedState } from "./DraftState";

export class ModeratedState extends AbstractDocumentState {
    public draft(): void {
        console.log("Документ отправлен на повторную подготовку.");
        this._document.changeState(new DraftedState());

    }

    public moderate(): void {
        console.log("Документ уже находится на модерации");
    }

    public publish(): void {
        console.log("Отправляем документ в публикацию");
        this._document.changeState(new PublishedState());
    }
}
