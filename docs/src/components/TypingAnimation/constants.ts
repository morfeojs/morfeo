export enum TypingStatus {
  Typing = 'Type',
  Waiting = 'Wait',
  Erasing = 'Erase',
}

export const TypingInterval = {
  [TypingStatus.Waiting]: 5000,
  [TypingStatus.Typing]: 100,
  [TypingStatus.Erasing]: 500,
};
