import React from 'react';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A meetup',
        image: 'https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc4NjAzNTM2MTQ4MTkx/hith-eiffel-tower-istock_000016468972large-2.jpg',
        address: 'Some address 10, 123456 Some City',
        description: 'This is a meeting'
    },
    {
        id: 'm2',
        title: 'A second meetup',
        image: 'https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc4NjAzNTM2MTQ4MTkx/hith-eiffel-tower-istock_000016468972large-2.jpg',
        address: 'Some address 10, 123456 Some City',
        description: 'This is a meeting'
    },
    {
        id: 'm3',
        title: 'A third meetup',
        image: 'https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc4NjAzNTM2MTQ4MTkx/hith-eiffel-tower-istock_000016468972large-2.jpg',
        address: 'Some address 10, 123456 Some City',
        description: 'This is a meeting'
    }
];

const HomePage = () => {
    return (
        <MeetupList meetups={DUMMY_MEETUPS} />
    )
}

export default HomePage;
