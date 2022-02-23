import AbstractDocumentState from "../DocumentState/AbstractDocumentState";
import DraftedState from "../DocumentState/DraftState";

class UserDocument {
    private _state!: AbstractDocumentState;
    private _currentUser: string;
    constructor(user: string) {
        this._currentUser = user;
        this.changeState(new DraftedState())
    }
 
    public changeState(state: AbstractDocumentState): void {
        this._state = state;
        this._state.setDocument(this);
    }
 
    get currentUser(): string {
        return this._currentUser;
    }
 
    public sendForModeration(): void {
        this._state.moderate();
    }
 
    public submitForPublication(): void {
        this._state.publish();
    }
 
    public sendForDraft(): void {
        this._state.draft();
    }
}


export default UserDocument