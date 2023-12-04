import { trigger, transition, style, animate } from '@angular/animations';

export const fadeInOut = trigger('fadeInOut', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('0.5s', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    animate('0.5s', style({ opacity: 0 })),
  ]),
]);

export const slideInOut = trigger('slideInOut', [
  transition(':enter', [
    style({ transform: 'translateY(-40%)' }), 
    animate('0.5s', style({ transform: 'translateY(0)' })), 
  ]),

]);