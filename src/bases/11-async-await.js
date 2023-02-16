        //manera larga
// const getImagePromesa = () => {
//     const promesa = new Promise( (resolve, reject) => {
//         resolve('http://dnfjsdfnjdsnjds.com');
//     });
//     return promesa;
// };

// getImagePromesa().then( console.log );

        //manera corta
// const getImagePromesa = () => {
//     return new Promise( resolve => resolve('http://dnfjsdfnjdsnjds.com'))
// }

// getImagePromesa().then( console.log );

        //usando Async
        const getImagen = async() => {
            // return 'http:/dkjdsjbdfjs.com'
         
             try {
                 const apiKey = 'lz5Db1F0s3t4XDshvgDcJ8i2lrgYbA7Y';
                 const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
                 const {data} = await resp.json();
         
                  const { url } =data.images.original;
                  console.log(url)
                  const img = document.createElement('img');
                  img.src = url;
                  document.body.append(img);
             }catch{
                 //manejo del error
             }
         }
         
         getImagen()