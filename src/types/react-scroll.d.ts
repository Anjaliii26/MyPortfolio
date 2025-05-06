declare module 'react-scroll' {
  import * as React from 'react';

  export interface LinkProps extends React.HTMLAttributes<HTMLElement> {
    to: string;
    spy?: boolean;
    smooth?: boolean;
    offset?: number;
    duration?: number;
    delay?: number;
    isDynamic?: boolean;
    onSetActive?: (to: string) => void;
    onSetInactive?: (to: string) => void;
    ignoreCancelEvents?: boolean;
    spyThrottle?: number;
    activeClass?: string;
    containerId?: string;
    hashSpy?: boolean;
    spy?: boolean;
    smooth?: boolean;
    offset?: number;
    duration?: number;
    delay?: number;
    isDynamic?: boolean;
    onSetActive?: (to: string) => void;
    onSetInactive?: (to: string) => void;
    ignoreCancelEvents?: boolean;
    spyThrottle?: number;
    activeClass?: string;
    containerId?: string;
    hashSpy?: boolean;
  }

  export class Link extends React.Component<LinkProps> {}
  export class Element extends React.Component<any> {}
  export class Events extends React.Component<any> {}
  export class scrollSpy extends React.Component<any> {}
  export class scroller extends React.Component<any> {}
} 