import { render, screen, act } from '@testing-library/react';
import RelatedTopicsResults from '../components/related-topics-results/related-topics-results.component';
import { MockedProvider } from "@apollo/react-testing";
import getTopicQuery from '../graphql/github.queries';

const mocks = [
  {
    request: {
      query: getTopicQuery,
      variables: {
        searchTopic: "react"
      }
    },
    result: {
      data: {
        topic: {
          name: 'react',
          relatedTopics: [
            {
              id: 1,
              name: 'Angular',
              stargazers: {
                totalCount: 100,
              },
            },
          ],
        }
      }
    }
  },
]

describe("Related topic results component", () => {
  it("should render related topics results", async () => {

    const { container } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <RelatedTopicsResults searchTopic='react'></RelatedTopicsResults>
      </MockedProvider>);

    expect(await screen.findByText('Angular')).toBeInTheDocument();

  });
});