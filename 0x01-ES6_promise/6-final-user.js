import { signUpUser } from './4-user-promise';
import { uploadPhoto } from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName) {
  return Promise.all([signUpUser, uploadPhoto])
    .then(([user, photo]) => {
      return [
        {
          status: uploadPhoto.status,
          value: 'value or error returned by the Promise',
        }
      ]
    });
}
