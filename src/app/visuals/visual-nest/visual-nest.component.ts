import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TweenLite, Cubic, TimelineLite } from 'gsap';
import { VisualNestService } from './visual-nest.service';

@Component({
  selector: 'app-visual-nest',
  templateUrl: './visual-nest.component.html',
  styleUrls: ['./visual-nest.component.scss'],
  providers: [VisualNestService]
})
export class VisualNestComponent implements OnInit {
  @ViewChild('leftEye') leftEye: ElementRef;
  @ViewChild('leftPupil') leftPupil: ElementRef;
  @ViewChild('rightEye') rightEye: ElementRef;
  @ViewChild('rightPupil') rightPupil: ElementRef;

  visualStart = this.visualNestService.visualStart;
  visualFinal = this.visualNestService.visualFinal;

  bindingNumber = "0";
  pathAttr = "'visualNestService.visualsNest[0].frameColor.d'";
  
  constructor(public visualNestService:VisualNestService) { }

  ngOnInit() {
    this.blinkStart();
  }

  blinkStart() {
    let timeline = new TimelineLite();
    timeline.delay(2);
    timeline
      .to(this.leftEye.nativeElement, 0.1, {attr: {d: this.visualNestService.visualsNest[this.visualStart].eyeAnimation.leftEye[1]}, ease: Cubic.easeInOut}, "blink0")
      .to(this.leftEye.nativeElement, 0.1, {attr: {d: this.visualNestService.visualsNest[this.visualStart].eyeAnimation.leftEye[2]}, ease: Cubic.easeInOut}, "blink1")
      .to(this.leftEye.nativeElement, 0.1, {attr: {d: this.visualNestService.visualsNest[this.visualStart].eyeAnimation.leftEye[1]}, ease: Cubic.easeInOut}, "blink2")
      .to(this.leftEye.nativeElement, 0.1, {attr: {d: this.visualNestService.visualsNest[this.visualStart].eyeAnimation.leftEye[0]}, ease: Cubic.easeInOut}, "blink3")

      .to(this.leftPupil.nativeElement, 0.1, {attr: {d: this.visualNestService.visualsNest[this.visualStart].eyeAnimation.leftPupil[1]}, ease: Cubic.easeInOut}, "blink0")
      .to(this.leftPupil.nativeElement, 0.1, {attr: {d: this.visualNestService.visualsNest[this.visualStart].eyeAnimation.leftPupil[2]}, ease: Cubic.easeInOut}, "blink1")
      .to(this.leftPupil.nativeElement, 0.1, {attr: {d: this.visualNestService.visualsNest[this.visualStart].eyeAnimation.leftPupil[1]}, ease: Cubic.easeInOut}, "blink2")
      .to(this.leftPupil.nativeElement, 0.1, {attr: {d: this.visualNestService.visualsNest[this.visualStart].eyeAnimation.leftPupil[0]}, ease: Cubic.easeInOut}, "blink3")

      .to(this.rightEye.nativeElement, 0.1, {attr: {d: this.visualNestService.visualsNest[this.visualStart].eyeAnimation.rightEye[1]}, ease: Cubic.easeInOut}, "blink0")
      .to(this.rightEye.nativeElement, 0.1, {attr: {d: this.visualNestService.visualsNest[this.visualStart].eyeAnimation.rightEye[2]}, ease: Cubic.easeInOut}, "blink1")
      .to(this.rightEye.nativeElement, 0.1, {attr: {d: this.visualNestService.visualsNest[this.visualStart].eyeAnimation.rightEye[1]}, ease: Cubic.easeInOut}, "blink2")
      .to(this.rightEye.nativeElement, 0.1, {attr: {d: this.visualNestService.visualsNest[this.visualStart].eyeAnimation.rightEye[0]}, ease: Cubic.easeInOut}, "blink3")

      .to(this.rightPupil.nativeElement, 0.1, {attr: {d: this.visualNestService.visualsNest[this.visualStart].eyeAnimation.rightPupil[1]}, ease: Cubic.easeInOut}, "blink0")
      .to(this.rightPupil.nativeElement, 0.1, {attr: {d: this.visualNestService.visualsNest[this.visualStart].eyeAnimation.rightPupil[2]}, ease: Cubic.easeInOut}, "blink1")
      .to(this.rightPupil.nativeElement, 0.1, {attr: {d: this.visualNestService.visualsNest[this.visualStart].eyeAnimation.rightPupil[1]}, ease: Cubic.easeInOut}, "blink2")
      .to(this.rightPupil.nativeElement, 0.1, {attr: {d: this.visualNestService.visualsNest[this.visualStart].eyeAnimation.rightPupil[0]}, ease: Cubic.easeInOut}, "blink3")
      ;
  }

