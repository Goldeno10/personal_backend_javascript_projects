export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.all([chinaDownload, USDownload])
    .then(([china,]) => china);
}