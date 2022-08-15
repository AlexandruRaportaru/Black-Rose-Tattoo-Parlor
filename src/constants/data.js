import images from './images';

function importAll(r) {
  let tattooImages = {};
  r.keys().map((item, index) => { tattooImages[item.replace('./', '')] = r(item); });
  return tattooImages;
}
const vitoImages = importAll(require.context('../assets/vito', false, /\.(png|jpe?g|svg)$/));
const griseldaImages = importAll(require.context('../assets/griselda', false, /\.(png|jpe?g|svg)$/));
const nickImages = importAll(require.context('../assets/nick', false, /\.(png|jpe?g|svg)$/));
const mariaImages = importAll(require.context('../assets/maria', false, /\.(png|jpe?g|svg)$/));
const carloImages = importAll(require.context('../assets/carlo', false, /\.(png|jpe?g|svg)$/));
const raffaellaImages = importAll(require.context('../assets/raffaella', false, /\.(png|jpe?g|svg)$/));
const domenicoImages = importAll(require.context('../assets/domenico', false, /\.(png|jpe?g|svg)$/));
const rosettaImages = importAll(require.context('../assets/rosetta', false, /\.(png|jpe?g|svg)$/));



const artists = [
  {
    imgArtist: images.vito,
    galleryArtist: vitoImages,
    nameArtist: 'Vito',
    descriptionArtist: <span>Owner/operator Vito Genovesse has tattooed Rihanna in the tropics, Lebron James in his basement, Cara Delevingne on a roof, Katy Perry in Stockholm’s Abba Museum, and Justin Bieber on a plane at 30,000 feet. Stay tuned and check Instagram for an availability announcement!</span>
  },
  {
    imgArtist: images.griselda,
    galleryArtist: griseldaImages,
    nameArtist: 'Griselda',
    descriptionArtist: <span>Specializes in illustrative fine art in color & black and gray.<br/><br/> Griselda has a great grasp of feminine style and design along with a completely unique take on tattooing. She is sought after and known for her laser like precision.</span>
  },
  {
    imgArtist: images.nick,
    galleryArtist: nickImages,
    nameArtist: 'Nick',
    descriptionArtist: <span>Specializes in illustrative color, fine line and graphic new school.<br/><br/> Nick met Vito while they traded off window shifts at another shop. They only put the best artists in the window, so when Vito opened his own place, Nick was one of the first hires.</span>
  },
  {
    imgArtist: images.maria,
    galleryArtist: mariaImages,
    nameArtist: 'Maria',
    descriptionArtist: <span>Specializes in realism and fine line.<br/><br/> Maria says, “Each person I work with I see as a unique canvas with the intent to be adorned. Nothing truly compares to the feeling of giving my clients a meaningful and beautiful tattoo for them to cherish on their life’s journey.”</span>
  },
  {
    imgArtist: images.carlo,
    galleryArtist: carloImages,
    nameArtist: 'Carlo',
    descriptionArtist: <span>Specializes in fine line and minimalism, abstract & geometric art.<br/><br/> Carlo is originally from Naples, Italy. Some would describe his works as minimalist, or geometric. Whilst most of his tattoos often contain all those elements, his designs are something we cannot categorize in one or two standard tattoo styles.</span>
  },
  {
    imgArtist: images.raffaella,
    galleryArtist: raffaellaImages,
    nameArtist: 'Raffaella',
    descriptionArtist: <span>Specializes in single needle and fine line.<br/><br/> Raffaella is originally from Palermo, Italy. With a following that is inspired by her designs, the passion she started with still holds true. She says, “It’s hard work, a lot of focus and a lot of trial and error. When I decided to grab a machine for the first time, I never wanted to stop.”</span>
  },
  {
    imgArtist: images.domenico,
    galleryArtist: domenicoImages,
    nameArtist: 'Domenico',
    descriptionArtist: <span>Specializes in ornamental tribal.<br/><br/> Originally from Catania, Italy, Domenico says, “I’ve always been interested in spirituality and religion and the imagery behind it. On my own, I would always draw Buddhas or meditating figures. I’ve been meditating since I was a teen and reading on Buddhism and spirituality.”</span>
  },
  {
    imgArtist: images.rosetta,
    galleryArtist: rosettaImages,
    nameArtist: 'Rosetta',
    descriptionArtist: <span>Specializes in watercolor.<br/><br/> Originally from Villalba, Sicily, Italy, her favorite subjects to paint are galaxies and space themed adornments. Rosetta says “I am convinced that we live inside galaxies found in the cosmos. I will one day find a way to travel among the stars.”</span>
  }
]

const reviews = [
  {
    imgCeleb: images.megan,
    nameCeleb: 'Megan',
    commentCeleb: '“It was an amazing experience. Felt very comfortable, bearable pain and the tattoo artist Rosetta was super friendly. Worth the experience.”',
  },
  {
    imgCeleb: images.rihanna,
    nameCeleb: 'Rihanna',
    commentCeleb: '“A really friendly place to get your first tattoo done! Great artists who are willing to listen patiently to your suggestions! My first tattoo experience with Vito couldn’t have been better.”',
  },
  {
    imgCeleb: images.david,
    nameCeleb: 'David',
    commentCeleb: '“I am really happy with how the tattoo turned out. Carlo is pretty good at what he does. All I can say is my first tattoo is not a regret. Thanks to Black Rose Tattoo Parlor.”',
  },
  {
    imgCeleb: images.kelly,
    nameCeleb: 'Kelly',
    commentCeleb: '“I have took my first tattoo here, team is really professional and maintained good hygiene practices during pandemic time. I am extremely happy with their service. I strongly recommend Griselda as a tattoo artist.”',
  },
];

const logos = [
    images.hb,
    images.lat,
    images.ny,
    images.nyt,
    images.obs,
    images.wwd,
    images.hp,
    images.r29,
    images.vogue,
    images.mtv,
]


export default { artists, reviews, logos };
