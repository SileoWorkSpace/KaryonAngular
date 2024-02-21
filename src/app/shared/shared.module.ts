import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import { AngularEditorModule } from "@kolkov/angular-editor";
import { GalleryModule } from "@ks89/angular-modal-gallery";
import {
  NgbAccordionModule,
  NgbActiveModal,
  NgbModule,
  NgbNavModule,
  NgbPaginationModule,
  NgbRatingModule,
  NgbTooltipModule,
  NgbTypeahead,
} from "@ng-bootstrap/ng-bootstrap";
import { NgSelectModule } from "@ng-select/ng-select";
import { TranslateModule } from "@ngx-translate/core";
import { NgApexchartsModule } from "ng-apexcharts";
import { LightboxModule } from "ng-gallery/lightbox";
import { BarRatingModule } from "ngx-bar-rating";
import { NgxDropzoneModule } from "ngx-dropzone";
import { CarouselModule } from "ngx-owl-carousel-o";
import { NgxPrintModule } from "ngx-print";
import { NgxSliderModule } from "ngx-slider-v2";

import { ToastrModule } from "ngx-toastr";
import { BreadcrumbComponent } from "./components/breadcrumb/breadcrumb.component";
import { CommanSvgIconComponent } from "./components/comman-svg-icon/comman-svg-icon.component";
import { ColorPickerComponent } from "./components/customiser/color-picker/color-picker.component";
import { CustomiserComponent } from "./components/customiser/customiser.component";
import { QuickOptionComponent } from "./components/customiser/quick-option/quick-option.component";
import { FeatherIconsComponent } from "./components/feather-icons/feather-icons.component";
import { FooterComponent } from "./components/footer/footer.component";
import { BookmarkComponent } from "./components/header/bookmark/bookmark.component";
import { CartComponent } from "./components/header/cart/cart.component";
import { HeaderComponent } from "./components/header/header.component";
import { LanguageComponent } from "./components/header/language/language.component";
import { MessagesComponent } from "./components/header/messages/messages.component";
import { NotiticationsComponent } from "./components/header/notitications/notitications.component";
import { ProfileComponent } from "./components/header/profile/profile.component";
import { SearchComponent } from "./components/header/search/search.component";
import { ThemeModeComponent } from "./components/header/theme-mode/theme-mode.component";
import { ContentComponent } from "./components/layout/content/content.component";
import { FullComponent } from "./components/layout/full/full.component";
import { LoaderComponent } from "./components/loader/loader.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { SvgIconComponent } from "./components/svg-icon/svg-icon.component";
import { TapToTopComponent } from "./components/tap-to-top/tap-to-top.component";
import { ClickOutsideDirective } from './directive/click-outside.directive';

@NgModule({
  declarations: [
    ContentComponent,
    FullComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    TapToTopComponent,
    FeatherIconsComponent,
    SearchComponent,
    NotiticationsComponent,
    BookmarkComponent,
    MessagesComponent,
    CartComponent,
    SvgIconComponent,
    BreadcrumbComponent,
    ThemeModeComponent,
    ProfileComponent,
    CustomiserComponent,
    QuickOptionComponent,
    ColorPickerComponent,
    CommanSvgIconComponent,
    LanguageComponent,
    ClickOutsideDirective,
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule.forRoot(),
    ToastrModule.forRoot(),
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    NgxDropzoneModule,
    BarRatingModule,
    CarouselModule,
    NgxSliderModule,
    NgbTooltipModule,
    NgApexchartsModule,
    NgbNavModule,
    NgxPrintModule,
    LeafletModule,
    GalleryModule,
    AngularEditorModule,
    NgbAccordionModule,
    NgbRatingModule,
    NgbTypeahead,
    LightboxModule,
    NgbPaginationModule,
  ],
  exports: [
    FeatherIconsComponent,
    TapToTopComponent,
    SvgIconComponent,
    CommanSvgIconComponent,
    LoaderComponent,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NgSelectModule,
    NgxDropzoneModule,
    BarRatingModule,
    CarouselModule,
    NgxSliderModule,
    NgbTooltipModule,
    NgApexchartsModule,
    NgbNavModule,
    NgxPrintModule,
    LeafletModule,
    GalleryModule,
    AngularEditorModule,
    NgbAccordionModule,
    NgbRatingModule,
    NgbTypeahead,
    LightboxModule,
    NgbPaginationModule,
    ClickOutsideDirective
  ],

  providers: [NgbActiveModal],
})
export class SharedModule {}
