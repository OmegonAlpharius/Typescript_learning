import AbstractDocumentState from "./AbstractDocumentState";

export class PublishedState extends AbstractDocumentState {
    public draft(): void {
        console.log("Не возможно отправить документ на подготовку, он уже опубликован");
    }

    public moderate(): void {
        console.log("Не возможно отправить документ на модерацию, он уже опубликован");
    }

    public publish(): void {
        console.log("Документ уже опубликован");
    }
}
