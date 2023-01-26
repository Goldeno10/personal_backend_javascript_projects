import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  try {
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
    console.log(photo);
    return {
      photo,
      user,
    };
  } catch (error) {
    console.error(error);
  }
}

asyncUploadUser();
