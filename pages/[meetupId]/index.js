import { MongoClient, ObjectId } from 'mongodb';
import Head from 'next/head';
import React from 'react';
import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupsDetails = ({ meetupData }) => {
    return (
        <>
            <Head>
                <title>{meetupData.title}</title>
                <meta
                    name="description"
                    content={meetupData.description} />
            </Head>
            <MeetupDetail
                image={meetupData.image}
                title={meetupData.title}
                address={meetupData.address}
                description={meetupData.description}
            />
        </>
    )
}

export async function getStaticPaths() {
    // fetch data from an API
    const client = await MongoClient.connect('mongodb+srv://fireywolf:test1234@cluster0.eg0cz.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
    client.close();

    return {
        fallback: 'blocking',
        paths: meetups.map(meetup => ({
            params: { meetupId: meetup._id.toString() }
        }))
    }
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;
    // fetch data from an API
    const client = await MongoClient.connect('mongodb+srv://fireywolf:test1234@cluster0.eg0cz.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const selectedMeetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) });
    console.log(selectedMeetup)
    client.close();

    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description
            }
        }
    }
}

export default MeetupsDetails;
