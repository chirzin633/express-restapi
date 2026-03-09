import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'public/images');
    },
    filename: (req, file, callback) => {
        const timestamp = new Date().getTime();
        const originalName = file.originalname;

        callback(null, `${timestamp}-${originalName}`)
    }
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 3 * 1024 * 1024 // 3 MB;
    }
});

export default upload;

