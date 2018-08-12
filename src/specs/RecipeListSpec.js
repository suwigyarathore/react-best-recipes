import React from 'react';
import renderer from 'react-test-renderer';
import RecipeList from '../component/RecipeList';

const testRecipes = [
  {
    id: 1,
    name: 'Test Recipe',
    category: 'Test Category',
  },
  {
    id: 2,
    name: 'Test Recipe 2',
    category: 'Test Category 2',
  },
];

describe('<RecipeList/>', () => {
  test('Should not break when no recipes passed', () => {
    const component = renderer.create(<RecipeList />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Should render when recipes passed', () => {
    const component = renderer.create(<RecipeList recipes={testRecipes} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Should render favorite state correctly', () => {
    const component = renderer.create(
      <RecipeList recipes={testRecipes} favorites={[1]} />,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
