import React from 'react';
import { Link } from 'react-router-dom';


// conditionally renders thought data; data is destructured to avoid having to use 'props.thoughts' and 'props.title' throughout JSX code
const messageList = ({ userName, userCompany, userEmail, userMessage, purpose, createdAt }) => {
    // first checking to see whether thoughts array contains data
    if (!tstMessage.length) {
        return <h3>No Thoughts Yet</h3>;
    }

    return (
        <div>
            {/* instructs ThoughtList component to receive two props: 'title' and 'thoughts' array */}
            <h3>{title}</h3>
            {thoughts &&
                thoughts.map(thought => (
                    // 'key' is required on mapped data to help React internally track data changes for re-rendering
                    <div key={thought._id} className='card mb-3'>
                        <p className='card-header'>
                            <Link
                                to={`/profile/${thought.username}`}
                                style={{ fontWeight: 700 }}
                                className='text-light'
                            >
                                {thought.username}
                            </Link>{' '}
                        thought on {thought.createdAt}
                        </p>
                        <div className='card-body'>
                            <Link to={`/thought/${thought._id}`}>
                                <p>{thought.thoughtText}</p>
                                <p className='mb-0'>
                                    Reactions: {thought.reactionCount} || Click to{' '}
                                    {thought.reactionCount ? 'see' : 'start'} the discussion!
                        </p>
                            </Link>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default ThoughtList;