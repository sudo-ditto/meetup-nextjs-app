import React from 'react';
import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupsDetails = () => {
    return (
        <MeetupDetail
            image="https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc4NjAzNTM2MTQ4MTkx/hith-eiffel-tower-istock_000016468972large-2.jpg"
            title="First Meetup"
            address="Some Street 5, 123456 Some City"
            description="Meetup description"
        />
    )
}

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: 'm1'
                }
            },
            {
                params: {
                    meetupId: 'm2'
                }
            }
        ]
    }
}

export async function getStaticProps(context) {
    // fetch data for a single meetup

    const meetupId = context.params.meetupId;
    console.log(meetupId);
    return {
        props: {
            meetupData: {
                image: 'https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc4NjAzNTM2MTQ4MTkx/hith-eiffel-tower-istock_000016468972large-2.jpg',
                id: meetupId,
                address: 'Some Street 5, 123456 Some City',
                description: 'Meetup description'
            }
        }
    }
}

export default MeetupsDetails;
