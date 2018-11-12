import React, { Component } from "react";
import TagCloud from 'react-tag-cloud';
import randomColor from 'randomcolor';


const styles = {
    large: {
      fontSize: 60,
      fontWeight: 'bold'
    },
    small: {
      opacity: 0.7,
      fontSize: 16
    }
  };
 
export default class KnowledgeCloud extends Component {
  render() {
    return (
      <TagCloud 
        style={{
          fontFamily: 'sans-serif',
          fontSize: 30,
          fontWeight: 'bold',
          fontStyle: 'italic',
          color: () => randomColor(),
          padding: 5,
          width: '100%',
          height: '100%'
        }}>
        <div style={{fontSize: 50}}>react</div>
        <div style={{color: 'green'}}>tag</div>
        <div style={styles.large}>Transformers</div>
        <div rotate={90}>cloud</div>
        ...
      </TagCloud>
    );
  }
}