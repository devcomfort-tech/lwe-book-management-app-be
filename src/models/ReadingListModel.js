import mongoose from "mongoose";

const readingListSchema = new mongoose.Schema({
    user:{
       type: mongoose.Schema.Types.ObjectId,
       ref: 'User',
       required: true
        
    },
    book:{
          type: mongoose.Schema.Types.ObjectId,
       ref: 'Book',
       required: true
    },
    status:{
        type: String,   
         enum: ['want-to-read', 'reading', 'completed'],
         required: true
    },
     
} );

readingListSchema.index(
    { user: 1, book: 1 }, 
    {unique: true}
);

const ReadingList = mongoose.model("readingList", readingListSchema);

export default ReadingList;