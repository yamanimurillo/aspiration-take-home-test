import { useState } from 'react';
import RelatedTopicsResults from '../related-topics-results/related-topics-results.component';
import './App.scss';
import CustomButton from './custom-button.styles';
import CustomInput from './custom-input.styles';

function App() {

  const [searchTopic, setSearchTopic] = useState('React');
  const [searchTopicField, setSearchTopicField] = useState('React');
  const handleOnChange = (e) => setSearchTopicField(e.target.value);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setSearchTopic(searchTopicField);
  }

  const handleOnTopicSelected = (topic) => {
    setSearchTopicField(topic);
    setSearchTopic(topic);
  }

  return (
    <div className="app">

      <h1 className='title'>GitHub Topic Explorer</h1>

      <form className='search' onSubmit={handleOnSubmit}>
        <CustomInput
          type='search' autoComplete='false' placeholder='Search on GitHub...' maxLength='50' autoFocus
          value={searchTopicField}
          onChange={handleOnChange} />

        <CustomButton type='submit'>Let's search!</CustomButton>
      </form>

      <RelatedTopicsResults searchTopic={searchTopic} onTopicSelected={handleOnTopicSelected} />

    </div>
  );
}

export default App;
