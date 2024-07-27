// const images = import.meta.glob('../assets/*.{png,jpg,jpeg,svg}')

// // Load images dynamically
// const loadImages = async () => {
//     const imageModules = await Promise.all(
//         Object.keys(images).map((path) => images[path]())
//     );
//     return imageModules.map((module) => module.default);
// };

// const getImageByName = async (imageName) => {
//     const imageList = await loadImages();
//     const image = imageList.find(image => image.path.includes(imageName));
//     return image ? image.module : null;
// };

// export default {loadImages, getImageByName};