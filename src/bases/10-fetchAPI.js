const apiKey = 'lz5Db1F0s3t4XDshvgDcJ8i2lrgYbA7Y';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// peticion.then( resp => {
//     console.log(resp)
//     resp.json().then(data => {
//         console.log(data);
//     });
// })
peticion.then( resp => resp.json())
.then(({data}) => {
    const { url } =data.images.original;

    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);
})
.catch( console.warn);