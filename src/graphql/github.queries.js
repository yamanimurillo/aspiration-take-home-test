import { gql } from "apollo-boost";

const getTopicQuery = gql`
    query getTopic ($searchTopic: String!){
        topic(name: $searchTopic) {
            name
            relatedTopics(first: 10) {
                id
                name
                stargazers {
                    totalCount
                }
            }
        }
    }
`;

export default getTopicQuery;