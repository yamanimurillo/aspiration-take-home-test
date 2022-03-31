import { Query } from "react-apollo";
import { ThreeDots } from "react-loader-spinner";
import getTopicQuery from '../../graphql/github.queries';
import RelatedTopic from "../related-topic/related-topic.component";
import './related-topics-results.styles.scss';

const Loader = () => (
    <div className='loader'>
        <ThreeDots heigth="100" width="100" color="#014F86" ariaLabel="loading-indicator" />
    </div>);

const Error = () => <div>Error</div>;

const RelatedTopicsResults = ({ searchTopic, onTopicSelected }) => {

    const variables = { 'searchTopic': searchTopic.toLowerCase() };

    return (
        <div>
            {
                searchTopic.length ?
                    <div className='results'>
                        <h3 className='title'>Results for topic "{searchTopic.toLowerCase()}"</h3>
                        <Query query={getTopicQuery} variables={variables}>
                            {
                                ({ data, loading, error }) => {
                                    if (loading) return <Loader></Loader>
                                    if (error) return <Error></Error>

                                    return (

                                        <div>
                                            {
                                                data.topic && data.topic.relatedTopics.length > 0 ?
                                                    data.topic.relatedTopics.map(topic => {
                                                        return (
                                                            <RelatedTopic key={topic.id} topic={topic} onTopicSelected={onTopicSelected} />
                                                        )
                                                    }) :
                                                    <span>
                                                        Whoooaaa! I couldn't find any results.
                                                        <br></br>
                                                        I have failed you =(
                                                    </span>
                                            }
                                        </div>

                                    );

                                }
                            }
                        </Query>
                    </div> :
                    <span><br></br>Please, write something you want me to find :)</span>
            }
        </div>
    );
};

export default RelatedTopicsResults;