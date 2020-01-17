// Imports: Dependencies
import 'react-native';
import React from 'react';
import App from '../App';
// Note: Test Renderer Must Be Required After react-native
import renderer from 'react-test-renderer';

// App Renders Correctly
it('App renders correctly', () => {
  renderer.create(<App />);
});
