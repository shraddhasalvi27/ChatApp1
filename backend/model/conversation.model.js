import mongoose from "mongoose";
import Message from "./message.model";
import User from "./user.model"

const ConversationSchema = new Schema({
    members:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:User,
        }
    ],
    messages:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:Message,
            default:[],
        },
    ],


},{timestamps:true}
);

const Conversation = mongoose.model("conversation",ConversationSchema);
export default Conversation;