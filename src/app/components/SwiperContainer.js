import Swiper from "swiper";
// import "swiper/css/bundle";

const SwipperContainer = ({
  contents,
  count,
  xxlCount,
  xlCount,
  lgCount,
  mdCount,
  smCount,
  xsCount,
  xmdCount,
  hashTag,
  padding,
  contentTitleStyle,
  trucContentTitle,
  contentTitlePadding,
  reverseDirection = false,
  type = "podcasts",
  navBtnId = "navBtn",
  loop = true,
  disableOnInteraction = false,
  delay = 1000,
  spaceBetween = 30,
  breakpoint = true,
  ContentCard,
  options = {},
  autoplay = true,
  swiperId = "",
}) => {
  return (
    <div className="swiper-wrapper">
      {contents.length > 0 && (
        <swiper-container
          //   modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          space-between={spaceBetween}
          slides-per-view={1}
          loop={loop}
          id={swiperId}
          breakpoints={
            breakpoint
              ? JSON.stringify({
                  320: {
                    slidesPerView: xsCount || 1,
                  },
                  500: {
                    slidesPerView: smCount || 2,
                  },
                  600: {
                    slidesPerView: xmdCount || 1.3,
                  },
                  768: {
                    slidesPerView: mdCount || 2,
                  },
                  992: {
                    slidesPerView: lgCount || 3,
                  },
                  1200: {
                    slidesPerView: xlCount || count || 4,
                  },
                  1300: {
                    slidesPerView: xxlCount || count || 4,
                  },
                })
              : null
          }
          //   autoplay={
          //     autoplay
          //       ? {
          //           delay: delay,
          //           disableOnInteraction: disableOnInteraction,
          //           reverseDirection: reverseDirection,
          //         }
          //       : false
          //   }
          //   navigation={{
          //     clickable: true,
          //     nextEl: `.${navBtnId}-next`,
          //     prevEl: `.${navBtnId}-prev`,
          //   }}
        >
          {contents.map((content, index) => {
            return (
              <swiper-slide key={index}>
                <ContentCard content={content} options={{ options }} />
              </swiper-slide>
            );
          })}
        </swiper-container>
      )}
    </div>
  );
};

export default SwipperContainer;
