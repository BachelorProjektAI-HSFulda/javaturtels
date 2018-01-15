﻿import { Directive, ElementRef, Renderer, Input } from '@angular/core';

@Directive({
    selector: '[animateItemSliding]'
})
export class AnimateItemSliding {

    @Input('animateItemSliding') shouldAnimate: boolean;

    constructor(public element: ElementRef, public renderer: Renderer) {

    }

    ngOnInit() {

        if (this.shouldAnimate) {

            this.renderer.setElementClass(this.element.nativeElement, 'active-slide', true);
            this.renderer.setElementClass(this.element.nativeElement, 'active-options-right', true);

            // Wait to apply animation
            setTimeout(() => {
                this.renderer.setElementClass(this.element.nativeElement.firstElementChild, 'itemSlidingAnimation', true);
                //remove animation for next renderings
                setTimeout(() => {
                    this.renderer.setElementClass(this.element.nativeElement, 'active-slide', false);
                    this.renderer.setElementClass(this.element.nativeElement, 'active-options-right', false);
                    this.renderer.setElementClass(this.element.nativeElement.firstElementChild, 'itemSlidingAnimation', false);
                }, 1000);
            }, 1000);

        }

    }

}