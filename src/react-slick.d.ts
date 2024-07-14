declare module 'react-slick' {
    import { Component } from 'react';
  
    interface SliderProps {
      className?: string;
      adaptiveHeight?: boolean;
      arrows?: boolean;
      autoplay?: boolean;
      autoplaySpeed?: number;
      centerMode?: boolean;
      centerPadding?: string;
      cssEase?: string;
      dots?: boolean;
      draggable?: boolean;
      easing?: string;
      fade?: boolean;
      focusOnSelect?: boolean;
      infinite?: boolean;
      initialSlide?: number;
      lazyLoad?: 'ondemand' | 'progressive';
      pauseOnHover?: boolean;
      responsive?: Array<{ breakpoint: number; settings: Partial<SliderProps> }>;
      rtl?: boolean;
      slide?: string;
      slidesToShow?: number;
      slidesToScroll?: number;
      speed?: number;
      swipe?: boolean;
      swipeToSlide?: boolean;
      touchMove?: boolean;
      touchThreshold?: number;
      variableWidth?: boolean;
      useCSS?: boolean;
      useTransform?: boolean;
      vertical?: boolean;
      waitForAnimate?: boolean;
      beforeChange?: (current: number, next: number) => void;
      afterChange?: (current: number) => void;
      slickGoTo?: number;
    }
  
    export default class Slider extends Component<SliderProps> {}
  }