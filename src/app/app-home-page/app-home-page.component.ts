import { Component, OnInit } from '@angular/core';
import { AppHomePageBaseComponent } from "@baseapp/app-home-page/app-home-page-base.component";
import { AppHomeBaseService } from '@baseapp/app-home-page/app-home.service.base';
import { AppUtilBaseService } from "@baseapp/app-util.base.service";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: '../../../base/app/app-home-page/app-home-page-base.component.html',
  styleUrls: ['../../../base/app/app-home-page/app-home-page-base.component.scss']
})
export class AppHomePageComponent extends AppHomePageBaseComponent {

  constructor(override bs: AppHomeBaseService, override utilBase: AppUtilBaseService, override _sanitize: DomSanitizer) {
    super(bs, utilBase, _sanitize)
  }

  override displayMenus: boolean = false;

  ngOnInit(): void {
    super.onInit();
  }

}
