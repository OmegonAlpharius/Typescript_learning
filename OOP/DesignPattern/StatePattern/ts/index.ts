import UserDocument from "./Documents/UserDocument";
import { PublishedState } from "./DocumentState/PublishedState";




const userDocument:UserDocument = new UserDocument("John")

userDocument.sendForDraft()
userDocument.submitForPublication()
userDocument.sendForModeration()
userDocument.sendForDraft()
userDocument.sendForModeration()
userDocument.submitForPublication()