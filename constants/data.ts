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
        photo: B101,
        price: 1500,
        description_en: "Idol made from holy soil of Baikund Dham Shri Badrinath and divine water of Satopanth.",
        description_hn: "बैकुण्ड धाम श्री बद्रीनाथ जी की पवित्र माटी एवं सतोपंथ के दिव्य जल से निर्मित आकृति ।",
    },
    {
        _id: 2,
        title_en: "Shri Kedarnath Ji",
        title_hn: "श्री केदारनाथ जी",
        image: [K202, K201],
        price: 2500,
        description_en: "Idol made from holy soil of Baikund Dham Shri Badrinath and divine water of Satopanth.",
        description_hn: "बाबा श्री केदारनाथ जी की पवित्र माटी एवं गंगे मैया के दिव्य जल से निर्मित आकृति ।",
    },
    {
        _id: 3,
        title: "Product 3",
        image: ["/P2101.jpg", "/S2202.jpg"],
        price: 3500,
        description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    }
]
