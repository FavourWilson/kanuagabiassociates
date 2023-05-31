export const nextSlide = (
  slideIndex: number,
  data: any,
  setSlideIndex: any,
  id: any
) => {
  if (slideIndex !== data.length - 1) {
    setSlideIndex(slideIndex + 1);
  } else {
    setSlideIndex(0);
  }
  clearInterval(id);
  console.log(id);
};
export const prevSlide = (
  slideIndex: number,
  data: any,
  setSlideIndex: any,
  id: any
) => {
  if (slideIndex === 0) {
    setSlideIndex(data.length - 1);
  } else {
    setSlideIndex(slideIndex - 1);
  }
  clearInterval(id);
};
