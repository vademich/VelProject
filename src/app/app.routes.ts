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
import { TracksContainerComponent } from './pages/tracks/tracks-container/tracks-container.component';
import { FreeRideComponent } from './pages/tracks/free-ride/free-ride.component';
import { AdditiveServiceComponent } from './pages/additive-service/additive-service.component';

export const routes: Routes = [
    { path: "", component: LandingComponent },
    { path: "additive-service", component: AdditiveServiceComponent },
    { path: "tracks", component: TracksContainerComponent },
    { path: "tracks/free-ride", component: FreeRideComponent },
    {
        path: "bikes",
        component: BikesComponent,
        children: [{ path: ":id", component: BikeDetailsComponent }]
    },
    { path: "bike-equip", component: BikeEquipComponent },
    { path: "body-equip", component: BodyEquipComponent },
    { path: "delivery", component: DeliveryComponent },
    { path: "cart", component: CartComponent },
];
