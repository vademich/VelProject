import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { BikesComponent } from './pages/bikes/bikes.component';
import { TracksComponent } from './pages/tracks/tracks.component';
import { BikeEquipComponent } from './pages/bike-equip/bike-equip.component';
import { BodyEquipComponent } from './pages/body-equip/body-equip.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { CartComponent } from './pages/cart/cart.component';
import { BikeDetailsComponent } from './pages/bike-details/bike-details.component';
import { TrackDetailsComponent } from './pages/track-details/track-details.component';

export const routes: Routes = [
    { path: "", component: LandingComponent },
    { path: "tracks", component: TracksComponent },
    { path: "trackId", component: TrackDetailsComponent },
    // { path: "track/:id", component: TrackDetailsComponent },
    { path: "bikes", component: BikesComponent },
    { path: "bikeId", component: BikeDetailsComponent },
    // { path: "bike/:id", component: BikeDetailsComponent },
    { path: "bike-equip", component: BikeEquipComponent },
    { path: "body-equip", component: BodyEquipComponent },
    { path: "delivery", component: DeliveryComponent },
    { path: "cart", component: CartComponent },
];
