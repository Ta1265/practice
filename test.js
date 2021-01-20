
let data = {};


function addImagePair(data) {
  let keys = Object.keys(imagePool);
  let urls = imagePool[keys[Math.random() * keys.length << 0]];
  data.image_one_url = urls.url_one
  data.image_two_url = urls.url_two;

}


const imagePool = {
  table_one: {
    url_one: 'https://fec-lanister-product-images.s3.amazonaws.com/aepplaroe-table-6-chairs-armr-bench-outdoor-brown-stained__0317089_PE515111_S5.jpeg',
    url_two: 'https://fec-lanister-product-images.s3.amazonaws.com/aepplaroe-table-6-chairs-armr-bench-outdoor-brown-stained__0667545_PE713955_S5.webp'
  },
  shark: {
    url_one: 'https://fec-lanister-product-images.s3.amazonaws.com/blahaj-soft-toy-shark__0710175_PE727378_S5.webp',
    url_two: 'https://fec-lanister-product-images.s3.amazonaws.com/blahaj-soft-toy-shark__0877368_PE633607_S5.webp'
  },
  bear: {
    url_one: 'https://fec-lanister-product-images.s3.amazonaws.com/djungelskog-soft-toy-brown-bear__0710168_PE727370_S5.webp',
    url_two: 'https://fec-lanister-product-images.s3.amazonaws.com/djungelskog-soft-toy-brown-bear__0877169_PE662334_S5.webp'
  },
  table_two: {
    url_one: 'https://fec-lanister-product-images.s3.amazonaws.com/ekedalen-extendable-table-oak__0736969_PE740833_S5.webp',
    url_two: 'https://fec-lanister-product-images.s3.amazonaws.com/ekedalen-extendable-table-oak__0871539_PE640620_S5.webp'
  },
  basket_one: {
    url_one: 'https://fec-lanister-product-images.s3.amazonaws.com/lustigkurre-basket-natural-jute__0922223_PE788091_S5.webp',
    url_two: 'https://fec-lanister-product-images.s3.amazonaws.com/lustigkurre-basket-natural-jute__0957733_PE805110_S5.webp'
  },
  basket_two: {
    url_one: 'https://fec-lanister-product-images.s3.amazonaws.com/lustigkurre-basket-natural-water-hyacinth-seagrass__0922247_PE788098_S5.webp',
    url_two: 'https://fec-lanister-product-images.s3.amazonaws.com/lustigkurre-basket-natural-water-hyacinth-seagrass__0944294_PE797232_S5.jpeg'
  },
  trolly: {
    url_one: 'https://fec-lanister-product-images.s3.amazonaws.com/raskog-trolley-white__0503386_PE632627_S5.webp',
    url_two: 'https://fec-lanister-product-images.s3.amazonaws.com/raskog-trolley-white__0870535_PE644566_S5.webp'
  },
  table_three: {
    url_one: 'https://fec-lanister-product-images.s3.amazonaws.com/skogsta-dining-table-acacia__0946419_PH173655_S5.jpeg',
    url_two: 'https://fec-lanister-product-images.s3.amazonaws.com/skogsta-dining-table-acacia__0946421_PH173663_S5.webp'
  },
}

addImagePair(data);

console.log(data);