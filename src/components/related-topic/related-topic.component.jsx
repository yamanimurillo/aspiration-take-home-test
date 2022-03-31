import './related-topic.styles.scss';

const RelatedTopic = ({ topic, onTopicSelected }) => {
    return (
        <div className='topic' onClick={() => { onTopicSelected(topic.name); }}>

            <div className='logo'>
                <img
                    src={`https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/${topic.name}/${topic.name}.png`}
                    onError={e => e.target.src = 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' } />
                </div>

            <div className='name'>{topic.name}</div>

            <div className='stars'>
                <span className='icon'>{'\u2729'}</span>
                <span className='count'>{topic.stargazers.totalCount}</span>
            </div>

        </div>
    );
};

export default RelatedTopic;