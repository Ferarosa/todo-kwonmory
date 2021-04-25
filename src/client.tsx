import React from 'react';
import { render } from 'react-dom';

import './style.css';

import TodoListPage from '@pages/TodoListPage';

render(<TodoListPage />, document.querySelector('#app'));
