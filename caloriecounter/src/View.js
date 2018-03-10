import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';
import app from './App';

const { pre, div, h1, button, label, input, form } = hh(h);

function fieldSet(labelText, inputValue) {
  return div(
    [
      label({ className: 'db mb1' }, labelText),
      input({
        className: 'pa2 input-reset ba w-100 mb2',
        type: 'text',
        value: inputValue,
      })
    ],
  );
}

function formView(dispatch, model) {
  const { description } = model;
  return form(
    {
      className: 'w-100 mv2',
    },
    [
      fieldSet('Meal', description),
    ],
  );
  // return button({ className: 'f3 pv2 ph3 bg-blue white bn' },
  //   'Add Meal');
};

function view(dispatch, model) {
  return div({ className: 'mw6 center' }, [
    h1({ className: 'f2 pv2 bb' }, 'Calorie counter'),
    formView(dispatch, model),
    pre(JSON.stringify(model, null, 2))
  ]);
};

export default view;