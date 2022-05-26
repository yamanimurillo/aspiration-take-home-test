import { render, screen } from '@testing-library/react';
import RelatedTopic from '../components/related-topic/related-topic.component';

const topic = {
  name: 'react',
  stargazers: { totalCount: 1000 }
};

const renderRelatedTopic = () => {
  const { container } = render(<RelatedTopic topic={topic}></RelatedTopic>);
  return container;
};

describe("Related topic component", () => {
  
  it("should render topic div container", () => {
    const div = renderRelatedTopic().getElementsByClassName('topic')[0];
    expect(div).toBeInTheDocument();
  });

  it("should render logo", () => {
    const logo = renderRelatedTopic().getElementsByClassName('logo')[0];
    expect(logo).toBeInTheDocument();
  });

  it("should render name", () => {
    const name = renderRelatedTopic().getElementsByClassName('name')[0];
    expect(name).toBeInTheDocument();
  });

  it("should render stars", () => {
    const stars = renderRelatedTopic().getElementsByClassName('stars')[0];
    expect(stars).toBeInTheDocument();
  });

});