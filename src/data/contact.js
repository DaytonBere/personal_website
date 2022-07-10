import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://www.linkedin.com/in/dayton-berezoski-4776321a7/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'mailto:daytonbere@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
  {
    link: 'https://github.com/DaytonBere',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.instagram.com/daytonbere/',
    label: 'Instagram',
    icon: faInstagram,
  },
];

export default data;
