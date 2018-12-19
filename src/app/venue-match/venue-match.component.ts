import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
    selector: 'app-venue-match',
    templateUrl: './venue-match.component.html',
    styleUrls: ['./venue-match.component.css']
})
export class VenueMatchComponent implements OnInit, AfterViewInit {

    games_list = [
        [
            {
                venue_name: 'Fiton Sports',
                time: '6:00 am - 7:00 am',
                description: 'Weekday Games',
                image: 'assets/img/venue/fiton-square.png'
            },
            {
                venue_name: 'Flying Birdie Badminton Arena',
                time: '7:30 pm - 9:30 pm',
                description: 'Weekday Games (Intermediate and above)',
                image: 'assets/img/venue/flying-birdie-square.jpg'
            }, 
            {
                venue_name: 'The Sports Club Bengaluru',
                time: '7:30 pm - 9:30 pm',
                description: 'Weekday Games (Intermediate and above)',
                image: 'assets/img/venue/sports-club-square.jpg'
            }
        ],
        [
            {
                venue_name: 'Fiton Sports',
                time: '6:00 am - 8:00 am',
                description: 'Weekend Fun',
                image: 'assets/img/venue/fiton-square.png'
            },
            {
                venue_name: 'Adena Sports',
                time: '7:30 pm - 8:30 pm',
                description: 'Weekday Games (Intermediate and above)',
                image: 'assets/img/venue/adena-square.jpg'
            },
            {
                venue_name: 'SuryaMaaya Sports Academy',
                time: '7:00 pm - 9:00 pm',
                description: 'Weekday Games (Intermediate and above)',
                image: 'assets/img/venue/suryamaaya-square.jpg'
            }
        ],
        [
            {
                venue_name: 'E-Relax Badminton Club',
                time: '5:30 am - 7:30 am',
                description: 'Weekday Games',
                image: 'assets/img/venue/e-relax-square.jpg'
            },
            {
                venue_name: 'SuryaMaaya Sports Academy',
                time: '6:00 am - 7:00 am',
                description: 'Weekday Games',
                image: 'assets/img/venue/suryamaaya-square.jpg'
            }
        ]
    ]

    constructor() { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        // $('.popup-img').magnificPopup({
        //     type: 'image',
        //     gallery: {
        //         enabled: true
        //     }
        // });
    }

}
