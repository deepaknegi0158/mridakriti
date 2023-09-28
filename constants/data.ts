import B101 from '../public/P2101.jpg';
import B102 from '../public/P2102.jpg';

import K201 from '../public/S2202.jpg';
import K202 from '../public/S2203.jpg';


export const productData = [
    {
        _id: 1,
        title_en: "Shri Badrinath Ji",
        title_hn: "श्री बद्रीनाथ जी",
        image: [B102, B101],
        photo: B102,
        price: '₹1500',
        description_en: "Idol made from holy soil of Baikund Dham Shri Badrinath and divine water of Satopanth.",
        description_hn: "बैकुण्ड धाम श्री बद्रीनाथ जी की पवित्र माटी एवं सतोपंथ के दिव्य जल से निर्मित आकृति ।",
        features: [
            'Feature 1: Lorem ipsum dolor sit amet',
            'Feature 2: Consectetur adipiscing elit',
            'Feature 3: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        ],
        sizes: ['Small', 'Medium', 'Large'],
    },
    {
        _id: 2,
        title_en: "Shri Kedarnath Ji",
        title_hn: "श्री केदारनाथ जी",
        image: [K202, K201],
        photo: K202,
        price: '₹1500',
        description_en: "Idol made from holy soil of Baikund Dham Shri Badrinath and divine water of Satopanth.",
        description_hn: "बाबा श्री केदारनाथ जी की पवित्र माटी एवं गंगे मैया के दिव्य जल से निर्मित आकृति ।",
        features: [
            'Feature 1: Lorem ipsum dolor sit amet',
            'Feature 2: Consectetur adipiscing elit',
            'Feature 3: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        ],
        sizes: ['Small', 'Medium', 'Large'],
    },

]
