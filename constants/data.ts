import B101 from '../public/P2101.jpg';
import B102 from '../public/P2102.jpg';

import K201 from '../public/S2202.jpg';
import K202 from '../public/S2203.jpg';


export const productData = [
    {
        _id: 1,
        title: "Badrinath Ji",
        image: [B102, B101],
        photo: B101,
        price: 1500,
        description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    },
    {
        _id: 2,
        title: "Kedarnath Ji",
        image: [K202, K201],
        price: 2500,
        description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    },
    {
        _id: 3,
        title: "Product 3",
        image: ["/P2101.jpg", "/S2202.jpg"],
        price: 3500,
        description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    }
]
