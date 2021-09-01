import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class IntroductionComponent implements OnInit {
  checked = false;
  constructor(private router: Router, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {}

  toggle(checked: boolean) {
    this.checked = checked;
    this.cd.detectChanges();
  }
  next() {
    this.router.navigate(['/connect']);
  }
}
