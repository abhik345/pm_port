import bannerImage from "/assets/banner1.jpg";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LazyLoad from "react-lazyload";

const Banner = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.set(".cite-with-line", { autoAlpha: 0 });
    tl.fromTo(
      ".cite-with-line",
      { autoAlpha: 0, x: 20 },
      { autoAlpha: 1, x: 0, duration: 1.75, stagger: 0.2 }
    );
  }, []);

  return (
    <section className="relative w-full h-[800px] flex items-center justify-end">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat filter"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <LazyLoad height={200} offset={100}>
          <img
            src={bannerImage}
            alt="Banner"
            className="hidden"
            onLoad={() => {
              gsap.to(".hidden", { opacity: 1 });
            }}
          />
        </LazyLoad>
      </div>
      <div className="relative lg:max-w-2xl  max-w-3xl px-4 sm:px-6 lg:px-4 lg:right-32 py-16 text-right right-10 sm:right-20 md:right-40">
        <blockquote className="relative">
          <svg
            className="absolute -top-6 -left-4 sm:-left-6 md:-left-8 lg:-left-16 xl:-left-16 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 text-[#DCA514] dark:text-neutral-700"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
              fill="currentColor"
            ></path>
          </svg>

          <TextRevealAnimation />
          <svg
            className="absolute -right-10 sm:-right-12 md:-right-14 lg:-right-16 xl:-right-16 -bottom-5 transform rotate-180 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 text-[#DCA514] dark:text-neutral-700"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
              fill="currentColor"
            ></path>
          </svg>

          <cite className="absolute -bottom-10 sm:-bottom-12 md:-bottom-16 lg:-bottom-20 xl:-bottom-20 right-3 font-medium text-white text-2xl not-italic cite-with-line">
            Pramod K Maloo
          </cite>
        </blockquote>
      </div>
    </section>
  );
};

export default Banner;

gsap.registerPlugin(ScrollTrigger);

const useGsap = (animation, dependencies = []) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      animation();
    });

    return () => ctx.revert();
  }, dependencies);
};

const splitText = (text) => {
  const words = text.split(" ");
  return words;
};

const TextRevealAnimation = () => {
  const textRef = useRef();

  useGsap(() => {
    const chars = textRef.current.querySelectorAll(".char");

    const createScrollTrigger = (triggerElement, timeline) => {
      ScrollTrigger.create({
        trigger: triggerElement,
        start: "top bottom",
        onLeaveBack: () => {
          timeline.progress(0);
          timeline.pause();
        },
      });

      ScrollTrigger.create({
        trigger: triggerElement,
        start: "top 60%",
        onEnter: () => timeline.play(),
      });
    };

    const tl = gsap.timeline({ paused: true });
    tl.from(chars, {
      opacity: 0,
      yPercent: 100,
      duration: 0.5,
      ease: "back.out(2)",
      stagger: { amount: 0.5 },
    });
    createScrollTrigger(textRef.current, tl);
  }, []);

  const text =
    "I just wanted to say that I'm very happy with my purchase so far. The documentation is outstanding - clear and detailed.";
  const textArray = splitText(text);

  return (
    <div className="relative z-10">
      <p ref={textRef} className="text-white text-container words-slide-up">
        {textArray.map((word, wordIndex) => (
          <>
            <span key={wordIndex} className="inline-block char sm:text-md">
              {word}
            </span>
            <span className="mx-1"></span>
          </>
        ))}
      </p>
    </div>
  );
};

export { TextRevealAnimation };
