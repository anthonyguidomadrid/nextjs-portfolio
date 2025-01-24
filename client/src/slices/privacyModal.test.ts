import privacyModalReducer, {
  openPrivacyModal,
  closePrivacyModal,
} from './privacyModal';

describe('privacyModal', () => {
  it('should return the initial state', () => {
    const initialState = { isOpen: false };
    expect(privacyModalReducer(undefined, { type: '@@INIT' })).toEqual(
      initialState
    );
  });

  it('should handle openPrivacyModal action', () => {
    const initialState = { isOpen: false };
    const newState = privacyModalReducer(initialState, openPrivacyModal());
    expect(newState.isOpen).toBe(true);
  });

  it('should handle closePrivacyModal action', () => {
    const initialState = { isOpen: true };
    const newState = privacyModalReducer(initialState, closePrivacyModal());
    expect(newState.isOpen).toBe(false);
  });
});
