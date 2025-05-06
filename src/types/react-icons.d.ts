declare module 'react-icons/fa' {
  import { FC, SVGAttributes } from 'react';
  
  export interface IconBaseProps extends SVGAttributes<SVGElement> {
    size?: string | number;
    color?: string;
    title?: string;
  }
  
  export type IconType = FC<IconBaseProps>;
  
  export const FaGithub: IconType;
  export const FaLinkedin: IconType;
  export const FaEnvelope: IconType;
  export const FaPhone: IconType;
  export const FaBars: IconType;
  export const FaTimes: IconType;
  export const FaExternalLinkAlt: IconType;
} 