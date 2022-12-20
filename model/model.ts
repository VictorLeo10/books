import mongoose from "mongoose";

interface BookInterface {
  Author: string;
  Title: string;
  CoverImage: string;
  Summary: string;
  ISBN: string;
  Views: [];
  AuthorImage: string;
  Category: string;
}

interface InterfaceForBooks extends BookInterface, mongoose.Document {}

const BookSchema = new mongoose.Schema(
  {
    Author: String,
    Title: String,
    CoverImage: String,
    Summary: String,
    ISBN: String,
    Views: [],
    AuthorImage: String,
    Category: String,
  },
  { timestamps: true }
);

const dummyBooksModel = mongoose.model<InterfaceForBooks>(
  "dummybooks",
  BookSchema
);

export default dummyBooksModel;
