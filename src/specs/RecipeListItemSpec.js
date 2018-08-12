import React from 'react';
import renderer from 'react-test-renderer';
import RecipeListItem from '../component/RecipeListItem';

const testRecipe = {
  id: 1,
  name: 'Test Recipe',
  category: 'Test Category',
};

describe('<RecipeListItem />', () => {
  test('Should not break if no recipe passed ', () => {
    const component = renderer.create(<RecipeListItem />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Should correctly render recipe', () => {
    const component = renderer.create(<RecipeListItem recipe={testRecipe} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Should render favorite state in list', () => {
    const component = renderer.create(
      <RecipeListItem recipe={testRecipe} favorited />,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
