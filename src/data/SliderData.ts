//@ts-ignore
import img1 from "../assets/images/sliderimg1.png"; //@ts-ignore
import img2 from "../assets/images/sliderimg2.png"; //@ts-ignore
import img3 from "../assets/images/sliderimg3.png"; //@ts-ignore
import img4 from "../assets/images/sliderimg4.png"; //@ts-ignore
import img5 from "../assets/images/sliderimg5.png"; //@ts-ignore
import img6 from "../assets/images/sliderimg6.png"; //@ts-ignore

export const sliderData: { id: number; images: string[] }[] = [
  {
    id: 1,
    images: [img4, img1, img5],
  },
  {
    id: 2,
    images: [img6, img2, img3],
  },
];

export const sliderDataSingle: { id: number; images: string[] }[] = [
  {
    id: 1,
    images: img4,
  },
  {
    id: 2,
    images: img1,
  },
  {
    id: 3,
    images: img5,
  },
  {
    id: 4,
    images: img6,
  },
  {
    id: 5,
    images: img2,
  },
  {
    id: 6,
    images: img3,
  },
];
