import multer from "multer";
import { Request } from "express";

type DestinationCallback = (error: Error | null, destination: string) => void;
type FileNameCallback = (error: Error | null, filename: string) => void;

const storage = multer.diskStorage({
  destination: (
    request: Request,
    file: Express.Multer.File,
    cb: DestinationCallback
  ) => {
    cb(null, "uploads");
  },
  filename: (
    request: Request,
    file: Express.Multer.File,
    cb: FileNameCallback
  ) => {
    cb(null, file.originalname);
  },
});

const coverImageUpload = multer({
  storage: storage,
}).single("CoverImage");

export { coverImageUpload };
