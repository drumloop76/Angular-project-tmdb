import { animate, state, style, transition, trigger } from "@angular/animations";

export const Animations = {
    menuToggler: trigger('menuToggler', [
        state('burger', style({})),
        state('topBar', 
            style({   
                transform: 'rotate(405deg)',
                top: '18px',
                left: '10px' })),
        state('middleBar', style({ opacity: 0 })),
        state('bottomBar', 
            style({ 
                transform: 'rotate(-405deg)',
                top: '18px',
                left: '10px' })),
        transition('* => *', animate('.3s ease-out'))
    ]),
    openCloseNav: trigger('openCloseNav', [
        state('true', style({ left: '0px' })),
        state('false', style({ left: '-300px' })),
        transition('false <=> true', animate('.3s ease-out'))
    ]),
    openCloseDropdown: trigger('openCloseDropdown', [
        state('true', style({ height: '*' })),
        state('false', style({ height: '0px' })),
        transition('false <=> true', animate('.3s ease-out'))
    ]),
    rotateCaret: trigger('rotateCaret', [
        state('true', style({ transform: 'rotate(0deg)' })),
        state('false', style({ transform: 'rotate(180deg)' })),
        transition('false <=> true', animate('.3s ease-out'))
    ]),
    openCloseMedia: trigger('openCloseMedia', [
        state('true', style({ top: '50px' })),
        state('false', style({ top: '35px' })),
        transition('false <=> true', animate('.2s ease-out'))
    ]),
    toggleNavSearch: trigger('toggleNavSearch', [
        state('true', style({ transform: 'translateY(0px)' })),
        state('false', style({ transform: 'translateY(-80px)' })),
        transition('false <=> true', animate('.3s ease-out'))
    ]),
    rotateIcon: trigger('rotateIcon', [
        state('true', style({ transform: 'rotate(0deg)' })),
        state('false', 
            style({ 
                transform: 'rotate(90deg)',
                color: 'rgb(252, 198, 97)'})),
        transition('false <=> true', animate('.3s ease-out'))
    ]),
}