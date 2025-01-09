import mongoose from "mongoose";
import Message from "./message.model.js";
import User from "./user.model.js"

const ConversationSchema = new mongoose.Schema({
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