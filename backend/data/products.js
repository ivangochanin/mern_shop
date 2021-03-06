const products = [
  {
    name: 'JodyJazz HR 6*',
    image: '/images/mouthpieceSoprano.jpg',
    description: 'Mouthpiece Soprano sax. The HR* is a hard rubber saxophone mouthpiece aimed at professionals and students looking for a traditional versatile mouthpiece. High quality control standards, a beautiful warm sound and a nice free-blowing feel make these soprano saxophone mouthpieces amazing players. The mouthpiece comes with Deluxe Mouthpiece Pouch. This mouthpiece does not come with a ligature. Your current ligature (if you have a hard rubber mouthpiece) should fit this, but you can also take a look here at our H-Ligatures option.',
    brand: 'JodyJazz',
    category: 'Instruments',
    price: 179.99, 
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: 'Otto Link Super Tonemaster Tenor 7*',
    image: '/images/mouthpieceTenor.jpg',
    description: 'Tenor sax mouthpiece. This otto link mouthpiece plays beautifully. Mouthpiece has a great jazz sound to it. Kind of that standard kind of link tone.  Nice fat round sound that leans towards the darker side of the spectrum. It also has a bit of an airy texture to the tone that is really nice. Gold plated bronze, including ligature and cap.',
    brand: 'Otto Link',
    category: 'Instruments',
    price: 310.99,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    name: 'Sx Soprano Sax',
    image: '/images/saxSoprano.jpg',
    description:
      'Brass straight soprano Bb sax. Woodwind instrument natural shell key carve pattern with carrying case and mouthpiece.',
    brand: 'Sx',
    category: 'Instruments',
    price: 399.99,
    countInStock: 11,
    rating: 3.5,
    numReviews: 12,
  },
  {
    name: 'Julius Keilwerth EX90 II Black',
    image: '/images/saxAlto.jpg',
    description:
      'Black and gold-plated EX90 Series II alto saxophone made by Julius Keilwerth in Germany(serialNo: 118612), well known for its high quality professional saxophones. Great alto saxophone, strong sound and very beautiful in color! Comes with a Gator case. Leather pads with metal resonators. The Black nickel version has a rounder, darker tone compared to the standard version.',
    brand: 'Julius Keilwerth',
    category: 'Instruments',
    price: 1644.99,
    countInStock: 1,
    rating: 4.5,
    numReviews: 10,
  },
  {
    name: 'Yamaha YTS-23',
    image: '/images/saxTenor.jpg',
    description:
      'Yamaha YTS-23 tenor saxophone or, as musicians call it, The Giant Killer. The 23 followed on from the 21, which was in production for about 10 years from 1970 - and while the 21 was a groundbreaking horn in its day, it is clear that the 23 is a more mature horn both in terms of design and appearance. A solid horn for beginner and intermediate players. More developed players might find it slightly thin sounding or find the octave mechanism less comfortable than the average setup.',
    brand: 'Yamaha',
    category: 'Instruments',
    price: 627.99,
    countInStock: 1,
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: 'Bosendorfer 170 1940',
    image: '/images/pianoBosendorfer.jpg',
    description: 'Original Austrian Bosendorfer grand piano. This beautifully sounding Bosendorfer 170 was recently restored. New tuning pins and complete reconditioning of the action. If desired - Hammerheads could be replaced. In the price we include transport. The color is currently Black matte. The action as well as the keyboard have been overhauled and can be played with precision. Original great deep Bosendorfer sound.',
    brand: 'Bosendorfer',
    category: 'Instruments',
    price: 11201.99,
    countInStock: 0,
    rating: 2,
    numReviews: 12,
  },
  {
    name: 'Kawai VPC1',
    image: '/images/pianoKawai.jpg',
    description:'A piano controller from a company famous for building world-class pianos. The VPC1 is simply the finest controller of its kind ??? a professional MIDI controller developed for virtual piano players. Wooden-key keyboard action technology. The Kawai VPC1 is an instrument for the truly discerning music creator. It???s for someone who is not only a skilled MIDI-based musician, but also a connoisseur of great piano touch. For those who understand how the ???feel??? of the keyboard directly affects the outcome of a composition or performance, nothing less than the most authentic and sensitive piano touch will do. Having spent over 90 years advancing the nuanced art of the piano, we know what it takes to create a superb keyboard action. We also know what you want and need to maximize the creative process. As the embodiment of that knowledge and experience, we proudly present the VPC1??? an instrument with unparalled touch that we hope will become a valued partner in the creation of transcendent musical outcomes.',
    brand: 'Kawai',
    category: 'Instruments',
    price: 1209.99,
    countInStock: 2,
    rating: 5,
    numReviews: 12,
  },
  {
    name: 'Arturia KeyLab 61 MkII',
    image: '/images/pianoArturia.jpg',
    description:'KeyLab MkII is an expressive, versatile studio controller that works seamlessly with your DAW, virtual instruments, hardware, and modular gear. Providing one of the most comprehensive controller experiences in the music industry, KeyLab MkII has been designed to give you unprecedented levels of control while still being ergonomic and simple to use. KeyLab MkII is the best of both worlds: giving users deep control over their recording and performing environment while being streamlined, easy to master, and fun to use.',
    brand: 'Arturia',
    category: 'Instruments',
    price: 525.99,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    name: 'Korg nanoKONTROL2',
    image: '/images/nanokontrol.jpg',
    description: 'Convenient, compact control surface, with easy setup for immediate use. Complete control for your DAW or software synthesizer.',
    brand: 'Korg',
    category: 'Electronics',
    price: 32.99,
    countInStock: 11,
    rating: 3,
    numReviews: 12,
  },
  {
    name: 'Korg OT-120',
    image: '/images/tuner.jpg',
    description: 'The OT-120 is a chromatic tuner intended for the orchestra, packaging high performance and sophisticated functionality in a vertical design that is easy to hold and operate. It features a dual-display, an easy-to-see needle-type indicator and a backlit LCD screen that shows the battery level, sound output level, calibration, key and note name. Additional design features include a large dial that makes it easy to select the desired mode, finger-friendly buttons and a rear-mounted stand that lets the unit stand by itself. A sophisticated silver aluminum panel contributes to its sleek, new look.',
    brand: 'Korg',
    category: 'Electronics',
    price: 81.99,
    countInStock: 11,
    rating: 2.5,
    numReviews: 12,
  },
  {
    name: 'Nikon D7100',
    image: '/images/cameraNikon.jpg',
    description:
      'The Nikon D7100 is a 24.1-megapixel digital single-lens reflex camera model announced by Nikon in February 2013. When using the D7100 as a video capture mode, the camera will display audio meter overlays over the left edge of the LCD. The D7100 does not allow the lens aperture to be adjusted during video capture. The slowest shutter speed in video capture mode appears to be 1/25th of a second. At launch, Nikon gave the D7100 Estimated Selling Price in the United States as US$949.95 for the body.',
    brand: 'Nikon',
    category: 'Electronics',
    price: 520.99,
    countInStock: 5,
    rating: 3.5,
    numReviews: 12,
  },
  {
    name: 'Sigma 50mm f/1.4 DG HSM ART-Nikon',
    image: '/images/sigmaArt.jpg',
    description:'The staple Sigma 50mm 1.4 DG HSM has been redesigned and re-engineered to set a new standard for the Art line. With a large 1.4 aperture, the Sigma 50mm 1.4 prime lens is a pro level performer for shooting everything including portrait photography, landscape photography, studio photography and street photography. A Hyper Sonic Motor (HSM) ensures quiet, smooth and accurate auto-focusing and paired with Special Low Dispersion (SLD) glass and Super Multi-Layer coating, the 50mm 1.4 is a high performance lens for the modern DSLR sensors. 13 elements in 8 groups allow for unsurpassed performance even at wide apertures and close-up photography is easily managed with a minimum focusing distance of 40cm. The Sigma 50mm 1.4 lens is the new exceptional standard, standard prime.',
    brand: 'Amazon',
    category: 'Electronics',
    price: 722.99,
    countInStock: 8,
    rating: 4,
    numReviews: 12,
  }
]

export default products