  blinkFinal() {
    let timeline = new TimelineLite();
    timeline.delay(2);
    timeline
      .to(this.leftEye.nativeElement, 0.1, {attr: {d: this.visualNestService.visualsNest[this.visualFinal].eyeAnimation.leftEye[1]}, ease: Cubic.easeInOut}, "blink0")
      .to(this.leftEye.nativeElement, 0.1, {attr: {d: this.visualNestService.visualsNest[this.visualFinal].eyeAnimation.leftEye[2]}, ease: Cubic.easeInOut}, "blink1")
      .to(this.leftEye.nativeElement, 0.1, {attr: {d: this.visualNestService.visualsNest[this.visualFinal].eyeAnimation.leftEye[1]}, ease: Cubic.easeInOut}, "blink2")
      .to(this.leftEye.nativeElement, 0.1, {attr: {d: this.visualNestService.visualsNest[this.visualFinal].eyeAnimation.leftEye[0]}, ease: Cubic.easeInOut}, "blink3")

      .to(this.leftPupil.nativeElement, 0.1, {attr: {d: this.visualNestService.visualsNest[this.visualFinal].eyeAnimation.leftPupil[1]}, ease: Cubic.easeInOut}, "blink0")
      .to(this.leftPupil.nativeElement, 0.1, {attr: {d: this.visualNestService.visualsNest[this.visualFinal].eyeAnimation.leftPupil[2]}, ease: Cubic.easeInOut}, "blink1")
      .to(this.leftPupil.nativeElement, 0.1, {attr: {d: this.visualNestService.visualsNest[this.visualFinal].eyeAnimation.leftPupil[1]}, ease: Cubic.easeInOut}, "blink2")
      .to(this.leftPupil.nativeElement, 0.1, {attr: {d: this.visualNestService.visualsNest[this.visualFinal].eyeAnimation.leftPupil[0]}, ease: Cubic.easeInOut}, "blink3")

      .to(this.rightEye.nativeElement, 0.1, {attr: {d: this.visualNestService.visualsNest[this.visualFinal].eyeAnimation.rightEye[1]}, ease: Cubic.easeInOut}, "blink0")
      .to(this.rightEye.nativeElement, 0.1, {attr: {d: this.visualNestService.visualsNest[this.visualFinal].eyeAnimation.rightEye[2]}, ease: Cubic.easeInOut}, "blink1")
      .to(this.rightEye.nativeElement, 0.1, {attr: {d: this.visualNestService.visualsNest[this.visualFinal].eyeAnimation.rightEye[1]}, ease: Cubic.easeInOut}, "blink2")
      .to(this.rightEye.nativeElement, 0.1, {attr: {d: this.visualNestService.visualsNest[this.visualFinal].eyeAnimation.rightEye[0]}, ease: Cubic.easeInOut}, "blink3")

      .to(this.rightPupil.nativeElement, 0.1, {attr: {d: this.visualNestService.visualsNest[this.visualFinal].eyeAnimation.rightPupil[1]}, ease: Cubic.easeInOut}, "blink0")
      .to(this.rightPupil.nativeElement, 0.1, {attr: {d: this.visualNestService.visualsNest[this.visualFinal].eyeAnimation.rightPupil[2]}, ease: Cubic.easeInOut}, "blink1")
      .to(this.rightPupil.nativeElement, 0.1, {attr: {d: this.visualNestService.visualsNest[this.visualFinal].eyeAnimation.rightPupil[1]}, ease: Cubic.easeInOut}, "blink2")
      .to(this.rightPupil.nativeElement, 0.1, {attr: {d: this.visualNestService.visualsNest[this.visualFinal].eyeAnimation.rightPupil[0]}, ease: Cubic.easeInOut}, "blink3")
      ;
  }
}
