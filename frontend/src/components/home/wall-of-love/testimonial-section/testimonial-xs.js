import Image from "next/image";
import React, { useEffect, useState } from "react";
import "./testimonial-section.css";
import { TweetMedia } from "react-tweet";

const TestimonialXS = ({ tweetId }) => {
    const [tweet, setTweet] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const formatLikes = Intl.NumberFormat('en-US', {
        notation: "compact",
        maximumFractionDigits: 1
    });

    const fetchTweet = async () => {
        try {
            const response = await fetch(`https://react-tweet.vercel.app/api/tweet/${tweetId}`);

            if (!response.ok) {
                throw new Error('Failed to fetch tweet');
            }

            const tweetData = await response.json();
            setTweet(tweetData.data);
            setIsLoading(false); // Set loading state to false once tweet is fetched
        } catch (error) {
            console.error('Error fetching tweet:', error);
        }
    };

    useEffect(() => {
        fetchTweet();
    }, [tweetId]);

    return (
        <div className={`testimonial-xs ${isLoading ? 'loading' : 'active'}`}>
            <div className="testimonial-header">
                <div className="testimonial-profile">
                    <img
                        src={tweet?.user.profile_image_url_https}
                        width={45}
                        height={45}
                        className="testimonial-userImage"
                        alt="userImage"
                    />
                    <div>
                        <h4 className="testimonial-name">{tweet?.user.name}</h4>
                        <p className="testimonial-userid">{tweet?.user.screen_name}</p>
                    </div>
                </div>
                <Image
                    src="/images/home/wall-of-love/twitter.svg"
                    width={22.25}
                    height={18.09}
                    alt="twitter"
                />
            </div>
            <p className="testimonial-content">{tweet?.text}</p>
            {tweet?.mediaDetails?.length ? (
                <TweetMedia tweet={tweet} />
            ) : null}
            <div className="testimonial-insights">
                <div className="testimonial-like-container">
                    <Image
                        className="testimonial-like-vector"
                        src="/images/home/wall-of-love/like.svg"
                        width={20}
                        height={20}
                    />
                    <div className="testimonial-like">{formatLikes.format(tweet?.favorite_count)}</div>
                </div>
                <div>
                    <p className="testimonial-date">{new Date(tweet?.created_at).toDateString()}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialXS;
