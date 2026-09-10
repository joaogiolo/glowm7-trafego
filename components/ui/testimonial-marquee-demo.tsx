"use client";

import {
  TestimonialMarquee,
  type Testimonial,
} from "@/components/ui/testimonial-marquee";

// NOTE: the demo shipped with this component uses inline base64 avatars.
// The version received in this project was truncated, so this file keeps the
// same shape with local placeholder avatars instead.
const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    username: "sarahbuilds",
    text: "This is hands down the smoothest marquee I've dropped into a project. Zero jank and it just works out of the box.",
    avatar: "/avatars/01.jpg",
  },
  {
    name: "Marcus Lee",
    username: "marcuscodes",
    text: "Shipped our new landing page in an afternoon. The social proof section alone converted way better than our old one.",
    avatar: "/avatars/02.jpg",
  },
  {
    name: "Priya Nair",
    username: "priyadesigns",
    text: "Beautiful defaults and the pause-on-hover detail is such a nice touch. My clients love it.",
    avatar: "/avatars/03.jpg",
  },
  {
    name: "Tom Alvarez",
    username: "toma",
    text: "I replaced a heavy carousel library with this and cut my bundle size noticeably. Highly recommend.",
    avatar: "/avatars/04.jpg",
  },
  {
    name: "Elena Rossi",
    username: "elenar",
    text: "Dropped it in, passed my testimonials array, and it just looked polished. Exactly what I needed.",
    avatar: "/avatars/05.jpg",
  },
  {
    name: "David Kim",
    username: "davidk",
    text: "The infinite scroll is buttery smooth even on mobile. Genuinely impressed with the performance.",
    avatar: "/avatars/06.jpg",
  },
];

// ONLY DEFAULT EXPORT WILL BE TREATED AS A DEMO
export default function DemoOne() {
  return (
    <div className="w-full overflow-hidden bg-background py-6">
      <TestimonialMarquee items={testimonials} variant="dual" />
    </div>
  );
}
