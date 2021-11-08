import React from 'react';
import { observer } from 'mobx-react';
import Board from './Board/Board';
import GameInfo from './GameInfo/GameInfo';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

@observer
export default class Game extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="game-container">
        <ErrorBoundary>
          <Board />
        </ErrorBoundary>
        <ErrorBoundary>
          <GameInfo />
        </ErrorBoundary>
      </div>
    );
  }
}