import { FC } from 'react';
import { Heading3 } from '../identity/heading-3';

export type Review = {
  name: string;
  text: string;
  img: string;
};

export type ReviewsProps = {
  reviews: Review[];
};

const Reviews: FC<ReviewsProps> = ({ reviews }) => (
  <>
    {reviews.map(({ name, text, img }) => (
      <div key={name} className="sm:mx-16 md:mx-0">
        <img src={img} className="rounded-full object-cover w-32 h-32 my-4 md:mb-2 md:mr-8" />
        <div>
          <Heading3 className="lg:mt-0">{name}</Heading3>
          <p className="mx-w-prose">{text}</p>
        </div>
      </div>
    ))}
  </>
);

export default Reviews;
