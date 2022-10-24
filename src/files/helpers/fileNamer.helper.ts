/* eslint-disable @typescript-eslint/ban-types */
export const fileNamer = (
  req: Express.Request,
  file: Express.Multer.File,
  cb: Function,
) => {
  if (!file) return cb(new Error('File is empty'), false);
  const fileExt = file.mimetype.split('/')[1];
  const fileName = `holamundo.${fileExt}`;
  cb(null, fileName);
};
