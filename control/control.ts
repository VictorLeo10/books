import dummyBooksModel from "../model/model";
import { Request, Response } from "express";
import cloudinary from "../configuration/cloudinary";

const postMethod = async (req: Request, res: Response): Promise<Response> => {
  try {
    const {
      Author,
      Title,
      Summary,
      //   ISBN,
      //   Views,
      //   AuthorImage,
      Category,
    } = req.body;
    const cloudImage = await cloudinary.uploader.upload(req?.file!.path);
    const isbn1 = Math.floor(Math.random() * 10000);
    const isbn2 = Math.floor(Math.random() * 10000);
    const isbn3 = Math.floor(Math.random() * 10000);
    const isbn4 = Math.floor(Math.random() * 10000);
    const dataUpload = await dummyBooksModel.create({
      Author,
      Title,
      CoverImage: cloudImage.secure_url,
      Summary,
      ISBN: `${isbn1}-${isbn2}-${isbn3}-${isbn4}`,
      //   Views,
      AuthorImage: Author.charAt(0).toUpperCase(),
      Category,
    });
    return res.status(200).json({
      message: "...😒",
      data: dataUpload,
    });
  } catch (error) {
    return res.status(400).json({
      message: `...😒:${error}`,
    });
  }
};

const getallMethod = async (req: Request, res: Response): Promise<Response> => {
  try {
    const allBooks = await dummyBooksModel.find();
    return res.status(201).json({
      message: `...😒`,
      data: allBooks,
    });
  } catch (error) {
    return res.status(400).json({
      message: `...😒: ${error}`,
    });
  }
};

const getoneMethod = async (req: Request, res: Response): Promise<Response> => {
  try {
    const oneBook = await dummyBooksModel.findById(req.params.id);
    return res.status(201).json({
      message: `...😒`,
      data: oneBook,
    });
  } catch (error) {
    return res.status(400).json({
      message: `...😒: ${error}`,
    });
  }
};

const updateMethod = async (req: Request, res: Response): Promise<Response> => {
  try {
    const {
      Author,
      Title,
      Summary,
      //   ISBN,
      //   Views,
      //   AuthorImage,
      Category,
    } = req.body;
    const cloudImage = await cloudinary.uploader.upload(req?.file!.path);
    const isbn1 = Math.floor(Math.random() * 10000);
    const isbn2 = Math.floor(Math.random() * 10000);
    const isbn3 = Math.floor(Math.random() * 10000);
    const isbn4 = Math.floor(Math.random() * 10000);
    const replaceBook = await dummyBooksModel.findByIdAndUpdate(
      req.params.id,
      {
        Author,
        Title,
        CoverImage: cloudImage.secure_url,
        Summary,
        ISBN: `${isbn1}-${isbn2}-${isbn3}-${isbn4}`,
        //   Views,
        AuthorImage: Author.charAt(0).toUpperCase(),
        Category,
      },
      { new: true }
    );
    return res.status(201).json({
      message: `...😒`,
      data: replaceBook,
    });
  } catch (error) {
    return res.status(400).json({
      message: `...😒: ${error}`,
    });
  }
};

export { postMethod, getallMethod, getoneMethod, updateMethod };
