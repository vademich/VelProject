import { Component } from '@angular/core';
import { BreadcrampsComponent } from "../../components/breadcramps/breadcramps.component";

@Component({
  selector: 'app-tracks',
  standalone: true,
  imports: [BreadcrampsComponent],
  templateUrl: './tracks.component.html',
  styleUrl: './tracks.component.less'
})
export class TracksComponent {

}
