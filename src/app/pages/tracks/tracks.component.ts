import { Component } from '@angular/core';
import { BreadcrampsComponent } from "../../components/breadcramps/breadcramps.component";
import { SwitchtabComponent } from "../../components/switchtab/switchtab.component";

@Component({
  selector: 'app-tracks',
  standalone: true,
  imports: [BreadcrampsComponent, SwitchtabComponent],
  templateUrl: './tracks.component.html',
  styleUrl: './tracks.component.less'
})
export class TracksComponent {

}
