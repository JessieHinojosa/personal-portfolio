import botanistImage from '../../assets/images/sm-mobile/botanist_screenshot.png';
import helperImage from '../../assets/images/sm-mobile/hunt-for-helpers.png';
import techWizImage from '../../assets/images/sm-mobile/tech-wiz.png';
import shopShopImage from '../../assets/images/sm-mobile/shop-shop.png';

export const ProjectData = [
    {
       name: `The botanist`,
       description: 'E-Commerce website that delivers exotic plants to your doorstep.',
       image: botanistImage,
       deployedUrl: `https://the-botanist-project.herokuapp.com/`,
       repoUrl: `https://github.com/jayMaverick/The-Botanist`,
       detail: ['Team of Two', 'Backend Developer', 'Two Week Deadline', 'Bootcamp Project'], // 4 item limit
       tech: ['React', 'MongoDb', 'Strip', 'GrapgQL'] // 4 item limit
    },
    {
        name: `Hunt for Helpers`,
        description: 'Platform to find and post events for those who want to give back.',
        image: helperImage,
        deployedUrl: `https://sheltered-savannah-38970.herokuapp.com/login`,
        repoUrl: `https://github.com/kdombrosky/hunt-for-helpers`,
        detail: ['Team of Two', 'Backend Developer', 'Two Week Deadline', 'Bootcamp Project'], // 4 item limit
        tech: [ 'Handlebars', 'MySQL', 'Bcrypt', 'Sequelize'],  // 4 item limit
    },
    {
        name: `Tech Wiz`,
        description: 'Social media platform, where tech enthusiest can come to share ideas.',
        image: techWizImage,
        deployedUrl: `https://lit-badlands-65708.herokuapp.com/login`,
        repoUrl: `https://github.com/jayMaverick/Tech-Wiz`,
        detail: ['Self', 'Full-Stack Developer','One Week Deadline', 'Bootcamp Homework'], // 4 item limit
        tech: ['Handlebars', 'MySQL', 'Bootstrap', 'Sequelize'],  // 4 item limit
    },
    {
     name: `Shop-Shop`,
     description: 'E-Commerce website to bring household nic-nacs to your doorstep.',
     image: shopShopImage,
     deployedUrl: `https://github.com/jayMaverick/shop-shop`,
     detail: ['Self', 'Full-Stack Developer', 'One Week Deadline', 'Bootcamp Tutorial' ], // 4 item limit
     tech: ['React', 'Apollo', 'GrapgQL', 'Redux'], // 4 item limit
    }
];
