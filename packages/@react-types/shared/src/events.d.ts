import {
  FocusEvent as ReactFocusEvent,
  KeyboardEvent as ReactKeyboardEvent,
  SyntheticEvent
} from 'react';

// Event bubbling can be problematic in real-world applications, so the default for React Spectrum components
// is not to propagate. This can be overridden by calling continuePropagation() on the event.
export type BaseEvent<T extends SyntheticEvent> = Omit<T, 'stopPropagation' | 'isPropagationStopped' | 'persist'> & {
  continuePropagation(): void
}

export type KeyboardEvent = BaseEvent<ReactKeyboardEvent>;
export type FocusEvent = BaseEvent<ReactFocusEvent>;

export type PointerType = 'mouse' | 'pen' | 'touch' | 'keyboard';
export interface PressEvent {
  type: 'pressstart' | 'pressend' | 'press',
  pointerType: PointerType,
  target: HTMLElement,
  shiftKey: boolean,
  ctrlKey: boolean,
  metaKey: boolean
}

export interface KeyboardEvents {
  onKeyDown?: (e: KeyboardEvent) => void,
  onKeyUp?: (e: KeyboardEvent) => void
}

export interface FocusEvents {
  onFocus?: (e: FocusEvent) => void,
  onBlur?: (e: FocusEvent) => void,
  onFocusChange?: (isFocused: boolean) => void
}

export interface PressEvents {
  onPress?: (e: PressEvent) => void,
  onPressStart?: (e: PressEvent) => void,
  onPressEnd?: (e: PressEvent) => void,
  onPressChange?: (isPressed: boolean) => void
}

export interface FocusableProps extends FocusEvents, KeyboardEvents {
  autoFocus?: boolean
}