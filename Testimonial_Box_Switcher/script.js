const testimonials = [
  {
    name: 'Adam Randy',
    position: 'Marketing',
    photo: 'https://randomuser.me/api/portraits/men/41.jpg',
    text: "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time.",
  },
  {
    name: 'Christopher Alex',
    position: 'Software Engineer',
    photo: 'https://randomuser.me/api/portraits/men/42.jpg',
    text: 'This guy is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!',
  },
  {
    name: 'Iida Niskanen',
    position: 'Data Entry',
    photo: 'https://randomuser.me/api/portraits/men/68.jpg',
    text: "This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelancers. We'll definitely repeat with him.",
  },
  {
    name: 'Sean Doe',
    position: 'Receptionist',
    photo: 'https://randomuser.me/api/portraits/men/65.jpg',
    text: "This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future.",
  },
  {
    name: 'Jonathan Nunfiez',
    position: 'Graphic Designer',
    photo: 'https://randomuser.me/api/portraits/men/43.jpg',
    text: "I had my concerns that due to a tight deadline this project can't be done. But this guy proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again and I totally recommend him. Thanks again!",
  },
  {
    name: 'West Obama',
    position: 'Accountant',
    photo: 'https://randomuser.me/api/portraits/men/21.jpg',
    text: 'This guy is a top notch designer and front end developer. He communicates well, works fast and produces quality work. We have been lucky to work with him!',
  },
  {
    name: 'Veeti Seppanen',
    position: 'Director',
    photo: 'https://randomuser.me/api/portraits/men/97.jpg',
    text: 'This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic. He is very strong in PSD2HTML conversions and HTML/CSS technology. He is a quick learner, eager to learn new technologies. He is focused and has the good dynamics to achieve due dates and outstanding results.',
  },
];

const testimonialContainer = document.querySelector('.testimonial-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user img');
const username = document.querySelector('.username');
const userRole = document.querySelector('.role');
let idx = 0;

function displayTestimonials() {
  const { name, position, photo, text } = testimonials[idx];

  testimonial.innerText = text;
  userImage.src = photo;
  username.innerText = name;
  userRole.innerText = position;

  if (idx > testimonials.length - 1) {
    idx = 0;
  }

  idx++;
}

function init() {
  setInterval(displayTestimonials, 10000);
}

document.addEventListener('DOMContentLoaded', init);
