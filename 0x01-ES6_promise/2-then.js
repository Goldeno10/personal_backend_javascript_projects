export default function handleResponseFromAPI(promise) {
  promise.then(
    {
      status: 200,
      body: 'Success',
    },
  )
    .finally(console.log('Got a response from the AP'))
    .catch((err) => new Error(err));
}
