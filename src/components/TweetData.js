import images from '../images/Images.js';



const tweetData = [
    {
        userName: 'The Secret',
        userHandle: '@thesecret',
        thumbnailImage: images.mindset,
        msg: 'Trust in the Universe when there is a change in your life. Change means something greater is coming!',
        msgImage: images.change,
        time: '20min',
        comments: 100,
        reTweets: 300,
        likes: 145,
        verified: true,
        tag: 'positivity'
    },
    {
        userName: 'Nature`s Beauty',
        userHandle: '@naturesbeauty',
        thumbnailImage: images.nature,
        msg: 'Fantastic landscape in Obwalden-Switzerland.',
        msgImage: images.natureSwiss,
        time: 'Feb 24',
        comments: 123,
        reTweets: 221,
        likes: 54,
        verified: false,
        tag: 'nature'
    }
    
];

export default tweetData;