// ═══════════════════════════════════════════════════════
//  data.js  —  Shared data store  (v5)
// ═══════════════════════════════════════════════════════
const CB  = "https://res.cloudinary.com/dftjvuiin/image/upload/v1771832825/mustardseedphotographypa/";
const CB2 = "https://res.cloudinary.com/dftjvuiin/image/upload/v1771874323/mustardseedphotographypa/";

const DEFAULTS = {
  hero:[
    {id:1,url:CB+"k1cbyjtfemwcdsmxniyq.jpg",tag:"Golden Hour",label:"Portrait Sessions"},
    {id:2,url:CB+"hm6htbfjtzdwzlfuyrla.jpg",tag:"New Beginnings",label:"Maternity Photography"},
    {id:3,url:CB+"aps1xr8d49xvkqxf4uef.jpg",tag:"Love Stories",label:"Couples & Engagement"},
    {id:4,url:CB+"pk1o1a7anjqfx6hdfcsh.jpg",tag:"Timeless Memories",label:"Family Photography"},
    {id:5,url:CB+"xz0olnm0oj7iim5fatjv.jpg",tag:"Tiny Miracles",label:"Newborn Photography"},
  ],
  about:{
    image:CB+"i5bhzpcqliqvfjgc94th.jpg",name:"Taylor",
    tagline:"Faith. Love. Photography.",
    bio1:"Mustard Seed Photography was founded on faith, purpose, and a deep love for capturing life's most meaningful moments. Inspired by Matthew 17:20 — this business began with a simple vision: to trust God with something small and allow Him to grow it into something beautiful.",
    bio2:"Every session is approached with intention, care, and a focus on genuine connection. The goal is to create timeless images that reflect not just how a moment looked, but how it felt.",
    location:"Pennsylvania, PA",
  },
  aboutMe:{
    heroImage:CB+"i5bhzpcqliqvfjgc94th.jpg",
    name:"Taylor",title:"The Face Behind the Lens",
    intro:"Hi, I'm Taylor — a faith-driven photographer based in Pennsylvania, passionate about capturing the moments that matter most.",
    story:"Photography found me at a time when I was learning to trust God in small things. What started as a hobby became a calling — one I never expected but am so grateful for. Every session is a reminder that ordinary moments, when captured with care, become extraordinary memories.",
    philosophy:"I believe in authentic connection over perfection. My style is warm, genuine, and storytelling-focused. I want you to feel comfortable, seen, and celebrated — exactly as you are.",
    funFacts:["Coffee-fueled golden hour chaser","Dog mom & nature lover","Faith is at the center of everything I do","Based in PA, available for travel"],
    quote:"\"Not by might, not by power, but by His Spirit.\" — Zechariah 4:6",
    instagram:"@mustardseedphotographypa",email:"Mustard.seed.photography.pa@gmail.com",phone:"+1 (717) 992-7226",
  },
  gallery:[
    {id:1,url:CB+"k1cbyjtfemwcdsmxniyq.jpg",category:"Portrait",title:"Golden Light Session"},
    {id:2,url:CB+"pk1o1a7anjqfx6hdfcsh.jpg",category:"Family",title:"Family Moments"},
    {id:3,url:CB+"hm6htbfjtzdwzlfuyrla.jpg",category:"Maternity",title:"Expecting Joy"},
    {id:4,url:CB+"xz0olnm0oj7iim5fatjv.jpg",category:"Newborn",title:"Newborn Dreams"},
    {id:5,url:CB+"aps1xr8d49xvkqxf4uef.jpg",category:"Couples",title:"Together Forever"},
    {id:6,url:CB+"ar0oizshfdkhjhty1sr5.jpg",category:"Senior",title:"Senior Portraits"},
    {id:7,url:CB+"ioje26ob42hjtoonfixx.jpg",category:"Family",title:"Autumn Family"},
    {id:8,url:CB+"b0vhlinrcdekw1wyjbul.jpg",category:"Maternity",title:"Radiant Maternity"},
    {id:9,url:CB+"srkfyasrqkajz2ur22fi.jpg",category:"Newborn",title:"Tiny Toes"},
    {id:10,url:CB+"xjdf6t48kq0imiemfyi4.jpg",category:"Couples",title:"Engagement Session"},
    {id:11,url:CB+"i5bhzpcqliqvfjgc94th.jpg",category:"Portrait",title:"Natural Beauty"},
  ],
  packages:[
    {id:1,name:"Mini Session",price:75,duration:"20 minutes",imgs:"5 edited images",featured:false,desc:"Perfect for quick portraits, headshots, or seasonal mini sessions."},
    {id:2,name:"Standard Session",price:120,duration:"45 minutes",imgs:"10 edited images",featured:true,desc:"The most popular choice — ideal for families, maternity, couples, and seniors."},
    {id:3,name:"Full Session",price:180,duration:"1 hour",imgs:"20 edited images",featured:false,desc:"A full, unhurried session with multiple looks for maximum variety."},
  ],
  testimonials:[
    {id:1,name:"Sarah M.",rating:5,text:"Taylor was awesome — communicative and down to earth! Didn't feel awkward, and we had a fun time. We loved how they turned out!",avatar:"",service:"Family"},
    {id:2,name:"Jessica R.",rating:5,text:"I can't say enough wonderful things about her incredible eye! She captured moments I didn't even know were happening.",avatar:"",service:"Maternity"},
    {id:3,name:"Amanda K.",rating:5,text:"Our newborn photos are absolute treasures. So gentle and patient with our little one. The photos are beyond beautiful.",avatar:"",service:"Newborn"},
    {id:4,name:"Rachel T.",rating:5,text:"Taylor made us feel so comfortable during our engagement session. The photos are stunning — we couldn't stop crying looking at them!",avatar:"",service:"Couples"},
    {id:5,name:"Lauren B.",rating:5,text:"The most beautiful maternity photos I've ever seen. Taylor has a true gift for capturing emotion and natural beauty.",avatar:"",service:"Maternity"},
    {id:6,name:"Emily & Dan",rating:5,text:"We booked a full family session and it was the best decision. The kids had so much fun and the photos are absolutely priceless.",avatar:"",service:"Family"},
  ],
  services:[
    {id:1,slug:"maternity",title:"Maternity Photography",icon:"🤰",num:"01",
      heroImage:CB+"hm6htbfjtzdwzlfuyrla.jpg",tagline:"Celebrating New Life",
      description:"Maternity photography is one of the most sacred sessions I have the honor of capturing. This season — full of anticipation, wonder, and deep love — goes by faster than anyone expects.\n\nInspired by faith and a deep respect for motherhood, every maternity session is approached with gentleness, intention, and care. Whether you prefer something natural and outdoor or soft and intimate indoors, we'll create something timeless together.",
      images:[CB+"hm6htbfjtzdwzlfuyrla.jpg",CB+"b0vhlinrcdekw1wyjbul.jpg",CB+"k1cbyjtfemwcdsmxniyq.jpg",CB+"i5bhzpcqliqvfjgc94th.jpg"]},
    {id:2,slug:"newborn",title:"Newborn Photography",icon:"👶",num:"02",
      heroImage:CB+"srkfyasrqkajz2ur22fi.jpg",tagline:"Tiny & Treasured",
      description:"There is nothing quite like the first days of a newborn's life — those tiny hands, that perfect little face, the way they curl up like they still remember where they came from.\n\nNewborn sessions are conducted with the utmost care and patience. Baby's comfort always comes first. Sessions are done in a calm, unhurried environment so both baby and parents feel relaxed.",
      images:[CB+"srkfyasrqkajz2ur22fi.jpg",CB+"xz0olnm0oj7iim5fatjv.jpg",CB+"pk1o1a7anjqfx6hdfcsh.jpg",CB+"k1cbyjtfemwcdsmxniyq.jpg"]},
    {id:3,slug:"family",title:"Family Photography",icon:"👨‍👩‍👧",num:"03",
      heroImage:CB+"pk1o1a7anjqfx6hdfcsh.jpg",tagline:"Your Story, Together",
      description:"Family is everything — and your photographs should reflect that. I believe the best family photos happen when everyone is relaxed, laughing, and truly themselves.\n\nFrom milestone sessions to casual annual portraits, I want to give you images that your family will treasure for generations. Because one day, these photos will be more valuable than you can imagine.",
      images:[CB+"pk1o1a7anjqfx6hdfcsh.jpg",CB+"ioje26ob42hjtoonfixx.jpg",CB+"hm6htbfjtzdwzlfuyrla.jpg",CB+"b0vhlinrcdekw1wyjbul.jpg"]},
    {id:4,slug:"timeless",title:"Timeless Moments",icon:"⏳",num:"04",
      heroImage:CB+"k1cbyjtfemwcdsmxniyq.jpg",tagline:"Everyday Beauty",
      description:"Some of the most meaningful photographs aren't taken at milestones — they're captured in the ordinary moments that make up a life. A child's laugh, a quiet afternoon, the way the light falls just right.\n\nTimeless Moments sessions are perfect for those who want to capture the beauty of everyday life — the version of your story that won't wait.",
      images:[CB+"k1cbyjtfemwcdsmxniyq.jpg",CB+"i5bhzpcqliqvfjgc94th.jpg",CB+"ar0oizshfdkhjhty1sr5.jpg",CB+"ioje26ob42hjtoonfixx.jpg"]},
    {id:5,slug:"birth",title:"Birth Photography",icon:"🌅",num:"05",
      heroImage:CB+"ar0oizshfdkhjhty1sr5.jpg",tagline:"The Most Sacred Moment",
      description:"Birth is the most raw, powerful, and sacred moment a family will ever experience. To be trusted with that is something I do not take lightly.\n\nI work quietly in the background, capturing the moments as they unfold — so you can stay fully present while knowing every moment is being preserved.",
      images:[CB+"ar0oizshfdkhjhty1sr5.jpg",CB+"srkfyasrqkajz2ur22fi.jpg",CB+"hm6htbfjtzdwzlfuyrla.jpg",CB+"b0vhlinrcdekw1wyjbul.jpg"]},
    {id:6,slug:"couples",title:"Couples / Engagement",icon:"💍",num:"06",
      heroImage:CB+"aps1xr8d49xvkqxf4uef.jpg",tagline:"Love as It Is",
      description:"Love is one of the most beautiful gifts God gives us — and every story deserves to be remembered. Whether you're newly engaged, celebrating a milestone, or simply wanting to capture the connection you share, these moments matter.\n\nNothing forced, nothing overly posed — just your love, exactly as it is. Because your love story is worth remembering — just as it was written.",
      images:[CB+"aps1xr8d49xvkqxf4uef.jpg",CB+"xjdf6t48kq0imiemfyi4.jpg",CB2+"acmzhrqnbqucfpn0spig.png",CB+"i5bhzpcqliqvfjgc94th.jpg"]},
    {id:7,slug:"senior",title:"Senior Portraits",icon:"🎓",num:"07",
      heroImage:CB+"i5bhzpcqliqvfjgc94th.jpg",tagline:"Your Moment to Shine",
      description:"Senior year is a season worth celebrating. These photos aren't just for college applications — they're a milestone, a memory, a testament to who you are right now.\n\nSenior portrait sessions are relaxed, personalized, and focused on capturing your personality. Whether you want something classic, adventurous, or creative — we'll make it yours.",
      images:[CB+"i5bhzpcqliqvfjgc94th.jpg",CB+"k1cbyjtfemwcdsmxniyq.jpg",CB+"ar0oizshfdkhjhty1sr5.jpg",CB+"aps1xr8d49xvkqxf4uef.jpg"]},
    {id:8,slug:"mini-sessions",title:"Seasonal Mini Sessions",icon:"🍂",num:"08",
      heroImage:CB+"ioje26ob42hjtoonfixx.jpg",tagline:"Seasonal Stories",
      description:"Seasonal mini sessions are a wonderful way to capture your family at the most beautiful times of year — without the full session commitment.\n\nSpring blooms, golden autumn leaves, festive winter backdrops — I design each mini session experience to be beautiful, efficient, and memorable.",
      images:[CB+"ioje26ob42hjtoonfixx.jpg",CB+"pk1o1a7anjqfx6hdfcsh.jpg",CB+"hm6htbfjtzdwzlfuyrla.jpg",CB+"srkfyasrqkajz2ur22fi.jpg"]},
  ],
};

const KEYS={hero:"msp_hero_v5",about:"msp_about_v5",aboutMe:"msp_aboutme_v5",gallery:"msp_gallery_v5",packages:"msp_pkgs_v5",testimonials:"msp_tests_v5",services:"msp_services_v5"};

function load(key){
  try{const s=localStorage.getItem(KEYS[key]);return s?JSON.parse(s):JSON.parse(JSON.stringify(DEFAULTS[key]));}
  catch{return JSON.parse(JSON.stringify(DEFAULTS[key]));}
}
function save(key,val){try{localStorage.setItem(KEYS[key],JSON.stringify(val));}catch{}}
function readFileAsBase64(file){return new Promise(res=>{const r=new FileReader();r.onload=e=>res(e.target.result);r.readAsDataURL(file);});}
function broadcastChange(key){try{localStorage.setItem("msp_changed",key+"_"+Date.now());}catch{}}
function persist(key,val){save(key,val);broadcastChange(key);}
