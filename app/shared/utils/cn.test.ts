import { cn } from './cn';

describe('cn utility function', () => {
  test('merges simple class names', () => {
    expect(cn('class1', 'class2')).toBe('class1 class2');
  });

  test('handles conditional class names', () => {
    expect(cn('class1', false && 'class2', 'class3')).toBe('class1 class3');
  });

  test('resolves conflicts in Tailwind CSS class names', () => {
    expect(cn('p-4', 'p-2')).toBe('p-2');
    expect(cn('text-lg', 'text-sm')).toBe('text-sm');
  });

  test('handles empty inputs', () => {
    expect(cn()).toBe('');
  });

  test('handles mixed valid and invalid inputs', () => {
    expect(cn('class1', null, undefined, 'class2')).toBe('class1 class2');
  });
});
